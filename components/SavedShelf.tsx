"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { type Locale, pathFor } from "@/lib/i18n/config";
import {
  type Bookmark,
  type BookmarkType,
  getBookmarks,
  onBookmarksChange,
  removeBookmark,
} from "@/lib/bookmarks";

const TYPE_LABEL: Record<BookmarkType, { id: string; en: string }> = {
  doa: { id: "Doa", en: "Du'a" },
  hadith: { id: "Hadis", en: "Hadith" },
  parenting: { id: "Parenting", en: "Parenting" },
  catatan: { id: "Catatan", en: "Note" },
  surah: { id: "Surat", en: "Surah" },
  blog: { id: "Artikel", en: "Article" },
  prophet: { id: "Kisah Nabi", en: "Prophet" },
};

const TYPE_TONE: Record<BookmarkType, string> = {
  doa: "bg-sage-soft text-sage-deep",
  hadith: "bg-clay/15 text-clay",
  parenting: "bg-paper-2 text-ink-soft",
  catatan: "bg-brave-soft text-brave-deep",
  surah: "bg-brave/15 text-brave-deep",
  blog: "bg-ink/8 text-ink",
  prophet: "bg-sage/15 text-sage-deep",
};

type Props = {
  locale: Locale;
  /** "homepage" hides entirely when empty; "page" shows empty state */
  context: "homepage" | "page";
  /** Max items to show (homepage). Omit for all. */
  limit?: number;
};

export function SavedShelf({ locale, context, limit }: Props) {
  const [items, setItems] = useState<Bookmark[] | null>(null);

  useEffect(() => {
    const refresh = () => setItems(getBookmarks());
    refresh();
    return onBookmarksChange(refresh);
  }, []);

  // Server + first paint: render nothing to avoid hydration mismatch
  if (items === null) {
    return context === "page" ? <EmptyState locale={locale} pending /> : null;
  }

  if (items.length === 0) {
    return context === "homepage" ? null : <EmptyState locale={locale} />;
  }

  const shown = limit ? items.slice(0, limit) : items;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {shown.map((b) => (
        <div
          key={`${b.type}-${b.slug}`}
          className="group relative flex items-start gap-3 rounded-[18px] border border-hairline bg-paper p-4"
        >
          <Link
            href={pathFor(locale, b.url)}
            className="min-w-0 flex-1"
          >
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] ${TYPE_TONE[b.type]}`}
            >
              {TYPE_LABEL[b.type][locale]}
            </span>
            <p className="mt-1.5 line-clamp-2 text-[14.5px] font-medium leading-snug text-ink group-hover:text-brave-deep">
              {b.title}
            </p>
          </Link>
          <button
            type="button"
            onClick={() => removeBookmark(b.type, b.slug)}
            aria-label={locale === "id" ? "Hapus dari tersimpan" : "Remove from saved"}
            className="tap shrink-0 rounded-full p-1.5 text-whisper transition hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}

/**
 * Homepage section wrapper — renders the heading + shelf ONLY when the
 * user has at least one bookmark. Fully client-side; nothing on server.
 */
export function SavedHomeSection({ locale }: { locale: Locale }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const refresh = () => setCount(getBookmarks().length);
    refresh();
    return onBookmarksChange(refresh);
  }, []);

  if (!count) return null; // null on server + empty → render nothing

  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-7 sm:pt-20">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
            </svg>
            {locale === "id" ? "Tersimpan untukmu" : "Saved for you"}
          </p>
          <h2 className="font-display mt-2 text-[26px] font-medium leading-snug text-ink sm:text-[30px]">
            {locale === "id" ? "Koleksi pribadimu" : "Your personal collection"}
          </h2>
        </div>
        <Link
          href={pathFor(locale, "/tersimpan")}
          className="tap hidden whitespace-nowrap text-[13.5px] font-semibold text-brave-deep hover:underline sm:inline-flex"
        >
          {locale === "id" ? "Lihat semua" : "View all"} →
        </Link>
      </div>
      <SavedShelf locale={locale} context="homepage" limit={4} />
    </section>
  );
}

function EmptyState({ locale, pending }: { locale: Locale; pending?: boolean }) {
  if (pending) {
    return (
      <div className="rounded-[20px] border border-hairline bg-paper-2/50 p-8 text-center text-[14px] text-whisper">
        {locale === "id" ? "Memuat…" : "Loading…"}
      </div>
    );
  }
  return (
    <div className="rounded-[22px] border border-dashed border-hairline bg-paper-2/40 p-10 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brave-soft text-brave-deep">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
        </svg>
      </div>
      <p className="font-serif text-[18px] font-medium text-ink">
        {locale === "id" ? "Belum ada yang tersimpan" : "Nothing saved yet"}
      </p>
      <p className="mx-auto mt-2 max-w-sm text-[14px] leading-relaxed text-whisper">
        {locale === "id"
          ? "Ketuk ikon hati ❤ di doa, hadis, surat, atau catatan mana pun untuk menyimpannya di sini — siap dibaca bersama si kecil kapan saja."
          : "Tap the heart ❤ on any du'a, hadith, surah, or note to keep it here — ready to read with your little one anytime."}
      </p>
    </div>
  );
}
