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
    path: "/learn",
    title: dict.pages.learn.title,
    description: dict.pages.learn.description,
  });
}

function items(l: Locale, dict: ReturnType<typeof getDictionary>): SectionItem[] {
  return [
    {
      emoji: "🧭",
      title: dict.pages.paths.title,
      description:
        l === "id"
          ? "Rangkaian belajar berurutan yang menuntun anak selangkah demi selangkah."
          : "Step-by-step sequences that guide your child one step at a time.",
      href: "/learn/path",
      badge: l === "id" ? "Baru" : "New",
    },
    {
      emoji: "🌟",
      title: l === "id" ? "Akhlak Mulia" : "Good Manners (Akhlaq)",
      description:
        l === "id"
          ? "Adab dan akhlak sehari-hari yang diajarkan Islam."
          : "Everyday Islamic manners and good character.",
      href: "/hadith",
    },
    {
      emoji: "📜",
      title: dict.nav.hadith,
      description:
        l === "id"
          ? "Hadith pilihan dengan sumber dan tingkat keshahihan."
          : "Selected hadith with sources and authenticity grading.",
      href: "/hadith",
    },
    {
      emoji: "📖",
      title: dict.nav.kisah,
      description:
        l === "id"
          ? "Kisah 25 nabi dengan pelajaran untuk anak."
          : "Stories of the 25 prophets with lessons for kids.",
      href: "/kisah",
    },
    {
      emoji: "🕋",
      title: dict.nav.surah,
      description:
        l === "id"
          ? "Surat-surat pendek untuk dihafal dan dibaca bersama."
          : "Short surahs to memorize and recite together.",
      href: "/surat",
    },
    {
      emoji: "🤲",
      title: "Asmaul Husna",
      description:
        l === "id"
          ? "99 nama indah Allah beserta artinya."
          : "The 99 beautiful names of Allah and their meanings.",
      href: "/asmaul-husna",
    },
    {
      emoji: "🗓️",
      title: l === "id" ? "Kalender Islam" : "Islamic Calendar",
      description:
        l === "id"
          ? "Hari besar Islam dan amalan-amalannya."
          : "Islamic occasions and their recommended deeds.",
      href: "/kalender",
    },
    // For-parents content, cross-linked here so it's easy to find (also lives
    // in the dedicated For Parents area).
    {
      emoji: "🧭",
      title: dict.nav.parenting,
      description:
        l === "id"
          ? "Panduan situasi: tantrum, susah tidur, susah makan, dan lainnya."
          : "Situation guides: tantrums, sleep, eating, and more.",
      href: "/parenting",
      badge: dict.nav.parents,
    },
    {
      emoji: "✍️",
      title: dict.nav.blog,
      description:
        l === "id"
          ? "Artikel parenting islami yang ditulis dan ditinjau."
          : "Islamic parenting articles, written and reviewed.",
      href: "/blog",
      badge: dict.nav.parents,
    },
    {
      emoji: "📝",
      title: dict.nav.catatan,
      description:
        l === "id"
          ? "Catatan pribadi pendiri tentang momen bersama anak."
          : "The founder's personal notes on moments with the kids.",
      href: "/catatan",
      badge: dict.nav.parents,
    },
  ];
}

export default async function LearnHub({
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
      currentPath="/learn"
      title={dict.pages.learn.title}
      description={dict.pages.learn.description}
      crumbLabel={dict.nav.learn}
      items={items(l, dict)}
    />
  );
}
