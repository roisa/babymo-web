// Maze generator: randomized depth-first search ("recursive backtracker").
// Produces a perfect maze (exactly one path between any two cells).

import { getActivityRect } from "../worksheet";
import { createRng } from "../random";
import type { GenOptions, GenResult } from "../types";

type WallDir = "top" | "right" | "bottom" | "left";
type Cell = { top: boolean; right: boolean; bottom: boolean; left: boolean; visited: boolean };

function generateMaze(cols: number, rows: number, seed: number) {
  const rng = createRng(seed);
  const cells: Cell[] = [];
  for (let i = 0; i < cols * rows; i++) {
    cells.push({ top: true, right: true, bottom: true, left: true, visited: false });
  }
  const idx = (x: number, y: number) => y * cols + x;
  const at = (x: number, y: number): Cell => cells[idx(x, y)]!;

  const stack: { x: number; y: number }[] = [{ x: 0, y: 0 }];
  at(0, 0).visited = true;

  while (stack.length) {
    const current = stack[stack.length - 1]!;
    const { x, y } = current;
    const neighbors: { x: number; y: number; dir: WallDir }[] = [];
    if (y > 0 && !at(x, y - 1).visited) neighbors.push({ x, y: y - 1, dir: "top" });
    if (x < cols - 1 && !at(x + 1, y).visited) neighbors.push({ x: x + 1, y, dir: "right" });
    if (y < rows - 1 && !at(x, y + 1).visited) neighbors.push({ x, y: y + 1, dir: "bottom" });
    if (x > 0 && !at(x - 1, y).visited) neighbors.push({ x: x - 1, y, dir: "left" });

    if (!neighbors.length) {
      stack.pop();
      continue;
    }
    const next = neighbors[Math.floor(rng() * neighbors.length)]!;
    const cur = at(x, y);
    const nb = at(next.x, next.y);

    if (next.dir === "top") {
      cur.top = false;
      nb.bottom = false;
    } else if (next.dir === "right") {
      cur.right = false;
      nb.left = false;
    } else if (next.dir === "bottom") {
      cur.bottom = false;
      nb.top = false;
    } else {
      cur.left = false;
      nb.right = false;
    }
    nb.visited = true;
    stack.push({ x: next.x, y: next.y });
  }
  return { cells, cols, rows };
}

export function generate(options: GenOptions): GenResult {
  const { theme, age, seed } = options;
  const size = Math.max(5, age.difficulty.mazeSize);

  const cols = size;
  const rows = size;
  const maze = generateMaze(cols, rows, seed);
  const cellAt = (x: number, y: number): Cell => maze.cells[y * cols + x]!;

  const rect = getActivityRect();
  const usableW = rect.width - 4;
  const usableH = rect.height - 18; // leave space for legend
  const cell = Math.min(usableW / cols, usableH / rows);
  const gridW = cell * cols;
  const gridH = cell * rows;
  const ox = rect.x + (rect.width - gridW) / 2;
  const oy = rect.y + 10;

  const stroke = 0.6;
  const wallColor = "#1b1f3a";
  const accent = theme.palette[0]!;

  let body = "";
  body += `<rect x="${ox - 1}" y="${oy - 1}" width="${gridW + 2}" height="${gridH + 2}" rx="2" fill="white" stroke="${accent}" stroke-width="0.6" stroke-opacity="0.4"/>`;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const c = cellAt(x, y);
      const x0 = ox + x * cell;
      const y0 = oy + y * cell;
      if (c.top) body += `<line x1="${x0}" y1="${y0}" x2="${x0 + cell}" y2="${y0}" stroke="${wallColor}" stroke-width="${stroke}" stroke-linecap="square"/>`;
      if (c.left) body += `<line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y0 + cell}" stroke="${wallColor}" stroke-width="${stroke}" stroke-linecap="square"/>`;
      if (y === rows - 1 && c.bottom)
        body += `<line x1="${x0}" y1="${y0 + cell}" x2="${x0 + cell}" y2="${y0 + cell}" stroke="${wallColor}" stroke-width="${stroke}" stroke-linecap="square"/>`;
      if (x === cols - 1 && c.right)
        body += `<line x1="${x0 + cell}" y1="${y0}" x2="${x0 + cell}" y2="${y0 + cell}" stroke="${wallColor}" stroke-width="${stroke}" stroke-linecap="square"/>`;
    }
  }

  const startItem = theme.items[0]!;
  const endItem = theme.items[1] ?? theme.items[0]!;
  const sx = ox + cell / 2;
  const sy = oy + cell / 2;
  const ex = ox + (cols - 0.5) * cell;
  const ey = oy + (rows - 0.5) * cell;
  const markerR = Math.min(cell * 0.32, 4);

  body += `<circle cx="${sx}" cy="${sy}" r="${markerR}" fill="${theme.palette[1] ?? accent}" opacity="0.85"/>`;
  body += `<text x="${sx}" y="${sy + markerR * 0.4}" text-anchor="middle" font-size="${markerR * 1.2}" font-family="Arial, Helvetica, sans-serif">${startItem.emoji}</text>`;
  body += `<circle cx="${ex}" cy="${ey}" r="${markerR}" fill="${theme.palette[2] ?? accent}" opacity="0.85"/>`;
  body += `<text x="${ex}" y="${ey + markerR * 0.4}" text-anchor="middle" font-size="${markerR * 1.2}" font-family="Arial, Helvetica, sans-serif">${endItem.emoji}</text>`;

  body += `<text x="${ox}" y="${oy + gridH + 7}" font-size="3.6" fill="#5b6079">Start: ${startItem.emoji} ${startItem.name}    Finish: ${endItem.emoji} ${endItem.name}</text>`;

  return {
    title: `${theme.label} Maze`,
    instructions: `Help the ${startItem.name.toLowerCase()} find the ${endItem.name.toLowerCase()}! Draw a line through the maze from start to finish.`,
    body,
    accent: theme.palette[0]!,
  };
}
