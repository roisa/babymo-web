"use client";

import { useState } from "react";

type Props = {
  text: string;
  label: string;
  copiedLabel: string;
};

export function CopyButton({ text, label, copiedLabel }: Props) {
  const [copied, setCopied] = useState(false);

  async function onClick() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked — fail silently, button stays in initial state
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-live="polite"
      className="tap inline-flex items-center gap-2 rounded-full border border-hairline bg-paper px-3.5 py-2 text-[13px] font-semibold text-ink-soft transition hover:border-sage/40"
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="m5 12 5 5L20 7" />
          </svg>
          {copiedLabel}
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" />
          </svg>
          {label}
        </>
      )}
    </button>
  );
}
