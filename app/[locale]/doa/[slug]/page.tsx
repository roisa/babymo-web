import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
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

  return (
    <>
      <Header locale={l} currentPath={`/doa/${slug}`} />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/doa")} className="hover:text-ink">
            {dict.nav.doa}
          </Link>{" "}
          / <span className="text-ink">{doa.title[l]}</span>
        </nav>

        <header className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-sage-soft px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-sage-deep">
              {doa.source.grade === "quran" ? "Qur'an" : doa.source.grade}
            </span>
            <span className="text-xs text-whisper">{doa.source.reference}</span>
          </div>
          <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
            {doa.title[l]}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-whisper">
            {doa.context[l]}
          </p>
        </header>

        <section className="rounded-3xl border border-mist bg-paper p-6 sm:p-10">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-3xl leading-[2.1] text-ink sm:text-4xl"
          >
            {doa.arabic}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-whisper">
                {dict.doa.transliteration}
              </h2>
              <p className="mt-1.5 text-base italic text-ink">
                {doa.transliteration}
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-whisper">
                {dict.doa.translation}
              </h2>
              <p className="mt-1.5 text-base text-ink">{doa.translation[l]}</p>
            </div>
          </div>

          <dl className="mt-8 grid gap-4 border-t border-mist pt-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-whisper">
                {dict.doa.source}
              </dt>
              <dd className="mt-1 text-ink">{doa.source.reference}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-whisper">
                {dict.doa.ages}
              </dt>
              <dd className="mt-1 text-ink">
                {doa.ages[0]}–{doa.ages[doa.ages.length - 1]}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-whisper">
                {dict.doa.situations}
              </dt>
              <dd className="mt-1 flex flex-wrap gap-1 text-ink">
                {doa.situations.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-mist/60 px-2 py-0.5 text-xs"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </section>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="font-serif text-xl font-semibold text-ink">
              {dict.doa.related}
            </h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
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
          doaSchema(l, doa)
        )}
      />
    </>
  );
}
