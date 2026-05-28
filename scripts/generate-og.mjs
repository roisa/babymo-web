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
  // Brave green — bolder than sage, used as primary accent
  brave: "#1F8B3F",
  braveDeep: "#155F2A",
  braveSoft: "#DCEFE0",
  sage: "#5F8B5A",
  sageDeep: "#3B5A38",
  sageSoft: "#E8EFE6",
  clay: "#C9A55B",
  claySoft: "#F5EFE2",
  hairline: "#E5E2D9",
  whisper: "#6B7068",
};

// ────────────────────────────────────────────────────────────────────
// Icon library — single-color SVG path data, 80×80 viewBox.
// Each path is filled with the brave-green accent.
// ────────────────────────────────────────────────────────────────────
const ICONS = {
  // Kaaba — square with door, for Hajj / Dzulhijjah content
  kaaba: `<rect x="14" y="20" width="52" height="48" rx="3" fill="currentColor"/>
          <rect x="34" y="48" width="12" height="20" rx="1" fill="#FBFAF6"/>
          <line x1="14" y1="32" x2="66" y2="32" stroke="#C9A55B" stroke-width="3"/>`,
  // Crescent moon + star — Idul Adha / Eid / Sha'ban
  crescentStar: `<path d="M40 12a28 28 0 1 0 22 44 22 22 0 1 1-22-44z" fill="currentColor"/>
                 <polygon points="62,18 64.5,24 71,24 65.5,28 67.5,34 62,30 56.5,34 58.5,28 53,24 59.5,24" fill="currentColor"/>`,
  // Crescent only — Muharram / Hijri new year / Ramadan
  crescent: `<path d="M40 8a32 32 0 1 0 26 50 26 26 0 1 1-26-50z" fill="currentColor"/>`,
  // Mosque dome with two minarets — Sholat / Mosque
  mosque: `<rect x="20" y="34" width="40" height="34" rx="2" fill="currentColor"/>
           <path d="M20 34 Q40 12 60 34 Z" fill="currentColor"/>
           <rect x="14" y="40" width="6" height="28" rx="1" fill="currentColor"/>
           <rect x="60" y="40" width="6" height="28" rx="1" fill="currentColor"/>
           <circle cx="17" cy="38" r="2.5" fill="currentColor"/>
           <circle cx="63" cy="38" r="2.5" fill="currentColor"/>`,
  // Cupped hands (doa position) — Doa / supplication
  hands: `<path d="M16 32 Q14 50 24 64 L40 68 L56 64 Q66 50 64 32 Q60 40 56 42 L56 30 Q56 26 52 26 Q48 26 48 30 L48 42 L44 42 L44 24 Q44 20 40 20 Q36 20 36 24 L36 42 L32 42 L32 30 Q32 26 28 26 Q24 26 24 30 L24 42 Q20 40 16 32 Z" fill="currentColor"/>`,
  // Open book — Kisah Nabi / Story / Education
  book: `<path d="M12 22 L40 28 L68 22 L68 60 L40 66 L12 60 Z" fill="currentColor"/>
         <line x1="40" y1="28" x2="40" y2="66" stroke="#FBFAF6" stroke-width="2"/>`,
  // Hijaiyah — single alif letter
  hijaiyah: `<rect x="36" y="14" width="8" height="52" rx="4" fill="currentColor"/>
             <circle cx="40" cy="10" r="4" fill="currentColor"/>`,
  // Heart — Bonding / Family / Anak
  heart: `<path d="M40 64 C20 50 12 40 12 28 C12 20 18 14 26 14 C32 14 36 18 40 22 C44 18 48 14 54 14 C62 14 68 20 68 28 C68 40 60 50 40 64 Z" fill="currentColor"/>`,
  // Two figures — Saudara / Siblings
  family: `<circle cx="28" cy="22" r="8" fill="currentColor"/>
           <circle cx="52" cy="22" r="8" fill="currentColor"/>
           <path d="M14 56 C14 44 20 36 28 36 C36 36 42 44 42 56 L42 68 L14 68 Z" fill="currentColor"/>
           <path d="M38 56 C38 44 44 36 52 36 C60 36 66 44 66 56 L66 68 L38 68 Z" fill="currentColor"/>`,
  // Tree (growing) — Tarbiyah / Edukasi / Identitas
  tree: `<circle cx="40" cy="28" r="22" fill="currentColor"/>
         <rect x="36" y="46" width="8" height="22" rx="1" fill="currentColor"/>`,
  // Calendar grid — Hijri New Year / Ibadah Musiman / Generic
  calendar: `<rect x="14" y="18" width="52" height="50" rx="4" fill="currentColor"/>
             <rect x="20" y="28" width="40" height="34" rx="2" fill="#FBFAF6"/>
             <line x1="20" y1="40" x2="60" y2="40" stroke="currentColor" stroke-width="2"/>
             <line x1="33" y1="28" x2="33" y2="62" stroke="currentColor" stroke-width="2"/>
             <line x1="47" y1="28" x2="47" y2="62" stroke="currentColor" stroke-width="2"/>
             <rect x="24" y="14" width="4" height="10" rx="1" fill="currentColor"/>
             <rect x="52" y="14" width="4" height="10" rx="1" fill="currentColor"/>`,
  // Wheat/feeding (sustenance, Asyura's history of Musa) — also a fallback for "ibadah"
  wheat: `<rect x="38" y="30" width="4" height="40" rx="1" fill="currentColor"/>
          <ellipse cx="34" cy="36" rx="6" ry="3" transform="rotate(-25 34 36)" fill="currentColor"/>
          <ellipse cx="46" cy="36" rx="6" ry="3" transform="rotate(25 46 36)" fill="currentColor"/>
          <ellipse cx="34" cy="48" rx="6" ry="3" transform="rotate(-25 34 48)" fill="currentColor"/>
          <ellipse cx="46" cy="48" rx="6" ry="3" transform="rotate(25 46 48)" fill="currentColor"/>
          <ellipse cx="40" cy="26" rx="6" ry="3" fill="currentColor"/>`,
  // Star burst — Bersyukur / Syukur / Spiritual
  star: `<polygon points="40,8 46,30 70,30 50,44 56,68 40,54 24,68 30,44 10,30 34,30" fill="currentColor"/>`,
};

// Map tags to icons. First match wins. Order matters.
function pickIcon(tag) {
  const t = (tag ?? "").toLowerCase();
  if (t === "haji" || t === "dzulhijjah" || t === "ibadah-haji") return "kaaba";
  if (t === "idul-adha" || t === "qurban" || t === "eid") return "crescentStar";
  if (t === "ramadan" || t === "puasa") return "crescent";
  if (t === "muharram" || t === "tahun-baru-hijriyah") return "calendar";
  if (t === "asyura") return "wheat";
  if (t === "hijrah" || t === "sejarah-islam") return "tree";
  if (t === "sholat" || t === "masjid") return "mosque";
  if (t === "doa" || t === "hijaiyah-doa") return "hands";
  if (t === "hijaiyah") return "hijaiyah";
  if (t === "kisah-nabi" || t === "cerita-nabi") return "book";
  if (t === "saudara") return "family";
  if (t === "tarbiyah" || t === "edukasi" || t === "parenting" || t === "identitas") return "tree";
  if (t === "adab" || t === "akhlak") return "hands";
  if (t === "bersyukur" || t === "syukur") return "star";
  if (t === "dzikir" || t === "perlindungan" || t === "rutinitas") return "crescent";
  return "calendar";
}

// ────────────────────────────────────────────────────────────────────
// Parse blog.ts for {slug, title.id, title.en, excerpt.id, excerpt.en,
// tags, readingTimeMin}. Lightweight regex pass — we never eval TS.
// ────────────────────────────────────────────────────────────────────
const src = readFileSync(BLOG_FILE, "utf8");

function extractPosts(s) {
  // Find all slug positions so each post can use the window between
  // its own slug and the next one — works even for very long posts
  // (hajj/ramadan have 20+ min bodies that overflow a fixed window).
  const positions = [];
  const slugRe = /slug:\s*"([a-z0-9-]+)"/g;
  let m;
  while ((m = slugRe.exec(s))) positions.push({ slug: m[1], idx: m.index });

  const posts = [];
  for (let i = 0; i < positions.length; i++) {
    const slug = positions[i].slug;
    const start = positions[i].idx;
    const end = i + 1 < positions.length ? positions[i + 1].idx : s.length;
    const win = s.slice(start, end);

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

    // First tag (eyebrow category + drives icon selection)
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
  const iconKey = pickIcon(tag);
  const iconSvg = ICONS[iconKey];

  // Square-safe design: WhatsApp / iMessage / Twitter all show a
  // square thumbnail (center-crop) in chat list. The center 630×630
  // box must contain ALL essential text + icon. The wider canvas
  // (1200×630) gets corner decorations.

  const titleLen = title.length;
  // Cap at 3 lines max; titles that don't fit get truncated by wrap().
  // Slightly smaller sizes so 3 lines always fits between eyebrow + bottom.
  const titleSize = titleLen <= 30 ? 56 : titleLen <= 60 ? 44 : titleLen <= 100 ? 38 : 32;
  const titleMaxChars = titleLen <= 30 ? 14 : titleLen <= 60 ? 20 : titleLen <= 100 ? 26 : 32;
  const titleLines = wrap(title, titleMaxChars, 3);
  const titleLineHeight = titleSize * 1.2;
  const titleBlockH = titleLines.length * titleLineHeight;

  // Layout: icon at top, then BABY MO label, eyebrow, title, excerpt,
  // bottom wordmark. Layout math anchored top-down with explicit
  // gap to the bottom strip so titles + excerpt never overlap it.
  const iconY = 78;        // icon center
  const brandY = 168;       // BABY MO wordmark
  const eyebrowY = 200;     // category eyebrow
  const bottomStripY = H - 92;   // sage hairline above wordmark
  const safeBottom = bottomStripY - 30; // last safe baseline above hairline

  // Title centered in the remaining space; if it would push into the
  // safe bottom, shift it up.
  const titleAreaTop = eyebrowY + 36;
  const titleAreaMid = (titleAreaTop + safeBottom) / 2;
  let titleStartY = titleAreaMid - titleBlockH / 2 + titleSize * 0.82;
  const lastTitleBaseline = titleStartY + (titleLines.length - 1) * titleLineHeight;

  // Decide whether excerpt fits. We need ~36px for the italic line
  // PLUS a 28px gap above the bottom strip.
  const wouldFitExcerpt = excerpt && safeBottom - lastTitleBaseline > 70;
  const excerptLines = wouldFitExcerpt ? wrap(excerpt, 50, 1) : [];
  const excerptStartY = lastTitleBaseline + 50;

  const rtStr = rt ? `${rt} ${S.minRead}` : "";

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${C.paper}"/>
      <stop offset="55%" stop-color="${C.braveSoft}" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="${C.braveSoft}"/>
    </linearGradient>
    <radialGradient id="topGlow" cx="50%" cy="0%" r="50%">
      <stop offset="0%" stop-color="${C.brave}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${C.brave}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="iconHalo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${C.brave}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${C.brave}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="centerGlow" cx="50%" cy="55%" r="42%">
      <stop offset="0%" stop-color="${C.paper}" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="${C.paper}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="${C.braveDeep}" fill-opacity="0.18"/>
    </pattern>
  </defs>

  <!-- Background: cream → brave-green gradient -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#topGlow)"/>
  <rect width="${W}" height="${H}" fill="url(#centerGlow)"/>

  <!-- SIDE DECORATIONS (wide-view only, cropped in square thumbnails) -->
  <!-- Left arabesque: stacked dots -->
  <circle cx="80" cy="${H / 2 - 60}" r="5" fill="${C.brave}" opacity="0.85"/>
  <circle cx="80" cy="${H / 2 - 20}" r="3" fill="${C.brave}" opacity="0.5"/>
  <circle cx="80" cy="${H / 2 + 20}" r="3" fill="${C.brave}" opacity="0.5"/>
  <circle cx="80" cy="${H / 2 + 60}" r="5" fill="${C.brave}" opacity="0.85"/>
  <line x1="80" y1="${H / 2 - 100}" x2="80" y2="${H / 2 + 100}" stroke="${C.brave}" stroke-width="1.5" opacity="0.35"/>
  <!-- Right mirror -->
  <circle cx="${W - 80}" cy="${H / 2 - 60}" r="5" fill="${C.brave}" opacity="0.85"/>
  <circle cx="${W - 80}" cy="${H / 2 - 20}" r="3" fill="${C.brave}" opacity="0.5"/>
  <circle cx="${W - 80}" cy="${H / 2 + 20}" r="3" fill="${C.brave}" opacity="0.5"/>
  <circle cx="${W - 80}" cy="${H / 2 + 60}" r="5" fill="${C.brave}" opacity="0.85"/>
  <line x1="${W - 80}" y1="${H / 2 - 100}" x2="${W - 80}" y2="${H / 2 + 100}" stroke="${C.brave}" stroke-width="1.5" opacity="0.35"/>

  <!-- CENTER (square-safe) -->
  <!-- Icon halo + icon. Icons live in an 80×80 viewbox; we translate
       the SVG group to the circle center, then scale to ~80% so the
       icon sits inside the circle with breathing room, then offset by
       -40/-40 to put viewbox center at the circle center. -->
  <circle cx="${W / 2}" cy="${iconY}" r="58" fill="url(#iconHalo)"/>
  <circle cx="${W / 2}" cy="${iconY}" r="42" fill="${C.paper}" stroke="${C.brave}" stroke-width="2.5" opacity="0.95"/>
  <g transform="translate(${W / 2}, ${iconY}) scale(0.8) translate(-40, -40)" color="${C.braveDeep}">
    ${iconSvg}
  </g>

  <!-- BABY MO brand mark -->
  <text x="${W / 2}" y="${brandY}" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
        font-weight="800" font-size="16" letter-spacing="9"
        fill="${C.braveDeep}">${xe(S.brand)}</text>

  <!-- Eyebrow: category tag -->
  <text x="${W / 2}" y="${eyebrowY}" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
        font-weight="600" font-size="12" letter-spacing="5"
        fill="${C.brave}" opacity="0.85">${xe(eyebrowTag)}</text>

  <!-- Title — centered, fits in center 550px column -->
  ${titleLines
    .map(
      (line, i) =>
        `<text x="${W / 2}" y="${titleStartY + i * titleLineHeight}" text-anchor="middle"
        font-family="'Newsreader', 'DejaVu Serif', Georgia, serif"
        font-weight="500" font-size="${titleSize}" fill="${C.ink}"
        letter-spacing="-0.5">${xe(line)}</text>`,
    )
    .join("\n  ")}

  <!-- Excerpt — italic, brave-deep -->
  ${excerptLines
    .map(
      (line, i) =>
        `<text x="${W / 2}" y="${excerptStartY + i * 30}" text-anchor="middle"
        font-family="'Newsreader', 'DejaVu Serif', Georgia, serif"
        font-weight="400" font-style="italic" font-size="20" fill="${C.braveDeep}" opacity="0.9">${xe(line)}</text>`,
    )
    .join("\n  ")}

  <!-- Bottom: brave-green hairline + babymo.id + reading time -->
  <line x1="${W / 2 - 60}" y1="${H - 92}" x2="${W / 2 + 60}" y2="${H - 92}"
        stroke="${C.brave}" stroke-width="2" stroke-linecap="round"/>
  <text x="${W / 2}" y="${H - 58}" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
        font-weight="700" font-size="18" letter-spacing="4"
        fill="${C.braveDeep}">${xe(S.domain.toUpperCase())}</text>
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
