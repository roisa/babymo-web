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
import { DoaCard } from "@/components/DoaCard";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  graph,
  itemListSchema,
} from "@/lib/seo/schemas";
import { getAllDoa } from "@/lib/content/doa";
import { DoaList } from "./DoaList";

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
      <main id="main" className="mx-auto max-w-5xl px-5 pb-28 pt-10 sm:px-7 sm:pt-14 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{dict.nav.doa}</span>
        </nav>
        <header className="max-w-2xl">
          <h1 className="tracking-display font-serif text-[36px] font-medium leading-[1.1] text-ink sm:text-[44px]">
            {dict.doa.indexTitle}
          </h1>
          <p className="mt-3 text-[15.5px] leading-relaxed text-whisper">
            {dict.doa.indexDescription}
          </p>
          <Link
            href={pathFor(l, "/doa/kategori")}
            className="tap mt-5 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-paper px-4 py-2 text-[13.5px] font-semibold text-sage-deep hover:border-sage/40"
          >
            {l === "id" ? "Jelajahi per kategori" : "Browse by category"} →
          </Link>
        </header>

        <div className="mt-8">
          <DoaList doas={all} locale={l} />
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
            })),
          ),
        )}
      />
    </>
  );
}
