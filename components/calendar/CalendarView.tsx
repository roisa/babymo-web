"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { pathFor } from "@/lib/i18n/config";

// ─── Types — these mirror what the server resolves and serializes ──

export type RelatedItem = {
  kind: "blog" | "doa" | "parenting" | "hadith" | "catatan";
  slug: string;
  title: string;
};

export type CalendarCardData = {
  id: string;
  hijri: string;
  name: string;
  caption: string;
  gregorianRange: string;
  status: "active" | "upcoming" | "past";
  daysDelta: number;
  primaryBlog?: { slug: string; title: string };
  related: RelatedItem[];
};

export type CalendarMonth = {
  /** Hijri month 1-12 */
  month: number;
  year: number;
  label: string;
  eventCount: number;
  isCurrent: boolean;
};

type FilterKind = "all" | "doa" | "parenting" | "hadith" | "catatan" | "blog";

const FILTER_LABEL_ID: Record<FilterKind, string> = {
  all: "Semua",
  doa: "Doa",
  parenting: "Parenting",
  hadith: "Hadis",
  catatan: "Cerita",
  blog: "Artikel",
};

const FILTER_LABEL_EN: Record<FilterKind, string> = {
  all: "All",
  doa: "Du'as",
  parenting: "Parenting",
  hadith: "Hadith",
  catatan: "Stories",
  blog: "Articles",
};

const CHIP_TONE: Record<RelatedItem["kind"], string> = {
  blog: "border-hairline bg-paper text-ink hover:bg-paper-2",
  doa: "border-sage/25 bg-sage-soft text-sage-deep hover:bg-sage-soft/80",
  parenting: "border-hairline bg-paper-2 text-ink-soft hover:bg-paper",
  hadith: "border-clay/25 bg-clay-soft text-clay hover:bg-clay-soft/80",
  catatan: "border-brave/25 bg-brave-soft text-brave-deep hover:bg-brave-soft/80",
};

export function CalendarView({
  locale,
  active,
  upcoming,
  past,
  months,
}: {
  locale: Locale;
  active: CalendarCardData[];
  upcoming: CalendarCardData[];
  past: CalendarCardData[];
  months: CalendarMonth[];
}) {
  const [filter, setFilter] = useState<FilterKind>("all");
  const FILTER_LABELS = locale === "id" ? FILTER_LABEL_ID : FILTER_LABEL_EN;

  // Count per type across ALL events — used to disable filters with 0 matches
  const counts = useMemo(() => {
    const c: Record<FilterKind, number> = {
      all: active.length + upcoming.length + past.length,
      doa: 0,
      parenting: 0,
      hadith: 0,
      catatan: 0,
      blog: 0,
    };
    for (const ev of [...active, ...upcoming, ...past]) {
      for (const r of ev.related) c[r.kind] += 1;
      if (ev.primaryBlog) c.blog += 1;
    }
    return c;
  }, [active, upcoming, past]);

  const filters: FilterKind[] = ["all", "doa", "parenting", "hadith", "catatan", "blog"];

  return (
    <>
      {/* 12-month strip */}
      <section className="mb-10">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-whisper">
          {locale === "id" ? "12 bulan ke depan" : "Next 12 months"}
        </p>
        <div className="-mx-5 overflow-x-auto px-5 sm:-mx-7 sm:px-7">
          <div className="flex gap-2 pb-2">
            {months.map((m) => (
              <div
                key={`${m.year}-${m.month}`}
                className={`flex shrink-0 flex-col items-center justify-center rounded-2xl border px-4 py-3 text-center transition ${
                  m.isCurrent
                    ? "border-brave/40 bg-brave-soft text-brave-deep"
                    : m.eventCount > 0
                      ? "border-hairline bg-paper text-ink"
                      : "border-hairline bg-paper-2/60 text-whisper"
                }`}
                style={{ minWidth: 116 }}
                aria-label={`${m.label}, ${m.eventCount} event${m.eventCount === 1 ? "" : "s"}`}
              >
                <div className="font-display text-[15px] font-medium leading-tight">
                  {m.label}
                </div>
                <div className="mt-1 text-[10.5px] uppercase tracking-[0.1em] opacity-70">
                  {m.year} H
                </div>
                <div className="mt-2 flex items-center gap-1">
                  {m.eventCount > 0 ? (
                    Array.from({ length: Math.min(m.eventCount, 4) }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-1.5 rounded-full ${
                          m.isCurrent ? "bg-brave" : "bg-sage"
                        }`}
                      />
                    ))
                  ) : (
                    <span className="text-[10px] opacity-60">·</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter chips */}
      <section className="mb-10">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-whisper">
          {locale === "id" ? "Filter konten terkait" : "Filter related content"}
        </p>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const disabled = f !== "all" && counts[f] === 0;
            const isActive = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => !disabled && setFilter(f)}
                disabled={disabled}
                className={`tap inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition ${
                  isActive
                    ? "border-brave bg-brave text-paper"
                    : disabled
                      ? "border-hairline bg-paper-2/60 text-whisper opacity-50"
                      : "border-hairline bg-paper text-ink hover:border-brave/40"
                }`}
              >
                {FILTER_LABELS[f]}
                {f !== "all" && (
                  <span className={`text-[11px] ${isActive ? "opacity-80" : "opacity-60"}`}>
                    {counts[f]}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Active */}
      {active.length > 0 && (
        <CardSection
          eyebrow={locale === "id" ? "Sedang berlangsung" : "Happening now"}
          title={
            locale === "id"
              ? `${active.length} momen sedang aktif`
              : `${active.length} active event${active.length === 1 ? "" : "s"}`
          }
          pulse
          cards={active}
          locale={locale}
          filter={filter}
        />
      )}

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <CardSection
          eyebrow={locale === "id" ? "Akan datang" : "Coming up"}
          title={locale === "id" ? "Yang dinanti" : "What's next"}
          cards={upcoming}
          locale={locale}
          filter={filter}
        />
      )}

      {/* Past */}
      {past.length > 0 && (
        <CardSection
          eyebrow={locale === "id" ? "Yang baru lewat" : "Recently passed"}
          title={locale === "id" ? "Untuk dikenang" : "To remember"}
          cards={past}
          locale={locale}
          filter={filter}
        />
      )}
    </>
  );
}

// ─── Sub-components ────────────────────────────────────────────────

function CardSection({
  eyebrow,
  title,
  cards,
  locale,
  filter,
  pulse,
}: {
  eyebrow: string;
  title: string;
  cards: CalendarCardData[];
  locale: Locale;
  filter: FilterKind;
  pulse?: boolean;
}) {
  return (
    <section className="mb-12">
      <div>
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
          {pulse && (
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-brave text-brave" />
          )}
          {eyebrow}
        </p>
        <h2 className="font-display mt-2 text-[26px] font-medium leading-snug text-ink sm:text-[30px]">
          {title}
        </h2>
      </div>
      <div className="mt-6 grid gap-4">
        {cards.map((c) => (
          <EventCard key={c.id} card={c} locale={locale} filter={filter} />
        ))}
      </div>
    </section>
  );
}

function EventCard({
  card,
  locale,
  filter,
}: {
  card: CalendarCardData;
  locale: Locale;
  filter: FilterKind;
}) {
  const statusLabel =
    card.status === "active"
      ? locale === "id"
        ? "Aktif sekarang"
        : "Active now"
      : card.status === "upcoming"
        ? locale === "id"
          ? `${card.daysDelta} hari lagi`
          : `In ${card.daysDelta} day${card.daysDelta === 1 ? "" : "s"}`
        : locale === "id"
          ? `${card.daysDelta} hari lalu`
          : `${card.daysDelta} day${card.daysDelta === 1 ? "" : "s"} ago`;

  const accentBg =
    card.status === "active"
      ? "bg-brave-soft/40 border-brave/30"
      : card.status === "upcoming"
        ? "bg-paper border-hairline"
        : "bg-paper-2 border-hairline";

  const pillColor =
    card.status === "active"
      ? "bg-brave text-paper"
      : card.status === "upcoming"
        ? "bg-clay-soft text-clay"
        : "bg-paper-2 text-whisper";

  // Filter related items
  const visibleRelated =
    filter === "all" ? card.related : card.related.filter((r) => r.kind === filter);
  const showPrimaryBlog =
    card.primaryBlog && (filter === "all" || filter === "blog");

  return (
    <article className={`rounded-[24px] border p-6 sm:p-7 ${accentBg}`}>
      <div className="flex flex-wrap items-center gap-2 text-[11px]">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-semibold uppercase tracking-[0.1em] ${pillColor}`}
        >
          {card.status === "active" && (
            <span className="pulse-dot inline-block h-1 w-1 rounded-full bg-current text-current" />
          )}
          {statusLabel}
        </span>
        <span className="text-whisper">{card.hijri}</span>
        <span className="text-whisper">·</span>
        <span className="text-whisper">{card.gregorianRange}</span>
      </div>

      <h3 className="font-display mt-3 text-[24px] font-medium leading-snug text-ink sm:text-[28px]">
        {card.name}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-whisper">{card.caption}</p>

      {showPrimaryBlog && card.primaryBlog && (
        <Link
          href={pathFor(locale, `/blog/${card.primaryBlog.slug}`)}
          className="lift tap mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-semibold text-paper hover:bg-brave-deep"
        >
          {locale === "id" ? "Baca panduan utama" : "Read main guide"} →
        </Link>
      )}

      {visibleRelated.length > 0 && (
        <div className="mt-6 border-t border-hairline/70 pt-5">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-whisper">
            {locale === "id" ? "Yang terkait" : "Related"}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {visibleRelated.map((r) => (
              <Link
                key={`${r.kind}-${r.slug}`}
                href={pathFor(locale, kindToHref(r))}
                className={`tap inline-flex max-w-full items-center gap-2 rounded-full border px-3 py-1.5 text-[12.5px] transition ${CHIP_TONE[r.kind]}`}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.1em] opacity-70">
                  {kindLabel(r.kind, locale)}
                </span>
                <span className="truncate font-medium">{r.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function kindToHref(r: RelatedItem): string {
  switch (r.kind) {
    case "blog":
      return `/blog/${r.slug}`;
    case "doa":
      return `/doa/${r.slug}`;
    case "parenting":
      return `/parenting/${r.slug}`;
    case "hadith":
      return `/hadith/${r.slug}`;
    case "catatan":
      return `/catatan/${r.slug}`;
  }
}

function kindLabel(k: RelatedItem["kind"], locale: Locale): string {
  if (locale === "id")
    return { blog: "Artikel", doa: "Doa", parenting: "Parenting", hadith: "Hadis", catatan: "Cerita" }[k];
  return { blog: "Article", doa: "Du'a", parenting: "Parenting", hadith: "Hadith", catatan: "Story" }[k];
}
