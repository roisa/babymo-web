import { notFound } from "next/navigation";
import { type Locale, isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { SectionHub, type SectionItem } from "@/components/SectionHub";
import { getAllPaths } from "@/lib/content/paths";

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
    path: "/learn/path",
    title: dict.pages.paths.title,
    description: dict.pages.paths.description,
  });
}

function items(l: Locale): SectionItem[] {
  return getAllPaths().map((p) => ({
    emoji: p.emoji,
    title: p.title[l],
    description: p.description[l],
    href: `/learn/path/${p.slug}`,
    badge: `${p.ageLabel} ${l === "id" ? "thn" : "yrs"}`,
  }));
}

export default async function PathsIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  return (
    <SectionHub
      locale={l}
      currentPath="/learn/path"
      title={dict.pages.paths.title}
      description={dict.pages.paths.description}
      crumbLabel={dict.pages.paths.title}
      items={items(l)}
    />
  );
}
