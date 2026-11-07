/**
 * Shared drawing kit for StoryArt elements.
 *
 * House style: soft "clay" look that sits next to the 3D character renders —
 * every shape is built from 3–4 flat layers (shadow → base → light → shine)
 * instead of one flat fill. No gradients / masks / ids, so any number of
 * illustrations can sit on one page (and in hidden sheets) without clashes.
 *
 * Coordinates: origin = the element's anchor on the ground (or its centre for
 * things that float), y grows downward, so drawings live at negative y.
 */

export const C = {
  // greens
  g0: "#3B8C45",
  g1: "#4FB255",
  g2: "#74C968",
  g3: "#A6DF8C",
  stem: "#3AA655",
  // wood
  b0: "#76492A",
  b1: "#9A6A3F",
  b2: "#BC8A58",
  // warm
  red: "#FF6B6B",
  pink: "#FF8FAD",
  rose: "#FF5A7E",
  yellow: "#FFC83D",
  sun: "#FFB627",
  // cool
  sky: "#5AA9E6",
  skyDark: "#3F86C4",
  water: "#7FB3D9",
  // ink
  ink: "#2A2B3D",
  white: "#FFFFFF",
} as const;

/** Soft contact shadow under an element. */
export function GroundShadow({ rx, ry = 8, o = 0.12 }: { rx: number; ry?: number; o?: number }) {
  return <ellipse cx={0} cy={-1} rx={rx} ry={ry} fill="#1E2A3A" opacity={o} />;
}

/** Little white shine dot (the "wet clay" highlight). */
export function Shine({ x, y, r = 3, o = 0.7 }: { x: number; y: number; r?: number; o?: number }) {
  return <circle cx={x} cy={y} r={r} fill="#fff" opacity={o} />;
}

/**
 * Crescent as one closed path: the part of circle (0,0,R) not covered by the
 * "bite" circle (bx,by,r). Pure geometry, no masks.
 */
export function crescentPath(R: number, bx: number, by: number, r: number): string {
  const d = Math.hypot(bx, by);
  const a = (R * R - r * r + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(R * R - a * a, 0));
  const px = (a * bx) / d;
  const py = (a * by) / d;
  const ux = -by / d;
  const uy = bx / d;
  const x1 = px + h * ux, y1 = py + h * uy;
  const x2 = px - h * ux, y2 = py - h * uy;
  const f = (n: number) => n.toFixed(2);
  // outer arc the long way round (away from the bite), inner arc back along the bite
  return `M${f(x1)} ${f(y1)} A${R} ${R} 0 1 1 ${f(x2)} ${f(y2)} A${r} ${r} 0 0 0 ${f(x1)} ${f(y1)} Z`;
}

/** A simple almond leaf pointing right from the origin. */
export function Leaf({ x = 0, y = 0, rot = 0, s = 1, fill = C.g1, vein = C.g0 }: { x?: number; y?: number; rot?: number; s?: number; fill?: string; vein?: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d="M0 0 C6 -11 20 -13 28 -4 C20 5 7 6 0 0Z" fill={fill} />
      <path d="M2 -1 C10 -4 18 -5 25 -4" stroke={vein} strokeWidth={1.6} fill="none" strokeLinecap="round" opacity=".7" />
    </g>
  );
}
