"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Add this class when the element scrolls into view. Default 'in'. */
  className?: string;
  /** If true, animate every direct child sequentially (uses .reveal-stagger). */
  stagger?: boolean;
  /** Trigger only once (default true) or every time it scrolls into view */
  once?: boolean;
  /** Intersection threshold (0–1). Default 0.1. */
  threshold?: number;
};

/**
 * Wraps children with a CSS class that's toggled when they scroll into view.
 * The actual animation is defined in globals.css (.reveal / .reveal-stagger).
 * Server-rendered children remain SEO-perfect; only the wrapper is client.
 */
export function Reveal({
  children,
  className,
  stagger,
  once = true,
  threshold = 0.1,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Respect reduced motion: show immediately.
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  const base = stagger ? "reveal-stagger" : "reveal";
  const cls = `${base} ${shown ? "in" : ""} ${className ?? ""}`.trim();

  return (
    <div ref={ref} className={cls}>
      {children}
    </div>
  );
}
