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
    path: "/orangtua",
    title: dict.pages.parents.title,
    description: dict.pages.parents.description,
  });
}

function items(l: Locale, dict: ReturnType<typeof getDictionary>): SectionItem[] {
  return [
    {
      emoji: "🧭",
      title: dict.nav.parenting,
      description:
        l === "id"
          ? "Panduan situasi: tantrum, susah tidur, susah makan, dan lainnya."
          : "Situation guides: tantrums, sleep, eating, and more.",
      href: "/parenting",
    },
    {
      emoji: "✍️",
      title: dict.nav.blog,
      description:
        l === "id"
          ? "Artikel parenting islami yang ditulis dan ditinjau."
          : "Islamic parenting articles, written and reviewed.",
      href: "/blog",
    },
    {
      emoji: "📖",
      title: dict.nav.catatan,
      description:
        l === "id"
          ? "Cerita hangat dari Abi & Umi tentang Baby Mo & Baby Ais — tentang akhlak, berbagi, dan sabar."
          : "Warm stories from Abi & Umi about Baby Mo & Baby Ais — about character, sharing, and patience.",
      href: "/cerita",
    },
    {
      emoji: "🔖",
      title: l === "id" ? "Tersimpan" : "Saved",
      description:
        l === "id"
          ? "Doa, hadith, dan konten yang kamu simpan."
          : "Duas, hadith, and content you've bookmarked.",
      href: "/tersimpan",
    },
    {
      emoji: "📱",
      title: l === "id" ? "Wallpaper Doa" : "Du'a Wallpapers",
      description:
        l === "id"
          ? "Lockscreen berisi doa untuk pengingat harian."
          : "Lockscreen wallpapers with duas as daily reminders.",
      href: "/unduh",
    },
    {
      emoji: "💚",
      title: dict.nav.support,
      description:
        l === "id"
          ? "Dukung agar semua konten Baby Mo tetap gratis."
          : "Support keeping all of Baby Mo free for families.",
      href: "/dukung",
    },
    {
      emoji: "❓",
      title: dict.nav.faq,
      description:
        l === "id"
          ? "Pertanyaan yang sering ditanyakan orang tua."
          : "Questions parents ask us most often.",
      href: "/faq",
    },
    {
      emoji: "🌱",
      title: dict.nav.about,
      description:
        l === "id"
          ? "Tentang Baby Mo, tim, dan para reviewer."
          : "About Baby Mo, the team, and our reviewers.",
      href: "/tentang",
    },
  ];
}

export default async function ParentsHub({
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
      currentPath="/orangtua"
      title={dict.pages.parents.title}
      description={dict.pages.parents.description}
      crumbLabel={dict.nav.parents}
      items={items(l, dict)}
    />
  );
}
