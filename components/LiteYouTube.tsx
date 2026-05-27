"use client";

import Image from "next/image";
import { useState } from "react";
import { asset, type Locale } from "@/lib/i18n/config";

type Props = {
  /** YouTube video id, e.g. "dQw4w9WgXcQ" */
  videoId: string;
  /** Title for accessibility + alt */
  title: string;
  /** Local thumbnail path (e.g. /moments/foo.jpg). Falls back to YT CDN. */
  thumbnail?: string;
  /** Aspect ratio class. Default "aspect-video" (16:9). */
  aspect?: string;
  /** Optional caption shown below */
  caption?: string;
  locale?: Locale;
};

/**
 * Click-to-load YouTube embed. Renders a static thumbnail + play button on
 * initial paint — costs ~0 KB beyond the image. Only on first click does
 * the full YouTube iframe load (which itself is ~600 KB).
 *
 * This pattern is sometimes called "lite-youtube-embed". We don't pull in
 * the external library — just a 50-line component.
 *
 * Falls back gracefully if no videoId: the thumbnail becomes a link to
 * the channel (via the parent's surrounding link).
 */
export function LiteYouTube({
  videoId,
  title,
  thumbnail,
  aspect = "aspect-video",
  caption,
  locale = "id",
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const ytThumb = thumbnail
    ? asset(thumbnail)
    : `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <figure className="overflow-hidden rounded-[22px] border border-hairline bg-paper">
      <div className={`relative ${aspect} w-full overflow-hidden bg-ink`}>
        {!loaded ? (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`${locale === "id" ? "Putar video" : "Play video"}: ${title}`}
            className="tap group absolute inset-0 block"
          >
            <Image
              src={ytThumb}
              alt={title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              decoding="async"
              className="object-cover"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper/95 text-ink shadow-[0_10px_28px_-10px_rgba(15,18,19,0.5)] transition group-hover:scale-110">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7L8 5Z" />
                </svg>
              </span>
            </span>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        )}
      </div>
      {caption && (
        <figcaption className="px-5 py-4 text-[13.5px] leading-relaxed text-whisper">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
