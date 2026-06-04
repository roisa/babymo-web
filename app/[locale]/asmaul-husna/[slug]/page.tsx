import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
  absoluteUrl,
  isLocale,
  locales,
  pathFor,
  siteUrl,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { ShareBar } from "@/components/ShareBar";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";
import {
  getAllAsmaulHusna,
  getAsmaulHusnaBySlug,
  getAsmaulHusnaByNumber,
} from "@/lib/content/asmaul-husna";

export async function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const n of getAllAsmaulHusna()) out.push({ locale, slug: n.slug });
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const n = getAsmaulHusnaBySlug(slug);
  if (!n) return {};
  return buildMetadata({
    locale,
    path: `/asmaul-husna/${slug}`,
    title:
      locale === "id"
        ? `${n.transliteration} (${n.arabic}) — Arti & Makna | Asmaul Husna ke-${n.number}`
        : `${n.transliteration} (${n.arabic}) — Meaning | The 99 Names of Allah #${n.number}`,
    description:
      locale === "id"
        ? `${n.transliteration} artinya "${n.meaning.id}". ${n.explanation.id} Asmaul Husna ke-${n.number}, lengkap dengan tulisan Arab, cara baca, dan penjelasan untuk anak.`
        : `${n.transliteration} means "${n.meaning.en}". ${n.explanation.en} Name #${n.number} of the 99, with Arabic, transliteration, and a child-friendly explanation.`,
    type: "article",
  });
}

export default async function AsmaulHusnaDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const n = getAsmaulHusnaBySlug(slug);
  if (!n) notFound();
  const dict = getDictionary(l);

  const prev = getAsmaulHusnaByNumber(n.number - 1);
  const next = getAsmaulHusnaByNumber(n.number + 1);

  return (
    <>
      <Header locale={l} currentPath={`/asmaul-husna/${slug}`} />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-40 pt-8 sm:px-7 sm:pt-12 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/asmaul-husna")} className="hover:text-ink">
            Asmaul Husna
          </Link>{" "}
          / <span className="text-ink">{n.transliteration}</span>
        </nav>

        <header className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="rounded-full bg-brave-soft px-2.5 py-0.5 font-semibold uppercase tracking-[0.1em] text-brave-deep">
              {l === "id" ? "Asmaul Husna ke-" : "Name"} {n.number}{" "}
              {l === "id" ? "" : "of 99"}
            </span>
          </div>
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-[64px] leading-none text-sage-deep sm:text-[80px]"
          >
            {n.arabic}
          </p>
          <h1 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px]">
            {n.transliteration}
          </h1>
          <p className="mt-3 text-[18px] font-medium text-brave-deep">
            {n.meaning[l]}
          </p>
        </header>

        {/* What this name means for us */}
        <section className="rounded-[24px] border border-hairline bg-paper p-6 sm:p-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-whisper">
            {l === "id" ? "Apa artinya untuk kita" : "What this name means for us"}
          </h2>
          <p className="mt-4 font-serif text-[18px] leading-[1.7] text-ink">
            {n.explanation[l]}
          </p>
        </section>

        {/* Share with your child */}
        <section className="mt-6 rounded-[24px] border border-brave/20 bg-brave-soft/40 p-6 sm:p-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            {l === "id" ? "Kenalkan ke si kecil" : "Share with your little one"}
          </h2>
          <p className="mt-4 font-serif text-[18px] leading-[1.7] text-ink">
            {n.forKids[l]}
          </p>
        </section>

        {/* Quranic anchor */}
        <section className="mt-10">
          <blockquote className="rounded-[20px] border border-hairline bg-paper-2 px-6 py-5">
            <p
              dir="rtl"
              lang="ar"
              className="font-arabic text-[22px] leading-[1.9] text-sage-deep"
            >
              وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-whisper">
              {l === "id"
                ? "“Hanya milik Allah nama-nama yang indah (Asmaul Husna), maka berdoalah kepada-Nya dengan menyebut nama-nama itu.” (QS. Al-A'raf: 180)"
                : "“To Allah belong the most beautiful names, so call upon Him by them.” (Qur'an 7:180)"}
            </p>
          </blockquote>
        </section>

        {/* Keep learning */}
        <section className="mt-10">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-whisper">
            {l === "id" ? "Lanjutkan belajar" : "Keep learning"}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              href={pathFor(l, "/asmaul-husna")}
              className="lift tap group rounded-[18px] border border-hairline bg-paper p-5 hover:border-brave/40"
            >
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-brave-deep">
                {l === "id" ? "Daftar lengkap" : "Full list"}
              </span>
              <p className="font-display mt-1 text-[17px] font-medium text-ink group-hover:text-brave-deep">
                {l === "id" ? "99 Asmaul Husna" : "The 99 Names of Allah"}
              </p>
            </Link>
            <Link
              href={pathFor(l, "/doa")}
              className="lift tap group rounded-[18px] border border-hairline bg-paper p-5 hover:border-brave/40"
            >
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-sage-deep">
                {l === "id" ? "Doa" : "Du'a"}
              </span>
              <p className="font-display mt-1 text-[17px] font-medium text-ink group-hover:text-brave-deep">
                {l === "id"
                  ? "Berdoa dengan nama-nama Allah"
                  : "Pray with the names of Allah"}
              </p>
            </Link>
          </div>
        </section>

        {/* Prev / next */}
        <nav
          aria-label="Asmaul Husna navigation"
          className="mt-14 grid gap-3 border-t border-hairline pt-8 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={pathFor(l, `/asmaul-husna/${prev.slug}`)}
              className="lift tap group rounded-[18px] border border-hairline bg-paper p-5"
            >
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-whisper">
                ← {prev.number}. {l === "id" ? "Sebelumnya" : "Previous"}
              </span>
              <p className="font-display mt-1 text-[17px] font-medium text-ink group-hover:text-brave-deep">
                {prev.transliteration}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={pathFor(l, `/asmaul-husna/${next.slug}`)}
              className="lift tap group rounded-[18px] border border-hairline bg-paper p-5 sm:text-right"
            >
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-whisper">
                {next.number}. {l === "id" ? "Selanjutnya" : "Next"} →
              </span>
              <p className="font-display mt-1 text-[17px] font-medium text-ink group-hover:text-brave-deep">
                {next.transliteration}
              </p>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>

      <Footer locale={l} currentPath={`/asmaul-husna/${slug}`} />
      <MobileNav locale={l} />
      <ShareBar
        locale={l}
        title={`${n.transliteration} — ${n.meaning[l]}`}
        text={n.explanation[l]}
        url={absoluteUrl(l, `/asmaul-husna/${slug}`)}
      />

      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: "Asmaul Husna", path: "/asmaul-husna" },
            { name: n.transliteration, path: `/asmaul-husna/${slug}` },
          ]),
          {
            "@type": "Article",
            headline: `${n.transliteration} — ${n.meaning[l]}`,
            description: n.explanation[l],
            inLanguage: l === "id" ? "id-ID" : "en",
            author: { "@id": `${siteUrl}/#org` },
            publisher: { "@id": `${siteUrl}/#org` },
            mainEntityOfPage: absoluteUrl(l, `/asmaul-husna/${slug}`),
          },
        )}
      />
    </>
  );
}
