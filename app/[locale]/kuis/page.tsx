import { notFound } from "next/navigation";
import { type Locale, isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { SectionHub, type SectionItem } from "@/components/SectionHub";

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
    path: "/kuis",
    title: locale === "id" ? "Kuis & Permainan Baby Mo" : "Baby Mo Quizzes & Games",
    description:
      locale === "id"
        ? "Main kuis dan permainan seru bareng Baby Mo: temukan yang beda, cari perbedaan, tebak perasaan, dan kuis kepribadian. Gratis, edukatif, dan menggemaskan!"
        : "Play fun Baby Mo quizzes and games: spot the odd one, find the differences, guess the feeling, and a personality quiz. Free, educational, and adorable!",
  });
}

function items(l: Locale): SectionItem[] {
  return [
    {
      emoji: "🔍",
      title: l === "id" ? "Temukan yang Beda" : "Spot the Odd One",
      description:
        l === "id"
          ? "Temukan satu Baby Mo yang berbeda di antara yang lain secepat mungkin."
          : "Find the one Baby Mo that's different among the rest, as fast as you can.",
      href: "/kuis/cari-yang-beda",
    },
    {
      emoji: "🧩",
      title: l === "id" ? "Cari Perbedaan" : "Spot the Difference",
      description:
        l === "id"
          ? "Bandingkan dua panel dan temukan semua perbedaan Baby Mo."
          : "Compare two panels and find every Baby Mo difference.",
      href: "/kuis/cari-perbedaan",
    },
    {
      emoji: "😀",
      title: l === "id" ? "Tebak Perasaan" : "Guess the Feeling",
      description:
        l === "id"
          ? "Lihat pose Baby Mo dan tebak perasaannya. Seru sambil belajar emosi."
          : "Look at Baby Mo's pose and guess the feeling. Fun emotional learning.",
      href: "/kuis/tebak-perasaan",
    },
    {
      emoji: "🍼",
      title: l === "id" ? "Baby Mo Kamu Hari Ini?" : "Which Baby Mo Are You?",
      description:
        l === "id"
          ? "Jawab 6 pertanyaan dan temukan karakter Baby Mo yang paling mirip denganmu."
          : "Answer 6 questions and discover the Baby Mo character most like you.",
      href: "/kuis/baby-mo-kamu",
    },
  ];
}

export default async function KuisHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  return (
    <SectionHub
      locale={l}
      currentPath="/kuis"
      title={l === "id" ? "Kuis & Permainan Baby Mo" : "Baby Mo Quizzes & Games"}
      description={
        l === "id"
          ? "Main kuis dan permainan seru bareng Baby Mo — melatih ketelitian, fokus, dan kecerdasan emosi anak sambil bersenang-senang."
          : "Play fun Baby Mo quizzes and games — training attention, focus, and emotional intelligence while having fun."
      }
      crumbLabel={l === "id" ? "Kuis" : "Quizzes"}
      items={items(l)}
    />
  );
}
