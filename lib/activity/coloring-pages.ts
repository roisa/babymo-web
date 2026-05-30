// Client-side loader for theme-keyed coloring line-art.
//
// In the original Vite app these SVGs were inlined at build time via
// import.meta.glob. Here they live in /public/activity/coloring/<theme>/NN.svg
// (~5.7 MB total) and are fetched lazily on demand — only when a coloring sheet
// is actually generated — so they never bloat the JS bundle. Results are cached
// per theme for the session.

import { asset } from "@/lib/i18n/config";

// Each theme ships 6 line-art pages named 01.svg … 06.svg.
const COLORING_COUNTS: Record<string, number> = {
  dinosaurs: 6,
  space: 6,
  animals: 6,
  princess: 6,
  vehicles: 6,
  alphabet: 6,
  ramadan: 6,
  ocean: 6,
};

const cache = new Map<string, string[]>();

export function hasColoringPages(themeId: string): boolean {
  return (COLORING_COUNTS[themeId] ?? 0) > 0;
}

/** Fetch (and cache) the raw line-art SVG strings for a theme. */
export async function loadColoringPages(themeId: string): Promise<string[]> {
  const cached = cache.get(themeId);
  if (cached) return cached;

  const count = COLORING_COUNTS[themeId] ?? 0;
  const files = Array.from({ length: count }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  const svgs = await Promise.all(
    files.map(async (f) => {
      try {
        const res = await fetch(asset(`/activity/coloring/${themeId}/${f}.svg`));
        return res.ok ? await res.text() : "";
      } catch {
        return "";
      }
    })
  );

  const valid = svgs.filter(Boolean);
  cache.set(themeId, valid);
  return valid;
}
