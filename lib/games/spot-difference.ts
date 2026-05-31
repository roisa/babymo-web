/**
 * "Cari Perbedaan Baby Mo" / "Spot the Difference".
 *
 * Two panels show the same scene of Baby Mo poses; a few cells differ in the
 * right panel (a swapped pose or a mirrored one). The player taps every cell
 * that differs. Layout + differences are generated client-side from the
 * puzzle's pose pool and a seed, so each static page stays replayable.
 */

import type { Bilingual } from "@/lib/games/poses";

export interface SpotDiffLevel {
  key: "mudah" | "sedang" | "sulit";
  label: Bilingual;
  cols: number;
  rows: number;
  /** Number of differing cells in the right panel. */
  diffs: number;
}

export const SPOT_DIFF_LEVELS: SpotDiffLevel[] = [
  { key: "mudah", label: { id: "Mudah", en: "Easy" }, cols: 3, rows: 3, diffs: 3 },
  { key: "sedang", label: { id: "Sedang", en: "Medium" }, cols: 4, rows: 4, diffs: 5 },
  { key: "sulit", label: { id: "Sulit", en: "Hard" }, cols: 5, rows: 4, diffs: 7 },
];

export interface SpotDiffPuzzle {
  slug: string;
  emoji: string;
  /** Pose files that make up this scene (need ≥ 6 for good variety). */
  pool: string[];
  title: Bilingual;
  blurb: Bilingual;
  intro: Bilingual;
  funFact: Bilingual;
}

// Reusable, verified pose pools grouped by mood.
const HAPPY = [
  "baby-mo-yeyy.png",
  "baby-mo-yes.png",
  "baby-mo-wow.png",
  "baby-mo-idea.png",
  "baby-mo-ok.png",
  "baby-mo-alright.png",
];

const ACTIVE = [
  "baby-mo-run.png",
  "baby-mo-yeyy.png",
  "baby-mo-yes.png",
  "baby-mo-pose-20.png",
  "baby-mo-wow.png",
  "baby-mo-idea.png",
];

const GENTLE = [
  "baby-mo-thank-you.png",
  "baby-mo-pose-20.png",
  "baby-mo-ok.png",
  "baby-mo-pose-09.png",
  "baby-mo-pose-31.png",
  "baby-mo-idea.png",
];

export const SPOT_DIFF_PUZZLES: SpotDiffPuzzle[] = [
  {
    slug: "ekspresi-ceria",
    emoji: "😄",
    pool: HAPPY,
    title: { id: "Ekspresi Ceria Baby Mo", en: "Baby Mo's Cheerful Faces" },
    blurb: {
      id: "Dua panel penuh ekspresi ceria — temukan semua perbedaannya!",
      en: "Two panels of cheerful faces — find every difference!",
    },
    intro: {
      id: "Baby Mo menunjukkan beragam ekspresi cerianya. Bandingkan panel kiri dan kanan, lalu ketuk setiap Baby Mo yang berubah. Berapa cepat kamu menemukan semuanya?",
      en: "Baby Mo shows off many cheerful expressions. Compare the left and right panels, then tap every Baby Mo that changed. How fast can you find them all?",
    },
    funFact: {
      id: "Mengenali ekspresi wajah membantu anak memahami emosi.",
      en: "Recognising facial expressions helps children understand emotions.",
    },
  },
  {
    slug: "baby-mo-aktif",
    emoji: "🤸",
    pool: ACTIVE,
    title: { id: "Baby Mo Aktif", en: "Active Baby Mo" },
    blurb: {
      id: "Baby Mo berlari dan melompat — adakah yang berpindah pose?",
      en: "Baby Mo running and jumping — did any pose change?",
    },
    intro: {
      id: "Baby Mo penuh energi: berlari, melompat, dan bergaya. Cermati dua panel ini dan temukan setiap perbedaannya sebelum waktu habis!",
      en: "Baby Mo is full of energy: running, jumping, and posing. Study both panels and find every difference before time runs out!",
    },
    funFact: {
      id: "Bermain aktif setiap hari baik untuk kesehatan jantung anak.",
      en: "Active play every day is great for a child's heart health.",
    },
  },
  {
    slug: "baby-mo-lembut",
    emoji: "🥰",
    pool: GENTLE,
    title: { id: "Baby Mo yang Lembut", en: "Gentle Baby Mo" },
    blurb: {
      id: "Suasana tenang dan penuh kasih — temukan perbedaannya.",
      en: "A calm, loving mood — spot the differences.",
    },
    intro: {
      id: "Dari berterima kasih hingga tersenyum lembut, Baby Mo terlihat tenang dan penuh kasih. Bandingkan kedua panel dan temukan semua Baby Mo yang berbeda.",
      en: "From grateful to gently smiling, Baby Mo looks calm and loving. Compare the panels and find every Baby Mo that differs.",
    },
    funFact: {
      id: "Suasana tenang sebelum tidur membantu anak beristirahat lebih baik.",
      en: "A calm pre-sleep mood helps children rest better.",
    },
  },
  {
    slug: "campur-aduk",
    emoji: "🎲",
    pool: [...HAPPY, "baby-mo-run.png", "baby-mo-pose-20.png"].filter(
      (v, i, a) => a.indexOf(v) === i,
    ),
    title: { id: "Baby Mo Campur Aduk", en: "Baby Mo Mix-Up" },
    blurb: {
      id: "Semua pose tercampur — tantangan untuk mata yang jeli!",
      en: "All poses mixed together — a challenge for sharp eyes!",
    },
    intro: {
      id: "Semua gaya Baby Mo tercampur dalam satu scene yang ramai. Inilah tantangan sejati bagi pengamat ulung. Temukan setiap perbedaan!",
      en: "Every Baby Mo style is mixed into one busy scene. This is the true test for keen observers. Find every difference!",
    },
    funFact: {
      id: "Permainan ini melatih konsentrasi dan daya ingat visual.",
      en: "This game trains concentration and visual memory.",
    },
  },
];

export function getSpotDiffPuzzle(slug: string): SpotDiffPuzzle | undefined {
  return SPOT_DIFF_PUZZLES.find((p) => p.slug === slug);
}

export function allSpotDiffSlugs(): string[] {
  return SPOT_DIFF_PUZZLES.map((p) => p.slug);
}
