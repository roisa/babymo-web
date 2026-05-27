// Generates 1170×2532 (iPhone Pro size) lockscreen wallpapers for a
// curated set of daily duas. Arabic-led vertical composition, calm
// cream/sage gradient, Baby Mo wordmark at bottom. Output:
//   public/lockscreens/{slug}.jpg
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

// Curated subset — the most-recited daily duas. Order matters for
// the downloads page (first one is the "featured" one shown larger).
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

const C = {
  paper: "#FBFAF6",
  paper2: "#F4F2EC",
  ink: "#0E1213",
  brave: "#1F8B3F",
  braveDeep: "#155F2A",
  braveSoft: "#DCEFE0",
  sage: "#5F8B5A",
  sageDeep: "#3B5A38",
  sageSoft: "#E8EFE6",
  whisper: "#6B7068",
  hairline: "#E5E2D9",
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
  // Reserve top ~30% for status bar / clock visibility on iOS,
  // bottom ~22% for date/notifications widget area. Content fills
  // the middle 48%.
  const SAFE_TOP = 540;
  const SAFE_BOTTOM = 560;
  const CONTENT_TOP = SAFE_TOP + 100;
  const CONTENT_BOTTOM = H - SAFE_BOTTOM - 100;

  // Arabic sizing — bigger because portrait gives us room
  const arabicLen = doa.arabic.length;
  const arabicSize =
    arabicLen <= 35 ? 96 : arabicLen <= 65 ? 76 : arabicLen <= 95 ? 60 : 48;
  const arabicMax = arabicLen <= 35 ? 14 : arabicLen <= 65 ? 22 : 28;
  const arabicLines = wrap(doa.arabic, arabicMax, 4);
  const arabicLineHeight = arabicSize * 1.7;
  const arabicBlockH = arabicLines.length * arabicLineHeight;

  // Translation
  const transLines = wrap(doa.translationId, 32, 4);
  const transLineHeight = 44;

  // Layout: arabic block centered in upper content area, translation below
  const arabicStartY = CONTENT_TOP + arabicBlockH / arabicLines.length * 0.5;
  const transStartY = arabicStartY + arabicBlockH + 70;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${C.paper}"/>
      <stop offset="50%" stop-color="${C.paper}"/>
      <stop offset="100%" stop-color="${C.paper2}"/>
    </linearGradient>
    <radialGradient id="aura" cx="50%" cy="35%" r="55%">
      <stop offset="0%" stop-color="${C.braveSoft}" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="${C.braveSoft}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" x="0" y="0" width="44" height="44" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="${C.hairline}" fill-opacity="0.5"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#aura)"/>

  <!-- Decorative brave-green band near top of content area -->
  <line x1="${W/2 - 60}" y1="${SAFE_TOP + 40}" x2="${W/2 + 60}" y2="${SAFE_TOP + 40}"
        stroke="${C.brave}" stroke-width="4" stroke-linecap="round"/>

  <!-- Eyebrow -->
  <text x="${W/2}" y="${SAFE_TOP + 90}" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', sans-serif"
        font-weight="700" font-size="26" letter-spacing="6"
        fill="${C.braveDeep}">${xe(doa.titleId.toUpperCase())}</text>

  <!-- Arabic block - large, centered, RTL -->
  ${arabicLines
    .map(
      (line, i) =>
        `<text x="${W/2}" y="${arabicStartY + i * arabicLineHeight}" text-anchor="middle"
        direction="rtl"
        font-family="'Noto Naskh Arabic', 'Amiri', serif"
        font-weight="500" font-size="${arabicSize}" fill="${C.ink}">${xe(line)}</text>`,
    )
    .join("\n  ")}

  <!-- Translation -->
  ${transLines
    .map(
      (line, i) =>
        `<text x="${W/2}" y="${transStartY + i * transLineHeight}" text-anchor="middle"
        font-family="'Newsreader', 'DejaVu Serif', Georgia, serif"
        font-weight="400" font-style="italic" font-size="30"
        fill="${C.whisper}">${xe(line)}</text>`,
    )
    .join("\n  ")}

  <!-- Source reference -->
  ${doa.source
    ? `<text x="${W/2}" y="${transStartY + transLines.length * transLineHeight + 60}" text-anchor="middle"
        font-family="Inter, sans-serif" font-weight="600" font-size="22"
        fill="${C.sageDeep}">— ${xe(doa.source)}</text>`
    : ""}

  <!-- Brand wordmark in safe-bottom area -->
  <text x="${W/2}" y="${H - SAFE_BOTTOM + 50}" text-anchor="middle"
        font-family="Inter, sans-serif" font-weight="700" font-size="24" letter-spacing="3"
        fill="${C.ink}">BABY MO</text>
  <text x="${W/2}" y="${H - SAFE_BOTTOM + 86}" text-anchor="middle"
        font-family="Inter, sans-serif" font-weight="400" font-size="20"
        fill="${C.whisper}">babymo.id</text>
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
