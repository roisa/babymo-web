import Image from "next/image";
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
import { JsonLd } from "@/components/JsonLd";
import {
  faqSchema,
  graph,
  itemListSchema,
} from "@/lib/seo/schemas";
import { getAllDoa } from "@/lib/content/doa";
import { getAllBlogPosts } from "@/lib/content/blog";

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

      <main className="pb-28 md:pb-0">
        {/* ── Large-title hero (Apple-style) ── */}
        <section className="mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-7 sm:pb-20 sm:pt-20">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-sage-deep">
                <span className="h-1 w-6 rounded-full bg-sage" />
                {dict.home.eyebrow}
              </span>
              <h1 className="tracking-display mt-5 font-serif text-[44px] leading-[1.05] text-ink sm:text-[56px] md:text-[64px]">
                {dict.home.heroTitleA}{" "}
                <span className="block text-sage-deep">
                  {dict.home.heroTitleB}
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-whisper">
                {dict.home.heroSub}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href={pathFor(l, "/doa")}
                  className="tap inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-paper hover:bg-sage-deep"
                >
                  {dict.home.ctaPrimary}
                </Link>
                <Link
                  href={pathFor(l, "/parenting")}
                  className="tap inline-flex items-center gap-2 rounded-full border border-hairline bg-paper px-5 py-3 text-[14px] font-semibold text-ink hover:border-sage/40"
                >
                  {dict.nav.parenting ?? "Parenting"}
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <Image
                src={asset("/assets/baby-mo-hero.png")}
                alt="Baby Mo"
                width={900}
                height={900}
                priority
                className="mx-auto h-auto w-full max-w-sm drop-shadow-[0_18px_36px_rgba(15,18,19,0.10)]"
              />
            </div>
          </div>
        </section>

        {/* ── Values strip ── */}
        <section className="border-t border-hairline bg-paper-2">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-20">
            <div className="mb-10 max-w-2xl">
              <h2 className="tracking-display font-serif text-3xl font-medium text-ink sm:text-4xl">
                {dict.home.sections.valuesTitle}
              </h2>
              <p className="mt-2 text-[15.5px] text-whisper">
                {dict.home.sections.valuesSub}
              </p>
            </div>
            <ul className="grid gap-5 md:grid-cols-3">
              {dict.home.values.map((v, i) => (
                <li
                  key={v.title}
                  className="rounded-[22px] border border-hairline bg-paper p-6"
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
          </div>
        </section>

        {/* ── Doa sampler ── */}
        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-20">
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

        {/* ── Games card ── */}
        <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-7 sm:pb-20">
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
                  className="tap mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-paper hover:bg-sage-deep"
                >
                  {dict.home.viewAll}
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {["🧩", "🤲", "🔤", "🌙", "🛌", "🎴", "🔍", "🎵", "🃏"].map(
                  (e, i) => (
                    <div
                      key={i}
                      className="flex aspect-square items-center justify-center rounded-2xl border border-hairline bg-paper text-xl"
                    >
                      {e}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Blog ── */}
        <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-7 sm:pb-20">
          <SectionHead
            title={dict.home.sections.blogTitle}
            sub={dict.home.sections.blogSub}
            viewAll={{ href: pathFor(l, "/blog"), label: dict.home.viewAll }}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={pathFor(l, `/blog/${p.slug}`)}
                className="tap group rounded-[22px] border border-hairline bg-paper p-6 transition hover:border-sage/40"
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
        </section>

        {/* ── FAQ ── */}
        <section className="border-t border-hairline bg-paper">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:px-7 sm:py-20">
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

      <a
        href="https://wa.me/6282315971002"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp Baby Mo"
        className="tap fixed bottom-20 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-sage text-paper shadow-[0_10px_24px_-8px_rgba(59,90,56,0.45)] md:bottom-6 md:right-6 md:h-14 md:w-14"
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
