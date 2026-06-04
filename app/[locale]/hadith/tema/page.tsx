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
import { getAllHadith } from "@/lib/content/hadith";
import { getHadithThemes, hadithThemeLabel } from "@/lib/content/hadith-themes";

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
  const total = getAllHadith().length;
  const title =
    locale === "id" ? "Tema Hadith Parenting Islami" : "Islamic Parenting Hadith Themes";
  const description =
    locale === "id"
      ? `Jelajahi ${total} hadith parenting per tema — kasih sayang, adab, keadilan, berbakti, dan banyak lagi. Lengkap dengan teks Arab, perawi, sumber, dan catatan penerapan untuk orang tua muslim.`
      : `Browse ${total} parenting hadith by theme — mercy, manners, justice, honouring parents, and more. With Arabic, narrator, source, and applied notes for Muslim parents.`;
  return buildMetadata({ locale, path: "/hadith/tema", title, description });
}

export default async function HadithTemaIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const themes = getHadithThemes();
  const total = getAllHadith().length;

  return (
    <>
      <Header locale={l} currentPath="/hadith/tema" />
      <main id="main" className="mx-auto max-w-4xl px-5 pb-28 pt-10 sm:px-7 sm:pt-14 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/hadith")} className="hover:text-ink">
            {dict.nav.hadith}
          </Link>{" "}
          / <span className="text-ink">{l === "id" ? "Tema" : "Themes"}</span>
        </nav>

        <header className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-sage-deep">
            {dict.nav.hadith}
          </p>
          <h1 className="tracking-display mt-2 font-serif text-[36px] font-medium leading-[1.1] text-ink sm:text-[44px]">
            {l === "id" ? "Tema Hadith" : "Hadith Themes"}
          </h1>
          <p className="mt-3 text-[15.5px] leading-relaxed text-whisper">
            {l === "id"
              ? `Pilih tema untuk menemukan hadith pilihan seputar pengasuhan dan akhlak. ${total} hadith, lengkap dengan perawi dan tingkat keshahihan.`
              : `Pick a theme to find selected hadith on parenting and character. ${total} hadith, with narrators and authenticity grades.`}
          </p>
        </header>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((c) => (
            <li key={c.theme}>
              <Link
                href={pathFor(l, `/hadith/tema/${c.theme}`)}
                className="lift tap group flex items-center justify-between gap-3 rounded-[18px] border border-hairline bg-paper px-5 py-4 hover:border-sage/40"
              >
                <span className="font-serif text-[17px] font-medium text-ink group-hover:text-sage-deep">
                  {hadithThemeLabel(l, c.theme)}
                </span>
                <span className="shrink-0 rounded-full bg-sage-soft px-2.5 py-0.5 text-[12px] font-semibold text-sage-deep">
                  {c.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-[13.5px]">
          <Link href={pathFor(l, "/hadith")} className="font-semibold text-sage-deep hover:underline">
            {l === "id" ? "← Lihat semua hadith" : "← See all hadith"}
          </Link>
        </p>
      </main>

      <Footer locale={l} currentPath="/hadith/tema" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.hadith, path: "/hadith" },
            { name: l === "id" ? "Tema" : "Themes", path: "/hadith/tema" },
          ]),
          itemListSchema(
            l,
            l === "id" ? "Tema Hadith" : "Hadith Themes",
            themes.map((c) => ({
              name: hadithThemeLabel(l, c.theme),
              url: absoluteUrl(l, `/hadith/tema/${c.theme}`),
            })),
          ),
        )}
      />
    </>
  );
}
