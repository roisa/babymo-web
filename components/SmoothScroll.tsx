"use client";

import { useEffect } from "react";

/**
 * Inertial smooth-scroll for desktop mouse-wheel users.
 *
 * Trackpad users (Mac, modern Win laptops) already get OS-level momentum
 * via `pointer: coarse` is wrong — trackpads are `fine`. We distinguish
 * trackpad from wheel by deltaMode + delta magnitude: trackpads emit
 * many small deltaMode-0 events; mouse wheels emit fewer, larger ones.
 *
 * Touch devices and prefers-reduced-motion are skipped entirely so the
 * native scroll feel — already very good on iOS/Android — is preserved.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mm = window.matchMedia;
    if (mm("(prefers-reduced-motion: reduce)").matches) return;
    // Touch-primary devices: native momentum > anything we can do.
    if (mm("(pointer: coarse)").matches) return;

    const LERP = 0.13;
    let target = window.scrollY;
    let current = window.scrollY;
    let raf = 0;
    let running = false;

    const getMax = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    function tick() {
      const diff = target - current;
      if (Math.abs(diff) < 0.4) {
        current = target;
        window.scrollTo(0, current);
        running = false;
        return;
      }
      current += diff * LERP;
      window.scrollTo(0, current);
      raf = requestAnimationFrame(tick);
    }

    function start() {
      if (running) return;
      running = true;
      current = window.scrollY;
      raf = requestAnimationFrame(tick);
    }

    function onWheel(e: WheelEvent) {
      // Pinch-zoom, modifier keys, horizontal scroll → pass through.
      if (e.ctrlKey || e.metaKey) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      // Trackpad heuristic: deltaMode 0 + small per-event delta.
      // Real mouse wheels send 100+ at a time (deltaMode 0 on modern
      // browsers, or deltaMode 1 on older). Skip trackpad — let native
      // scroll handle it.
      if (e.deltaMode === 0 && Math.abs(e.deltaY) < 80) {
        target = window.scrollY;
        return;
      }

      e.preventDefault();
      target = Math.max(0, Math.min(getMax(), target + e.deltaY));
      start();
    }

    // Touch / programmatic scroll / anchor jumps → resync target.
    function onTouch() {
      target = window.scrollY;
    }
    function onScroll() {
      if (!running) target = window.scrollY;
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
