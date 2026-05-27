"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Final number to count up to */
  to: number;
  /** Duration of the count animation in ms (default 1100) */
  duration?: number;
  /** Locale-aware number formatting */
  locale?: string;
};

/**
 * Counts up from 0 to `to` when the element scrolls into view.
 * The server-rendered initial value is the final number — so SEO + JS-off
 * users see "27" immediately. JS only animates the visual count-up.
 */
export function AnimatedCount({ to, duration = 1100, locale = "id" }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState(to);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const el = ref.current;
    if (!el) return;

    // Initial state: 0
    setN(0);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const elapsed = now - start;
              const t = Math.min(1, elapsed / duration);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - t, 3);
              setN(Math.round(to * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} aria-label={String(to)}>
      {n.toLocaleString(locale)}
    </span>
  );
}
