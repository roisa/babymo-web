import type { Locale } from "../i18n/config";

/** A YouTube video as stored in public/data/videos.json */
export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  /** YouTube CDN thumbnail URL (maxres if available, else hq) */
  thumbnail: string;
  /** Human-readable duration: "0:32", "17:27", "1:05:00" */
  duration: string;
  /** Total seconds — useful for sorting / "shorts" detection */
  durationSeconds: number;
  /** ISO 8601 timestamp */
  publishedAt: string;
  url: string;
};

export type YouTubeData = {
  channel: {
    id: string;
    title: string;
    handle: string;
  };
  /** ISO 8601 timestamp of when the data was last fetched */
  fetchedAt: string;
  videos: YouTubeVideo[];
};

export type VideoCategory =
  | "before-sleep"
  | "morning-routine"
  | "daily-adab"
  | "quran-learning"
  | "ramadan-moments"
  | "muharram-activities"
  | "prophet-stories"
  | "family-activities";

/** Editorial overlay — applied on top of YouTube API data */
export type VideoOverlay = {
  category?: VideoCategory;
  featured?: boolean;
  /** Higher numbers sort earlier among featured videos (0 = default).
   *  Use to pin a specific video to the front of the homepage Momen row. */
  priority?: number;
  /** References to other entities — e.g. "doa/sebelum-tidur" */
  related?: string[];
  /** Optional bilingual caption that overrides the YT description */
  caption?: Record<Locale, string>;
  /** Optional bilingual title override */
  title?: Record<Locale, string>;
};

/** A YouTube video merged with its editorial overlay */
export type EnrichedVideo = YouTubeVideo & {
  overlay: VideoOverlay;
  isShort: boolean;
};
