import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { pictureBookStories, getPictureBook } from "@/lib/cerita/picture-books";
import { stickerFor, isFact, factKey } from "@/lib/cerita/stickers";
import { Koleksi, type KBook, type KFact } from "@/components/book/Koleksi";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/koleksi",
    title: locale === "id" ? "Koleksi Stiker & Kartu Fakta" : "Sticker Book & Fact Cards",
    description: locale === "id" ? "Stiker dari setiap cerita yang selesai dibaca, dan kartu fakta seru yang terkumpul." : "A sticker for every story finished, and fun fact cards collected along the way.",
    noindex: true,
  });
}

export default async function KoleksiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const sorted = [...pictureBookStories].sort((a, b) => a.published.localeCompare(b.published));
  const books: KBook[] = sorted.map((b) => ({ slug: b.slug, title: b.title[l], emoji: stickerFor(b.slug), href: pathFor(l, `/cerita/${b.slug}`) }));
  const facts: KFact[] = [];
  for (const b of sorted) {
    const pb = getPictureBook(b.slug);
    pb?.pages.forEach((p, i) => {
      if (isFact(p.text.id, b.slug, i)) facts.push({ key: factKey(b.slug, i), emoji: stickerFor(b.slug), title: b.title[l], text: p.text[l].replace(/^(Tahukah kamu\?|Did you know\?)\s*/i, "") });
    });
  }
  const id = l === "id";
  return (
    <>
      <Header locale={l} currentPath="/koleksi" />
      <main id="main" className="mx-auto max-w-5xl px-5 pb-28 pt-10 sm:px-8 sm:pt-14 md:pb-16">
        <header className="mb-6 max-w-2xl">
          <h1 className="font-display text-3xl text-ink sm:text-4xl">{id ? "Koleksi Stikerku" : "My Sticker Book"} ⭐</h1>
          <p className="mt-2 text-base leading-relaxed text-whisper">
            {id
              ? "Setiap cerita yang selesai dibaca di Mode Buku memberi satu stiker. Halaman \"Tahukah kamu?\" memberi kartu fakta. Kumpulkan semuanya bersama si kecil!"
              : "Every story finished in Book Mode earns a sticker. \"Did you know?\" pages give fact cards. Collect them all with your little one!"}
          </p>
        </header>
        <Koleksi locale={l} books={books} facts={facts} />
      </main>
      <Footer locale={l} currentPath="/koleksi" />
      <MobileNav locale={l} />
    </>
  );
}
