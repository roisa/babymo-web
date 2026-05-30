import { notFound } from "next/navigation";
import { type Locale, isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { SectionHub, type SectionItem } from "@/components/SectionHub";

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
    path: "/play",
    title: dict.pages.play.title,
    description: dict.pages.play.description,
  });
}

function items(l: Locale, dict: ReturnType<typeof getDictionary>): SectionItem[] {
  return [
    {
      emoji: "🎮",
      title: dict.nav.games,
      description:
        l === "id"
          ? "Permainan islami gratis — hijaiyah, doa, dan akhlak."
          : "Free Islamic games — hijaiyah, duas, and good character.",
      href: "/permainan",
    },
    {
      emoji: "🎨",
      title: l === "id" ? "Aktivitas Anak" : "Kids Activity",
      description:
        l === "id"
          ? "Lembar kegiatan siap cetak — labirin, mewarnai, menjiplak."
          : "Printable worksheets — mazes, coloring, and tracing.",
      href: "/apps/kids-activity",
    },
    {
      emoji: "🧠",
      title: l === "id" ? "Kuis" : "Quizzes",
      description:
        l === "id"
          ? "Uji pemahaman anak sambil bermain. Segera hadir."
          : "Test what your child has learned, playfully. Coming soon.",
      href: "/permainan",
      badge: l === "id" ? "Segera" : "Soon",
    },
  ];
}

export default async function PlayHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  return (
    <SectionHub
      locale={l}
      currentPath="/play"
      title={dict.pages.play.title}
      description={dict.pages.play.description}
      crumbLabel={dict.nav.play}
      items={items(l, dict)}
    />
  );
}
