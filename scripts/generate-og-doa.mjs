// Generates a unique 1200x630 OG image for every doa in both locales.
//
// Design: Arabic text is the hero, large + centered. Translation snippet
// underneath. Source ref + brand strip at bottom. Cream paper bg with sage
// accent — same brand language as blog OG but Arabic-led composition.
//
// Output: public/og/doa/{locale}/{slug}.jpg

import { execSync } from "node:child_process";
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  rmSync,
} from "node:fs";
import { join, dirname } from "node:path";

const ROOT = process.cwd();
const DOA_FILE = join(ROOT, "lib/content/doa.ts");
const OUT_DIR = join(ROOT, "public/og/doa");
const FORCE = process.argv.includes("--force");

const W = 1200;
const H = 630;

const C = {
  paper: "#FBFAF6",
  paper2: "#F4F2EC",
  ink: "#0E1213",
  sage: "#5F8B5A",
  sageDeep: "#3B5A38",
  sageSoft: "#E8EFE6",
  clay: "#C9A55B",
  claySoft: "#F5EFE2",
  hairline: "#E5E2D9",
  whisper: "#6B7068",
};

// ──────────────────────────────────────────────────────────────────
// Parse doa.ts — slug, arabic, translation.id, translation.en, source
// ──────────────────────────────────────────────────────────────────
const src = readFileSync(DOA_FILE, "utf8");

function unesc(s) {
  return s.replace(/\\"/g, '"').replace(/\\n/g, "\n");
}

function extractDoa(s) {
  const out = [];
  // Match each doa object: slug:"…", arabic:"…", translation:{id:"…",en:"…"},
  // source:{...reference:"…"...}
  const slugRe = /slug:\s*"([a-z0-9-]+)"/g;
  let m;
  while ((m = slugRe.exec(s))) {
    const slug = m[1];
    const win = s.slice(m.index, m.index + 2500);
    const arabicM = win.match(/arabic:\s*"((?:[^"\\]|\\.)*)"/);
    if (!arabicM) continue;
    const arabic = unesc(arabicM[1]);

    const transBlock = win.match(/translation:\s*\{([^}]+)\}/);
    let tid = "", ten = "";
    if (transBlock) {
      const a = transBlock[1].match(/id:\s*"((?:[^"\\]|\\.)*)"/);
      const b = transBlock[1].match(/en:\s*"((?:[^"\\]|\\.)*)"/);
      tid = a ? unesc(a[1]) : "";
      ten = b ? unesc(b[1]) : "";
    }

    const sourceRef = (win.match(/reference:\s*"((?:[^"\\]|\\.)*)"/) ?? [])[1] ?? "";

    const titleBlock = win.match(/title:\s*\{([^}]+)\}/);
    let titleId = "", titleEn = "";
    if (titleBlock) {
      const a = titleBlock[1].match(/id:\s*"((?:[^"\\]|\\.)*)"/);
      const b = titleBlock[1].match(/en:\s*"((?:[^"\\]|\\.)*)"/);
      titleId = a ? unesc(a[1]) : "";
      titleEn = b ? unesc(b[1]) : "";
    }

    out.push({ slug, arabic, translation: { id: tid, en: ten }, title: { id: titleId, en: titleEn }, source: sourceRef });
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

// Wrap by character count — rough but consistent
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

function svgFor(doa, locale) {
  // Arabic sizing: shrink as length grows
  const arabicLen = doa.arabic.length;
  const arabicSize =
    arabicLen <= 35 ? 78 : arabicLen <= 65 ? 60 : arabicLen <= 95 ? 48 : 40;

  // Wrap Arabic if very long. SVG doesn't auto-wrap; do a soft wrap on
  // whitespace approximating 38 chars per line at the chosen size.
  const arabicMax = arabicLen <= 35 ? 99 : arabicLen <= 65 ? 50 : 38;
  const arabicLines = wrap(doa.arabic, arabicMax, 3);
  const arabicLineHeight = arabicSize * 1.55;

  // Translation wrap: shorter sentences
  const translation = locale === "id" ? doa.translation.id : doa.translation.en;
  const transLines = wrap(translation, 70, 2);

  // Vertical layout: arabic block centered upper, translation centered below
  const arabicBlockHeight = arabicLines.length * arabicLineHeight;
  const arabicStartY = 240;
  const transStartY = arabicStartY + arabicBlockHeight + 50;

  const eyebrow = locale === "id" ? "BABY MO · DOA HARIAN" : "BABY MO · DAILY DUAS";

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${C.paper}"/>
      <stop offset="100%" stop-color="${C.paper2}"/>
    </linearGradient>
    <radialGradient id="sageAura" cx="50%" cy="20%" r="60%">
      <stop offset="0%" stop-color="${C.sageSoft}" stop-opacity="1"/>
      <stop offset="100%" stop-color="${C.sageSoft}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="${C.hairline}" fill-opacity="0.6"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#sageAura)"/>

  <!-- Sage accent on the left edge -->
  <rect x="0" y="0" width="10" height="${H}" fill="${C.sage}"/>

  <!-- Eyebrow centered top -->
  <text x="${W / 2}" y="120" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', sans-serif"
        font-weight="700" font-size="22" letter-spacing="4"
        fill="${C.sageDeep}">${xe(eyebrow)}</text>
  <line x1="${W / 2 - 40}" y1="148" x2="${W / 2 + 40}" y2="148"
        stroke="${C.sage}" stroke-width="3"/>

  <!-- Arabic — large, centered, RTL -->
  ${arabicLines
    .map((line, i) => `<text x="${W / 2}" y="${arabicStartY + i * arabicLineHeight}" text-anchor="middle"
        direction="rtl"
        font-family="'Noto Naskh Arabic', 'Amiri', serif"
        font-weight="500" font-size="${arabicSize}" fill="${C.ink}">${xe(line)}</text>`)
    .join("\n  ")}

  <!-- Translation — serif, centered, italic-ish -->
  ${transLines
    .map((line, i) => `<text x="${W / 2}" y="${transStartY + i * 38}" text-anchor="middle"
        font-family="'Newsreader', 'DejaVu Serif', Georgia, serif"
        font-weight="400" font-style="italic" font-size="26"
        fill="${C.whisper}">${xe(line)}</text>`)
    .join("\n  ")}

  <!-- Bottom strip: source ref + domain -->
  <line x1="80" y1="${H - 96}" x2="${W - 80}" y2="${H - 96}"
        stroke="${C.hairline}" stroke-width="1"/>
  <text x="80" y="${H - 60}"
        font-family="Inter, sans-serif" font-weight="600" font-size="22"
        fill="${C.ink}">babymo.id</text>
  ${doa.source
    ? `<text x="${W - 80}" y="${H - 60}" text-anchor="end"
        font-family="Inter, sans-serif" font-weight="500" font-size="22"
        fill="${C.whisper}">${xe(doa.source)}</text>`
    : ""}
</svg>`;
}

// ──────────────────────────────────────────────────────────────────
const list = extractDoa(src);
console.log(`[og-doa] Found ${list.length} doa`);

mkdirSync(join(OUT_DIR, "id"), { recursive: true });
mkdirSync(join(OUT_DIR, "en"), { recursive: true });

let count = 0;
let skipped = 0;
const tmpSvg = join(ROOT, ".og-doa-tmp.svg");
const tmpPng = join(ROOT, ".og-doa-tmp.png");

for (const d of list) {
  for (const locale of ["id", "en"]) {
    const out = join(OUT_DIR, locale, `${d.slug}.jpg`);
    if (existsSync(out) && !FORCE) {
      skipped++;
      continue;
    }
    writeFileSync(tmpSvg, svgFor(d, locale), "utf8");
    execSync(`rsvg-convert -w ${W} -h ${H} -o "${tmpPng}" "${tmpSvg}"`, {
      stdio: "pipe",
    });
    execSync(
      `convert "${tmpPng}" -quality 88 -interlace plane "${out}"`,
      { stdio: "pipe" },
    );
    count++;
  }
}

try {
  rmSync(tmpSvg, { force: true });
  rmSync(tmpPng, { force: true });
} catch (_) {}

console.log(`[og-doa] Generated ${count} (skipped ${skipped}) into ${OUT_DIR}`);
