// Fetches the latest videos from the Baby Mo YouTube channel and writes
// public/data/videos.json. Runs at build time (prebuild hook) and on a
// daily GitHub Actions cron.
//
// Requires env var YOUTUBE_API_KEY. If missing, the script writes a
// minimal fallback file built from the editorial overlay so the site
// never breaks during local dev or unconfigured CI.
//
// Quota cost per run:
//   1 unit (channels.list)
// + 1 unit (playlistItems.list, 1 page of 50)
// + 1 unit (videos.list, batched, all ids)
// = ~3 quota units / run.
// Default free quota: 10,000 units/day → ~3,000 daily runs possible.

import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";

const ROOT = process.cwd();
const OUT = join(ROOT, "public/data/videos.json");
const OVERLAY_FILE = join(ROOT, "lib/youtube/video-overlay.ts");

const HANDLE = process.env.BABYMO_YT_HANDLE ?? "babymo.official";
const API_KEY = process.env.YOUTUBE_API_KEY;
const MAX_VIDEOS = 50;

// ────────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────────
function parseDuration(iso) {
  if (!iso) return { display: "", seconds: 0 };
  const m = iso.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if (!m) return { display: "", seconds: 0 };
  const h = parseInt(m[1] ?? "0", 10);
  const min = parseInt(m[2] ?? "0", 10);
  const s = parseInt(m[3] ?? "0", 10);
  const seconds = h * 3600 + min * 60 + s;
  const pad = (n) => String(n).padStart(2, "0");
  const display = h > 0 ? `${h}:${pad(min)}:${pad(s)}` : `${min}:${pad(s)}`;
  return { display, seconds };
}

function bestThumbnail(thumbs) {
  // maxres → standard → high → medium → default
  return (
    thumbs?.maxres?.url ??
    thumbs?.standard?.url ??
    thumbs?.high?.url ??
    thumbs?.medium?.url ??
    thumbs?.default?.url ??
    ""
  );
}

async function api(url) {
  const r = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!r.ok) {
    const body = await r.text().catch(() => "");
    throw new Error(`YT API ${r.status}: ${body.slice(0, 200)}`);
  }
  return r.json();
}

// Known titles/durations for the starter videos — used in the fallback
// path so the site doesn't ship blank cards before YOUTUBE_API_KEY is set.
// Real API data wins when available. Verified 2026-05-27 against the live API.
const KNOWN_DEFAULTS = {
  orXDAOHAKw8: { title: "Doa Sebelum Tidur - Baby Mo",            duration: "0:32", durationSeconds: 32 },
  L6bXkRuO5vc: { title: "Doa Bangun Tidur - Baby Mo",             duration: "0:42", durationSeconds: 42 },
  cmK8ruUiCbA: { title: "Doa Sebelum Makan - Baby Mo",            duration: "0:40", durationSeconds: 40 },
  X6ZGk_e7A00: { title: "Doa Sesudah Makan - Baby Mo",            duration: "0:42", durationSeconds: 42 },
  BhLRQP_Nfdk: { title: "Cari dan Temukan Perbedaan Bareng Baby Mo", duration: "17:27", durationSeconds: 1047 },
  "9wa8_JPlkP0": { title: "Lagu 1 Baby Mo - Bismillah Dulu",      duration: "2:00", durationSeconds: 120 },
  BKZLVWBRnL8: { title: "INTRO BABY MO VERSI 1",                  duration: "0:08", durationSeconds: 8 },
};

// ────────────────────────────────────────────────────────────────────
// Fallback: build a minimal videos.json from the overlay keys alone.
// Used when YOUTUBE_API_KEY is not set OR API call fails.
// ────────────────────────────────────────────────────────────────────
async function writeFallback(reason) {
  console.warn(`[youtube] ${reason}; writing fallback from overlay keys`);

  let ids = [];
  try {
    const src = readFileSync(OVERLAY_FILE, "utf8");
    // Match both quoted ("9wa8_JPlkP0":) and unquoted (orXDAOHAKw8:) keys.
    const re = /^\s*"?([A-Za-z0-9_-]{11})"?:\s*\{/gm;
    let m;
    while ((m = re.exec(src))) ids.push(m[1]);
  } catch (e) {
    console.warn("[youtube] could not read overlay:", e?.message);
  }

  const fallbackVideos = ids.map((id) => {
    const known = KNOWN_DEFAULTS[id] ?? {};
    return {
      id,
      title: known.title ?? "",
      description: "",
      thumbnail: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
      duration: known.duration ?? "",
      durationSeconds: known.durationSeconds ?? 0,
      publishedAt: new Date().toISOString(),
      url: `https://www.youtube.com/watch?v=${id}`,
    };
  });

  const data = {
    channel: { id: "", title: "Baby Mo", handle: `@${HANDLE}` },
    fetchedAt: new Date().toISOString(),
    videos: fallbackVideos,
    fallback: true,
  };

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(data, null, 2));
  console.log(
    `[youtube] wrote fallback ${OUT} with ${fallbackVideos.length} videos`,
  );
}

// ────────────────────────────────────────────────────────────────────
// Main: fetch from YouTube Data API v3
// ────────────────────────────────────────────────────────────────────
async function main() {
  if (!API_KEY) {
    await writeFallback("YOUTUBE_API_KEY not set");
    return;
  }

  try {
    // 1. Get the channel's uploads playlist id from the @handle
    console.log(`[youtube] resolving @${HANDLE} …`);
    const chRes = await api(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&forHandle=${HANDLE}&key=${API_KEY}`,
    );
    if (!chRes.items?.length) {
      throw new Error(`channel @${HANDLE} not found`);
    }
    const channel = chRes.items[0];
    const uploadsPlaylistId =
      channel.contentDetails?.relatedPlaylists?.uploads;
    if (!uploadsPlaylistId) {
      throw new Error("uploads playlist id missing in channel response");
    }
    console.log(
      `[youtube] channel "${channel.snippet.title}" — uploads=${uploadsPlaylistId}`,
    );

    // 2. Fetch playlist items (1 page = up to 50 videos)
    const plRes = await api(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&playlistId=${uploadsPlaylistId}&maxResults=${MAX_VIDEOS}&key=${API_KEY}`,
    );
    const items = plRes.items ?? [];
    if (!items.length) {
      await writeFallback("no playlist items returned");
      return;
    }
    const ids = items
      .map((it) => it.contentDetails?.videoId)
      .filter(Boolean);
    console.log(`[youtube] ${ids.length} videos in uploads playlist`);

    // 3. Fetch contentDetails (duration) + snippet (title/thumb/published) per id, batched
    const vidRes = await api(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${ids.join(",")}&key=${API_KEY}`,
    );
    const vidById = new Map();
    for (const v of vidRes.items ?? []) vidById.set(v.id, v);

    // 4. Build the videos array, ordered by publishedAt desc
    const videos = items
      .map((it) => {
        const id = it.contentDetails?.videoId;
        const v = vidById.get(id);
        if (!v) return null;
        const dur = parseDuration(v.contentDetails?.duration);
        return {
          id,
          title: v.snippet?.title ?? "",
          description: v.snippet?.description ?? "",
          thumbnail: bestThumbnail(v.snippet?.thumbnails),
          duration: dur.display,
          durationSeconds: dur.seconds,
          publishedAt: v.snippet?.publishedAt ?? "",
          url: `https://www.youtube.com/watch?v=${id}`,
        };
      })
      .filter(Boolean)
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

    const data = {
      channel: {
        id: channel.id,
        title: channel.snippet?.title ?? "Baby Mo",
        handle: `@${HANDLE}`,
      },
      fetchedAt: new Date().toISOString(),
      videos,
    };

    mkdirSync(dirname(OUT), { recursive: true });
    writeFileSync(OUT, JSON.stringify(data, null, 2));
    console.log(
      `[youtube] wrote ${OUT} with ${videos.length} videos from real API`,
    );

    // Pretty log: id + title + duration so it's easy to verify mappings
    for (const v of videos) {
      console.log(`           ${v.id}  ${v.duration.padEnd(6)} ${v.title}`);
    }
  } catch (err) {
    await writeFallback(`API call failed: ${err?.message}`);
  }
}

main().catch((e) => {
  console.error("[youtube] fatal:", e);
  process.exit(1);
});
