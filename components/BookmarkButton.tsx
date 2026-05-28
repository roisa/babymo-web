"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import {
  type BookmarkType,
  isBookmarked,
  onBookmarksChange,
  toggleBookmark,
} from "@/lib/bookmarks";

type Props = {
  type: BookmarkType;
  slug: string;
  title: string;
  /** Locale-relative path, e.g. "/doa/sebelum-tidur" */
  url: string;
  locale: Locale;
  /** "inline" = pill with label; "icon" = compact heart only */
  variant?: "inline" | "icon";
};

export function BookmarkButton({
  type,
  slug,
  title,
  url,
  locale,
  variant = "inline",
}: Props) {
  const [saved, setSaved] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSaved(isBookmarked(type, slug));
    return onBookmarksChange(() => setSaved(isBookmarked(type, slug)));
  }, [type, slug]);

  function onClick() {
    setSaved(toggleBookmark({ type, slug, title, url }));
  }

  const labelSave = locale === "id" ? "Simpan" : "Save";
  const labelSaved = locale === "id" ? "Tersimpan" : "Saved";

  // Avoid hydration mismatch — render the unsaved baseline until mounted
  const isSaved = mounted && saved;

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={isSaved}
        aria-label={isSaved ? labelSaved : labelSave}
        className={`tap inline-flex h-9 w-9 items-center justify-center rounded-full border transition ${
          isSaved
            ? "border-brave/40 bg-brave-soft text-brave-deep"
            : "border-hairline bg-paper text-whisper hover:border-brave/40 hover:text-brave-deep"
        }`}
      >
        <HeartIcon filled={isSaved} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSaved}
      className={`tap inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[13px] font-semibold transition ${
        isSaved
          ? "border-brave/40 bg-brave-soft text-brave-deep"
          : "border-hairline bg-paper text-ink-soft hover:border-brave/40"
      }`}
    >
      <HeartIcon filled={isSaved} />
      {isSaved ? labelSaved : labelSave}
    </button>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
    </svg>
  );
}
