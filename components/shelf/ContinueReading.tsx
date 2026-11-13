"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getStickers } from "@/lib/cerita/stickers";

export type ContinueSeries = { key: string; emoji: string; title: string; books: { slug: string; title: string; href: string }[] };

/**
 * "Lanjutkan membaca": from the last finished book (its sticker time), point to
 * the next unread book in the same series. Renders nothing for new readers.
 */
export function ContinueReading({ locale, series }: { locale: Locale; series: ContinueSeries[] }) {
  const [pick, setPick] = useState<{ s: ContinueSeries; i: number } | null>(null);
  useEffect(() => {
    let st: Record<string, number> = {};
    try { st = getStickers(); } catch { /* storage blocked */ }
    const last = Object.entries(st).sort((a, b) => b[1] - a[1]);
    for (const [slug] of last) {
      const s = series.find((x) => x.books.some((b) => b.slug === slug));
      if (!s) continue;
      const i = s.books.findIndex((b, k) => k > s.books.findIndex((x) => x.slug === slug) && !st[b.slug]);
      const j = i >= 0 ? i : s.books.findIndex((b) => !st[b.slug]);
      if (j >= 0) { setPick({ s, i: j }); return; }
    }
  }, [series]);
  if (!pick) return null;
  const id = locale === "id";
  const b = pick.s.books[pick.i];
  if (!b) return null;
  const done = pick.s.books.length;
  return (
    <section className="sec-cerita mb-12" aria-labelledby="shelf-continue">
      <Link href={b.href} className="continue-card tap">
        <span className="continue-emoji" aria-hidden>{pick.s.emoji}</span>
        <span className="continue-body">
          <span id="shelf-continue" className="continue-kick">📖 {id ? "Lanjutkan membaca" : "Continue reading"}</span>
          <span className="continue-title">{b.title}</span>
          <span className="continue-meta">{pick.s.title} · {id ? `Buku ${pick.i + 1} dari ${done}` : `Book ${pick.i + 1} of ${done}`}</span>
        </span>
        <span className="continue-go" aria-hidden>→</span>
      </Link>
    </section>
  );
}
