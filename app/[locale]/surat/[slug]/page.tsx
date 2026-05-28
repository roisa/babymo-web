import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, absoluteUrl, isLocale, locales, pathFor, siteUrl } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { ShareBar } from "@/components/ShareBar";
import { BookmarkButton } from "@/components/BookmarkButton";
import { VerificationBadge } from "@/components/VerificationBadge";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";
import { getAllSurah, getSurahBySlug } from "@/lib/content/surah";

export async function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const s of getAllSurah()) out.push({ locale, slug: s.slug });
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
  const s = getSurahBySlug(slug);
  if (!s) return {};
  return buildMetadata({
    locale,
    path: `/surat/${slug}`,
    title:
      locale === "id"
        ? `Surat ${s.name[locale]} (${s.meaning[locale]}) — Arab, Latin, Arti & Tafsir`
        : `Surah ${s.name[locale]} (${s.meaning[locale]}) — Arabic, Transliteration, Translation & Tafsir`,
    description: s.introForKids[locale],
    type: "article",
  });
}

export default async function SurahDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const s = getSurahBySlug(slug);
  if (!s) notFound();
  const dict = getDictionary(l);

  return (
    <>
      <Header locale={l} currentPath={`/surat/${slug}`} />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-40 pt-8 sm:px-7 sm:pt-12 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/surat")} className="hover:text-ink">
            {l === "id" ? "Surat Pendek" : "Short Surahs"}
          </Link>{" "}
          / <span className="text-ink">{s.name[l]}</span>
        </nav>

        <header className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="rounded-full bg-brave-soft px-2.5 py-0.5 font-semibold uppercase tracking-[0.1em] text-brave-deep">
              {l === "id" ? "Surat ke-" : "Surah"} {s.number}
            </span>
            <span className="text-whisper">
              {s.ayahCount} {l === "id" ? "ayat" : "verses"}
            </span>
            <span className="text-whisper">·</span>
            <span className="text-whisper">
              {s.revelation === "makki"
                ? l === "id"
                  ? "Makkiyah"
                  : "Meccan"
                : l === "id"
                  ? "Madaniyah"
                  : "Medinan"}
            </span>
            <span className="text-whisper">·</span>
            <span className="text-whisper">Juz {s.juz}</span>
          </div>
          <h1 className="font-display text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px]">
            {s.name[l]}
          </h1>
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic mt-3 text-[38px] leading-none text-sage-deep"
          >
            {s.arabicName}
          </p>
          <p className="mt-3 text-[15px] text-whisper">
            {l === "id" ? "Artinya:" : "Meaning:"}{" "}
            <span className="text-ink">{s.meaning[l]}</span>
          </p>
          <p className="mt-4 text-[16.5px] leading-[1.65] text-whisper">
            {s.introForKids[l]}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <BookmarkButton
              type="surah"
              slug={slug}
              title={s.name[l]}
              url={`/surat/${slug}`}
              locale={l}
            />
            <VerificationBadge
              locale={l}
              kindLabel={l === "id" ? "surat" : "surah"}
              title={s.name[l]}
              path={`/surat/${slug}`}
            />
          </div>
        </header>

        {/* Verse-by-verse cards */}
        <section className="overflow-hidden rounded-[24px] border border-hairline bg-paper">
          {s.ayahs.map((a, i) => (
            <div
              key={a.number}
              className={`px-6 py-7 sm:px-8 ${i < s.ayahs.length - 1 ? "border-b border-hairline" : ""}`}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sage-soft text-[12px] font-semibold text-sage-deep">
                  {a.number}
                </span>
              </div>
              <p
                dir="rtl"
                lang="ar"
                className="font-arabic text-[30px] leading-[2] text-ink sm:text-[36px]"
              >
                {a.arabic}
              </p>
              <p className="mt-3 text-[14.5px] italic text-ink-soft">
                {a.transliteration}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-whisper">
                {a.translation[l]}
              </p>
            </div>
          ))}
        </section>

        {/* Tafsir for kids */}
        <section className="mt-10 rounded-[22px] border border-hairline bg-clay-soft p-6 sm:p-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-clay">
            {l === "id" ? "Tafsir Sederhana untuk Anak" : "Tafsir for Children"}
          </h2>
          <p className="mt-3 font-serif text-[16.5px] leading-[1.75] text-ink">
            {s.tafsirForKids[l]}
          </p>
        </section>

        {/* When to read */}
        <section className="mt-6 rounded-[22px] border border-brave/20 bg-brave-soft/40 p-6 sm:p-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            {l === "id" ? "Kapan dibaca" : "When to recite"}
          </h2>
          <p className="mt-3 text-[15.5px] leading-[1.65] text-ink">
            {s.whenToRead[l]}
          </p>
        </section>

        {/* Themes */}
        <dl className="mt-8 grid gap-5 rounded-[22px] border border-hairline bg-paper p-6 text-[14px] sm:grid-cols-2">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
              {l === "id" ? "Tema" : "Themes"}
            </dt>
            <dd className="mt-1 flex flex-wrap gap-1.5">
              {s.themes.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-paper-2 px-2 py-0.5 text-[12px] text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
              {l === "id" ? "Jumlah Ayat" : "Verse count"}
            </dt>
            <dd className="mt-1 text-ink">{s.ayahCount}</dd>
          </div>
        </dl>
      </main>

      <Footer locale={l} currentPath={`/surat/${slug}`} />
      <MobileNav locale={l} />
      <ShareBar
        locale={l}
        title={`${s.name[l]} (${s.meaning[l]})`}
        text={
          l === "id"
            ? `Surat ${s.name[l]} — ${s.meaning[l]}. Belajar bersama anak di Baby Mo.`
            : `Surah ${s.name[l]} — ${s.meaning[l]}. Learning together with kids at Baby Mo.`
        }
        url={absoluteUrl(l, `/surat/${slug}`)}
      />

      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: l === "id" ? "Surat Pendek" : "Short Surahs", path: "/surat" },
            { name: s.name[l], path: `/surat/${slug}` },
          ]),
          {
            "@type": "Article",
            headline: s.name[l],
            description: s.introForKids[l],
            inLanguage: l === "id" ? "id-ID" : "en",
            datePublished: s.published,
            author: { "@id": `${siteUrl}/#org` },
            publisher: { "@id": `${siteUrl}/#org` },
            mainEntityOfPage: absoluteUrl(l, `/surat/${slug}`),
          },
        )}
      />
    </>
  );
}
