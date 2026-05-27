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

export type Game = {
  slug: string;
  emoji: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  externalUrl: string;
  tags: string[];
};
