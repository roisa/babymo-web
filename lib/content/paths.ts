import type { Locale } from "../i18n/config";
import type { LearningPath, PathStep, PathStepType } from "./types";
import { getDoaBySlug } from "./doa";
import { getSurahBySlug } from "./surah";
import { getHadithBySlug } from "./hadith";
import { getProphetBySlug } from "./prophets";

export const paths: LearningPath[] = [
  {
    slug: "rutinitas-tidur",
    emoji: "🌙",
    title: { id: "Rutinitas Sebelum Tidur", en: "Bedtime Routine" },
    description: {
      id: "Doa dan surat pendek untuk menemani si kecil tidur dengan tenang dan terlindungi.",
      en: "Duas and short surahs to settle your little one to sleep, calm and protected.",
    },
    ageLabel: "3–6",
    steps: [
      { type: "doa", slug: "sebelum-tidur" },
      { type: "surah", slug: "al-ikhlas" },
      { type: "surah", slug: "al-falaq" },
      { type: "surah", slug: "an-nas" },
      { type: "doa", slug: "bangun-tidur" },
    ],
    published: "2026-05-30",
  },
  {
    slug: "adab-makan",
    emoji: "🍽️",
    title: { id: "Adab Makan", en: "Mealtime Manners" },
    description: {
      id: "Biasakan anak memulai dan mengakhiri makan dengan doa dan adab yang baik.",
      en: "Help your child begin and end every meal with a dua and good manners.",
    },
    ageLabel: "3–6",
    steps: [
      { type: "doa", slug: "sebelum-makan" },
      { type: "doa", slug: "sesudah-makan" },
      { type: "hadith", slug: "hadiah-terbaik-adab" },
    ],
    published: "2026-05-30",
  },
  {
    slug: "hafalan-surat-pertama",
    emoji: "🕋",
    title: { id: "Hafalan Surat Pendek Pertama", en: "First Short Surahs" },
    description: {
      id: "Langkah pertama menghafal Al-Qur'an — surat-surat pendek yang mudah diingat anak.",
      en: "A first step into memorizing the Qur'an — short surahs kids remember easily.",
    },
    ageLabel: "5–8",
    steps: [
      { type: "surah", slug: "al-fatihah" },
      { type: "surah", slug: "al-ikhlas" },
      { type: "surah", slug: "al-kautsar" },
      { type: "surah", slug: "al-asr" },
      { type: "surah", slug: "an-nasr" },
    ],
    published: "2026-05-30",
  },
  {
    slug: "akhlak-mulia",
    emoji: "🌟",
    title: { id: "Akhlak Mulia bersama Nabi", en: "Good Character with the Prophets" },
    description: {
      id: "Kasih sayang, kejujuran, dan kesabaran — diteladani dari hadith dan kisah para nabi.",
      en: "Kindness, honesty, and patience — modeled through hadith and prophet stories.",
    },
    ageLabel: "6–10",
    steps: [
      { type: "hadith", slug: "kasih-sayang-kepada-anak" },
      { type: "kisah", slug: "yusuf" },
      { type: "hadith", slug: "kelembutan-keindahan" },
      { type: "kisah", slug: "ayyub" },
    ],
    published: "2026-05-30",
  },
];

export function getAllPaths(): LearningPath[] {
  return paths;
}

export function getPathBySlug(slug: string): LearningPath | undefined {
  return paths.find((p) => p.slug === slug);
}

export type ResolvedStep = {
  /** Stable id used for progress tracking, e.g. "doa:sebelum-tidur". */
  id: string;
  type: PathStepType;
  /** Localized kind label, e.g. "Doa" / "Surah". */
  kind: string;
  title: string;
  href: string;
};

const KIND_LABEL: Record<PathStepType, Record<Locale, string>> = {
  doa: { id: "Doa", en: "Dua" },
  surah: { id: "Surat", en: "Surah" },
  hadith: { id: "Hadith", en: "Hadith" },
  kisah: { id: "Kisah", en: "Story" },
};

const HREF_BASE: Record<PathStepType, string> = {
  doa: "/doa",
  surah: "/surat",
  hadith: "/hadith",
  kisah: "/kisah",
};

function lookupTitle(step: PathStep, locale: Locale): string | null {
  switch (step.type) {
    case "doa":
      return getDoaBySlug(step.slug)?.title[locale] ?? null;
    case "surah": {
      const s = getSurahBySlug(step.slug);
      return s ? s.name[locale] : null;
    }
    case "hadith":
      return getHadithBySlug(step.slug)?.title[locale] ?? null;
    case "kisah": {
      const p = getProphetBySlug(step.slug);
      return p ? p.name[locale] : null;
    }
  }
}

/**
 * Resolve a path's steps to linkable items, skipping any whose slug no longer
 * exists so a stale reference can never produce a broken link.
 */
export function resolvePathSteps(path: LearningPath, locale: Locale): ResolvedStep[] {
  return path.steps.flatMap((step) => {
    const title = lookupTitle(step, locale);
    if (!title) return [];
    return [
      {
        id: `${step.type}:${step.slug}`,
        type: step.type,
        kind: KIND_LABEL[step.type][locale],
        title,
        href: `${HREF_BASE[step.type]}/${step.slug}`,
      },
    ];
  });
}
