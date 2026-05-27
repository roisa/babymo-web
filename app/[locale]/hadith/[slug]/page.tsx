import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, absoluteUrl, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { ShareBar } from "@/components/ShareBar";
import { JsonLd } from "@/components/JsonLd";
import { CopyButton } from "@/components/CopyButton";
import { Byline } from "@/components/Byline";
import { breadcrumbSchema, hadithSchema, graph } from "@/lib/seo/schemas";
import { getAllHadith, getHadithBySlug } from "@/lib/content/hadith";
import { getDoaBySlug } from "@/lib/content/doa";
import { DoaCard } from "@/components/DoaCard";

export async function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales)
    for (const h of getAllHadith()) out.push({ locale, slug: h.slug });
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const h = getHadithBySlug(slug);
  if (!h) return {};
  return buildMetadata({
    locale,
    path: `/hadith/${slug}`,
    title: h.title[locale],
    description: h.parentingNote[locale],
    type: "article",
  });
}

const GRADE_LABEL: Record<string, string> = {
  sahih: "Sahih",
  hasan: "Hasan",
  dhaif: "Da'if",
};

export default async function HadithDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const h = getHadithBySlug(slug);
  if (!h) notFound();
  const dict = getDictionary(l);
  const relatedDoa = h.relatedDoa
    .map((s) => getDoaBySlug(s))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  const copyText = `${h.arabic}\n\n${h.translation[l]}\n\n— ${h.source.reference}`;

  return (
    <>
      <Header locale={l} currentPath={`/hadith/${slug}`} />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-28 pt-8 sm:px-7 sm:pt-12 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/hadith")} className="hover:text-ink">
            {dict.nav.hadith}
          </Link>{" "}
          / <span className="text-ink">{h.title[l]}</span>
        </nav>

        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="rounded-full bg-clay-soft px-2.5 py-0.5 font-semibold uppercase tracking-[0.1em] text-clay">
              {GRADE_LABEL[h.source.grade] ?? h.source.grade}
            </span>
            <span className="text-whisper">{h.source.reference}</span>
          </div>
          <h1 className="tracking-display font-serif text-[36px] font-medium leading-[1.08] text-ink sm:text-[44px]">
            {h.title[l]}
          </h1>
          <div className="mt-4">
            <Byline locale={l} reviewerSlug={h.reviewedBy} compact />
          </div>
        </header>

        <section className="overflow-hidden rounded-[28px] border border-hairline bg-paper">
          <div className="border-b border-hairline bg-paper-2 px-6 py-8 sm:px-10 sm:py-12">
            <p
              dir="rtl"
              lang="ar"
              className="font-arabic text-[26px] leading-[2] text-ink sm:text-[32px]"
            >
              {h.arabic}
            </p>
          </div>
          <div className="px-6 py-7 sm:px-10">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
              {dict.doa.translation}
            </h2>
            <p className="mt-2 text-[16.5px] leading-[1.7] text-ink">
              {h.translation[l]}
            </p>
          </div>
          <div className="flex items-center justify-between border-t border-hairline px-6 py-4 sm:px-10">
            <span className="text-[12.5px] text-whisper">
              {dict.hadith.narrator}: {h.narrator}
            </span>
            <CopyButton
              text={copyText}
              label={dict.doa.copy}
              copiedLabel={dict.doa.copied}
            />
          </div>
        </section>

        <section className="mt-8 rounded-[22px] border border-hairline bg-paper p-6 sm:p-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-sage-deep">
            {dict.hadith.parentingNote}
          </h2>
          <p className="mt-2 text-[16px] leading-[1.7] text-ink">
            {h.parentingNote[l]}
          </p>
        </section>

        <dl className="mt-8 grid gap-5 rounded-[22px] border border-hairline bg-paper p-6 text-[14px] sm:grid-cols-3">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
              {dict.hadith.collection}
            </dt>
            <dd className="mt-1 text-ink">{h.source.collection}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
              {dict.hadith.narrator}
            </dt>
            <dd className="mt-1 text-ink">{h.narrator}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
              {dict.hadith.themes}
            </dt>
            <dd className="mt-1 flex flex-wrap gap-1.5">
              {h.themes.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-paper-2 px-2 py-0.5 text-[12px] text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        {relatedDoa.length > 0 && (
          <section className="mt-14">
            <h2 className="tracking-display font-serif text-2xl font-medium text-ink">
              {dict.hadith.relatedDoa}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {relatedDoa.map((r) => (
                <DoaCard key={r.slug} doa={r} locale={l} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer locale={l} currentPath={`/hadith/${slug}`} />
      <MobileNav locale={l} />
      <ShareBar
        locale={l}
        title={h.title[l]}
        text={h.translation[l]}
        url={absoluteUrl(l, `/hadith/${slug}`)}
      />

      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.hadith, path: "/hadith" },
            { name: h.title[l], path: `/hadith/${slug}` },
          ]),
          hadithSchema(l, h),
        )}
      />
    </>
  );
}
