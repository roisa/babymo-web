"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";

type Props = { locale: Locale };

const GREETINGS: Record<Locale, string[]> = {
  id: [
    "Assalamu'alaikum! 👋",
    "Yuk baca doa hari ini! 🤲",
    "Sudah sholat belum? 🕌",
    "Bismillah dulu ya! 😊",
    "Hari yang berkah! ✨",
    "Semangat belajar! 📖",
    "Jangan lupa senyum! 😄",
    "MasyaAllah, hebat! 🌟",
    "Yuk, main sambil belajar! 🧩",
    "Sayang Allah, sayang keluarga ❤️",
  ],
  en: [
    "Assalamu'alaikum! 👋",
    "Let's read today's du'a! 🤲",
    "Have you prayed yet? 🕌",
    "Say Bismillah first! 😊",
    "A blessed day! ✨",
    "Happy learning! 📖",
    "Don't forget to smile! 😄",
    "MashaAllah, awesome! 🌟",
    "Let's play and learn! 🧩",
    "Love Allah, love family ❤️",
  ],
};

/**
 * A small speech bubble near the mascot that shows a random Baby Mo
 * greeting and gently cycles through more every few seconds. Picks
 * the first message at random on mount (client-only — avoids SSR
 * hydration mismatch), then rotates with a soft fade.
 */
export function MascotGreeting({ locale }: Props) {
  const list = GREETINGS[locale];
  const [idx, setIdx] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // random start
    setIdx(Math.floor(Math.random() * list.length));
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // pick one and stay

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => ((i ?? 0) + 1) % list.length);
        setVisible(true);
      }, 350);
    }, 4200);
    return () => clearInterval(interval);
  }, [list.length]);

  if (idx === null) return null;

  return (
    <div
      aria-live="polite"
      className="pointer-events-none absolute left-0 top-[6%] z-10 sm:left-2"
    >
      <div
        className={`relative rounded-2xl rounded-bl-sm border border-hairline bg-paper px-3.5 py-2 text-[13px] font-semibold text-ink shadow-[0_8px_24px_-10px_rgba(15,18,19,0.3)] transition-all duration-300 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        {list[idx]}
        {/* little tail on the left, pointing down toward Baby Mo */}
        <span className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 border-b border-l border-hairline bg-paper" />
      </div>
    </div>
  );
}
