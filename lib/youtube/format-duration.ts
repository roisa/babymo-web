/**
 * Convert an ISO 8601 duration string (the format YouTube returns) to
 * a human-readable display string and a total-seconds number.
 *
 *   PT32S      → "0:32"        (32)
 *   PT1M       → "1:00"        (60)
 *   PT17M27S   → "17:27"       (1047)
 *   PT1H5M     → "1:05:00"     (3900)
 *   PT2H13M5S  → "2:13:05"     (8005)
 *
 * Returns { display, seconds }. Returns { display: "", seconds: 0 }
 * for invalid input rather than throwing — caller can decide what to do.
 */
export function parseYouTubeDuration(
  iso: string,
): { display: string; seconds: number } {
  if (!iso || typeof iso !== "string") return { display: "", seconds: 0 };
  const match = iso.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if (!match) return { display: "", seconds: 0 };

  const h = parseInt(match[1] ?? "0", 10);
  const m = parseInt(match[2] ?? "0", 10);
  const s = parseInt(match[3] ?? "0", 10);
  const seconds = h * 3600 + m * 60 + s;

  const pad = (n: number) => String(n).padStart(2, "0");
  let display: string;
  if (h > 0) display = `${h}:${pad(m)}:${pad(s)}`;
  else display = `${m}:${pad(s)}`;

  return { display, seconds };
}

/** Quick check: under 60 seconds = treat as a YouTube Short for UI */
export function isYouTubeShort(seconds: number): boolean {
  return seconds > 0 && seconds <= 60;
}
