import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
  absoluteUrl,
  isLocale,
  locales,
  pathFor,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph, itemListSchema } from "@/lib/seo/schemas";
import type { PuasaItem } from "@/lib/content/types";
import { getAllPuasa, getPuasaByCategory } from "@/lib/content/puasa";

const CATEGORY_LABEL: Record<PuasaItem["category"], Record<Locale, string>> = {
  niat: { id: "Niat Puasa", en: "Fasting Intentions" },
  doa: { id: "Doa Buka & Sahur", en: "Iftar & Sahur Du'a" },
  sholat: { id: "Sholat Sunnah Ramadhan", en: "Ramadan Sunnah Prayers" },
  amalan: { id: "Amalan", en: "Good Deeds" },
};

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
    path: "/puasa",
    title:
      locale === "id"
        ? "Niat Puasa & Doa Buka Puasa Lengkap — Ramadhan Bareng Anak"
        : "Fasting Intentions & Iftar Du'a — Ramadan With Kids",
    description:
      locale === "id"
        ? "Kumpulan niat puasa (Ramadhan, qadha, Senin–Kamis, Syawal), doa buka puasa, sahur, serta niat sholat Tarawih & Witir — Arab, latin, dan artinya. Mudah diajarkan kepada anak."
        : "Fasting intentions (Ramadan, make-up, Monday–Thursday, Shawwal), the du'a for breaking the fast, sahur, plus Tarawih & Witr intentions — Arabic, transliteration, and meaning. Easy to teach a child.",
  });
}

export default async function PuasaIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const groups = getPuasaByCategory();
  const all = getAllPuasa();

  return (
    <>
      <Header locale={l} currentPath="/puasa" />
      <main id="main" className="mx-auto max-w-4xl px-5 pb-28 pt-10 sm:px-7 sm:pt-14 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{l === "id" ? "Puasa & Ramadhan" : "Fasting & Ramadan"}</span>
        </nav>

        <header className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-clay-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-clay">
            {l === "id" ? "Puasa & Ramadhan" : "Fasting & Ramadan"}
          </span>
          <h1 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px]">
            {l === "id" ? "Niat Puasa & Doa Buka Puasa" : "Fasting Intentions & Iftar Du'a"}
          </h1>
          <p className="mt-4 text-[16.5px] leading-[1.65] text-whisper">
            {l === "id"
              ? "Semua niat dan doa puasa dalam satu tempat — niat puasa Ramadhan, qadha, Senin–Kamis, dan Syawal, doa buka puasa & sahur, serta niat Tarawih dan Witir. Lengkap dengan tulisan Arab, cara baca, dan artinya."
              : "Every fasting intention and du'a in one place — Ramadan, make-up, Monday–Thursday, and Shawwal intentions, the iftar & sahur du'a, plus Tarawih and Witr. With Arabic, transliteration, and meaning."}
          </p>
        </header>

        <div className="mt-12 space-y-12">
          {groups.map(({ category, items }) => (
            <section key={category}>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-clay">
                {CATEGORY_LABEL[category][l]}
              </h2>
              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                {items.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={pathFor(l, `/puasa/${p.slug}`)}
                      className="lift tap group flex h-full items-start gap-4 rounded-[18px] border border-hairline bg-paper p-5 hover:border-clay/40"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay-soft text-[13px] font-semibold text-clay">
                        {p.order}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-[17px] font-medium text-ink group-hover:text-clay">
                          {p.title[l]}
                        </p>
                        {p.subtitle && (
                          <p className="mt-1 text-[13px] leading-snug text-whisper">
                            {p.subtitle[l]}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3 text-[13.5px]">
          <Link href={pathFor(l, "/sholat")} className="font-semibold text-sage-deep hover:underline">
            {l === "id" ? "Bacaan & niat sholat →" : "Prayer recitations →"}
          </Link>
          <Link href={pathFor(l, "/kalender")} className="font-semibold text-sage-deep hover:underline">
            {l === "id" ? "Kalender Islam →" : "Islamic calendar →"}
          </Link>
        </div>

        <p className="mt-10 rounded-[18px] border border-hairline bg-paper-2 px-5 py-4 text-[12.5px] leading-relaxed text-whisper">
          {l === "id"
            ? "Catatan: teks mengikuti bacaan yang umum diajarkan (mazhab Syafi'i) di Indonesia. Sedang dalam tinjauan guru — mohon bantu verifikasi bila menemukan kekeliruan."
            : "Note: the texts follow the wording commonly taught (Shafi'i) in Indonesia. Under teacher review — please help us verify if you spot an error."}
        </p>
      </main>

      <Footer locale={l} currentPath="/puasa" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: l === "id" ? "Puasa & Ramadhan" : "Fasting & Ramadan", path: "/puasa" },
          ]),
          itemListSchema(
            l,
            l === "id" ? "Niat Puasa & Doa" : "Fasting Intentions & Du'a",
            all.map((p) => ({
              name: p.title[l],
              url: absoluteUrl(l, `/puasa/${p.slug}`),
            })),
          ),
        )}
      />
    </>
  );
}
