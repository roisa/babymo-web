import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { type Locale, absoluteUrl, basePath, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { Redirect } from "@/components/Redirect";
import { getAllCatatan, getCatatanBySlug } from "@/lib/content/catatan";

// Legacy per-story path — redirects /catatan/[slug] → /cerita/[slug].
export const dynamic = "force-static";

export async function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales)
    for (const n of getAllCatatan()) out.push({ locale, slug: n.slug });
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  return {
    alternates: { canonical: absoluteUrl(locale, `/cerita/${slug}`) },
    robots: { index: false, follow: true },
  };
}

export default async function CatatanSlugRedirect({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  if (!getCatatanBySlug(slug)) notFound();
  const l = locale as Locale;
  return <Redirect to={`${basePath}${pathFor(l, `/cerita/${slug}`)}/`} />;
}
