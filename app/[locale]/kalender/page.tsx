import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, absoluteUrl, isLocale, locales, pathFor } from "@/lib/i18n/config";
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
  formatGregorianRange,
  groupEvents,
  todayHijri,
} from "@/lib/islamic-calendar";
import { getDoaBySlug } from "@/lib/content/doa";
import { getBlogPostBySlug } from "@/lib/content/blog";
import { getParentingBySlug } from "@/lib/content/parenting";
import { getHadithBySlug } from "@/lib/content/hadith";
import { getCatatanBySlug } from "@/lib/content/catatan";

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

export default async function CalendarPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const { active, upcoming, past } = groupEvents();
  const upcomingShown = upcoming.slice(0, 6);
  const pastShown = past.slice(0, 4);
  const hijriToday = todayHijri(l);

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

        {/* NOW */}
        {active.length > 0 && (
          <section className="mb-12">
            <SectionTitle
              eyebrow={l === "id" ? "Sedang berlangsung" : "Happening now"}
              title={
                l === "id"
                  ? `${active.length} momen sedang aktif`
                  : `${active.length} active event${active.length === 1 ? "" : "s"}`
              }
              pulse
            />
            <div className="mt-6 grid gap-4">
              {active.map((e) => (
                <EventCard key={e.id} event={e} locale={l} status="active" />
              ))}
            </div>
          </section>
        )}

        {/* NEXT */}
        {upcomingShown.length > 0 && (
          <section className="mb-12">
            <SectionTitle
              eyebrow={l === "id" ? "Akan datang" : "Coming up"}
              title={l === "id" ? "Yang dinanti" : "What's next"}
            />
            <div className="mt-6 grid gap-4">
              {upcomingShown.map((e) => (
                <EventCard key={e.id} event={e} locale={l} status="upcoming" />
              ))}
            </div>
          </section>
        )}

        {/* PAST */}
        {pastShown.length > 0 && (
          <section className="mb-8">
            <SectionTitle
              eyebrow={l === "id" ? "Yang baru lewat" : "Recently passed"}
              title={l === "id" ? "Untuk dikenang" : "To remember"}
            />
            <div className="mt-6 grid gap-4">
              {pastShown.map((e) => (
                <EventCard key={e.id} event={e} locale={l} status="past" />
              ))}
            </div>
          </section>
        )}

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

// ─── UI pieces ──────────────────────────────────────────────────────

function SectionTitle({
  eyebrow,
  title,
  pulse,
}: {
  eyebrow: string;
  title: string;
  pulse?: boolean;
}) {
  return (
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
  );
}

function EventCard({
  event,
  locale,
  status,
}: {
  event: IslamicEvent;
  locale: Locale;
  status: "active" | "upcoming" | "past";
}) {
  const days = status === "upcoming" ? daysUntil(event) : 0;
  const since = status === "past" ? daysSince(event) : 0;
  const greg = formatGregorianRange(event, locale);

  const statusLabel =
    status === "active"
      ? locale === "id"
        ? "Aktif sekarang"
        : "Active now"
      : status === "upcoming"
        ? locale === "id"
          ? `${days} hari lagi`
          : `In ${days} day${days === 1 ? "" : "s"}`
        : locale === "id"
          ? `${since} hari lalu`
          : `${since} day${since === 1 ? "" : "s"} ago`;

  const accentBg =
    status === "active"
      ? "bg-brave-soft/40 border-brave/30"
      : status === "upcoming"
        ? "bg-paper border-hairline"
        : "bg-paper-2 border-hairline";

  const pillColor =
    status === "active"
      ? "bg-brave text-paper"
      : status === "upcoming"
        ? "bg-clay-soft text-clay"
        : "bg-paper-2 text-whisper";

  // Collect related links
  const blogPrimary = event.blogSlug ? getBlogPostBySlug(event.blogSlug) : null;
  const extraBlogs = (event.extraBlogSlugs ?? [])
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const doas = (event.doaSlugs ?? [])
    .map((s) => getDoaBySlug(s))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));
  const parentings = (event.parentingSlugs ?? [])
    .map((s) => getParentingBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const hadiths = (event.hadithSlugs ?? [])
    .map((s) => getHadithBySlug(s))
    .filter((h): h is NonNullable<typeof h> => Boolean(h));
  const catatans = (event.catatanSlugs ?? [])
    .map((s) => getCatatanBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <article className={`rounded-[24px] border p-6 sm:p-7 ${accentBg}`}>
      <div className="flex flex-wrap items-center gap-2 text-[11px]">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-semibold uppercase tracking-[0.1em] ${pillColor}`}
        >
          {status === "active" && (
            <span className="pulse-dot inline-block h-1 w-1 rounded-full bg-current text-current" />
          )}
          {statusLabel}
        </span>
        <span className="text-whisper">{event.hijri}</span>
        <span className="text-whisper">·</span>
        <span className="text-whisper">{greg}</span>
      </div>

      <h3 className="font-display mt-3 text-[24px] font-medium leading-snug text-ink sm:text-[28px]">
        {event.name[locale]}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-whisper">
        {event.caption[locale]}
      </p>

      {/* Primary blog */}
      {blogPrimary && (
        <Link
          href={pathFor(locale, `/blog/${blogPrimary.slug}`)}
          className="lift tap mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-semibold text-paper hover:bg-brave-deep"
        >
          {locale === "id" ? "Baca panduan utama" : "Read main guide"} →
        </Link>
      )}

      {/* Related content chips */}
      {(extraBlogs.length > 0 ||
        doas.length > 0 ||
        parentings.length > 0 ||
        hadiths.length > 0 ||
        catatans.length > 0) && (
        <div className="mt-6 border-t border-hairline/70 pt-5">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-whisper">
            {locale === "id" ? "Yang terkait" : "Related"}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {extraBlogs.map((b) => (
              <Chip
                key={`b-${b.slug}`}
                href={pathFor(locale, `/blog/${b.slug}`)}
                kind={locale === "id" ? "Artikel" : "Article"}
                title={b.title[locale]}
                tone="ink"
              />
            ))}
            {doas.map((d) => (
              <Chip
                key={`d-${d.slug}`}
                href={pathFor(locale, `/doa/${d.slug}`)}
                kind={locale === "id" ? "Doa" : "Du'a"}
                title={d.title[locale]}
                tone="sage"
              />
            ))}
            {parentings.map((p) => (
              <Chip
                key={`p-${p.slug}`}
                href={pathFor(locale, `/parenting/${p.slug}`)}
                kind="Parenting"
                title={p.title[locale]}
                tone="paper2"
              />
            ))}
            {hadiths.map((h) => (
              <Chip
                key={`h-${h.slug}`}
                href={pathFor(locale, `/hadith/${h.slug}`)}
                kind={locale === "id" ? "Hadis" : "Hadith"}
                title={h.title[locale]}
                tone="clay"
              />
            ))}
            {catatans.map((c) => (
              <Chip
                key={`c-${c.slug}`}
                href={pathFor(locale, `/catatan/${c.slug}`)}
                kind="Catatan"
                title={c.title[locale]}
                tone="brave"
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function Chip({
  href,
  kind,
  title,
  tone,
}: {
  href: string;
  kind: string;
  title: string;
  tone: "sage" | "clay" | "brave" | "ink" | "paper2";
}) {
  const toneClass = {
    sage: "border-sage/25 bg-sage-soft text-sage-deep hover:bg-sage-soft/80",
    clay: "border-clay/25 bg-clay-soft text-clay hover:bg-clay-soft/80",
    brave: "border-brave/25 bg-brave-soft text-brave-deep hover:bg-brave-soft/80",
    ink: "border-hairline bg-paper text-ink hover:bg-paper-2",
    paper2: "border-hairline bg-paper-2 text-ink-soft hover:bg-paper",
  }[tone];

  return (
    <Link
      href={href}
      className={`tap inline-flex max-w-full items-center gap-2 rounded-full border px-3 py-1.5 text-[12.5px] transition ${toneClass}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.1em] opacity-70">
        {kind}
      </span>
      <span className="truncate font-medium">{title}</span>
    </Link>
  );
}
