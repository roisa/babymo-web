"use client";

import { useEffect, useState } from "react";
import { basePath } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";
import { SmoothScroll } from "./SmoothScroll";

type Props = { locale: Locale };

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const VISIT_KEY = "babymo.visits";
const DISMISS_KEY = "babymo.installDismissedAt";
const SHOW_AFTER_VISITS = 3;
const HIDE_FOR_DAYS = 14;

export function PwaBootstrap({ locale }: Props) {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);

  // 1. Register service worker (with one-shot legacy cleanup)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    // First: if a v1 kill-switch SW left old caches, the v2 SW activate
    // hook cleans those up. We just need to make sure the v2 SW is
    // registered. Use the basePath-aware URL.
    const swUrl = `${basePath}/sw.js`;
    const scope = `${basePath}/`;

    // Guard against double-registration thrashing in dev.
    navigator.serviceWorker
      .register(swUrl, { scope })
      .catch(() => {
        // SW registration is best-effort; site still works without it
      });
  }, []);

  // 2. Visit counter for install prompt heuristic
  useEffect(() => {
    try {
      const visits = parseInt(localStorage.getItem(VISIT_KEY) || "0", 10) + 1;
      localStorage.setItem(VISIT_KEY, String(visits));
    } catch {
      /* localStorage blocked — install prompt won't fire, that's fine */
    }
  }, []);

  // 3. Capture beforeinstallprompt + decide whether to show
  useEffect(() => {
    function dismissedRecently() {
      try {
        const ts = parseInt(localStorage.getItem(DISMISS_KEY) || "0", 10);
        if (!ts) return false;
        const days = (Date.now() - ts) / (1000 * 60 * 60 * 24);
        return days < HIDE_FOR_DAYS;
      } catch {
        return false;
      }
    }
    function enoughVisits() {
      try {
        return parseInt(localStorage.getItem(VISIT_KEY) || "0", 10) >= SHOW_AFTER_VISITS;
      } catch {
        return false;
      }
    }

    const handler = (e: Event) => {
      e.preventDefault();
      const evt = e as BeforeInstallPromptEvent;
      setDeferred(evt);
      if (!dismissedRecently() && enoughVisits()) {
        // Delay a beat so it doesn't jump in mid-paint
        setTimeout(() => setShow(true), 1200);
      }
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  async function onInstall() {
    if (!deferred) return;
    setShow(false);
    try {
      await deferred.prompt();
      await deferred.userChoice;
    } catch {
      /* user cancelled */
    }
    setDeferred(null);
  }

  function onDismiss() {
    setShow(false);
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  }

  if (!show || !deferred) return <SmoothScroll />;

  const copy = {
    id: {
      title: "Pasang Baby Mo",
      body: "Akses doa & artikel lebih cepat — pasang sebagai aplikasi.",
      install: "Pasang",
      later: "Nanti",
    },
    en: {
      title: "Install Baby Mo",
      body: "Faster access to duas & articles — add it as an app.",
      install: "Install",
      later: "Later",
    },
  } as const;
  const t = copy[locale];

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-20 z-30 flex justify-center px-4 md:bottom-6">
      <div className="pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-[20px] border border-hairline bg-paper/95 px-4 py-3 shadow-[0_20px_45px_-15px_rgba(15,18,19,0.4)] backdrop-blur">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage-soft text-sage-deep">
          <DownloadIcon />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13.5px] font-semibold text-ink">
            {t.title}
          </p>
          <p className="truncate text-[12px] text-whisper">{t.body}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={onDismiss}
            className="tap rounded-full px-3 py-1.5 text-[12.5px] font-semibold text-whisper hover:text-ink"
          >
            {t.later}
          </button>
          <button
            type="button"
            onClick={onInstall}
            className="tap rounded-full bg-sage-deep px-3.5 py-1.5 text-[12.5px] font-semibold text-paper"
          >
            {t.install}
          </button>
        </div>
      </div>
      <SmoothScroll />
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 4v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  );
}
