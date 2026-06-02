"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/i18n/config";

/**
 * Brings the hero Baby Mo to life by gently cycling through the rich pose
 * set (public/baby-mo-poses) instead of one static image.
 *
 * Performance-safe: the server still renders the static <picture> hero
 * (the LCP image) in page.tsx. This client layer mounts on top, fades in
 * a random pose, and rotates with a soft cross-fade — so first paint and
 * SEO are unchanged, and the variety is pure enhancement. Honors
 * prefers-reduced-motion (picks one pose and stays).
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

export function MascotPoses({ className = "" }: Props) {
  const [pose, setPose] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const idxRef = useRef(0);

  useEffect(() => {
    // Random starting pose (client-only → no SSR hydration mismatch).
    idxRef.current = Math.floor(Math.random() * POSES.length);
    setPose(POSES[idxRef.current]!);
    // Fade in over the static hero once decoded.
    const img = new Image();
    img.src = asset(`/baby-mo-poses/${POSES[idxRef.current]!}.png`);
    img.onload = () => setVisible(true);

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Preload the rest in the background so swaps are instant.
    POSES.forEach((p) => {
      const pre = new Image();
      pre.src = asset(`/baby-mo-poses/${p}.png`);
    });

    const interval = setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        // advance to a different random pose
        let next = idxRef.current;
        while (next === idxRef.current) next = Math.floor(Math.random() * POSES.length);
        idxRef.current = next;
        setPose(POSES[next]!);
        setVisible(true);
      }, 360);
    }, 5200);
    return () => clearInterval(interval);
  }, []);

  if (!pose) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(`/baby-mo-poses/${pose}.png`)}
      alt=""
      aria-hidden
      width={900}
      height={900}
      decoding="async"
      className={`pointer-events-none absolute inset-0 m-auto transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      } ${className}`}
    />
  );
}
