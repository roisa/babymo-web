import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
  isLocale,
  locales,
  absoluteUrl,
  pathFor,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { HadithCard } from "@/components/HadithCard";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  graph,
  itemListSchema,
} from "@/lib/seo/schemas";
import { getAllHadith } from "@/lib/content/hadith";

const THEME_LABEL: Record<Locale, Record<string, string>> = {
  id: {
    "adab": "Adab",
    "akhlak": "Akhlak",
    "amanat": "Amanat",
    "amal-jariyah": "Amal Jariyah",
    "anak-perempuan": "Anak Perempuan",
    "anak-shalih": "Anak Shalih",
    "anak-yatim": "Anak Yatim",
    "bermain": "Bermain",
    "berbakti": "Berbakti",
    "doa": "Doa",
    "ibu": "Ibu",
    "kasih-sayang": "Kasih Sayang",
    "kelembutan": "Kelembutan",
    "keluarga": "Keluarga",
    "kemuliaan": "Kemuliaan",
    "keadilan": "Keadilan",
    "kehadiran": "Kehadiran",
    "lisan-orangtua": "Lisan Orang Tua",
    "nafkah": "Nafkah",
    "pilih-kasih": "Pilih Kasih",
    "rezeki": "Rezeki",
    "saudara": "Saudara",
    "sholat": "Sholat",
    "silaturahmi": "Silaturahmi",
    "suami-istri": "Suami Istri",
    "tanggung-jawab": "Tanggung Jawab",
    "tarbiyah": "Tarbiyah",
    "tetangga": "Tetangga",
    "tujuh-tahun": "Tujuh Tahun",
    "warisan": "Warisan",
  },
  en: {
    "adab": "Manners",
    "akhlak": "Character",
    "amanat": "Trust",
    "amal-jariyah": "Ongoing Charity",
    "anak-perempuan": "Daughters",
    "anak-shalih": "Righteous Child",
    "anak-yatim": "Orphans",
    "bermain": "Play",
    "berbakti": "Honoring Parents",
    "doa": "Dua",
    "ibu": "Mother",
    "kasih-sayang": "Mercy & Affection",
    "kelembutan": "Gentleness",
    "keluarga": "Family",
    "kemuliaan": "Honor",
    "keadilan": "Justice",
    "kehadiran": "Presence",
    "lisan-orangtua": "Parents' Tongue",
    "nafkah": "Provision",
    "pilih-kasih": "Favoritism",
    "rezeki": "Provision",
    "saudara": "Siblings",
    "sholat": "Prayer",
    "silaturahmi": "Kinship Ties",
    "suami-istri": "Spouse",
    "tanggung-jawab": "Responsibility",
    "tarbiyah": "Upbringing",
    "tetangga": "Neighbors",
    "tujuh-tahun": "Age Seven",
    "warisan": "Legacy",
  },
};

function getAllThemes(): string[] {
  const t = new Set<string>();
  for (const h of getAllHadith()) for (const tag of h.themes) t.add(tag);
  return Array.from(t).sort();
}

export async function generateStaticParams() {
  const out: { locale: string; theme: string }[] = [];
  for (const locale of locales)
    for (const theme of getAllThemes()) out.push({ locale, theme });
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; theme: string }>;
}) {
  const { locale, theme } = await params;
  if (!isLocale(locale)) return {};
  const label = THEME_LABEL[locale][theme] ?? theme;
  const title =
    locale === "id" ? `Hadith Tema: ${label}` : `Hadith — ${label}`;
  const description =
    locale === "id"
      ? `Kumpulan hadith yang relevan dengan tema "${label}" untuk parenting islami — dengan teks Arab, perawi, sumber, dan catatan penerapan untuk orang tua muslim.`
      : `Curated hadith relevant to the theme "${label}" for Islamic parenting — with Arabic, narrator, source, and applied notes for Muslim parents.`;
  return buildMetadata({
    locale,
    path: `/hadith/tema/${theme}`,
    title,
    description,
  });
}

export default async function HadithTemaPage({
  params,
}: {
  params: Promise<{ locale: string; theme: string }>;
}) {
  const { locale, theme } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const label = THEME_LABEL[l][theme];
  const all = getAllHadith().filter((h) => h.themes.includes(theme));
  if (all.length === 0) notFound();

  const allThemes = getAllThemes();

  return (
    <>
      <Header locale={l} currentPath={`/hadith/tema/${theme}`} />
      <main className="mx-auto max-w-5xl px-5 pb-28 pt-10 sm:px-7 sm:pt-14 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/hadith")} className="hover:text-ink">
            {dict.nav.hadith}
          </Link>{" "}
          / <span className="text-ink">{label ?? theme}</span>
        </nav>
        <header className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
            {l === "id" ? "Tema" : "Theme"}
          </p>
          <h1 className="tracking-display mt-2 font-serif text-[36px] font-medium leading-[1.1] text-ink sm:text-[44px]">
            {l === "id"
              ? `Hadith Tema: ${label ?? theme}`
              : `Hadith: ${label ?? theme}`}
          </h1>
          <p className="mt-3 text-[15.5px] leading-relaxed text-whisper">
            {l === "id"
              ? `${all.length} hadith dalam tema ini. Bersumber dari koleksi hadith klasik (Bukhari, Muslim, Abu Dawud, Tirmidzi), lengkap dengan perawi, tingkat keshahihan, dan catatan penerapan untuk orang tua muslim.`
              : `${all.length} hadith on this theme. Drawn from classical collections (Bukhari, Muslim, Abu Dawud, Tirmidzi), with narrator, grading, and applied notes for Muslim parents.`}
          </p>
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {all.map((h) => (
            <HadithCard key={h.slug} hadith={h} locale={l} />
          ))}
        </div>

        <section className="mt-16 border-t border-hairline pt-10">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-whisper">
            {l === "id" ? "Tema lain" : "Other themes"}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {allThemes
              .filter((t) => t !== theme)
              .map((t) => (
                <Link
                  key={t}
                  href={pathFor(l, `/hadith/tema/${t}`)}
                  className="tap rounded-full border border-hairline bg-paper px-3.5 py-1.5 text-[13px] font-semibold text-ink-soft transition hover:border-sage/40"
                >
                  {THEME_LABEL[l][t] ?? t}
                </Link>
              ))}
          </div>
        </section>
      </main>
      <Footer locale={l} currentPath={`/hadith/tema/${theme}`} />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.hadith, path: "/hadith" },
            { name: label ?? theme, path: `/hadith/tema/${theme}` },
          ]),
          itemListSchema(
            l,
            `${dict.nav.hadith} — ${label ?? theme}`,
            all.map((h) => ({
              name: h.title[l],
              url: absoluteUrl(l, `/hadith/${h.slug}`),
            })),
          ),
        )}
      />
    </>
  );
}
