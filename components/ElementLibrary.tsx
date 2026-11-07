"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { ArtProp } from "@/lib/cerita/illus-types";
import { Prop } from "@/components/story-art/StoryArt";
import { ELEMENTS } from "@/components/story-art/elements";

export interface ElementRow {
  k: ArtProp;
  /** book pages that place this prop */
  uses: number;
  books: string[];
}

const T = {
  id: {
    search: "Cari elemen… (tree, kupu, moon, bola)",
    all: "Semua",
    redrawn: "Sudah digambar ulang",
    legacy: "Versi lama",
    motion: "Gerak",
    uses: (n: number) => `${n}× dipakai`,
    copy: "Salin",
    copied: "Tersalin!",
    none: "Tidak ada elemen yang cocok.",
    newBadge: "baru",
    books: "Dipakai di",
  },
  en: {
    search: "Search elements… (tree, butterfly, moon, ball)",
    all: "All",
    redrawn: "Redrawn",
    legacy: "Old version",
    motion: "Motion",
    uses: (n: number) => `used ${n}×`,
    copy: "Copy",
    copied: "Copied!",
    none: "No matching elements.",
    newBadge: "new",
    books: "Used in",
  },
};

/** SVG that zooms to the element's own bounds (small bugs and big trees both fill the tile). */
function FitArt({ k, className }: { k: ArtProp; className?: string }) {
  const g = useRef<SVGGElement>(null);
  const [vb, setVb] = useState("-170 -300 340 320");
  useEffect(() => {
    const el = g.current;
    if (!el) return;
    const svg = el.ownerSVGElement;
    try {
      svg?.classList.add("el-measure");
      const b = el.getBBox();
      svg?.classList.remove("el-measure");
      const size = Math.max(b.width, b.height * 1.0625, 60) * 1.25;
      const cx = b.x + b.width / 2;
      const bottom = b.y + b.height + size * 0.1;
      setVb(`${cx - size / 2} ${bottom - size / 1.0625} ${size} ${size / 1.0625}`);
    } catch {
      svg?.classList.remove("el-measure");
    }
  }, [k]);
  return (
    <svg viewBox={vb} className={`story-art block w-full ${className ?? ""}`} aria-hidden>
      <g ref={g}>
        <Prop k={k} />
      </g>
    </svg>
  );
}

type Filter = "all" | "redrawn" | "legacy";

export function ElementLibrary({ locale, rows }: { locale: Locale; rows: ElementRow[] }) {
  const t = T[locale];
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [motion, setMotion] = useState(true);
  const [open, setOpen] = useState<ArtProp | null>(null);
  const [copied, setCopied] = useState(false);

  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    return rows.filter((r) => {
      const el = ELEMENTS[r.k];
      if (filter === "redrawn" && !el) return false;
      if (filter === "legacy" && el) return false;
      if (!s) return true;
      return r.k.includes(s) || (el?.note.toLowerCase().includes(s) ?? false) || (el?.group.includes(s) ?? false);
    });
  }, [rows, q, filter]);

  const redrawn = rows.filter((r) => ELEMENTS[r.k]).length;
  const cur = open ? rows.find((r) => r.k === open) : null;

  const copy = (txt: string) => {
    navigator.clipboard?.writeText(txt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  };

  return (
    <div className={`el-lib${motion ? "" : " el-still"}`}>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t.search}
          className="min-w-[220px] flex-1 rounded-full border border-hairline bg-white px-4 py-2.5 text-sm text-ink outline-none focus:border-berry"
        />
        {(["all", "redrawn", "legacy"] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-3.5 py-2 text-sm font-semibold ${filter === f ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-hairline"}`}
          >
            {f === "all" ? `${t.all} · ${rows.length}` : f === "redrawn" ? `${t.redrawn} · ${redrawn}` : `${t.legacy} · ${rows.length - redrawn}`}
          </button>
        ))}
        <label className="ml-auto flex items-center gap-2 text-sm font-semibold text-ink">
          <input type="checkbox" checked={motion} onChange={(e) => setMotion(e.target.checked)} />
          {t.motion}
        </label>
      </div>

      {shown.length === 0 && <p className="py-10 text-center text-whisper">{t.none}</p>}

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {shown.map((r) => {
          const el = ELEMENTS[r.k];
          return (
            <li key={r.k}>
              <button
                type="button"
                onClick={() => setOpen(r.k)}
                className="group block w-full overflow-hidden rounded-2xl bg-white text-left ring-1 ring-hairline transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative overflow-hidden" style={{ background: "linear-gradient(#EAF6FF, #F8FBF2 70%, #E7F3DD 70%)" }}>
                  <FitArt k={r.k} className="aspect-[17/16]" />
                  {el && <span className="absolute left-2 top-2 rounded-full bg-berry px-2 py-0.5 text-[11px] font-bold text-white">{t.newBadge}</span>}
                </div>
                <div className="px-3 py-2">
                  <p className="font-mono text-sm font-bold text-ink">{r.k}</p>
                  <p className="text-xs text-whisper">{r.uses ? t.uses(r.uses) : "—"}</p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {cur && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-3 sm:items-center" onClick={() => setOpen(null)}>
          <div className="max-h-[90vh] w-full max-w-lg overflow-auto rounded-3xl bg-white p-5" onClick={(e) => e.stopPropagation()}>
            <div style={{ background: "linear-gradient(#EAF6FF, #F8FBF2 70%, #E7F3DD 70%)" }} className="overflow-hidden rounded-2xl">
              <FitArt k={cur.k} className="aspect-[17/16]" />
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xl font-bold text-ink">{cur.k}</p>
                <p className="text-sm text-whisper">{ELEMENTS[cur.k]?.note ?? t.legacy}</p>
              </div>
              <button type="button" onClick={() => copy(`{ k: "${cur.k}", x: 400 }`)} className="shrink-0 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">
                {copied ? t.copied : t.copy}
              </button>
            </div>
            <pre className="mt-3 overflow-x-auto rounded-xl bg-paper-2 px-3 py-2 text-xs text-ink">{`props: [{ k: "${cur.k}", x: 400 }]`}</pre>
            {cur.books.length > 0 && (
              <>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-whisper">{t.books}</p>
                <p className="mt-1 text-sm text-ink">{cur.books.join(" · ")}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
