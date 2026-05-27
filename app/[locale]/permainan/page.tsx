import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph, videoGameSchema } from "@/lib/seo/schemas";
import { getAllGames } from "@/lib/content/games";

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
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/permainan",
    title: dict.pages.games.title,
    description: dict.pages.games.description,
  });
}

export default async function GamesIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const games = getAllGames();

  return (
    <>
      <Header locale={l} currentPath="/permainan" />
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{dict.nav.games}</span>
        </nav>
        <header className="max-w-2xl">
          <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {dict.pages.games.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-whisper">
            {dict.pages.games.description}
          </p>
        </header>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g) => (
            <li key={g.slug}>
              <a
                href={g.externalUrl}
                target="_blank"
                rel="noopener"
                className="group flex h-full flex-col rounded-2xl border border-mist bg-paper p-6 transition hover:-translate-y-0.5 hover:border-sage/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-clay-soft text-2xl">
                  {g.emoji}
                </div>
                <h2 className="font-serif text-lg font-semibold text-ink group-hover:text-sage-deep">
                  {g.title[l]}
                </h2>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-whisper">
                  {g.description[l]}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-sage-deep">
                  Play →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer locale={l} currentPath="/permainan" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.games, path: "/permainan" },
          ]),
          ...games.map((g) => videoGameSchema(l, g))
        )}
      />
    </>
  );
}
