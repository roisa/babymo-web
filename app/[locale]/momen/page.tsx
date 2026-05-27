import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
  isLocale,
  locales,
  absoluteUrl,
  pathFor,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { MomentCard } from "@/components/MomentCard";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  graph,
  itemListSchema,
} from "@/lib/seo/schemas";
import {
  getAllMoments,
  MOMENT_CATEGORIES,
  CATEGORY_LABEL,
} from "@/lib/content/moments";

const COPY = {
  id: {
    title: "Momen Baby Mo",
    description:
      "Kurasi singkat momen islami keluarga muslim — video YouTube dan Reels Instagram yang tenang, untuk ditonton bareng anak.",
    sub: "Bukan feed otomatis. Setiap momen di sini dipilih agar tetap tenang, ramah anak, dan bermanfaat dibawa pulang.",
    follow: "Ikuti kanal kami:",
  },
  en: {
    title: "Baby Mo Moments",
    description:
      "A curated set of calm Islamic family moments — YouTube videos and Instagram reels to watch with your child.",
    sub: "Not an auto-feed. Every moment here is chosen to stay calm, child-friendly, and worth taking home.",
    follow: "Follow our channels:",
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
  const all = getAllMoments();

  // Group by category, ordered as defined in MOMENT_CATEGORIES
  const byCategory = MOMENT_CATEGORIES.map((cat) => ({
    cat,
    label: CATEGORY_LABEL[l][cat],
    items: all.filter((m) => m.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <Header locale={l} currentPath="/momen" />
      <main className="mx-auto max-w-6xl px-5 pb-28 pt-10 sm:px-7 sm:pt-14 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{c.title}</span>
        </nav>
        <header className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
            {l === "id" ? "Tonton & Bagikan" : "Watch & Share"}
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

        {/* Category sections */}
        <div className="mt-14 space-y-16">
          {byCategory.map((g) => (
            <section key={g.cat}>
              <div className="mb-6 flex items-baseline gap-3">
                <h2 className="font-serif text-2xl font-medium tracking-tight text-ink">
                  {g.label}
                </h2>
                <span className="text-[12.5px] text-whisper">
                  {g.items.length}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((m) => (
                  <MomentCard key={m.slug} moment={m} locale={l} />
                ))}
              </div>
            </section>
          ))}
        </div>
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
            all.map((m) => ({
              name: m.title[l],
              url: m.url,
            })),
          ),
          // VideoObject for each YouTube moment
          ...all
            .filter((m) => m.platform.startsWith("youtube"))
            .map((m) => ({
              "@type": "VideoObject",
              name: m.title[l],
              description: m.caption[l],
              thumbnailUrl: `https://babymo.id${m.thumbnail}`,
              uploadDate: m.publishedAt,
              contentUrl: m.url,
              embedUrl: m.url,
              inLanguage: l === "id" ? "id-ID" : "en",
              duration: m.duration
                ? `PT${m.duration.split(":")[0]}M${m.duration.split(":")[1]}S`
                : undefined,
            })),
        )}
      />
    </>
  );
}
