"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/i18n/config";

/**
 * Brings the hero Baby Mo to life by gently cycling through the rich pose
 * set (public/baby-mo-poses) instead of one static image.
 *
 * The server still renders the static <picture> hero (the LCP image) in
 * page.tsx. This client layer mounts on top and, once its first pose has
 * decoded, FADES THE STATIC HERO OUT so only one Baby Mo is ever visible —
 * otherwise the static hero (framed differently from the pose set) shows
 * through behind the overlay and you get a doubled / ghosted mascot.
 *
 * Rotation uses two stacked layers that cross-fade, so swaps are a smooth
 * dissolve rather than a blink. Honors prefers-reduced-motion (renders
 * nothing → the clean static hero stays).
 */

// A friendly, "hello / happy" subset for the homepage greeting mood.
const POSES = [
  "baby-mo-pose-01",
  "baby-mo-pose-03",
  "baby-mo-pose-05",
  "baby-mo-pose-08",
  "baby-mo-pose-12",
  "baby-mo-pose-15",
  "baby-mo-pose-19",
  "baby-mo-pose-22",
  "baby-mo-pose-27",
  "baby-mo-pose-33",
  "baby-mo-yes",
  "baby-mo-yeyy",
  "baby-mo-wow",
  "baby-mo-ok",
  "baby-mo-idea",
  "baby-mo-alright",
];

type Props = { className?: string };

const poseUrl = (p: string) => asset(`/baby-mo-poses/${p}.png`);

export function MascotPoses({ className = "" }: Props) {
  // Two layers we cross-fade between. `showA` says which one is on top.
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
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // keep the clean static hero, no overlay

    setMounted(true);
    // Random starting pose (client-only → no SSR hydration mismatch).
    idxRef.current = Math.floor(Math.random() * POSES.length);
    const first = POSES[idxRef.current]!;
    setPoseA(first);

    const img = new Image();
    img.src = poseUrl(first);
    img.onload = () => setStaticHeroHidden(true);

    // Preload the rest so cross-fades are instant.
    POSES.forEach((p) => {
      const pre = new Image();
      pre.src = poseUrl(p);
    });

    const interval = setInterval(() => {
      // advance to a different random pose
      let next = idxRef.current;
      while (next === idxRef.current)
        next = Math.floor(Math.random() * POSES.length);
      idxRef.current = next;
      const pose = POSES[next]!;
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
          className={`${layer} ${showA ? "opacity-0" : "opacity-100"} ${className}`}
        />
      )}
    </div>
  );
}
