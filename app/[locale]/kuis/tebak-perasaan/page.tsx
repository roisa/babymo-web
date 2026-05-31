import { notFound } from "next/navigation";
import { type Locale, absoluteUrl, isLocale, locales } from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo/metadata";
import { GameLayout } from "@/components/games/GameLayout";
import { EmotionQuiz } from "@/components/games/EmotionQuiz";
import { PoseImg } from "@/components/games/PoseImg";
import { t } from "@/lib/games/poses";
import { EMOTIONS } from "@/lib/games/emotions";

const PATH = "/kuis/tebak-perasaan";

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
    title: locale === "id" ? "Tebak Perasaan Baby Mo" : "Guess Baby Mo's Feeling",
    description:
      locale === "id"
        ? "Lihat pose Baby Mo dan tebak perasaannya! Permainan seru yang membantu anak mengenali emosi — senang, sedih, takjub, malu, dan lainnya."
        : "Look at Baby Mo's pose and guess the feeling! A fun game that helps children recognise emotions — happy, sad, amazed, shy, and more.",
  });
}

export default async function EmotionQuizPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  const quizSchema = {
    "@type": ["Quiz", "LearningResource"],
    name: l === "id" ? "Tebak Perasaan Baby Mo" : "Guess Baby Mo's Feeling",
    description:
      l === "id"
        ? "Permainan mengenali emosi untuk anak usia dini bersama karakter Baby Mo."
        : "An emotion-recognition game for young children featuring the Baby Mo character.",
    url: absoluteUrl(l, PATH),
    inLanguage: l === "id" ? "id-ID" : "en",
    isAccessibleForFree: true,
    educationalUse: "self-assessment",
    learningResourceType: "game",
    teaches: l === "id" ? "Pengenalan emosi" : "Emotion recognition",
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: 2,
      suggestedMaxAge: 8,
    },
  };

  return (
    <GameLayout
      locale={l}
      currentPath="/kuis"
      trail={[
        { name: l === "id" ? "Kuis" : "Quizzes", path: "/kuis" },
        { name: l === "id" ? "Tebak Perasaan" : "Guess the Feeling", path: PATH },
      ]}
      extraSchema={[quizSchema]}
    >
      <header className="mb-8 text-center">
        <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {l === "id" ? "Tebak Perasaan Baby Mo 😀" : "Guess Baby Mo's Feeling 😀"}
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-whisper">
          {l === "id"
            ? "Lihat pose Baby Mo dan tebak perasaannya! Permainan seru yang membantu si kecil belajar mengenali emosi."
            : "Look at Baby Mo's pose and guess the feeling! A fun game that helps little ones learn to recognise emotions."}
        </p>
      </header>

      <EmotionQuiz locale={l} shareUrl={absoluteUrl(l, PATH)} />

      <section className="mt-16">
        <h2 className="mb-2 font-serif text-2xl font-medium text-ink">
          {l === "id" ? "Kamus Perasaan Baby Mo" : "Baby Mo's Feelings Dictionary"}
        </h2>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-whisper">
          {l === "id"
            ? "Kenali setiap perasaan lewat ekspresi Baby Mo. Ajak anak menyebutkan perasaan yang sedang ia rasakan hari ini."
            : "Get to know each feeling through Baby Mo's expressions. Invite your child to name the feeling they have today."}
        </p>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {EMOTIONS.map((e) => (
            <li
              key={e.key}
              className="flex flex-col items-center rounded-2xl border border-hairline bg-paper p-4 text-center shadow-sm"
            >
              <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-sage-soft to-clay-soft p-2">
                <PoseImg file={e.poseFile} alt={t(e.label, l)} className="h-full w-full object-contain" />
              </div>
              <p className="mt-3 font-serif text-base font-semibold text-ink">
                {e.emoji} {t(e.label, l)}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-whisper">{t(e.note, l)}</p>
            </li>
          ))}
        </ul>
      </section>
    </GameLayout>
  );
}
