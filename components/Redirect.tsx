"use client";

import { useEffect } from "react";

/**
 * Client-side redirect used by the legacy /catatan pages after the section
 * was renamed to /cerita. On a static (GitHub Pages) host we can't issue a
 * 301, so we pair this with a <link rel="canonical"> + noindex in metadata
 * (crawlers follow the canonical) and replace() the URL for real visitors.
 */
export function Redirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <main
      id="main"
      className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center"
    >
      <p className="text-[15px] text-whisper">
        Halaman ini telah pindah ke{" "}
        <a href={to} className="font-semibold text-brave-deep underline">
          /cerita
        </a>
        .
      </p>
    </main>
  );
}
