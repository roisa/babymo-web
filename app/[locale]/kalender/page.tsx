import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";
import {
  type IslamicEvent,
  daysSince,
  daysUntil,
  eventHijriPosition,
  eventStatus,
  formatGregorianRange,
  groupEvents,
  HIJRI_MONTHS,
  hijriPosition,
  islamicCalendar,
  nextHijriMonths,
  todayHijri,
} from "@/lib/islamic-calendar";
import { getDoaBySlug } from "@/lib/content/doa";
import { getBlogPostBySlug } from "@/lib/content/blog";
import { getParentingBySlug } from "@/lib/content/parenting";
import { getHadithBySlug } from "@/lib/content/hadith";
import { getCatatanBySlug } from "@/lib/content/catatan";
import {
  CalendarView,
  type CalendarCardData,
  type CalendarMonth,
  type RelatedItem,
} from "@/components/calendar/CalendarView";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/kalender",
    title:
      locale === "id"
        ? "Kalender Islam — Yang Terjadi, Yang Akan Datang"
        : "Islamic Calendar — Now, Next, Past",
    description:
      locale === "id"
        ? "Kalender Hijriyah lengkap dengan momen-momen yang sedang berlangsung dan yang akan datang — Idul Adha, Haji, Asyura, Ramadan — semua terhubung dengan doa, hadith, panduan parenting, dan artikel relevan di Baby Mo."
        : "The Hijri calendar with what's happening and what's coming — Eid al-Adha, Hajj, Ashura, Ramadan — all linked to relevant duas, hadith, parenting guides, and articles on Baby Mo.",
  });
}

function resolveCard(
  e: IslamicEvent,
  locale: Locale,
  now: Date,
): CalendarCardData {
  const status = eventStatus(e, now);
  const daysDelta =
    status === "upcoming" ? daysUntil(e, now) : status === "past" ? daysSince(e, now) : 0;

  const related: RelatedItem[] = [];

  // Extra blog posts (primary blog handled separately)
  for (const slug of e.extraBlogSlugs ?? []) {
    const p = getBlogPostBySlug(slug);
    if (p) related.push({ kind: "blog", slug, title: p.title[locale] });
  }
  for (const slug of e.doaSlugs ?? []) {
    const d = getDoaBySlug(slug);
    if (d) related.push({ kind: "doa", slug, title: d.title[locale] });
  }
  for (const slug of e.parentingSlugs ?? []) {
    const p = getParentingBySlug(slug);
    if (p) related.push({ kind: "parenting", slug, title: p.title[locale] });
  }
  for (const slug of e.hadithSlugs ?? []) {
    const h = getHadithBySlug(slug);
    if (h) related.push({ kind: "hadith", slug, title: h.title[locale] });
  }
  for (const slug of e.catatanSlugs ?? []) {
    const c = getCatatanBySlug(slug);
    if (c) related.push({ kind: "catatan", slug, title: c.title[locale] });
  }

  const primaryBlog = e.blogSlug
    ? (() => {
        const p = getBlogPostBySlug(e.blogSlug!);
        return p ? { slug: e.blogSlug!, title: p.title[locale] } : undefined;
      })()
    : undefined;

  return {
    id: e.id,
    hijri: e.hijri,
    name: e.name[locale],
    caption: e.caption[locale],
    gregorianRange: formatGregorianRange(e, locale),
    status,
    daysDelta,
    primaryBlog,
    related,
  };
}

function buildMonths(locale: Locale, now: Date): CalendarMonth[] {
  const monthsRaw = nextHijriMonths(12, now);
  const currentPos = hijriPosition(now);

  // Count events per Hijri month
  const eventCounts = new Map<string, number>();
  for (const e of islamicCalendar) {
    const pos = eventHijriPosition(e);
    const key = `${pos.year}-${pos.month}`;
    eventCounts.set(key, (eventCounts.get(key) ?? 0) + 1);
  }

  return monthsRaw.map((m) => ({
    month: m.month,
    year: m.year,
    label: HIJRI_MONTHS[locale][m.month - 1]!,
    eventCount: eventCounts.get(`${m.year}-${m.month}`) ?? 0,
    isCurrent: m.month === currentPos.month && m.year === currentPos.year,
  }));
}

export default async function CalendarPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const now = new Date();
  const { active, upcoming, past } = groupEvents(now);
  const upcomingShown = upcoming.slice(0, 6);
  const pastShown = past.slice(0, 4);

  const activeCards = active.map((e) => resolveCard(e, l, now));
  const upcomingCards = upcomingShown.map((e) => resolveCard(e, l, now));
  const pastCards = pastShown.map((e) => resolveCard(e, l, now));
  const months = buildMonths(l, now);
  const hijriToday = todayHijri(l, now);

  return (
    <>
      <Header locale={l} currentPath="/kalender" />
      <main id="main" className="mx-auto max-w-4xl px-5 pb-28 pt-12 sm:px-7 sm:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <span className="text-ink">
            {l === "id" ? "Kalender Islam" : "Islamic Calendar"}
          </span>
        </nav>

        {/* Hero — today's Hijri date */}
        <header className="mb-12 rounded-[28px] border border-hairline bg-paper-2 p-8 sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            {l === "id" ? "Hari ini di kalender islam" : "Today in the Islamic calendar"}
          </p>
          <p className="font-display mt-3 text-[36px] font-medium leading-[1.05] text-ink sm:text-[44px]">
            {hijriToday}
          </p>
          <p className="mt-3 text-[14.5px] leading-relaxed text-whisper">
            {l === "id"
              ? "Penanggalan diperbarui setiap hari. Tanggal Hijriyah bisa berbeda ±1 hari tergantung rukyatul hilal."
              : "Updated daily. Hijri dates can differ by ±1 day depending on moon sighting."}
          </p>
        </header>

        <CalendarView
          locale={l}
          active={activeCards}
          upcoming={upcomingCards}
          past={pastCards}
          months={months}
        />

        <p className="mt-12 rounded-[18px] border border-hairline bg-paper px-5 py-4 text-[12.5px] leading-relaxed text-whisper">
          {l === "id"
            ? "Halaman ini diperbarui otomatis setiap hari. Setiap momen Islami terhubung dengan doa, hadis, panduan parenting, dan artikel terkait — cara Baby Mo membantu keluarga menjalani satu tahun penuh ibadah."
            : "This page updates automatically each day. Every Islamic moment is linked to relevant du'as, hadith, parenting guides, and articles — Baby Mo's way of accompanying a family through a full year of worship."}
        </p>
      </main>

      <Footer locale={l} currentPath="/kalender" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            {
              name: l === "id" ? "Kalender Islam" : "Islamic Calendar",
              path: "/kalender",
            },
          ]),
        )}
      />
    </>
  );
}
