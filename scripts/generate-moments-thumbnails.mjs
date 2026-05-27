// Generates 1600x900 placeholder thumbnails for every Moment card,
// designed to match the Baby Mo YouTube brand: bright green gradient,
// big bold display text, mascot character.
//
// These are PLACEHOLDERS — when real videos publish, drop the actual
// YouTube thumbnail (max-res JPG) into public/moments/<slug>.jpg and
// it'll override the generated one. The script skips existing files
// unless --force is passed.
//
// Pipeline:
//   1) Build the base card (gradient + text + decorations) as SVG
//   2) Rasterize with rsvg-convert → PNG
//   3) Composite the Baby Mo mascot on top via ImageMagick
//   4) Encode as JPEG

import { execSync } from "node:child_process";
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  rmSync,
} from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const MOMENTS_FILE = join(ROOT, "lib/content/moments.ts");
const OUT_DIR = join(ROOT, "public/moments");
const MASCOT = join(ROOT, "public/assets/baby-mo-hero.png");
const FORCE = process.argv.includes("--force");

const W = 1600;
const H = 900;

// Bright YouTube-channel palette
const C = {
  // Bright green gradient — matches the YouTube channel brand
  green: "#4DB848",
  greenDark: "#2E8A25",
  greenDeep: "#1B5E14",
  // Highlight yellow used for title text accent
  yellow: "#FFD93D",
  yellowSoft: "#FFE87A",
  // Cream + dark for badges and contrast
  cream: "#FFFBF0",
  ink: "#1A2E1A",
  shadow: "#0A1F0A",
  white: "#FFFFFF",
};

const PLATFORM = {
  youtube:           { label: "YOUTUBE",         color: "#c4302b" },
  "youtube-shorts":  { label: "YOUTUBE SHORTS",  color: "#c4302b" },
  "ig-post":         { label: "INSTAGRAM",       color: "#c2185b" },
  "ig-reel":         { label: "INSTAGRAM REEL",  color: "#c2185b" },
};

// ──────────────────────────────────────────────────────────────────
// Parse moments.ts — slug, platform, title.id, duration
// ──────────────────────────────────────────────────────────────────
const src = readFileSync(MOMENTS_FILE, "utf8");

function extractMoments(s) {
  const out = [];
  const slugRe = /\{\s*slug:\s*"([a-z0-9-]+)"/g;
  let m;
  while ((m = slugRe.exec(s))) {
    const slug = m[1];
    const win = s.slice(m.index, m.index + 2000);
    const platform = (win.match(/platform:\s*"([a-z-]+)"/) ?? [])[1] ?? "youtube";
    const dur = (win.match(/duration:\s*"([0-9:]+)"/) ?? [])[1] ?? "";
    const title = win.match(/title:\s*\{([^}]+)\}/);
    if (!title) continue;
    const tid = title[1].match(/id:\s*"((?:[^"\\]|\\.)*)"/);
    out.push({
      slug,
      platform,
      duration: dur,
      title: tid ? tid[1].replace(/\\"/g, '"') : "",
    });
  }
  return out;
}

function xe(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Title wrapping: ~14 chars/line for the BIG display text.
// Keep to 3 lines max — anything more starts to feel cluttered.
function wrap(text, maxChars, maxLines) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > maxChars) {
      if (lines.length === maxLines - 1) {
        cur = (cur + " …").trim();
        break;
      }
      lines.push(cur);
      cur = w;
    } else {
      cur = (cur + " " + w).trim();
    }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, maxLines);
}

function svgFor({ title, platform, duration }) {
  const p = PLATFORM[platform] ?? PLATFORM.youtube;
  const cleanTitle = title.replace(/\s*–\s*Baby Mo\s*$/, "").trim();
  const lines = wrap(cleanTitle, 12, 3);
  // Base font size scales down as line count grows
  const fontSize = lines.length === 1 ? 150 : lines.length === 2 ? 130 : 110;
  const lineHeight = fontSize * 1.0;
  // Vertical center: stack of N lines
  const blockHeight = lines.length * lineHeight;
  const startY = (H - blockHeight) / 2 + fontSize * 0.85;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%"  stop-color="${C.green}"/>
      <stop offset="55%" stop-color="${C.greenDark}"/>
      <stop offset="100%" stop-color="${C.greenDeep}"/>
    </linearGradient>
    <radialGradient id="sunbeam" cx="20%" cy="0%" r="80%">
      <stop offset="0%" stop-color="${C.yellow}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${C.yellow}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="stars" x="0" y="0" width="240" height="240" patternUnits="userSpaceOnUse">
      <circle cx="40" cy="40" r="3" fill="${C.yellowSoft}" fill-opacity="0.5"/>
      <circle cx="180" cy="120" r="2" fill="${C.white}" fill-opacity="0.4"/>
      <circle cx="80" cy="200" r="2.5" fill="${C.yellowSoft}" fill-opacity="0.35"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#stars)"/>
  <rect width="${W}" height="${H}" fill="url(#sunbeam)"/>

  <!-- Decorative crescents / sparkles in corners -->
  <text x="120" y="200" font-family="Arial, sans-serif" font-size="68" opacity="0.55">🌙</text>
  <text x="${W - 180}" y="${H - 200}" font-family="Arial, sans-serif" font-size="56" opacity="0.5">✨</text>
  <text x="${W - 260}" y="220" font-family="Arial, sans-serif" font-size="48" opacity="0.45">⭐</text>

  <!-- Platform badge top-left -->
  <rect x="60" y="60" rx="999" ry="999" width="${64 + p.label.length * 16}" height="56"
        fill="${C.cream}" opacity="0.96"/>
  <text x="${60 + 32}" y="${60 + 38}"
        font-family="DejaVu Sans, Helvetica, Arial, sans-serif"
        font-weight="900" font-size="24" letter-spacing="3"
        fill="${p.color}">${xe(p.label)}</text>

  <!-- Duration badge top-right -->
  ${
    duration
      ? `<rect x="${W - 60 - 140}" y="60" rx="999" ry="999" width="140" height="56"
            fill="${C.ink}" opacity="0.85"/>
    <text x="${W - 60 - 70}" y="${60 + 38}" text-anchor="middle"
          font-family="DejaVu Sans, Arial, sans-serif" font-weight="800" font-size="26"
          fill="${C.cream}">${xe(duration)}</text>`
      : ""
  }

  <!-- Title — BIG bold yellow with green shadow for that YouTube-thumbnail feel -->
  ${lines
    .map((line, i) => {
      const y = startY + i * lineHeight;
      const x = 80;
      const fillColor = i === 0 ? C.cream : C.yellow;
      // Layered text: shadow + outline + main fill
      return `
  <text x="${x + 5}" y="${y + 6}"
        font-family="DejaVu Sans, Helvetica, Arial, sans-serif"
        font-weight="900" font-size="${fontSize}" fill="${C.shadow}" opacity="0.45">${xe(line)}</text>
  <text x="${x}" y="${y}"
        font-family="DejaVu Sans, Helvetica, Arial, sans-serif"
        font-weight="900" font-size="${fontSize}" fill="none"
        stroke="${C.greenDeep}" stroke-width="8" stroke-linejoin="round">${xe(line)}</text>
  <text x="${x}" y="${y}"
        font-family="DejaVu Sans, Helvetica, Arial, sans-serif"
        font-weight="900" font-size="${fontSize}" fill="${fillColor}">${xe(line)}</text>`;
    })
    .join("\n")}

  <!-- Brand strip bottom -->
  <rect x="0" y="${H - 64}" width="${W}" height="64" fill="${C.greenDeep}" opacity="0.85"/>
  <text x="80" y="${H - 22}"
        font-family="DejaVu Sans, Arial, sans-serif" font-weight="900" font-size="26"
        letter-spacing="3" fill="${C.yellow}">BABY MO</text>
  <text x="${W - 80}" y="${H - 22}" text-anchor="end"
        font-family="DejaVu Sans, Arial, sans-serif" font-weight="600" font-size="22"
        fill="${C.cream}" opacity="0.9">babymo.id</text>
</svg>`;
}

// ──────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────
const list = extractMoments(src);
console.log(`[moments] Found ${list.length} moments`);

mkdirSync(OUT_DIR, { recursive: true });

let count = 0;
let skipped = 0;
const tmpSvg = join(ROOT, ".moments-tmp.svg");
const tmpPng = join(ROOT, ".moments-tmp.png");

for (const m of list) {
  const out = join(OUT_DIR, `${m.slug}.jpg`);
  if (existsSync(out) && !FORCE) {
    skipped++;
    continue;
  }

  // 1. Render SVG base
  writeFileSync(tmpSvg, svgFor(m), "utf8");
  execSync(`rsvg-convert -w ${W} -h ${H} -o "${tmpPng}" "${tmpSvg}"`, {
    stdio: "pipe",
  });

  // 2. Composite mascot bottom-right + encode JPEG
  // Mascot is ~480px in source, scale to ~420px and place with margin
  const composed = join(ROOT, ".moments-tmp-2.png");
  execSync(
    `convert "${tmpPng}" \\( "${MASCOT}" -resize 420x420 \\) -gravity SouthEast -geometry +80+80 -composite "${composed}"`,
    { stdio: "pipe" },
  );

  execSync(
    `convert "${composed}" -quality 88 -interlace plane "${out}"`,
    { stdio: "pipe" },
  );

  try { rmSync(composed, { force: true }); } catch (_) {}
  count++;
}

try {
  rmSync(tmpSvg, { force: true });
  rmSync(tmpPng, { force: true });
} catch (_) {}

console.log(
  `[moments] Generated ${count} thumbnails (skipped ${skipped}) into ${OUT_DIR}`,
);
