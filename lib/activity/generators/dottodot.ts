// Dot-to-Dot worksheet: numbered dots arranged around a simple closed shape
// that the child connects in order (1 -> 2 -> ... -> N -> 1) to reveal the
// outline, then colors it. A themed emoji sits faintly in the center as a hint.

import { getActivityRect } from "../worksheet";
import { createRng, pick } from "../random";
import type { GenOptions, GenResult } from "../types";

// A few simple parametric shapes, each returning N points on its outline.
type ShapeFn = (n: number, cx: number, cy: number, r: number) => { x: number; y: number }[];

const shapes: ShapeFn[] = [
  // Circle
  (n, cx, cy, r) =>
    Array.from({ length: n }, (_, i) => {
      const a = -Math.PI / 2 + (i / n) * Math.PI * 2;
      return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r };
    }),
  // Star (alternating outer/inner radius)
  (n, cx, cy, r) =>
    Array.from({ length: n }, (_, i) => {
      const a = -Math.PI / 2 + (i / n) * Math.PI * 2;
      const rad = i % 2 === 0 ? r : r * 0.52;
      return { x: cx + Math.cos(a) * rad, y: cy + Math.sin(a) * rad };
    }),
  // Heart
  (n, cx, cy, r) =>
    Array.from({ length: n }, (_, i) => {
      const t = -Math.PI / 2 + (i / n) * Math.PI * 2;
      // Parametric heart, scaled to ~r.
      const hx = 16 * Math.pow(Math.sin(t), 3);
      const hy =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);
      return { x: cx + (hx / 16) * r, y: cy - (hy / 16) * r };
    }),
];

export function generate(options: GenOptions): GenResult {
  const { theme, age, seed } = options;
  const rng = createRng(seed);
  const n = age.difficulty.dotCount;

  const rect = getActivityRect();
  let body = "";

  const cx = rect.x + rect.width / 2;
  const cy = rect.y + rect.height / 2;
  const r = Math.min(rect.width, rect.height) * 0.4;

  const shape = pick(shapes, rng);
  const pts = shape(n, cx, cy, r);

  // Center hint emoji (faint).
  const item = pick(theme.items, rng);
  body += `<text x="${cx}" y="${cy + r * 0.18}" text-anchor="middle" font-size="${r * 0.5}" opacity="0.12" font-family="Arial, Helvetica, sans-serif">${item.emoji}</text>`;

  // Dots + numbers.
  pts.forEach((p, i) => {
    body += `<circle cx="${p.x}" cy="${p.y}" r="0.9" fill="${theme.palette[0]}"/>`;
    // Offset the label outward from the center so it doesn't sit on the dot.
    const dx = p.x - cx;
    const dy = p.y - cy;
    const len = Math.hypot(dx, dy) || 1;
    const lx = p.x + (dx / len) * 4.2;
    const ly = p.y + (dy / len) * 4.2;
    body += `<text x="${lx}" y="${ly + 1.2}" text-anchor="middle" font-size="3.4" font-weight="700" fill="#1b1f3a">${i + 1}</text>`;
  });

  // "1" start marker emphasis.
  const first = pts[0]!;
  body += `<circle cx="${first.x}" cy="${first.y}" r="1.6" fill="none" stroke="${theme.palette[1] ?? theme.palette[0]}" stroke-width="0.5"/>`;

  return {
    title: `${theme.label} Dot-to-Dot`,
    instructions: `Connect the dots from 1 to ${n}, then back to 1. Color your picture!`,
    body,
    accent: theme.palette[0],
  };
}
