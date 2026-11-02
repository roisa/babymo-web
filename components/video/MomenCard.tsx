"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { VideoModal } from "./VideoModal";

export type MomenItem = {
  id: string;
  title: string;
  episode?: number;
  thumb: string;
  duration: string;
  ago: string;
  isNew: boolean;
  tag: string;
};

/**
 * Thumbnail-first video card for the Momen page. Tapping opens the
 * click-to-load player modal (no YouTube iframe until then).
 */
export function MomenCard({ v, locale, size = "md" }: { v: MomenItem; locale: Locale; size?: "md" | "lg" | "sm" }) {
  const [open, setOpen] = useState(false);
  const id = locale === "id";
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${id ? "Putar" : "Play"}: ${v.title}`}
        className={`momen-card tap group block w-full text-left ${size === "sm" ? "flex items-center gap-3" : ""}`}
      >
        <span className={`momen-thumb relative block overflow-hidden ${size === "sm" ? "w-[132px] shrink-0 rounded-[16px]" : "rounded-[22px]"}`}>
          <img src={v.thumb} alt="" loading="lazy" decoding="async" className="aspect-video h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
          <span className="momen-play" aria-hidden>
            <svg viewBox="0 0 24 24" width={size === "lg" ? 30 : 20} height={size === "lg" ? 30 : 20} fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
          </span>
          <span className="momen-dur">{v.duration}</span>
          {v.isNew && <span className="momen-new">{id ? "Baru!" : "New!"}</span>}
        </span>
        <span className={`block ${size === "sm" ? "min-w-0" : "mt-3 px-1"}`}>
          <span className="flex flex-wrap items-center gap-1.5 text-[12px] font-semibold text-whisper">
            <span className="text-[var(--sec-deep)]">{v.tag}{v.episode ? ` · ${id ? "Eps" : "Ep"} ${v.episode}` : ""}</span>
            <span aria-hidden>·</span>
            <span>{v.ago}</span>
          </span>
          <span className={`font-display mt-1 block leading-snug text-ink group-hover:text-[var(--sec-deep)] ${size === "lg" ? "text-[22px] sm:text-[26px]" : size === "sm" ? "line-clamp-2 text-[15px]" : "line-clamp-2 text-[16.5px]"}`}>
            {v.title}
          </span>
        </span>
      </button>
      {open && <VideoModal videoId={v.id} title={v.title} locale={locale} onClose={() => setOpen(false)} />}
    </>
  );
}
