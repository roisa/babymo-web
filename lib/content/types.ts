import type { Locale } from "../i18n/config";

export type Grade = "sahih" | "hasan" | "dhaif" | "quran";

export type DoaSource = {
  type: "quran" | "hadith";
  reference: string;
  grade: Grade;
};

export type MomentPlatform =
  | "youtube"
  | "youtube-shorts"
  | "ig-post"
  | "ig-reel";

export type MomentCategory =
  | "before-sleep"
  | "morning-routine"
  | "daily-adab"
  | "quran-learning"
  | "ramadan-moments"
  | "muharram-activities"
  | "prophet-stories"
  | "family-activities";

export type Moment = {
  slug: string;
  platform: MomentPlatform;
  /** Canonical external URL (YouTube video, IG post, IG reel) */
  url: string;
  /** YouTube video id — required for click-to-load embed; null for IG */
  youtubeId?: string;
  /** Path to local thumbnail under public/, e.g. /moments/<slug>.jpg */
  thumbnail: string;
  /** Display duration "0:45" or "12:30". Optional. */
  duration?: string;
  title: Record<Locale, string>;
  /** Short caption — appears under title on cards (<= 120 chars) */
  caption: Record<Locale, string>;
  category: MomentCategory;
  /** Pin to "Featured" rail on homepage */
  featured?: boolean;
  /** Slugs of related doa/hadith/blog/parenting for cross-linking */
  related?: string[];
  /** ISO date used for sorting; falls back to publish time of the content. */
  publishedAt: string;
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

/**
 * Optional FAQ block for SEO-targeted posts. When present, the blog
 * detail page renders a visual accordion AND emits FAQPage JSON-LD
 * so Google can show rich snippets for these exact questions.
 */
export type BlogFaq = {
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
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
  /** Optional FAQ — drives both visual section and FAQPage schema */
  faq?: BlogFaq[];
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
  /**
   * One-line takeaway parents can screenshot and forward in WhatsApp.
   * Surface in a brave-green pull-quote on the detail page.
   */
  quote?: Record<Locale, string>;
  /**
   * Long-tail Google search query this page targets. Used in JSON-LD
   * FAQ schema (Question) so rich snippets show up for the exact query.
   */
  seoQuery?: Record<Locale, string>;
};

export type Game = {
  slug: string;
  emoji: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  externalUrl: string;
  tags: string[];
};

/**
 * Short surah from Juz 30 — for memorization and bedtime recitation.
 * Per-ayah breakdown lets us render line-by-line with the
 * transliteration and translation aligned.
 */
export type SurahAyah = {
  number: number;
  arabic: string;
  transliteration: string;
  translation: Record<Locale, string>;
};

export type Surah = {
  slug: string;
  /** Surah number in the mushaf (1–114) */
  number: number;
  name: { id: string; en: string };
  arabicName: string;
  meaning: { id: string; en: string };
  ayahCount: number;
  /** Juz number (1–30); short surahs are all Juz 30 */
  juz: number;
  revelation: "makki" | "madani";
  themes: string[];
  /** Short intro for kids — why this surah matters, ~2 sentences */
  introForKids: Record<Locale, string>;
  ayahs: SurahAyah[];
  /** Tafsir/explanation specifically written for children */
  tafsirForKids: Record<Locale, string>;
  /** When parents/kids typically recite this surah */
  whenToRead: Record<Locale, string>;
  searchQuery: Record<Locale, string>;
  published: string;
};

/**
 * Prophet story (Kisah 25 Nabi) — short, age-appropriate retellings
 * of the 25 prophets named in the Qur'an.
 */
export type Prophet = {
  slug: string;
  /** Order in traditional listing (1–25, ending with Muhammad ﷺ) */
  order: number;
  name: { id: string; en: string };
  arabicName: string;
  era: { id: string; en: string };
  /** One-line summary of who this prophet was */
  keyMoment: { id: string; en: string };
  /** Main story body — markdown-ish HTML, ~300–500 words */
  story: Record<Locale, string>;
  /** Three key lessons children take away */
  lessons: Record<Locale, string[]>;
  /** Related surah slugs (surahs that mention this prophet) */
  relatedSurah?: string[];
  /** Related doa slugs */
  relatedDoa?: string[];
  searchQuery: Record<Locale, string>;
  published: string;
};

/**
 * Catatan Salman — first-person notebook entries from the founder
 * about real moments with his kids. Different surface from blog:
 *   - intimate, not encyclopedic
 *   - one anchor (doa / hadith / parenting) per note, not bibliographies
 *   - ID-primary; EN translations preserve voice when present
 *   - title.id is required; en falls back to id
 */
export type CatatanAnchor = {
  type: "doa" | "hadith" | "parenting";
  slug: string;
};

export type Catatan = {
  slug: string;
  /** Which kid the note centers on — used for filtering chips */
  child: "mo" | "ais" | "both";
  /** ISO date string */
  published: string;
  title: Record<Locale, string>;
  hook: Record<Locale, string>;
  body: Record<Locale, string>;
  anchor: CatatanAnchor;
  /** Closing one-liner — the screenshot-shareable bit */
  takeaway: Record<Locale, string>;
  tags: string[];
  readingTimeMin: number;
};
