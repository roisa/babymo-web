// Generates 1170×2532 (iPhone Pro size) lockscreen wallpapers.
// Direction: elegant + calm + minimal. The Arabic is the wallpaper.
// Heavy negative space, refined hierarchy, no decorative clutter.
// Per-doa themes rotate two light + two dark for visual variety.
// Single small "babymo.id" wordmark in subdued grey at bottom.
//
// Output: public/lockscreens/{slug}.jpg
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

const PICKS = [
  "sebelum-tidur",
  "bangun-tidur",
  "sebelum-makan",
  "sesudah-makan",
  "doa-pagi",
  "doa-petang",
  "perlindungan-anak",
  "doa-untuk-orang-tua",
];

// ──────────────────────────────────────────────────────────────────
// Four themes — two light, two dark. Each cleaned of ornament.
// "isDark" flips the wordmark / source-line legibility.
// ──────────────────────────────────────────────────────────────────
const THEMES = {
  // Pearl — soft warm cream, ink Arabic, subtle sage accent dot
  pearl: {
    isDark: false,
    bgTop: "#FBFAF6",
    bgBottom: "#F2EFE6",
    glow: "#E8EFE6",
    arabic: "#0E1213",
    translation: "#3B4039",
    eyebrow: "#5F8B5A",
    accent: "#5F8B5A",
    sourceRef: "#7A7F76",
    wordmark: "#9CA09A",
  },
  // Sand — warm beige, ink Arabic, muted gold accent
  sand: {
    isDark: false,
    bgTop: "#FAF6EC",
    bgBottom: "#EFE6D2",
    glow: "#F5EFE2",
    arabic: "#1A1F18",
    translation: "#4A4632",
    eyebrow: "#8A6E2F",
    accent: "#C9A55B",
    sourceRef: "#8A7A52",
    wordmark: "#A39A82",
  },
  // Midnight — deep warm ink, cream Arabic, subtle gold accent
  midnight: {
    isDark: true,
    bgTop: "#161817",
    bgBottom: "#0C0E0D",
    glow: "#1F2520",
    arabic: "#F5F0E4",
    translation: "#BFBAA8",
    eyebrow: "#C9A55B",
    accent: "#C9A55B",
    sourceRef: "#94907D",
    wordmark: "#6E6A5E",
  },
  // Forest — deep sage, cream Arabic, brave-green accent
  forest: {
    isDark: true,
    bgTop: "#1F2A20",
    bgBottom: "#152018",
    glow: "#2A3A2C",
    arabic: "#F2EEDC",
    translation: "#C0BBA5",
    eyebrow: "#7FB17A",
    accent: "#7FB17A",
    sourceRef: "#909078",
    wordmark: "#6B6E5C",
  },
};

// Per-doa theme assignment — mixed for visual variety on the
// downloads page. Hand-curated so adjacent picks don't repeat.
const THEME_FOR = {
  "sebelum-tidur": "midnight",
  "bangun-tidur": "pearl",
  "sebelum-makan": "sand",
  "sesudah-makan": "pearl",
  "doa-pagi": "sand",
  "doa-petang": "midnight",
  "perlindungan-anak": "forest",
  "doa-untuk-orang-tua": "pearl",
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
  const theme = THEMES[THEME_FOR[doa.slug] ?? "pearl"];

  // iPhone safe zones — top 540 reserved for clock, bottom 560 for widgets.
  const SAFE_TOP = 540;
  const SAFE_BOTTOM = 560;

  // Arabic sizing — larger to fill the space when ornament is gone.
  const arabicLen = doa.arabic.length;
  const arabicSize =
    arabicLen <= 35 ? 118 : arabicLen <= 65 ? 92 : arabicLen <= 95 ? 72 : 58;
  const arabicMax = arabicLen <= 35 ? 14 : arabicLen <= 65 ? 22 : 28;
  const arabicLines = wrap(doa.arabic, arabicMax, 4);
  const arabicLineHeight = arabicSize * 1.6;
  const arabicBlockH = arabicLines.length * arabicLineHeight;

  // Translation
  const transLines = wrap(doa.translationId, 36, 4);
  const transLineHeight = 44;

  // Layout — vertically centered around the screen midline minus a
  // small upward offset (eye gravitates above geometric center)
  const contentMid = H * 0.5 - 60;
  const arabicStartY = contentMid - arabicBlockH / 2 + arabicSize * 0.85;
  const transStartY = contentMid + arabicBlockH / 2 + 80;

  // Eyebrow position — well above arabic block
  const eyebrowY = arabicStartY - arabicSize * 0.85 - 80;

  // Accent dot — single tiny mark between eyebrow and arabic
  const dotY = eyebrowY + 30;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="${theme.bgTop}"/>
      <stop offset="100%" stop-color="${theme.bgBottom}"/>
    </linearGradient>
    <radialGradient id="aura" cx="50%" cy="42%" r="55%">
      <stop offset="0%" stop-color="${theme.glow}" stop-opacity="${theme.isDark ? 0.55 : 0.85}"/>
      <stop offset="100%" stop-color="${theme.glow}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Layered background: vertical gradient + soft central glow -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#aura)"/>

  <!-- Eyebrow: doa title, small caps -->
  <text x="${W / 2}" y="${eyebrowY}" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', sans-serif"
        font-weight="600" font-size="22" letter-spacing="8"
        fill="${theme.eyebrow}">${xe(doa.titleId.toUpperCase())}</text>

  <!-- Single accent dot below eyebrow — replaces the busy decorations -->
  <circle cx="${W / 2}" cy="${dotY + 32}" r="3" fill="${theme.accent}"/>

  <!-- Arabic block — the wallpaper itself -->
  ${arabicLines
    .map(
      (line, i) =>
        `<text x="${W / 2}" y="${arabicStartY + i * arabicLineHeight}" text-anchor="middle"
        direction="rtl"
        font-family="'Noto Naskh Arabic', 'Amiri', serif"
        font-weight="500" font-size="${arabicSize}" fill="${theme.arabic}">${xe(line)}</text>`,
    )
    .join("\n  ")}

  <!-- Translation — small italic serif, generous spacing -->
  ${transLines
    .map(
      (line, i) =>
        `<text x="${W / 2}" y="${transStartY + i * transLineHeight}" text-anchor="middle"
        font-family="'Newsreader', 'DejaVu Serif', Georgia, serif"
        font-weight="400" font-style="italic" font-size="28"
        fill="${theme.translation}">${xe(line)}</text>`,
    )
    .join("\n  ")}

  <!-- Source reference — even smaller, tracked, well below translation -->
  ${doa.source
    ? `<text x="${W / 2}" y="${transStartY + transLines.length * transLineHeight + 60}" text-anchor="middle"
        font-family="Inter, sans-serif" font-weight="500" font-size="18" letter-spacing="3"
        fill="${theme.sourceRef}">${xe(doa.source).toUpperCase()}</text>`
    : ""}

  <!-- Single small wordmark in safe-bottom area — non-dominant -->
  <text x="${W / 2}" y="${H - SAFE_BOTTOM + 70}" text-anchor="middle"
        font-family="Inter, sans-serif" font-weight="500" font-size="18" letter-spacing="3"
        fill="${theme.wordmark}">babymo.id</text>
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
