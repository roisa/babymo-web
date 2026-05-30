import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor, absoluteUrl } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { PathProgress } from "@/components/PathProgress";
import { breadcrumbSchema, graph, itemListSchema } from "@/lib/seo/schemas";
import { getAllPaths, getPathBySlug, resolvePathSteps } from "@/lib/content/paths";

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllPaths().map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const path = getPathBySlug(slug);
  if (!path) return {};
  return buildMetadata({
    locale,
    path: `/learn/path/${slug}`,
    title: `${path.title[locale]} — ${getDictionary(locale).pages.paths.title}`,
    description: path.description[locale],
  });
}

export default async function PathDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const path = getPathBySlug(slug);
  if (!path) notFound();
  const steps = resolvePathSteps(path, l);

  return (
    <>
      <Header locale={l} currentPath="/learn" />
      <main id="main" className="mx-auto max-w-2xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/learn")} className="hover:text-ink">
            {dict.nav.learn}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/learn/path")} className="hover:text-ink">
            {dict.pages.paths.title}
          </Link>{" "}
          / <span className="text-ink">{path.title[l]}</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sage-soft to-clay-soft text-3xl">
              {path.emoji}
            </span>
            <span className="rounded-full bg-brave-soft px-2.5 py-1 text-[11px] font-semibold text-brave-deep">
              {l === "id" ? "Usia" : "Ages"} {path.ageLabel}
            </span>
          </div>
          <h1 className="mt-5 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {path.title[l]}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-whisper">
            {path.description[l]}
          </p>
        </header>

        <PathProgress locale={l} pathSlug={path.slug} steps={steps} />
      </main>
      <Footer locale={l} currentPath="/learn" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.learn, path: "/learn" },
            { name: dict.pages.paths.title, path: "/learn/path" },
            { name: path.title[l], path: `/learn/path/${path.slug}` },
          ]),
          itemListSchema(
            l,
            path.title[l],
            steps.map((s) => ({ name: s.title, url: absoluteUrl(l, s.href) }))
          )
        )}
      />
    </>
  );
}
