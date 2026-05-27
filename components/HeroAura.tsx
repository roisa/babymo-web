"use client";

import { useEffect, useRef } from "react";

/**
 * Animated gradient mesh sitting behind the hero. Two blurred blobs that
 * drift on their own (CSS keyframes) plus a single mouse-following soft
 * light. Pure cosmetic, position: absolute inset-0 inside the hero section.
 *
 * Reduced motion disables the mouse follow + drift (handled via globals.css
 * media query, plus a JS guard for the pointer listener).
 */
export function HeroAura() {
  const lightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    )
      return;
    // Skip on touch-only devices to save battery & avoid unnecessary work
    if (window.matchMedia?.("(pointer: coarse)").matches) return;

    const el = lightRef.current;
    if (!el) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    function onMove(e: PointerEvent) {
      const r = el!.parentElement!.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!raf) raf = requestAnimationFrame(tick);
    }
    function tick() {
      // Ease toward target
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el!.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    }

    const parent = el.parentElement!;
    parent.addEventListener("pointermove", onMove);
    return () => {
      parent.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Two animated blobs — pure CSS drift */}
      <div
        aria-hidden
        className="aura-blob"
        style={{
          width: 480,
          height: 480,
          top: "-12%",
          left: "-8%",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-brave) 32%, transparent), transparent 70%)",
          animationDelay: "0s",
        }}
      />
      <div
        aria-hidden
        className="aura-blob"
        style={{
          width: 520,
          height: 520,
          bottom: "-18%",
          right: "-10%",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-clay) 28%, transparent), transparent 70%)",
          animationDelay: "-12s",
        }}
      />
      {/* Mouse-following soft light (desktop only) */}
      <div
        ref={lightRef}
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 360,
          height: 360,
          borderRadius: "50%",
          filter: "blur(60px)",
          opacity: 0.35,
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-brave) 45%, transparent), transparent 70%)",
          pointerEvents: "none",
          transform: "translate3d(-9999px, -9999px, 0)",
          transition: "opacity 400ms ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
