"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";

const KEY = "babymo.theme";

type Props = { locale: Locale };

/**
 * Light/dark theme toggle. Moon icon in light mode (tap → dark),
 * sun icon in dark mode (tap → light). Persists choice in
 * localStorage; the no-flash script in layout reads it on load.
 */
export function ThemeToggle({ locale }: Props) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(KEY, next ? "dark" : "light");
    } catch {
      /* storage blocked — toggle still works for the session */
    }
  }

  const label = dark
    ? locale === "id" ? "Mode terang" : "Light mode"
    : locale === "id" ? "Mode gelap" : "Dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="tap flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-paper/60 text-ink-soft transition hover:border-brave/40 hover:text-brave-deep"
    >
      {/* Until mounted, render the moon (matches default light mode) */}
      {mounted && dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}
