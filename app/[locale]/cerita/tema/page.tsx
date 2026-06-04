import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
  absoluteUrl,
  isLocale,
  locales,
  pathFor,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph, itemListSchema } from "@/lib/seo/schemas";
import { getAllCatatan } from "@/lib/content/catatan";
import { getCeritaThemes } from "@/lib/content/cerita-themes";

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
  const total = getAllCatatan().length;
  const title =
    locale === "id" ? "Tema Cerita Anak Islami" : "Islamic Kids Story Themes";
  const description =
    locale === "id"
      ? `Jelajahi ${total}+ cerita Baby Mo & Baby Ais per tema — akhlak, sabar, berbagi, syukur, persaudaraan, dan banyak lagi. Cerita anak islami yang hangat untuk dibacakan bersama si kecil.`
      : `Browse ${total}+ Baby Mo & Baby Ais stories by theme — good character, patience, sharing, gratitude, siblings, and more. Warm Islamic stories to read with your little one.`;
  return buildMetadata({ locale, path: "/cerita/tema", title, description });
}

export default async function CeritaTemaIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const themes = getCeritaThemes();
  const total = getAllCatatan().length;

  return (
    <>
      <Header locale={l} currentPath="/cerita/tema" />
      <main id="main" className="mx-auto max-w-4xl px-5 pb-28 pt-12 sm:px-7 sm:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/cerita")} className="hover:text-ink">
            {dict.nav.catatan}
          </Link>{" "}
          / <span className="text-ink">{l === "id" ? "Tema" : "Themes"}</span>
        </nav>

        <header className="mb-10 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            {dict.catatan.byline}
          </p>
          <h1 className="font-display mt-3 text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px]">
            {l === "id" ? "Tema Cerita" : "Story Themes"}
          </h1>
          <p className="mt-4 text-[16.5px] leading-[1.65] text-whisper">
            {l === "id"
              ? `Pilih tema untuk menemukan cerita yang pas untuk si kecil. ${total} cerita Baby Mo & Baby Ais tentang akhlak dan kebaikan.`
              : `Pick a theme to find the right story for your little one. ${total} Baby Mo & Baby Ais stories about character and kindness.`}
          </p>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2">
          {themes.map((x) => (
            <li key={x.theme.slug}>
              <Link
                href={pathFor(l, `/cerita/tema/${x.theme.slug}`)}
                className="lift tap group flex h-full flex-col rounded-[22px] border border-hairline bg-paper p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-display text-[22px] font-medium text-ink group-hover:text-brave-deep">
                    {x.theme.label[l]}
                  </h2>
                  <span className="shrink-0 rounded-full bg-brave-soft px-2.5 py-0.5 text-[12px] font-semibold text-brave-deep">
                    {x.count}
                  </span>
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-whisper">
                  {x.theme.desc[l]}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-[13.5px]">
          <Link href={pathFor(l, "/cerita")} className="font-semibold text-brave-deep hover:underline">
            {l === "id" ? "← Lihat semua cerita" : "← See all stories"}
          </Link>
        </p>
      </main>

      <Footer locale={l} currentPath="/cerita/tema" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.catatan, path: "/cerita" },
            { name: l === "id" ? "Tema" : "Themes", path: "/cerita/tema" },
          ]),
          itemListSchema(
            l,
            l === "id" ? "Tema Cerita" : "Story Themes",
            themes.map((x) => ({
              name: x.theme.label[l],
              url: absoluteUrl(l, `/cerita/tema/${x.theme.slug}`),
            })),
          ),
        )}
      />
    </>
  );
}
