"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { Locale } from "@/lib/i18n/config";
import {
  MASCOT_LINES,
  getMascotIndex,
  subscribeMascot,
} from "./mascot-store";

type Props = { locale: Locale };

/**
 * A small speech bubble near the mascot. It FOLLOWS the pose: MascotPoses
 * publishes the current index to the shared store, and this bubble shows
 * the line paired with whatever pose is on screen — so the words always
 * match (e.g. the "wow" pose says "Wow… MashaAllah!"). Swaps with a soft
 * fade. Server-renders nothing (index is -1) → no hydration mismatch.
 */
export function MascotGreeting({ locale }: Props) {
  const current = useSyncExternalStore(
    subscribeMascot,
    getMascotIndex,
    () => -1,
  );
  const [shown, setShown] = useState(-1);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (current < 0) return;
    if (shown < 0) {
      setShown(current); // first line — appear immediately
      return;
    }
    if (current === shown) return;
    // fade out, swap text, fade back in — in step with the pose crossfade
    setVisible(false);
    const t = setTimeout(() => {
      setShown(current);
      setVisible(true);
    }, 300);
    return () => clearTimeout(t);
  }, [current, shown]);

  if (shown < 0) return null;

  return (
    <div
      aria-live="polite"
      className="pointer-events-none absolute left-0 top-[6%] z-10 sm:left-2"
    >
      <div
        className={`relative max-w-[15rem] rounded-2xl rounded-br-sm border border-hairline bg-paper px-3.5 py-2 text-[13px] font-semibold text-ink shadow-[0_8px_24px_-10px_rgba(15,18,19,0.3)] transition-all duration-300 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        {MASCOT_LINES[shown]!.text[locale]}
        {/* tail on the right, pointing down toward Baby Mo (who sits to the right) */}
        <span className="absolute -bottom-1.5 right-4 h-3 w-3 rotate-45 border-b border-r border-hairline bg-paper" />
      </div>
    </div>
  );
}
