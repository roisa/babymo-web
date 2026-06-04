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
  getAllBacaanSholat,
  getBacaanSholatBySlug,
} from "@/lib/content/bacaan-sholat";
import { getSurahBySlug } from "@/lib/content/surah";

export async function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const b of getAllBacaanSholat()) out.push({ locale, slug: b.slug });
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
  const b = getBacaanSholatBySlug(slug);
  if (!b) return {};
  const descId = b.note?.id ?? b.when.id;
  const descEn = b.note?.en ?? b.when.en;
  return buildMetadata({
    locale,
    path: `/sholat/${slug}`,
    title:
      locale === "id"
        ? `${b.title.id} — Arab, Latin, dan Artinya | Bacaan Sholat`
        : `${b.title.en} — Arabic, Transliteration & Meaning | Prayer`,
    description: locale === "id" ? descId : descEn,
    type: "article",
  });
}

export default async function SholatDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const b = getBacaanSholatBySlug(slug);
  if (!b) notFound();
  const dict = getDictionary(l);

  const all = getAllBacaanSholat();
  const idx = all.findIndex((x) => x.slug === b.slug);
  const prev = idx > 0 ? all[idx - 1] : undefined;
  const next = idx < all.length - 1 ? all[idx + 1] : undefined;
  const surah = b.crossSurah ? getSurahBySlug(b.crossSurah) : undefined;

  return (
    <>
      <Header locale={l} currentPath={`/sholat/${slug}`} />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-40 pt-8 sm:px-7 sm:pt-12 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/sholat")} className="hover:text-ink">
            {l === "id" ? "Bacaan Sholat" : "Prayer Recitations"}
          </Link>{" "}
          / <span className="text-ink">{b.title[l]}</span>
        </nav>

        <header className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="rounded-full bg-sage-soft px-2.5 py-0.5 font-semibold uppercase tracking-[0.1em] text-sage-deep">
              {l === "id" ? "Langkah" : "Step"} {b.order}/{all.length}
            </span>
          </div>
          <h1 className="font-display text-[36px] font-medium leading-[1.08] text-ink sm:text-[46px]">
            {b.title[l]}
          </h1>
          {b.subtitle && (
            <p className="mt-3 text-[16px] leading-[1.6] text-whisper">
              {b.subtitle[l]}
            </p>
          )}
        </header>

        {/* Recitation parts */}
        {b.parts.length > 0 && (
          <div className="space-y-5">
            {b.parts.map((p, i) => (
              <article
                key={i}
                className="rounded-[24px] border border-hairline bg-paper p-6 sm:p-8"
              >
                {(p.label || p.repeat) && (
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    {p.label && (
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-sage-deep">
                        {p.label[l]}
                      </span>
                    )}
                    {p.repeat && (
                      <span className="rounded-full bg-clay-soft px-2.5 py-0.5 text-[11px] font-semibold text-clay">
                        {p.repeat}
                      </span>
                    )}
                  </div>
                )}
                <p
                  dir="rtl"
                  lang="ar"
                  className="font-arabic text-[30px] leading-[2] text-ink sm:text-[34px]"
                >
                  {p.arabic}
                </p>
                <p className="mt-4 text-[15px] font-medium italic leading-relaxed text-sage-deep">
                  {p.transliteration}
                </p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-whisper">
                  {p.translation[l]}
                </p>
              </article>
            ))}
          </div>
        )}

        {/* Cross-link to surah when the step is a surah */}
        {surah && (
          <Link
            href={pathFor(l, `/surat/${surah.slug}`)}
            className="lift tap group mt-2 flex items-center justify-between gap-3 rounded-[20px] border border-brave/20 bg-brave-soft/40 p-6 hover:border-brave/40"
          >
            <div>
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-brave-deep">
                {l === "id" ? "Buka suratnya" : "Open the surah"}
              </span>
              <p className="font-display mt-1 text-[19px] font-medium text-ink group-hover:text-brave-deep">
                {surah.name[l]}{" "}
                <span className="text-whisper">— {surah.meaning[l]}</span>
              </p>
            </div>
            <span dir="rtl" lang="ar" className="font-arabic text-[28px] text-sage-deep">
              {surah.arabicName}
            </span>
          </Link>
        )}

        {/* When */}
        <section className="mt-8 rounded-[20px] border border-hairline bg-paper-2 px-6 py-5">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-whisper">
            {l === "id" ? "Kapan dibaca" : "When it's read"}
          </h2>
          <p className="mt-3 text-[15.5px] leading-relaxed text-ink-soft">
            {b.when[l]}
          </p>
        </section>

        {/* Kid note */}
        {b.note && (
          <section className="mt-6 rounded-[24px] border border-sage/20 bg-sage-soft/40 p-6 sm:p-8">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sage-deep">
              {l === "id" ? "Untuk si kecil" : "For your little one"}
            </h2>
            <p className="mt-3 font-serif text-[17px] leading-[1.7] text-ink">
              {b.note[l]}
            </p>
          </section>
        )}

        {/* Prev / next */}
        <nav
          aria-label="Prayer step navigation"
          className="mt-14 grid gap-3 border-t border-hairline pt-8 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={pathFor(l, `/sholat/${prev.slug}`)}
              className="lift tap group rounded-[18px] border border-hairline bg-paper p-5"
            >
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-whisper">
                ← {l === "id" ? "Sebelumnya" : "Previous"}
              </span>
              <p className="font-display mt-1 text-[16px] font-medium text-ink group-hover:text-sage-deep">
                {prev.title[l]}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={pathFor(l, `/sholat/${next.slug}`)}
              className="lift tap group rounded-[18px] border border-hairline bg-paper p-5 sm:text-right"
            >
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-whisper">
                {l === "id" ? "Selanjutnya" : "Next"} →
              </span>
              <p className="font-display mt-1 text-[16px] font-medium text-ink group-hover:text-sage-deep">
                {next.title[l]}
              </p>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        <p className="mt-10 text-[12.5px] leading-relaxed text-whisper">
          {l === "id"
            ? "Teks mengikuti bacaan yang umum diajarkan (mazhab Syafi'i). Sedang dalam tinjauan guru."
            : "Text follows the commonly taught wording (Shafi'i). Under teacher review."}
        </p>
      </main>

      <Footer locale={l} currentPath={`/sholat/${slug}`} />
      <MobileNav locale={l} />
      <ShareBar
        locale={l}
        title={b.title[l]}
        text={b.note?.[l] ?? b.when[l]}
        url={absoluteUrl(l, `/sholat/${slug}`)}
      />

      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: l === "id" ? "Bacaan Sholat" : "Prayer Recitations", path: "/sholat" },
            { name: b.title[l], path: `/sholat/${slug}` },
          ]),
          {
            "@type": "Article",
            headline: b.title[l],
            description: b.note?.[l] ?? b.when[l],
            inLanguage: l === "id" ? "id-ID" : "en",
            datePublished: b.published,
            author: { "@id": `${siteUrl}/#org` },
            publisher: { "@id": `${siteUrl}/#org` },
            mainEntityOfPage: absoluteUrl(l, `/sholat/${slug}`),
          },
        )}
      />
    </>
  );
}
