"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";

type Props = {
  locale: Locale;
  title: string;
  text?: string;
  url: string;
};

/**
 * Floating share bar for article-level pages on mobile.
 *
 * Appears after the user has scrolled past the hero, hides at the very
 * top and footer. Native Web Share API on iOS/Android; clipboard
 * fallback elsewhere. Desktop hides entirely — the inline copy button
 * already handles desktop.
 */
export function ShareBar({ locale, title, text, url }: Props) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const nearBottom = y + window.innerHeight > doc.scrollHeight - 320;
      setVisible(y > 360 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Build a short, interesting share message: a 1-line hook + URL.
  // Long bodies (e.g. a catatan takeaway) collapse to their first
  // sentence — or a word-boundary cut — so the caption stays digestible
  // next to the link's rich preview instead of becoming a wall of text.
  const hook = makeHook(text, title);
  const waMessage = hook ? `${hook}\n\n${url}` : `${title}\n${url}`;
  const clipboardMessage = waMessage;

  async function onShare() {
    const shareData: ShareData = {
      title,
      text: hook ?? title,
      url,
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // user dismissed — no fallback needed
        return;
      }
    }
    try {
      await navigator.clipboard.writeText(clipboardMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — silent */
    }
  }

  const waUrl = `https://wa.me/?text=${encodeURIComponent(waMessage)}`;
  const labelShare = locale === "id" ? "Bagikan" : "Share";
  const labelCopied = locale === "id" ? "Tersalin" : "Copied";
  const labelWa = "WhatsApp";

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-16 z-30 flex justify-center px-4 transition md:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-hairline bg-paper/95 px-1.5 py-1.5 shadow-[0_10px_30px_-12px_rgba(15,18,19,0.35)] backdrop-blur">
        <button
          type="button"
          onClick={onShare}
          className="tap inline-flex items-center gap-1.5 rounded-full bg-sage-deep px-4 py-2 text-[13px] font-semibold text-paper"
        >
          {copied ? (
            <>
              <CheckIcon />
              {labelCopied}
            </>
          ) : (
            <>
              <ShareIcon />
              {labelShare}
            </>
          )}
        </button>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labelWa}
          className="tap inline-flex items-center gap-1.5 rounded-full bg-paper px-3.5 py-2 text-[13px] font-semibold text-ink-soft"
        >
          <WaIcon />
          {labelWa}
        </a>
      </div>
    </div>
  );
}

const HOOK_MAX = 120;

function makeHook(text: string | undefined, title: string): string | undefined {
  if (!text || text === title) return undefined;
  const t = text.trim();
  if (t.length <= HOOK_MAX) return t;
  const firstSentence = t.match(/^.*?[.!?](?=\s|$)/)?.[0]?.trim();
  if (firstSentence && firstSentence.length <= HOOK_MAX) return firstSentence;
  const cut = t.slice(0, HOOK_MAX);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : HOOK_MAX).trimEnd()}…`;
}

function ShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
      <path d="m16 6-4-4-4 4" />
      <path d="M12 2v14" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}
function WaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}
