"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getStickers } from "@/lib/cerita/stickers";

/**
 * "Lanjut baca" for a series: which books this child already finished
 * (a sticker is earned at the end of every book), stored on this device only.
 */
export function SeriesProgress({ locale, slugs, firstHref, hrefBase }: { locale: Locale; slugs: string[]; firstHref: string; hrefBase: string }) {
  const [done, setDone] = useState<string[] | null>(null);
  useEffect(() => {
    let got: Record<string, number> = {};
    try {
      got = getStickers();
    } catch {
      /* storage blocked */
    }
    const d = slugs.filter((s) => got[s]);
    setDone(d);
    for (const s of d) document.querySelector(`[data-series-book="${s}"]`)?.classList.add("is-done");
  }, [slugs]);

  const id = locale === "id";
  const next = done ? slugs.find((s) => !done.includes(s)) : null;
  const href = done && done.length && next ? `${hrefBase}${next}/` : firstHref;
  const label = !done || done.length === 0 ? (id ? "Mulai dari buku 1" : "Start with book 1") : next ? (id ? `Lanjut baca: buku ${slugs.indexOf(next) + 1}` : `Keep reading: book ${slugs.indexOf(next) + 1}`) : id ? "Semua sudah dibaca! Baca lagi dari awal" : "All read! Start again";

  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      <a href={href} className="series-go">📖 {label} →</a>
      {done && done.length > 0 && (
        <span className="text-[14px] font-semibold text-whisper">
          ⭐ {done.length}/{slugs.length} {id ? "sudah dibaca" : "finished"}
        </span>
      )}
    </div>
  );
}
