"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";

/** Inline WhatsApp + copy-link + native-share row for game win / result panels. */
export function GameShare({
  locale,
  url,
  text,
}: {
  locale: Locale;
  url: string;
  text: string;
}) {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  // Reveal the native-share button only after mount — navigator is undefined
  // during SSR, so checking it inline would cause a hydration mismatch.
  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && "share" in navigator);
  }, []);

  const waHref = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;

  async function handleNativeShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "Baby Mo", text, url });
      } catch {
        /* dismissed */
      }
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked */
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5">
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="tap rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
      >
        {locale === "id" ? "Bagikan ke WhatsApp" : "Share to WhatsApp"}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className="tap rounded-full border border-hairline bg-paper px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:bg-paper-2"
      >
        {copied
          ? locale === "id"
            ? "Tautan disalin! ✓"
            : "Link copied! ✓"
          : locale === "id"
            ? "Salin tautan"
            : "Copy link"}
      </button>
      {canNativeShare && (
        <button
          type="button"
          onClick={handleNativeShare}
          className="tap rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:brightness-105"
        >
          {locale === "id" ? "Bagikan…" : "Share…"}
        </button>
      )}
    </div>
  );
}
