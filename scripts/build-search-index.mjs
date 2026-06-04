// Builds public/data/search.json — a single flat array of search entries
// for client-side fuzzy search. Includes doa, hadith, parenting, blog.
//
// Each entry: { type, slug, url, title, excerpt, keywords }
//   - type: "doa" | "hadith" | "parenting" | "blog"
//   - url: locale-aware path WITHOUT origin (client prefixes /locale)
//   - keywords: lowercased haystack used by the search matcher
//
// Output is bilingual (id + en under the same entry). Index size target
// is < 80 KB gzipped so it can be fetched on first search interaction.

import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const OUT = join(ROOT, "public/data/search.json");

function read(p) {
  return readFileSync(join(ROOT, p), "utf8");
}

// ────────────────────────────────────────────────────────────────────
// Regex extractors — content files are TS, no runtime needed at
// build time. Each block is parsed by finding the slug, then plucking
// title.id/en, excerpt/context/parentingNote/translation, plus tags.
// ────────────────────────────────────────────────────────────────────
function unesc(s) {
  return s.replace(/\\"/g, '"').replace(/\\n/g, "\n");
}

function pluckBilingual(block, key) {
  const m = block.match(new RegExp(`${key}:\\s*\\{([^}]+)\\}`));
  if (!m) return { id: "", en: "" };
  const id = m[1].match(/id:\s*"((?:[^"\\]|\\.)*)"/);
  const en = m[1].match(/en:\s*"((?:[^"\\]|\\.)*)"/);
  return { id: id ? unesc(id[1]) : "", en: en ? unesc(en[1]) : "" };
}

function pluckString(block, key) {
  const m = block.match(new RegExp(`${key}:\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return m ? unesc(m[1]) : "";
}

function pluckStringArray(block, key) {
  const m = block.match(new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`));
  if (!m) return [];
  return [...m[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((x) => unesc(x[1]));
}

function* iterateBlocks(src, label) {
  // Each entry begins with a slug. Use slug position as block start,
  // and the next slug (or end of array) as block end. This is brittle
  // but the content files have a consistent shape.
  const slugRe = /slug:\s*"([a-z0-9-]+)"/g;
  const positions = [];
  let m;
  while ((m = slugRe.exec(src))) positions.push({ slug: m[1], idx: m.index });
  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].idx;
    const end = i + 1 < positions.length ? positions[i + 1].idx : src.length;
    yield { slug: positions[i].slug, block: src.slice(start, end), label };
  }
}

function keywordsOf(...parts) {
  return parts
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 600);
}

const entries = [];

// ── Doa ─────────────────────────────────────────────────────────────
{
  const src = read("lib/content/doa.ts");
  for (const { slug, block } of iterateBlocks(src, "doa")) {
    const title = pluckBilingual(block, "title");
    const context = pluckBilingual(block, "context");
    const translation = pluckBilingual(block, "translation");
    const transliteration = pluckString(block, "transliteration");
    const situations = pluckStringArray(block, "situations");
    entries.push({
      type: "doa",
      slug,
      url: `/doa/${slug}`,
      title,
      excerpt: { id: context.id || translation.id, en: context.en || translation.en },
      keywords: {
        id: keywordsOf(title.id, context.id, translation.id, transliteration, ...situations),
        en: keywordsOf(title.en, context.en, translation.en, transliteration, ...situations),
      },
    });
  }
}

// ── Hadith ──────────────────────────────────────────────────────────
{
  const src = read("lib/content/hadith.ts");
  for (const { slug, block } of iterateBlocks(src, "hadith")) {
    const title = pluckBilingual(block, "title");
    const translation = pluckBilingual(block, "translation");
    const parentingNote = pluckBilingual(block, "parentingNote");
    const themes = pluckStringArray(block, "themes");
    entries.push({
      type: "hadith",
      slug,
      url: `/hadith/${slug}`,
      title,
      excerpt: { id: parentingNote.id || translation.id, en: parentingNote.en || translation.en },
      keywords: {
        id: keywordsOf(title.id, parentingNote.id, translation.id, ...themes),
        en: keywordsOf(title.en, parentingNote.en, translation.en, ...themes),
      },
    });
  }
}

// ── Parenting ───────────────────────────────────────────────────────
{
  const src = read("lib/content/parenting.ts");
  for (const { slug, block } of iterateBlocks(src, "parenting")) {
    const title = pluckBilingual(block, "title");
    const excerpt = pluckBilingual(block, "excerpt");
    const tags = pluckStringArray(block, "tags");
    entries.push({
      type: "parenting",
      slug,
      url: `/parenting/${slug}`,
      title,
      excerpt,
      keywords: {
        id: keywordsOf(title.id, excerpt.id, ...tags),
        en: keywordsOf(title.en, excerpt.en, ...tags),
      },
    });
  }
}

// ── Blog ────────────────────────────────────────────────────────────
{
  const src = read("lib/content/blog.ts");
  for (const { slug, block } of iterateBlocks(src, "blog")) {
    const title = pluckBilingual(block, "title");
    const excerpt = pluckBilingual(block, "excerpt");
    const tags = pluckStringArray(block, "tags");
    entries.push({
      type: "blog",
      slug,
      url: `/blog/${slug}`,
      title,
      excerpt,
      keywords: {
        id: keywordsOf(title.id, excerpt.id, ...tags),
        en: keywordsOf(title.en, excerpt.en, ...tags),
      },
    });
  }
}

// ── Kalender (Islamic calendar events) ──────────────────────────────
{
  const src = read("lib/islamic-calendar.ts");
  // Each event has shape: { id: "...", hijri: "...", name: { id, en }, caption: { id, en }, ... }
  // Match top-level event objects in the islamicCalendar array.
  const idRe = /id:\s*"([a-z0-9-]+)"/g;
  let m;
  const seen = new Set();
  while ((m = idRe.exec(src))) {
    const id = m[1];
    if (seen.has(id)) continue;
    seen.add(id);
    const win = src.slice(m.index, m.index + 1200);
    const name = pluckBilingual(win, "name");
    const caption = pluckBilingual(win, "caption");
    const hijri = pluckString(win, "hijri");
    if (!name.id || !hijri) continue;
    entries.push({
      type: "kalender",
      slug: id,
      url: `/kalender`,
      title: { id: name.id, en: name.en || name.id },
      excerpt: { id: caption.id, en: caption.en || caption.id },
      keywords: {
        id: keywordsOf(name.id, hijri, caption.id),
        en: keywordsOf(name.en, hijri, caption.en),
      },
    });
  }
}

// ── Surat (short surahs) ────────────────────────────────────────────
{
  const src = read("lib/content/surah.ts");
  for (const { slug, block } of iterateBlocks(src, "surah")) {
    const name = pluckBilingual(block, "name");
    const meaning = pluckBilingual(block, "meaning");
    const introForKids = pluckBilingual(block, "introForKids");
    const themes = pluckStringArray(block, "themes");
    if (!name.id) continue;
    entries.push({
      type: "surah",
      slug,
      url: `/surat/${slug}`,
      title: name,
      excerpt: introForKids,
      keywords: {
        id: keywordsOf(name.id, meaning.id, introForKids.id, ...themes),
        en: keywordsOf(name.en, meaning.en, introForKids.en, ...themes),
      },
    });
  }
}

// ── Prophets (kisah 25 nabi) ────────────────────────────────────────
{
  const src = read("lib/content/prophets.ts");
  for (const { slug, block } of iterateBlocks(src, "prophet")) {
    const name = pluckBilingual(block, "name");
    const era = pluckBilingual(block, "era");
    const keyMoment = pluckBilingual(block, "keyMoment");
    if (!name.id) continue;
    entries.push({
      type: "prophet",
      slug,
      url: `/kisah/${slug}`,
      title: name,
      excerpt: keyMoment,
      keywords: {
        id: keywordsOf(name.id, era.id, keyMoment.id),
        en: keywordsOf(name.en, era.en, keyMoment.en),
      },
    });
  }
}

// ── Asmaul Husna (99 names of Allah) ────────────────────────────────
{
  const src = read("lib/content/asmaul-husna.ts");
  for (const { slug, block } of iterateBlocks(src, "asmaul-husna")) {
    const transliteration = pluckString(block, "transliteration");
    const meaning = pluckBilingual(block, "meaning");
    const explanation = pluckBilingual(block, "explanation");
    if (!transliteration) continue;
    entries.push({
      type: "asmaul-husna",
      slug,
      url: `/asmaul-husna/${slug}`,
      title: {
        id: `${transliteration} — ${meaning.id}`,
        en: `${transliteration} — ${meaning.en}`,
      },
      excerpt: explanation,
      keywords: {
        id: keywordsOf(transliteration, "asmaul husna", meaning.id, explanation.id),
        en: keywordsOf(transliteration, "asmaul husna 99 names of allah", meaning.en, explanation.en),
      },
    });
  }
}

// ── Catatan (first-person notes) ────────────────────────────────────
{
  const src = read("lib/content/catatan.ts");
  for (const { slug, block } of iterateBlocks(src, "catatan")) {
    const title = pluckBilingual(block, "title");
    const hook = pluckBilingual(block, "hook");
    const takeaway = pluckBilingual(block, "takeaway");
    const tags = pluckStringArray(block, "tags");
    entries.push({
      type: "catatan",
      slug,
      url: `/cerita/${slug}`,
      title,
      excerpt: hook,
      keywords: {
        id: keywordsOf(title.id, hook.id, takeaway.id, ...tags),
        en: keywordsOf(title.en, hook.en, takeaway.en, ...tags),
      },
    });
  }
}

mkdirSync(join(ROOT, "public/data"), { recursive: true });
writeFileSync(OUT, JSON.stringify(entries));

const sizeKb = (JSON.stringify(entries).length / 1024).toFixed(1);
console.log(
  `[search] indexed ${entries.length} entries (${sizeKb} KB) → ${OUT}`,
);
