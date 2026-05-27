// Generates a unique 1200x630 OG image for every blog post in both locales.
//
// Reads lib/content/blog.ts directly via a tiny parse-and-eval trick (we
// only need slug + title, no MDX runtime). Emits PNGs into
// public/og/blog/{locale}/{slug}.jpg. Runs before `next build` so the
// images are present in the static export.
//
// Renders via ImageMagick using a brand-aligned template:
// - Sage gradient background
// - Big serif title (Newsreader-ish via DejaVu Serif as fallback)
// - Small "Baby Mo" mark + URL
// - Decorative subtle dot pattern

import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";

const ROOT = process.cwd();
const BLOG_FILE = join(ROOT, "lib/content/blog.ts");
const OUT_DIR = join(ROOT, "public/og/blog");
const LOGO = join(ROOT, "public/assets/logo-192.png");

// ────────────────────────────────────────────────────────────────────
// Parse lib/content/blog.ts — extract slug + ID/EN titles per post.
// Source-of-truth pattern: blogPosts: BlogPost[] = [{ slug: '...',
// title: { id: '...', en: '...' }, ... }];
// We do a regex pass instead of importing TS (no runtime).
// ────────────────────────────────────────────────────────────────────
const src = readFileSync(BLOG_FILE, "utf8");

function extractPosts(s) {
  const posts = [];
  // Find every slug + title.id + title.en triple
  const slugRe = /slug:\s*"([a-z0-9-]+)"/g;
  let m;
  while ((m = slugRe.exec(s))) {
    const slug = m[1];
    // Look in a 1500-char window after the slug for title.id and title.en
    const window = s.slice(m.index, m.index + 2000);
    const idMatch = window.match(/id:\s*"((?:[^"\\]|\\.)*)"/);
    const enMatch = window.match(/en:\s*"((?:[^"\\]|\\.)*)"/);
    if (!idMatch || !enMatch) continue;
    // The first id/en pair after slug is the title block
    posts.push({
      slug,
      id: idMatch[1].replace(/\\"/g, '"'),
      en: enMatch[1].replace(/\\"/g, '"'),
    });
  }
  return posts;
}

const posts = extractPosts(src);
console.log(`[og] Found ${posts.length} blog posts`);

mkdirSync(join(OUT_DIR, "id"), { recursive: true });
mkdirSync(join(OUT_DIR, "en"), { recursive: true });

// ────────────────────────────────────────────────────────────────────
// Render one OG image via ImageMagick `magick`/`convert`.
// Card structure (1200x630):
//   - Cream gradient background (#FBFAF6 → #F5EFE2)
//   - Sage accent block on left edge
//   - Eyebrow "BABY MO" + serif title centered-left
//   - Logo bottom-right
//   - babymo.id URL bottom-left
// ────────────────────────────────────────────────────────────────────

function escapeText(s) {
  // Magick @-syntax safe: backslash quotes, no shell interpolation
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function generate(slug, title, locale) {
  const out = join(OUT_DIR, locale, `${slug}.jpg`);
  if (existsSync(out)) return; // idempotent

  mkdirSync(dirname(out), { recursive: true });

  // Wrap title into 2–3 lines manually (rough heuristic; magick does its
  // own line-wrapping but we cap at 75 chars per line by inserting \n).
  const wrapped = wrapTitle(title, 32);

  // Write title to temp file (handles unicode safely)
  const titleFile = join(ROOT, ".og-title.txt");
  writeFileSync(titleFile, wrapped, "utf8");

  // Compose the image with magick
  const cmd = [
    "convert",
    "-size 1200x630",
    "gradient:'#FBFAF6'-'#ECEAE2'",
    // Sage accent bar on the left
    "-fill '#5F8B5A'",
    "-draw 'rectangle 0,0 8,630'",
    // Soft sage circle, top-right
    "-fill '#E8EFE6' -draw 'circle 1050,90 1050,200'",
    // Clay circle, bottom-left (small)
    "-fill '#F5EFE2' -draw 'circle 90,560 90,610'",
    // Eyebrow label
    "-font DejaVu-Sans-Bold -pointsize 22 -fill '#3B5A38'",
    `-draw "text 80,130 'BABY MO · ${locale === "id" ? "PARENTING ISLAMI" : "ISLAMIC PARENTING"}'"`,
    // Main title — serif, large, centered around y=300
    `-font DejaVu-Serif -pointsize 56 -fill '#0E1213' -size 1040x340`,
    `caption:@"${escapeText(titleFile)}"`,
    "-gravity NorthWest -geometry +80+170 -composite",
    // Logo bottom-right
    `\\( "${LOGO}" -resize 80x80 \\) -gravity SouthEast -geometry +60+50 -composite`,
    // URL bottom-left
    "-font DejaVu-Sans -pointsize 22 -fill '#6B7068'",
    `-draw "text 80,580 'babymo.id'"`,
    "-quality 88",
    `"${out}"`,
  ].join(" ");

  try {
    execSync(cmd, { stdio: "pipe" });
  } catch (e) {
    // Fallback: simpler one-line render if caption@file path fails
    const fallback = [
      "convert",
      "-size 1200x630",
      "gradient:'#FBFAF6'-'#ECEAE2'",
      "-fill '#5F8B5A' -draw 'rectangle 0,0 8,630'",
      "-font DejaVu-Sans-Bold -pointsize 22 -fill '#3B5A38'",
      `-draw "text 80,130 'BABY MO'"`,
      `-font DejaVu-Serif -pointsize 44 -fill '#0E1213'`,
      `-size 1040x300 caption:"${escapeText(title)}"`,
      "-gravity NorthWest -geometry +80+170 -composite",
      `\\( "${LOGO}" -resize 80x80 \\) -gravity SouthEast -geometry +60+50 -composite`,
      "-font DejaVu-Sans -pointsize 22 -fill '#6B7068'",
      `-draw "text 80,580 'babymo.id'"`,
      "-quality 88",
      `"${out}"`,
    ].join(" ");
    execSync(fallback, { stdio: "pipe" });
  }
}

function wrapTitle(t, width) {
  const words = t.split(/\s+/);
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > width) {
      if (cur) lines.push(cur);
      cur = w;
    } else {
      cur = (cur + " " + w).trim();
    }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 4).join("\n");
}

let count = 0;
for (const p of posts) {
  for (const locale of ["id", "en"]) {
    generate(p.slug, p[locale], locale);
    count++;
  }
}
console.log(`[og] Generated ${count} images into ${OUT_DIR}`);
