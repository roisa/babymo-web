import Image from "next/image";
import Link from "next/link";
import { type Locale, asset, isLocale, locales, pathFor, absoluteUrl } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { DoaCard } from "@/components/DoaCard";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, graph, itemListSchema } from "@/lib/seo/schemas";
import { getAllDoa } from "@/lib/content/doa";
import { getAllBlogPosts } from "@/lib/content/blog";
import { notFound } from "next/navigation";

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
  const doas = getAllDoa().slice(0, 4);
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <>
      <Header locale={l} currentPath="/" />

      <main className="pb-24 md:pb-0">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-20">
          <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-mist bg-paper px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-sage-deep">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                {dict.home.eyebrow}
              </span>
              <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[3.5rem]">
                {dict.home.heroTitleA}{" "}
                <span className="text-sage-deep">{dict.home.heroTitleB}</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-whisper">
                {dict.home.heroSub}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={pathFor(l, "/doa")}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-sage-deep"
                >
                  {dict.home.ctaPrimary}
                </Link>
                <Link
                  href={pathFor(l, "/permainan")}
                  className="inline-flex items-center gap-2 rounded-full border border-mist bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:border-sage/40 hover:text-sage-deep"
                >
                  {dict.home.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <div className="absolute inset-0 -z-10 rounded-[40px] bg-sage-soft/60 blur-2xl" />
              <Image
                src={asset("/assets/baby-mo-hero.png")}
                alt="Baby Mo"
                width={900}
                height={900}
                priority
                className="mx-auto h-auto w-full max-w-md drop-shadow-[0_24px_48px_rgba(15,18,19,0.12)]"
              />
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="border-y border-mist bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                {dict.home.sections.valuesTitle}
              </h2>
              <p className="mt-2 text-base text-whisper">
                {dict.home.sections.valuesSub}
              </p>
            </div>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {dict.home.values.map((v) => (
                <li
                  key={v.title}
                  className="rounded-2xl border border-mist bg-paper p-6"
                >
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-whisper">
                    {v.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* DOA SAMPLER */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHead
            title={dict.home.sections.doaTitle}
            sub={dict.home.sections.doaSub}
            viewAll={{ href: pathFor(l, "/doa"), label: dict.home.viewAll }}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {doas.map((d) => (
              <DoaCard key={d.slug} doa={d} locale={l} />
            ))}
          </div>
        </section>

        {/* GAMES PROMO */}
        <section className="bg-clay-soft">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
              <div className="max-w-xl">
                <h2 className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                  {dict.home.sections.gamesTitle}
                </h2>
                <p className="mt-2 text-base text-whisper">
                  {dict.home.sections.gamesSub}
                </p>
                <Link
                  href={pathFor(l, "/permainan")}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-sage-deep"
                >
                  {dict.home.viewAll}
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-3 text-2xl">
                {["🧩", "🤲", "🔤", "🌙", "🛌", "🎴", "🔍", "🎵", "🃏"].map((e, i) => (
                  <div
                    key={i}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border border-mist bg-paper"
                  >
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHead
            title={dict.home.sections.blogTitle}
            sub={dict.home.sections.blogSub}
            viewAll={{ href: pathFor(l, "/blog"), label: dict.home.viewAll }}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={pathFor(l, `/blog/${p.slug}`)}
                className="group rounded-2xl border border-mist bg-paper p-6 transition hover:-translate-y-0.5 hover:border-sage/40"
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider text-sage-deep">
                  {p.tags[0]}
                </div>
                <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-ink group-hover:text-sage-deep">
                  {p.title[l]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-whisper">
                  {p.excerpt[l]}
                </p>
                <div className="mt-4 text-xs text-whisper">
                  {p.readingTimeMin} {dict.blog.readingTime}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-mist bg-paper">
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
            <h2 className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              {dict.home.sections.faqTitle}
            </h2>
            <p className="mt-2 text-base text-whisper">
              {dict.home.sections.faqSub}
            </p>
            <div className="mt-8 divide-y divide-mist">
              {dict.faq.items.map((q) => (
                <details key={q.q} className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-ink">
                    {q.q}
                    <span className="text-whisper transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-whisper">{q.a}</p>
                </details>
              ))}
            </div>
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
            }))
          ),
          faqSchema(dict.faq.items)
        )}
      />

      {/* WhatsApp floating */}
      <a
        href="https://wa.me/6282315971002"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp Baby Mo"
        className="fixed bottom-20 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-sage text-paper shadow-[0_8px_22px_-6px_rgba(95,139,90,0.55)] transition hover:scale-105 md:bottom-6 md:right-6 md:h-14 md:w-14"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm5.7 14.3c-.2.7-1.4 1.3-1.9 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3.1-1.3-5.2-4.4-5.3-4.6-.2-.2-1.3-1.7-1.3-3.3 0-1.6.8-2.4 1.1-2.7.3-.3.7-.4.9-.4h.7c.2 0 .5 0 .8.6.3.6.9 2 1 2.1.1.1.1.3 0 .5l-.3.5c-.1.2-.2.3-.4.5l-.3.4c-.2.2-.4.4-.2.7.2.4.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.8.4.2.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.3.4-.3.7-.2.3.1 2 1 2.3 1.1.3.2.5.2.6.4.1.2.1.7-.1 1.3Z" />
        </svg>
      </a>
    </>
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
        <h2 className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-base text-whisper">{sub}</p>
      </div>
      {viewAll && (
        <Link
          href={viewAll.href}
          className="hidden whitespace-nowrap text-sm font-semibold text-sage-deep hover:underline sm:inline-flex"
        >
          {viewAll.label} →
        </Link>
      )}
    </div>
  );
}
