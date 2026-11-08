import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";
import { getAllCatatan } from "@/lib/content/catatan";
import { StoryArt } from "@/components/story-art/StoryArt";
import { illusFor } from "@/lib/cerita/illus";
import { SERIES } from "@/lib/cerita/series";
import { SeriesProgress } from "@/components/SeriesProgress";

export function generateStaticParams() {
  return locales.flatMap((locale) => SERIES.map((s) => ({ locale, key: s.key })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; key: string }> }) {
  const { locale, key } = await params;
  const s = SERIES.find((x) => x.key === key);
  if (!isLocale(locale) || !s) return {};
  return buildMetadata({ locale, path: `/cerita/seri/${key}`, title: `${s.title[locale]} — Cerita Baby Mo`, description: s.blurb[locale] });
}

export default async function SeriesPage({ params }: { params: Promise<{ locale: string; key: string }> }) {
  const { locale, key } = await params;
  const s = SERIES.find((x) => x.key === key);
  if (!isLocale(locale) || !s) notFound();
  const l = locale as Locale;
  const all = getAllCatatan();
  const books = s.books.map((slug) => all.find((c) => c.slug === slug)).filter((c): c is NonNullable<typeof c> => !!c);
  const id = l === "id";

  return (
    <>
      <Header locale={l} currentPath="/cerita" />
      <main id="main" className="mx-auto max-w-5xl px-5 pb-28 pt-12 sm:px-7 sm:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-whisper">
          <Link href={pathFor(l, "/cerita")} className="hover:text-ink">{id ? "Cerita" : "Stories"}</Link> / <span className="text-ink">{s.title[l]}</span>
        </nav>
        <h1 className="font-display text-[34px] leading-tight text-ink sm:text-[44px]">
          <span aria-hidden>{s.emoji}</span> {s.title[l]}
        </h1>
        <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-whisper">{s.blurb[l]}</p>
        <SeriesProgress locale={l} slugs={books.map((b) => b.slug)} firstHref={pathFor(l, `/cerita/${books[0]!.slug}`)} hrefBase={pathFor(l, "/cerita/")} />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2">
          {books.map((b, i) => {
            const art = illusFor(b.slug);
            return (
              <li key={b.slug}>
                <Link href={pathFor(l, `/cerita/${b.slug}`)} data-series-book={b.slug} className="lift tap group flex items-center gap-4 rounded-[22px] border border-hairline bg-paper p-3">
                  <span className="relative block h-[92px] w-[74px] shrink-0 overflow-hidden rounded-[14px] bg-paper-2">
                    {art?.[0] && <StoryArt scene={art[0]} title={art[0].alt[l]} portrait />}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[12px] font-bold uppercase tracking-wider text-whisper">
                      {id ? `Buku ${i + 1}` : `Book ${i + 1}`} <span className="series-done-mark" aria-hidden>✓</span>
                    </span>
                    <span className="mt-0.5 block font-display text-[18px] leading-snug text-ink group-hover:underline">{b.title[l]}</span>
                    <span className="mt-1 line-clamp-2 block text-[13px] leading-relaxed text-whisper">{b.hook[l]}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </main>
      <Footer locale={l} currentPath="/cerita" />
      <MobileNav locale={l} />
      <JsonLd data={graph(breadcrumbSchema(l, [{ name: id ? "Cerita" : "Stories", path: "/cerita" }, { name: s.title[l], path: `/cerita/seri/${s.key}` }]))} />
    </>
  );
}
