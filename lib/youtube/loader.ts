import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { EnrichedVideo, YouTubeData, VideoOverlay } from "./types";
import { videoOverlay } from "./video-overlay";
import { isYouTubeShort } from "./format-duration";

const DATA_PATH = join(process.cwd(), "public/data/videos.json");

/**
 * Loads videos.json from disk at build time and merges in the
 * editorial overlay. If the JSON is missing (first run before the
 * fetch script has been run, or YT API was unreachable), returns
 * an empty list — the UI degrades gracefully.
 *
 * Server-only: don't import from client components.
 */
let cache: EnrichedVideo[] | null = null;

export function getAllVideos(): EnrichedVideo[] {
  if (cache) return cache;
  if (!existsSync(DATA_PATH)) {
    cache = [];
    return cache;
  }
  try {
    const raw = readFileSync(DATA_PATH, "utf8");
    const data: YouTubeData = JSON.parse(raw);
    cache = data.videos.map((v): EnrichedVideo => {
      const overlay: VideoOverlay = videoOverlay[v.id] ?? {};
      return {
        ...v,
        overlay,
        isShort: isYouTubeShort(v.durationSeconds),
      };
    });
    return cache;
  } catch (err) {
    console.warn("[youtube/loader] failed to parse videos.json:", err);
    cache = [];
    return cache;
  }
}

export function getFeaturedVideos(limit = 3): EnrichedVideo[] {
  const all = getAllVideos();
  const featured = all.filter((v) => v.overlay.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  // Top up with most recent non-featured
  const rest = all.filter((v) => !v.overlay.featured);
  return [...featured, ...rest].slice(0, limit);
}

export function getVideoById(id: string): EnrichedVideo | undefined {
  return getAllVideos().find((v) => v.id === id);
}

export function getVideosByCategory(category: string): EnrichedVideo[] {
  return getAllVideos().filter(
    (v) => (v.overlay.category ?? "family-activities") === category,
  );
}

export function getVideosRelatedTo(ref: string): EnrichedVideo[] {
  return getAllVideos().filter((v) => v.overlay.related?.includes(ref));
}
