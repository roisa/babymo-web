import Image from "next/image";
import type { Moment } from "@/lib/content/types";
import { type Locale, asset } from "@/lib/i18n/config";

const PLATFORM_LABEL: Record<string, string> = {
  youtube: "YouTube",
  "youtube-shorts": "YouTube Shorts",
  "ig-post": "Instagram",
  "ig-reel": "Instagram Reel",
};

const PLATFORM_ACCENT: Record<string, string> = {
  youtube: "bg-[#fff1f1] text-[#c4302b]",
  "youtube-shorts": "bg-[#fff1f1] text-[#c4302b]",
  "ig-post": "bg-[#fdf2f8] text-[#c2185b]",
  "ig-reel": "bg-[#fdf2f8] text-[#c2185b]",
};

type Props = { moment: Moment; locale: Locale };

export function MomentCard({ moment, locale }: Props) {
  return (
    <a
      href={moment.url}
      target="_blank"
      rel="noopener"
      className="lift tap group flex flex-col overflow-hidden rounded-[22px] border border-hairline bg-paper"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={asset(moment.thumbnail)}
          alt={moment.title[locale]}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          loading="lazy"
          decoding="async"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {/* Soft top-gradient for legibility */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/20 to-transparent" />

        {/* Platform pill */}
        <span
          className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] ${
            PLATFORM_ACCENT[moment.platform] ?? "bg-paper text-ink"
          }`}
        >
          <PlatformIcon platform={moment.platform} />
          {PLATFORM_LABEL[moment.platform]}
        </span>

        {/* Duration pill */}
        {moment.duration && (
          <span className="absolute right-3 top-3 rounded-full bg-ink/85 px-2.5 py-1 text-[10.5px] font-semibold text-paper">
            {moment.duration}
          </span>
        )}

        {/* Center play affordance */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/90 text-ink shadow-[0_8px_20px_-8px_rgba(15,18,19,0.35)] transition group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-serif text-[16.5px] font-medium leading-snug text-ink group-hover:text-sage-deep">
          {moment.title[locale]}
        </h3>
        <p className="text-[13.5px] leading-relaxed text-whisper">
          {moment.caption[locale]}
        </p>
      </div>
    </a>
  );
}

function PlatformIcon({ platform }: { platform: string }) {
  if (platform.startsWith("youtube")) {
    return (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.81.42A2.51 2.51 0 0 0 2.42 7.19 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .42 4.81 2.51 2.51 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.42-4.81ZM10 15V9l5.2 3Z" />
      </svg>
    );
  }
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
