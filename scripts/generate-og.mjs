// Generates a unique 1200x630 OG image for every blog post in both locales.
//
// Renders via SVG → PNG (rsvg-convert) for reliable text rendering.
// SVG gives us proper typography, brand colors, and wrapping control.
//
// Design:
// - Cream paper background with subtle paper texture
// - Sage gradient accent in the corner
// - Small Baby Mo brand mark (top-left)
// - Large serif title (auto-wraps to 2-4 lines)
// - Optional excerpt snippet below title
// - Domain + reading-time strip at bottom
// - Small mascot watermark (bottom-right, semi-transparent)
//
// Idempotent — already-generated files are skipped unless --force passed.

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
const BLOG_FILE = join(ROOT, "lib/content/blog.ts");
const OUT_DIR = join(ROOT, "public/og/blog");
const FORCE = process.argv.includes("--force");

const W = 1200;
const H = 630;

// Brand tokens — mirror globals.css
const C = {
  paper: "#FBFAF6",
  paper2: "#F4F2EC",
  ink: "#0E1213",
  inkSoft: "#1B1F1F",
  sage: "#5F8B5A",
  sageDeep: "#3B5A38",
  sageSoft: "#E8EFE6",
  clay: "#C9A55B",
  claySoft: "#F5EFE2",
  hairline: "#E5E2D9",
  whisper: "#6B7068",
};

// ────────────────────────────────────────────────────────────────────
// Parse blog.ts for {slug, title.id, title.en, excerpt.id, excerpt.en,
// tags, readingTimeMin}. Lightweight regex pass — we never eval TS.
// ────────────────────────────────────────────────────────────────────
const src = readFileSync(BLOG_FILE, "utf8");

function extractPosts(s) {
  const posts = [];
  const slugRe = /slug:\s*"([a-z0-9-]+)"/g;
  let m;
  while ((m = slugRe.exec(s))) {
    const slug = m[1];
    const windowSize = 3000;
    const win = s.slice(m.index, m.index + windowSize);

    // title.id and title.en — first pair after slug
    const titleBlock = win.match(/title:\s*\{([^}]+)\}/);
    if (!titleBlock) continue;
    const tid = titleBlock[1].match(/id:\s*"((?:[^"\\]|\\.)*)"/);
    const ten = titleBlock[1].match(/en:\s*"((?:[^"\\]|\\.)*)"/);
    if (!tid || !ten) continue;

    // excerpt.id and excerpt.en
    let eid = "", een = "";
    const excerptBlock = win.match(/excerpt:\s*\{([^}]+)\}/);
    if (excerptBlock) {
      const x1 = excerptBlock[1].match(/id:\s*"((?:[^"\\]|\\.)*)"/);
      const x2 = excerptBlock[1].match(/en:\s*"((?:[^"\\]|\\.)*)"/);
      eid = x1 ? unescape(x1[1]) : "";
      een = x2 ? unescape(x2[1]) : "";
    }

    // First tag (eyebrow category)
    const tagsMatch = win.match(/tags:\s*\[\s*"([a-z0-9-]+)"/);
    const tag = tagsMatch ? tagsMatch[1] : "";

    // Reading time
    const rtMatch = win.match(/readingTimeMin:\s*(\d+)/);
    const rt = rtMatch ? parseInt(rtMatch[1], 10) : 0;

    posts.push({
      slug,
      id: unescape(tid[1]),
      en: unescape(ten[1]),
      excerptId: eid,
      excerptEn: een,
      tag,
      rt,
    });
  }
  return posts;
}

function unescape(s) {
  return s.replace(/\\"/g, '"').replace(/\\n/g, "\n");
}

// XML-escape for SVG attribute / text content
function xe(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Rough char-width-based wrap. SVG doesn't auto-wrap; we calculate.
// Uses character count heuristic — good enough for our brand fonts.
function wrap(text, maxCharsPerLine, maxLines) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = "";
  for (const w of words) {
    if (lines.length === maxLines - 1) {
      // Last line — keep packing then ellipsize if overrunning
      const candidate = cur ? cur + " " + w : w;
      if (candidate.length > maxCharsPerLine - 1) {
        cur = (cur + " …").trim();
        break;
      }
      cur = candidate;
    } else if ((cur + " " + w).trim().length > maxCharsPerLine) {
      lines.push(cur);
      cur = w;
    } else {
      cur = (cur + " " + w).trim();
    }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, maxLines);
}

const TAG_LABEL_ID = {
  muharram: "MUHARRAM",
  "tahun-baru-hijriyah": "TAHUN BARU HIJRIYAH",
  dzulhijjah: "DZULHIJJAH",
  "idul-adha": "IDUL ADHA",
  asyura: "ASYURA",
  hijrah: "HIJRAH",
  sholat: "SHOLAT",
  doa: "DOA HARIAN",
  hijaiyah: "HIJAIYAH",
  parenting: "PARENTING",
  saudara: "SAUDARA",
  adab: "ADAB",
  akhlak: "AKHLAK",
  masjid: "MASJID",
  "cerita-nabi": "KISAH NABI",
  "kisah-nabi": "KISAH NABI",
  dzikir: "DZIKIR",
  emosi: "EMOSI",
  sunnah: "SUNNAH",
  perlindungan: "PERLINDUNGAN",
  rutinitas: "RUTINITAS",
  edukasi: "EDUKASI",
  tarbiyah: "TARBIYAH",
  identitas: "IDENTITAS",
  "tujuh-tahun": "USIA 7 TAHUN",
  balita: "BALITA",
  "ibadah-musiman": "IBADAH MUSIMAN",
  puasa: "PUASA",
  "hijaiyah-doa": "DOA HARIAN",
  "sejarah-islam": "SEJARAH ISLAM",
};

const TAG_LABEL_EN = {
  muharram: "MUHARRAM",
  "tahun-baru-hijriyah": "HIJRI NEW YEAR",
  dzulhijjah: "DHUL HIJJAH",
  "idul-adha": "EID AL-ADHA",
  asyura: "ASYURA",
  hijrah: "HIJRAH",
  sholat: "PRAYER",
  doa: "DAILY DUAS",
  hijaiyah: "ARABIC ALPHABET",
  parenting: "PARENTING",
  saudara: "SIBLINGS",
  adab: "MANNERS",
  akhlak: "CHARACTER",
  masjid: "MOSQUE",
  "cerita-nabi": "PROPHET STORIES",
  "kisah-nabi": "PROPHET STORIES",
  dzikir: "DHIKR",
  emosi: "EMOTION",
  sunnah: "SUNNAH",
  perlindungan: "PROTECTION",
  rutinitas: "ROUTINE",
  edukasi: "EDUCATION",
  tarbiyah: "UPBRINGING",
  identitas: "IDENTITY",
  "tujuh-tahun": "AGE SEVEN",
  balita: "TODDLER",
  "ibadah-musiman": "SEASONAL",
  puasa: "FASTING",
  "hijaiyah-doa": "DAILY DUAS",
  "sejarah-islam": "ISLAMIC HISTORY",
};

const STRINGS = {
  id: {
    brand: "BABY MO",
    minRead: "menit baca",
    domain: "babymo.id",
  },
  en: {
    brand: "BABY MO",
    minRead: "min read",
    domain: "babymo.id",
  },
};

// ────────────────────────────────────────────────────────────────────
// Build the SVG markup for one card
// ────────────────────────────────────────────────────────────────────
function svgFor({ title, excerpt, tag, rt }, locale) {
  const S = STRINGS[locale];
  const eyebrowTag =
    (locale === "id" ? TAG_LABEL_ID : TAG_LABEL_EN)[tag] ?? tag.toUpperCase();

  // Title sizing — tuned smaller. Centered composition so WhatsApp /
  // Twitter center-crop still works.
  const titleLen = title.length;
  const titleSize = titleLen <= 40 ? 60 : titleLen <= 70 ? 52 : titleLen <= 110 ? 46 : 40;
  const titleMaxChars = titleLen <= 40 ? 22 : titleLen <= 70 ? 28 : 34;
  const titleLines = wrap(title, titleMaxChars, 4);
  const titleLineHeight = titleSize * 1.22;
  const titleBlockH = titleLines.length * titleLineHeight;

  // Vertically center the title block with a slight upward bias
  const contentMid = H * 0.5 - 15;
  const titleStartY = contentMid - titleBlockH / 2 + titleSize * 0.85;

  // Excerpt is short — 1 line max
  const excerptLines = excerpt ? wrap(excerpt, 75, 1) : [];
  const excerptStartY = titleStartY + titleBlockH + 28;

  const rtStr = rt ? `${rt} ${S.minRead}` : "";

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${C.paper}"/>
      <stop offset="60%" stop-color="${C.sageSoft}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${C.sageSoft}"/>
    </linearGradient>
    <radialGradient id="topGlow" cx="50%" cy="0%" r="55%">
      <stop offset="0%" stop-color="${C.sage}" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="${C.sage}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="centerGlow" cx="50%" cy="50%" r="40%">
      <stop offset="0%" stop-color="${C.paper}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="${C.paper}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="${C.sageDeep}" fill-opacity="0.18"/>
    </pattern>
  </defs>

  <!-- Background: cream → sage gradient with center glow that
       protects title legibility -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#topGlow)"/>
  <rect width="${W}" height="${H}" fill="url(#centerGlow)"/>

  <!-- Decorative crescent in top-left corner — Baby Mo signature mark -->
  <g transform="translate(70, 75)" opacity="0.85">
    <circle cx="0" cy="0" r="14" fill="${C.sageDeep}"/>
    <circle cx="6" cy="-3" r="14" fill="${C.paper}"/>
  </g>

  <!-- Decorative star top-right + clay dot bottom-left — won't be
       cropped by center-square thumbnail -->
  <circle cx="${W - 70}" cy="75" r="3.5" fill="${C.clay}"/>
  <circle cx="${W - 100}" cy="60" r="2" fill="${C.sageDeep}" opacity="0.6"/>
  <circle cx="${W - 50}" cy="100" r="2" fill="${C.sageDeep}" opacity="0.6"/>

  <!-- BABY MO brand mark — centered, top -->
  <text x="${W / 2}" y="100" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
        font-weight="700" font-size="17" letter-spacing="9"
        fill="${C.sageDeep}">${xe(S.brand)}</text>
  <line x1="${W / 2 - 24}" y1="120" x2="${W / 2 + 24}" y2="120"
        stroke="${C.sage}" stroke-width="2" stroke-linecap="round"/>

  <!-- Eyebrow: category tag, centered, smaller -->
  <text x="${W / 2}" y="160" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
        font-weight="600" font-size="14" letter-spacing="6"
        fill="${C.sageDeep}" opacity="0.85">${xe(eyebrowTag)}</text>

  <!-- Title — centered, medium serif weight, refined size -->
  ${titleLines
    .map(
      (line, i) =>
        `<text x="${W / 2}" y="${titleStartY + i * titleLineHeight}" text-anchor="middle"
        font-family="'Newsreader', 'DejaVu Serif', Georgia, serif"
        font-weight="500" font-size="${titleSize}" fill="${C.ink}"
        letter-spacing="-1">${xe(line)}</text>`,
    )
    .join("\n  ")}

  <!-- Excerpt — centered, single italic serif line in sage-deep -->
  ${excerptLines
    .map(
      (line, i) =>
        `<text x="${W / 2}" y="${excerptStartY + i * 32}" text-anchor="middle"
        font-family="'Newsreader', 'DejaVu Serif', Georgia, serif"
        font-weight="400" font-style="italic" font-size="22" fill="${C.sageDeep}" opacity="0.85">${xe(line)}</text>`,
    )
    .join("\n  ")}

  <!-- Bottom strip: thin sage line + babymo.id + reading time -->
  <line x1="${W / 2 - 60}" y1="${H - 92}" x2="${W / 2 + 60}" y2="${H - 92}"
        stroke="${C.sage}" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
  <text x="${W / 2}" y="${H - 58}" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
        font-weight="600" font-size="18" letter-spacing="4"
        fill="${C.sageDeep}">${xe(S.domain.toUpperCase())}</text>
  ${
    rtStr
      ? `<text x="${W / 2}" y="${H - 32}" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
        font-weight="400" font-size="13" letter-spacing="2"
        fill="${C.whisper}" opacity="0.7">${xe(rtStr.toUpperCase())}</text>`
      : ""
  }
</svg>`;
}

// ────────────────────────────────────────────────────────────────────
// Main
// ────────────────────────────────────────────────────────────────────
const posts = extractPosts(src);
console.log(`[og] Found ${posts.length} blog posts`);

mkdirSync(join(OUT_DIR, "id"), { recursive: true });
mkdirSync(join(OUT_DIR, "en"), { recursive: true });

let count = 0;
let skipped = 0;

const tmpSvg = join(ROOT, ".og-tmp.svg");

for (const p of posts) {
  for (const locale of ["id", "en"]) {
    const out = join(OUT_DIR, locale, `${p.slug}.jpg`);
    if (existsSync(out) && !FORCE) {
      skipped++;
      continue;
    }
    mkdirSync(dirname(out), { recursive: true });
    const svg = svgFor(
      {
        title: locale === "id" ? p.id : p.en,
        excerpt: locale === "id" ? p.excerptId : p.excerptEn,
        tag: p.tag,
        rt: p.rt,
      },
      locale,
    );
    writeFileSync(tmpSvg, svg, "utf8");

    // Rasterize to PNG first (rsvg-convert), then encode as JPEG with convert
    const tmpPng = join(ROOT, ".og-tmp.png");
    execSync(
      `rsvg-convert -w ${W} -h ${H} -o "${tmpPng}" "${tmpSvg}"`,
      { stdio: "pipe" },
    );
    execSync(
      `convert "${tmpPng}" -quality 88 -interlace plane "${out}"`,
      { stdio: "pipe" },
    );

    count++;
  }
}

// Clean up
try {
  rmSync(tmpSvg, { force: true });
  rmSync(join(ROOT, ".og-tmp.png"), { force: true });
} catch (_) {}

console.log(
  `[og] Generated ${count} images (skipped ${skipped} cached) into ${OUT_DIR}`,
);
