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
import { DoaCard } from "@/components/DoaCard";
import { HadithCard } from "@/components/HadithCard";
import { SituationCard } from "@/components/SituationCard";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { HeroAura } from "@/components/HeroAura";
import { AnimatedCount } from "@/components/AnimatedCount";
import { VideoSection } from "@/components/video/VideoSection";
import { QuoteRibbon } from "@/components/QuoteRibbon";
import { faqSchema, graph, itemListSchema } from "@/lib/seo/schemas";
import { getAllDoa } from "@/lib/content/doa";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content/blog";
import { getAllHadith } from "@/lib/content/hadith";
import { getAllParenting } from "@/lib/content/parenting";

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
  const allPosts = getAllBlogPosts();
  const doas = allDoa.slice(0, 4);
  const hadiths = allHadith.slice(0, 3);
  const situations = allParenting.slice(0, 3);
  const posts = allPosts.slice(0, 3);
  const featured = getBlogPostBySlug("doa-awal-tahun-hijriyah-untuk-anak");

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
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-sage-deep">
                  <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-sage text-sage" />
                  {dict.home.eyebrow}
                </span>
                <h1 className="tracking-display hero-words mt-5 font-serif text-[44px] leading-[1.05] text-ink sm:text-[56px] md:text-[64px]">
                  {heroWords.map((w, i) => (
                    <span key={i} className={i >= heroWords.length / 2 ? "text-sage-deep" : ""}>
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
                    className="magnet tap inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-paper hover:bg-sage-deep"
                  >
                    {dict.home.ctaPrimary}
                  </Link>
                  <Link
                    href={pathFor(l, "/parenting")}
                    className="magnet tap inline-flex items-center gap-2 rounded-full border border-hairline bg-paper/80 px-5 py-3 text-[14px] font-semibold text-ink backdrop-blur hover:border-sage/40"
                  >
                    {dict.nav.parenting ?? "Parenting"}
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

        {/* ── Featured Hijri / Muharram banner ── */}
        {featured && (
          <Reveal>
            <section className="mx-auto max-w-6xl px-5 pb-2 sm:px-7">
              <Link
                href={pathFor(l, `/blog/${featured.slug}`)}
                className="lift tap group relative block overflow-hidden rounded-[28px] border border-hairline bg-paper"
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
                      {l === "id" ? "Sedang berlangsung" : "Happening now"} · Muharram 1448
                    </p>
                    <h2 className="mt-1.5 font-serif text-[20px] font-medium leading-snug text-ink group-hover:text-sage-deep sm:text-[22px]">
                      {featured.title[l]}
                    </h2>
                    <p className="mt-1 text-[14px] leading-relaxed text-whisper">
                      {featured.excerpt[l]}
                    </p>
                  </div>
                  <span className="hidden whitespace-nowrap text-[13.5px] font-semibold text-sage-deep sm:inline">
                    {l === "id" ? "Baca panduan →" : "Read guide →"}
                  </span>
                </div>
              </Link>
            </section>
          </Reveal>
        )}

        {/* ── Daily phrase ribbon — slow marquee ── */}
        <QuoteRibbon locale={l} />

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
            <div className="overflow-hidden rounded-[28px] border border-hairline bg-clay-soft">
              <div className="grid items-center gap-8 p-7 sm:grid-cols-[1.1fr_0.9fr] sm:p-10">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
                    9 game gratis
                  </span>
                  <h2 className="tracking-display mt-2 font-serif text-3xl font-medium text-ink sm:text-4xl">
                    {dict.home.sections.gamesTitle}
                  </h2>
                  <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-whisper">
                    {dict.home.sections.gamesSub}
                  </p>
                  <Link
                    href={pathFor(l, "/permainan")}
                    className="magnet tap mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-paper hover:bg-sage-deep"
                  >
                    {dict.home.viewAll}
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {["🧩", "🤲", "🔤", "🌙", "🛌", "🎴", "🔍", "🎵", "🃏"].map((e, i) => (
                    <div
                      key={i}
                      className="lift flex aspect-square items-center justify-center rounded-2xl border border-hairline bg-paper text-xl"
                      style={{ transitionDelay: `${i * 35}ms` }}
                    >
                      {e}
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

        {/* ── WATCH TOGETHER WITH BABY MO (auto-fed from YouTube) ── */}
        <Reveal>
          <VideoSection locale={l} />
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
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
                <SocialCard
                  href="https://wa.me/6282315971002"
                  icon={<WhatsAppIcon />}
                  label="WhatsApp"
                  handle="+62 823-1597-1002"
                  accent="bg-[#ecfdf3] text-[#1f8748]"
                  locale={l}
                />
              </div>
            </Reveal>

            <Reveal>
              <a
                href="https://paypal.me/ibracreative"
                target="_blank"
                rel="noopener"
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
                      {l === "id"
                        ? "Dukung via PayPal"
                        : "Donate via PayPal"}
                    </p>
                    <p className="mt-0.5 truncate text-[13.5px] text-whisper">
                      paypal.me/ibracreative
                    </p>
                  </div>
                </div>
                <span className="hidden text-[13.5px] font-semibold text-clay sm:inline">
                  {l === "id" ? "Buka PayPal →" : "Open PayPal →"}
                </span>
              </a>
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

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6282315971002"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp Baby Mo"
        className="magnet tap fixed bottom-20 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-sage text-paper shadow-[0_10px_24px_-8px_rgba(59,90,56,0.45)] md:bottom-6 md:right-6 md:h-14 md:w-14"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm5.7 14.3c-.2.7-1.4 1.3-1.9 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3.1-1.3-5.2-4.4-5.3-4.6-.2-.2-1.3-1.7-1.3-3.3 0-1.6.8-2.4 1.1-2.7.3-.3.7-.4.9-.4h.7c.2 0 .5 0 .8.6.3.6.9 2 1 2.1.1.1.1.3 0 .5l-.3.5c-.1.2-.2.3-.4.5l-.3.4c-.2.2-.4.4-.2.7.2.4.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.8.4.2.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.3.4-.3.7-.2.3.1 2 1 2.3 1.1.3.2.5.2.6.4.1.2.1.7-.1 1.3Z" />
        </svg>
      </a>
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
      <div className="font-serif text-[28px] font-medium leading-none text-ink sm:text-[32px]">
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
