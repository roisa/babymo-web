"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/i18n/config";
import { MASCOT_LINES, setMascotIndex } from "./mascot-store";

/**
 * The hero Baby Mo. Renders the static <picture> (the LCP image — still
 * server-rendered into the initial HTML since client components are SSR'd)
 * and, when motion is allowed, cross-fades through the pose set on top.
 *
 * Crucially the static hero is hidden DECLARATIVELY (opacity bound to
 * `posesReady`) instead of by reaching up into the parent DOM. That removes
 * a race where, if the imperative hide didn't fire, the static hero AND a
 * pose would both paint — two overlapping Baby Mos. Only one is ever shown.
 *
 * This component is the driver for the speech bubble: it publishes the
 * current index to the shared store so MascotGreeting shows the matching line.
 * Honors prefers-reduced-motion (keeps the clean static hero, no overlay,
 * but still publishes one index so the bubble has a line).
 */

type Props = { alt?: string };

const poseUrl = (p: string) => asset(`/baby-mo-poses/${p}.png`);

export function HeroMascot({ alt = "Baby Mo" }: Props) {
  const [poseA, setPoseA] = useState<string | null>(null);
  const [poseB, setPoseB] = useState<string | null>(null);
  const [showA, setShowA] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [posesReady, setPosesReady] = useState(false);
  const idxRef = useRef(0);
  const showARef = useRef(true);

  useEffect(() => {
    // Random starting pose (client-only → no SSR hydration mismatch).
    const start = Math.floor(Math.random() * MASCOT_LINES.length);
    idxRef.current = start;
    setMascotIndex(start); // tell the speech bubble which line to show

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return; // keep the clean static hero (bubble still shows)

    setAnimate(true);
    setPoseA(MASCOT_LINES[start]!.pose);

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

    return () => clearInterval(interval);
  }, []);

  const layer =
    "pointer-events-none absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-in-out";

  return (
    <div className="mascot-breathe relative mx-auto w-full max-w-sm drop-shadow-[0_18px_36px_rgba(15,18,19,0.10)]">
      {/* Static hero = the LCP image (fast first paint + SEO). Fades out
          once the first pose has decoded so only one Baby Mo is visible. */}
      <picture
        className="block transition-opacity duration-500 ease-in-out"
        style={{ opacity: posesReady ? 0 : 1 }}
      >
        <source type="image/webp" srcSet={asset("/assets/baby-mo-hero.webp")} />
        <img
          src={asset("/assets/baby-mo-hero.png")}
          alt={alt}
          width={900}
          height={900}
          fetchPriority="high"
          decoding="async"
          className="h-auto w-full"
        />
      </picture>

      {/* Rotating poses cross-fade on top — pure enhancement. */}
      {animate && poseA && (
        <img
          src={poseUrl(poseA)}
          alt=""
          aria-hidden
          width={900}
          height={900}
          decoding="async"
          onLoad={() => setPosesReady(true)}
          className={`${layer} ${showA ? "opacity-100" : "opacity-0"}`}
        />
      )}
      {animate && poseB && (
        <img
          src={poseUrl(poseB)}
          alt=""
          aria-hidden
          width={900}
          height={900}
          decoding="async"
          onLoad={() => setPosesReady(true)}
          className={`${layer} ${showA ? "opacity-0" : "opacity-100"}`}
        />
      )}
    </div>
  );
}
