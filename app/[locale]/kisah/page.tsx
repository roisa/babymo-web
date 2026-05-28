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
import { getAllProphets } from "@/lib/content/prophets";

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
  return buildMetadata({
    locale,
    path: "/kisah",
    title:
      locale === "id"
        ? "Kisah 25 Nabi untuk Anak — Singkat, Bermakna, Mudah Dipahami"
        : "Stories of the 25 Prophets for Kids — Short, Meaningful, Easy to Understand",
    description:
      locale === "id"
        ? "Kumpulan kisah 25 nabi dari Adam sampai Muhammad ﷺ — diceritakan dengan singkat dan bermakna untuk anak muslim Indonesia. Lengkap dengan tiga pelajaran utama dari setiap nabi."
        : "Stories of all 25 prophets from Adam to Muhammad ﷺ — told briefly and meaningfully for Muslim children. Three key lessons drawn from each prophet's life.",
  });
}

export default async function ProphetsIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const prophets = getAllProphets();

  return (
    <>
      <Header locale={l} currentPath="/kisah" />
      <main id="main" className="mx-auto max-w-5xl px-5 pb-28 pt-12 sm:px-7 sm:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <span className="text-ink">
            {l === "id" ? "Kisah Nabi" : "Prophet Stories"}
          </span>
        </nav>

        <header className="mb-12 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brave-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            {l === "id" ? "25 Nabi · Untuk Anak" : "25 Prophets · For Children"}
          </span>
          <h1 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px]">
            {l === "id" ? "Kisah 25 Nabi" : "Stories of the 25 Prophets"}
          </h1>
          <p className="mt-4 text-[16.5px] leading-[1.65] text-whisper">
            {l === "id"
              ? "Dari Nabi Adam yang diciptakan dari tanah, sampai Nabi Muhammad ﷺ yang menyatukan jazirah Arab dalam 23 tahun. Setiap kisah ditulis singkat namun bermakna — dengan tiga pelajaran utama yang bisa diajarkan ke anak hari ini."
              : "From Prophet Adam, created from earth, to Prophet Muhammad ﷺ, who united the Arabian peninsula in 23 years. Each story is brief yet meaningful — with three core lessons we can teach our children today."}
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {prophets.map((p) => (
            <Link
              key={p.slug}
              href={pathFor(l, `/kisah/${p.slug}`)}
              className="lift tap group flex h-full flex-col gap-3 rounded-[22px] border border-hairline bg-paper p-6 hover:border-brave/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brave-deep">
                    {l === "id" ? "Nabi ke-" : "Prophet"} {p.order}
                  </span>
                  <h2 className="font-display mt-1 text-[20px] font-medium leading-tight text-ink group-hover:text-brave-deep">
                    {p.name[l]}
                  </h2>
                  <p className="mt-1 text-[13px] text-whisper">{p.era[l]}</p>
                </div>
                <span
                  dir="rtl"
                  lang="ar"
                  className="font-arabic shrink-0 text-[22px] leading-none text-sage-deep"
                >
                  {p.arabicName}
                </span>
              </div>
              <p className="line-clamp-3 text-[14px] leading-relaxed text-whisper">
                {p.keyMoment[l]}
              </p>
              <p className="mt-auto text-[12px] font-semibold text-brave-deep">
                {l === "id" ? "Baca kisah" : "Read story"} →
              </p>
            </Link>
          ))}
        </div>
      </main>

      <Footer locale={l} currentPath="/kisah" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: l === "id" ? "Kisah Nabi" : "Prophet Stories", path: "/kisah" },
          ]),
          itemListSchema(
            l,
            l === "id" ? "Kisah 25 Nabi" : "Stories of the 25 Prophets",
            prophets.map((p) => ({
              name: p.name[l],
              url: absoluteUrl(l, `/kisah/${p.slug}`),
            })),
          ),
        )}
      />
    </>
  );
}
