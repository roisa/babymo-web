import type { Moment, MomentCategory } from "./types";

/**
 * Curated "Moments with Baby Mo" — Instagram and YouTube content
 * surfaced on babymo.id as editorial cards. INTENTIONALLY hand-curated:
 * no auto-feeds, no widgets, no algorithm.
 *
 * How to wire a real moment fully:
 *   1. Publish on @babymo.official
 *   2. Open the video on YouTube → copy the 11-char id from the URL
 *      (https://youtube.com/watch?v=XXXXXXXXXXX → XXXXXXXXXXX)
 *   3. Edit the matching entry below:
 *        url:        "https://www.youtube.com/watch?v=XXXXXXXXXXX"
 *        youtubeId:  "XXXXXXXXXXX"
 *   4. Replace the placeholder thumbnail with the real one:
 *        curl -L -o public/moments/<slug>.jpg \
 *          https://i.ytimg.com/vi/XXXXXXXXXXX/maxresdefault.jpg
 *   5. Commit + push. Done.
 *
 * Placeholders are generated at build time by
 * scripts/generate-moments-thumbnails.mjs from the title — so the
 * section feels intentional, not empty, until real thumbnails land.
 */

/**
 * Global flag: when false, the <WatchTogether> block in articles
 * returns null. Flip to true once the moments library is dense
 * enough that most articles will surface at least one relevant
 * video. Hub page + homepage section continue to work regardless.
 */
export const WATCH_TOGETHER_ENABLED = false;

export const moments: Moment[] = [
  // ── 5 published on @babymo.official YouTube (May 2026) ──────────
  //
  // ID-to-slug mapping (assumed from order received). If a deploy log
  // shows a YouTube title that doesn't match the slug, swap the
  // youtubeId values between two entries below.
  {
    slug: "doa-sebelum-tidur",
    platform: "youtube-shorts",
    youtubeId: "L6bXkRuO5vc",
    url: "https://www.youtube.com/watch?v=L6bXkRuO5vc",
    thumbnail: "/moments/doa-sebelum-tidur.jpg",
    duration: "0:32",
    title: {
      id: "Doa Sebelum Tidur – Baby Mo",
      en: "Bedtime Dua – Baby Mo",
    },
    caption: {
      id: "Bismika Allahumma… momen tenang menutup hari bersama Baby Mo.",
      en: "Bismika Allahumma… a calm moment to close the day with Baby Mo.",
    },
    category: "before-sleep",
    featured: true,
    related: ["doa/sebelum-tidur", "parenting/sulit-tidur"],
    publishedAt: "2026-05-20",
  },
  {
    slug: "doa-bangun-tidur",
    platform: "youtube-shorts",
    youtubeId: "orXDAOHAKw8",
    url: "https://www.youtube.com/watch?v=orXDAOHAKw8",
    thumbnail: "/moments/doa-bangun-tidur.jpg",
    duration: "0:42",
    title: {
      id: "Doa Bangun Tidur – Baby Mo",
      en: "Dua Upon Waking – Baby Mo",
    },
    caption: {
      id: "Alhamdulillahilladzi ahyana… mengawali pagi dengan syukur.",
      en: "Alhamdulillahilladhi ahyana… opening the day with gratitude.",
    },
    category: "morning-routine",
    featured: true,
    related: ["doa/bangun-tidur"],
    publishedAt: "2026-05-20",
  },
  {
    slug: "doa-sebelum-makan",
    platform: "youtube-shorts",
    youtubeId: "X6ZGk_e7A00",
    url: "https://www.youtube.com/watch?v=X6ZGk_e7A00",
    thumbnail: "/moments/doa-sebelum-makan.jpg",
    duration: "0:40",
    title: {
      id: "Doa Sebelum Makan – Baby Mo",
      en: "Dua Before Eating – Baby Mo",
    },
    caption: {
      id: "Bismillah — satu kata, kebiasaan seumur hidup.",
      en: "Bismillah — one word, a lifelong habit.",
    },
    category: "daily-adab",
    featured: true,
    related: ["doa/sebelum-makan", "parenting/adab-sehari-hari"],
    publishedAt: "2026-05-13",
  },
  {
    slug: "doa-sesudah-makan",
    platform: "youtube-shorts",
    youtubeId: "cmK8ruUiCbA",
    url: "https://www.youtube.com/watch?v=cmK8ruUiCbA",
    thumbnail: "/moments/doa-sesudah-makan.jpg",
    duration: "0:42",
    title: {
      id: "Doa Sesudah Makan – Baby Mo",
      en: "Dua After Eating – Baby Mo",
    },
    caption: {
      id: "Alhamdulillahilladzi at'amana… syukur setelah selesai makan.",
      en: "Alhamdulillahilladhi at'amana… gratitude after a meal.",
    },
    category: "daily-adab",
    related: ["doa/sesudah-makan", "parenting/adab-sehari-hari"],
    publishedAt: "2026-05-14",
  },
  {
    slug: "cari-dan-temukan-perbedaan",
    platform: "youtube",
    youtubeId: "BhLRQP_Nfdk",
    url: "https://www.youtube.com/watch?v=BhLRQP_Nfdk",
    thumbnail: "/moments/cari-dan-temukan-perbedaan.jpg",
    duration: "17:27",
    title: {
      id: "Cari dan Temukan Perbedaan Bareng Baby Mo",
      en: "Spot the Difference with Baby Mo",
    },
    caption: {
      id: "Game observasi seru untuk anak — temukan perbedaan di tiap scene.",
      en: "A playful observation game — find what's different in each scene.",
    },
    category: "family-activities",
    related: ["permainan"],
    publishedAt: "2026-05-23",
  },
];

export function getAllMoments(): Moment[] {
  return [...moments].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}

export function getFeaturedMoments(limit = 3): Moment[] {
  const featured = getAllMoments().filter((m) => m.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  const rest = getAllMoments().filter((m) => !m.featured);
  return [...featured, ...rest].slice(0, limit);
}

export function getMomentBySlug(slug: string): Moment | undefined {
  return moments.find((m) => m.slug === slug);
}

export function getMomentsByCategory(c: MomentCategory): Moment[] {
  return getAllMoments().filter((m) => m.category === c);
}

export function getMomentsRelatedTo(ref: string): Moment[] {
  return getAllMoments().filter((m) => m.related?.includes(ref));
}

export const MOMENT_CATEGORIES: MomentCategory[] = [
  "before-sleep",
  "morning-routine",
  "daily-adab",
  "quran-learning",
  "ramadan-moments",
  "muharram-activities",
  "prophet-stories",
  "family-activities",
];

export const CATEGORY_LABEL: Record<"id" | "en", Record<MomentCategory, string>> = {
  id: {
    "before-sleep": "Sebelum Tidur",
    "morning-routine": "Rutinitas Pagi",
    "daily-adab": "Adab Sehari-hari",
    "quran-learning": "Belajar Qur'an",
    "ramadan-moments": "Momen Ramadan",
    "muharram-activities": "Aktivitas Muharram",
    "prophet-stories": "Kisah Para Nabi",
    "family-activities": "Aktivitas Keluarga",
  },
  en: {
    "before-sleep": "Before Sleep",
    "morning-routine": "Morning Routine",
    "daily-adab": "Daily Manners",
    "quran-learning": "Qur'an Learning",
    "ramadan-moments": "Ramadan Moments",
    "muharram-activities": "Muharram Activities",
    "prophet-stories": "Prophet Stories",
    "family-activities": "Family Activities",
  },
};
