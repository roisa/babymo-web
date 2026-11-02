import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
  asset,
  isLocale,
  locales,
  pathFor,
  absoluteUrl,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { HeroAura } from "@/components/HeroAura";
import { VideoSection } from "@/components/video/VideoSection";
import { SavedHomeSection } from "@/components/SavedShelf";
import { BookmarkButton } from "@/components/BookmarkButton";
import { PrayerWidget } from "@/components/PrayerWidget";
import { MascotGreeting } from "@/components/MascotGreeting";
import { HeroMascot } from "@/components/HeroMascot";
import { YouTubeBand } from "@/components/YouTubeBand";
import { getDoaOfTheDay } from "@/lib/doa-of-the-day";
import { faqSchema, graph, itemListSchema } from "@/lib/seo/schemas";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content/blog";
import { getAllGames } from "@/lib/content/games";
import { GameIcon } from "@/components/GameIcon";
import { getAllCatatan } from "@/lib/content/catatan";
import { posePath } from "@/lib/games/poses";
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
  const allGames = getAllGames();
  const allPosts = getAllBlogPosts();
  const { doa: doaToday, contextEvent: doaEvent } = getDoaOfTheDay();
  const posts = allPosts.slice(0, 3);
  const allCerita = getAllCatatan();
  const latestCerita = allCerita.filter((n) => n.kind === "story").slice(0, 3);
  if (latestCerita.length < 3) latestCerita.push(...allCerita.filter((n) => !latestCerita.includes(n)).slice(0, 3 - latestCerita.length));
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
  // Second clause of the vision line is tinted green.
  const heroSplit = dict.home.heroTitleA.split(/\s+/).filter(Boolean).length;

  return (
    <>
      <Header locale={l} currentPath="/" />
      <div className="scroll-progress" aria-hidden />

      <main id="main" className="pb-28 md:pb-0">
        {/* ── HERO — the vision, said once ── */}
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
                <h1 className="font-display hero-words mt-5 text-[42px] font-medium leading-[1.04] text-ink sm:text-[56px] md:text-[64px]">
                  {heroWords.map((w, i) => (
                    <Fragment key={i}>
                      <span className={i >= heroSplit ? "text-brave" : ""}>{w}</span>
                      {i < heroWords.length - 1 ? " " : ""}
                    </Fragment>
                  ))}
                </h1>
                <p className="mt-6 max-w-lg text-[17px] leading-[1.6] text-whisper">
                  {dict.home.heroSub}
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="#sehari"
                    className="magnet tap inline-flex items-center gap-2 rounded-full bg-brave px-5 py-3 text-[14px] font-semibold text-paper shadow-[0_10px_24px_-8px_rgba(30,140,83,0.42)] hover:bg-brave-deep"
                  >
                    {l === "id" ? "Mulai hari ini" : "Start today"} ↓
                  </a>
                  <Link
                    href={pathFor(l, "/tentang")}
                    className="magnet tap inline-flex items-center gap-2 rounded-full border border-hairline bg-paper/80 px-5 py-3 text-[14px] font-semibold text-ink backdrop-blur hover:border-brave/40"
                  >
                    {l === "id" ? "Kenalan dengan Baby Mo" : "Meet Baby Mo"}
                  </Link>
                </div>
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

                {/* WebP-first hero (LCP). HeroMascot renders the static
                    <picture> and cross-fades the pose set on top, hiding the
                    static layer declaratively so only one Baby Mo ever shows. */}
                <HeroMascot alt="Baby Mo" />
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

        {/* ── SATU HARI BERSAMA BABY MO — the vision, shown not told ── */}
        <section id="sehari" className="day scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-7 sm:pt-20">
            <Reveal>
              <div className="max-w-2xl">
                <h2 className="tracking-display font-display text-[32px] font-medium leading-tight text-ink sm:text-[42px]">
                  {l === "id" ? "Satu hari bersama Baby Mo" : "A day with Baby Mo"}
                </h2>
                <p className="mt-2 text-[15.5px] text-whisper">
                  {l === "id"
                    ? "Pagi berdoa, siang bermain, malam bercerita."
                    : "Pray in the morning, play by day, stories at night."}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Pagi — du'a of the day */}
          <Reveal>
            <div className="moment moment--pagi">
              <div className="mx-auto max-w-6xl px-5 py-12 sm:px-7 sm:py-16">
                <div className="grid items-stretch gap-5 md:grid-cols-[0.95fr_1.05fr]">
                  <div className="flex flex-col justify-center">
                    <MomentLabel icon="🌅" text={l === "id" ? "Pagi · Doa hari ini" : "Morning · Today's du'a"} />
                    <h3 className="font-display mt-3 text-[28px] font-medium leading-tight text-ink sm:text-[36px]">
                      {doaToday.title[l]}
                    </h3>
                    <p className="mt-3 text-[15.5px] leading-relaxed text-whisper">
                      {doaEvent
                        ? l === "id"
                          ? `Bertepatan dengan ${doaEvent.name.id} — baca bersama si kecil hari ini.`
                          : `Coinciding with ${doaEvent.name.en} — read it with your little one today.`
                        : l === "id"
                          ? "Satu doa untuk dibaca bersama si kecil. Berganti setiap hari."
                          : "One du'a to read with your little one. New every day."}
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
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(
                          (l === "id"
                            ? `Doa Hari Ini 🤲\n${doaToday.title.id}\n\n${doaToday.arabic}\n\n"${doaToday.translation.id}"\n\nBaca bareng anak: `
                            : `Du'a of the Day 🤲\n${doaToday.title.en}\n\n${doaToday.arabic}\n\n"${doaToday.translation.en}"\n\nRead it with your child: `) +
                            absoluteUrl(l, `/doa/${doaToday.slug}`),
                        )}`}
                        target="_blank"
                        rel="noopener"
                        aria-label={l === "id" ? "Bagikan ke WhatsApp" : "Share on WhatsApp"}
                        className="tap inline-flex items-center gap-2 rounded-full border border-hairline bg-paper px-4 py-3 text-[14px] font-semibold text-ink hover:border-sage/50"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="text-[#25D366]">
                          <path d="M12.04 2a9.9 9.9 0 0 0-8.43 15.16L2 22l4.95-1.3A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 0 1 6.86 12.4l-.2.32.6 2.18-2.24-.59-.31.18a8.1 8.1 0 1 1-4.71-14.7Zm-2.78 4.2c-.13 0-.34.05-.52.25-.18.2-.69.67-.69 1.64s.71 1.9.81 2.03c.1.13 1.39 2.21 3.43 3.02 1.7.67 2.05.54 2.42.5.37-.03 1.2-.49 1.37-.96.17-.47.17-.87.12-.96-.05-.08-.18-.13-.37-.23s-1.2-.59-1.38-.66c-.18-.07-.32-.1-.46.1-.13.2-.52.66-.64.8-.12.13-.23.15-.43.05a5.6 5.6 0 0 1-1.65-1.02 6.2 6.2 0 0 1-1.14-1.42c-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.34.06-.13.03-.25-.02-.35-.05-.1-.45-1.1-.62-1.5-.16-.4-.33-.34-.45-.34Z" />
                        </svg>
                        {l === "id" ? "Bagikan" : "Share"}
                      </a>
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

                {/* Prayer times — client-side, location-aware */}
                <div className="mx-auto mt-8 max-w-2xl">
                  <PrayerWidget locale={l} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Siang — play */}
          <Reveal>
            <div className="moment moment--siang">
              <div className="mx-auto max-w-6xl px-5 py-12 sm:px-7 sm:py-16">
                <div className="grid items-center gap-8 sm:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <MomentLabel icon="☀️" text={l === "id" ? "Siang · Bermain sambil belajar" : "Daytime · Learn through play"} />
                    <h3 className="font-display mt-3 text-[28px] font-medium leading-tight text-ink sm:text-[36px]">
                      {l === "id"
                        ? `${allGames.length} permainan gratis`
                        : `${allGames.length} free games`}
                    </h3>
                    <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-whisper">
                      {l === "id"
                        ? "Hijaiyah, doa, dan akhlak baik — lewat main."
                        : "Hijaiyah, du'a, and good manners — through play."}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link
                        href={pathFor(l, "/permainan")}
                        className="magnet tap inline-flex items-center gap-2 rounded-full bg-brave px-5 py-3 text-[14px] font-semibold text-paper hover:bg-brave-deep"
                      >
                        {l === "id" ? "Main sekarang" : "Play now"}
                      </Link>
                      <Link
                        href={pathFor(l, "/apps/kids-activity")}
                        className="tap inline-flex items-center gap-2 rounded-full border border-hairline bg-paper/80 px-4 py-3 text-[14px] font-semibold text-ink hover:border-brave/40"
                      >
                        <span aria-hidden>🖍️</span>
                        {l === "id" ? "Lembar aktivitas" : "Activity sheets"}
                      </Link>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {allGames.slice(0, 6).map((g) => (
                      <GameIcon
                        key={g.slug}
                        slug={g.slug}
                        className="lift aspect-square h-auto w-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Malam — bedtime stories */}
          <Reveal>
            <div className="moment moment--malam">
              <div className="mx-auto max-w-6xl px-5 py-12 sm:px-7 sm:py-16">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div className="max-w-xl">
                    <MomentLabel icon="🌙" text={l === "id" ? "Malam · Cerita sebelum tidur" : "Night · Bedtime stories"} />
                    <h3 className="font-display mt-3 text-[28px] font-medium leading-tight text-ink sm:text-[36px]">
                      {l === "id" ? "Cerita Baby Mo & Baby Ais" : "Baby Mo & Baby Ais stories"}
                    </h3>
                  </div>
                  <Link
                    href={pathFor(l, "/cerita")}
                    className="tap whitespace-nowrap text-[13.5px] font-semibold text-sage-deep hover:underline"
                  >
                    {dict.home.viewAll} →
                  </Link>
                </div>
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {latestCerita.map((n) => (
                    <Link
                      key={n.slug}
                      href={pathFor(l, `/cerita/${n.slug}`)}
                      className="lift tap group flex flex-col rounded-[22px] border border-hairline bg-paper p-6"
                    >
                      {n.pose && (
                        <div className="relative mx-auto mb-3">
                          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-brave-soft via-sage-soft to-transparent blur-xl opacity-70" />
                          <img
                            src={asset(posePath(n.pose))}
                            alt=""
                            width={92}
                            height={92}
                            className="h-[92px] w-[92px] select-none object-contain transition-transform duration-300 group-hover:scale-105"
                            draggable={false}
                            loading="lazy"
                          />
                        </div>
                      )}
                      <h4 className="text-center font-serif text-[18px] font-medium leading-snug text-ink group-hover:text-sage-deep">
                        {n.title[l]}
                      </h4>
                      <p className="mt-2 line-clamp-2 text-center text-[14px] leading-relaxed text-whisper">
                        {n.hook[l]}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── TERSIMPAN UNTUKMU — only renders if user has saves ── */}
        <SavedHomeSection locale={l} />

        {/* ── PROMISE + FOUNDER LINE (replaces the two "Why" blocks) ── */}
        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-20">
          <Reveal>
            <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
              <div className="flex items-center gap-5">
                <img
                  src={asset("/baby-mo-poses/baby-mo-thank-you.png")}
                  alt=""
                  width={120}
                  height={120}
                  loading="lazy"
                  className="h-[104px] w-[104px] shrink-0 select-none object-contain"
                  draggable={false}
                />
                <div>
                  <p className="font-display text-[22px] font-medium leading-snug text-ink sm:text-[26px]">
                    {l === "id"
                      ? "“Dibuat oleh Abi & Umi untuk Mo dan Ais — dan untuk anakmu juga.”"
                      : "“Made by Abi & Umi for Mo and Ais — and for your child too.”"}
                  </p>
                  <Link
                    href={pathFor(l, "/tentang")}
                    className="tap mt-3 inline-flex text-[13.5px] font-semibold text-sage-deep hover:underline"
                  >
                    {l === "id" ? "Cerita di balik Baby Mo" : "The story behind Baby Mo"} →
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sage-deep">
                  {dict.home.sections.valuesTitle}
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                  {dict.home.values.map((v, i) => (
                    <li
                      key={v.title}
                      className="rounded-[22px] border border-hairline bg-paper p-5"
                    >
                      <span aria-hidden className="text-[22px]">
                        {["📖", "🛡️", "🌙"][i]}
                      </span>
                      <h3 className="mt-2 font-serif text-[16.5px] font-medium text-ink">
                        {v.title}
                      </h3>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-whisper">
                        {v.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── WATCH — Baby Mo on YouTube + latest videos ── */}
        <Reveal>
          <YouTubeBand locale={l} />
        </Reveal>
        <Reveal>
          <VideoSection locale={l} compact />
        </Reveal>

        {/* ── FOR PARENTS — blog ── */}
        <section className="mx-auto max-w-6xl px-5 pb-14 pt-10 sm:px-7 sm:pb-20 sm:pt-14">
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
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <SocialCard
                  href="https://www.youtube.com/@babymo.official"
                  icon={<YouTubeIcon />}
                  label="YouTube"
                  handle="@babymo.official"
                  accent="bg-[#fff1f1] text-[#c4302b] dark:bg-[#c4302b]/20 dark:text-[#f87264]"
                  locale={l}
                />
                <SocialCard
                  href="https://www.instagram.com/babymo.official"
                  icon={<InstagramIcon />}
                  label="Instagram"
                  handle="@babymo.official"
                  accent="bg-[#fdf2f8] text-[#c2185b] dark:bg-[#c2185b]/20 dark:text-[#f06fa5]"
                  locale={l}
                />
                <SocialCard
                  href="https://www.tiktok.com/@babymo.official"
                  icon={<TikTokIcon />}
                  label="TikTok"
                  handle="@babymo.official"
                  accent="bg-[#f4f4f5] text-ink dark:bg-white/10"
                  locale={l}
                />
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
            dict.home.sections.ceritaTitle,
            latestCerita.map((n) => ({
              name: n.title[l],
              url: absoluteUrl(l, `/cerita/${n.slug}`),
            })),
          ),
          faqSchema(dict.faq.items),
        )}
      />
    </>
  );
}

function MomentLabel({ icon, text }: { icon: string; text: string }) {
  return (
    <p className="moment-label inline-flex self-start items-center gap-2 rounded-full px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.12em]">
      <span aria-hidden className="text-[14px]">{icon}</span>
      {text}
    </p>
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
