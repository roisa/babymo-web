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
      <main id="main" className="mx-auto max-w-6xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-16">
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
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mist bg-paper transition hover:-translate-y-0.5 hover:border-sage/40"
              >
                {/* The OG art is a self-contained promo card (title, tagline,
                    brand baked in), so we don't repeat that text below — just
                    the image plus a Play action. */}
                <div className="relative aspect-[1200/630] w-full overflow-hidden bg-clay-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.image}
                    alt={g.title[l]}
                    loading="lazy"
                    width={1200}
                    height={630}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center justify-between px-5 py-3.5">
                  <span className="inline-flex items-center gap-2 text-[15px] font-medium text-ink">
                    <span aria-hidden className="text-lg">{g.emoji}</span>
                    {g.title[l]}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-sage-deep group-hover:translate-x-0.5">
                    {l === "id" ? "Main" : "Play"} →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* More ways to play — printable activities + upcoming quizzes */}
        <h2 className="mt-14 font-serif text-2xl font-medium tracking-tight text-ink">
          {l === "id" ? "Lainnya untuk dimainkan" : "More to play"}
        </h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2">
          <li>
            <Link
              href={pathFor(l, "/apps/kids-activity")}
              className="group flex h-full items-center gap-4 rounded-2xl border border-mist bg-paper p-6 transition hover:-translate-y-0.5 hover:border-sage/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-clay-soft text-2xl">
                🎨
              </span>
              <span className="min-w-0">
                <span className="block font-serif text-lg font-semibold text-ink group-hover:text-sage-deep">
                  {l === "id" ? "Aktivitas Anak" : "Kids Activity"}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-whisper">
                  {l === "id"
                    ? "Lembar kegiatan siap cetak — labirin, mewarnai, menjiplak."
                    : "Printable worksheets — mazes, coloring, and tracing."}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-sage-deep">
                  {l === "id" ? "Buka" : "Open"} →
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={pathFor(l, "/unduh")}
              className="group flex h-full items-center gap-4 rounded-2xl border border-mist bg-paper p-6 transition hover:-translate-y-0.5 hover:border-sage/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-clay-soft text-2xl">
                🖼️
              </span>
              <span className="min-w-0">
                <span className="block font-serif text-lg font-semibold text-ink group-hover:text-sage-deep">
                  {l === "id" ? "Wallpaper Doa" : "Du'a Wallpapers"}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-whisper">
                  {l === "id"
                    ? "Wallpaper doa harian yang cantik untuk layar ponsel anak."
                    : "Pretty daily-du'a wallpapers for your child's phone screen."}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-sage-deep">
                  {l === "id" ? "Unduh" : "Download"} →
                </span>
              </span>
            </Link>
          </li>
          <li>
            <div className="flex h-full items-center gap-4 rounded-2xl border border-dashed border-mist bg-paper/60 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-clay-soft text-2xl">
                🧠
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-2 font-serif text-lg font-semibold text-ink">
                  {l === "id" ? "Kuis" : "Quizzes"}
                  <span className="rounded-full bg-clay/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-clay">
                    {l === "id" ? "Segera" : "Soon"}
                  </span>
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-whisper">
                  {l === "id"
                    ? "Uji pemahaman anak sambil bermain. Segera hadir."
                    : "Test what your child has learned, playfully. Coming soon."}
                </span>
              </span>
            </div>
          </li>
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
