import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
  isLocale,
  locales,
  absoluteUrl,
  pathFor,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { HadithCard } from "@/components/HadithCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph, itemListSchema } from "@/lib/seo/schemas";
import { getAllHadith } from "@/lib/content/hadith";

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
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/hadith",
    title: dict.hadith.indexTitle,
    description: dict.hadith.indexDescription,
  });
}

export default async function HadithIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const all = getAllHadith();

  return (
    <>
      <Header locale={l} currentPath="/hadith" />
      <main id="main" className="mx-auto max-w-5xl px-5 pb-28 pt-10 sm:px-7 sm:pt-14 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{dict.nav.hadith}</span>
        </nav>
        <header className="max-w-2xl">
          <h1 className="tracking-display font-serif text-[36px] font-medium leading-[1.1] text-ink sm:text-[44px]">
            {dict.hadith.indexTitle}
          </h1>
          <p className="mt-3 text-[15.5px] leading-relaxed text-whisper">
            {dict.hadith.indexDescription}
          </p>
        </header>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {all.map((h) => (
            <HadithCard key={h.slug} hadith={h} locale={l} />
          ))}
        </div>
      </main>
      <Footer locale={l} currentPath="/hadith" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.hadith, path: "/hadith" },
          ]),
          itemListSchema(
            l,
            dict.hadith.indexTitle,
            all.map((h) => ({
              name: h.title[l],
              url: absoluteUrl(l, `/hadith/${h.slug}`),
            })),
          ),
        )}
      />
    </>
  );
}
