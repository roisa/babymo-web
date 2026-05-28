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
import { getAllSurah } from "@/lib/content/surah";

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
    path: "/surat",
    title:
      locale === "id"
        ? "Surat Pendek Al-Qur'an untuk Anak — Arab, Latin, Arti, dan Tafsir"
        : "Short Surahs of the Qur'an for Children — Arabic, Transliteration, Translation, Tafsir",
    description:
      locale === "id"
        ? "Kumpulan surat-surat pendek Juz 30 untuk anak muslim: Al-Fatihah, An-Nas, Al-Falaq, Al-Ikhlas, Al-Kautsar, Al-Asr, dan 9 surat lainnya — lengkap dengan teks Arab, transliterasi Latin, terjemahan, dan tafsir yang ditulis khusus untuk anak."
        : "A collection of short surahs from Juz 30 for Muslim children: Al-Fatihah, An-Nas, Al-Falaq, Al-Ikhlas, Al-Kawthar, Al-Asr, and 9 more — with Arabic text, transliteration, translation, and child-friendly tafsir.",
  });
}

export default async function SurahIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const surahs = getAllSurah();

  return (
    <>
      <Header locale={l} currentPath="/surat" />
      <main id="main" className="mx-auto max-w-5xl px-5 pb-28 pt-12 sm:px-7 sm:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <span className="text-ink">
            {l === "id" ? "Surat Pendek" : "Short Surahs"}
          </span>
        </nav>

        <header className="mb-12 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brave-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            {l === "id" ? "Juz Amma untuk Anak" : "Juz 'Amma for Children"}
          </span>
          <h1 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px]">
            {l === "id"
              ? "Surat Pendek Al-Qur'an"
              : "Short Surahs of the Qur'an"}
          </h1>
          <p className="mt-4 text-[16.5px] leading-[1.65] text-whisper">
            {l === "id"
              ? "Kumpulan 15 surat pendek dari Juz 30 — surat yang paling sering kita baca dalam sholat dan ajarkan ke anak pertama kali. Setiap surat lengkap dengan teks Arab, transliterasi, terjemahan, dan tafsir yang ditulis khusus untuk anak."
              : "15 short surahs from Juz 30 — the ones we recite most in prayer and teach children first. Each surah includes Arabic text, transliteration, translation, and child-friendly tafsir."}
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          {surahs.map((s) => (
            <Link
              key={s.slug}
              href={pathFor(l, `/surat/${s.slug}`)}
              className="lift tap group flex flex-col gap-3 rounded-[22px] border border-hairline bg-paper p-6 hover:border-brave/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brave-deep">
                    {l === "id" ? "Surat ke-" : "Surah"} {s.number}
                  </span>
                  <h2 className="font-display mt-1 text-[22px] font-medium leading-tight text-ink group-hover:text-brave-deep">
                    {s.name[l]}
                  </h2>
                  <p className="mt-1 text-[13px] text-whisper">
                    {s.meaning[l]} · {s.ayahCount}{" "}
                    {l === "id" ? "ayat" : "verses"} ·{" "}
                    {s.revelation === "makki"
                      ? l === "id"
                        ? "Makkiyah"
                        : "Meccan"
                      : l === "id"
                        ? "Madaniyah"
                        : "Medinan"}
                  </p>
                </div>
                <span
                  dir="rtl"
                  lang="ar"
                  className="font-arabic shrink-0 text-[26px] leading-none text-sage-deep"
                >
                  {s.arabicName}
                </span>
              </div>
              <p className="line-clamp-3 text-[14px] leading-relaxed text-whisper">
                {s.introForKids[l]}
              </p>
              <p className="mt-auto text-[12px] font-semibold text-brave-deep">
                {l === "id" ? "Baca selengkapnya" : "Read in full"} →
              </p>
            </Link>
          ))}
        </div>
      </main>

      <Footer locale={l} currentPath="/surat" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: l === "id" ? "Surat Pendek" : "Short Surahs", path: "/surat" },
          ]),
          itemListSchema(
            l,
            l === "id" ? "Surat Pendek Al-Qur'an" : "Short Surahs",
            surahs.map((s) => ({
              name: s.name[l],
              url: absoluteUrl(l, `/surat/${s.slug}`),
            })),
          ),
        )}
      />
    </>
  );
}
