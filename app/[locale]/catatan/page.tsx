import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { type Locale, absoluteUrl, basePath, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { Redirect } from "@/components/Redirect";

// Legacy path — the section moved from /catatan to /cerita. Keep a static
// stub that canonicalises to the new URL and redirects real visitors.
export const dynamic = "force-static";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    alternates: { canonical: absoluteUrl(locale, "/cerita") },
    robots: { index: false, follow: true },
  };
}

export default async function CatatanRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  return <Redirect to={`${basePath}${pathFor(l, "/cerita")}/`} />;
}
