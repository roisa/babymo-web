import type { Moment, MomentCategory } from "./types";

/**
 * Curated "Moments with Baby Mo" — Instagram and YouTube content
 * surfaced on babymo.id as editorial cards. This is INTENTIONALLY
 * a hand-curated list: no auto-feeds, no widgets, no algorithm.
 *
 * How to add a real moment:
 *   1. Publish the video/post on @babymo.official
 *   2. Add an entry below with the canonical URL + youtubeId (if YT)
 *   3. Drop the thumbnail JPG into public/moments/<slug>.jpg
 *      (For YouTube, the easiest is:
 *       curl -o public/moments/<slug>.jpg https://i.ytimg.com/vi/<ID>/maxresdefault.jpg )
 *   4. Re-deploy.
 *
 * Until real content exists, the placeholder thumbnails are generated
 * at build time by scripts/generate-moments-thumbnails.mjs from the
 * title — so the section feels intentional, not empty.
 */
export const moments: Moment[] = [
  {
    slug: "doa-sebelum-tidur-bareng-anak",
    platform: "youtube-shorts",
    url: "https://www.youtube.com/@babymo.official",
    // Replace with real youtubeId once published; without it the card
    // links out to the channel and the click-to-load embed is skipped.
    thumbnail: "/moments/doa-sebelum-tidur-bareng-anak.jpg",
    duration: "0:42",
    title: {
      id: "Doa Sebelum Tidur Bareng Baby Mo",
      en: "Bedtime Dua with Baby Mo",
    },
    caption: {
      id: "Bismika Allahumma… momen tenang menutup hari bersama si kecil.",
      en: "Bismika Allahumma… a calm moment to close the day with your little one.",
    },
    category: "before-sleep",
    featured: true,
    related: ["doa/sebelum-tidur", "parenting/sulit-tidur"],
    publishedAt: "2026-05-26",
  },
  {
    slug: "huruf-hijaiyah-belajar-bareng",
    platform: "youtube-shorts",
    url: "https://www.youtube.com/@babymo.official",
    thumbnail: "/moments/huruf-hijaiyah-belajar-bareng.jpg",
    duration: "0:58",
    title: {
      id: "Belajar 3 Huruf Hijaiyah Pertama",
      en: "Learning the First 3 Arabic Letters",
    },
    caption: {
      id: "Alif, Ba, Ta — kenalkan tiga huruf dulu, sebulan jadi 28.",
      en: "Alif, Ba, Ta — introduce three first; a month from now, all 28.",
    },
    category: "quran-learning",
    featured: true,
    related: ["blog/cara-mengenalkan-huruf-hijaiyah-pada-anak"],
    publishedAt: "2026-05-25",
  },
  {
    slug: "cerita-nabi-yunus-untuk-anak",
    platform: "youtube",
    url: "https://www.youtube.com/@babymo.official",
    thumbnail: "/moments/cerita-nabi-yunus-untuk-anak.jpg",
    duration: "4:32",
    title: {
      id: "Kisah Nabi Yunus di Dalam Ikan",
      en: "The Story of Prophet Yunus in the Whale",
    },
    caption: {
      id: "Tentang doa di saat susah — anak akan ingat Yunus saat dia takut sendiri.",
      en: "About dua in hardship — your child will remember Yunus when they're scared alone.",
    },
    category: "prophet-stories",
    featured: true,
    related: ["blog/cara-bercerita-kisah-nabi-untuk-anak"],
    publishedAt: "2026-05-24",
  },
  {
    slug: "aktivitas-muharram-keluarga",
    platform: "ig-reel",
    url: "https://www.instagram.com/babymo.official",
    thumbnail: "/moments/aktivitas-muharram-keluarga.jpg",
    duration: "0:36",
    title: {
      id: "Aktivitas Muharram Bareng Keluarga",
      en: "Muharram Activities with the Family",
    },
    caption: {
      id: "Kalender Hijriyah di kulkas, cerita hijrah mingguan, sedekah pertama tahun.",
      en: "Hijri calendar on the fridge, weekly hijrah story, first sadaqah of the year.",
    },
    category: "muharram-activities",
    related: ["blog/aktivitas-muharram-untuk-anak"],
    publishedAt: "2026-05-22",
  },
  {
    slug: "doa-pagi-anak-perlindungan",
    platform: "ig-reel",
    url: "https://www.instagram.com/babymo.official",
    thumbnail: "/moments/doa-pagi-anak-perlindungan.jpg",
    duration: "0:28",
    title: {
      id: "Doa Pagi Perlindungan untuk Anak",
      en: "Morning Protection Dua for Children",
    },
    caption: {
      id: "Bismillahilladzi la yadhurru… 3 kali pagi, anak 'berangkat dengan Allah'.",
      en: "Bismillahilladhi la yadhurru… 3 times in the morning, your child 'goes with Allah'.",
    },
    category: "morning-routine",
    related: ["doa/doa-pagi", "blog/doa-pagi-petang-rutinitas-perlindungan-anak"],
    publishedAt: "2026-05-20",
  },
  {
    slug: "adab-makan-keluarga",
    platform: "ig-post",
    url: "https://www.instagram.com/babymo.official",
    thumbnail: "/moments/adab-makan-keluarga.jpg",
    title: {
      id: "Adab Makan Bareng Keluarga",
      en: "Mealtime Manners as a Family",
    },
    caption: {
      id: "Bismillah sebelum, Alhamdulillah sesudah — dua kata, satu kebiasaan seumur hidup.",
      en: "Bismillah before, Alhamdulillah after — two words, a lifelong habit.",
    },
    category: "daily-adab",
    related: ["doa/sebelum-makan", "doa/sesudah-makan", "parenting/adab-sehari-hari"],
    publishedAt: "2026-05-18",
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
  // Top up with most recent if not enough featured
  const rest = getAllMoments().filter((m) => !m.featured);
  return [...featured, ...rest].slice(0, limit);
}

export function getMomentBySlug(slug: string): Moment | undefined {
  return moments.find((m) => m.slug === slug);
}

export function getMomentsByCategory(c: MomentCategory): Moment[] {
  return getAllMoments().filter((m) => m.category === c);
}

/** Resolve related moments for any entity by its "type/slug" reference */
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
