"use client";

import { useState } from "react";
import type { EnrichedVideo } from "@/lib/youtube/types";
import { CATEGORY_LABEL } from "@/lib/youtube/video-overlay";
import type { Locale } from "@/lib/i18n/config";
import { VideoModal } from "./VideoModal";

type Props = { video: EnrichedVideo; locale: Locale };

/**
 * Editorial card for a YouTube video.
 * - Thumbnail-first (no iframe loaded until clicked)
 * - Click opens a click-to-load modal
 * - Calm, neutral background — NOT YouTube-styled
 */
export function VideoCard({ video, locale }: Props) {
  const [open, setOpen] = useState(false);

  const title = video.overlay.title?.[locale] ?? video.title;
  const caption =
    video.overlay.caption?.[locale] ??
    video.description.split("\n")[0]?.slice(0, 140) ??
    "";
  const category = video.overlay.category ?? "family-activities";
  const categoryLabel = CATEGORY_LABEL[locale][category];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${locale === "id" ? "Putar" : "Play"}: ${title}`}
        className="lift tap group flex h-full flex-col overflow-hidden rounded-[22px] border border-hairline bg-paper text-left"
      >
        {/* Aspect-ratio box for the thumbnail. We use inline padding-top
            instead of Tailwind's aspect-video to be bulletproof against
            CSS shake-out, and use a plain <img> because next/image with
            output:export + unoptimized + fill misbehaves in some
            browsers. */}
        <div className="relative w-full bg-sage-soft" style={{ paddingTop: "56.25%" }}>
          {video.thumbnail ? (
            <img
              src={video.thumbnail}
              alt={title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-sage-deep">
              <PlayIcon />
            </div>
          )}

          {/* Soft top-gradient for legibility */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/25 to-transparent" />

          {/* Category pill */}
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-paper/95 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-sage-deep">
            {categoryLabel}
          </span>

          {/* Duration pill */}
          {video.duration && (
            <span className="absolute right-3 top-3 rounded-full bg-ink/85 px-2.5 py-1 text-[10.5px] font-semibold text-paper">
              {video.duration}
            </span>
          )}

          {/* Center play affordance */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/90 text-ink shadow-[0_8px_20px_-8px_rgba(15,18,19,0.35)] transition group-hover:scale-110">
              <PlayIcon />
            </span>
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-2 p-5">
          <h3 className="font-serif text-[16.5px] font-medium leading-snug text-ink group-hover:text-sage-deep">
            {title.replace(/\s*[-–]\s*Baby Mo\s*$/, "")}
          </h3>
          {caption && (
            <p className="line-clamp-2 text-[13.5px] leading-relaxed text-whisper">
              {caption}
            </p>
          )}
        </div>
      </button>

      {open && (
        <VideoModal
          videoId={video.id}
          title={title}
          locale={locale}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}
