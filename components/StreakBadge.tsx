"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { recordVisit, onStreakChange, type Streak } from "@/lib/streak";

type Props = { locale: Locale };

/**
 * Tiny daily-learning streak chip. Records today's visit on mount and shows a
 * flame with the current day count. Renders nothing until mounted to avoid a
 * hydration mismatch (the streak only exists in the browser).
 */
export function StreakBadge({ locale }: Props) {
  const [streak, setStreak] = useState<Streak | null>(null);

  useEffect(() => {
    setStreak(recordVisit());
    return onStreakChange(() => setStreak(recordVisit()));
  }, []);

  if (!streak) return null;

  const label =
    streak.count <= 1
      ? locale === "id"
        ? "Mulai streak belajar hari ini!"
        : "Start your learning streak today!"
      : locale === "id"
        ? `${streak.count} hari berturut-turut belajar`
        : `${streak.count}-day learning streak`;

  return (
    <span
      title={
        locale === "id"
          ? `Rekor terbaik: ${streak.best} hari`
          : `Best: ${streak.best} days`
      }
      className="inline-flex items-center gap-1.5 rounded-full border border-clay/30 bg-clay-soft px-3 py-1.5 text-[12.5px] font-semibold text-clay"
    >
      <span aria-hidden className="text-[14px]">🔥</span>
      {label}
    </span>
  );
}
