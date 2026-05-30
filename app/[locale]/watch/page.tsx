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
    path: "/watch",
    title: dict.pages.watch.title,
    description: dict.pages.watch.description,
  });
}

function items(l: Locale): SectionItem[] {
  return [
    {
      emoji: "🎬",
      title: l === "id" ? "Video & Momen" : "Videos & Moments",
      description:
        l === "id"
          ? "Video, Shorts, dan momen pilihan dari kanal Baby Mo."
          : "Hand-picked videos, Shorts, and moments from Baby Mo.",
      href: "/momen",
    },
    {
      emoji: "▶️",
      title: l === "id" ? "Kanal YouTube" : "YouTube Channel",
      description:
        l === "id"
          ? "Tonton semua video Baby Mo langsung di YouTube."
          : "Watch every Baby Mo video on YouTube.",
      href: "https://www.youtube.com/@babymo.official",
      external: true,
    },
    {
      emoji: "🎵",
      title: l === "id" ? "Nasheed & Lagu" : "Nasheed & Songs",
      description:
        l === "id"
          ? "Lagu islami ramah anak untuk dinyanyikan bersama. Segera hadir."
          : "Child-friendly Islamic songs to sing along. Coming soon.",
      href: "/momen",
      badge: l === "id" ? "Segera" : "Soon",
    },
  ];
}

export default async function WatchHub({
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
      currentPath="/watch"
      title={dict.pages.watch.title}
      description={dict.pages.watch.description}
      crumbLabel={dict.nav.watch}
      items={items(l)}
    />
  );
}
