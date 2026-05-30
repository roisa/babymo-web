// Count & Write worksheet: each row shows a number of themed emoji; the child
// counts them and writes the number in a box. Early-math practice (ages 3-6+).

import { getActivityRect } from "../worksheet";
import { createRng, shuffle, pick } from "../random";
import type { GenOptions, GenResult } from "../types";

export function generate(options: GenOptions): GenResult {
  const { theme, age, seed } = options;
  const rng = createRng(seed);
  const rows = age.difficulty.countRows;
  const max = age.difficulty.countMax;

  const rect = getActivityRect();
  let body = "";

  const rowH = (rect.height - 4) / rows;
  // Distinct, non-repeating counts where possible.
  const counts = shuffle(
    Array.from({ length: max }, (_, i) => i + 1),
    rng
  ).slice(0, rows);

  for (let r = 0; r < rows; r++) {
    const ry = rect.y + 4 + r * rowH;
    const midY = ry + rowH / 2;
    const n = counts[r] ?? 1 + Math.floor(rng() * max);
    const item = pick(theme.items, rng);

    // Row separator
    if (r > 0) {
      body += `<line x1="${rect.x}" y1="${ry}" x2="${rect.x + rect.width}" y2="${ry}" stroke="#e2e5f0" stroke-width="0.3"/>`;
    }

    // Emoji cluster (left ~78% of the row), wrapping if needed.
    const clusterW = rect.width * 0.76;
    const perRow = Math.min(n, Math.max(5, Math.ceil(max / 2)));
    const emSize = Math.min(rowH * 0.5, clusterW / perRow * 0.8, 11);
    const gap = emSize * 1.15;
    for (let i = 0; i < n; i++) {
      const col = i % perRow;
      const line = Math.floor(i / perRow);
      const ex = rect.x + 2 + col * gap + gap / 2;
      const ey =
        midY -
        (Math.ceil(n / perRow) - 1) * gap * 0.45 +
        line * gap * 0.9;
      body += `<text x="${ex}" y="${ey + emSize * 0.35}" text-anchor="middle" font-size="${emSize}" font-family="Arial, Helvetica, sans-serif">${item.emoji}</text>`;
    }

    // Answer box on the right.
    const boxSize = Math.min(rowH * 0.6, 16);
    const bx = rect.x + rect.width - boxSize - 2;
    const by = midY - boxSize / 2;
    body += `<rect x="${bx}" y="${by}" width="${boxSize}" height="${boxSize}" rx="2.5" fill="white" stroke="${theme.palette[0]}" stroke-width="0.6"/>`;
    body += `<text x="${bx - 3}" y="${midY + 1.4}" text-anchor="end" font-size="4" fill="#8a90a8">=</text>`;
  }

  return {
    title: `${theme.label} Count & Write`,
    instructions: "Count the pictures in each row and write the number in the box.",
    body,
    accent: theme.palette[0],
  };
}
