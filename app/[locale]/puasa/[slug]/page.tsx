import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
  absoluteUrl,
  isLocale,
  locales,
  pathFor,
  siteUrl,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { ShareBar } from "@/components/ShareBar";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";
import { getAllPuasa, getPuasaBySlug } from "@/lib/content/puasa";

export async function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const p of getAllPuasa()) out.push({ locale, slug: p.slug });
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const p = getPuasaBySlug(slug);
  if (!p) return {};
  return buildMetadata({
    locale,
    path: `/puasa/${slug}`,
    title:
      locale === "id"
        ? `${p.title.id} — Arab, Latin, dan Artinya`
        : `${p.title.en} — Arabic, Transliteration & Meaning`,
    description: locale === "id" ? p.when.id : p.when.en,
    type: "article",
  });
}

export default async function PuasaDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const p = getPuasaBySlug(slug);
  if (!p) notFound();
  const dict = getDictionary(l);

  const all = getAllPuasa();
  const idx = all.findIndex((x) => x.slug === p.slug);
  const prev = idx > 0 ? all[idx - 1] : undefined;
  const next = idx < all.length - 1 ? all[idx + 1] : undefined;

  return (
    <>
      <Header locale={l} currentPath={`/puasa/${slug}`} />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-40 pt-8 sm:px-7 sm:pt-12 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/puasa")} className="hover:text-ink">
            {l === "id" ? "Puasa & Ramadhan" : "Fasting & Ramadan"}
          </Link>{" "}
          / <span className="text-ink">{p.title[l]}</span>
        </nav>

        <header className="mb-10">
          <h1 className="font-display text-[36px] font-medium leading-[1.08] text-ink sm:text-[46px]">
            {p.title[l]}
          </h1>
          {p.subtitle && (
            <p className="mt-3 text-[16px] leading-[1.6] text-whisper">{p.subtitle[l]}</p>
          )}
        </header>

        {p.parts.length > 0 && (
          <div className="space-y-5">
            {p.parts.map((part, i) => (
              <article
                key={i}
                className="rounded-[24px] border border-hairline bg-paper p-6 sm:p-8"
              >
                {(part.label || part.repeat) && (
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    {part.label && (
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
                        {part.label[l]}
                      </span>
                    )}
                    {part.repeat && (
                      <span className="rounded-full bg-clay-soft px-2.5 py-0.5 text-[11px] font-semibold text-clay">
                        {part.repeat}
                      </span>
                    )}
                  </div>
                )}
                <p
                  dir="rtl"
                  lang="ar"
                  className="font-arabic text-[30px] leading-[2] text-ink sm:text-[34px]"
                >
                  {part.arabic}
                </p>
                <p className="mt-4 text-[15px] font-medium italic leading-relaxed text-sage-deep">
                  {part.transliteration}
                </p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-whisper">
                  {part.translation[l]}
                </p>
              </article>
            ))}
          </div>
        )}

        <section className="mt-8 rounded-[20px] border border-hairline bg-paper-2 px-6 py-5">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-whisper">
            {l === "id" ? "Kapan & penjelasan" : "When & how"}
          </h2>
          <p className="mt-3 text-[15.5px] leading-relaxed text-ink-soft">{p.when[l]}</p>
        </section>

        {p.note && (
          <section className="mt-6 rounded-[24px] border border-clay/20 bg-clay-soft/40 p-6 sm:p-8">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-clay">
              {l === "id" ? "Untuk si kecil" : "For your little one"}
            </h2>
            <p className="mt-3 font-serif text-[17px] leading-[1.7] text-ink">{p.note[l]}</p>
          </section>
        )}

        <nav
          aria-label="Puasa navigation"
          className="mt-14 grid gap-3 border-t border-hairline pt-8 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={pathFor(l, `/puasa/${prev.slug}`)}
              className="lift tap group rounded-[18px] border border-hairline bg-paper p-5"
            >
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-whisper">
                ← {l === "id" ? "Sebelumnya" : "Previous"}
              </span>
              <p className="font-display mt-1 text-[16px] font-medium text-ink group-hover:text-clay">
                {prev.title[l]}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={pathFor(l, `/puasa/${next.slug}`)}
              className="lift tap group rounded-[18px] border border-hairline bg-paper p-5 sm:text-right"
            >
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-whisper">
                {l === "id" ? "Selanjutnya" : "Next"} →
              </span>
              <p className="font-display mt-1 text-[16px] font-medium text-ink group-hover:text-clay">
                {next.title[l]}
              </p>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        <p className="mt-10 text-[12.5px] leading-relaxed text-whisper">
          {l === "id"
            ? "Teks mengikuti bacaan yang umum diajarkan (mazhab Syafi'i). Sedang dalam tinjauan guru."
            : "Text follows the commonly taught wording (Shafi'i). Under teacher review."}
        </p>
      </main>

      <Footer locale={l} currentPath={`/puasa/${slug}`} />
      <MobileNav locale={l} />
      <ShareBar
        locale={l}
        title={p.title[l]}
        text={p.note?.[l] ?? p.when[l]}
        url={absoluteUrl(l, `/puasa/${slug}`)}
      />

      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: l === "id" ? "Puasa & Ramadhan" : "Fasting & Ramadan", path: "/puasa" },
            { name: p.title[l], path: `/puasa/${slug}` },
          ]),
          {
            "@type": "Article",
            headline: p.title[l],
            description: p.when[l],
            inLanguage: l === "id" ? "id-ID" : "en",
            datePublished: p.published,
            author: { "@id": `${siteUrl}/#org` },
            publisher: { "@id": `${siteUrl}/#org` },
            mainEntityOfPage: absoluteUrl(l, `/puasa/${slug}`),
          },
        )}
      />
    </>
  );
}
