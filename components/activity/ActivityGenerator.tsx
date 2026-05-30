"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { THEMES } from "@/lib/activity/themes";
import { AGE_RANGES } from "@/lib/activity/ageRanges";
import { ACTIVITY_TYPES } from "@/lib/activity/activityTypes";
import { getTheme } from "@/lib/activity/themes";
import { getAgeRange } from "@/lib/activity/ageRanges";
import { randomSeed } from "@/lib/activity/random";
import { generateWorksheet, type Worksheet } from "@/lib/activity";
import { hasColoringPages, loadColoringPages } from "@/lib/activity/coloring-pages";
import { downloadPackPdf, downloadWorksheetPdf, downloadSvg } from "@/lib/activity/pdf";

type Copy = {
  build: string;
  hint: string;
  theme: string;
  age: string;
  acts: string;
  perAct: string;
  each: string;
  generate: string;
  generating: string;
  ready: (n: number) => string;
  preview: string;
  emptyHint: string;
  noneTitle: string;
  noneBody: string;
  dlPack: string;
  print: string;
  clear: string;
  building: string;
  done: string;
  pdfErr: string;
  genToast: (n: number) => string;
  svgToast: string;
  packName: (t: string, a: string) => string;
  regen: string;
  remove: string;
};

const COPY: Record<Locale, Copy> = {
  id: {
    build: "Buat paket lembar kerja",
    hint: "Pilih tema, usia, lalu satu atau lebih aktivitas.",
    theme: "Tema",
    age: "Usia",
    acts: "Aktivitas (pilih satu atau lebih)",
    perAct: "Lembar per aktivitas",
    each: "(1 – 10 tiap)",
    generate: "Buat lembar kerja",
    generating: "Membuat…",
    ready: (n) => `${n} lembar siap`,
    preview: "Pratinjau",
    emptyHint: "Pilih opsi di kiri, lalu tekan Buat.",
    noneTitle: "Belum ada lembar",
    noneBody: "Pilih tema, usia, dan aktivitas — lalu klik Buat lembar kerja.",
    dlPack: "Unduh paket (PDF)",
    print: "Cetak",
    clear: "Hapus",
    building: "Membuat PDF…",
    done: "Terunduh",
    pdfErr: "Gagal membuat PDF",
    genToast: (n) => `Dibuat ${n} lembar`,
    svgToast: "SVG terunduh",
    packName: (t, a) => `Paket ${t} · Usia ${a}`,
    regen: "Buat ulang",
    remove: "Hapus",
  },
  en: {
    build: "Build a worksheet pack",
    hint: "Pick a theme, choose an age, then select one or more activities.",
    theme: "Theme",
    age: "Age range",
    acts: "Activities (select one or more)",
    perAct: "Sheets per activity",
    each: "(1 – 10 each)",
    generate: "Generate worksheets",
    generating: "Generating…",
    ready: (n) => `${n} worksheet${n === 1 ? "" : "s"} ready`,
    preview: "Preview",
    emptyHint: "Pick your options on the left and hit Generate.",
    noneTitle: "No worksheets yet",
    noneBody: "Choose a theme, age, and one or more activities — then click Generate.",
    dlPack: "Download pack (PDF)",
    print: "Print",
    clear: "Clear",
    building: "Building PDF…",
    done: "Downloaded",
    pdfErr: "Could not build PDF",
    genToast: (n) => `Generated ${n} worksheet${n === 1 ? "" : "s"}`,
    svgToast: "SVG downloaded",
    packName: (t, a) => `${t} pack · Ages ${a}`,
    regen: "Regenerate this sheet",
    remove: "Remove this sheet",
  },
};

export function ActivityGenerator({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  const [themeId, setThemeId] = useState("dinosaurs");
  const [ageId, setAgeId] = useState("5-6");
  const [activityTypeIds, setActivityTypeIds] = useState<string[]>([
    "maze",
    "tracing",
    "coloring",
  ]);
  const [count, setCount] = useState(1);
  const [worksheets, setWorksheets] = useState<Worksheet[]>([]);
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2400);
  }

  function toggleActivity(id: string) {
    setActivityTypeIds((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // never empty
        return prev.filter((a) => a !== id);
      }
      return [...prev, id];
    });
  }

  function packName() {
    return t.packName(getTheme(themeId).label, getAgeRange(ageId).label);
  }

  async function pagesFor(theme: string, activities: string[]) {
    if (activities.includes("coloring") && hasColoringPages(theme)) {
      return loadColoringPages(theme);
    }
    return [];
  }

  async function handleGenerate() {
    setBusy(true);
    try {
      const pages = await pagesFor(themeId, activityTypeIds);
      const sheets: Worksheet[] = [];
      for (let i = 0; i < count; i++) {
        for (const aid of activityTypeIds) {
          sheets.push(
            generateWorksheet({
              themeId,
              ageId,
              activityTypeId: aid,
              seed: randomSeed(),
              coloringPages: aid === "coloring" ? pages : undefined,
            })
          );
        }
      }
      setWorksheets(sheets);
      showToast(t.genToast(sheets.length));
      if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) {
        setTimeout(() => previewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
      }
    } finally {
      setBusy(false);
    }
  }

  async function handleRegenerate(w: Worksheet) {
    const pages = await pagesFor(w.themeId, [w.activityTypeId]);
    const fresh = generateWorksheet({
      themeId: w.themeId,
      ageId: w.ageId,
      activityTypeId: w.activityTypeId,
      seed: randomSeed(),
      coloringPages: w.activityTypeId === "coloring" ? pages : undefined,
    });
    setWorksheets((prev) => prev.map((x) => (x.id === w.id ? fresh : x)));
  }

  function handleRemove(w: Worksheet) {
    setWorksheets((prev) => prev.filter((x) => x.id !== w.id));
  }

  async function handleDownloadAll() {
    if (!worksheets.length) return;
    showToast(t.building);
    try {
      await downloadPackPdf(worksheets, packName());
      showToast(t.done);
    } catch (err) {
      console.error(err);
      showToast(t.pdfErr);
    }
  }

  async function handleDownloadPdf(w: Worksheet) {
    showToast(t.building);
    try {
      await downloadWorksheetPdf(w);
      showToast(t.done);
    } catch (err) {
      console.error(err);
      showToast(t.pdfErr);
    }
  }

  function handleDownloadSvg(w: Worksheet) {
    downloadSvg(w);
    showToast(t.svgToast);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
      {/* ── Controls ── */}
      <aside className="activity-print-hide h-fit rounded-[24px] border border-hairline bg-paper p-6 lg:sticky lg:top-24">
        <h2 className="font-display text-[19px] font-semibold text-ink">{t.build}</h2>
        <p className="mt-1 text-[13.5px] leading-relaxed text-whisper">{t.hint}</p>

        <Field label={t.theme}>
          <div className="flex flex-wrap gap-2" role="radiogroup">
            {THEMES.map((opt) => (
              <Chip
                key={opt.id}
                icon={opt.icon}
                label={opt.label}
                selected={themeId === opt.id}
                role="radio"
                onClick={() => setThemeId(opt.id)}
              />
            ))}
          </div>
        </Field>

        <Field label={t.age}>
          <div className="flex flex-wrap gap-2" role="radiogroup">
            {AGE_RANGES.map((opt) => (
              <Chip
                key={opt.id}
                label={opt.label}
                selected={ageId === opt.id}
                role="radio"
                onClick={() => setAgeId(opt.id)}
              />
            ))}
          </div>
        </Field>

        <Field label={t.acts}>
          <div className="flex flex-wrap gap-2" role="group">
            {ACTIVITY_TYPES.map((opt) => (
              <Chip
                key={opt.id}
                icon={opt.icon}
                label={opt.label}
                selected={activityTypeIds.includes(opt.id)}
                role="checkbox"
                onClick={() => toggleActivity(opt.id)}
              />
            ))}
          </div>
        </Field>

        <Field label={t.perAct}>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min={1}
              max={10}
              value={count}
              aria-label={t.perAct}
              onChange={(e) => {
                const v = Math.min(10, Math.max(1, parseInt(e.target.value || "1", 10)));
                setCount(Number.isNaN(v) ? 1 : v);
              }}
              className="w-20 rounded-xl border border-hairline bg-paper-2 px-3 py-2 text-[15px] text-ink outline-none focus:border-sage"
            />
            <span className="text-[13px] text-whisper">{t.each}</span>
          </div>
        </Field>

        <button
          type="button"
          onClick={handleGenerate}
          disabled={busy}
          className="tap mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brave px-4 py-3 text-[15px] font-semibold text-white shadow-sm transition hover:bg-brave-deep disabled:opacity-60"
        >
          <span aria-hidden>✨</span>
          <span>{busy ? t.generating : t.generate}</span>
        </button>
      </aside>

      {/* ── Preview ── */}
      <section ref={previewRef} aria-live="polite">
        <div className="activity-print-hide mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-[20px] font-semibold text-ink">
              {worksheets.length ? t.ready(worksheets.length) : t.preview}
            </h2>
            <p className="mt-0.5 text-[13.5px] text-whisper">
              {worksheets.length ? packName() : t.emptyHint}
            </p>
          </div>
          {worksheets.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleDownloadAll}
                className="tap flex items-center gap-1.5 rounded-full bg-brave px-3.5 py-2 text-[13.5px] font-semibold text-white hover:bg-brave-deep"
              >
                <span aria-hidden>⬇</span>
                <span>{t.dlPack}</span>
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="tap rounded-full border border-hairline bg-paper px-3.5 py-2 text-[13.5px] font-semibold text-ink hover:bg-paper-2"
              >
                🖨 {t.print}
              </button>
              <button
                type="button"
                onClick={() => setWorksheets([])}
                className="tap rounded-full px-3 py-2 text-[13.5px] font-semibold text-whisper hover:text-ink"
              >
                {t.clear}
              </button>
            </div>
          )}
        </div>

        {worksheets.length === 0 ? (
          <div className="activity-print-hide flex flex-col items-center justify-center rounded-[24px] border border-dashed border-hairline bg-paper-2 px-6 py-20 text-center">
            <div className="text-4xl" aria-hidden>
              📚
            </div>
            <div className="mt-3 font-display text-[17px] font-semibold text-ink">{t.noneTitle}</div>
            <p className="mt-1 max-w-xs text-[13.5px] leading-relaxed text-whisper">{t.noneBody}</p>
          </div>
        ) : (
          <div id="activity-print" className="grid gap-5 sm:grid-cols-2">
            {worksheets.map((w) => (
              <article
                key={w.id}
                className="activity-sheet flex flex-col overflow-hidden rounded-[20px] border border-hairline bg-paper"
              >
                <div className="activity-card-chrome flex items-center justify-between gap-2 px-4 pt-4">
                  <div className="flex items-center gap-1.5 text-[14px] font-semibold text-ink">
                    <span aria-hidden>{w.activityTypeIcon}</span>
                    <span>{w.title}</span>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-sage-soft px-2 py-0.5 text-[10.5px] font-semibold text-sage-deep">
                    {locale === "id" ? "Usia" : "Ages"} {w.ageLabel}
                  </span>
                </div>

                <div className="px-4 pt-3 activity-sheet-art">
                  <div
                    className="aspect-[210/297] w-full overflow-hidden rounded-lg border border-hairline bg-white"
                    dangerouslySetInnerHTML={{ __html: w.svg }}
                  />
                </div>

                <div className="activity-card-chrome mt-auto flex items-center gap-2 px-4 py-4">
                  <button
                    type="button"
                    onClick={() => handleDownloadPdf(w)}
                    className="tap flex items-center gap-1 rounded-full bg-brave px-3 py-1.5 text-[13px] font-semibold text-white hover:bg-brave-deep"
                  >
                    <span aria-hidden>⬇</span> PDF
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownloadSvg(w)}
                    className="tap rounded-full border border-hairline bg-paper px-3 py-1.5 text-[13px] font-semibold text-ink hover:bg-paper-2"
                  >
                    SVG
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRegenerate(w)}
                    title={t.regen}
                    aria-label={t.regen}
                    className="tap ml-auto rounded-full px-2.5 py-1.5 text-[15px] text-whisper hover:text-ink"
                  >
                    ↻
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemove(w)}
                    title={t.remove}
                    aria-label={t.remove}
                    className="tap rounded-full px-2.5 py-1.5 text-[15px] text-whisper hover:text-ink"
                  >
                    ✕
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          className="activity-print-hide fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-[13.5px] font-medium text-paper shadow-lg md:bottom-8"
        >
          {toast}
        </div>
      )}

      {/* Print: show only the worksheet art, one sheet per page */}
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #activity-print, #activity-print * { visibility: visible !important; }
          #activity-print {
            position: absolute; left: 0; top: 0; width: 100%;
            display: block !important;
          }
          #activity-print .activity-card-chrome { display: none !important; }
          #activity-print .activity-sheet {
            break-inside: avoid; page-break-after: always;
            border: 0 !important; border-radius: 0 !important; padding: 0 !important;
          }
          #activity-print .activity-sheet-art { padding: 0 !important; }
          #activity-print .activity-sheet-art > div {
            border: 0 !important; border-radius: 0 !important; aspect-ratio: auto !important;
          }
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.1em] text-whisper">
        {label}
      </label>
      {children}
    </div>
  );
}

function Chip({
  icon,
  label,
  selected,
  role,
  onClick,
}: {
  icon?: string;
  label: string;
  selected: boolean;
  role: "radio" | "checkbox";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role={role}
      aria-checked={selected}
      onClick={onClick}
      className={[
        "tap inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[13.5px] font-medium transition",
        selected
          ? "border-brave bg-brave-soft text-brave-deep"
          : "border-hairline bg-paper text-ink hover:bg-paper-2",
      ].join(" ")}
    >
      {icon && <span aria-hidden>{icon}</span>}
      <span>{label}</span>
    </button>
  );
}
