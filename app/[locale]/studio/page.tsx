import { notFound } from "next/navigation";
import { type Locale, isLocale, locales } from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { getAllGames } from "@/lib/content/games";
import { GAME_PROMO } from "@/lib/content/game-promo";
import { PromoStudio, type GameSrc } from "@/components/promo/PromoStudio";

/**
 * Promo Studio — a team tool (not in the menu, not indexed) for making
 * Reels / Story / Shorts / feed promos of the Baby Mo app (or the web games): 24 animated templates,
 * editable text/colours/length, and one-click video + cover downloads.
 */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/studio",
    title: locale === "id" ? "Promo Studio — Tim Baby Mo" : "Promo Studio — Baby Mo Team",
    description: locale === "id" ? "Alat tim untuk membuat video promosi game Baby Mo." : "A team tool for making Baby Mo game promo videos.",
    noindex: true,
  });
}

export default async function StudioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const games: GameSrc[] = getAllGames().map((g) => ({
    slug: g.slug,
    emoji: g.emoji,
    name: { id: g.title.id, en: g.title.en },
    hook: GAME_PROMO[g.slug]?.hook ?? { id: g.description.id, en: g.description.en },
    url: g.externalUrl,
    shot: { id: `/games/shots/id/${g.slug}.webp`, en: `/games/shots/en/${g.slug}.webp` },
    icon: `/icons/games/${g.slug}.svg`,
  }));
  const id = l === "id";
  return (
    <>
      <Header locale={l} currentPath="/studio" />
      <main id="main" className="mx-auto max-w-7xl px-5 pb-28 pt-8 sm:px-8 sm:pt-12 md:pb-16">
        <header className="mb-4 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-berry">{id ? "Khusus tim Baby Mo" : "Baby Mo team only"}</p>
          <h1 className="mt-1 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">Promo Studio 🎬</h1>
          <p className="mt-2 text-base leading-relaxed text-whisper">
            {id
              ? "24 template video animasi untuk Reels, Story, Shorts, dan feed (9:16, 4:5, 1:1) — termasuk Ramadan, Idul Fitri, Apple Watch, dan doa di mobil. Pilih “Siap pakai” dari Marketing Kit atau template mana pun, ganti game, teks, warna, dan durasi, lalu unduh videonya (1080p), cover PNG, dan caption. Default-nya mengajak unduh di App Store; mode game web tetap tersedia."
              : "24 animated templates for Reels, Stories, Shorts and the feed (9:16, 4:5, 1:1) — including Ramadan, Eid, Apple Watch and the in-car du'a. Start from a ready-made preset from the Marketing Kit or any template, change the game, text, colours and length, then download the video (1080p), a cover PNG and a caption. By default it points to the App Store; the web-games mode is still there."}
          </p>
        </header>
        <PromoStudio locale={l} games={games} />
      </main>
      <Footer locale={l} currentPath="/studio" />
      <MobileNav locale={l} />
    </>
  );
}
