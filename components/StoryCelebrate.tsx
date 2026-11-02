"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/config";

type Props = {
  locale: Locale;
  poseSrc: string;
  nextStory: { href: string; title: string } | null;
};

const BITS = ["⭐", "✨", "🌟", "💛", "⭐", "✨", "🌙", "⭐", "💫", "🌟", "✨", "⭐"];

/**
 * End-of-story moment: when the reader reaches the end, stars burst and
 * Baby Mo cheers. No points, no streaks — just a happy full stop and a
 * nudge to the next story. Confetti is skipped with reduced motion.
 */
export function StoryCelebrate({ locale, poseSrc, nextStory }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [done, setDone] = useState(false);
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setDone(true);
          const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
          if (!reduce) setBurst(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const id = locale === "id";
  return (
    <div ref={ref} className={`story-done relative mt-12 ${done ? "is-done" : ""}`}>
      {burst && (
        <div className="story-confetti" aria-hidden>
          {BITS.map((b, i) => (
            <span key={i} style={{ ["--i" as string]: i, ["--x" as string]: `${(i * 37) % 100}%` }}>
              {b}
            </span>
          ))}
        </div>
      )}
      <div className="story-done-card sec-cerita flex flex-col items-center gap-3 rounded-[28px] px-6 py-8 text-center sm:flex-row sm:text-left">
        <img src={poseSrc} alt="" width={120} height={120} className="story-done-pose h-[104px] w-[104px] select-none object-contain" draggable={false} />
        <div className="flex-1">
          <p className="font-display text-[26px] leading-tight text-ink">
            {id ? "Masya Allah, ceritanya selesai! ⭐" : "Masha Allah, you finished the story! ⭐"}
          </p>
          <p className="mt-1 text-[15px] text-ink-soft">
            {id ? "Hebat! Sekarang coba ceritakan lagi ke Umi atau Abi dengan kata-katamu sendiri." : "Well done! Now try telling it back to Umi or Abi in your own words."}
          </p>
          {nextStory && (
            <Link href={nextStory.href} className="sec-btn tap mt-4 inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[14px] font-bold">
              📖 {id ? "Cerita berikutnya:" : "Next story:"} {nextStory.title} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
