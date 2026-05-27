import type { VideoOverlay } from "./types";

/**
 * Editorial overlay applied on top of auto-fetched YouTube data.
 *
 * Keyed by 11-character YouTube video id. Use this to:
 *   - Assign a video to a category (drives /momen hub grouping)
 *   - Flag a video as featured (appears on the homepage)
 *   - Cross-link to related entities (doa, blog, parenting)
 *   - Override the YouTube title/caption with a bilingual editorial
 *     version when the raw YT title is too long or noisy
 *
 * Videos without an entry here still appear in the auto-fetched list,
 * with default category "family-activities" and no featured/related
 * links. This file is purely opt-in editorial control.
 *
 * Slug-to-id mapping verified against YouTube Data API on 2026-05-27.
 */
export const videoOverlay: Record<string, VideoOverlay> = {
  // ── Daily doa shorts (Mei 2026) ─────────────────────────────────
  orXDAOHAKw8: {
    // "Doa Sebelum Tidur - Baby Mo" (0:32)
    category: "before-sleep",
    featured: true,
    related: ["doa/sebelum-tidur", "parenting/sulit-tidur"],
    caption: {
      id: "Bismika Allahumma… momen tenang menutup hari bersama Baby Mo.",
      en: "Bismika Allahumma… a calm moment to close the day with Baby Mo.",
    },
  },
  L6bXkRuO5vc: {
    // "Doa Bangun Tidur - Baby Mo" (0:42)
    category: "morning-routine",
    featured: true,
    related: ["doa/bangun-tidur"],
    caption: {
      id: "Alhamdulillahilladzi ahyana… mengawali pagi dengan syukur.",
      en: "Alhamdulillahilladhi ahyana… opening the day with gratitude.",
    },
  },
  cmK8ruUiCbA: {
    // "Doa Sebelum Makan - Baby Mo" (0:40)
    category: "daily-adab",
    featured: true,
    related: ["doa/sebelum-makan", "parenting/adab-sehari-hari"],
    caption: {
      id: "Bismillah — satu kata, kebiasaan seumur hidup.",
      en: "Bismillah — one word, a lifelong habit.",
    },
  },
  X6ZGk_e7A00: {
    // "Doa Sesudah Makan - Baby Mo 🍽️" (0:42)
    category: "daily-adab",
    related: ["doa/sesudah-makan", "parenting/adab-sehari-hari"],
    caption: {
      id: "Alhamdulillahilladzi at'amana… syukur setelah selesai makan.",
      en: "Alhamdulillahilladhi at'amana… gratitude after a meal.",
    },
  },

  // ── Games + long-form ───────────────────────────────────────────
  BhLRQP_Nfdk: {
    // "Cari dan Temukan Perbedaan Bareng Baby Mo 👀✨ ..." (17:27)
    category: "family-activities",
    related: ["permainan"],
    title: {
      id: "Cari & Temukan Perbedaan",
      en: "Spot the Difference",
    },
    caption: {
      id: "Game observasi seru untuk anak — temukan perbedaan di tiap scene.",
      en: "A playful observation game — find what's different in each scene.",
    },
  },

  // ── Songs ───────────────────────────────────────────────────────
  "9wa8_JPlkP0": {
    // "Lagu 1 Baby Mo - Bismillah Dulu | Lagu Anak Islami Ceria | Belajar Adab Sehari-hari" (2:00)
    category: "daily-adab",
    featured: true,
    related: ["doa/sebelum-makan", "parenting/adab-sehari-hari"],
    title: {
      id: "Lagu Bismillah Dulu",
      en: "Bismillah First — Song for Kids",
    },
    caption: {
      id: "Lagu anak islami ceria yang mengenalkan adab Bismillah sebelum mulai apapun.",
      en: "A cheerful Islamic children's song introducing the habit of saying Bismillah before any activity.",
    },
  },

  // ── Channel intro ───────────────────────────────────────────────
  BKZLVWBRnL8: {
    // "INTRO BABY MO VERSI 1" (0:08)
    category: "family-activities",
    title: {
      id: "Kenalan Bareng Baby Mo",
      en: "Meet Baby Mo",
    },
    caption: {
      id: "Perkenalan singkat karakter Baby Mo untuk teman-teman kecil.",
      en: "A short introduction to the Baby Mo character.",
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
