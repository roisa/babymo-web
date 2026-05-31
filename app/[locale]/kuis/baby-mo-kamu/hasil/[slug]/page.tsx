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
import { GameShare } from "@/components/games/GameShare";
import { PoseImg } from "@/components/games/PoseImg";
import { t, posePath } from "@/lib/games/poses";
import { ARCHETYPES, allArchetypeKeys, getArchetype } from "@/lib/games/personality";

const PATH = "/kuis/baby-mo-kamu";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    allArchetypeKeys().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const arch = getArchetype(slug);
  if (!arch) return {};
  const title =
    locale === "id"
      ? `Kamu adalah ${t(arch.title, locale)}!`
      : `You are the ${t(arch.title, locale)}!`;
  return buildMetadata({
    locale,
    path: `${PATH}/hasil/${slug}`,
    title,
    description: `${t(arch.tagline, locale)} ${t(arch.description, locale)}`,
    image: `${siteUrl}${posePath(arch.poseFile)}`,
    type: "article",
  });
}

export default async function ResultPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const arch = getArchetype(slug);
  if (!arch) notFound();

  const path = `${PATH}/hasil/${slug}`;
  const articleSchema = {
    "@type": "Article",
    headline:
      l === "id" ? `Kamu adalah ${t(arch.title, l)}!` : `You are the ${t(arch.title, l)}!`,
    description: t(arch.description, l),
    url: absoluteUrl(l, path),
    image: `${siteUrl}${posePath(arch.poseFile)}`,
    inLanguage: l === "id" ? "id-ID" : "en",
    isPartOf: {
      "@type": "Quiz",
      name: l === "id" ? "Baby Mo Kamu Hari Ini?" : "Which Baby Mo Are You Today?",
      url: absoluteUrl(l, PATH),
    },
  };

  const others = ARCHETYPES.filter((a) => a.key !== arch.key);
  const shareText =
    l === "id"
      ? `Hari ini aku adalah ${t(arch.title, l)}! ${arch.emoji} ${t(arch.tagline, l)} Coba kuisnya:`
      : `Today I'm the ${t(arch.title, l)}! ${arch.emoji} ${t(arch.tagline, l)} Try the quiz:`;

  return (
    <GameLayout
      locale={l}
      currentPath="/kuis"
      trail={[
        { name: l === "id" ? "Kuis" : "Quizzes", path: "/kuis" },
        { name: l === "id" ? "Baby Mo Kamu" : "Which Baby Mo", path: PATH },
        { name: t(arch.title, l), path },
      ]}
      extraSchema={[articleSchema]}
    >
      <article className="mx-auto max-w-2xl rounded-3xl border border-hairline bg-paper p-6 text-center shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-whisper">
          {l === "id" ? "Hari ini kamu adalah" : "Today you are"}
        </p>
        <h1 className="mt-1 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {t(arch.title, l)} {arch.emoji}
        </h1>
        <p className="mt-2 text-lg font-semibold text-sage-deep">{t(arch.tagline, l)}</p>

        <div className="mx-auto my-6 w-48 rounded-3xl bg-gradient-to-br from-sage-soft to-clay-soft p-4 sm:w-56">
          <PoseImg file={arch.poseFile} alt={t(arch.title, l)} priority className="h-full w-full object-contain" />
        </div>

        <p className="mx-auto max-w-md leading-relaxed text-whisper">{t(arch.description, l)}</p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {arch.strengths.map((s) => (
            <span key={s.id} className="rounded-full bg-sage-soft px-3 py-1 text-sm font-semibold text-sage-deep">
              {t(s, l)}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <GameShare locale={l} url={absoluteUrl(l, path)} text={shareText} />
        </div>
      </article>

      <div className="mt-8 text-center">
        <Link
          href={pathFor(l, PATH)}
          className="tap inline-block rounded-full bg-sage px-6 py-3 text-base font-semibold text-paper shadow transition hover:bg-sage-deep"
        >
          {l === "id" ? "Ulangi Kuis 🔁" : "Retake Quiz 🔁"}
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-center font-serif text-lg font-semibold text-ink">
          {l === "id" ? "Karakter Baby Mo lainnya" : "Other Baby Mo characters"}
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {others.map((a) => (
            <Link
              key={a.key}
              href={pathFor(l, `${PATH}/hasil/${a.key}`)}
              className="rounded-2xl border border-hairline bg-paper p-3 text-center text-sm font-semibold text-ink shadow-sm transition hover:border-sage/40 hover:shadow-md"
            >
              <span className="mr-1">{a.emoji}</span>
              {t(a.title, l)}
            </Link>
          ))}
        </div>
      </section>
    </GameLayout>
  );
}
