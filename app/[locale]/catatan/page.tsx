import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, absoluteUrl, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph, itemListSchema } from "@/lib/seo/schemas";
import { getAllCatatan } from "@/lib/content/catatan";

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
    path: "/catatan",
    title: dict.catatan.indexTitle,
    description: dict.catatan.indexDescription,
  });
}

export default async function CatatanIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const notes = getAllCatatan();

  return (
    <>
      <Header locale={l} currentPath="/catatan" />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-28 pt-12 sm:px-7 sm:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{dict.nav.catatan}</span>
        </nav>

        <header className="mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brave-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-brave text-brave" />
            {dict.catatan.bySalman}
          </span>
          <h1 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px]">
            {dict.catatan.indexTitle}
          </h1>
          <p className="mt-4 text-[16.5px] leading-[1.65] text-whisper">
            {dict.catatan.intro}
          </p>
        </header>

        <ul className="space-y-7">
          {notes.map((n) => (
            <li key={n.slug}>
              <Link
                href={pathFor(l, `/catatan/${n.slug}`)}
                className="lift tap group block rounded-[24px] border border-hairline bg-paper p-7 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-whisper">
                  <span className="rounded-full bg-sage-soft px-2.5 py-0.5 font-semibold uppercase tracking-[0.1em] text-sage-deep">
                    {dict.catatan.childChip[n.child]}
                  </span>
                  <time dateTime={n.published}>
                    {formatDate(n.published, l)}
                  </time>
                  <span aria-hidden>·</span>
                  <span>
                    {n.readingTimeMin} {dict.blog.readingTime}
                  </span>
                </div>
                <h2 className="font-display mt-3 text-[26px] font-medium leading-snug text-ink group-hover:text-brave-deep sm:text-[30px]">
                  {n.title[l]}
                </h2>
                <p className="mt-2 text-[15.5px] leading-relaxed text-whisper">
                  {n.hook[l]}
                </p>
                <p className="mt-5 text-[12.5px] font-semibold text-brave-deep">
                  {dict.catatan.readMore} →
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 rounded-[18px] border border-hairline bg-paper-2 px-5 py-4 text-[12.5px] leading-relaxed text-whisper">
          {dict.catatan.privacyNote}
        </p>
      </main>

      <Footer locale={l} currentPath="/catatan" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.catatan, path: "/catatan" },
          ]),
          itemListSchema(
            l,
            dict.catatan.indexTitle,
            notes.map((n) => ({
              name: n.title[l],
              url: absoluteUrl(l, `/catatan/${n.slug}`),
            })),
          ),
        )}
      />
    </>
  );
}

function formatDate(iso: string, locale: Locale): string {
  const d = new Date(iso);
  return d.toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
