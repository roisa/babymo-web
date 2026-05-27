import Link from "next/link";
import { VideoCard } from "./VideoCard";
import { getFeaturedVideos } from "@/lib/youtube/loader";
import { type Locale, pathFor } from "@/lib/i18n/config";

type Props = { locale: Locale };

/**
 * Homepage "Watch Together with Baby Mo" section.
 * Server component — reads videos.json at build time. Falls back
 * to silent (returns null) if no videos are available, so the
 * homepage never breaks even before the YouTube sync has run.
 */
export function VideoSection({ locale }: Props) {
  const videos = getFeaturedVideos(3);
  if (videos.length === 0) return null;

  const heading =
    locale === "id"
      ? "Tonton Bareng Baby Mo"
      : "Watch Together with Baby Mo";
  const sub =
    locale === "id"
      ? "Momen islami yang tenang untuk rutinitas keluarga sehari-hari."
      : "Gentle Islamic moments for daily family routines.";

  return (
    <section className="border-t border-hairline bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
              {locale === "id" ? "Momen Baby Mo" : "Baby Mo Moments"}
            </p>
            <h2 className="tracking-display mt-1 font-serif text-3xl font-medium text-ink sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-2 text-[15.5px] text-whisper">{sub}</p>
          </div>
          <Link
            href={pathFor(locale, "/momen")}
            className="tap hidden whitespace-nowrap text-[13.5px] font-semibold text-sage-deep hover:underline sm:inline-flex"
          >
            {locale === "id" ? "Lihat semua" : "View all"} →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} locale={locale} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-[13px] text-whisper">
          <span>{locale === "id" ? "Ikuti kami di" : "Follow us on"}</span>
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
      </div>
    </section>
  );
}
