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
import { buildMetadata } from "@/lib/seo/metadata";
import { GameLayout } from "@/components/games/GameLayout";
import { SpotOddBoard } from "@/components/games/SpotOddBoard";
import { t, posePath } from "@/lib/games/poses";
import {
  SPOT_ODD_PUZZLES,
  allSpotOddSlugs,
  getSpotOddPuzzle,
} from "@/lib/games/spot-odd";

const PATH = "/kuis/cari-yang-beda";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    allSpotOddSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const puzzle = getSpotOddPuzzle(slug);
  if (!puzzle) return {};
  return buildMetadata({
    locale,
    path: `${PATH}/${slug}`,
    title: t(puzzle.title, locale),
    description: t(puzzle.blurb, locale),
    image: `${siteUrl}${posePath(puzzle.baseFile)}`,
  });
}

export default async function SpotOddPlay({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const puzzle = getSpotOddPuzzle(slug);
  if (!puzzle) notFound();

  const path = `${PATH}/${slug}`;
  const gameSchema = {
    "@type": "Game",
    name: t(puzzle.title, l),
    description: t(puzzle.blurb, l),
    url: absoluteUrl(l, path),
    image: `${siteUrl}${posePath(puzzle.baseFile)}`,
    inLanguage: l === "id" ? "id-ID" : "en",
    genre: l === "id" ? "Permainan edukatif anak" : "Educational kids game",
    isAccessibleForFree: true,
  };

  const related = SPOT_ODD_PUZZLES.filter((p) => p.slug !== slug).slice(0, 6);

  return (
    <GameLayout
      locale={l}
      currentPath="/kuis"
      trail={[
        { name: l === "id" ? "Kuis" : "Quizzes", path: "/kuis" },
        { name: l === "id" ? "Temukan yang Beda" : "Spot the Odd One", path: PATH },
        { name: t(puzzle.title, l), path },
      ]}
      extraSchema={[gameSchema]}
    >
      <header className="mb-6 text-center">
        <h1 className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          {t(puzzle.title, l)} {puzzle.emoji}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-whisper">
          {t(puzzle.intro, l)}
        </p>
      </header>

      <SpotOddBoard locale={l} puzzle={puzzle} shareUrl={absoluteUrl(l, path)} />

      <section className="mx-auto mt-10 max-w-xl rounded-2xl border border-hairline bg-clay-soft/50 p-5">
        <p className="text-sm leading-relaxed text-ink">
          <span className="font-semibold">{l === "id" ? "Tahukah kamu? " : "Did you know? "}</span>
          {t(puzzle.funFact, l)}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 font-serif text-xl font-semibold text-ink">
          {l === "id" ? "Tantangan lainnya" : "More challenges"}
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={pathFor(l, `${PATH}/${p.slug}`)}
              className="rounded-2xl border border-hairline bg-paper p-3 text-center text-sm font-semibold text-ink shadow-sm transition hover:border-sage/40 hover:shadow-md"
            >
              <span className="mr-1">{p.emoji}</span>
              {t(p.title, l)}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-center">
          <Link
            href={pathFor(l, PATH)}
            className="text-sm font-semibold text-sage-deep hover:underline"
          >
            ← {l === "id" ? "Lihat semua tantangan" : "See all challenges"}
          </Link>
        </p>
      </section>
    </GameLayout>
  );
}
