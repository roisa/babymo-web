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
import type { BacaanSholat } from "@/lib/content/types";
import {
  getAllBacaanSholat,
  getBacaanSholatByCategory,
} from "@/lib/content/bacaan-sholat";

const CATEGORY_LABEL: Record<
  BacaanSholat["category"],
  Record<Locale, string>
> = {
  niat: { id: "Niat", en: "Intention" },
  gerakan: { id: "Gerakan & Bacaan", en: "Movements & Recitations" },
  doa: { id: "Doa dalam Sholat", en: "Supplications in Prayer" },
  dzikir: { id: "Dzikir Setelah Sholat", en: "Dhikr After Prayer" },
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
    path: "/sholat",
    title:
      locale === "id"
        ? "Bacaan & Niat Sholat Lengkap — Arab, Latin, dan Artinya"
        : "Complete Prayer (Sholat) Recitations — Arabic, Transliteration & Meaning",
    description:
      locale === "id"
        ? "Panduan bacaan sholat lengkap dari niat, doa iftitah, ruku, sujud, tasyahud, hingga dzikir setelah sholat — tulisan Arab, cara baca (latin), dan artinya. Mudah diajarkan kepada anak."
        : "A complete guide to the prayer recitations — from the intention, opening supplication, bowing, prostration, and tashahhud to the dhikr after prayer — with Arabic, transliteration, and meaning. Easy to teach a child.",
  });
}

export default async function SholatIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const groups = getBacaanSholatByCategory();
  const all = getAllBacaanSholat();

  return (
    <>
      <Header locale={l} currentPath="/sholat" />
      <main id="main" className="mx-auto max-w-4xl px-5 pb-28 pt-10 sm:px-7 sm:pt-14 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{l === "id" ? "Bacaan Sholat" : "Prayer Recitations"}</span>
        </nav>

        <header className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-sage-deep">
            {l === "id" ? "Panduan Sholat" : "Prayer Guide"}
          </span>
          <h1 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px]">
            {l === "id" ? "Bacaan & Niat Sholat" : "Prayer Recitations & Intention"}
          </h1>
          <p className="mt-4 text-[16.5px] leading-[1.65] text-whisper">
            {l === "id"
              ? "Urutan bacaan sholat dari niat hingga salam dan dzikir setelahnya — lengkap dengan tulisan Arab, cara baca, dan artinya. Ajarkan satu langkah setiap hari bersama si kecil."
              : "The prayer recitations in order, from the intention to the closing salam and the dhikr after it — with Arabic, transliteration, and meaning. Teach one step a day with your little one."}
          </p>
        </header>

        <div className="mt-12 space-y-12">
          {groups.map(({ category, items }) => (
            <section key={category}>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sage-deep">
                {CATEGORY_LABEL[category][l]}
              </h2>
              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                {items.map((b) => (
                  <li key={b.slug}>
                    <Link
                      href={pathFor(l, `/sholat/${b.slug}`)}
                      className="lift tap group flex h-full items-start gap-4 rounded-[18px] border border-hairline bg-paper p-5 hover:border-sage/40"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-soft text-[13px] font-semibold text-sage-deep">
                        {b.order}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-[17px] font-medium text-ink group-hover:text-sage-deep">
                          {b.title[l]}
                        </p>
                        {b.subtitle && (
                          <p className="mt-1 text-[13px] leading-snug text-whisper">
                            {b.subtitle[l]}
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

        <p className="mt-12 rounded-[18px] border border-hairline bg-paper-2 px-5 py-4 text-[12.5px] leading-relaxed text-whisper">
          {l === "id"
            ? "Catatan: teks di atas mengikuti bacaan yang umum diajarkan (mazhab Syafi'i) di Indonesia. Sedang dalam tinjauan guru — mohon bantu verifikasi bila menemukan kekeliruan."
            : "Note: the texts above follow the wording commonly taught (Shafi'i) in Indonesia. Under teacher review — please help us verify if you spot an error."}
        </p>
      </main>

      <Footer locale={l} currentPath="/sholat" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: l === "id" ? "Bacaan Sholat" : "Prayer Recitations", path: "/sholat" },
          ]),
          itemListSchema(
            l,
            l === "id" ? "Bacaan & Niat Sholat" : "Prayer Recitations",
            all.map((b) => ({
              name: b.title[l],
              url: absoluteUrl(l, `/sholat/${b.slug}`),
            })),
          ),
        )}
      />
    </>
  );
}
