import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, absoluteUrl, isLocale, locales, pathFor, siteUrl } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { ShareBar } from "@/components/ShareBar";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";
import { renderBody } from "@/lib/content/render";
import { getAllProphets, getProphetBySlug } from "@/lib/content/prophets";
import { getSurahBySlug } from "@/lib/content/surah";
import { getDoaBySlug } from "@/lib/content/doa";

export async function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const p of getAllProphets()) out.push({ locale, slug: p.slug });
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
  const p = getProphetBySlug(slug);
  if (!p) return {};
  return buildMetadata({
    locale,
    path: `/kisah/${slug}`,
    title:
      locale === "id"
        ? `Kisah ${p.name[locale]} untuk Anak — Singkat dan Bermakna`
        : `Story of ${p.name[locale]} for Children — Short and Meaningful`,
    description: p.keyMoment[locale],
    type: "article",
  });
}

export default async function ProphetDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const p = getProphetBySlug(slug);
  if (!p) notFound();
  const dict = getDictionary(l);

  const relatedSurahs = (p.relatedSurah ?? [])
    .map((s) => getSurahBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relatedDoas = (p.relatedDoa ?? [])
    .map((s) => getDoaBySlug(s))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <>
      <Header locale={l} currentPath={`/kisah/${slug}`} />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-40 pt-8 sm:px-7 sm:pt-12 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/kisah")} className="hover:text-ink">
            {l === "id" ? "Kisah Nabi" : "Prophet Stories"}
          </Link>{" "}
          / <span className="text-ink">{p.name[l]}</span>
        </nav>

        <header className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="rounded-full bg-brave-soft px-2.5 py-0.5 font-semibold uppercase tracking-[0.1em] text-brave-deep">
              {l === "id" ? "Nabi ke-" : "Prophet"} {p.order} {l === "id" ? "dari 25" : "of 25"}
            </span>
            <span className="text-whisper">{p.era[l]}</span>
          </div>
          <h1 className="font-display text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px]">
            {p.name[l]}
          </h1>
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic mt-3 text-[38px] leading-none text-sage-deep"
          >
            {p.arabicName}
          </p>
          <p className="mt-4 text-[17px] leading-[1.6] text-whisper">
            {p.keyMoment[l]}
          </p>
        </header>

        {/* Story body */}
        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: renderBody(p.story[l], l) }}
        />

        {/* Three key lessons */}
        <section className="mt-12 rounded-[24px] border border-brave/20 bg-brave-soft/40 p-6 sm:p-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            {l === "id" ? "Tiga Pelajaran Utama" : "Three Key Lessons"}
          </h2>
          <ol className="mt-5 space-y-4">
            {p.lessons[l].map((lesson, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brave text-[13px] font-semibold text-paper">
                  {i + 1}
                </span>
                <p className="font-serif text-[16px] leading-[1.65] text-ink">
                  {lesson}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Related */}
        {(relatedSurahs.length > 0 || relatedDoas.length > 0) && (
          <section className="mt-12">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-whisper">
              {l === "id" ? "Yang terkait" : "Related"}
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {relatedSurahs.map((s) => (
                <Link
                  key={s.slug}
                  href={pathFor(l, `/surat/${s.slug}`)}
                  className="lift tap group rounded-[18px] border border-hairline bg-paper p-5 hover:border-brave/40"
                >
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-brave-deep">
                    {l === "id" ? "Surat" : "Surah"}
                  </span>
                  <p className="font-display mt-1 text-[17px] font-medium text-ink group-hover:text-brave-deep">
                    {s.name[l]}
                  </p>
                  <p className="mt-1 text-[12.5px] text-whisper">{s.meaning[l]}</p>
                </Link>
              ))}
              {relatedDoas.map((d) => (
                <Link
                  key={d.slug}
                  href={pathFor(l, `/doa/${d.slug}`)}
                  className="lift tap group rounded-[18px] border border-hairline bg-paper p-5 hover:border-brave/40"
                >
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-sage-deep">
                    {l === "id" ? "Doa" : "Du'a"}
                  </span>
                  <p className="font-display mt-1 text-[17px] font-medium text-ink group-hover:text-brave-deep">
                    {d.title[l]}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Navigation to prev/next prophet */}
        <PrevNext currentOrder={p.order} locale={l} />
      </main>

      <Footer locale={l} currentPath={`/kisah/${slug}`} />
      <MobileNav locale={l} />
      <ShareBar
        locale={l}
        title={p.name[l]}
        text={p.keyMoment[l]}
        url={absoluteUrl(l, `/kisah/${slug}`)}
      />

      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: l === "id" ? "Kisah Nabi" : "Prophet Stories", path: "/kisah" },
            { name: p.name[l], path: `/kisah/${slug}` },
          ]),
          {
            "@type": "Article",
            headline: p.name[l],
            description: p.keyMoment[l],
            inLanguage: l === "id" ? "id-ID" : "en",
            datePublished: p.published,
            author: { "@id": `${siteUrl}/#org` },
            publisher: { "@id": `${siteUrl}/#org` },
            mainEntityOfPage: absoluteUrl(l, `/kisah/${slug}`),
          },
        )}
      />
    </>
  );
}

function PrevNext({ currentOrder, locale }: { currentOrder: number; locale: Locale }) {
  const all = getAllProphets();
  const prev = all.find((p) => p.order === currentOrder - 1);
  const next = all.find((p) => p.order === currentOrder + 1);
  return (
    <nav
      aria-label="Prophet navigation"
      className="mt-14 grid gap-3 border-t border-hairline pt-8 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          href={pathFor(locale, `/kisah/${prev.slug}`)}
          className="lift tap group rounded-[18px] border border-hairline bg-paper p-5"
        >
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-whisper">
            ← {locale === "id" ? "Sebelumnya" : "Previous"}
          </span>
          <p className="font-display mt-1 text-[17px] font-medium text-ink group-hover:text-brave-deep">
            {prev.name[locale]}
          </p>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={pathFor(locale, `/kisah/${next.slug}`)}
          className="lift tap group rounded-[18px] border border-hairline bg-paper p-5 sm:text-right"
        >
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-whisper">
            {locale === "id" ? "Selanjutnya" : "Next"} →
          </span>
          <p className="font-display mt-1 text-[17px] font-medium text-ink group-hover:text-brave-deep">
            {next.name[locale]}
          </p>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
