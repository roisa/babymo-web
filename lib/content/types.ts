import type { Locale } from "../i18n/config";

export type Grade = "sahih" | "hasan" | "dhaif" | "quran";

export type DoaSource = {
  type: "quran" | "hadith";
  reference: string;
  grade: Grade;
};

export type Person = {
  slug: string;
  name: string;
  /** team = staff/editor, reviewer = scholar reviewer, founder = founding member */
  role: "team" | "reviewer" | "founder";
  title: Record<Locale, string>;
  bio: Record<Locale, string>;
  credentials?: string[];
  /** Path to public/people/<slug>.png (optional — falls back to initials) */
  photo?: string;
  socials?: {
    youtube?: string;
    instagram?: string;
    tiktok?: string;
    website?: string;
  };
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
  /** Slug of a Person who authored the entry — defaults to tim-baby-mo */
  author?: string;
  /** Slug of a Person who reviewed the entry (qualified scholar) */
  reviewedBy?: string;
};

export type BlogKit = {
  /** Strong 1–2 line quote — for WhatsApp share / image quote / Twitter */
  quote: Record<Locale, string>;
  /** 6–7 carousel slides for Instagram (each ~30–60 chars title, ~120–180 chars body) */
  carousel: Record<Locale, { title: string; body: string }[]>;
  /** 60-second script for TikTok / YouTube Shorts — hook + body + CTA */
  shortScript: Record<Locale, string>;
  /** Pinterest pin: catchy title + long-tail-keyword description */
  pin: Record<Locale, { title: string; description: string }>;
  /** Bullet list that prints well as a one-page PDF (≤ 10 items) */
  checklist: Record<Locale, string[]>;
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
  /** Person slug — used to look up byline + JSON-LD author */
  author: string;
  reviewedBy?: string;
  /** Optional kit for cross-channel content multiplication */
  kit?: BlogKit;
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
  reviewedBy?: string;
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
