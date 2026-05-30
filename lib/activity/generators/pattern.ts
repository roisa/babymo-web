// What Comes Next worksheet: each row shows a repeating emoji pattern (AB,
// ABC, ABB...) with the last 1-2 slots left blank for the child to fill in.
// Logic / sequencing practice.

import { getActivityRect } from "../worksheet";
import { createRng, shuffle } from "../random";
import type { GenOptions, GenResult, ThemeItem } from "../types";

export function generate(options: GenOptions): GenResult {
  const { theme, age, seed } = options;
  const rng = createRng(seed);
  const rows = age.difficulty.patternRows;
  const unit = age.difficulty.patternUnit; // distinct items per repeating unit

  const rect = getActivityRect();
  let body = "";

  const rowH = (rect.height - 4) / rows;
  const totalSlots = 6; // visible cells per row
  const blanks = 2; // last 2 are blank

  for (let r = 0; r < rows; r++) {
    const ry = rect.y + 4 + r * rowH;
    const midY = ry + rowH / 2;

    // Build the repeating unit from distinct theme items.
    const items = shuffle(theme.items, rng).slice(0, unit);
    // Occasionally use an ABB-style unit for variety on the oldest tier.
    const seq: ThemeItem[] = [];
    for (let i = 0; i < totalSlots; i++) {
      seq.push(items[i % items.length]!);
    }

    if (r > 0) {
      body += `<line x1="${rect.x}" y1="${ry}" x2="${rect.x + rect.width}" y2="${ry}" stroke="#e2e5f0" stroke-width="0.3"/>`;
    }

    const cellW = rect.width / (totalSlots + 0.5);
    const emSize = Math.min(rowH * 0.5, cellW * 0.7, 12);
    for (let i = 0; i < totalSlots; i++) {
      const cx = rect.x + i * cellW + cellW / 2;
      const isBlank = i >= totalSlots - blanks;
      if (isBlank) {
        const bs = Math.min(rowH * 0.62, cellW * 0.78);
        body += `<rect x="${cx - bs / 2}" y="${midY - bs / 2}" width="${bs}" height="${bs}" rx="2.5" fill="white" stroke="${theme.palette[0]}" stroke-width="0.6" stroke-dasharray="1.6 1.4"/>`;
      } else {
        body += `<text x="${cx}" y="${midY + emSize * 0.35}" text-anchor="middle" font-size="${emSize}" font-family="Arial, Helvetica, sans-serif">${seq[i]!.emoji}</text>`;
      }
      // Arrow between cells
      if (i < totalSlots - 1) {
        const ax = cx + cellW / 2;
        body += `<text x="${ax}" y="${midY + 1.4}" text-anchor="middle" font-size="3.4" fill="#c2c6d6">›</text>`;
      }
    }
  }

  return {
    title: `${theme.label} What Comes Next`,
    instructions: "Look at the pattern in each row. Draw what comes next in the empty boxes.",
    body,
    accent: theme.palette[0],
  };
}
