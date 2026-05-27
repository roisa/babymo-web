"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { type Locale, asset, basePath, pathFor } from "@/lib/i18n/config";

type SearchEntry = {
  type: "doa" | "hadith" | "parenting" | "blog" | "catatan";
  slug: string;
  url: string;
  title: { id: string; en: string };
  excerpt: { id: string; en: string };
  keywords: { id: string; en: string };
};

type Props = { locale: Locale };

const TYPE_LABEL: Record<SearchEntry["type"], { id: string; en: string }> = {
  doa: { id: "Doa", en: "Dua" },
  hadith: { id: "Hadis", en: "Hadith" },
  parenting: { id: "Parenting", en: "Parenting" },
  blog: { id: "Artikel", en: "Article" },
  catatan: { id: "Catatan", en: "Notes" },
};

const TYPE_COLOR: Record<SearchEntry["type"], string> = {
  doa: "bg-sage-soft text-sage-deep",
  hadith: "bg-clay/15 text-clay",
  parenting: "bg-paper-2 text-ink-soft",
  blog: "bg-ink/8 text-ink",
  catatan: "bg-brave-soft text-brave-deep",
};

export function SearchOverlay({ locale }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchEntry[] | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut + cmd+k
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "/" && !open) {
        const t = e.target as HTMLElement;
        if (
          t &&
          (t.tagName === "INPUT" ||
            t.tagName === "TEXTAREA" ||
            t.isContentEditable)
        )
          return;
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Body scroll lock + focus input when opened
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => inputRef.current?.focus(), 30);
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Lazy-load the index on first open
  useEffect(() => {
    if (!open || index || loading) return;
    setLoading(true);
    fetch(`${basePath}/data/search.json`, { cache: "force-cache" })
      .then((r) => r.json())
      .then((data) => setIndex(data as SearchEntry[]))
      .catch(() => setIndex([]))
      .finally(() => setLoading(false));
  }, [open, index, loading]);

  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!index) return [];
    if (!q) {
      // Show curated starter set: first 3 of each type
      const grouped: Record<string, SearchEntry[]> = {};
      for (const e of index) (grouped[e.type] ??= []).push(e);
      return [
        ...(grouped.doa?.slice(0, 3) ?? []),
        ...(grouped.hadith?.slice(0, 2) ?? []),
        ...(grouped.parenting?.slice(0, 2) ?? []),
        ...(grouped.blog?.slice(0, 2) ?? []),
      ];
    }
    const terms = q.split(/\s+/).filter(Boolean);
    const scored: { entry: SearchEntry; score: number }[] = [];
    for (const entry of index) {
      const hay = entry.keywords[locale] || entry.keywords.id;
      const titleHay = (entry.title[locale] || entry.title.id).toLowerCase();
      let score = 0;
      for (const t of terms) {
        if (titleHay.includes(t)) score += 10;
        else if (hay.includes(t)) score += 3;
        else {
          score = -1;
          break;
        }
      }
      if (score > 0) scored.push({ entry, score });
    }
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 24).map((s) => s.entry);
  }, [index, q, locale]);

  return (
    <>
      <button
        type="button"
        aria-label={locale === "id" ? "Cari" : "Search"}
        onClick={() => setOpen(true)}
        className="tap flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-paper/60 text-ink-soft transition hover:border-sage/40 hover:text-sage-deep"
      >
        <SearchIcon />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={locale === "id" ? "Pencarian" : "Search"}
          className="fixed inset-0 z-[60] flex items-start justify-center bg-ink/40 px-4 pt-10 backdrop-blur-sm sm:pt-24"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="w-full max-w-2xl overflow-hidden rounded-[24px] border border-hairline bg-paper shadow-[0_30px_60px_-15px_rgba(15,18,19,0.45)]">
            <div className="flex items-center gap-2 border-b border-hairline px-4 py-3">
              <span className="text-whisper">
                <SearchIcon />
              </span>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  locale === "id"
                    ? "Cari doa, hadis, artikel…"
                    : "Search duas, hadiths, articles…"
                }
                className="flex-1 bg-transparent text-[15.5px] text-ink placeholder:text-whisper focus:outline-none"
              />
              <button
                type="button"
                aria-label={locale === "id" ? "Tutup" : "Close"}
                onClick={() => setOpen(false)}
                className="tap rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper hover:text-ink"
              >
                ESC
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto px-2 py-2">
              {loading && (
                <div className="px-4 py-6 text-[14px] text-whisper">
                  {locale === "id" ? "Memuat indeks…" : "Loading index…"}
                </div>
              )}
              {!loading && results.length === 0 && q && (
                <div className="px-4 py-6 text-[14px] text-whisper">
                  {locale === "id"
                    ? `Tidak ada hasil untuk "${query}"`
                    : `No results for "${query}"`}
                </div>
              )}
              <ul className="divide-y divide-hairline">
                {results.map((r) => (
                  <li key={`${r.type}-${r.slug}`}>
                    <Link
                      href={pathFor(locale, r.url)}
                      onClick={() => setOpen(false)}
                      className="block rounded-[14px] px-4 py-3 transition hover:bg-paper-2"
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] ${TYPE_COLOR[r.type]}`}
                        >
                          {TYPE_LABEL[r.type][locale]}
                        </span>
                      </div>
                      <p className="text-[15px] font-medium leading-snug text-ink">
                        {r.title[locale] || r.title.id}
                      </p>
                      {(r.excerpt[locale] || r.excerpt.id) && (
                        <p className="mt-0.5 line-clamp-2 text-[13px] text-whisper">
                          {r.excerpt[locale] || r.excerpt.id}
                        </p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between border-t border-hairline bg-paper-2/60 px-4 py-2 text-[11px] text-whisper">
              <span>
                {locale === "id"
                  ? `${index?.length ?? "…"} entri terindeks`
                  : `${index?.length ?? "…"} indexed`}
              </span>
              <span className="hidden sm:inline">
                {locale === "id" ? "Tekan" : "Press"}{" "}
                <kbd className="rounded border border-hairline bg-paper px-1.5">
                  /
                </kbd>{" "}
                {locale === "id" ? "untuk membuka" : "to open"}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
