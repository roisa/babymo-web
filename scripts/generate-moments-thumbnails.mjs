// Generates thumbnails for every Moment card.
//
// When a moment has a `youtubeId`:
//   1. Try to download the real YouTube thumbnail from i.ytimg.com.
//      Quality cascade: maxres → sd → hq → mq.
//   2. Save to public/moments/<slug>.jpg — overwrites placeholder.
//   3. Also fetch the video title via oEmbed and log it so you can
//      verify the slug-to-id mapping is correct.
//
// If YouTube is unreachable (sandbox, offline, throttled) OR the
// moment has no youtubeId yet:
//   - Generate a brand-aligned placeholder (bright green + mascot +
//     bold title) via SVG → rsvg-convert → ImageMagick composite.
//
// --force regenerates everything. Otherwise, files that already
// exist are skipped (so manually-uploaded thumbnails persist).

import { execSync } from "node:child_process";
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  rmSync,
  statSync,
} from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const MOMENTS_FILE = join(ROOT, "lib/content/moments.ts");
const OUT_DIR = join(ROOT, "public/moments");
const MASCOT = join(ROOT, "public/assets/baby-mo-hero.png");
const FORCE = process.argv.includes("--force");

const W = 1600;
const H = 900;

// Bright YouTube-channel palette
const C = {
  green: "#4DB848",
  greenDark: "#2E8A25",
  greenDeep: "#1B5E14",
  yellow: "#FFD93D",
  yellowSoft: "#FFE87A",
  cream: "#FFFBF0",
  ink: "#1A2E1A",
  shadow: "#0A1F0A",
  white: "#FFFFFF",
};

const PLATFORM = {
  youtube:           { label: "YOUTUBE",         color: "#c4302b" },
  "youtube-shorts":  { label: "YOUTUBE SHORTS",  color: "#c4302b" },
  "ig-post":         { label: "INSTAGRAM",       color: "#c2185b" },
  "ig-reel":         { label: "INSTAGRAM REEL",  color: "#c2185b" },
};

// ──────────────────────────────────────────────────────────────────
// Parse moments.ts
// ──────────────────────────────────────────────────────────────────
const src = readFileSync(MOMENTS_FILE, "utf8");

function extractMoments(s) {
  const out = [];
  const slugRe = /\{\s*slug:\s*"([a-z0-9-]+)"/g;
  let m;
  while ((m = slugRe.exec(s))) {
    const slug = m[1];
    const win = s.slice(m.index, m.index + 2200);
    const platform = (win.match(/platform:\s*"([a-z-]+)"/) ?? [])[1] ?? "youtube";
    const dur = (win.match(/duration:\s*"([0-9:]+)"/) ?? [])[1] ?? "";
    const yt = (win.match(/youtubeId:\s*"([A-Za-z0-9_-]{11})"/) ?? [])[1];
    const title = win.match(/title:\s*\{([^}]+)\}/);
    if (!title) continue;
    const tid = title[1].match(/id:\s*"((?:[^"\\]|\\.)*)"/);
    out.push({
      slug,
      platform,
      duration: dur,
      youtubeId: yt,
      title: tid ? tid[1].replace(/\\"/g, '"') : "",
    });
  }
  return out;
}

// ──────────────────────────────────────────────────────────────────
// Network helpers — Node 22 has global fetch
// ──────────────────────────────────────────────────────────────────
async function tryFetchYouTubeThumbnail(videoId, outPath) {
  const variants = [
    "maxresdefault.jpg",
    "sddefault.jpg",
    "hqdefault.jpg",
    "mqdefault.jpg",
  ];
  for (const v of variants) {
    const url = `https://i.ytimg.com/vi/${videoId}/${v}`;
    try {
      const r = await fetch(url, {
        // 7-second timeout via AbortController
        signal: AbortSignal.timeout(7000),
      });
      if (!r.ok) continue;
      const buf = Buffer.from(await r.arrayBuffer());
      // maxresdefault sometimes returns a tiny placeholder gray image
      // when no real thumb exists. Treat < 5 KB as 'not found'.
      if (buf.length < 5000) continue;
      writeFileSync(outPath, buf);
      return v;
    } catch (_e) {
      // network failure or timeout — try next variant
    }
  }
  return null;
}

async function tryFetchTitle(videoId) {
  try {
    const r = await fetch(
      `https://www.youtube.com/oembed?url=https://youtu.be/${videoId}&format=json`,
      { signal: AbortSignal.timeout(7000) },
    );
    if (!r.ok) return null;
    const data = await r.json();
    return data.title;
  } catch {
    return null;
  }
}

// ──────────────────────────────────────────────────────────────────
// Placeholder SVG (fallback when fetch fails)
// ──────────────────────────────────────────────────────────────────
function xe(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrap(text, maxChars, maxLines) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > maxChars) {
      if (lines.length === maxLines - 1) {
        cur = (cur + " …").trim();
        break;
      }
      lines.push(cur);
      cur = w;
    } else {
      cur = (cur + " " + w).trim();
    }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, maxLines);
}

function placeholderSvg({ title, platform, duration }) {
  const p = PLATFORM[platform] ?? PLATFORM.youtube;
  const cleanTitle = title.replace(/\s*–\s*Baby Mo\s*$/, "").trim();
  const lines = wrap(cleanTitle, 12, 3);
  const fontSize = lines.length === 1 ? 150 : lines.length === 2 ? 130 : 110;
  const lineHeight = fontSize * 1.0;
  const blockHeight = lines.length * lineHeight;
  const startY = (H - blockHeight) / 2 + fontSize * 0.85;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%"  stop-color="${C.green}"/>
      <stop offset="55%" stop-color="${C.greenDark}"/>
      <stop offset="100%" stop-color="${C.greenDeep}"/>
    </linearGradient>
    <pattern id="stars" x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
      <circle cx="40" cy="40" r="3" fill="${C.yellowSoft}" fill-opacity="0.5"/>
      <circle cx="180" cy="120" r="2" fill="${C.white}" fill-opacity="0.4"/>
      <circle cx="80" cy="200" r="2.5" fill="${C.yellowSoft}" fill-opacity="0.35"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#stars)"/>

  <text x="120" y="200" font-family="Arial" font-size="68" opacity="0.55">🌙</text>
  <text x="${W - 180}" y="${H - 200}" font-family="Arial" font-size="56" opacity="0.5">✨</text>

  <rect x="60" y="60" rx="999" ry="999" width="${64 + p.label.length * 16}" height="56"
        fill="${C.cream}" opacity="0.96"/>
  <text x="${60 + 32}" y="${60 + 38}" font-family="DejaVu Sans, Arial"
        font-weight="900" font-size="24" letter-spacing="3"
        fill="${p.color}">${xe(p.label)}</text>

  ${duration ? `<rect x="${W - 60 - 140}" y="60" rx="999" ry="999" width="140" height="56"
    fill="${C.ink}" opacity="0.85"/>
    <text x="${W - 60 - 70}" y="${60 + 38}" text-anchor="middle"
      font-family="DejaVu Sans, Arial" font-weight="800" font-size="26"
      fill="${C.cream}">${xe(duration)}</text>` : ""}

  ${lines.map((line, i) => {
    const y = startY + i * lineHeight;
    const x = 80;
    const fillColor = i === 0 ? C.cream : C.yellow;
    return `
  <text x="${x + 5}" y="${y + 6}" font-family="DejaVu Sans, Arial"
        font-weight="900" font-size="${fontSize}" fill="${C.shadow}" opacity="0.45">${xe(line)}</text>
  <text x="${x}" y="${y}" font-family="DejaVu Sans, Arial"
        font-weight="900" font-size="${fontSize}" fill="none"
        stroke="${C.greenDeep}" stroke-width="8" stroke-linejoin="round">${xe(line)}</text>
  <text x="${x}" y="${y}" font-family="DejaVu Sans, Arial"
        font-weight="900" font-size="${fontSize}" fill="${fillColor}">${xe(line)}</text>`;
  }).join("\n")}

  <rect x="0" y="${H - 64}" width="${W}" height="64" fill="${C.greenDeep}" opacity="0.85"/>
  <text x="80" y="${H - 22}" font-family="DejaVu Sans, Arial" font-weight="900" font-size="26"
        letter-spacing="3" fill="${C.yellow}">BABY MO</text>
  <text x="${W - 80}" y="${H - 22}" text-anchor="end"
        font-family="DejaVu Sans, Arial" font-weight="600" font-size="22"
        fill="${C.cream}" opacity="0.9">babymo.id</text>
</svg>`;
}

async function generatePlaceholder(m, outPath) {
  const tmpSvg = join(ROOT, ".moments-tmp.svg");
  const tmpPng = join(ROOT, ".moments-tmp.png");
  writeFileSync(tmpSvg, placeholderSvg(m), "utf8");
  execSync(`rsvg-convert -w ${W} -h ${H} -o "${tmpPng}" "${tmpSvg}"`, {
    stdio: "pipe",
  });
  const composed = join(ROOT, ".moments-tmp-2.png");
  execSync(
    `convert "${tmpPng}" \\( "${MASCOT}" -resize 420x420 \\) -gravity SouthEast -geometry +80+80 -composite "${composed}"`,
    { stdio: "pipe" },
  );
  execSync(
    `convert "${composed}" -quality 88 -interlace plane "${outPath}"`,
    { stdio: "pipe" },
  );
  try {
    rmSync(tmpSvg, { force: true });
    rmSync(tmpPng, { force: true });
    rmSync(composed, { force: true });
  } catch {}
}

// ──────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────
const list = extractMoments(src);
console.log(`[moments] Found ${list.length} moments`);

mkdirSync(OUT_DIR, { recursive: true });

let real = 0;
let placeholder = 0;
let skipped = 0;

for (const m of list) {
  const out = join(OUT_DIR, `${m.slug}.jpg`);
  const exists = existsSync(out);

  // If we have a youtubeId, ALWAYS attempt a real fetch — even if a file
  // already exists locally. This way:
  //  - CI runs always pull the freshest YT thumbnail
  //  - Locally-committed placeholders never "win" over the real thumb
  //  - Manually-uploaded thumbnails for an entry with no youtubeId
  //    still skip (see else branch below)
  // --force re-fetches even when no youtubeId.
  let usedReal = false;
  if (m.youtubeId) {
    process.stdout.write(`[moments] ${m.slug}: fetching from YouTube … `);
    const variant = await tryFetchYouTubeThumbnail(m.youtubeId, out);
    if (variant) {
      const kb = (statSync(out).size / 1024).toFixed(1);
      console.log(`✓ ${variant} (${kb} KB)`);
      usedReal = true;
      real++;
      const ytTitle = await tryFetchTitle(m.youtubeId);
      if (ytTitle) {
        console.log(`           youtube title: "${ytTitle}"`);
        console.log(`           our slug:      "${m.slug}"`);
      }
    } else {
      console.log(`✗ unreachable`);
      // Keep existing file if present (might be a manually-uploaded real
      // thumbnail). Otherwise fall through to placeholder generation.
      if (exists) {
        console.log(`           keeping existing on-disk file`);
        skipped++;
        continue;
      }
    }
  } else if (exists && !FORCE) {
    skipped++;
    continue;
  }

  if (!usedReal) {
    await generatePlaceholder(m, out);
    placeholder++;
  }
}

console.log(
  `\n[moments] Done. real: ${real}  placeholder: ${placeholder}  skipped: ${skipped}`,
);
