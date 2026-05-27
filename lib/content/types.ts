import type { Locale } from "../i18n/config";

export type Grade = "sahih" | "hasan" | "dhaif" | "quran";

export type DoaSource = {
  type: "quran" | "hadith";
  reference: string;
  grade: Grade;
};

export type Doa = {
  slug: string;
  /** Arabic text — same across locales */
  arabic: string;
  /** Transliteration — same across locales */
  transliteration: string;
  /** Title localized */
  title: Record<Locale, string>;
  /** Translation localized */
  translation: Record<Locale, string>;
  /** Short context shown on cards */
  context: Record<Locale, string>;
  source: DoaSource;
  ages: number[];
  situations: string[];
  /** Slugs of related doa */
  related: string[];
  published: string; // ISO date
  updated: string;
};

export type BlogPost = {
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  body: Record<Locale, string>; // simple markdown-ish HTML for v1
  tags: string[];
  published: string;
  updated: string;
  readingTimeMin: number;
  author: string;
};

export type Hadith = {
  slug: string;
  arabic: string;
  /** Localized title — short, parenting-framed */
  title: Record<Locale, string>;
  /** Full translated narration */
  translation: Record<Locale, string>;
  /** Why it matters for parenting — 2-3 sentences */
  parentingNote: Record<Locale, string>;
  narrator: string;
  source: {
    collection: string; // "Bukhari", "Muslim", "Abu Dawud" ...
    reference: string;  // "HR. Bukhari 5995"
    grade: "sahih" | "hasan" | "dhaif";
  };
  themes: string[];
  /** Related entity slugs */
  relatedDoa: string[];
  relatedSituations: string[];
  published: string;
  updated: string;
};

export type ParentingSituation = {
  slug: string;
  title: Record<Locale, string>;
  /** ~60-char excerpt for cards */
  excerpt: Record<Locale, string>;
  /** Symptoms / signs the child shows */
  signs: Record<Locale, string[]>;
  /** Actionable steps the parent can take */
  steps: Record<Locale, string[]>;
  /** Islamic perspective — short, sourced */
  islamicNote: Record<Locale, string>;
  /** Recommended doa slugs */
  recommendedDoa: string[];
  /** Supporting hadith slugs */
  supportingHadith: string[];
  ageMin: number;
  ageMax: number;
  category: "perilaku" | "emosi" | "rutinitas" | "spiritual" | "sosial";
  published: string;
  updated: string;
};

export type Game = {
  slug: string;
  emoji: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  externalUrl: string;
  tags: string[];
};
