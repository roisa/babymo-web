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
import { getAllDoa } from "@/lib/content/doa";
import { doaCategoryLabel, getDoaCategories } from "@/lib/content/doa-categories";

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
  const total = getAllDoa().length;
  const title =
    locale === "id" ? "Kategori Doa Harian Anak" : "Daily Dua Categories";
  const description =
    locale === "id"
      ? `Jelajahi ${total}+ doa harian anak muslim per kategori — tidur, makan, belajar, perjalanan, perlindungan, dan banyak lagi. Lengkap dengan teks Arab, transliterasi, terjemahan, dan sumber yang shahih.`
      : `Browse ${total}+ daily duas for Muslim children by category — sleep, eating, study, travel, protection, and more. With Arabic, transliteration, translation, and authentic sources.`;
  return buildMetadata({ locale, path: "/doa/kategori", title, description });
}

export default async function DoaKategoriIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const categories = getDoaCategories();
  const total = getAllDoa().length;

  return (
    <>
      <Header locale={l} currentPath="/doa/kategori" />
      <main id="main" className="mx-auto max-w-4xl px-5 pb-28 pt-10 sm:px-7 sm:pt-14 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/doa")} className="hover:text-ink">
            {dict.nav.doa}
          </Link>{" "}
          / <span className="text-ink">{l === "id" ? "Kategori" : "Categories"}</span>
        </nav>

        <header className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-sage-deep">
            {l === "id" ? "Doa Harian" : "Daily Duas"}
          </p>
          <h1 className="tracking-display mt-2 font-serif text-[36px] font-medium leading-[1.1] text-ink sm:text-[44px]">
            {l === "id" ? "Kategori Doa" : "Dua Categories"}
          </h1>
          <p className="mt-3 text-[15.5px] leading-relaxed text-whisper">
            {l === "id"
              ? `Pilih kategori untuk menemukan doa yang tepat untuk setiap momen si kecil. ${total} doa, bersumber dari Al-Qur'an dan hadith shahih.`
              : `Pick a category to find the right dua for every moment of your little one's day. ${total} duas, sourced from the Qur'an and authentic hadith.`}
          </p>
        </header>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <li key={c.tag}>
              <Link
                href={pathFor(l, `/doa/kategori/${c.tag}`)}
                className="lift tap group flex items-center justify-between gap-3 rounded-[18px] border border-hairline bg-paper px-5 py-4 hover:border-sage/40"
              >
                <span className="font-serif text-[17px] font-medium text-ink group-hover:text-sage-deep">
                  {doaCategoryLabel(l, c.tag)}
                </span>
                <span className="shrink-0 rounded-full bg-sage-soft px-2.5 py-0.5 text-[12px] font-semibold text-sage-deep">
                  {c.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-[13.5px] leading-relaxed text-whisper">
          <Link href={pathFor(l, "/doa")} className="font-semibold text-sage-deep hover:underline">
            {l === "id" ? "← Lihat semua doa" : "← See all duas"}
          </Link>
        </p>
      </main>

      <Footer locale={l} currentPath="/doa/kategori" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.doa, path: "/doa" },
            { name: l === "id" ? "Kategori" : "Categories", path: "/doa/kategori" },
          ]),
          itemListSchema(
            l,
            l === "id" ? "Kategori Doa" : "Dua Categories",
            categories.map((c) => ({
              name: doaCategoryLabel(l, c.tag),
              url: absoluteUrl(l, `/doa/kategori/${c.tag}`),
            })),
          ),
        )}
      />
    </>
  );
}
