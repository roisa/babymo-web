// Generates 1600x900 brand-aligned thumbnails for every Moment card.
// These are placeholders that look intentional — when the user has real
// YouTube/IG thumbnails to use, they overwrite public/moments/<slug>.jpg
// and that's the canonical source from then on.
//
// Renders SVG → PNG via rsvg-convert (already used for OG cards).

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
const FORCE = process.argv.includes("--force");

const W = 1600;
const H = 900;

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

const PLATFORM = {
  youtube:           { label: "YOUTUBE",         accent: "#c4302b", glyph: "▶" },
  "youtube-shorts":  { label: "YOUTUBE SHORTS",  accent: "#c4302b", glyph: "▶" },
  "ig-post":         { label: "INSTAGRAM",       accent: "#c2185b", glyph: "■" },
  "ig-reel":         { label: "INSTAGRAM REEL",  accent: "#c2185b", glyph: "▶" },
};

// ──────────────────────────────────────────────────────────────────
// Parse moments.ts — slug, platform, title.id, title.en, duration
// ──────────────────────────────────────────────────────────────────
const src = readFileSync(MOMENTS_FILE, "utf8");

function extractMoments(s) {
  const out = [];
  const slugRe = /slug:\s*"([a-z0-9-]+)"/g;
  let m;
  while ((m = slugRe.exec(s))) {
    const slug = m[1];
    const win = s.slice(m.index, m.index + 1800);
    const platform = (win.match(/platform:\s*"([a-z-]+)"/) ?? [])[1] ?? "youtube";
    const dur = (win.match(/duration:\s*"([0-9:]+)"/) ?? [])[1] ?? "";
    const title = win.match(/title:\s*\{([^}]+)\}/);
    if (!title) continue;
    const tid = title[1].match(/id:\s*"((?:[^"\\]|\\.)*)"/);
    const ten = title[1].match(/en:\s*"((?:[^"\\]|\\.)*)"/);
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
  const lines = wrap(title, 22, 3);
  const titleStartY = 380;
  const titleLineHeight = 86;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${C.sageSoft}"/>
      <stop offset="100%" stop-color="${C.claySoft}"/>
    </linearGradient>
    <radialGradient id="ink-aura" cx="80%" cy="20%" r="60%">
      <stop offset="0%" stop-color="${C.sage}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${C.sage}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" x="0" y="0" width="44" height="44" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="${C.hairline}" fill-opacity="0.55"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#ink-aura)"/>

  <!-- Decorative sage circle, top-right -->
  <circle cx="${W - 160}" cy="160" r="200" fill="${C.sage}" opacity="0.10"/>
  <circle cx="${W - 160}" cy="160" r="120" fill="${C.sage}" opacity="0.18"/>

  <!-- Play glyph (for video) — big soft button center-left -->
  <circle cx="220" cy="${H / 2}" r="86" fill="${C.paper}" opacity="0.85"/>
  <circle cx="220" cy="${H / 2}" r="86" fill="none" stroke="${C.sageDeep}" stroke-width="3" opacity="0.4"/>
  <text x="232" y="${H / 2 + 26}" text-anchor="middle"
        font-family="Inter, sans-serif" font-size="64" fill="${C.sageDeep}">${p.glyph}</text>

  <!-- Platform pill, top-left -->
  <rect x="120" y="120" rx="999" ry="999" width="${36 + p.label.length * 14}" height="44"
        fill="${C.paper}" opacity="0.92"/>
  <text x="${120 + 18}" y="${120 + 30}"
        font-family="Inter, 'Helvetica Neue', sans-serif"
        font-weight="700" font-size="20" letter-spacing="3"
        fill="${p.accent}">${xe(p.label)}</text>

  <!-- Duration pill, top-right -->
  ${
    duration
      ? `<rect x="${W - 120 - 110}" y="120" rx="999" ry="999" width="110" height="44"
            fill="${C.ink}" opacity="0.82"/>
    <text x="${W - 120 - 55}" y="${120 + 30}" text-anchor="middle"
          font-family="Inter, sans-serif" font-weight="600" font-size="20"
          fill="${C.paper}">${xe(duration)}</text>`
      : ""
  }

  <!-- Title — serif, large, multi-line -->
  ${lines
    .map(
      (line, i) =>
        `<text x="380" y="${titleStartY + i * titleLineHeight}"
        font-family="'Newsreader', 'DejaVu Serif', Georgia, serif"
        font-weight="500" font-size="78" fill="${C.ink}"
        letter-spacing="-1.5">${xe(line)}</text>`,
    )
    .join("\n  ")}

  <!-- Bottom strip: brand + url -->
  <line x1="120" y1="${H - 110}" x2="${W - 120}" y2="${H - 110}"
        stroke="${C.hairline}" stroke-width="1.5"/>
  <text x="120" y="${H - 60}"
        font-family="Inter, sans-serif" font-weight="700" font-size="26"
        letter-spacing="3" fill="${C.sageDeep}">BABY MO</text>
  <text x="${W - 120}" y="${H - 60}" text-anchor="end"
        font-family="Inter, sans-serif" font-weight="500" font-size="22"
        fill="${C.whisper}">babymo.id</text>
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
  writeFileSync(tmpSvg, svgFor(m), "utf8");
  execSync(`rsvg-convert -w ${W} -h ${H} -o "${tmpPng}" "${tmpSvg}"`, {
    stdio: "pipe",
  });
  execSync(`convert "${tmpPng}" -quality 88 -interlace plane "${out}"`, {
    stdio: "pipe",
  });
  count++;
}

try {
  rmSync(tmpSvg, { force: true });
  rmSync(tmpPng, { force: true });
} catch (_) {}

console.log(
  `[moments] Generated ${count} thumbnails (skipped ${skipped}) into ${OUT_DIR}`,
);
