import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, absoluteUrl, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo/metadata";
import { GameLayout } from "@/components/games/GameLayout";
import { PersonalityQuizFlow } from "@/components/games/PersonalityQuizFlow";
import { t } from "@/lib/games/poses";
import { ARCHETYPES } from "@/lib/games/personality";

const PATH = "/kuis/baby-mo-kamu";

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
    title: locale === "id" ? "Baby Mo Kamu Hari Ini?" : "Which Baby Mo Are You Today?",
    description:
      locale === "id"
        ? "Jawab 6 pertanyaan seru dan temukan Baby Mo mana yang paling mirip denganmu hari ini! Apakah kamu Baby Mo Ceria, Cerdas, atau Penyayang?"
        : "Answer 6 fun questions and find out which Baby Mo is most like you today! Are you the Cheerful, Bright, or Loving Baby Mo?",
  });
}

export default async function PersonalityQuizPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  const quizSchema = {
    "@type": "Quiz",
    name: l === "id" ? "Baby Mo Kamu Hari Ini?" : "Which Baby Mo Are You Today?",
    description:
      l === "id"
        ? "Kuis kepribadian singkat untuk menemukan karakter Baby Mo yang paling mirip denganmu."
        : "A short personality quiz to find the Baby Mo character most like you.",
    url: absoluteUrl(l, PATH),
    inLanguage: l === "id" ? "id-ID" : "en",
    isAccessibleForFree: true,
    hasPart: ARCHETYPES.map((a) => ({
      "@type": "CreativeWork",
      name: t(a.title, l),
      url: absoluteUrl(l, `${PATH}/hasil/${a.key}`),
    })),
  };

  return (
    <GameLayout
      locale={l}
      currentPath="/kuis"
      trail={[
        { name: l === "id" ? "Kuis" : "Quizzes", path: "/kuis" },
        { name: l === "id" ? "Baby Mo Kamu" : "Which Baby Mo", path: PATH },
      ]}
      extraSchema={[quizSchema]}
    >
      <header className="mb-8 text-center">
        <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {l === "id" ? "Baby Mo Kamu Hari Ini? 🍼" : "Which Baby Mo Are You Today? 🍼"}
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-whisper">
          {l === "id"
            ? "Setiap hari punya suasana hati yang berbeda. Jawab 6 pertanyaan singkat ini dan temukan Baby Mo mana yang paling mirip denganmu — lalu bagikan ke teman!"
            : "Every day has a different mood. Answer these 6 short questions to find which Baby Mo is most like you — then share it with friends!"}
        </p>
      </header>

      <PersonalityQuizFlow locale={l} />

      <section className="mt-14">
        <h2 className="mb-4 text-center font-serif text-lg font-semibold text-ink">
          {l === "id" ? "Semua karakter Baby Mo" : "All Baby Mo characters"}
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {ARCHETYPES.map((a) => (
            <Link
              key={a.key}
              href={pathFor(l, `${PATH}/hasil/${a.key}`)}
              className="rounded-full border border-hairline bg-paper px-4 py-2 text-sm font-semibold text-ink shadow-sm transition hover:border-sage/40"
            >
              {a.emoji} {t(a.title, l)}
            </Link>
          ))}
        </div>
      </section>
    </GameLayout>
  );
}
