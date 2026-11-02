import type { Locale } from "../i18n/config";
import type { EnrichedVideo } from "./types";

/**
 * Momen series. The channel uploads almost daily in a few recurring
 * formats, so videos are grouped by their YouTube title automatically —
 * new uploads land in the right shelf with no editorial step.
 */
export type SeriesKey = "lagu" | "emoji" | "tebak" | "beda" | "lainnya";

export const SERIES: Record<SeriesKey, {
  emoji: string;
  title: Record<Locale, string>;
  blurb: Record<Locale, string>;
  tag: Record<Locale, string>;
}> = {
  lagu: {
    emoji: "🎵",
    title: { id: "Nyanyi Bareng Baby Mo", en: "Sing Along with Baby Mo" },
    blurb: {
      id: "Lagu islami ceria untuk dinyanyikan sambil menari — dari Bismillah sampai Senyum Itu Ibadah.",
      en: "Cheerful Islamic songs to sing and dance to — from Bismillah to Smiling Is Worship.",
    },
    tag: { id: "Lagu", en: "Song" },
  },
  emoji: {
    emoji: "🕵️",
    title: { id: "Detektif Emoji", en: "Emoji Detective" },
    blurb: {
      id: "Satu emoji menyamar di antara teman-temannya. Siapa paling cepat menemukannya?",
      en: "One emoji is hiding among its friends. Who can spot it first?",
    },
    tag: { id: "Detektif Emoji", en: "Emoji Detective" },
  },
  tebak: {
    emoji: "🤔",
    title: { id: "Ayo Tebak!", en: "Guess It!" },
    blurb: {
      id: "Hewan, buah, kendaraan, bendera negara… tebak namanya sebelum Baby Mo menjawab!",
      en: "Animals, fruit, vehicles, flags… guess the name before Baby Mo says it!",
    },
    tag: { id: "Ayo Tebak", en: "Guess It" },
  },
  beda: {
    emoji: "👀",
    title: { id: "Mata Jeli", en: "Sharp Eyes" },
    blurb: {
      id: "Dua gambar hampir kembar. Temukan semua perbedaannya bareng satu keluarga.",
      en: "Two pictures, almost twins. Find every difference together as a family.",
    },
    tag: { id: "Mata Jeli", en: "Sharp Eyes" },
  },
  lainnya: {
    emoji: "✨",
    title: { id: "Momen Lainnya", en: "More Moments" },
    blurb: {
      id: "Doa pendek, kompilasi, dan kejutan lain dari channel Baby Mo.",
      en: "Short du'as, compilations and other surprises from the Baby Mo channel.",
    },
    tag: { id: "Momen", en: "Moment" },
  },
};

export const SERIES_ORDER: SeriesKey[] = ["lagu", "emoji", "tebak", "beda", "lainnya"];

export function seriesOf(v: EnrichedVideo): SeriesKey {
  const t = v.title.toUpperCase();
  if (t.includes("TEMUKAN EMOJI")) return "emoji";
  if (t.includes("TEBAK NAMA") || t.includes("TEBAK-TEBAKAN")) return "tebak";
  if (t.includes("PERBEDAAN")) return "beda";
  if (/KOMPILASI/.test(t)) return "lainnya";
  if (v.title.includes("🎵") || /^\W*BABY MO\s*-/.test(t)) return "lagu";
  return "lainnya";
}

const SMALL = new Set(["dan", "di", "ke", "yang", "untuk", "bagi", "dari", "itu", "ini", "ya"]);

/** "AYO BACA AL QUR'AN!" → "Ayo Baca Al Qur'an!" (only when shouting). */
function softCase(s: string): string {
  const letters = s.replace(/[^A-Za-z]/g, "");
  if (!letters || letters !== letters.toUpperCase()) return s;
  return s
    .toLowerCase()
    .split(/(\s+)/)
    .map((w, i) => {
      if (/^\s+$/.test(w)) return w;
      if (i > 0 && SMALL.has(w)) return w;
      return w.replace(/^(\W*)(\w)/, (_, a, b) => a + b.toUpperCase());
    })
    .join("")
    .replace(/\bQur'an\b/i, "Qur'an")
    .replace(/\bAllah\b/gi, "Allah")
    .replace(/\bBaby Mo\b/gi, "Baby Mo");
}

/** Sentence case for hook lines: "WAH, KOK BEDA? Ayo Buktikan…" → "Wah, kok beda? Ayo buktikan…". */
function sentenceCase(s: string): string {
  return s
    .toLowerCase()
    .replace(/(^\W*|[!?.]\s+)(\w)/g, (_, a, b) => a + b.toUpperCase())
    .replace(/\bbaby mo\b/g, "Baby Mo")
    .replace(/\ballah\b/g, "Allah");
}

const stripEmoji = (s: string) =>
  s.replace(/[\p{Extended_Pictographic}\u{FE0F}\u{200D}]/gu, "").replace(/\s{2,}/g, " ").trim();

/** A short, friendly card title + episode number from a noisy YT title. */
export function cleanTitle(v: EnrichedVideo, locale: Locale): { title: string; episode?: number } {
  if (v.overlay.title?.[locale]) return { title: v.overlay.title[locale] };
  const raw = v.title;
  const ep = raw.match(/\bEPS?(?:ISODE)?\.?\s*(\d+)/i);
  const episode = ep ? Number(ep[1]) : undefined;
  const parts = raw.split("|").map((p) => stripEmoji(p)).filter(Boolean);
  const s = seriesOf(v);
  let title: string;
  if (s === "lagu") {
    // "🎵 BABY MO - ADA PELANGI | Lagu Anak…" → "Ada Pelangi"
    title = (parts[0] ?? raw).replace(/^BABY MO\s*-\s*/i, "");
  } else if (s === "tebak") {
    // "… | TEBAK NAMA KENDARAAN BABY MO EPS 6" → "Tebak Nama Kendaraan"
    const series = parts.find((p) => /TEBAK NAMA/i.test(p)) ?? parts[0] ?? raw;
    title = series.replace(/BABY MO.*$/i, "").replace(/\bEPS?.*$/i, "");
  } else {
    // keep the playful hook line, e.g. "Detektif cilik, siap beraksi!"
    title = (parts[0] ?? raw).replace(/^BABY MO\s*-\s*/i, "");
    return { title: sentenceCase(title.trim()), episode };
  }
  return { title: softCase(title.trim()), episode };
}

/** "Hari ini" / "Kemarin" / "3 hari lalu" / "2 minggu lalu" — relative to build time. */
export function relativeDay(iso: string, locale: Locale, now = new Date()): string {
  const days = Math.max(0, Math.floor((now.getTime() - new Date(iso).getTime()) / 86400000));
  const id = locale === "id";
  if (days === 0) return id ? "Hari ini" : "Today";
  if (days === 1) return id ? "Kemarin" : "Yesterday";
  if (days < 7) return id ? `${days} hari lalu` : `${days} days ago`;
  const w = Math.floor(days / 7);
  if (days < 30) return id ? `${w} minggu lalu` : `${w} week${w > 1 ? "s" : ""} ago`;
  const m = Math.floor(days / 30);
  return id ? `${m} bulan lalu` : `${m} month${m > 1 ? "s" : ""} ago`;
}
