// Coloring worksheet.
//
// Two modes:
//  1. If line-art SVGs are available for the theme (passed in via
//     options.coloringPages, fetched client-side from /activity/coloring/),
//     one is picked at random and embedded as a real fill-in coloring page.
//  2. Otherwise we fall back to a prompt-only worksheet with an empty frame
//     where the child draws and colors their own picture.

import { getActivityRect, escapeXml } from "../worksheet";
import { createRng, pick } from "../random";
import type { GenOptions, GenResult, Theme } from "../types";

type Rect = ReturnType<typeof getActivityRect>;

export function generate(options: GenOptions): GenResult {
  const { theme, seed, coloringPages } = options;
  const rng = createRng(seed);
  const rect = getActivityRect();

  const pages = coloringPages ?? [];
  if (pages.length) {
    return renderLineArt({ theme, rect, rng, pages });
  }
  return renderPromptOnly({ theme, rect, rng });
}

// --- Mode 1: bundled line-art coloring page --------------------------------

function renderLineArt({
  theme,
  rect,
  rng,
  pages,
}: {
  theme: Theme;
  rect: Rect;
  rng: () => number;
  pages: string[];
}): GenResult {
  const lineArt = pick(pages, rng);
  let body = "";

  const swatchY = rect.y + 3;
  body += `<text x="${rect.x}" y="${swatchY + 3}" font-size="3.4" fill="#5b6079" font-weight="600">Color the picture · Suggested colors:</text>`;
  const swatchSize = 5;
  theme.palette.forEach((c, i) => {
    const x = rect.x + 60 + i * (swatchSize + 2);
    body += `<rect x="${x}" y="${swatchY - 1}" width="${swatchSize}" height="${swatchSize}" rx="1" fill="${c}" stroke="#1b1f3a" stroke-width="0.2"/>`;
  });

  const artY = rect.y + 12;
  const artH = rect.height - (artY - rect.y) - 4;
  const artW = rect.width;
  body += positionedSvg(lineArt, rect.x, artY, artW, artH);

  return {
    title: `${theme.label} Coloring`,
    instructions: "Color the picture using your favorite colors!",
    body,
    accent: theme.palette[0],
  };
}

// Take a full <svg>…</svg> string and re-stamp its outer tag with
// x/y/width/height so it nests cleanly inside the worksheet SVG.
function positionedSvg(svgString: string, x: number, y: number, w: number, h: number): string {
  return svgString.replace(/<svg\b([^>]*)>/, (_m, attrs) => {
    const cleaned = String(attrs).replace(/\s(width|height|x|y)="[^"]*"/g, "");
    return `<svg${cleaned} x="${x}" y="${y}" width="${w}" height="${h}">`;
  });
}

// --- Mode 2: prompt-only fallback ------------------------------------------

function renderPromptOnly({
  theme,
  rect,
  rng,
}: {
  theme: Theme;
  rect: Rect;
  rng: () => number;
}): GenResult {
  const prompt = pick(theme.coloringPrompts, rng);
  let body = "";

  const promptH = 26;
  body += `<rect x="${rect.x}" y="${rect.y + 2}" width="${rect.width}" height="${promptH}" rx="3" fill="${theme.palette[0]}" opacity="0.12"/>`;
  body += `<text x="${rect.x + 4}" y="${rect.y + 10}" font-size="4" font-weight="700" fill="${theme.palette[0]}">DRAW &amp; COLOR</text>`;

  const lines = wrapText(prompt, 80);
  lines.slice(0, 3).forEach((line, i) => {
    body += `<text x="${rect.x + 4}" y="${rect.y + 16 + i * 5}" font-size="4" fill="#1b1f3a">${escapeXml(line)}</text>`;
  });

  const swatchY = rect.y + promptH + 6;
  body += `<text x="${rect.x}" y="${swatchY + 3}" font-size="3.4" fill="#5b6079" font-weight="600">Suggested colors:</text>`;
  const swatchSize = 5;
  theme.palette.forEach((c, i) => {
    const x = rect.x + 32 + i * (swatchSize + 2);
    body += `<rect x="${x}" y="${swatchY - 1}" width="${swatchSize}" height="${swatchSize}" rx="1" fill="${c}" stroke="#1b1f3a" stroke-width="0.2"/>`;
  });

  const frameY = swatchY + 10;
  const frameH = rect.height - (frameY - rect.y) - 4;
  body += `<rect x="${rect.x}" y="${frameY}" width="${rect.width}" height="${frameH}" rx="4" fill="white" stroke="${theme.palette[0]}" stroke-width="0.7" stroke-dasharray="2 2"/>`;

  const corners = [
    { x: rect.x + 6, y: frameY + 8 },
    { x: rect.x + rect.width - 6, y: frameY + 8 },
    { x: rect.x + 6, y: frameY + frameH - 4 },
    { x: rect.x + rect.width - 6, y: frameY + frameH - 4 },
  ];
  theme.items.slice(0, 4).forEach((item, i) => {
    const cn = corners[i]!;
    body += `<text x="${cn.x}" y="${cn.y}" font-size="6" text-anchor="middle" opacity="0.55">${item.emoji}</text>`;
  });

  return {
    title: `${theme.label} Coloring`,
    instructions: "Read the prompt, then draw and color your picture in the frame.",
    body,
    accent: theme.palette[0],
  };
}

function wrapText(text: string, maxLen: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > maxLen) {
      lines.push(line.trim());
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  if (line) lines.push(line);
  return lines;
}
