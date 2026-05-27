import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { CopyButton } from "@/components/CopyButton";
import { breadcrumbSchema, doaSchema, graph } from "@/lib/seo/schemas";
import { getAllDoa, getDoaBySlug, getRelatedDoa } from "@/lib/content/doa";
import { DoaCard } from "@/components/DoaCard";

export async function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const d of getAllDoa()) out.push({ locale, slug: d.slug });
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
  const doa = getDoaBySlug(slug);
  if (!doa) return {};
  return buildMetadata({
    locale,
    path: `/doa/${slug}`,
    title: doa.title[locale],
    description: doa.context[locale],
    type: "article",
  });
}

const GRADE_LABEL: Record<string, string> = {
  sahih: "Sahih",
  hasan: "Hasan",
  dhaif: "Da'if",
  quran: "Qur'an",
};

export default async function DoaDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const doa = getDoaBySlug(slug);
  if (!doa) notFound();
  const dict = getDictionary(l);
  const related = getRelatedDoa(slug);

  const copyText = `${doa.arabic}\n\n${doa.transliteration}\n\n${doa.translation[l]}\n\n— ${doa.source.reference}`;

  return (
    <>
      <Header locale={l} currentPath={`/doa/${slug}`} />
      <main className="mx-auto max-w-3xl px-5 pb-28 pt-8 sm:px-7 sm:pt-12 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/doa")} className="hover:text-ink">
            {dict.nav.doa}
          </Link>{" "}
          / <span className="text-ink">{doa.title[l]}</span>
        </nav>

        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="rounded-full bg-sage-soft px-2.5 py-0.5 font-semibold uppercase tracking-[0.1em] text-sage-deep">
              {GRADE_LABEL[doa.source.grade] ?? doa.source.grade}
            </span>
            <span className="text-whisper">{doa.source.reference}</span>
          </div>
          <h1 className="tracking-display font-serif text-[36px] font-medium leading-[1.08] text-ink sm:text-[44px]">
            {doa.title[l]}
          </h1>
          <p className="mt-3 text-[16px] leading-relaxed text-whisper">
            {doa.context[l]}
          </p>
        </header>

        {/* Arabic / transliteration / translation — iOS card stack */}
        <section className="overflow-hidden rounded-[28px] border border-hairline bg-paper">
          <div className="border-b border-hairline bg-paper-2 px-6 py-8 sm:px-10 sm:py-12">
            <p
              dir="rtl"
              lang="ar"
              className="font-arabic text-[32px] leading-[2] text-ink sm:text-[40px]"
            >
              {doa.arabic}
            </p>
          </div>
          <div className="grid gap-6 px-6 py-7 sm:grid-cols-2 sm:px-10">
            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
                {dict.doa.transliteration}
              </h2>
              <p className="mt-1.5 text-[16px] italic text-ink">
                {doa.transliteration}
              </p>
            </div>
            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
                {dict.doa.translation}
              </h2>
              <p className="mt-1.5 text-[16px] text-ink">
                {doa.translation[l]}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-hairline px-6 py-4 sm:px-10">
            <span className="text-[12.5px] text-whisper">
              {dict.doa.source}: {doa.source.reference}
            </span>
            <CopyButton
              text={copyText}
              label={dict.doa.copy}
              copiedLabel={dict.doa.copied}
            />
          </div>
        </section>

        {/* Meta strip */}
        <dl className="mt-8 grid gap-5 rounded-[22px] border border-hairline bg-paper p-6 text-[14px] sm:grid-cols-3">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
              {dict.doa.source}
            </dt>
            <dd className="mt-1 text-ink">{doa.source.reference}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
              {dict.doa.ages}
            </dt>
            <dd className="mt-1 text-ink">
              {doa.ages[0]}–{doa.ages[doa.ages.length - 1]}
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
              {dict.doa.situations}
            </dt>
            <dd className="mt-1 flex flex-wrap gap-1.5">
              {doa.situations.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-paper-2 px-2 py-0.5 text-[12px] text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="tracking-display font-serif text-2xl font-medium text-ink">
              {dict.doa.related}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <DoaCard key={r.slug} doa={r} locale={l} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer locale={l} currentPath={`/doa/${slug}`} />
      <MobileNav locale={l} />

      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.doa, path: "/doa" },
            { name: doa.title[l], path: `/doa/${slug}` },
          ]),
          doaSchema(l, doa),
        )}
      />
    </>
  );
}
