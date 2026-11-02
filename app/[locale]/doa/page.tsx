import Link from "next/link";
import { SectionHeader, SectionButton } from "@/components/SectionHeader";
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
        <SectionHeader
          locale={l}
          section="doa"
          crumb={dict.nav.doa}
          title={dict.doa.indexTitle}
          sub={dict.doa.indexDescription}
        >
          <SectionButton href={pathFor(l, "/doa/kategori")}>
            {l === "id" ? "Jelajahi per kategori" : "Browse by category"} →
          </SectionButton>
        </SectionHeader>

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
