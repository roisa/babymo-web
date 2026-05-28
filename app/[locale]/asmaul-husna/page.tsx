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
import { getAllAsmaulHusna } from "@/lib/content/asmaul-husna";

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
    path: "/asmaul-husna",
    title:
      locale === "id"
        ? "Asmaul Husna — 99 Nama Allah, Arab, Latin, dan Artinya untuk Anak"
        : "Asmaul Husna — The 99 Names of Allah, Arabic, Transliteration & Meaning",
    description:
      locale === "id"
        ? "Daftar lengkap 99 Asmaul Husna (nama-nama indah Allah) — tulisan Arab, cara baca (latin), dan artinya. Disusun rapi dan mudah dibaca untuk dihafal anak muslim."
        : "The complete 99 Asmaul Husna (beautiful names of Allah) — Arabic script, transliteration, and meaning. Cleanly laid out for Muslim children to memorize.",
  });
}

export default async function AsmaulHusnaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const names = getAllAsmaulHusna();

  return (
    <>
      <Header locale={l} currentPath="/asmaul-husna" />
      <main id="main" className="mx-auto max-w-5xl px-5 pb-28 pt-12 sm:px-7 sm:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">Asmaul Husna</span>
        </nav>

        <header className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brave-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            {l === "id" ? "99 Nama Allah" : "99 Names of Allah"}
          </span>
          <h1 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px]">
            Asmaul Husna
          </h1>
          <p className="mt-4 text-[16.5px] leading-[1.65] text-whisper">
            {l === "id"
              ? "99 nama-nama indah Allah. Setiap nama menggambarkan satu sifat Allah yang Maha Sempurna. Bacakan beberapa setiap hari bersama si kecil — sedikit demi sedikit, sampai hafal."
              : "The 99 beautiful names of Allah. Each name describes one of Allah's perfect attributes. Read a few each day with your little one — little by little, until memorized."}
          </p>
        </header>

        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {names.map((n) => (
            <li
              key={n.number}
              className="flex items-center gap-4 rounded-[18px] border border-hairline bg-paper p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brave-soft text-[13px] font-semibold text-brave-deep">
                {n.number}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[13px] font-semibold text-ink">
                    {n.transliteration}
                  </span>
                  <span
                    dir="rtl"
                    lang="ar"
                    className="font-arabic text-[22px] leading-none text-sage-deep"
                  >
                    {n.arabic}
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-whisper">{n.meaning[l]}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 rounded-[18px] border border-hairline bg-paper-2 px-5 py-4 text-[12.5px] leading-relaxed text-whisper">
          {l === "id"
            ? "Rasulullah ﷺ bersabda: \"Sesungguhnya Allah memiliki sembilan puluh sembilan nama. Barangsiapa menghafalnya, akan masuk surga.\" (HR. Bukhari & Muslim)"
            : "The Prophet ﷺ said: \"Indeed, Allah has ninety-nine names. Whoever memorizes them will enter Paradise.\" (Bukhari & Muslim)"}
        </p>
      </main>

      <Footer locale={l} currentPath="/asmaul-husna" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: "Asmaul Husna", path: "/asmaul-husna" },
          ]),
        )}
      />
    </>
  );
}
