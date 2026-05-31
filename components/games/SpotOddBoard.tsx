"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/games/poses";
import {
  SPOT_ODD_LEVELS,
  type SpotOddLevel,
  type SpotOddPuzzle,
} from "@/lib/games/spot-odd";
import { PoseImg } from "@/components/games/PoseImg";
import { GameShare } from "@/components/games/GameShare";

export function SpotOddBoard({
  locale,
  puzzle,
  shareUrl,
}: {
  locale: Locale;
  puzzle: SpotOddPuzzle;
  shareUrl: string;
}) {
  const [level, setLevel] = useState<SpotOddLevel>(SPOT_ODD_LEVELS[0]!);
  const total = level.cols * level.rows;

  const [oddIndex, setOddIndex] = useState(0);
  const [won, setWon] = useState(false);
  const [wrong, setWrong] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [round, setRound] = useState(0);

  // (Re)seed the odd position after mount and on every replay / level change.
  // Seeding after mount (not during render) keeps SSR + hydration in sync.
  useEffect(() => {
    setOddIndex(Math.floor(Math.random() * total));
    setWon(false);
    setWrong(null);
    setElapsed(0);
  }, [total, round]);

  useEffect(() => {
    if (won) return;
    const timer = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(timer);
  }, [won, round, total]);

  const handlePick = useCallback(
    (i: number) => {
      if (won) return;
      if (i === oddIndex) {
        setWon(true);
      } else {
        setWrong(i);
        setTimeout(() => setWrong((w) => (w === i ? null : w)), 450);
      }
    },
    [won, oddIndex],
  );

  const cells = useMemo(() => Array.from({ length: total }, (_, i) => i), [total]);

  const mm = Math.floor(elapsed / 60);
  const ss = (elapsed % 60).toString().padStart(2, "0");
  const timeLabel = `${mm}:${ss}`;

  const shareText =
    locale === "id"
      ? `Aku menemukan Baby Mo yang beda dalam ${timeLabel}! Bisa lebih cepat?`
      : `I spotted the odd Baby Mo in ${timeLabel}! Can you beat that?`;

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Level selector + timer */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-hairline bg-paper p-1">
          {SPOT_ODD_LEVELS.map((lv) => (
            <button
              key={lv.key}
              type="button"
              onClick={() => setLevel(lv)}
              aria-pressed={lv.key === level.key}
              className={`tap rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                lv.key === level.key
                  ? "bg-sage text-paper"
                  : "text-whisper hover:text-ink"
              }`}
            >
              {t(lv.label, locale)}
            </button>
          ))}
        </div>
        <span className="rounded-full bg-sage-soft px-4 py-1.5 text-sm font-semibold text-sage-deep">
          ⏱️ {timeLabel}
        </span>
      </div>

      {/* Grid */}
      <div
        className="grid gap-1.5 rounded-3xl border border-hairline bg-paper-2 p-3 shadow-sm sm:gap-2 sm:p-4"
        style={{ gridTemplateColumns: `repeat(${level.cols}, minmax(0, 1fr))` }}
        role="grid"
        aria-label={t(puzzle.title, locale)}
      >
        {cells.map((i) => {
          const isOdd = i === oddIndex;
          const reveal = won && isOdd;
          return (
            <button
              key={i}
              type="button"
              onClick={() => handlePick(i)}
              aria-label={
                isOdd
                  ? locale === "id"
                    ? "Baby Mo yang berbeda"
                    : "The odd Baby Mo"
                  : "Baby Mo"
              }
              className={`tap aspect-square rounded-xl p-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sage active:scale-95 ${
                wrong === i ? "bg-clay-soft" : "hover:bg-paper"
              } ${reveal ? "bg-sage-soft ring-2 ring-sage" : ""}`}
            >
              <PoseImg
                file={isOdd ? puzzle.oddFile : puzzle.baseFile}
                alt="Baby Mo"
                className="h-full w-full object-contain"
              />
            </button>
          );
        })}
      </div>

      {/* Win panel */}
      {won && (
        <div className="mt-6 rounded-3xl border border-hairline bg-sage-soft/60 p-6 text-center shadow-sm">
          <p className="font-serif text-2xl font-semibold text-ink">
            {locale === "id" ? "Hebat! 🎉" : "Great job! 🎉"}
          </p>
          <p className="mt-1 text-whisper">
            {locale === "id"
              ? "Kamu menemukan Baby Mo yang berbeda dalam "
              : "You found the odd Baby Mo in "}
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
