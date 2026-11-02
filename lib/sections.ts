/**
 * Section colour system. Each top-level destination owns one bright accent
 * so children learn their way around by colour (and emoji) before words:
 *   Doa → sky · Cerita → grape · Main → sun · Belajar → berry
 * The CSS lives in globals.css as .sec-<key> classes that set --sec,
 * --sec-soft and --sec-deep; components just add the class.
 */
export type SectionKey = "doa" | "cerita" | "main" | "belajar";

export const SECTION_EMOJI: Record<SectionKey, string> = {
  doa: "🤲",
  cerita: "📖",
  main: "🎮",
  belajar: "🎓",
};

/** Map a site path (no locale prefix) to its section, if any. */
export function sectionForPath(path: string): SectionKey | null {
  const p = path.replace(/^\/(id|en)(?=\/|$)/, "") || "/";
  const is = (...ms: string[]) => ms.some((m) => p === m || p.startsWith(`${m}/`));
  if (is("/doa", "/dzikir", "/sholat", "/puasa")) return "doa";
  if (is("/cerita")) return "cerita";
  if (is("/permainan", "/play", "/apps", "/watch", "/momen", "/kuis")) return "main";
  if (is("/learn", "/hadith", "/kisah", "/surat", "/asmaul-husna", "/kalender", "/parenting", "/blog")) return "belajar";
  return null;
}
