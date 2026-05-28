// Generates 1170×2532 (iPhone Pro size) lockscreen wallpapers for a
// curated set of daily duas. Per-doa color themes (sage / brave /
// clay / ink), bigger Arabic, richer gradient + decorative geometry.
// Output: public/lockscreens/{slug}.jpg
//
// Runs at build time. Idempotent: skips existing files unless --force.

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const DOA_FILE = join(ROOT, "lib/content/doa.ts");
const OUT_DIR = join(ROOT, "public/lockscreens");
const FORCE = process.argv.includes("--force");

const W = 1170;
const H = 2532;

// Curated subset — the most-recited daily duas. Order matters: each
// pick gets a theme from THEMES (cycled). Reorder to control which
// doa gets which palette.
const PICKS = [
  "sebelum-tidur",       // brave
  "bangun-tidur",        // sage
  "sebelum-makan",       // clay
  "sesudah-makan",       // ink
  "doa-pagi",            // sage
  "doa-petang",          // brave
  "perlindungan-anak",   // ink
  "doa-untuk-orang-tua", // clay
];

// ──────────────────────────────────────────────────────────────────
// Per-doa color themes. Each theme defines:
//   - paper / paper2 — background gradient stops
//   - accent / accentDeep / accentSoft — color of glow, accent shapes, top eyebrow
//   - text — main text color (Arabic + wordmark)
//   - subtext — translation color
//   - pattern — dot pattern color
//   - sourceLine — source-reference text color
//
// All themes use cream paper as the base so they feel like the same
// family. The accent + glow vary; that's the "brave variation".
// ──────────────────────────────────────────────────────────────────
const THEMES = {
  brave: {
    paper: "#FBFAF6",
    paper2: "#E8F2E5",
    accent: "#1F8B3F",
    accentDeep: "#155F2A",
    accentSoft: "#DCEFE0",
    text: "#0E1213",
    subtext: "#3B5A38",
    pattern: "#155F2A",
    sourceLine: "#155F2A",
  },
  sage: {
    paper: "#FBFAF6",
    paper2: "#E8EFE6",
    accent: "#5F8B5A",
    accentDeep: "#3B5A38",
    accentSoft: "#E8EFE6",
    text: "#0E1213",
    subtext: "#3B5A38",
    pattern: "#3B5A38",
    sourceLine: "#3B5A38",
  },
  clay: {
    paper: "#FBFAF6",
    paper2: "#F5EFE2",
    accent: "#C9A55B",
    accentDeep: "#8A6E2F",
    accentSoft: "#F5EFE2",
    text: "#0E1213",
    subtext: "#8A6E2F",
    pattern: "#8A6E2F",
    sourceLine: "#8A6E2F",
  },
  ink: {
    paper: "#FBFAF6",
    paper2: "#ECEAE2",
    accent: "#1B1F1F",
    accentDeep: "#0E1213",
    accentSoft: "#ECEAE2",
    text: "#0E1213",
    subtext: "#1B1F1F",
    pattern: "#1B1F1F",
    sourceLine: "#1B1F1F",
  },
};

// Map each pick to a theme. Hand-curated for variety; doa with similar
// timing get distinct themes so the wallpaper page is visually rich.
const THEME_FOR = {
  "sebelum-tidur": "brave",
  "bangun-tidur": "sage",
  "sebelum-makan": "clay",
  "sesudah-makan": "ink",
  "doa-pagi": "sage",
  "doa-petang": "brave",
  "perlindungan-anak": "ink",
  "doa-untuk-orang-tua": "clay",
};

// ──────────────────────────────────────────────────────────────────
const src = readFileSync(DOA_FILE, "utf8");

function unesc(s) {
  return s.replace(/\\"/g, '"').replace(/\\n/g, "\n");
}

function extractDoa(s) {
  const out = [];
  const slugRe = /slug:\s*"([a-z0-9-]+)"/g;
  let m;
  while ((m = slugRe.exec(s))) {
    const slug = m[1];
    const win = s.slice(m.index, m.index + 2500);
    const arabicM = win.match(/arabic:\s*"((?:[^"\\]|\\.)*)"/);
    if (!arabicM) continue;
    const arabic = unesc(arabicM[1]);

    const transBlock = win.match(/translation:\s*\{([^}]+)\}/);
    let tid = "";
    if (transBlock) {
      const a = transBlock[1].match(/id:\s*"((?:[^"\\]|\\.)*)"/);
      tid = a ? unesc(a[1]) : "";
    }
    const titleBlock = win.match(/title:\s*\{([^}]+)\}/);
    let titleId = "";
    if (titleBlock) {
      const a = titleBlock[1].match(/id:\s*"((?:[^"\\]|\\.)*)"/);
      titleId = a ? unesc(a[1]) : "";
    }
    const sourceRef = (win.match(/reference:\s*"((?:[^"\\]|\\.)*)"/) ?? [])[1] ?? "";

    out.push({ slug, arabic, translationId: tid, titleId, source: sourceRef });
  }
  return out;
}

function xe(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Soft wrap text by character count
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

function svgFor(doa) {
  const theme = THEMES[THEME_FOR[doa.slug] ?? "brave"];

  // iPhone safe zones: top ~21% for clock, bottom ~22% for widgets.
  // Content fills the middle ~57%.
  const SAFE_TOP = 540;
  const SAFE_BOTTOM = 560;
  const CONTENT_TOP = SAFE_TOP + 90;
  // CONTENT_BOTTOM reserved by layout math; not explicit anywhere below.

  // Arabic sizing — bumped up across the board for more visual presence.
  const arabicLen = doa.arabic.length;
  const arabicSize =
    arabicLen <= 35 ? 110 : arabicLen <= 65 ? 88 : arabicLen <= 95 ? 70 : 56;
  const arabicMax = arabicLen <= 35 ? 14 : arabicLen <= 65 ? 22 : 28;
  const arabicLines = wrap(doa.arabic, arabicMax, 4);
  const arabicLineHeight = arabicSize * 1.65;
  const arabicBlockH = arabicLines.length * arabicLineHeight;

  // Translation
  const transLines = wrap(doa.translationId, 34, 4);
  const transLineHeight = 46;

  // Layout: arabic block centered, translation below
  const arabicStartY = CONTENT_TOP + 130;
  const transStartY = arabicStartY + arabicBlockH + 80;

  // Decorative 8-point star (subtle, behind everything in upper area)
  const starCx = W / 2;
  const starCy = CONTENT_TOP + arabicBlockH / 2 + 20;
  const starR = 380;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${theme.paper}"/>
      <stop offset="40%" stop-color="${theme.paper}"/>
      <stop offset="100%" stop-color="${theme.paper2}"/>
    </linearGradient>
    <radialGradient id="aura" cx="50%" cy="38%" r="60%">
      <stop offset="0%" stop-color="${theme.accentSoft}" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="${theme.accentSoft}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${theme.accentSoft}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="topGlow" cx="50%" cy="0%" r="50%">
      <stop offset="0%" stop-color="${theme.accent}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${theme.accent}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bottomGlow" cx="50%" cy="100%" r="55%">
      <stop offset="0%" stop-color="${theme.accent}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="${theme.accent}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" x="0" y="0" width="52" height="52" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.3" fill="${theme.pattern}" fill-opacity="0.18"/>
    </pattern>
  </defs>

  <!-- Layered background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#topGlow)"/>
  <rect width="${W}" height="${H}" fill="url(#bottomGlow)"/>
  <rect width="${W}" height="${H}" fill="url(#aura)"/>

  <!-- Decorative 8-point star (subtle frame behind arabic) -->
  <g opacity="0.07" transform="translate(${starCx}, ${starCy})">
    <path d="
      M 0,${-starR}
      L ${starR * 0.31},${-starR * 0.31}
      L ${starR},0
      L ${starR * 0.31},${starR * 0.31}
      L 0,${starR}
      L ${-starR * 0.31},${starR * 0.31}
      L ${-starR},0
      L ${-starR * 0.31},${-starR * 0.31}
      Z" fill="${theme.accent}"/>
    <path d="
      M 0,${-starR}
      L ${starR * 0.31},${-starR * 0.31}
      L ${starR},0
      L ${starR * 0.31},${starR * 0.31}
      L 0,${starR}
      L ${-starR * 0.31},${starR * 0.31}
      L ${-starR},0
      L ${-starR * 0.31},${-starR * 0.31}
      Z" transform="rotate(22.5)" fill="${theme.accent}"/>
  </g>

  <!-- Top accent — decorative crescent moon -->
  <g transform="translate(${W / 2}, ${SAFE_TOP + 35})" opacity="0.85">
    <circle cx="0" cy="0" r="22" fill="${theme.accent}"/>
    <circle cx="9" cy="-4" r="22" fill="${theme.paper}"/>
  </g>

  <!-- Accent line beneath crescent -->
  <line x1="${W / 2 - 80}" y1="${SAFE_TOP + 86}" x2="${W / 2 + 80}" y2="${SAFE_TOP + 86}"
        stroke="${theme.accent}" stroke-width="3" stroke-linecap="round"/>

  <!-- Eyebrow: doa title in caps -->
  <text x="${W / 2}" y="${SAFE_TOP + 140}" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', sans-serif"
        font-weight="700" font-size="26" letter-spacing="7"
        fill="${theme.accentDeep}">${xe(doa.titleId.toUpperCase())}</text>

  <!-- Arabic block - large, centered, RTL -->
  ${arabicLines
    .map(
      (line, i) =>
        `<text x="${W / 2}" y="${arabicStartY + i * arabicLineHeight}" text-anchor="middle"
        direction="rtl"
        font-family="'Noto Naskh Arabic', 'Amiri', serif"
        font-weight="500" font-size="${arabicSize}" fill="${theme.text}">${xe(line)}</text>`,
    )
    .join("\n  ")}

  <!-- Decorative bracket below Arabic -->
  <line x1="${W / 2 - 50}" y1="${arabicStartY + arabicBlockH + 20}"
        x2="${W / 2 + 50}" y2="${arabicStartY + arabicBlockH + 20}"
        stroke="${theme.accent}" stroke-width="2" stroke-linecap="round" opacity="0.6"/>

  <!-- Translation -->
  ${transLines
    .map(
      (line, i) =>
        `<text x="${W / 2}" y="${transStartY + i * transLineHeight}" text-anchor="middle"
        font-family="'Newsreader', 'DejaVu Serif', Georgia, serif"
        font-weight="400" font-style="italic" font-size="32"
        fill="${theme.subtext}">${xe(line)}</text>`,
    )
    .join("\n  ")}

  <!-- Source reference -->
  ${doa.source
    ? `<text x="${W / 2}" y="${transStartY + transLines.length * transLineHeight + 70}" text-anchor="middle"
        font-family="Inter, sans-serif" font-weight="600" font-size="22" letter-spacing="2"
        fill="${theme.sourceLine}">— ${xe(doa.source).toUpperCase()}</text>`
    : ""}

  <!-- Brand wordmark in safe-bottom area with accent line -->
  <line x1="${W / 2 - 40}" y1="${H - SAFE_BOTTOM + 24}" x2="${W / 2 + 40}" y2="${H - SAFE_BOTTOM + 24}"
        stroke="${theme.accent}" stroke-width="2" stroke-linecap="round"/>
  <text x="${W / 2}" y="${H - SAFE_BOTTOM + 64}" text-anchor="middle"
        font-family="Inter, sans-serif" font-weight="700" font-size="26" letter-spacing="5"
        fill="${theme.text}">BABY MO</text>
  <text x="${W / 2}" y="${H - SAFE_BOTTOM + 100}" text-anchor="middle"
        font-family="Inter, sans-serif" font-weight="400" font-size="20" letter-spacing="3"
        fill="${theme.subtext}" opacity="0.7">BABYMO.ID</text>
</svg>`;
}

// ──────────────────────────────────────────────────────────────────
const allDoa = extractDoa(src);
const byslug = new Map(allDoa.map((d) => [d.slug, d]));

const picks = PICKS.map((s) => byslug.get(s)).filter(Boolean);
if (picks.length !== PICKS.length) {
  console.warn(
    `[lockscreen] ⚠ ${PICKS.length - picks.length} picked slug(s) not found in doa.ts`,
  );
}

mkdirSync(OUT_DIR, { recursive: true });

let count = 0;
let skipped = 0;
const tmpSvg = join(ROOT, ".lockscreen-tmp.svg");
const tmpPng = join(ROOT, ".lockscreen-tmp.png");

for (const d of picks) {
  const out = join(OUT_DIR, `${d.slug}.jpg`);
  if (existsSync(out) && !FORCE) {
    skipped++;
    continue;
  }
  writeFileSync(tmpSvg, svgFor(d), "utf8");
  execSync(`rsvg-convert -w ${W} -h ${H} -o "${tmpPng}" "${tmpSvg}"`, { stdio: "pipe" });
  execSync(`convert "${tmpPng}" -quality 92 -interlace plane "${out}"`, { stdio: "pipe" });
  count++;
}

try {
  rmSync(tmpSvg, { force: true });
  rmSync(tmpPng, { force: true });
} catch (_) {}

console.log(
  `[lockscreen] Generated ${count} (skipped ${skipped}) into ${OUT_DIR}`,
);
