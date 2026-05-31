"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/games/poses";
import {
  SPOT_DIFF_LEVELS,
  isAsymmetric,
  type SpotDiffLevel,
  type SpotDiffPuzzle,
} from "@/lib/games/spot-difference";
import { PoseImg } from "@/components/games/PoseImg";
import { GameShare } from "@/components/games/GameShare";

interface Cell {
  file: string;
  flip: boolean;
}

interface Layout {
  left: Cell[];
  right: Cell[];
  diffs: number[];
}

function seedFromString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function makeRng(seed: number): () => number {
  let s = seed || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return ((s >>> 0) % 100000) / 100000;
  };
}

function pick(pool: string[], rng: () => number): string {
  return pool[Math.floor(rng() * pool.length)] ?? pool[0] ?? "";
}

function buildLayout(
  pool: string[],
  level: SpotDiffLevel,
  rng: () => number,
): Layout {
  const total = level.cols * level.rows;
  const left: Cell[] = Array.from({ length: total }, () => ({
    file: pick(pool, rng),
    flip: false,
  }));

  // Pick distinct difference indices.
  const diffs: number[] = [];
  const wanted = Math.min(level.diffs, total);
  let guard = 0;
  while (diffs.length < wanted && guard < total * 20) {
    const idx = Math.floor(rng() * total);
    if (!diffs.includes(idx)) diffs.push(idx);
    guard++;
  }

  const right: Cell[] = left.map((c) => ({ ...c }));
  for (const d of diffs) {
    const base = left[d]!;
    // Only use a flip when the pose is one-sided enough for the mirror to be
    // obvious; otherwise the difference would be unfindable. Symmetric poses
    // always fall back to a guaranteed-visible pose swap.
    if (rng() < 0.35 && isAsymmetric(base.file)) {
      right[d] = { file: base.file, flip: !base.flip };
    } else {
      // Swap to a different pose.
      let replacement = base.file;
      let tries = 0;
      while (replacement === base.file && tries < 12) {
        replacement = pick(pool, rng);
        tries++;
      }
      right[d] = { file: replacement, flip: false };
    }
  }
  return { left, right, diffs };
}

export function SpotDifferenceBoard({
  locale,
  puzzle,
  shareUrl,
}: {
  locale: Locale;
  puzzle: SpotDiffPuzzle;
  shareUrl: string;
}) {
  const [level, setLevel] = useState<SpotDiffLevel>(SPOT_DIFF_LEVELS[0]!);
  const [round, setRound] = useState(0);

  // Deterministic first render (SSR + hydration match); randomise after.
  const initial = useMemo(
    () => buildLayout(puzzle.pool, level, makeRng(seedFromString(puzzle.slug))),
    [puzzle.pool, puzzle.slug, level],
  );
  const [layout, setLayout] = useState<Layout>(initial);
  const [found, setFound] = useState<number[]>([]);
  const [wrong, setWrong] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);

  // Reset to the deterministic layout when the level changes.
  useEffect(() => {
    setLayout(initial);
    setFound([]);
    setElapsed(0);
  }, [initial]);

  // Randomise on replay (round > 0).
  useEffect(() => {
    if (round === 0) return;
    setLayout(buildLayout(puzzle.pool, level, makeRng((Date.now() ^ round) >>> 0)));
    setFound([]);
    setElapsed(0);
  }, [round, puzzle.pool, level]);

  const won = found.length === layout.diffs.length && layout.diffs.length > 0;

  useEffect(() => {
    if (won) return;
    const timer = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(timer);
  }, [won, round, level]);

  const handlePick = useCallback(
    (i: number, panel: "l" | "r") => {
      if (won) return;
      if (layout.diffs.includes(i)) {
        setFound((f) => (f.includes(i) ? f : [...f, i]));
      } else {
        const id = `${panel}-${i}`;
        setWrong(id);
        setTimeout(() => setWrong((w) => (w === id ? null : w)), 400);
      }
    },
    [won, layout.diffs],
  );

  const mm = Math.floor(elapsed / 60);
  const ss = (elapsed % 60).toString().padStart(2, "0");
  const timeLabel = `${mm}:${ss}`;

  const shareText =
    locale === "id"
      ? `Aku menemukan semua perbedaan Baby Mo dalam ${timeLabel}! Coba kamu!`
      : `I found every Baby Mo difference in ${timeLabel}! Your turn!`;

  function panel(cells: Cell[], side: "l" | "r", title: string) {
    return (
      <div className="flex-1">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-whisper">
          {title}
        </p>
        <div
          className="grid gap-1 rounded-2xl border border-hairline bg-paper-2 p-2 shadow-sm sm:gap-1.5 sm:p-3"
          style={{ gridTemplateColumns: `repeat(${level.cols}, minmax(0, 1fr))` }}
        >
          {cells.map((c, i) => {
            const isFound = found.includes(i);
            const id = `${side}-${i}`;
            return (
              <button
                key={i}
                type="button"
                onClick={() => handlePick(i, side)}
                aria-label="Baby Mo"
                className={`tap aspect-square rounded-lg p-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sage active:scale-95 ${
                  wrong === id ? "bg-clay-soft" : "hover:bg-paper"
                } ${isFound ? "bg-sage-soft ring-2 ring-sage" : ""}`}
              >
                <PoseImg
                  file={c.file}
                  alt="Baby Mo"
                  flip={c.flip}
                  className="h-full w-full object-contain"
                />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-hairline bg-paper p-1">
          {SPOT_DIFF_LEVELS.map((lv) => (
            <button
              key={lv.key}
              type="button"
              onClick={() => {
                setLevel(lv);
                setRound(0);
              }}
              aria-pressed={lv.key === level.key}
              className={`tap rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                lv.key === level.key ? "bg-sage text-paper" : "text-whisper hover:text-ink"
              }`}
            >
              {t(lv.label, locale)}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-clay-soft px-4 py-1.5 text-sm font-semibold text-ink">
            {locale === "id" ? "Ditemukan" : "Found"} {found.length}/{layout.diffs.length}
          </span>
          <span className="rounded-full bg-sage-soft px-4 py-1.5 text-sm font-semibold text-sage-deep">
            ⏱️ {timeLabel}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        {panel(layout.left, "l", locale === "id" ? "Panel Kiri" : "Left Panel")}
        {panel(layout.right, "r", locale === "id" ? "Panel Kanan" : "Right Panel")}
      </div>

      {won && (
        <div className="mt-6 rounded-3xl border border-hairline bg-sage-soft/60 p-6 text-center shadow-sm">
          <p className="font-serif text-2xl font-semibold text-ink">
            {locale === "id" ? "Semua ketemu! 🎉" : "All found! 🎉"}
          </p>
          <p className="mt-1 text-whisper">
            {locale === "id"
              ? "Kamu menemukan semua perbedaan dalam "
              : "You found every difference in "}
            <strong className="text-ink">{timeLabel}</strong>.
          </p>
          <div className="mt-4 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={() => setRound((r) => r + 1)}
              className="tap rounded-full bg-sage px-6 py-3 text-base font-semibold text-paper shadow transition hover:bg-sage-deep"
            >
              {locale === "id" ? "Main Lagi 🔁" : "Play Again 🔁"}
            </button>
            <GameShare locale={locale} url={shareUrl} text={shareText} />
          </div>
        </div>
      )}
    </div>
  );
}
