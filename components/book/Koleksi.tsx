"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getStickers, getFacts } from "@/lib/cerita/stickers";

export type KBook = { slug: string; title: string; emoji: string; href: string };
export type KFact = { key: string; emoji: string; title: string; text: string };

export function Koleksi({ locale, books, facts }: { locale: Locale; books: KBook[]; facts: KFact[] }) {
  const id = locale === "id";
  const [stickers, setStickers] = useState<Record<string, number>>({});
  const [got, setGot] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const [flip, setFlip] = useState<string | null>(null);
  useEffect(() => {
    setStickers(getStickers());
    setGot(getFacts());
    setReady(true);
  }, []);
  const nS = books.filter((b) => stickers[b.slug]).length;
  const nF = facts.filter((f) => got.includes(f.key)).length;
  return (
    <div className="kol">
      <div className="kol-stats">
        <span>⭐ <b>{ready ? nS : "–"}</b> / {books.length} {id ? "stiker" : "stickers"}</span>
        <span>🃏 <b>{ready ? nF : "–"}</b> / {facts.length} {id ? "kartu fakta" : "fact cards"}</span>
      </div>

      <h2 className="kol-h">{id ? "Buku stiker" : "Sticker book"}</h2>
      <ul className="kol-grid">
        {books.map((b, i) => {
          const has = !!stickers[b.slug];
          return (
            <li key={b.slug}>
              <Link href={b.href} className={`kol-st${has ? " has" : ""}`} style={{ ["--r" as string]: `${((i * 37) % 13) - 6}deg` }}>
                <span className="kol-st-badge" aria-hidden>{has ? b.emoji : "?"}</span>
                <span className="kol-st-title">{b.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <h2 className="kol-h">{id ? "Kartu fakta" : "Fact cards"}</h2>
      <p className="kol-sub">{id ? "Ketuk kartu untuk membaliknya." : "Tap a card to flip it."}</p>
      <ul className="kol-cards">
        {facts.map((f) => {
          const has = got.includes(f.key);
          return (
            <li key={f.key}>
              <button type="button" className={`kol-card${has ? " has" : ""}${flip === f.key ? " flip" : ""}`} onClick={() => setFlip(flip === f.key ? null : f.key)}>
                {has ? (
                  <>
                    <span className="kol-card-em" aria-hidden>{f.emoji}</span>
                    <span className="kol-card-text">{f.text}</span>
                    <span className="kol-card-from">{f.title}</span>
                  </>
                ) : (
                  <>
                    <span className="kol-card-em" aria-hidden>🃏</span>
                    <span className="kol-card-lock">{id ? "Belum terkumpul" : "Not collected yet"}</span>
                    <span className="kol-card-from">{id ? "Ada di: " : "Found in: "}{f.title}</span>
                  </>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <style>{`
        .kol-stats{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:18px;}
        .kol-stats span{padding:8px 14px;border-radius:999px;background:var(--color-sun-soft);color:var(--color-ink);font-size:14px;}
        .kol-h{font-family:var(--font-display,inherit);font-size:22px;color:var(--color-ink);margin:22px 0 10px;}
        .kol-sub{margin:-6px 0 10px;font-size:13px;color:var(--color-whisper);}
        .kol-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(104px,1fr));gap:14px;}
        .kol-st{display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;}
        .kol-st-badge{display:grid;place-items:center;width:72px;height:72px;border-radius:50%;font-size:38px;font-weight:900;color:#b9b2a6;
          background:repeating-linear-gradient(45deg,#f1ede6 0 6px,#ebe6dd 6px 12px);border:2px dashed #d6cfc2;transform:rotate(var(--r));}
        .kol-st.has .kol-st-badge{color:inherit;background:#fff;border:0;box-shadow:0 0 0 4px #FFD447,0 8px 18px -8px rgba(0,0,0,.45);}
        .kol-st-title{font-size:11.5px;line-height:1.25;color:var(--color-whisper);}
        .kol-st.has .kol-st-title{color:var(--color-ink);font-weight:700;}
        .kol-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;}
        .kol-card{display:flex;flex-direction:column;gap:6px;width:100%;min-height:150px;padding:14px;border-radius:18px;text-align:left;cursor:pointer;
          background:linear-gradient(135deg,#2E2A63,#4A3F8F);color:#E9E6FF;box-shadow:0 10px 22px -16px rgba(0,0,0,.6);transition:transform .25s ease;}
        .kol-card.has{background:linear-gradient(135deg,#FFF6D6,#E6F6FF);color:#2B2B2B;}
        .kol-card.flip{transform:rotate(-2deg) scale(1.03);}
        .kol-card-em{font-size:28px;}
        .kol-card-text{font-size:14px;line-height:1.45;}
        .kol-card-lock{font-weight:800;}
        .kol-card-from{margin-top:auto;font-size:11.5px;font-weight:700;opacity:.7;}
      `}</style>
    </div>
  );
}
