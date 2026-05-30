// Word Search worksheet: theme words hidden in a letter grid. Words are placed
// horizontally, vertically, and (for older kids) diagonally; remaining cells
// are filled with random letters. A word bank is listed below the grid.

import { getActivityRect, escapeXml } from "../worksheet";
import { createRng, shuffle } from "../random";
import type { GenOptions, GenResult } from "../types";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type Dir = { dx: number; dy: number };

export function generate(options: GenOptions): GenResult {
  const { theme, age, seed } = options;
  const rng = createRng(seed);
  const size = age.difficulty.wordSearchGrid;
  const allowDiagonal = age.difficulty.wordSearchDiagonal;

  // Pick words that fit in the grid (strip spaces/hyphens), longest first so
  // the hardest placements happen while the grid is empty.
  const candidates = shuffle(theme.words, rng)
    .map((w) => w.replace(/[^A-Za-z]/g, "").toUpperCase())
    .filter((w) => w.length >= 3 && w.length <= size)
    .sort((a, b) => b.length - a.length);

  const dirs: Dir[] = [
    { dx: 1, dy: 0 },
    { dx: 0, dy: 1 },
  ];
  if (allowDiagonal) dirs.push({ dx: 1, dy: 1 }, { dx: 1, dy: -1 });

  const grid: (string | null)[][] = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => null)
  );

  const placed: string[] = [];
  const want = age.difficulty.wordSearchWords;

  for (const word of candidates) {
    if (placed.length >= want) break;
    if (tryPlace(grid, word, dirs, size, rng)) placed.push(word);
  }

  // Fill blanks with random letters.
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (grid[y]![x] === null) {
        grid[y]![x] = LETTERS[Math.floor(rng() * LETTERS.length)]!;
      }
    }
  }

  const rect = getActivityRect();
  let body = "";

  // Layout: square grid centered, word bank beneath.
  const bankH = 16;
  const usableH = rect.height - bankH - 6;
  const cell = Math.min((rect.width - 4) / size, usableH / size);
  const gridW = cell * size;
  const ox = rect.x + (rect.width - gridW) / 2;
  const oy = rect.y + 4;

  body += `<rect x="${ox - 1}" y="${oy - 1}" width="${gridW + 2}" height="${cell * size + 2}" rx="2" fill="white" stroke="${theme.palette[0]}" stroke-width="0.5" stroke-opacity="0.5"/>`;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const cx = ox + x * cell + cell / 2;
      const cy = oy + y * cell + cell / 2;
      body += `<text x="${cx}" y="${cy + cell * 0.32}" text-anchor="middle" font-size="${cell * 0.6}" font-weight="600" font-family="Quicksand, Arial, sans-serif" fill="#1b1f3a">${grid[y]![x]}</text>`;
    }
  }

  // Word bank
  const bankY = oy + cell * size + 6;
  body += `<text x="${rect.x}" y="${bankY}" font-size="3.8" font-weight="700" fill="${theme.palette[0]}">Find these words:</text>`;
  const perRow = Math.ceil(placed.length / 2) || 1;
  const colW = rect.width / perRow;
  placed.forEach((w, i) => {
    const rowI = Math.floor(i / perRow);
    const colI = i % perRow;
    const wx = rect.x + colI * colW;
    const wy = bankY + 6 + rowI * 5;
    body += `<text x="${wx}" y="${wy}" font-size="4" font-family="Quicksand, Arial, sans-serif" fill="#1b1f3a">▢ ${escapeXml(w)}</text>`;
  });

  return {
    title: `${theme.label} Word Search`,
    instructions: allowDiagonal
      ? "Find and circle each word — across, down, and diagonally."
      : "Find and circle each word — across and down.",
    body,
    accent: theme.palette[0],
  };
}

function tryPlace(
  grid: (string | null)[][],
  word: string,
  dirs: Dir[],
  size: number,
  rng: () => number
): boolean {
  // Try a bounded number of random placements.
  for (let attempt = 0; attempt < 80; attempt++) {
    const dir = dirs[Math.floor(rng() * dirs.length)]!;
    const len = word.length;
    const maxX = dir.dx > 0 ? size - len : size - 1;
    const minX = 0;
    const maxY = dir.dy > 0 ? size - len : dir.dy < 0 ? size - 1 : size - 1;
    const minY = dir.dy < 0 ? len - 1 : 0;

    const x0 = minX + Math.floor(rng() * (maxX - minX + 1));
    const y0 = minY + Math.floor(rng() * (maxY - minY + 1));

    let ok = true;
    for (let i = 0; i < len; i++) {
      const x = x0 + dir.dx * i;
      const y = y0 + dir.dy * i;
      if (x < 0 || x >= size || y < 0 || y >= size) {
        ok = false;
        break;
      }
      const existing = grid[y]![x];
      if (existing !== null && existing !== word[i]) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;

    for (let i = 0; i < len; i++) {
      const x = x0 + dir.dx * i;
      const y = y0 + dir.dy * i;
      grid[y]![x] = word[i]!;
    }
    return true;
  }
  return false;
}
