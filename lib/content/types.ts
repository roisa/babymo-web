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
  /** Branded OG card on play.babymo.id; derived from externalUrl when omitted. */
  image?: string;
  tags: string[];
};

/**
 * A standalone app surfaced in the "Apps" hub — tools parents can use with
 * their kids, not just things to read. Each app has its own deployment; we
 * either frame it inside the site (mode "embed", opens at /apps/<slug>) or
 * link out to it in a new tab (mode "external", like Games).
 */
export type App = {
  slug: string;
  emoji: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  /** The app's own deployment. iframe src when mode==="embed",
   *  link target (new tab) when mode==="external". */
  url: string;
  mode: "embed" | "external";
  /** Optional preview/OG image for the hub card; falls back to an
   *  emoji-on-gradient placeholder when omitted. */
  image?: string;
  tags: string[];
};

/**
 * One step in a Learning Path — a reference to an existing piece of content.
 * The type tells us which collection to resolve the slug against and which
 * route to link to.
 */
export type PathStepType = "doa" | "surah" | "hadith" | "kisah";

export type PathStep = {
  type: PathStepType;
  slug: string;
};

/**
 * A curated, ordered sequence that turns scattered content into a guided
 * journey ("First bedtime routine", "First short surahs"). Steps reference
 * existing doa / surah / hadith / kisah by slug — no content is duplicated.
 */
export type LearningPath = {
  slug: string;
  emoji: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  /** Display label for the target age, e.g. "3–5". */
  ageLabel: string;
  steps: PathStep[];
  published: string;
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
 * One of the 99 Names of Allah (Asmaul Husna).
 */
export type AsmaulHusna = {
  /** 1–99 */
  number: number;
  /** URL slug, e.g. "ar-rahman" */
  slug: string;
  arabic: string;
  transliteration: string;
  meaning: Record<Locale, string>;
  /** Warm, kid-friendly reflection on what the name means for us. */
  explanation: Record<Locale, string>;
  /** A concrete way for a parent to share the name with a child. */
  forKids: Record<Locale, string>;
};

/**
 * One recited text within a prayer step (e.g. one of the five niat,
 * or one part of the post-prayer dhikr sequence).
 */
export type SholatPart = {
  label?: Record<Locale, string>;
  arabic: string;
  transliteration: string;
  translation: Record<Locale, string>;
  /** e.g. "3×" — how many times it is repeated. */
  repeat?: string;
};

/**
 * A step of the daily prayer — its recitation(s), when it is read, and
 * a child-friendly note. The intent/niat, movements (rukun) and dhikr.
 */
export type BacaanSholat = {
  slug: string;
  /** Order within the prayer flow, for prev/next + index sorting. */
  order: number;
  category: "niat" | "gerakan" | "doa" | "dzikir";
  title: Record<Locale, string>;
  /** Short positioning line, e.g. "Dibaca setelah takbiratul ihram". */
  subtitle?: Record<Locale, string>;
  parts: SholatPart[];
  when: Record<Locale, string>;
  note?: Record<Locale, string>;
  /** When the step *is* a surah, link to it instead of reproducing it. */
  crossSurah?: string;
  published: string;
};

/**
 * One adhkar in the morning/evening remembrance (Al-Ma'tsurat). Reuses
 * SholatPart for its recitation(s). Quranic parts (Ayat Kursi) use
 * dataset-verified text; the 3 Quls + Sayyidul Istighfar cross-link to
 * their existing pages instead of being duplicated.
 */
export type DzikirItem = {
  slug: string;
  order: number;
  /** When it is read. Most are read both morning and evening. */
  time: "pagi" | "petang" | "keduanya";
  /** How many times, e.g. "3×", "7×", "100×". */
  count?: string;
  title: Record<Locale, string>;
  parts: SholatPart[];
  /** Fadhilah / why we read it — also the kid-friendly note. */
  benefit: Record<Locale, string>;
  source?: string;
  crossSurah?: string[];
  crossDoa?: string;
  published: string;
};

/**
 * An item in the Puasa / Ramadan hub — a niat, doa, sunnah-prayer niat,
 * or an amalan note. Reuses SholatPart for its recitation(s).
 */
export type PuasaItem = {
  slug: string;
  order: number;
  category: "niat" | "doa" | "sholat" | "amalan";
  title: Record<Locale, string>;
  subtitle?: Record<Locale, string>;
  parts: SholatPart[];
  when: Record<Locale, string>;
  note?: Record<Locale, string>;
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
  /**
   * "note"  — short first-person reflection from Abi/Umi (the default).
   * "story" — a longer third-person narrative children's story starring
   *           Baby Mo & Baby Ais, written as a picture-book draft (book
   *           inspiration). Rendered with a "Cerita Anak" badge instead of
   *           a narrator chip.
   */
  kind?: "note" | "story";
  /** Narrator voice — Abi (father) or Umi (mother). Defaults to "abi".
   *  Ignored for kind: "story". */
  pov?: "abi" | "umi";
  /** Optional Baby Mo pose filename (in /public/baby-mo-poses) to illustrate
   *  the story — picked to match the moment's mood. */
  pose?: string;
  /** Optional YouTube video id (e.g. a Baby Mo song/episode from the Momen
   *  page) embedded at the end of the story and emitted as VideoObject
   *  schema — cross-links the written story with the video for SEO. */
  video?: string;
  /** Optional surah slugs this story relates to (e.g. the Quls recited
   *  before sleep) — surfaces the story as "Cerita terkait" on those
   *  /surat pages. */
  surahs?: string[];
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
