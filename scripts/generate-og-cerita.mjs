// Generates a unique 1200x630 OG image for every cerita (story / note) in
// both locales, featuring the story's Baby Mo pose so social-share previews
// look distinct and on-brand.
//
// Renders via SVG -> PNG (rsvg-convert) -> JPEG (convert), same toolchain as
// generate-og.mjs. The Baby Mo pose PNG is base64-embedded into the SVG.
//
// Idempotent — already-generated files are skipped unless --force passed.
// Output: public/og/cerita/{locale}/{slug}.jpg (gitignored; built in CI).

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
const SRC_FILE = join(ROOT, "lib/content/catatan.ts");
const POSE_DIR = join(ROOT, "public/baby-mo-poses");
const OUT_DIR = join(ROOT, "public/og/cerita");
const FORCE = process.argv.includes("--force");

const W = 1200;
const H = 630;

const C = {
  paper: "#FBFAF6",
  paper2: "#F4F2EC",
  ink: "#0E1213",
  brave: "#1F8B3F",
  braveDeep: "#155F2A",
  braveSoft: "#DCEFE0",
  sageSoft: "#E8EFE6",
  clay: "#C9A55B",
  clayDeep: "#9A7B2E",
  claySoft: "#F5EFE2",
  whisper: "#6B7068",
};

const STRINGS = {
  id: {
    brand: "BABY MO",
    story: "CERITA ANAK",
    note: "CERITA",
    minRead: "menit baca",
    domain: "babymo.id",
  },
  en: {
    brand: "BABY MO",
    story: "KIDS STORY",
    note: "STORY",
    minRead: "min read",
    domain: "babymo.id",
  },
};

function unescape(s) {
  return s.replace(/\\"/g, '"').replace(/\\n/g, "\n");
}
function xe(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function wrap(text, maxCharsPerLine, maxLines) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = "";
  for (const w of words) {
    if (lines.length === maxLines - 1) {
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

// ── Parse catatan.ts for the fields we need ──────────────────────────
function extract(s) {
  const positions = [];
  const slugRe = /slug:\s*"([a-z0-9-]+)"/g;
  let m;
  while ((m = slugRe.exec(s))) positions.push({ slug: m[1], idx: m.index });

  const out = [];
  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].idx;
    const end = i + 1 < positions.length ? positions[i + 1].idx : s.length;
    const win = s.slice(start, end);

    const titleBlock = win.match(/title:\s*\{([^}]+)\}/);
    const hookBlock = win.match(/hook:\s*\{([^}]+)\}/);
    if (!titleBlock || !hookBlock) continue;
    const tid = titleBlock[1].match(/id:\s*"((?:[^"\\]|\\.)*)"/);
    const ten = titleBlock[1].match(/en:\s*"((?:[^"\\]|\\.)*)"/);
    const hid = hookBlock[1].match(/id:\s*"((?:[^"\\]|\\.)*)"/);
    const hen = hookBlock[1].match(/en:\s*"((?:[^"\\]|\\.)*)"/);
    if (!tid || !ten) continue;

    const kind = /kind:\s*"story"/.test(win) ? "story" : "note";
    const poseM = win.match(/pose:\s*"([^"]+)"/);
    const rtM = win.match(/readingTimeMin:\s*(\d+)/);

    out.push({
      slug: positions[i].slug,
      kind,
      pose: poseM ? poseM[1] : "",
      rt: rtM ? parseInt(rtM[1], 10) : 0,
      titleId: unescape(tid[1]),
      titleEn: unescape(ten[1]),
      hookId: hid ? unescape(hid[1]) : "",
      hookEn: hen ? unescape(hen[1]) : "",
    });
  }
  return out;
}

// Cache base64 data URIs per pose file
const poseCache = new Map();
function poseDataUri(file) {
  if (!file) return null;
  if (poseCache.has(file)) return poseCache.get(file);
  const p = join(POSE_DIR, file);
  if (!existsSync(p)) {
    poseCache.set(file, null);
    return null;
  }
  const uri = "data:image/png;base64," + readFileSync(p).toString("base64");
  poseCache.set(file, uri);
  return uri;
}

function svgFor({ title, hook, kind, pose, rt }, locale) {
  const S = STRINGS[locale];
  const eyebrow = kind === "story" ? S.story : S.note;
  const poseUri = poseDataUri(pose);

  const titleLen = title.length;
  const titleSize = titleLen <= 24 ? 52 : titleLen <= 44 ? 44 : titleLen <= 70 ? 38 : 32;
  const titleMaxChars = titleLen <= 24 ? 18 : titleLen <= 44 ? 24 : 30;
  const titleLines = wrap(title, titleMaxChars, 3);
  const titleLH = titleSize * 1.18;

  const brandY = 300;
  const eyebrowY = 332;
  const titleTop = 384;
  const titleStartY = titleTop + titleSize * 0.5;
  const lastBaseline = titleStartY + (titleLines.length - 1) * titleLH;
  const hookLines = hook && H - 96 - lastBaseline > 64 ? wrap(hook, 56, 1) : [];
  const hookY = lastBaseline + 44;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${C.paper}"/>
      <stop offset="55%" stop-color="${C.sageSoft}" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="${C.braveSoft}"/>
    </linearGradient>
    <radialGradient id="halo" cx="50%" cy="34%" r="42%">
      <stop offset="0%" stop-color="${C.braveSoft}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="${C.braveSoft}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="${C.braveDeep}" fill-opacity="0.16"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <ellipse cx="${W / 2}" cy="170" rx="320" ry="180" fill="url(#halo)"/>

  <!-- side arabesque dots (cropped in square thumbs) -->
  <circle cx="80" cy="${H / 2 - 50}" r="5" fill="${C.brave}" opacity="0.8"/>
  <circle cx="80" cy="${H / 2}" r="3" fill="${C.brave}" opacity="0.45"/>
  <circle cx="80" cy="${H / 2 + 50}" r="5" fill="${C.brave}" opacity="0.8"/>
  <circle cx="${W - 80}" cy="${H / 2 - 50}" r="5" fill="${C.brave}" opacity="0.8"/>
  <circle cx="${W - 80}" cy="${H / 2}" r="3" fill="${C.brave}" opacity="0.45"/>
  <circle cx="${W - 80}" cy="${H / 2 + 50}" r="5" fill="${C.brave}" opacity="0.8"/>

  ${
    poseUri
      ? `<image x="${W / 2 - 130}" y="44" width="260" height="240" preserveAspectRatio="xMidYMid meet" xlink:href="${poseUri}"/>`
      : `<circle cx="${W / 2}" cy="150" r="64" fill="${C.paper}" stroke="${C.brave}" stroke-width="3" opacity="0.95"/>
         <text x="${W / 2}" y="172" text-anchor="middle" font-size="60">💛</text>`
  }

  <text x="${W / 2}" y="${brandY}" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
        font-weight="800" font-size="16" letter-spacing="9"
        fill="${C.braveDeep}">${xe(S.brand)}</text>

  <text x="${W / 2}" y="${eyebrowY}" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
        font-weight="700" font-size="12" letter-spacing="5"
        fill="${C.clayDeep}">${xe(eyebrow)}</text>

  ${titleLines
    .map(
      (line, i) =>
        `<text x="${W / 2}" y="${titleStartY + i * titleLH}" text-anchor="middle"
        font-family="'Newsreader', 'DejaVu Serif', Georgia, serif"
        font-weight="500" font-size="${titleSize}" fill="${C.ink}"
        letter-spacing="-0.5">${xe(line)}</text>`,
    )
    .join("\n  ")}

  ${hookLines
    .map(
      (line, i) =>
        `<text x="${W / 2}" y="${hookY + i * 28}" text-anchor="middle"
        font-family="'Newsreader', 'DejaVu Serif', Georgia, serif"
        font-weight="400" font-style="italic" font-size="20"
        fill="${C.braveDeep}" opacity="0.9">${xe(line)}</text>`,
    )
    .join("\n  ")}

  <line x1="${W / 2 - 60}" y1="${H - 92}" x2="${W / 2 + 60}" y2="${H - 92}"
        stroke="${C.brave}" stroke-width="2" stroke-linecap="round"/>
  <text x="${W / 2}" y="${H - 58}" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
        font-weight="700" font-size="18" letter-spacing="4"
        fill="${C.braveDeep}">${xe(S.domain.toUpperCase())}</text>
  ${
    rt
      ? `<text x="${W / 2}" y="${H - 32}" text-anchor="middle"
        font-family="Inter, 'Helvetica Neue', Arial, sans-serif"
        font-weight="400" font-size="13" letter-spacing="2"
        fill="${C.whisper}" opacity="0.7">${xe(`${rt} ${S.minRead}`.toUpperCase())}</text>`
      : ""
  }
</svg>`;
}

export { svgFor, extract };

// ── Main ─────────────────────────────────────────────────────────────
const isMain = process.argv[1] && process.argv[1].endsWith("generate-og-cerita.mjs");
if (isMain) main();

function main() {
const stories = extract(readFileSync(SRC_FILE, "utf8"));
console.log(`[og-cerita] Found ${stories.length} cerita`);

const tmpSvg = join(ROOT, ".og-cerita.svg");
const tmpPng = join(ROOT, ".og-cerita.png");
let count = 0,
  skipped = 0;

for (const c of stories) {
  for (const locale of ["id", "en"]) {
    const out = join(OUT_DIR, locale, `${c.slug}.jpg`);
    if (existsSync(out) && !FORCE) {
      skipped++;
      continue;
    }
    mkdirSync(dirname(out), { recursive: true });
    const svg = svgFor(
      {
        title: locale === "id" ? c.titleId : c.titleEn,
        hook: locale === "id" ? c.hookId : c.hookEn,
        kind: c.kind,
        pose: c.pose,
        rt: c.rt,
      },
      locale,
    );
    writeFileSync(tmpSvg, svg, "utf8");
    execSync(`rsvg-convert -w ${W} -h ${H} -o "${tmpPng}" "${tmpSvg}"`, {
      stdio: "pipe",
    });
    execSync(`convert "${tmpPng}" -quality 88 -interlace plane "${out}"`, {
      stdio: "pipe",
    });
    count++;
  }
}

try {
  rmSync(tmpSvg, { force: true });
  rmSync(tmpPng, { force: true });
} catch (_) {}

console.log(`[og-cerita] Generated ${count} images (skipped ${skipped}) into ${OUT_DIR}`);
}
