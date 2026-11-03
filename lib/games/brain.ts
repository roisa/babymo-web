/**
 * "Tantangan Otak Baby Mo" / "Baby Mo Brain Challenge".
 *
 * One connected journey of levels across four worlds. Each level is one of
 * four quick brain games built from the existing Baby Mo pose sets:
 *   - odd:    find the one different Baby Mo in a grid (grid grows)
 *   - diff:   spot the differences between two panels
 *   - feel:   guess Baby Mo's feeling (a few questions in a row)
 *   - memory: remember the Baby Mo you saw, then say who went missing
 * Winning a level unlocks the next one; progress (stars per level) is kept
 * in localStorage by the client component, so the journey continues across
 * visits. Pure data, safe for server and client bundles.
 */

import type { Bilingual } from "@/lib/games/poses";

export type BrainKind = "odd" | "diff" | "feel" | "memory";

export interface BrainLevel {
  n: number;
  world: number;
  kind: BrainKind;
  /** odd: grid size; diff: grid size + number of differences */
  cols?: number;
  rows?: number;
  diffs?: number;
  /** odd: index into SPOT_ODD_PUZZLES; diff: index into SPOT_DIFF_PUZZLES */
  set?: number;
  /** feel/memory: number of rounds */
  rounds?: number;
  /** memory: how many Baby Mo to remember, and how long they stay visible */
  show?: number;
  peekMs?: number;
  /** feel: seconds per question (0 = no limit) */
  qTime?: number;
  /** Seconds for the "fast" star */
  par: number;
  boss?: boolean;
}

export interface BrainWorld {
  n: number;
  emoji: string;
  name: Bilingual;
  tagline: Bilingual;
  /** Tailwind gradient classes for the world banner */
  tone: string;
  /** accent colour for the path */
  accent: string;
}

export const BRAIN_WORLDS: BrainWorld[] = [
  {
    n: 1,
    emoji: "🦅",
    name: { id: "Lembah Mata Elang", en: "Eagle-Eye Valley" },
    tagline: { id: "Latih ketelitian matamu", en: "Train your sharp eyes" },
    tone: "from-sky-soft via-paper to-sage-soft",
    accent: "#3AA7DA",
  },
  {
    n: 2,
    emoji: "🧠",
    name: { id: "Taman Ingatan", en: "Memory Garden" },
    tagline: { id: "Ingat baik-baik, ya!", en: "Remember it well!" },
    tone: "from-grape-soft via-paper to-berry-soft",
    accent: "#8A79D9",
  },
  {
    n: 3,
    emoji: "🌳",
    name: { id: "Hutan Fokus", en: "Focus Forest" },
    tagline: { id: "Fokus dan jangan terburu-buru", en: "Stay focused, don't rush" },
    tone: "from-brave-soft via-paper to-sun-soft",
    accent: "#1E8C53",
  },
  {
    n: 4,
    emoji: "🏔️",
    name: { id: "Puncak Jenius", en: "Genius Peak" },
    tagline: { id: "Tantangan para juara", en: "The champions' challenge" },
    tone: "from-peach-soft via-paper to-grape-soft",
    accent: "#F0975A",
  },
];

export const BRAIN_LEVELS: BrainLevel[] = [
  // World 1 — gentle start
  { n: 1, world: 1, kind: "odd", cols: 3, rows: 3, set: 0, par: 8 },
  { n: 2, world: 1, kind: "feel", rounds: 3, qTime: 0, par: 20 },
  { n: 3, world: 1, kind: "odd", cols: 4, rows: 4, set: 1, par: 10 },
  { n: 4, world: 1, kind: "memory", show: 3, peekMs: 4000, rounds: 2, par: 25 },
  { n: 5, world: 1, kind: "diff", cols: 3, rows: 3, diffs: 3, set: 0, par: 25 },
  { n: 6, world: 1, kind: "odd", cols: 5, rows: 4, set: 2, par: 12, boss: true },
  // World 2 — memory focus
  { n: 7, world: 2, kind: "memory", show: 4, peekMs: 4000, rounds: 2, par: 25 },
  { n: 8, world: 2, kind: "odd", cols: 5, rows: 5, set: 3, par: 12 },
  { n: 9, world: 2, kind: "feel", rounds: 4, qTime: 10, par: 25 },
  { n: 10, world: 2, kind: "diff", cols: 4, rows: 3, diffs: 4, set: 1, par: 30 },
  { n: 11, world: 2, kind: "memory", show: 5, peekMs: 4500, rounds: 3, par: 35 },
  { n: 12, world: 2, kind: "odd", cols: 6, rows: 5, set: 4, par: 14, boss: true },
  // World 3 — faster
  { n: 13, world: 3, kind: "diff", cols: 4, rows: 4, diffs: 5, set: 2, par: 35 },
  { n: 14, world: 3, kind: "odd", cols: 6, rows: 6, set: 5, par: 14 },
  { n: 15, world: 3, kind: "memory", show: 5, peekMs: 3500, rounds: 3, par: 35 },
  { n: 16, world: 3, kind: "feel", rounds: 5, qTime: 8, par: 30 },
  { n: 17, world: 3, kind: "odd", cols: 7, rows: 6, set: 6, par: 16 },
  { n: 18, world: 3, kind: "diff", cols: 5, rows: 4, diffs: 6, set: 3, par: 45, boss: true },
  // World 4 — champions
  { n: 19, world: 4, kind: "memory", show: 6, peekMs: 3500, rounds: 3, par: 40 },
  { n: 20, world: 4, kind: "odd", cols: 7, rows: 7, set: 7, par: 18 },
  { n: 21, world: 4, kind: "feel", rounds: 6, qTime: 6, par: 30 },
  { n: 22, world: 4, kind: "diff", cols: 5, rows: 4, diffs: 7, set: 4, par: 50 },
  { n: 23, world: 4, kind: "memory", show: 6, peekMs: 2800, rounds: 4, par: 50 },
  { n: 24, world: 4, kind: "odd", cols: 8, rows: 7, set: 8, par: 20, boss: true },
];

export const BRAIN_KIND_INFO: Record<BrainKind, { emoji: string; name: Bilingual; how: Bilingual }> = {
  odd: {
    emoji: "🔍",
    name: { id: "Cari yang Beda", en: "Spot the Odd One" },
    how: { id: "Ketuk satu Baby Mo yang berbeda!", en: "Tap the one Baby Mo that's different!" },
  },
  diff: {
    emoji: "🧩",
    name: { id: "Cari Perbedaan", en: "Spot the Difference" },
    how: { id: "Ketuk kotak di gambar bawah yang berbeda dari gambar atas.", en: "Tap the boxes in the bottom picture that differ from the top one." },
  },
  feel: {
    emoji: "😀",
    name: { id: "Tebak Perasaan", en: "Guess the Feeling" },
    how: { id: "Lihat Baby Mo, lalu pilih perasaannya.", en: "Look at Baby Mo, then pick the feeling." },
  },
  memory: {
    emoji: "🧠",
    name: { id: "Siapa yang Hilang?", en: "Who's Missing?" },
    how: { id: "Ingat semua Baby Mo. Lalu tebak siapa yang hilang!", en: "Remember every Baby Mo. Then guess who went missing!" },
  },
};

/** Poses that are easy to tell apart at a glance — used by the memory game. */
export const MEMORY_POSES = [
  "baby-mo-yeyy.png",
  "baby-mo-wow.png",
  "baby-mo-idea.png",
  "baby-mo-run.png",
  "baby-mo-thank-you.png",
  "baby-mo-ok.png",
  "baby-mo-yes.png",
  "baby-mo-pose-37.png",
  "baby-mo-pose-30.png",
  "baby-mo-pose-06.png",
  "baby-mo-pose-12.png",
  "baby-mo-pose-20.png",
];

export const BRAIN_STORE_KEY = "bm_brain_v1";
