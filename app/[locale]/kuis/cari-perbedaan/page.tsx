import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, absoluteUrl, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo/metadata";
import { itemListSchema } from "@/lib/seo/schemas";
import { GameLayout } from "@/components/games/GameLayout";
import { PoseImg } from "@/components/games/PoseImg";
import { t } from "@/lib/games/poses";
import { SPOT_DIFF_PUZZLES } from "@/lib/games/spot-difference";

const PATH = "/kuis/cari-perbedaan";

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
    title: locale === "id" ? "Cari Perbedaan Baby Mo" : "Spot the Difference: Baby Mo",
    description:
      locale === "id"
        ? "Bandingkan dua panel Baby Mo dan temukan semua perbedaannya! Permainan cari perbedaan gratis yang melatih fokus dan ketelitian anak."
        : "Compare two Baby Mo panels and find every difference! A free spot-the-difference game that trains kids' focus and attention.",
  });
}

export default async function SpotDiffHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  const listSchema = itemListSchema(
    l,
    l === "id" ? "Cari Perbedaan Baby Mo" : "Spot the Difference: Baby Mo",
    SPOT_DIFF_PUZZLES.map((p) => ({
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
        { name: l === "id" ? "Cari Perbedaan" : "Spot the Difference", path: PATH },
      ]}
      extraSchema={[listSchema]}
    >
      <header className="mb-8 max-w-2xl">
        <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {l === "id" ? "Cari Perbedaan Baby Mo 🧩" : "Spot the Difference: Baby Mo 🧩"}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-whisper">
          {l === "id"
            ? "Dua panel terlihat sama, tapi ada beberapa Baby Mo yang berubah. Temukan semua perbedaannya secepat mungkin! Pilih tema di bawah ini."
            : "Two panels look the same, but a few Baby Mo have changed. Find every difference as fast as you can! Pick a theme below."}
        </p>
      </header>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SPOT_DIFF_PUZZLES.map((p) => (
          <li key={p.slug}>
            <Link
              href={pathFor(l, `${PATH}/${p.slug}`)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-paper transition hover:-translate-y-0.5 hover:border-sage/40"
            >
              <div className="relative flex aspect-[1200/630] items-center justify-center gap-1 overflow-hidden bg-gradient-to-br from-sage-soft to-clay-soft">
                <div className="h-20 w-20 transition duration-300 group-hover:scale-110">
                  <PoseImg file={p.pool[0]!} alt={t(p.title, l)} className="h-full w-full object-contain" />
                </div>
                <div className="h-20 w-20 transition duration-300 group-hover:scale-110">
                  <PoseImg file={(p.pool[1] ?? p.pool[0])!} alt={t(p.title, l)} flip className="h-full w-full object-contain" />
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
