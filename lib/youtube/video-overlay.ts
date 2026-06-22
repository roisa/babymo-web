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
    // The one doa featured on the homepage Momen row.
    priority: 10,
    related: ["doa/sebelum-tidur", "parenting/sulit-tidur"],
    caption: {
      id: "Bismika Allahumma… momen tenang menutup hari bersama Baby Mo.",
      en: "Bismika Allahumma… a calm moment to close the day with Baby Mo.",
    },
  },
  L6bXkRuO5vc: {
    // "Doa Bangun Tidur - Baby Mo" (0:42)
    category: "morning-routine",
    related: ["doa/bangun-tidur"],
    caption: {
      id: "Alhamdulillahilladzi ahyana… mengawali pagi dengan syukur.",
      en: "Alhamdulillahilladhi ahyana… opening the day with gratitude.",
    },
  },
  cmK8ruUiCbA: {
    // "Doa Sebelum Makan - Baby Mo" (0:40)
    category: "daily-adab",
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
  YXGf2TCTVKI: {
    // "🔍 Temukan Perbedaan Gambar Bersama Baby Mo … EPISODE 6" (13:27)
    // Latest game — featured on the homepage Momen row.
    category: "family-activities",
    featured: true,
    priority: 8,
    related: ["permainan"],
    title: {
      id: "Cari & Temukan Perbedaan (Episode 6)",
      en: "Spot the Difference (Episode 6)",
    },
    caption: {
      id: "Episode terbaru! Latih fokus & ketelitian si kecil — temukan semua perbedaannya bareng Baby Mo.",
      en: "Newest episode! Build your little one's focus & attention — find every difference with Baby Mo.",
    },
  },
  "-4mkpvahJnE": {
    // "Cari dan Temukan Perbedaan Bareng Baby Mo … | EPISODE 2" (13:30)
    category: "family-activities",
    related: ["permainan"],
    title: {
      id: "Cari & Temukan Perbedaan (Episode 2)",
      en: "Spot the Difference (Episode 2)",
    },
    caption: {
      id: "Episode 2! Latih ketelitian si kecil — temukan perbedaan di tiap scene bareng Baby Mo.",
      en: "Episode 2! Sharpen your little one's attention — spot what's different in each scene with Baby Mo.",
    },
  },
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
  cq6ODPSWGdc: {
    // "🎵 BABY MO - Bismillah Dulu | Lagu Anak Islami Ceria | Belajar
    //  Membaca Bismillah Sehari-hari" (2:14) — the current official song.
    category: "daily-adab",
    featured: true,
    // Pin to the front of the homepage Momen row.
    priority: 12,
    related: ["doa/sebelum-makan", "parenting/adab-sehari-hari"],
    title: {
      id: "Bismillah Dulu",
      en: "Bismillah Dulu — Islamic Kids Song",
    },
    caption: {
      id: "Lagu anak islami ceria dari Baby Mo — mengajak si kecil membiasakan ucap Bismillah sebelum memulai apa pun.",
      en: "A cheerful Islamic kids' song from Baby Mo — getting little ones into the habit of saying Bismillah before they start anything.",
    },
  },
  "9wa8_JPlkP0": {
    // "Lagu 1 Baby Mo - Bismillah Dulu | Lagu Anak Islami Ceria | Belajar
    //  Adab Sehari-hari" (2:00) — the earlier cut; kept in the list but no
    //  longer the pinned feature (cq6ODPSWGdc above is the current one).
    category: "daily-adab",
    related: ["doa/sebelum-makan", "parenting/adab-sehari-hari"],
    title: {
      id: "Bismillah Dulu (Lagu 1)",
      en: "Bismillah Dulu (Song 1)",
    },
    caption: {
      id: "Versi pertama lagu Bismillah Dulu dari Baby Mo.",
      en: "The first cut of Baby Mo's Bismillah Dulu song.",
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
