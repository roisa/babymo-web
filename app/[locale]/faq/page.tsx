import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/seo/schemas";

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
    path: "/faq",
    title: dict.pages.faq.title,
    description: dict.pages.faq.description,
  });
}

export default async function FaqPage({
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
      <Header locale={l} currentPath="/faq" />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{dict.nav.faq}</span>
        </nav>
        <header>
          <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {dict.pages.faq.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-whisper">
            {dict.pages.faq.description}
          </p>
        </header>
        <div className="mt-10 divide-y divide-mist">
          {dict.faq.items.map((q) => (
            <details key={q.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink">
                <span>{q.q}</span>
                <span className="text-whisper transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-whisper">{q.a}</p>
            </details>
          ))}
        </div>
      </main>
      <Footer locale={l} currentPath="/faq" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.faq, path: "/faq" },
          ]),
          faqSchema(dict.faq.items)
        )}
      />
    </>
  );
}
