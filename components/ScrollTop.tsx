"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";

/**
 * Floating "back to top" button. Appears once the reader has scrolled
 * past the fold and smooth-scrolls to the top on tap. Sits bottom-right,
 * above the mobile nav, and sits below it in the stacking order so the
 * nav always wins. Honors prefers-reduced-motion.
 */
export function ScrollTop({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toTop() {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  const label = locale === "id" ? "Kembali ke atas" : "Back to top";

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label={label}
      title={label}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-paper/95 text-ink-soft shadow-[0_10px_24px_-10px_rgba(15,18,19,0.4)] backdrop-blur transition hover:border-brave/40 hover:text-brave-deep lg:bottom-6 lg:right-6 lg:h-12 lg:w-12 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="m6 14 6-6 6 6" />
      </svg>
    </button>
  );
}
