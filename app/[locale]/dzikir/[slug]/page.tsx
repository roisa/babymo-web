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
import { getAllDzikir, getDzikirBySlug } from "@/lib/content/dzikir";
import { getSurahBySlug } from "@/lib/content/surah";
import { getDoaBySlug } from "@/lib/content/doa";

export async function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const d of getAllDzikir()) out.push({ locale, slug: d.slug });
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
  const d = getDzikirBySlug(slug);
  if (!d) return {};
  return buildMetadata({
    locale,
    path: `/dzikir/${slug}`,
    title:
      locale === "id"
        ? `${d.title.id} — Dzikir Pagi & Petang, Arab Latin & Artinya`
        : `${d.title.en} — Morning & Evening Dhikr, Arabic & Meaning`,
    description: locale === "id" ? d.benefit.id : d.benefit.en,
    type: "article",
  });
}

export default async function DzikirDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const d = getDzikirBySlug(slug);
  if (!d) notFound();
  const dict = getDictionary(l);

  const all = getAllDzikir();
  const idx = all.findIndex((x) => x.slug === d.slug);
  const prev = idx > 0 ? all[idx - 1] : undefined;
  const next = idx < all.length - 1 ? all[idx + 1] : undefined;

  const surahs = (d.crossSurah ?? [])
    .map((s) => getSurahBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const doa = d.crossDoa ? getDoaBySlug(d.crossDoa) : undefined;

  const timeLabel =
    d.time === "pagi"
      ? l === "id" ? "Pagi" : "Morning"
      : d.time === "petang"
        ? l === "id" ? "Petang" : "Evening"
        : l === "id" ? "Pagi & Petang" : "Morning & Evening";

  return (
    <>
      <Header locale={l} currentPath={`/dzikir/${slug}`} />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-40 pt-8 sm:px-7 sm:pt-12 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/dzikir")} className="hover:text-ink">
            {l === "id" ? "Dzikir Pagi & Petang" : "Morning & Evening Dhikr"}
          </Link>{" "}
          / <span className="text-ink">{d.title[l]}</span>
        </nav>

        <header className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="rounded-full bg-sage-soft px-2.5 py-0.5 font-semibold uppercase tracking-[0.1em] text-sage-deep">
              {timeLabel}
            </span>
            {d.count && (
              <span className="rounded-full bg-clay-soft px-2.5 py-0.5 font-semibold text-clay">
                {l === "id" ? "Dibaca" : "Read"} {d.count}
              </span>
            )}
          </div>
          <h1 className="font-display text-[34px] font-medium leading-[1.1] text-ink sm:text-[44px]">
            {d.title[l]}
          </h1>
          {d.source && (
            <p className="mt-3 text-[13px] text-whisper">{d.source}</p>
          )}
        </header>

        {d.parts.length > 0 && (
          <div className="space-y-5">
            {d.parts.map((part, i) => (
              <article
                key={i}
                className="rounded-[24px] border border-hairline bg-paper p-6 sm:p-8"
              >
                {(part.label || part.repeat) && (
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    {part.label && (
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-sage-deep">
                        {part.label[l]}
                      </span>
                    )}
                    {part.repeat && (
                      <span className="rounded-full bg-clay-soft px-2.5 py-0.5 text-[11px] font-semibold text-clay">
                        {part.repeat}
                      </span>
                    )}
                  </div>
                )}
                <p
                  dir="rtl"
                  lang="ar"
                  className="font-arabic text-[28px] leading-[2.05] text-ink sm:text-[32px]"
                >
                  {part.arabic}
                </p>
                <p className="mt-4 text-[15px] font-medium italic leading-relaxed text-sage-deep">
                  {part.transliteration}
                </p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-whisper">
                  {part.translation[l]}
                </p>
              </article>
            ))}
          </div>
        )}

        {/* Cross-links (3 Quls → surahs; sayyidul istighfar → doa) */}
        {(surahs.length > 0 || doa) && (
          <div className="grid gap-3 sm:grid-cols-2">
            {surahs.map((s) => (
              <Link
                key={s.slug}
                href={pathFor(l, `/surat/${s.slug}`)}
                className="lift tap group flex items-center justify-between gap-3 rounded-[18px] border border-brave/20 bg-brave-soft/40 p-5 hover:border-brave/40"
              >
                <div>
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-brave-deep">
                    {l === "id" ? "Surat" : "Surah"}
                  </span>
                  <p className="font-display mt-1 text-[17px] font-medium text-ink group-hover:text-brave-deep">
                    {s.name[l]}
                  </p>
                </div>
                <span dir="rtl" lang="ar" className="font-arabic text-[24px] text-sage-deep">
                  {s.arabicName}
                </span>
              </Link>
            ))}
            {doa && (
              <Link
                href={pathFor(l, `/doa/${doa.slug}`)}
                className="lift tap group flex items-center justify-between gap-3 rounded-[18px] border border-sage/20 bg-sage-soft/40 p-5 hover:border-sage/40"
              >
                <div>
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-sage-deep">
                    {l === "id" ? "Doa" : "Du'a"}
                  </span>
                  <p className="font-display mt-1 text-[17px] font-medium text-ink group-hover:text-sage-deep">
                    {doa.title[l]}
                  </p>
                </div>
                <span aria-hidden className="text-sage-deep">→</span>
              </Link>
            )}
          </div>
        )}

        {/* Benefit / why */}
        <section className="mt-8 rounded-[24px] border border-sage/20 bg-sage-soft/40 p-6 sm:p-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sage-deep">
            {l === "id" ? "Keutamaan & untuk si kecil" : "Virtue & for your little one"}
          </h2>
          <p className="mt-3 font-serif text-[17px] leading-[1.7] text-ink">
            {d.benefit[l]}
          </p>
        </section>

        <nav
          aria-label="Dhikr navigation"
          className="mt-14 grid gap-3 border-t border-hairline pt-8 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={pathFor(l, `/dzikir/${prev.slug}`)}
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
              href={pathFor(l, `/dzikir/${next.slug}`)}
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
            ? "Teks mengikuti riwayat yang masyhur. Sedang dalam tinjauan guru."
            : "Texts follow well-known narrations. Under teacher review."}
        </p>
      </main>

      <Footer locale={l} currentPath={`/dzikir/${slug}`} />
      <MobileNav locale={l} />
      <ShareBar
        locale={l}
        title={d.title[l]}
        text={d.benefit[l]}
        url={absoluteUrl(l, `/dzikir/${slug}`)}
      />

      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: l === "id" ? "Dzikir Pagi & Petang" : "Morning & Evening Dhikr", path: "/dzikir" },
            { name: d.title[l], path: `/dzikir/${slug}` },
          ]),
          {
            "@type": "Article",
            headline: d.title[l],
            description: d.benefit[l],
            inLanguage: l === "id" ? "id-ID" : "en",
            datePublished: d.published,
            author: { "@id": `${siteUrl}/#org` },
            publisher: { "@id": `${siteUrl}/#org` },
            mainEntityOfPage: absoluteUrl(l, `/dzikir/${slug}`),
          },
        )}
      />
    </>
  );
}
