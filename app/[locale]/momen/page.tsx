import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
  isLocale,
  locales,
  pathFor,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { MomenGrid } from "@/components/video/MomenGrid";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  graph,
  itemListSchema,
} from "@/lib/seo/schemas";
import { getAllVideos } from "@/lib/youtube/loader";
import {
  CATEGORY_LABEL,
  CATEGORY_ORDER,
} from "@/lib/youtube/video-overlay";

const COPY = {
  id: {
    title: "Tonton Bareng Baby Mo",
    description:
      "Kurasi singkat video Baby Mo di YouTube — momen islami yang tenang, untuk ditonton bareng anak.",
    sub: "Daftar ini diperbarui otomatis setiap hari dari channel @babymo.official.",
    follow: "Ikuti kanal kami:",
    empty:
      "Video baru segera hadir di channel @babymo.official. Ikuti dulu agar tidak ketinggalan.",
  },
  en: {
    title: "Watch Together with Baby Mo",
    description:
      "A curated set of Baby Mo YouTube videos — calm Islamic moments to watch with your child.",
    sub: "This list refreshes automatically every day from @babymo.official.",
    follow: "Follow our channels:",
    empty:
      "New videos coming soon on @babymo.official. Subscribe to stay close.",
  },
} as const;

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
  const c = COPY[locale];
  return buildMetadata({
    locale,
    path: "/momen",
    title: c.title,
    description: c.description,
  });
}

export default async function MomenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const c = COPY[l];
  const all = getAllVideos();

  const byCategory = CATEGORY_ORDER.map((cat) => ({
    cat,
    label: CATEGORY_LABEL[l][cat],
    items: all.filter(
      (v) => (v.overlay.category ?? "family-activities") === cat,
    ),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <Header locale={l} currentPath="/momen" />
      <main id="main" className="mx-auto max-w-6xl px-5 pb-28 pt-10 sm:px-7 sm:pt-14 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{c.title}</span>
        </nav>
        <header className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
            {l === "id" ? "Tonton & Ikuti" : "Watch & Follow"}
          </p>
          <h1 className="tracking-display mt-2 font-serif text-[36px] font-medium leading-[1.1] text-ink sm:text-[44px]">
            {c.title}
          </h1>
          <p className="mt-3 text-[16.5px] leading-relaxed text-whisper">
            {c.description}
          </p>
          <p className="mt-3 text-[14.5px] leading-relaxed text-whisper">
            {c.sub}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-[13px] text-whisper">
            <span>{c.follow}</span>
            <a
              href="https://www.youtube.com/@babymo.official"
              target="_blank"
              rel="noopener"
              className="tap inline-flex items-center gap-1.5 rounded-full border border-hairline bg-paper px-3 py-1 font-semibold text-ink-soft hover:border-sage/40"
            >
              <span className="text-[#c4302b]">●</span> YouTube
            </a>
            <a
              href="https://www.instagram.com/babymo.official"
              target="_blank"
              rel="noopener"
              className="tap inline-flex items-center gap-1.5 rounded-full border border-hairline bg-paper px-3 py-1 font-semibold text-ink-soft hover:border-sage/40"
            >
              <span className="text-[#c2185b]">●</span> Instagram
            </a>
          </div>
        </header>

        {all.length === 0 ? (
          <div className="mt-14 rounded-[22px] border border-hairline bg-paper-2 p-8 text-center">
            <p className="text-[15px] leading-relaxed text-whisper">{c.empty}</p>
          </div>
        ) : (
          <MomenGrid groups={byCategory} locale={l} />
        )}
      </main>
      <Footer locale={l} currentPath="/momen" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: c.title, path: "/momen" },
          ]),
          itemListSchema(
            l,
            c.title,
            all.map((v) => ({
              name: v.overlay.title?.[l] ?? v.title,
              url: v.url,
            })),
          ),
          // VideoObject per video for rich results
          ...all.map((v) => ({
            "@type": "VideoObject",
            name: v.overlay.title?.[l] ?? v.title,
            description: v.overlay.caption?.[l] ?? v.description.slice(0, 280),
            thumbnailUrl: v.thumbnail,
            uploadDate: v.publishedAt,
            contentUrl: v.url,
            embedUrl: `https://www.youtube.com/embed/${v.id}`,
            inLanguage: l === "id" ? "id-ID" : "en",
          })),
        )}
      />
    </>
  );
}
