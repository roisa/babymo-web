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
import { MomenCard, type MomenItem } from "@/components/video/MomenCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ParentPanel } from "@/components/ParentPanel";
import { SERIES, SERIES_ORDER, cleanTitle, relativeDay, seriesOf, type SeriesKey } from "@/lib/youtube/series";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  graph,
  itemListSchema,
} from "@/lib/seo/schemas";
import { getAllVideos } from "@/lib/youtube/loader";

const CHANNEL = "https://www.youtube.com/@babymo.official";

/** Kid-voice labels for the mood picker. */
const MOOD: Record<Exclude<SeriesKey, "lainnya">, Record<Locale, string>> = {
  lagu: { id: "Mau nyanyi!", en: "Let's sing!" },
  emoji: { id: "Jadi detektif!", en: "Be a detective!" },
  tebak: { id: "Main tebak-tebakan!", en: "Guessing game!" },
  beda: { id: "Adu mata jeli!", en: "Sharp-eyes challenge!" },
};

const COPY = {
  id: {
    title: "Momen Baby Mo",
    description:
      "Lagu islami ceria, tebak-tebakan, dan tantangan seru bareng Baby Mo — video baru tayang hampir setiap hari di YouTube.",
    empty:
      "Video baru segera hadir di channel @babymo.official. Ikuti dulu agar tidak ketinggalan.",
  },
  en: {
    title: "Baby Mo Moments",
    description:
      "Cheerful Islamic songs, guessing games and fun challenges with Baby Mo — new videos almost every day on YouTube.",
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
  const all = getAllVideos()
    .slice()
    .sort((x, y) => y.publishedAt.localeCompare(x.publishedAt));
  const now = new Date();
  const toItem = (v: (typeof all)[number]): MomenItem => {
    const t = cleanTitle(v, l);
    const ageDays = (now.getTime() - new Date(v.publishedAt).getTime()) / 86400000;
    return {
      id: v.id,
      title: t.title,
      episode: t.episode,
      thumb: v.thumbnail,
      duration: v.duration,
      ago: relativeDay(v.publishedAt, l, now),
      isNew: ageDays < 3,
      tag: SERIES[seriesOf(v)].tag[l],
    };
  };
  const latest = all.slice(0, 4).map(toItem);
  const shelves = SERIES_ORDER.map((key) => ({
    key,
    ...SERIES[key],
    items: all.filter((v) => seriesOf(v) === key).map(toItem),
  })).filter((s) => s.items.length > 0);
  const lastAgo = all[0] ? relativeDay(all[0].publishedAt, l, now) : null;
  const id = l === "id";

  return (
    <>
      <Header locale={l} currentPath="/momen" />
      <main id="main" className="sec-momen mx-auto max-w-6xl px-5 pb-28 pt-10 sm:px-7 sm:pt-14 md:pb-16">
        <SectionHeader
          locale={l}
          section="momen"
          crumb={id ? "Momen" : "Moments"}
          title={id ? "Nonton bareng Baby Mo!" : "Watch with Baby Mo!"}
          sub={c.description}
        >
          <a href={`${CHANNEL}?sub_confirmation=1`} target="_blank" rel="noopener" className="sec-btn tap inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14.5px] font-bold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.81.42A2.51 2.51 0 0 0 2.42 7.19 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .42 4.81 2.51 2.51 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.42-4.81ZM10 15V9l5.2 3Z" /></svg>
            {id ? "Langganan gratis" : "Subscribe free"}
          </a>
          {lastAgo && (
            <span className="inline-flex items-center gap-2 rounded-full bg-paper/80 px-4 py-2.5 text-[13.5px] font-semibold text-ink-soft">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--sec)] text-[var(--sec)]" />
              {id ? `Terakhir tayang: ${lastAgo.toLowerCase()}` : `Last upload: ${lastAgo.toLowerCase()}`}
            </span>
          )}
        </SectionHeader>

        {all.length === 0 ? (
          <div className="mt-14 rounded-[22px] border border-hairline bg-paper-2 p-8 text-center">
            <p className="text-[15px] leading-relaxed text-whisper">{c.empty}</p>
          </div>
        ) : (
          <>
            {/* ── Mood picker ── */}
            <section aria-labelledby="mood">
              <h2 id="mood" className="font-display text-grad text-[26px] sm:text-[30px]">
                {id ? "Hari ini mau nonton apa?" : "What do you feel like watching?"}
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {shelves
                  .filter((s) => s.key !== "lainnya")
                  .map((s) => (
                    <a key={s.key} href={`#${s.key}`} className="mood-btn tap">
                      <span className="mood-emoji" aria-hidden>{s.emoji}</span>
                      <span className="font-display text-[17px] leading-tight text-ink">{MOOD[s.key as keyof typeof MOOD][l]}</span>
                      <span className="text-[12.5px] font-semibold text-whisper">
                        {s.items.length} video
                      </span>
                    </a>
                  ))}
              </div>
            </section>

            {/* ── Baru tayang ── */}
            <section className="mt-14" aria-labelledby="baru">
              <h2 id="baru" className="font-display flex items-center gap-2 text-[26px] sm:text-[30px]">
                <span className="text-grad">{id ? "Baru tayang" : "Just released"}</span> <span aria-hidden>🍿</span>
              </h2>
              <div className="mt-5 grid gap-6 lg:grid-cols-[1.55fr_1fr]">
                {latest[0] && <MomenCard v={latest[0]} locale={l} size="lg" />}
                <div className="grid content-start gap-4">
                  {latest.slice(1).map((v) => (
                    <MomenCard key={v.id} v={v} locale={l} size="sm" />
                  ))}
                </div>
              </div>
            </section>

            {/* ── Series shelves ── */}
            {shelves.map((s) => (
              <section key={s.key} id={s.key} className="mt-14 scroll-mt-24" aria-labelledby={`h-${s.key}`}>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div className="max-w-2xl">
                    <h2 id={`h-${s.key}`} className="font-display flex items-center gap-2 text-[24px] text-ink sm:text-[28px]">
                      <span aria-hidden>{s.emoji}</span> {s.title[l]}
                    </h2>
                    <p className="mt-1 text-[15px] leading-relaxed text-whisper">{s.blurb[l]}</p>
                  </div>
                  <span className="rounded-full bg-[var(--sec-soft)] px-3 py-1 text-[12.5px] font-bold text-[var(--sec-deep)]">
                    {s.items.length} video
                  </span>
                </div>
                <div className="momen-row mt-5">
                  {s.items.map((v) => (
                    <MomenCard key={v.id} v={v} locale={l} />
                  ))}
                </div>
              </section>
            ))}

            {/* ── Tips for parents ── */}
            <ParentPanel locale={l} className="mt-16" hint={id ? "Tips nonton bareng si kecil" : "Tips for watching together"}>
              <p className="font-display text-[19px] text-ink">{id ? "Tips nonton bareng" : "Watching together"}</p>
              <ul className="space-y-3 text-[15px] leading-relaxed text-ink-soft">
                <li>⏸️ {id ? "Jeda sebentar di tengah video dan tanya: \"Kamu lihat yang mana?\" — anak belajar lebih banyak saat diajak bicara." : "Pause midway and ask: \"Which one did you spot?\" — children learn more when you talk it through."}</li>
                <li>🎶 {id ? "Setelah lagu selesai, nyanyikan lagi tanpa layar: saat mandi, di mobil, sebelum tidur." : "After a song ends, sing it again without the screen: at bath time, in the car, before bed."}</li>
                <li>⏳ {id ? "Satu atau dua video sudah cukup. Akhiri dengan main bareng di dunia nyata." : "One or two videos is plenty. Finish with real-world play together."}</li>
              </ul>
              <Link href={pathFor(l, "/parenting/screen-time")} className="tap inline-flex text-[14px] font-semibold text-sage-deep hover:underline">
                {id ? "Panduan screen time untuk si kecil →" : "Screen-time guide for little ones →"}
              </Link>
            </ParentPanel>
          </>
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
