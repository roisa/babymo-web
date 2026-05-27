import Link from "next/link";
import { type Locale, isLocale, locales, absoluteUrl, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { DoaCard } from "@/components/DoaCard";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  graph,
  itemListSchema,
} from "@/lib/seo/schemas";
import { getAllDoa } from "@/lib/content/doa";
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
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/doa",
    title: dict.doa.indexTitle,
    description: dict.doa.indexDescription,
  });
}

export default async function DoaIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const all = getAllDoa();

  return (
    <>
      <Header locale={l} currentPath="/doa" />
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{dict.nav.doa}</span>
        </nav>
        <header className="max-w-2xl">
          <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {dict.doa.indexTitle}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-whisper">
            {dict.doa.indexDescription}
          </p>
        </header>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {all.map((d) => (
            <DoaCard key={d.slug} doa={d} locale={l} />
          ))}
        </div>
      </main>
      <Footer locale={l} currentPath="/doa" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.doa, path: "/doa" },
          ]),
          itemListSchema(
            l,
            dict.doa.indexTitle,
            all.map((d) => ({
              name: d.title[l],
              url: absoluteUrl(l, `/doa/${d.slug}`),
            }))
          )
        )}
      />
    </>
  );
}
