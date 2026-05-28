import type { EnrichedVideo, VideoCategory } from "./types";
import type { Locale } from "../i18n/config";

/**
 * A ready-to-use Instagram Reels production kit derived from a YouTube
 * video's metadata + editorial overlay. Pure and deterministic so it can
 * run on the server or client — the /momen "Baby Team Mode" renders it
 * with copy buttons so the social team can turn each video into a Reel
 * without re-writing captions every time.
 */
export type ReelKit = {
  /** Short clips are reel-length already; long ones need a cut. */
  format: "repost" | "clip";
  formatLabel: string;
  formatHint: string;
  /** First-second text hook for the overlay. */
  hook: string;
  /** 3-beat shooting/editing storyboard. */
  storyboard: string[];
  /** Full caption, ready to paste (hook + body + CTA + hashtags). */
  caption: string;
  hashtags: string[];
  /** Only for long videos: where to cut the highlight. */
  cutTip?: string;
};

const BASE_TAGS = [
  "BabyMo",
  "BismillahDulu",
  "AnakIslami",
  "ParentingIslami",
  "DoaAnak",
  "KontenAnak",
];

const CATEGORY_TAGS: Record<VideoCategory, string[]> = {
  "before-sleep": ["DoaSebelumTidur", "TidurNyenyak", "DoaHarian"],
  "morning-routine": ["DoaBangunTidur", "RutinitasPagi", "PagiCeria"],
  "daily-adab": ["AdabAnak", "AdabSehariHari", "DoaMakan"],
  "quran-learning": ["BelajarQuran", "QuranAnak", "HafalanAnak"],
  "ramadan-moments": ["RamadanAnak", "RamadanBersamaAnak", "PuasaAnak"],
  "muharram-activities": ["Muharram", "TahunBaruIslam", "Hijriah"],
  "prophet-stories": ["KisahNabi", "CeritaIslami", "TeladanNabi"],
  "family-activities": ["AktivitasAnak", "BelajarSambilBermain", "GameAnak"],
};

const HOOKS: Record<VideoCategory, Record<Locale, string>> = {
  "before-sleep": { id: "Doa sebelum tidur, cuma 30 detik \u{1F319}", en: "Bedtime du'a in just 30 seconds \u{1F319}" },
  "morning-routine": { id: "Bangun tidur, baca ini dulu ☀️", en: "First thing after waking up ☀️" },
  "daily-adab": { id: "Sebelum mulai… Bismillah dulu! \u{1F932}", en: "Before anything… Bismillah first! \u{1F932}" },
  "quran-learning": { id: "Yuk hafalan bareng Baby Mo \u{1F4D6}", en: "Let's memorize with Baby Mo \u{1F4D6}" },
  "ramadan-moments": { id: "Ramadan ceria bareng Baby Mo \u{1F319}", en: "A joyful Ramadan with Baby Mo \u{1F319}" },
  "muharram-activities": { id: "Tahun Baru Islam, yuk kenalan! \u{1F54C}", en: "Islamic New Year — let's learn! \u{1F54C}" },
  "prophet-stories": { id: "Kisah seru para Nabi untuk si kecil ✨", en: "Prophet stories for little ones ✨" },
  "family-activities": { id: "Main sambil belajar bareng Baby Mo! \u{1F388}", en: "Play and learn with Baby Mo! \u{1F388}" },
};

const CTA: Record<Locale, string[]> = {
  id: [
    "Follow @babymo.official untuk doa harian anak \u{1F49A}",
    "Simpan & bagikan ke bunda lain ya \u{1F49A}",
    "Komentar 'AAMIIN' kalau si kecil ikut baca \u{1F90D}",
  ],
  en: [
    "Follow @babymo.official for daily kids' du'a \u{1F49A}",
    "Save & share this with other parents \u{1F49A}",
    "Comment 'AAMIIN' if your little one reads along \u{1F90D}",
  ],
};

/** Stable pick so a given video always gets the same CTA. */
function pick<T>(arr: T[], seed: string): T {
  let sum = 0;
  for (let i = 0; i < seed.length; i++) sum += seed.charCodeAt(i);
  return arr[sum % arr.length] as T;
}

function cleanTitle(video: EnrichedVideo, locale: Locale): string {
  return (
    video.overlay.title?.[locale] ??
    video.title.replace(/\s*[-–]\s*Baby Mo\s*$/i, "").trim()
  );
}

export function buildReelKit(video: EnrichedVideo, locale: Locale): ReelKit {
  const category = (video.overlay.category ?? "family-activities") as VideoCategory;
  const hook = HOOKS[category][locale];
  const title = cleanTitle(video, locale);
  const captionBody =
    video.overlay.caption?.[locale] ||
    video.description.split("\n")[0]?.slice(0, 160) ||
    title;
  const cta = pick(CTA[locale], video.id);
  const hashtags = [...BASE_TAGS, ...CATEGORY_TAGS[category]];

  const format: "repost" | "clip" =
    video.isShort || video.durationSeconds <= 60 ? "repost" : "clip";

  const formatLabel =
    format === "repost"
      ? locale === "id"
        ? "Siap di-repost"
        : "Ready to repost"
      : locale === "id"
        ? "Potong jadi Reel"
        : "Clip into a Reel";

  const formatHint =
    format === "repost"
      ? locale === "id"
        ? "Durasi sudah pas untuk Reel. Unggah ulang klip aslinya, tambahkan hook teks di 1 detik pertama."
        : "Already Reel-length. Re-upload the original clip and add a text hook in the first second."
      : locale === "id"
        ? "Video panjang — potong 1 momen 15–30 detik jadi Reel vertikal."
        : "Long video — clip one 15–30s moment into a vertical Reel.";

  let cutTip: string | undefined;
  if (format === "clip") {
    const isSong = /lagu|song/i.test(video.title) || /lagu|song/i.test(title);
    if (isSong) {
      cutTip =
        locale === "id"
          ? "Potong bagian chorus paling catchy (±20 dtk) — bagian yang gampang nempel di kepala."
          : "Clip the catchiest chorus (~20s) — the part that sticks in your head.";
    } else if (video.durationSeconds > 300) {
      cutTip =
        locale === "id"
          ? "Ambil 1 babak paling seru + momen 'reveal'-nya (±25 dtk)."
          : "Take one most exciting round + its 'reveal' moment (~25s).";
    } else {
      cutTip =
        locale === "id"
          ? "Ambil 15–30 detik momen paling menarik sebagai Reel."
          : "Take the most interesting 15–30s as the Reel.";
    }
  }

  const storyboard =
    format === "repost"
      ? locale === "id"
        ? [
            `0–1 dtk · Hook teks besar: “${hook}”`,
            `1–3 dtk · Baby Mo muncul + judul: “${title}”`,
            `Akhir · ${cta}`,
          ]
        : [
            `0–1s · Big text hook: “${hook}”`,
            `1–3s · Baby Mo appears + title: “${title}”`,
            `End · ${cta}`,
          ]
      : locale === "id"
        ? [
            `0–2 dtk · Hook + potongan paling seru`,
            `2–25 dtk · Inti klip (lihat tips potong)`,
            `Akhir · ${cta} + ajak tonton full`,
          ]
        : [
            `0–2s · Hook + the best snippet`,
            `2–25s · Core clip (see cut tip)`,
            `End · ${cta} + invite to watch full`,
          ];

  const watchLine =
    locale === "id"
      ? "\u{1F3A5} Tonton lengkap di YouTube Baby Mo (link di bio)"
      : "\u{1F3A5} Watch the full video on Baby Mo's YouTube (link in bio)";

  const caption = [
    hook,
    "",
    captionBody,
    "",
    cta,
    watchLine,
    "",
    hashtags.map((t) => `#${t}`).join(" "),
  ].join("\n");

  return { format, formatLabel, formatHint, hook, storyboard, caption, hashtags, cutTip };
}
