import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
  asset,
  isLocale,
  locales,
  pathFor,
  absoluteUrl,
  whatsappNumber,
  whatsappUrl,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { DoaCard } from "@/components/DoaCard";
import { HadithCard } from "@/components/HadithCard";
import { SituationCard } from "@/components/SituationCard";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { HeroAura } from "@/components/HeroAura";
import { AnimatedCount } from "@/components/AnimatedCount";
import { VideoSection } from "@/components/video/VideoSection";
import { QuoteRibbon } from "@/components/QuoteRibbon";
import { SavedHomeSection } from "@/components/SavedShelf";
import { BookmarkButton } from "@/components/BookmarkButton";
import { PrayerWidget } from "@/components/PrayerWidget";
import { MascotGreeting } from "@/components/MascotGreeting";
import { StreakBadge } from "@/components/StreakBadge";
import { getDoaOfTheDay } from "@/lib/doa-of-the-day";
import { faqSchema, graph, itemListSchema } from "@/lib/seo/schemas";
import { getAllDoa } from "@/lib/content/doa";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content/blog";
import { getAllHadith } from "@/lib/content/hadith";
import { getAllParenting } from "@/lib/content/parenting";
import { getAllCatatan } from "@/lib/content/catatan";
import { getAllGames } from "@/lib/content/games";
import {
  getCurrentIslamicEvent,
  eventStatus,
  daysUntil,
  currentHijriMonth,
} from "@/lib/islamic-calendar";

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
  return buildMetadata({ locale });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const allDoa = getAllDoa();
  const allHadith = getAllHadith();
  const allParenting = getAllParenting();
  const allGames = getAllGames();
  const allPosts = getAllBlogPosts();
  const notes = getAllCatatan().slice(0, 3);
  const { doa: doaToday, contextEvent: doaEvent } = getDoaOfTheDay();
  const doas = allDoa.slice(0, 4);
  const hadiths = allHadith.slice(0, 3);
  const situations = allParenting.slice(0, 3);
  const posts = allPosts.slice(0, 3);
  // Auto-pick a seasonal event from the Islamic calendar. Falls back
  // to the hard-coded Hijri new year post if the matching blog slug
  // hasn't been written yet.
  const currentEvent = getCurrentIslamicEvent();
  const eventPost = currentEvent?.blogSlug
    ? getBlogPostBySlug(currentEvent.blogSlug)
    : null;
  const featured = eventPost ?? getBlogPostBySlug("doa-awal-tahun-hijriyah-untuk-anak");
  const eventState = currentEvent ? eventStatus(currentEvent) : null;
  const eventDays = currentEvent ? daysUntil(currentEvent) : 0;
  const hijriMonthLabel = currentHijriMonth(l);

  // Pre-split hero title into spans for the word-rise animation
  const heroWords = (dict.home.heroTitleA + " " + dict.home.heroTitleB)
    .split(/\s+/)
    .filter(Boolean);

  return (
    <>
      <Header locale={l} currentPath="/" />
      <div className="scroll-progress" aria-hidden />

      <main id="main" className="pb-28 md:pb-0">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden">
          {/* Animated aura behind content */}
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
            <HeroAura />
          </div>

          <div className="mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-7 sm:pb-20 sm:pt-20">
            <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brave-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
                  <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-brave text-brave" />
                  {dict.home.eyebrow}
                </span>
                <h1 className="font-display hero-words mt-5 text-[46px] font-medium leading-[1.02] text-ink sm:text-[60px] md:text-[72px]">
                  {heroWords.map((w, i) => (
                    <span key={i} className={i >= heroWords.length / 2 ? "text-brave" : ""}>
                      {w}
                      {i < heroWords.length - 1 ? " " : ""}
                    </span>
                  ))}
                </h1>
                <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-whisper">
                  {dict.home.heroSub}
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link
                    href={pathFor(l, "/doa")}
                    className="magnet tap inline-flex items-center gap-2 rounded-full bg-brave px-5 py-3 text-[14px] font-semibold text-paper shadow-[0_10px_24px_-8px_rgba(30,140,83,0.42)] hover:bg-brave-deep"
                  >
                    {dict.home.ctaPrimary}
                  </Link>
                  <Link
                    href={pathFor(l, "/permainan")}
                    className="magnet tap inline-flex items-center gap-2 rounded-full border border-hairline bg-paper/80 px-5 py-3 text-[14px] font-semibold text-ink backdrop-blur hover:border-brave/40"
                  >
                    {dict.nav.games ?? (l === "id" ? "Permainan" : "Games")}
                  </Link>
                </div>

                {/* Daily streak + a nudge into the guided learning paths */}
                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  <StreakBadge locale={l} />
                  <Link
                    href={pathFor(l, "/learn/path")}
                    className="tap inline-flex items-center gap-1.5 rounded-full border border-hairline bg-paper/70 px-3 py-1.5 text-[12.5px] font-semibold text-sage-deep backdrop-blur transition hover:border-sage/40"
                  >
                    <span aria-hidden>🧭</span>
                    {l === "id" ? "Mulai jalur belajar" : "Start a learning path"} →
                  </Link>
                </div>

                {/* Animated stat strip */}
                <dl className="mt-12 grid max-w-md grid-cols-4 gap-3">
                  <Stat n={allDoa.length} label={dict.nav.doa} locale={l} />
                  <Stat n={allHadith.length} label={dict.nav.hadith} locale={l} />
                  <Stat n={allParenting.length} label={dict.nav.parenting} locale={l} />
                  <Stat n={allPosts.length} label={dict.nav.blog} locale={l} />
                </dl>
              </div>

              <div className="relative mx-auto w-full max-w-md md:max-w-none">
                {/* Baby Mo speech bubble — random rotating greeting */}
                <MascotGreeting locale={l} />
                {/* Sparkles around mascot */}
                <span aria-hidden className="sparkle" style={{ top: "8%", left: "12%", "--sz": "12px", "--dur": "3.4s", "--delay": "0.3s" } as React.CSSProperties}>✦</span>
                <span aria-hidden className="sparkle" style={{ top: "20%", right: "18%", "--sz": "16px", "--dur": "4s", "--delay": "1.2s" } as React.CSSProperties}>✧</span>
                <span aria-hidden className="sparkle" style={{ bottom: "30%", left: "8%", "--sz": "10px", "--dur": "3s", "--delay": "0.8s" } as React.CSSProperties}>·</span>
                <span aria-hidden className="sparkle" style={{ bottom: "12%", right: "10%", "--sz": "14px", "--dur": "3.6s", "--delay": "2.1s" } as React.CSSProperties}>✦</span>
                <span aria-hidden className="sparkle" style={{ top: "48%", right: "5%", "--sz": "9px", "--dur": "3.2s", "--delay": "1.6s" } as React.CSSProperties}>·</span>

                {/* WebP-first hero. With output:export + unoptimized,
                    next/image is just a sized <img>, so prefer plain
                    <picture> for the LCP image: 229 KB PNG → 37 KB WebP. */}
                <picture>
                  <source
                    type="image/webp"
                    srcSet={asset("/assets/baby-mo-hero.webp")}
                  />
                  <img
                    src={asset("/assets/baby-mo-hero.png")}
                    alt="Baby Mo"
                    width={900}
                    height={900}
                    fetchPriority="high"
                    decoding="async"
                    className="mascot-breathe mx-auto h-auto w-full max-w-sm drop-shadow-[0_18px_36px_rgba(15,18,19,0.10)]"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* ── Seasonal Islamic-calendar banner (auto-picked) ── */}
        {featured && currentEvent && (
          <Reveal>
            <section className="mx-auto max-w-6xl px-5 pb-2 sm:px-7">
              <div className="overflow-hidden rounded-[28px] border border-hairline bg-paper">
                <Link
                  href={pathFor(l, `/blog/${featured.slug}`)}
                  className="lift tap group relative block"
                >
                  <div className="grid items-center gap-6 p-7 sm:grid-cols-[auto_1fr_auto] sm:p-8">
                    <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-clay-soft text-clay sm:flex">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                        <path d="M12 2a7 7 0 1 0 7 7c0-.3 0-.6-.1-.9A5.5 5.5 0 0 1 12 2Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
                        <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-clay text-clay" />
                        {eventState === "active"
                          ? l === "id" ? "Sedang berlangsung" : "Happening now"
                          : l === "id" ? `${eventDays} hari lagi` : `In ${eventDays} days`}
                        {" · "}
                        {currentEvent.hijri}
                      </p>
                      <h2 className="mt-1.5 font-serif text-[20px] font-medium leading-snug text-ink group-hover:text-sage-deep sm:text-[22px]">
                        {featured.title[l]}
                      </h2>
                      <p className="mt-1 text-[14px] leading-relaxed text-whisper">
                        {currentEvent.caption[l]}
                      </p>
                    </div>
                    <span className="hidden whitespace-nowrap text-[13.5px] font-semibold text-sage-deep sm:inline">
                      {l === "id" ? "Baca panduan →" : "Read guide →"}
                    </span>
                  </div>
                </Link>
                <Link
                  href={pathFor(l, "/kalender")}
                  className="tap flex items-center justify-between gap-3 border-t border-hairline bg-paper-2/60 px-7 py-3 text-[12.5px] hover:bg-paper-2 sm:px-8"
                >
                  <span className="flex items-center gap-2 text-whisper">
                    <span aria-hidden>📅</span>
                    <span className="font-medium text-ink">{hijriMonthLabel}</span>
                    <span aria-hidden className="hidden sm:inline">·</span>
                    <span className="hidden sm:inline">
                      {l === "id"
                        ? "Lihat kalender islam lengkap"
                        : "Open the full Islamic calendar"}
                    </span>
                  </span>
                  <span className="font-semibold text-brave-deep">
                    {l === "id" ? "Buka →" : "Open →"}
                  </span>
                </Link>
              </div>
            </section>
          </Reveal>
        )}

        {/* ── Daily phrase ribbon — slow marquee ── */}
        <QuoteRibbon locale={l} />

        {/* ── DOA HARI INI — rotates daily, calendar-aware ── */}
        <Reveal>
          <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-7 sm:pt-20">
            <div className="grid items-stretch gap-5 md:grid-cols-[0.95fr_1.05fr]">
              <div className="flex flex-col justify-center">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
                  <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-brave text-brave" />
                  {l === "id" ? "Doa Hari Ini" : "Du'a of the Day"}
                </p>
                <h2 className="font-display mt-3 text-[30px] font-medium leading-tight text-ink sm:text-[38px]">
                  {doaToday.title[l]}
                </h2>
                <p className="mt-3 text-[15.5px] leading-relaxed text-whisper">
                  {doaEvent
                    ? l === "id"
                      ? `Bertepatan dengan ${doaEvent.name.id} — baik untuk dibaca bersama si kecil hari ini.`
                      : `Coinciding with ${doaEvent.name.en} — lovely to read with your little one today.`
                    : l === "id"
                      ? "Satu doa untuk dibaca bersama si kecil hari ini. Berganti setiap hari."
                      : "One du'a to read with your little one today. It changes each day."}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={pathFor(l, `/doa/${doaToday.slug}`)}
                    className="magnet tap inline-flex items-center gap-2 rounded-full bg-brave px-5 py-3 text-[14px] font-semibold text-paper shadow-[0_10px_24px_-8px_rgba(30,140,83,0.42)] hover:bg-brave-deep"
                  >
                    {l === "id" ? "Buka doa" : "Open du'a"}
                  </Link>
                  <BookmarkButton
                    type="doa"
                    slug={doaToday.slug}
                    title={doaToday.title[l]}
                    url={`/doa/${doaToday.slug}`}
                    locale={l}
                  />
                </div>
              </div>
              <Link
                href={pathFor(l, `/doa/${doaToday.slug}`)}
                className="lift tap group flex flex-col justify-center rounded-[28px] border border-hairline bg-paper p-8 sm:p-10"
              >
                <p
                  dir="rtl"
                  lang="ar"
                  className="font-arabic text-[30px] leading-[1.9] text-ink sm:text-[38px]"
                >
                  {doaToday.arabic}
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-whisper group-hover:text-ink-soft">
                  {doaToday.translation[l]}
                </p>
                <p className="mt-4 text-[12.5px] text-whisper">
                  — {doaToday.source.reference}
                </p>
              </Link>
            </div>
          </section>
        </Reveal>

        {/* ── WAKTU SHOLAT — client-side, location-aware ── */}
        <Reveal>
          <section className="mx-auto max-w-6xl px-5 pt-8 sm:px-7 sm:pt-10">
            <div className="mx-auto max-w-2xl">
              <PrayerWidget locale={l} />
            </div>
          </section>
        </Reveal>

        {/* ── TERSIMPAN UNTUKMU — only renders if user has saves ── */}
        <SavedHomeSection locale={l} />

        {/* ── VALUES ── */}
        <section className="border-t border-hairline bg-paper-2">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-20">
            <Reveal>
              <div className="mb-10 max-w-2xl">
                <h2 className="tracking-display font-serif text-3xl font-medium text-ink sm:text-4xl">
                  {dict.home.sections.valuesTitle}
                </h2>
                <p className="mt-2 text-[15.5px] text-whisper">
                  {dict.home.sections.valuesSub}
                </p>
              </div>
            </Reveal>
            <Reveal stagger>
              <ul className="grid gap-5 md:grid-cols-3">
                {dict.home.values.map((v, i) => (
                  <li
                    key={v.title}
                    className="lift rounded-[22px] border border-hairline bg-paper p-6"
                  >
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-sage-soft text-sage-deep">
                      <span className="text-[13px] font-semibold">{i + 1}</span>
                    </div>
                    <h3 className="font-serif text-[17px] font-medium text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-whisper">
                      {v.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── DOA SAMPLER ── */}
        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-20">
          <Reveal>
            <SectionHead
              title={dict.home.sections.doaTitle}
              sub={dict.home.sections.doaSub}
              viewAll={{ href: pathFor(l, "/doa"), label: dict.home.viewAll }}
            />
          </Reveal>
          <Reveal stagger>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {doas.map((d) => (
                <div key={d.slug} className="lift">
                  <DoaCard doa={d} locale={l} />
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── HADITH ── */}
        <section className="border-t border-hairline bg-paper-2">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-20">
            <Reveal>
              <SectionHead
                title={dict.nav.hadith}
                sub={
                  l === "id"
                    ? "Hadith pilihan dengan catatan penerapan untuk orang tua."
                    : "Curated hadith with applied parenting notes."
                }
                viewAll={{ href: pathFor(l, "/hadith"), label: dict.home.viewAll }}
              />
            </Reveal>
            <Reveal stagger>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {hadiths.map((h) => (
                  <div key={h.slug} className="lift">
                    <HadithCard hadith={h} locale={l} />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── PARENTING ── */}
        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-20">
          <Reveal>
            <SectionHead
              title={dict.nav.parenting}
              sub={
                l === "id"
                  ? "Panduan praktis untuk situasi yang sering dihadapi keluarga muslim."
                  : "Practical guides for situations Muslim families face often."
              }
              viewAll={{ href: pathFor(l, "/parenting"), label: dict.home.viewAll }}
            />
          </Reveal>
          <Reveal stagger>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {situations.map((p) => (
                <div key={p.slug} className="lift">
                  <SituationCard situation={p} locale={l} />
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── GAMES ── */}
        <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-7 sm:pb-20">
          <Reveal>
            <div className="overflow-hidden rounded-[28px] border border-clay/30 bg-clay-soft/60">
              <div className="grid items-center gap-8 p-7 sm:grid-cols-[1.1fr_0.9fr] sm:p-10">
                <div>
                  <span className="inline-flex items-center rounded-full bg-clay/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
                    {allGames.length} {l === "id" ? "game gratis" : "free games"}
                  </span>
                  <h2 className="tracking-display mt-3 font-serif text-3xl font-medium text-ink sm:text-4xl">
                    {dict.home.sections.gamesTitle}
                  </h2>
                  <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-whisper">
                    {dict.home.sections.gamesSub}
                  </p>
                  <Link
                    href={pathFor(l, "/permainan")}
                    className="magnet tap mt-6 inline-flex items-center gap-2 rounded-full bg-brave px-5 py-3 text-[14px] font-semibold text-paper hover:bg-brave-deep"
                  >
                    {dict.home.viewAll}
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {allGames.slice(0, 9).map((g, i) => (
                    <div
                      key={g.slug}
                      className="lift flex aspect-square items-center justify-center rounded-2xl border border-hairline bg-paper-2 text-xl"
                      style={{ transitionDelay: `${i * 35}ms` }}
                    >
                      {g.emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── BLOG ── */}
        <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-7 sm:pb-20">
          <Reveal>
            <SectionHead
              title={dict.home.sections.blogTitle}
              sub={dict.home.sections.blogSub}
              viewAll={{ href: pathFor(l, "/blog"), label: dict.home.viewAll }}
            />
          </Reveal>
          <Reveal stagger>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={pathFor(l, `/blog/${p.slug}`)}
                  className="lift tap group rounded-[22px] border border-hairline bg-paper p-6"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-sage-deep">
                    {p.tags[0]}
                  </div>
                  <h3 className="mt-3 font-serif text-[17px] font-medium leading-snug text-ink group-hover:text-sage-deep">
                    {p.title[l]}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-whisper">
                    {p.excerpt[l]}
                  </p>
                  <div className="mt-5 text-[12px] text-whisper">
                    {p.readingTimeMin} {dict.blog.readingTime}
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── CATATAN — first-person notes by Salman ── */}
        {notes.length > 0 && (
          <section className="border-t border-hairline bg-paper-2">
            <div className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-20">
              <Reveal>
                <SectionHead
                  title={dict.catatan.indexTitle}
                  sub={dict.catatan.intro}
                  viewAll={{
                    href: pathFor(l, "/catatan"),
                    label: dict.home.viewAll,
                  }}
                />
              </Reveal>
              <Reveal stagger>
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                  {notes.map((n) => (
                    <Link
                      key={n.slug}
                      href={pathFor(l, `/catatan/${n.slug}`)}
                      className="lift tap group flex h-full flex-col gap-3 rounded-[22px] border border-hairline bg-paper p-6"
                    >
                      <span className="inline-flex w-fit items-center rounded-full bg-sage-soft px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-sage-deep">
                        {dict.catatan.childChip[n.child]}
                      </span>
                      <h3 className="font-display text-[20px] font-medium leading-snug text-ink group-hover:text-brave-deep">
                        {n.title[l]}
                      </h3>
                      <p className="line-clamp-3 text-[14px] leading-relaxed text-whisper">
                        {n.hook[l]}
                      </p>
                      <p className="mt-auto text-[12px] text-whisper">
                        — {dict.catatan.bySalman}
                      </p>
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* ── WATCH TOGETHER WITH BABY MO (auto-fed from YouTube) ── */}
        <Reveal>
          <VideoSection locale={l} />
        </Reveal>

        {/* ── DOWNLOADS — lockscreen wallpapers ── */}
        <Reveal>
          <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-7 sm:pb-20">
            <Link
              href={pathFor(l, "/unduh")}
              className="lift tap group relative block overflow-hidden rounded-[28px] border border-hairline bg-brave-soft/40"
            >
              <div className="grid items-center gap-6 p-7 sm:grid-cols-[auto_1fr_auto] sm:p-8">
                <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-brave/15 text-brave-deep sm:flex">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="7" y="2" width="10" height="20" rx="2" />
                    <path d="M11 5h2" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brave-deep">
                    {l === "id" ? "Gratis · Untuk Lockscreen" : "Free · For Lockscreen"}
                  </p>
                  <h2 className="font-display mt-1.5 text-[22px] font-medium leading-snug text-ink group-hover:text-brave-deep sm:text-[24px]">
                    {l === "id"
                      ? "8 wallpaper doa harian untuk iPhone"
                      : "8 daily-du'a wallpapers for iPhone"}
                  </h2>
                  <p className="mt-1 text-[14px] leading-relaxed text-whisper">
                    {l === "id"
                      ? "Supaya yang pertama dilihat tiap buka HP adalah pengingat lembut. Cetak biru cream + sage Baby Mo."
                      : "So the first thing you see when you unlock is a gentle reminder. Cream + sage Baby Mo palette."}
                  </p>
                </div>
                <span className="hidden whitespace-nowrap text-[13.5px] font-semibold text-brave-deep sm:inline">
                  {l === "id" ? "Lihat semua →" : "Browse all →"}
                </span>
              </div>
            </Link>
          </section>
        </Reveal>

        {/* ── FOLLOW & SUPPORT ── */}
        <section className="border-t border-hairline bg-paper-2">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-20">
            <Reveal>
              <div className="mb-10 max-w-2xl">
                <h2 className="tracking-display font-serif text-3xl font-medium text-ink sm:text-4xl">
                  {dict.home.sections.followTitle}
                </h2>
                <p className="mt-2 text-[15.5px] text-whisper">
                  {dict.home.sections.followSub}
                </p>
              </div>
            </Reveal>

            <Reveal stagger>
              <div
                className={`grid gap-3 sm:grid-cols-2 ${whatsappNumber ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
              >
                <SocialCard
                  href="https://www.youtube.com/@babymo.official"
                  icon={<YouTubeIcon />}
                  label="YouTube"
                  handle="@babymo.official"
                  accent="bg-[#fff1f1] text-[#c4302b]"
                  locale={l}
                />
                <SocialCard
                  href="https://www.instagram.com/babymo.official"
                  icon={<InstagramIcon />}
                  label="Instagram"
                  handle="@babymo.official"
                  accent="bg-[#fdf2f8] text-[#c2185b]"
                  locale={l}
                />
                <SocialCard
                  href="https://www.tiktok.com/@babymo.official"
                  icon={<TikTokIcon />}
                  label="TikTok"
                  handle="@babymo.official"
                  accent="bg-[#f4f4f5] text-ink"
                  locale={l}
                />
                {whatsappNumber && (
                  <SocialCard
                    href={whatsappUrl(l)}
                    icon={<WhatsAppIcon />}
                    label="WhatsApp"
                    handle="+62 823-1597-1002"
                    accent="bg-[#ecfdf3] text-[#1f8748]"
                    locale={l}
                  />
                )}
              </div>
            </Reveal>

            <Reveal>
              <Link
                href={pathFor(l, "/dukung")}
                className="lift tap mt-3 flex items-center justify-between gap-4 rounded-[22px] border border-hairline bg-paper p-6"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#0070ba]">
                    <PayPalIcon />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
                      {dict.home.sections.supportTitle}
                    </p>
                    <p className="mt-0.5 font-serif text-[18px] font-medium text-ink">
                      {l === "id" ? "Dukung Baby Mo" : "Support Baby Mo"}
                    </p>
                    <p className="mt-0.5 truncate text-[13.5px] text-whisper">
                      {l === "id"
                        ? "QRIS · Saweria · PayPal — sedekah jariyah"
                        : "QRIS · Saweria · PayPal — sadaqah jariyah"}
                    </p>
                  </div>
                </div>
                <span className="hidden text-[13.5px] font-semibold text-clay sm:inline">
                  {l === "id" ? "Lihat cara dukung →" : "See how to give →"}
                </span>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="border-t border-hairline bg-paper">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:px-7 sm:py-20">
            <Reveal>
              <h2 className="tracking-display font-serif text-3xl font-medium text-ink sm:text-4xl">
                {dict.home.sections.faqTitle}
              </h2>
              <p className="mt-2 text-[15.5px] text-whisper">
                {dict.home.sections.faqSub}
              </p>
              <div className="mt-8 divide-y divide-hairline">
                {dict.faq.items.map((q) => (
                  <details key={q.q} className="group py-5">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15.5px] font-semibold text-ink">
                      <span>{q.q}</span>
                      <span className="text-whisper transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-whisper">
                      {q.a}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer locale={l} currentPath="/" />
      <MobileNav locale={l} />

      <JsonLd
        data={graph(
          itemListSchema(
            l,
            dict.home.sections.doaTitle,
            doas.map((d) => ({
              name: d.title[l],
              url: absoluteUrl(l, `/doa/${d.slug}`),
            })),
          ),
          faqSchema(dict.faq.items),
        )}
      />
    </>
  );
}

function Stat({
  n,
  label,
  locale,
}: {
  n: number;
  label: string;
  locale: Locale;
}) {
  return (
    <div>
      <div className="font-display text-[30px] font-medium leading-none text-ink sm:text-[34px]">
        <AnimatedCount to={n} locale={locale === "id" ? "id" : "en"} />
      </div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
        {label}
      </div>
    </div>
  );
}

function SocialCard({
  href,
  icon,
  label,
  handle,
  accent,
  locale,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  handle: string;
  accent: string;
  locale: Locale;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="lift tap group flex h-full flex-col gap-3 rounded-[22px] border border-hairline bg-paper p-5"
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-2xl ${accent}`}
      >
        {icon}
      </span>
      <div>
        <p className="font-serif text-[16px] font-medium text-ink">{label}</p>
        <p className="mt-0.5 truncate text-[13.5px] text-whisper">{handle}</p>
      </div>
      <p className="mt-auto text-[12.5px] font-semibold text-sage-deep opacity-0 transition group-hover:opacity-100">
        {locale === "id" ? "Buka →" : "Open →"}
      </p>
    </a>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.81.42A2.51 2.51 0 0 0 2.42 7.19 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .42 4.81 2.51 2.51 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.42-4.81ZM10 15V9l5.2 3Z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.4 6.5a5.5 5.5 0 0 1-3.7-1.4 5.4 5.4 0 0 1-1.5-2.7H10v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .6 0 .9.1V8.4a6 6 0 0 0-.9-.1 6.5 6.5 0 1 0 6.5 6.5V9.6a8.6 8.6 0 0 0 5.5 2V7.8a5.7 5.7 0 0 1 0-1.3Z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm5.7 14.3c-.2.7-1.4 1.3-1.9 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3.1-1.3-5.2-4.4-5.3-4.6-.2-.2-1.3-1.7-1.3-3.3 0-1.6.8-2.4 1.1-2.7.3-.3.7-.4.9-.4h.7c.2 0 .5 0 .8.6.3.6.9 2 1 2.1.1.1.1.3 0 .5l-.3.5-.4.5-.3.4c-.2.2-.4.4-.2.7.2.4.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.8.4.2.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.3.4-.3.7-.2.3.1 2 1 2.3 1.1.3.2.5.2.6.4.1.2.1.7-.1 1.3Z" />
    </svg>
  );
}
function PayPalIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.4 21.2H4.6c-.5 0-.8-.4-.8-.9l3-19c.1-.5.5-.8 1-.8h5.7c2.8 0 4.9.6 6 1.9 1 1.1 1.4 2.6 1.1 4.4 0 .1 0 .2-.1.3 0 3.4-2 5.2-5.6 5.2H12c-.5 0-1 .4-1 .9l-.9 7.2c0 .4-.4.7-.7.7Z" />
    </svg>
  );
}

function SectionHead({
  title,
  sub,
  viewAll,
}: {
  title: string;
  sub: string;
  viewAll?: { href: string; label: string };
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div className="max-w-xl">
        <h2 className="tracking-display font-serif text-3xl font-medium text-ink sm:text-4xl">
          {title}
        </h2>
        <p className="mt-2 text-[15.5px] text-whisper">{sub}</p>
      </div>
      {viewAll && (
        <Link
          href={viewAll.href}
          className="tap hidden whitespace-nowrap text-[13.5px] font-semibold text-sage-deep hover:underline sm:inline-flex"
        >
          {viewAll.label} →
        </Link>
      )}
    </div>
  );
}
