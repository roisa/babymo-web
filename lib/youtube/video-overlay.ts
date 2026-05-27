import type { VideoOverlay } from "./types";

/**
 * Editorial overlay applied on top of auto-fetched YouTube data.
 *
 * Use this to:
 *   - Assign a video to a category (drives /momen hub grouping)
 *   - Flag a video as featured (appears on the homepage)
 *   - Cross-link a video to related entities (doa, blog, parenting)
 *   - Override the YouTube title/description with a bilingual version
 *     better suited for editorial display
 *
 * Keyed by 11-character YouTube video id. Videos without an entry here
 * still appear in the auto-fetched list but with default category
 * "family-activities" and no featured/related links.
 *
 * Adding a new video to the YouTube channel? You don't need to touch
 * this file unless you want to feature it or cross-link it. The build
 * picks up the new video automatically; this overlay is purely opt-in
 * editorial control.
 */
export const videoOverlay: Record<string, VideoOverlay> = {
  // 5 published on @babymo.official (May 2026)
  L6bXkRuO5vc: {
    category: "before-sleep",
    featured: true,
    related: ["doa/sebelum-tidur", "parenting/sulit-tidur"],
    caption: {
      id: "Bismika Allahumma… momen tenang menutup hari bersama Baby Mo.",
      en: "Bismika Allahumma… a calm moment to close the day with Baby Mo.",
    },
  },
  orXDAOHAKw8: {
    category: "morning-routine",
    featured: true,
    related: ["doa/bangun-tidur"],
    caption: {
      id: "Alhamdulillahilladzi ahyana… mengawali pagi dengan syukur.",
      en: "Alhamdulillahilladhi ahyana… opening the day with gratitude.",
    },
  },
  X6ZGk_e7A00: {
    category: "daily-adab",
    featured: true,
    related: ["doa/sebelum-makan", "parenting/adab-sehari-hari"],
    caption: {
      id: "Bismillah — satu kata, kebiasaan seumur hidup.",
      en: "Bismillah — one word, a lifelong habit.",
    },
  },
  cmK8ruUiCbA: {
    category: "daily-adab",
    related: ["doa/sesudah-makan", "parenting/adab-sehari-hari"],
    caption: {
      id: "Alhamdulillahilladzi at'amana… syukur setelah selesai makan.",
      en: "Alhamdulillahilladhi at'amana… gratitude after a meal.",
    },
  },
  BhLRQP_Nfdk: {
    category: "family-activities",
    related: ["permainan"],
    caption: {
      id: "Game observasi seru untuk anak — temukan perbedaan di tiap scene.",
      en: "A playful observation game — find what's different in each scene.",
    },
  },
};

export const CATEGORY_LABEL = {
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
} as const;

export const CATEGORY_ORDER = [
  "before-sleep",
  "morning-routine",
  "daily-adab",
  "quran-learning",
  "ramadan-moments",
  "muharram-activities",
  "prophet-stories",
  "family-activities",
] as const;
