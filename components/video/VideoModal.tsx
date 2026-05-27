"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n/config";

type Props = {
  videoId: string;
  title: string;
  locale: Locale;
  onClose: () => void;
};

/**
 * Lightbox modal that lazy-loads a single YouTube iframe.
 * The iframe is only mounted when this component is mounted —
 * which only happens when the user clicks a card. Until then,
 * zero YouTube JS is downloaded by any visitor.
 *
 * Accessibility: traps focus loosely (Escape to close, click backdrop
 * to close), passes title to the iframe, sets aria-modal.
 */
export function VideoModal({ videoId, title, locale, onClose }: Props) {
  // Lock scroll + Escape to close
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[24px] bg-ink shadow-2xl">
        <div className="relative aspect-video w-full bg-ink">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label={locale === "id" ? "Tutup" : "Close"}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-paper/95 text-ink shadow-lg transition hover:scale-105"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m18 6-12 12M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
