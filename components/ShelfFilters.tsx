"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getStickers } from "@/lib/cerita/stickers";
import { shelfStore } from "@/lib/cerita/shelf-store";

type Chip = { key: string; label: string };

/**
 * Filter chips for the kids' story shelf. Items carry data-chars ("mo ais
 * adam ayah umi") and data-series; the shelf stays fully server-rendered
 * and this only hides items, so it works for search engines and without JS.
 */
export function ShelfFilters({ locale, chars, series, total }: { locale: Locale; chars: Chip[]; series: Chip[]; total: number }) {
  const [who, setWho] = useState<string>("all");
  const [ser, setSer] = useState<string>("all");
  const [unread, setUnread] = useState(false);
  const [shown, setShown] = useState(total);
  const [limit, setLimit] = useState(shelfStore.get().limit);
  const id = locale === "id";
  useEffect(() => shelfStore.sub(() => setLimit(shelfStore.get().limit)), []);

  useEffect(() => {
    let read: Record<string, number> = {};
    try {
      read = getStickers();
    } catch {
      /* storage blocked */
    }
    let n = 0;
    let over = 0;
    // with no filter on, show the shelf a dozen books at a time
    const paged = who === "all" && ser === "all" && !unread;
    document.querySelectorAll<HTMLElement>("[data-shelf-item]").forEach((el) => {
      const ok =
        (who === "all" || (el.dataset.chars ?? "").split(" ").includes(who)) &&
        (ser === "all" || el.dataset.series === ser) &&
        (!unread || !read[el.dataset.shelfItem ?? ""]);
      if (ok) n++;
      const cut = ok && paged && n > limit;
      if (cut) over++;
      el.hidden = !ok || cut;
      if (read[el.dataset.shelfItem ?? ""]) el.classList.add("is-read");
    });
    setShown(n);
    shelfStore.set({ hiddenByLimit: over });
  }, [who, ser, unread, limit]);

  const chip = (active: boolean) =>
    `shelf-chip${active ? " is-on" : ""}`;

  return (
    <div className="shelf-filters mt-5" role="group" aria-label={id ? "Saring cerita" : "Filter stories"}>
      <div className="shelf-chips">
        <span className="shelf-chips-label">{id ? "Tokoh" : "Character"}</span>
        <button type="button" className={chip(who === "all")} aria-pressed={who === "all"} onClick={() => setWho("all")}>{id ? "Semua" : "All"}</button>
        {chars.map((c) => (
          <button key={c.key} type="button" className={chip(who === c.key)} aria-pressed={who === c.key} onClick={() => setWho(who === c.key ? "all" : c.key)}>{c.label}</button>
        ))}
      </div>
      <div className="shelf-chips">
        <span className="shelf-chips-label">{id ? "Seri" : "Series"}</span>
        <button type="button" className={chip(ser === "all")} aria-pressed={ser === "all"} onClick={() => setSer("all")}>{id ? "Semua" : "All"}</button>
        {series.map((c) => (
          <button key={c.key} type="button" className={chip(ser === c.key)} aria-pressed={ser === c.key} onClick={() => setSer(ser === c.key ? "all" : c.key)}>{c.label}</button>
        ))}
        <button type="button" className={chip(unread)} aria-pressed={unread} onClick={() => setUnread(!unread)}>✨ {id ? "Belum dibaca" : "Not read yet"}</button>
      </div>
      <p className="mt-2 text-[13px] font-semibold text-whisper" aria-live="polite">
        {id ? `${shown} cerita` : `${shown} stories`}
      </p>
    </div>
  );
}
