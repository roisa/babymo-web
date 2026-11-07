import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales } from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { ElementLibrary, type ElementRow } from "@/components/ElementLibrary";
import type { ArtProp } from "@/lib/cerita/illus-types";
import { getBookPages } from "@/lib/cerita/picture-books";
import { ADAPTED } from "@/lib/cerita/picture-books-adapted";
import { getAllCatatan } from "@/lib/content/catatan";

/**
 * Element Library — a team tool (not in the menu, not indexed) listing every
 * StoryArt prop with a live preview, how often books use it, and whether it
 * has been redrawn in the new element style (components/story-art/elements).
 */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/elemen",
    title: locale === "id" ? "Pustaka Elemen — Tim Baby Mo" : "Element Library — Baby Mo Team",
    description: locale === "id" ? "Semua elemen gambar untuk buku cerita Baby Mo." : "Every drawn element used in Baby Mo picture books.",
    noindex: true,
  });
}

/** All ArtProp names, read from the type union at build time. */
function allProps(): ArtProp[] {
  const src = fs.readFileSync(path.join(process.cwd(), "lib/cerita/illus-types.ts"), "utf8");
  const block = src.slice(src.indexOf("export type ArtProp ="));
  const body = block.slice(0, block.indexOf(";"));
  return [...body.matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1] as ArtProp);
}

function usage(l: Locale) {
  const n = new Map<string, number>();
  const books = new Map<string, Set<string>>();
  const titles = new Map<string, string>();
  for (const c of getAllCatatan()) titles.set(c.slug, c.title[l]);
  const slugs = new Set<string>(Object.keys(ADAPTED));
  for (const s of titles.keys()) if (getBookPages(s)) slugs.add(s);
  for (const slug of slugs) {
    const b = getBookPages(slug);
    if (!b) continue;
    for (const sc of [b.cover, ...b.pages.map((p) => p.scene)]) {
      for (const p of sc.props ?? []) {
        n.set(p.k, (n.get(p.k) ?? 0) + 1);
        if (!books.has(p.k)) books.set(p.k, new Set());
        books.get(p.k)!.add(titles.get(slug) ?? slug);
      }
    }
  }
  return { n, books };
}

export default async function ElementPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const id = l === "id";
  const { n, books } = usage(l);
  const rows: ElementRow[] = allProps()
    .map((k) => ({ k, uses: n.get(k) ?? 0, books: [...(books.get(k) ?? [])].sort() }))
    .sort((a, b) => b.uses - a.uses || a.k.localeCompare(b.k));

  return (
    <>
      <Header locale={l} currentPath="/elemen" />
      <main id="main" className="mx-auto max-w-7xl px-4 pb-28 pt-8 sm:px-8 sm:pt-12 md:pb-16">
        <header className="mb-5 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-berry">{id ? "Khusus tim Baby Mo" : "Baby Mo team only"}</p>
          <h1 className="mt-1 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">{id ? "Pustaka Elemen" : "Element Library"} 🌳</h1>
          <p className="mt-2 text-base leading-relaxed text-whisper">
            {id
              ? `${rows.length} elemen gambar untuk buku cerita — pohon, kupu-kupu, bulan, mainan, dan lainnya. Yang berlabel "baru" sudah digambar ulang dengan bayangan lembut. Klik elemen untuk menyalin kodenya dan melihat buku yang memakainya.`
              : `${rows.length} drawn elements for the picture books — trees, butterflies, moons, toys and more. Ones marked "new" are redrawn with soft shading. Click an element to copy its code and see which books use it.`}
          </p>
        </header>
        <ElementLibrary locale={l} rows={rows} />
      </main>
      <Footer locale={l} currentPath="/elemen" />
      <MobileNav locale={l} />
    </>
  );
}
