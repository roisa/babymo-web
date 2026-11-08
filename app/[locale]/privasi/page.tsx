import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";
import { PRIVACY_HTML } from "@/lib/content/privacy";

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
    path: "/privasi",
    title: dict.pages.privacy.title,
    description: dict.pages.privacy.description,
  });
}

const BODY = PRIVACY_HTML;

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);

  return (
    <>
      <Header locale={l} currentPath="/privasi" />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{dict.pages.privacy.title}</span>
        </nav>
        <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {dict.pages.privacy.title}
        </h1>
        <article
          className="prose mt-8"
          dangerouslySetInnerHTML={{ __html: BODY[l] }}
        />
      </main>
      <Footer locale={l} currentPath="/privasi" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.pages.privacy.title, path: "/privasi" },
          ])
        )}
      />
    </>
  );
}
