"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { type Locale, pathFor } from "@/lib/i18n/config";
import type { ResolvedStep } from "@/lib/content/paths";
import { getDoneSteps, toggleStep, onPathsChange } from "@/lib/path-progress";

type Props = {
  locale: Locale;
  pathSlug: string;
  steps: ResolvedStep[];
};

/**
 * Ordered, checkable step list for a Learning Path. Each row links to the real
 * content page and has a circle the child/parent taps to mark it done; progress
 * persists in localStorage and drives the progress bar.
 */
export function PathProgress({ locale, pathSlug, steps }: Props) {
  const [done, setDone] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDone(getDoneSteps(pathSlug));
    return onPathsChange(() => setDone(getDoneSteps(pathSlug)));
  }, [pathSlug]);

  const completed = mounted ? steps.filter((s) => done.includes(s.id)).length : 0;
  const pct = steps.length ? Math.round((completed / steps.length) * 100) : 0;
  const allDone = mounted && completed === steps.length && steps.length > 0;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-mist">
          <div
            className="h-full rounded-full bg-brave transition-[width] duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="shrink-0 text-[12.5px] font-semibold text-whisper" aria-live="polite">
          {completed}/{steps.length}
        </span>
      </div>

      {allDone && (
        <p className="mb-6 rounded-2xl border border-brave/20 bg-brave-soft px-4 py-3 text-[13.5px] font-semibold text-brave-deep">
          {locale === "id"
            ? "🎉 Masya Allah! Jalur ini selesai."
            : "🎉 Masha Allah! You finished this path."}
        </p>
      )}

      <ol className="space-y-3">
        {steps.map((step, i) => {
          const isDone = mounted && done.includes(step.id);
          return (
            <li
              key={step.id}
              className="flex items-center gap-3 rounded-2xl border border-mist bg-paper p-3 transition hover:border-sage/40"
            >
              <button
                type="button"
                onClick={() => setDone(() => (toggleStep(pathSlug, step.id), getDoneSteps(pathSlug)))}
                aria-pressed={isDone}
                aria-label={
                  isDone
                    ? locale === "id" ? "Tandai belum selesai" : "Mark as not done"
                    : locale === "id" ? "Tandai selesai" : "Mark as done"
                }
                className={
                  isDone
                    ? "tap flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brave text-paper"
                    : "tap flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-mist text-whisper hover:border-brave/50"
                }
              >
                {isDone ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="m5 12.5 4.5 4.5L19 7" />
                  </svg>
                ) : (
                  <span className="text-[13px] font-semibold">{i + 1}</span>
                )}
              </button>
              <Link href={pathFor(locale, step.href)} className="min-w-0 flex-1">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-sage-deep">
                  {step.kind}
                </span>
                <span className={`block truncate text-[15px] font-medium ${isDone ? "text-whisper line-through" : "text-ink"}`}>
                  {step.title}
                </span>
              </Link>
              <Link
                href={pathFor(locale, step.href)}
                className="shrink-0 text-whisper transition hover:text-ink"
                aria-hidden
                tabIndex={-1}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
