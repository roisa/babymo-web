import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, absoluteUrl, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo/metadata";
import { itemListSchema } from "@/lib/seo/schemas";
import { GameLayout } from "@/components/games/GameLayout";
import { PoseImg } from "@/components/games/PoseImg";
import { t } from "@/lib/games/poses";
import { SPOT_ODD_PUZZLES } from "@/lib/games/spot-odd";

const PATH = "/kuis/cari-yang-beda";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: PATH,
    title: locale === "id" ? "Temukan Baby Mo yang Beda" : "Spot the Odd Baby Mo",
    description:
      locale === "id"
        ? "Asah ketelitianmu! Temukan satu Baby Mo yang berbeda di antara yang lain. Belasan tantangan dari mudah hingga sulit, gratis dan seru untuk anak & keluarga."
        : "Sharpen your eyes! Find the one Baby Mo that's different. A dozen challenges from easy to hard — free and fun for kids and families.",
  });
}

export default async function SpotOddHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  const listSchema = itemListSchema(
    l,
    l === "id" ? "Temukan Baby Mo yang Beda" : "Spot the Odd Baby Mo",
    SPOT_ODD_PUZZLES.map((p) => ({
      name: t(p.title, l),
      url: absoluteUrl(l, `${PATH}/${p.slug}`),
    })),
  );

  return (
    <GameLayout
      locale={l}
      currentPath="/kuis"
      trail={[
        { name: l === "id" ? "Kuis" : "Quizzes", path: "/kuis" },
        { name: l === "id" ? "Temukan yang Beda" : "Spot the Odd One", path: PATH },
      ]}
      extraSchema={[listSchema]}
    >
      <header className="mb-8 max-w-2xl">
        <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {l === "id" ? "Temukan Baby Mo yang Beda 🔍" : "Spot the Odd Baby Mo 🔍"}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-whisper">
          {l === "id"
            ? "Di antara puluhan Baby Mo yang sama, sembunyi satu yang berbeda. Temukan secepat mungkin! Pilih tantangan favoritmu di bawah ini."
            : "Among many identical Baby Mo, one is different. Find it as fast as you can! Pick your favourite challenge below."}
        </p>
      </header>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SPOT_ODD_PUZZLES.map((p) => (
          <li key={p.slug}>
            <Link
              href={pathFor(l, `${PATH}/${p.slug}`)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-paper transition hover:-translate-y-0.5 hover:border-sage/40"
            >
              <div className="relative flex aspect-[1200/630] items-center justify-center overflow-hidden bg-gradient-to-br from-sage-soft to-clay-soft">
                <div className="h-28 w-28 transition duration-300 group-hover:scale-110">
                  <PoseImg file={p.baseFile} alt={t(p.title, l)} className="h-full w-full object-contain" />
                </div>
                <span className="absolute right-3 top-3 text-2xl">{p.emoji}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-serif text-lg font-semibold text-ink group-hover:text-sage-deep">
                  {t(p.title, l)}
                </h2>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-whisper">
                  {t(p.blurb, l)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-sage-deep">
                  {l === "id" ? "Main" : "Play"} →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </GameLayout>
  );
}
