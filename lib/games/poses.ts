/**
 * Baby Mo pose catalogue — the visual vocabulary for the interactive
 * quizzes & games (Cari yang Beda, Cari Perbedaan, Tebak Perasaan,
 * Baby Mo Kamu).
 *
 * The artwork lives in /public/baby-mo-poses (copied from the
 * `babymo-contentideas` repo). This module is pure (no Node imports) so it is
 * safe in both server and client bundles. Components wrap `posePath()` with
 * `asset()` from lib/i18n/config to honour the GitHub-Pages basePath.
 */

import type { Locale } from "@/lib/i18n/config";

export const POSE_PUBLIC_DIR = "/baby-mo-poses";

/** Build the /public-relative path for a pose file (no basePath prefix). */
export function posePath(file: string): string {
  return `${POSE_PUBLIC_DIR}/${file}`;
}

/** The eight expressive "named" poses — each reads as a clear emotion/gesture. */
export const NAMED_POSE_FILES = [
  "baby-mo-idea.png",
  "baby-mo-wow.png",
  "baby-mo-yes.png",
  "baby-mo-alright.png",
  "baby-mo-ok.png",
  "baby-mo-thank-you.png",
  "baby-mo-run.png",
  "baby-mo-yeyy.png",
] as const;

/** The 42 numbered poses (baby-mo-pose-01 … baby-mo-pose-42). */
export const NUMBERED_POSE_FILES: string[] = Array.from(
  { length: 42 },
  (_, i) => `baby-mo-pose-${String(i + 1).padStart(2, "0")}.png`,
);

/** All 50 poses. */
export const ALL_POSE_FILES: string[] = [
  ...NAMED_POSE_FILES,
  ...NUMBERED_POSE_FILES,
];

export interface Bilingual {
  id: string;
  en: string;
}

export function t(value: Bilingual, locale: Locale): string {
  return value[locale];
}
