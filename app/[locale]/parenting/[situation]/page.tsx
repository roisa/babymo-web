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
import { breadcrumbSchema, parentingSchema, graph } from "@/lib/seo/schemas";
import {
  getAllParenting,
  getParentingBySlug,
} from "@/lib/content/parenting";
import { getDoaBySlug } from "@/lib/content/doa";
import { getHadithBySlug } from "@/lib/content/hadith";
import { DoaCard } from "@/components/DoaCard";
import { HadithCard } from "@/components/HadithCard";

export async function generateStaticParams() {
  const out: { locale: string; situation: string }[] = [];
  for (const locale of locales)
    for (const p of getAllParenting())
      out.push({ locale, situation: p.slug });
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; situation: string }>;
}) {
  const { locale, situation } = await params;
  if (!isLocale(locale)) return {};
  const p = getParentingBySlug(situation);
  if (!p) return {};
  return buildMetadata({
    locale,
    path: `/parenting/${situation}`,
    title: p.title[locale],
    description: p.excerpt[locale],
    type: "article",
  });
}

export default async function ParentingDetail({
  params,
}: {
  params: Promise<{ locale: string; situation: string }>;
}) {
  const { locale, situation } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const p = getParentingBySlug(situation);
  if (!p) notFound();
  const dict = getDictionary(l);

  const doas = p.recommendedDoa
    .map((s) => getDoaBySlug(s))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));
  const haditsList = p.supportingHadith
    .map((s) => getHadithBySlug(s))
    .filter((h): h is NonNullable<typeof h> => Boolean(h));

  return (
    <>
      <Header locale={l} currentPath={`/parenting/${situation}`} />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-28 pt-8 sm:px-7 sm:pt-12 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/parenting")} className="hover:text-ink">
            {dict.nav.parenting}
          </Link>{" "}
          / <span className="text-ink">{p.title[l]}</span>
        </nav>

        <header className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-[11px]">
            <span className="rounded-full bg-sage-soft px-2.5 py-0.5 font-semibold uppercase tracking-[0.1em] text-sage-deep">
              {p.category}
            </span>
            <span className="text-whisper">
              {dict.parenting.ageRange}: {p.ageMin}–{p.ageMax} tahun
            </span>
          </div>
          <h1 className="tracking-display font-serif text-[36px] font-medium leading-[1.08] text-ink sm:text-[44px]">
            {p.title[l]}
          </h1>
          <p className="mt-3 text-[16.5px] leading-relaxed text-whisper">
            {p.excerpt[l]}
          </p>
        </header>

        <section className="rounded-[22px] border border-hairline bg-paper p-6 sm:p-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
            {dict.parenting.signs}
          </h2>
          <ul className="mt-4 space-y-3">
            {p.signs[l].map((s, i) => (
              <li key={i} className="flex gap-3 text-[15.5px] text-ink">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                {s}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-[22px] border border-hairline bg-paper p-6 sm:p-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-sage-deep">
            {dict.parenting.steps}
          </h2>
          <ol className="mt-5 space-y-4">
            {p.steps[l].map((s, i) => (
              <li
                key={i}
                className="flex gap-4 border-b border-hairline pb-4 last:border-0 last:pb-0"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage-soft text-[12px] font-semibold text-sage-deep">
                  {i + 1}
                </span>
                <p className="text-[15.5px] leading-[1.65] text-ink">{s}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-6 rounded-[22px] border border-hairline bg-clay-soft p-6 sm:p-8">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-clay">
            {dict.parenting.islamicPerspective}
          </h2>
          <p className="mt-3 font-serif text-[16.5px] leading-[1.7] text-ink">
            {p.islamicNote[l]}
          </p>
        </section>

        {doas.length > 0 && (
          <section className="mt-14">
            <h2 className="tracking-display font-serif text-2xl font-medium text-ink">
              {dict.parenting.recommendedDoa}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {doas.map((d) => (
                <DoaCard key={d.slug} doa={d} locale={l} />
              ))}
            </div>
          </section>
        )}

        {haditsList.length > 0 && (
          <section className="mt-12">
            <h2 className="tracking-display font-serif text-2xl font-medium text-ink">
              {dict.parenting.supportingHadith}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {haditsList.map((h) => (
                <HadithCard key={h.slug} hadith={h} locale={l} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer locale={l} currentPath={`/parenting/${situation}`} />
      <MobileNav locale={l} />
      <ShareBar
        locale={l}
        title={p.title[l]}
        text={p.excerpt[l]}
        url={absoluteUrl(l, `/parenting/${situation}`)}
      />

      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.parenting, path: "/parenting" },
            { name: p.title[l], path: `/parenting/${situation}` },
          ]),
          parentingSchema(l, p),
        )}
      />
    </>
  );
}
