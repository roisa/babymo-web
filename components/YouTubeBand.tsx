import Link from "next/link";
import { type Locale, asset, pathFor } from "@/lib/i18n/config";

type Props = { locale: Locale };

const CHANNEL = "https://www.youtube.com/@babymo.official";

/**
 * "Baby Mo on YouTube" — a bold brand band leaning into the songs +
 * animation channel where the character lives. Leads into the auto-fed
 * VideoSection below it. Subscribe is the primary CTA.
 */
export function YouTubeBand({ locale: l }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-4 sm:px-7">
      <div className="relative overflow-hidden rounded-[28px] border border-[#c4302b]/20 bg-gradient-to-br from-[#fff4f3] via-paper to-[#fff7f0] dark:border-[#f87264]/25 dark:from-[#2a1614] dark:via-paper dark:to-[#20120f]">
        <div className="grid items-center gap-7 p-7 sm:grid-cols-[0.85fr_1.15fr] sm:p-10">
          {/* Mascot + play badge */}
          <div className="relative order-1 mx-auto w-full max-w-[220px] sm:order-none">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 m-auto h-[72%] w-[72%] rounded-full bg-[#c4302b]/10 blur-2xl"
            />
            <img
              src={asset("/baby-mo-poses/baby-mo-yeyy.png")}
              alt="Baby Mo"
              width={440}
              height={440}
              loading="lazy"
              decoding="async"
              className="h-auto w-full select-none drop-shadow-[0_18px_36px_rgba(196,48,43,0.12)]"
              draggable={false}
            />
            <span
              aria-hidden
              className="absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#c4302b] text-white shadow-lg"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>

          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c4302b] dark:text-[#f87264]">
              <YouTubeGlyph />
              {l === "id" ? "Baby Mo di YouTube" : "Baby Mo on YouTube"}
            </p>
            <h2 className="font-display mt-3 text-[28px] font-medium leading-[1.12] text-ink sm:text-[36px]">
              {l === "id"
                ? "Lagu anak islami yang ceria, ditonton bareng keluarga."
                : "Cheerful Islamic kids' songs to watch together."}
            </h2>
            <p className="mt-4 max-w-xl text-[15.5px] leading-[1.7] text-whisper">
              {l === "id"
                ? "Di sinilah Baby Mo hidup — lewat lagu dan animasi yang mengajak anak mengenal Allah dengan gembira, dari “Bismillah Dulu” sampai kebiasaan baik sehari-hari."
                : "This is where Baby Mo comes alive — songs and animation that help kids know Allah joyfully, from “Bismillah Dulu” to everyday good habits."}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={CHANNEL}
                target="_blank"
                rel="noopener"
                className="magnet tap inline-flex items-center gap-2 rounded-full bg-[#c4302b] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(196,48,43,0.5)] hover:bg-[#a92722]"
              >
                <YouTubeGlyph />
                {l === "id" ? "Langganan channel" : "Subscribe"}
              </a>
              <Link
                href={pathFor(l, "/momen")}
                className="tap inline-flex items-center gap-2 rounded-full border border-hairline bg-paper/80 px-5 py-3 text-[14px] font-semibold text-ink backdrop-blur hover:border-[#c4302b]/30"
              >
                {l === "id" ? "Lihat semua momen" : "See all moments"} →
              </Link>
            </div>

            <p className="mt-4 text-[12.5px] text-whisper">
              {l === "id"
                ? "Gratis · Aman untuk anak · Konten baru tiap pekan"
                : "Free · Kid-safe · New videos every week"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function YouTubeGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.81.42A2.51 2.51 0 0 0 2.42 7.19 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .42 4.81 2.51 2.51 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.42-4.81ZM10 15V9l5.2 3Z" />
    </svg>
  );
}
