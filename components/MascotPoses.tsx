"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/i18n/config";
import { MASCOT_LINES, setMascotIndex } from "./mascot-store";

/**
 * Brings the hero Baby Mo to life by cycling through the pose set
 * (public/baby-mo-poses) instead of one static image. It is the DRIVER
 * for the hero mascot: it owns the timer and publishes the current index
 * to the shared store, so the speech bubble (MascotGreeting) shows words
 * that match the pose on screen.
 *
 * The server still renders the static <picture> hero (the LCP image) in
 * page.tsx. This client layer mounts on top and, once its first pose has
 * decoded, FADES THE STATIC HERO OUT so only one Baby Mo is ever visible.
 *
 * Rotation uses two stacked layers that cross-fade for a smooth dissolve.
 * Honors prefers-reduced-motion (renders no overlay → the clean static
 * hero stays — but still publishes one index so the bubble has a line).
 */

type Props = { className?: string };

const poseUrl = (p: string) => asset(`/baby-mo-poses/${p}.png`);

export function MascotPoses({ className = "" }: Props) {
  const [poseA, setPoseA] = useState<string | null>(null);
  const [poseB, setPoseB] = useState<string | null>(null);
  const [showA, setShowA] = useState(true);
  const [mounted, setMounted] = useState(false);
  const idxRef = useRef(0);
  const showARef = useRef(true);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Fade the server-rendered static hero out / back in so only one Mo shows.
  function setStaticHeroHidden(hidden: boolean) {
    const pic = rootRef.current?.parentElement?.querySelector("picture");
    if (pic instanceof HTMLElement) {
      pic.style.transition = "opacity 450ms ease";
      pic.style.opacity = hidden ? "0" : "1";
    }
  }

  useEffect(() => {
    // Random starting pose (client-only → no SSR hydration mismatch).
    const start = Math.floor(Math.random() * MASCOT_LINES.length);
    idxRef.current = start;
    setMascotIndex(start); // tell the speech bubble which line to show

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // keep the clean static hero, no overlay (bubble still shows)

    setMounted(true);
    const first = MASCOT_LINES[start]!.pose;
    setPoseA(first);
    // The static hero is faded out via the rendered overlay's onLoad below
    // (reliable even when the pose image is already cached).

    // Preload the rest so cross-fades are instant.
    MASCOT_LINES.forEach((l) => {
      const pre = new Image();
      pre.src = poseUrl(l.pose);
    });

    const interval = setInterval(() => {
      let next = idxRef.current;
      while (next === idxRef.current)
        next = Math.floor(Math.random() * MASCOT_LINES.length);
      idxRef.current = next;
      setMascotIndex(next);
      const pose = MASCOT_LINES[next]!.pose;
      // place the new pose on the currently-hidden layer, then flip
      if (showARef.current) setPoseB(pose);
      else setPoseA(pose);
      showARef.current = !showARef.current;
      setShowA(showARef.current);
    }, 5200);

    return () => {
      clearInterval(interval);
      setStaticHeroHidden(false);
    };
  }, []);

  if (!mounted) return null;

  const layer =
    "pointer-events-none absolute inset-0 m-auto transition-opacity duration-500 ease-in-out";

  return (
    <div ref={rootRef} aria-hidden className="contents">
      {poseA && (
        <img
          src={poseUrl(poseA)}
          alt=""
          aria-hidden
          width={900}
          height={900}
          decoding="async"
          onLoad={() => setStaticHeroHidden(true)}
          className={`${layer} ${showA ? "opacity-100" : "opacity-0"} ${className}`}
        />
      )}
      {poseB && (
        <img
          src={poseUrl(poseB)}
          alt=""
          aria-hidden
          width={900}
          height={900}
          decoding="async"
          onLoad={() => setStaticHeroHidden(true)}
          className={`${layer} ${showA ? "opacity-0" : "opacity-100"} ${className}`}
        />
      )}
    </div>
  );
}
