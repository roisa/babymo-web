import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
  absoluteUrl,
  isLocale,
  locales,
  pathFor,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { CeritaCard } from "@/components/CeritaCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph, itemListSchema } from "@/lib/seo/schemas";
import {
  getCeritaByTheme,
  getCeritaThemeBySlug,
  getCeritaThemes,
  getCeritaThemeSlugs,
} from "@/lib/content/cerita-themes";

export async function generateStaticParams() {
  const out: { locale: string; theme: string }[] = [];
  for (const locale of locales)
    for (const theme of getCeritaThemeSlugs()) out.push({ locale, theme });
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; theme: string }>;
}) {
  const { locale, theme } = await params;
  if (!isLocale(locale)) return {};
  const t = getCeritaThemeBySlug(theme);
  if (!t) return {};
  const title =
    locale === "id"
      ? `Cerita Anak: ${t.label.id}`
      : `Kids Stories: ${t.label.en}`;
  return buildMetadata({
    locale,
    path: `/cerita/tema/${theme}`,
    title,
    description: t.desc[locale],
  });
}

export default async function CeritaTemaPage({
  params,
}: {
  params: Promise<{ locale: string; theme: string }>;
}) {
  const { locale, theme } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const t = getCeritaThemeBySlug(theme);
  if (!t) notFound();
  const stories = getCeritaByTheme(theme);
  if (stories.length === 0) notFound();
  const otherThemes = getCeritaThemes().filter((x) => x.theme.slug !== theme);

  return (
    <>
      <Header locale={l} currentPath={`/cerita/tema/${theme}`} />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-28 pt-12 sm:px-7 sm:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/cerita")} className="hover:text-ink">
            {dict.nav.catatan}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/cerita/tema")} className="hover:text-ink">
            {l === "id" ? "Tema" : "Themes"}
          </Link>{" "}
          / <span className="text-ink">{t.label[l]}</span>
        </nav>

        <header className="mb-10 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            {l === "id" ? "Tema Cerita" : "Story Theme"}
          </p>
          <h1 className="font-display mt-3 text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px]">
            {l === "id" ? `Cerita ${t.label.id}` : `${t.label.en} Stories`}
          </h1>
          <p className="mt-4 text-[16.5px] leading-[1.65] text-whisper">{t.desc[l]}</p>
        </header>

        <ul className="space-y-7">
          {stories.map((n) => (
            <li key={n.slug}>
              <CeritaCard note={n} locale={l} />
            </li>
          ))}
        </ul>

        <section className="mt-16 border-t border-hairline pt-10">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-whisper">
            {l === "id" ? "Tema lain" : "Other themes"}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherThemes.map((x) => (
              <Link
                key={x.theme.slug}
                href={pathFor(l, `/cerita/tema/${x.theme.slug}`)}
                className="tap rounded-full border border-hairline bg-paper px-3.5 py-1.5 text-[13px] font-semibold text-ink-soft transition hover:border-brave/40"
              >
                {x.theme.label[l]}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer locale={l} currentPath={`/cerita/tema/${theme}`} />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.catatan, path: "/cerita" },
            { name: l === "id" ? "Tema" : "Themes", path: "/cerita/tema" },
            { name: t.label[l], path: `/cerita/tema/${theme}` },
          ]),
          itemListSchema(
            l,
            l === "id" ? `Cerita ${t.label.id}` : `${t.label.en} Stories`,
            stories.map((n) => ({
              name: n.title[l],
              url: absoluteUrl(l, `/cerita/${n.slug}`),
            })),
          ),
        )}
      />
    </>
  );
}
