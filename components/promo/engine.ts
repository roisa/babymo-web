/**
 * Promo Studio drawing kit. Every template draws on a canvas in "design
 * units": the frame is always 1080 wide and 1920 tall (9:16 Reels / Story /
 * Shorts), 1350 tall (4:5 feed) or 1080 tall (1:1 feed). The 4:5 and 1:1 sizes
 * share one layout (fractions of H), so every template works in all three. The caller scales the context to the real
 * canvas size, so the same template renders a small live thumbnail and a
 * full-HD export.
 */

export type Fmt = "story" | "feed" | "square";
/** Where the video sends people: the App Store app (default) or the free web games. */
export type Target = "app" | "web";
export const FMT_H: Record<Fmt, number> = { story: 1920, feed: 1350, square: 1080 };
export type Lang = "id" | "en";

export interface PromoGame {
  slug: string;
  name: string;
  hook: string;
  emoji: string;
  url: string;
  shot: HTMLImageElement;
  icon: HTMLImageElement;
}

export interface Palette {
  key: string;
  name: string;
  bg: [string, string, string];
  accent: string;
  accent2: string;
  ink: string;
  soft: string;
  card: string;
  dark: boolean;
}

export const PALETTES: Palette[] = [
  { key: "sunny", name: "Sunny", bg: ["#FFF1C2", "#FFD9E6", "#DCD6FF"], accent: "#12A15A", accent2: "#F0975A", ink: "#152230", soft: "#5B6472", card: "#FFFFFF", dark: false },
  { key: "ocean", name: "Ocean", bg: ["#D7F3FF", "#C8E9FF", "#E2DCFF"], accent: "#0A84FF", accent2: "#12A15A", ink: "#0F2236", soft: "#4F6175", card: "#FFFFFF", dark: false },
  { key: "mint", name: "Mint", bg: ["#DDF7E8", "#C6F0F2", "#FFF4C8"], accent: "#0E9F6E", accent2: "#E86C9E", ink: "#13261E", soft: "#4E6359", card: "#FFFFFF", dark: false },
  { key: "berry", name: "Berry", bg: ["#FFE1EE", "#F4DAFF", "#FFE9D6"], accent: "#D9467E", accent2: "#8A79D9", ink: "#2B1426", soft: "#6E5266", card: "#FFFFFF", dark: false },
  { key: "night", name: "Night", bg: ["#141B3D", "#2B2457", "#123E4E"], accent: "#FDBA74", accent2: "#6EE7B7", ink: "#F7F4EC", soft: "#C3C9DA", card: "#232B52", dark: true },
  { key: "forest", name: "Forest", bg: ["#0F3B2E", "#14503C", "#1C5A47"], accent: "#FCD34D", accent2: "#7DD3FC", ink: "#F5F2E8", soft: "#BFD6CB", card: "#1D4D3D", dark: true },
];

export interface SceneText {
  headline: string;
  sub: string;
  cta: string;
  url: string;
}

export interface Assets {
  mo: Record<string, HTMLImageElement>;
  logo: HTMLImageElement;
  /** Apple Watch screens (watch-<lang>-<key>.png from the App Store Kit) */
  watch: Record<string, HTMLImageElement>;
}

export interface Scene {
  ctx: CanvasRenderingContext2D;
  W: number;
  H: number;
  t: number;
  d: number;
  p: number;
  fmt: Fmt;
  target: Target;
  lang: Lang;
  game: PromoGame;
  games: PromoGame[];
  pal: Palette;
  text: SceneText;
  font: string;
  showMo: boolean;
  a: Assets;
}

/* ───────── math ───────── */

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
/** progress of `p` inside [a, b] → 0..1 */
export const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
export const outCubic = (t: number) => 1 - Math.pow(1 - t, 3);
export const inCubic = (t: number) => t * t * t;
export const inOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const outBack = (t: number) => {
  const c1 = 1.70158, c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};
export const outElastic = (t: number) =>
  t === 0 || t === 1 ? t : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1;

export function rng(seed: number) {
  let s = seed || 1;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/* ───────── drawing helpers ───────── */

export function rr(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const rad = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rad, y);
  ctx.arcTo(x + w, y, x + w, y + h, rad);
  ctx.arcTo(x + w, y + h, x, y + h, rad);
  ctx.arcTo(x, y + h, x, y, rad);
  ctx.arcTo(x, y, x + w, y, rad);
  ctx.closePath();
}

export function bg(s: Scene, opts: { angle?: number; deco?: "dots" | "stars" | "none"; seed?: number } = {}) {
  const { ctx, W, H, pal } = s;
  const a = opts.angle ?? 0.35;
  const g = ctx.createLinearGradient(W * (0.5 - a), 0, W * (0.5 + a), H);
  g.addColorStop(0, pal.bg[0]);
  g.addColorStop(0.55, pal.bg[1]);
  g.addColorStop(1, pal.bg[2]);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  // soft glow blobs drifting
  const blobs = [
    [0.15, 0.12, 420, pal.accent2],
    [0.9, 0.45, 520, pal.accent],
    [0.25, 0.9, 480, pal.accent2],
  ] as const;
  for (const [bx, by, br, c] of blobs) {
    const x = bx * W + Math.sin(s.t * 0.6 + bx * 7) * 40;
    const y = by * H + Math.cos(s.t * 0.5 + by * 5) * 40;
    const rg = ctx.createRadialGradient(x, y, 0, x, y, br);
    rg.addColorStop(0, hexA(c, pal.dark ? 0.28 : 0.22));
    rg.addColorStop(1, hexA(c, 0));
    ctx.fillStyle = rg;
    ctx.fillRect(x - br, y - br, br * 2, br * 2);
  }
  const deco = opts.deco ?? (pal.dark ? "stars" : "dots");
  if (deco === "none") return;
  const r = rng(opts.seed ?? 7);
  for (let i = 0; i < 26; i++) {
    const x = r() * W, y = r() * H, sz = 4 + r() * 10, ph = r() * 6;
    const tw = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(s.t * 2 + ph));
    ctx.globalAlpha = (pal.dark ? 0.8 : 0.35) * tw;
    ctx.fillStyle = pal.dark ? "#FFFFFF" : pal.accent2;
    if (deco === "stars") star(ctx, x, y + Math.sin(s.t + ph) * 6, sz, sz * 0.45, 4);
    else {
      ctx.beginPath();
      ctx.arc(x, y + Math.sin(s.t + ph) * 8, sz * 0.6, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
}

export function star(ctx: CanvasRenderingContext2D, x: number, y: number, R: number, r: number, n = 5) {
  ctx.beginPath();
  for (let i = 0; i < n * 2; i++) {
    const rad = i % 2 === 0 ? R : r;
    const ang = (Math.PI / n) * i - Math.PI / 2;
    ctx.lineTo(x + Math.cos(ang) * rad, y + Math.sin(ang) * rad);
  }
  ctx.closePath();
  ctx.fill();
}

export function hexA(hex: string, a: number) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

export function font(s: Scene, size: number, weight = 800) {
  return `${weight} ${Math.round(size)}px ${s.font}`;
}

/** Wrap text into lines that fit maxW */
export function wrap(ctx: CanvasRenderingContext2D, str: string, maxW: number): string[] {
  const out: string[] = [];
  for (const para of str.split("\n")) {
    const words = para.split(/\s+/).filter(Boolean);
    let line = "";
    for (const w of words) {
      const test = line ? `${line} ${w}` : w;
      if (ctx.measureText(test).width > maxW && line) {
        out.push(line);
        line = w;
      } else line = test;
    }
    out.push(line);
  }
  return out;
}

export interface TextOpts {
  size: number;
  weight?: number;
  color?: string;
  align?: CanvasTextAlign;
  maxW?: number;
  lh?: number;
  alpha?: number;
  shadow?: boolean;
  /** reveal lines one by one (0..1) */
  reveal?: number;
  stroke?: string;
}

/** Draw wrapped text with its first line's top at y. Returns the block height. */
export function text(s: Scene, str: string, x: number, y: number, o: TextOpts): number {
  const { ctx } = s;
  ctx.save();
  ctx.font = font(s, o.size, o.weight ?? 800);
  ctx.textAlign = o.align ?? "center";
  ctx.textBaseline = "top";
  const lines = wrap(ctx, str, o.maxW ?? s.W - 140);
  const lh = (o.lh ?? 1.12) * o.size;
  lines.forEach((ln, i) => {
    let a = o.alpha ?? 1;
    let dy = 0;
    if (o.reveal !== undefined) {
      const k = outCubic(seg(o.reveal, i / (lines.length + 1), (i + 1.6) / (lines.length + 1)));
      a *= k;
      dy = (1 - k) * 40;
    }
    if (a <= 0) return;
    ctx.globalAlpha = a;
    if (o.shadow) {
      ctx.shadowColor = "rgba(0,0,0,0.18)";
      ctx.shadowBlur = 18;
      ctx.shadowOffsetY = 6;
    }
    if (o.stroke) {
      ctx.lineJoin = "round";
      ctx.lineWidth = o.size * 0.16;
      ctx.strokeStyle = o.stroke;
      ctx.strokeText(ln, x, y + i * lh + dy);
    }
    ctx.fillStyle = o.color ?? s.pal.ink;
    ctx.fillText(ln, x, y + i * lh + dy);
  });
  ctx.restore();
  return lines.length * lh;
}

/** A phone with the game's screenshot. cx/cy = centre, h = phone height. */
export function phone(s: Scene, img: HTMLImageElement, cx: number, cy: number, h: number, rot = 0, alpha = 1, scroll = 0) {
  const { ctx } = s;
  const w = h * 0.5;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(cx, cy);
  ctx.rotate(rot);
  ctx.shadowColor = "rgba(20,30,60,0.35)";
  ctx.shadowBlur = h * 0.06;
  ctx.shadowOffsetY = h * 0.03;
  rr(ctx, -w / 2, -h / 2, w, h, w * 0.16);
  ctx.fillStyle = "#111827";
  ctx.fill();
  ctx.shadowColor = "transparent";
  const bz = w * 0.04;
  rr(ctx, -w / 2 + bz, -h / 2 + bz, w - bz * 2, h - bz * 2, w * 0.13);
  ctx.save();
  ctx.clip();
  const sw = w - bz * 2, sh = h - bz * 2;
  if (img.complete && img.naturalWidth) {
    const ih = (img.naturalHeight / img.naturalWidth) * sw;
    const off = Math.min(0, -(ih - sh) * scroll);
    ctx.drawImage(img, -sw / 2, -h / 2 + bz + off, sw, ih);
  } else {
    ctx.fillStyle = "#fff";
    ctx.fillRect(-sw / 2, -sh / 2, sw, sh);
  }
  ctx.restore();
  // dynamic island
  rr(ctx, -w * 0.16, -h / 2 + bz + h * 0.012, w * 0.32, h * 0.03, h * 0.015);
  ctx.fillStyle = "#0B0F19";
  ctx.fill();
  ctx.restore();
}

export function img(s: Scene, im: HTMLImageElement | undefined, cx: number, cy: number, size: number, opts: { rot?: number; alpha?: number; flip?: boolean } = {}) {
  if (!im || !im.complete || !im.naturalWidth) return;
  const { ctx } = s;
  ctx.save();
  ctx.globalAlpha = opts.alpha ?? 1;
  ctx.translate(cx, cy);
  if (opts.rot) ctx.rotate(opts.rot);
  if (opts.flip) ctx.scale(-1, 1);
  ctx.drawImage(im, -size / 2, -size / 2, size, size);
  ctx.restore();
}

/** Baby Mo pose, gently bobbing */
export function mo(s: Scene, pose: string, cx: number, cy: number, size: number, alpha = 1, flip = false) {
  if (!s.showMo) return;
  img(s, s.a.mo[pose] ?? s.a.mo.idea, cx, cy + Math.sin(s.t * 3) * size * 0.02, size, { alpha, flip });
}

/** Rounded app icon tile */
export function icon(s: Scene, g: PromoGame, cx: number, cy: number, size: number, alpha = 1, rot = 0) {
  const { ctx } = s;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(cx, cy);
  ctx.rotate(rot);
  ctx.shadowColor = "rgba(20,30,60,0.28)";
  ctx.shadowBlur = size * 0.18;
  ctx.shadowOffsetY = size * 0.06;
  rr(ctx, -size / 2, -size / 2, size, size, size * 0.24);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.shadowColor = "transparent";
  ctx.save();
  rr(ctx, -size / 2, -size / 2, size, size, size * 0.24);
  ctx.clip();
  if (g.icon.complete && g.icon.naturalWidth) ctx.drawImage(g.icon, -size / 2, -size / 2, size, size);
  ctx.restore();
  ctx.restore();
}

/** Pill button (CTA). Returns its width. */
export function pill(s: Scene, label: string, cx: number, cy: number, size: number, o: { bg?: string; fg?: string; alpha?: number; scale?: number; grad?: boolean } = {}) {
  const { ctx, pal } = s;
  ctx.save();
  ctx.font = font(s, size, 800);
  const tw = ctx.measureText(label).width;
  const w = tw + size * 1.6, h = size * 2;
  ctx.globalAlpha = o.alpha ?? 1;
  ctx.translate(cx, cy);
  ctx.scale(o.scale ?? 1, o.scale ?? 1);
  ctx.shadowColor = hexA(o.bg ?? pal.accent, 0.45);
  ctx.shadowBlur = size * 0.8;
  ctx.shadowOffsetY = size * 0.25;
  rr(ctx, -w / 2, -h / 2, w, h, h / 2);
  if (o.grad !== false && !o.bg) {
    const g = ctx.createLinearGradient(-w / 2, 0, w / 2, 0);
    g.addColorStop(0, pal.accent);
    g.addColorStop(1, pal.accent2);
    ctx.fillStyle = g;
  } else ctx.fillStyle = o.bg ?? pal.accent;
  ctx.fill();
  ctx.shadowColor = "transparent";
  // glass sheen
  rr(ctx, -w / 2 + 6, -h / 2 + 5, w - 12, h * 0.42, h / 2);
  ctx.fillStyle = "rgba(255,255,255,0.18)";
  ctx.fill();
  ctx.fillStyle = o.fg ?? "#fff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, 0, size * 0.04);
  ctx.restore();
  return w;
}

/** Small chip label */
export function chip(s: Scene, label: string, cx: number, cy: number, size: number, alpha = 1, bgc?: string, fg?: string) {
  const { ctx, pal } = s;
  ctx.save();
  ctx.font = font(s, size, 800);
  const w = ctx.measureText(label).width + size * 1.3, h = size * 1.8;
  ctx.globalAlpha = alpha;
  rr(ctx, cx - w / 2, cy - h / 2, w, h, h / 2);
  ctx.fillStyle = bgc ?? (pal.dark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.85)");
  ctx.fill();
  ctx.fillStyle = fg ?? pal.ink;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, cx, cy + size * 0.04);
  ctx.restore();
  return w;
}

/** Logo + wordmark */
export function brand(s: Scene, cx: number, cy: number, size: number, alpha = 1) {
  const { ctx } = s;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.font = font(s, size * 0.62, 800);
  const label = "Baby Mo";
  const tw = ctx.measureText(label).width;
  const total = size + size * 0.25 + tw;
  const x0 = cx - total / 2;
  if (s.a.logo.complete && s.a.logo.naturalWidth) ctx.drawImage(s.a.logo, x0, cy - size / 2, size, size);
  ctx.fillStyle = s.pal.ink;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(label, x0 + size * 1.25, cy + size * 0.04);
  ctx.restore();
}

/** Standard outro: logo, Baby Mo, CTA, url. k = 0..1 entrance */
export function endCard(s: Scene, k: number, pose = "yeyy") {
  const { W, H, ctx, pal } = s;
  if (k <= 0) return;
  ctx.save();
  ctx.globalAlpha = clamp(k * 2);
  ctx.fillStyle = hexA(pal.bg[1], 1);
  ctx.fillRect(0, 0, W, H);
  ctx.restore();
  const e = outBack(clamp(k));
  const cy = H * 0.5;
  const moSize = s.fmt === "story" ? 520 : 360;
  mo(s, pose, W / 2, cy - moSize * 0.55 - (1 - e) * 80, moSize * e);
  text(s, s.text.cta, W / 2, cy + 20, { size: s.fmt === "story" ? 84 : 64, alpha: clamp(k * 2 - 0.3), maxW: W - 160 });
  ctaLink(s, W / 2, cy + (s.fmt === "story" ? 290 : 220), s.fmt === "story" ? 50 : 40, {
    alpha: clamp(k * 2 - 0.6),
    scale: 1 + Math.sin(s.t * 6) * 0.03,
  });
  brand(s, W / 2, s.fmt === "story" ? H * 0.17 : H - 90, s.fmt === "story" ? 80 : 60, clamp(k * 2 - 0.8));
}

export function confetti(s: Scene, k: number, seed = 3, n = 60) {
  if (k <= 0 || k >= 1) return;
  const { ctx, W, H, pal } = s;
  const r = rng(seed);
  const cols = [pal.accent, pal.accent2, "#E6B52E", "#E86C9E", "#3AA7DA", "#8A79D9"];
  for (let i = 0; i < n; i++) {
    const x = r() * W, vy = 0.6 + r() * 0.8, rot = r() * 6, w = 14 + r() * 14;
    const y = -60 + k * H * 1.3 * vy;
    ctx.save();
    ctx.translate(x + Math.sin(k * 10 + i) * 30, y);
    ctx.rotate(rot + k * 12);
    ctx.fillStyle = cols[i % cols.length]!;
    ctx.fillRect(-w / 2, -w * 0.3, w, w * 0.6);
    ctx.restore();
  }
}

/** Typewriter: returns the visible slice of str at progress k */
export function typed(str: string, k: number) {
  return str.slice(0, Math.round(str.length * clamp(k)));
}

/* ───────── App Store button + seasonal art ───────── */

const APPLE = typeof Path2D === "undefined" ? null : new Path2D(
  "M16.37 12.3c-.02-2.22 1.82-3.29 1.9-3.34-1.04-1.52-2.65-1.72-3.22-1.75-1.36-.14-2.67.81-3.36.81-.7 0-1.76-.79-2.9-.77-1.49.02-2.87.87-3.64 2.2-1.56 2.7-.4 6.68 1.11 8.87.74 1.07 1.62 2.27 2.77 2.23 1.12-.05 1.54-.72 2.89-.72 1.34 0 1.73.72 2.9.7 1.2-.02 1.96-1.08 2.69-2.16.85-1.24 1.2-2.45 1.21-2.51-.03-.01-2.33-.89-2.35-3.56ZM14.17 5.78c.61-.75 1.03-1.78.92-2.81-.88.04-1.96.6-2.59 1.33-.57.65-1.07 1.71-.94 2.72.99.08 2-.5 2.61-1.24Z",
);

/** Black “Download on the App Store” button. size = height of the big line. Returns its width. */
export function appBadge(s: Scene, cx: number, cy: number, size: number, o: { alpha?: number; scale?: number } = {}) {
  const { ctx } = s;
  const small = s.lang === "id" ? "Unduh di" : "Download on the";
  ctx.save();
  ctx.globalAlpha = o.alpha ?? 1;
  ctx.translate(cx, cy);
  ctx.scale(o.scale ?? 1, o.scale ?? 1);
  ctx.font = font(s, size, 700);
  const bw = ctx.measureText("App Store").width;
  ctx.font = font(s, size * 0.45, 600);
  const sw = ctx.measureText(small).width;
  const logo = size * 1.25, pad = size * 0.55, gap = size * 0.35;
  const w = pad * 2 + logo + gap + Math.max(bw, sw), h = size * 2.05;
  ctx.shadowColor = "rgba(0,0,0,0.35)";
  ctx.shadowBlur = size * 0.6;
  ctx.shadowOffsetY = size * 0.2;
  rr(ctx, -w / 2, -h / 2, w, h, h * 0.24);
  ctx.fillStyle = "#000";
  ctx.fill();
  ctx.shadowColor = "transparent";
  ctx.lineWidth = Math.max(2, size * 0.04);
  ctx.strokeStyle = "rgba(255,255,255,0.35)";
  ctx.stroke();
  if (APPLE) {
    ctx.save();
    ctx.translate(-w / 2 + pad, -logo / 2);
    ctx.scale(logo / 24, logo / 24);
    ctx.fillStyle = "#fff";
    ctx.fill(APPLE);
    ctx.restore();
  }
  const tx = -w / 2 + pad + logo + gap;
  ctx.fillStyle = "#fff";
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.font = font(s, size * 0.45, 600);
  ctx.fillText(small, tx, -size * 0.28);
  ctx.font = font(s, size, 700);
  ctx.fillText("App Store", tx, size * 0.72);
  ctx.restore();
  return w;
}

/** The call-to-action link: the App Store button (+ a small search hint) for the app, or a pill with the web address. */
export function ctaLink(s: Scene, cx: number, cy: number, size: number, o: { alpha?: number; scale?: number } = {}) {
  if (s.target === "web") return pill(s, s.text.url, cx, cy, size, o);
  const w = appBadge(s, cx, cy, size * 1.25, o);
  if (s.text.url) text(s, s.text.url, cx, cy + size * 1.75, { size: size * 0.62, weight: 700, color: s.pal.soft, alpha: o.alpha ?? 1, maxW: s.W - 160 });
  return w;
}

/** A hanging lantern (fanous). x,y = hook point; len = string length; size = body height. */
export function lantern(s: Scene, x: number, y: number, len: number, size: number, glass: string, phase = 0) {
  const { ctx } = s;
  const sw = Math.sin(s.t * 1.6 + phase) * 0.08;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(sw);
  ctx.strokeStyle = "#E2A93A";
  ctx.lineWidth = size * 0.03;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, len);
  ctx.stroke();
  ctx.translate(0, len);
  const w = size * 0.56;
  const glow = ctx.createRadialGradient(0, size * 0.5, 0, 0, size * 0.5, size * 0.9);
  glow.addColorStop(0, hexA(glass, 0.55 + 0.2 * Math.sin(s.t * 3 + phase)));
  glow.addColorStop(1, hexA(glass, 0));
  ctx.fillStyle = glow;
  ctx.fillRect(-size, -size * 0.3, size * 2, size * 1.8);
  ctx.fillStyle = "#F2B33D";
  ctx.beginPath(); // cap
  ctx.moveTo(-w * 0.55, size * 0.18); ctx.quadraticCurveTo(0, -size * 0.12, w * 0.55, size * 0.18); ctx.closePath(); ctx.fill();
  const body = ctx.createLinearGradient(0, size * 0.2, 0, size * 0.85);
  body.addColorStop(0, "#FFF8D8");
  body.addColorStop(1, glass);
  ctx.fillStyle = body;
  ctx.beginPath(); // glass body (slightly tapered)
  ctx.moveTo(-w / 2, size * 0.2); ctx.lineTo(w / 2, size * 0.2); ctx.lineTo(w * 0.38, size * 0.82); ctx.lineTo(-w * 0.38, size * 0.82); ctx.closePath(); ctx.fill();
  ctx.strokeStyle = "#B87A12";
  ctx.lineWidth = size * 0.035;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, size * 0.2); ctx.lineTo(0, size * 0.82);
  ctx.moveTo(-w * 0.25, size * 0.2); ctx.lineTo(-w * 0.19, size * 0.82);
  ctx.moveTo(w * 0.25, size * 0.2); ctx.lineTo(w * 0.19, size * 0.82);
  ctx.stroke();
  ctx.fillStyle = "#F2B33D";
  ctx.beginPath(); // bottom point
  ctx.moveTo(-w * 0.38, size * 0.82); ctx.lineTo(w * 0.38, size * 0.82); ctx.lineTo(0, size * 1.02); ctx.closePath(); ctx.fill();
  ctx.restore();
}

/** Crescent moon with a soft glow */
export function crescent(s: Scene, x: number, y: number, r: number, color = "#FFD86B") {
  const { ctx } = s;
  ctx.save();
  const g = ctx.createRadialGradient(x, y, r * 0.4, x, y, r * 2.2);
  g.addColorStop(0, hexA(color, 0.35));
  g.addColorStop(1, hexA(color, 0));
  ctx.fillStyle = g;
  ctx.fillRect(x - r * 2.2, y - r * 2.2, r * 4.4, r * 4.4);
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.arc(x + r * 0.42, y - r * 0.22, r * 0.86, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill("evenodd");
  ctx.restore();
}

/** Woven ketupat with ribbon tails. x,y = top point; size = diamond height. */
export function ketupat(s: Scene, x: number, y: number, size: number, ribbon = "#F2C94C", phase = 0) {
  const { ctx } = s;
  const h = size / 2;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(Math.sin(s.t * 1.4 + phase) * 0.07);
  ctx.strokeStyle = ribbon;
  ctx.lineWidth = size * 0.07;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(0, size); ctx.quadraticCurveTo(-h * 0.3, size * 1.35, -h * 0.55, size * 1.75);
  ctx.moveTo(0, size); ctx.quadraticCurveTo(h * 0.3, size * 1.35, h * 0.55, size * 1.75);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, 0); ctx.lineTo(h, h); ctx.lineTo(0, size); ctx.lineTo(-h, h); ctx.closePath();
  ctx.fillStyle = "#8CC63F";
  ctx.fill();
  ctx.save();
  ctx.clip();
  ctx.strokeStyle = "rgba(46,125,50,0.75)";
  ctx.lineWidth = size * 0.035;
  for (let i = -3; i <= 3; i++) {
    ctx.beginPath(); ctx.moveTo(-h + i * h * 0.35, 0); ctx.lineTo(h + i * h * 0.35, size); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(h + i * h * 0.35, 0); ctx.lineTo(-h + i * h * 0.35, size); ctx.stroke();
  }
  ctx.restore();
  ctx.strokeStyle = "#2E7D32";
  ctx.lineWidth = size * 0.04;
  ctx.stroke();
  ctx.restore();
}

/** Layout helper: y position as a fraction of the frame height, adjusted for square */
export function Y(s: Scene, storyFrac: number, squareFrac?: number) {
  return s.H * (s.fmt === "story" ? storyFrac : squareFrac ?? storyFrac);
}
