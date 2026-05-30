// Matching worksheet: two columns of items in scrambled order. The child
// draws a line connecting each item on the left to its match on the right.

import { getActivityRect, escapeXml } from "../worksheet";
import { createRng, shuffle } from "../random";
import type { GenOptions, GenResult } from "../types";

export function generate(options: GenOptions): GenResult {
  const { theme, age, seed } = options;
  const rng = createRng(seed);
  const pairs = age.difficulty.matchingPairs;

  const items = shuffle(theme.items, rng).slice(0, pairs);
  const leftOrder = items;
  const rightOrder = shuffle(items, rng);

  // For 7-8: pair emoji with the WORD on the right (reading practice).
  const useWordsOnRight = age.id === "7-8";

  const rect = getActivityRect();
  let body = "";

  body += `<text x="${rect.x + rect.width * 0.22}" y="${rect.y + 6}" font-size="4.2" font-weight="700" fill="${theme.palette[0]}" text-anchor="middle">Pictures</text>`;
  body += `<text x="${rect.x + rect.width * 0.78}" y="${rect.y + 6}" font-size="4.2" font-weight="700" fill="${theme.palette[0]}" text-anchor="middle">${useWordsOnRight ? "Words" : "Match"}</text>`;

  const rowGap = (rect.height - 14) / pairs;
  const leftX = rect.x + rect.width * 0.22;
  const rightX = rect.x + rect.width * 0.78;
  const tileR = Math.min(rowGap * 0.32, 9);

  for (let i = 0; i < pairs; i++) {
    const ly = rect.y + 12 + rowGap * (i + 0.5);
    const ry = rect.y + 12 + rowGap * (i + 0.5);
    const left = leftOrder[i]!;
    const right = rightOrder[i]!;

    body += `<rect x="${leftX - tileR}" y="${ly - tileR}" width="${tileR * 2}" height="${tileR * 2}" rx="3" fill="white" stroke="${theme.palette[0]}" stroke-width="0.5"/>`;
    body += `<text x="${leftX}" y="${ly + tileR * 0.5}" text-anchor="middle" font-size="${tileR * 1.3}" font-family="Arial, Helvetica, sans-serif">${left.emoji}</text>`;

    body += `<rect x="${rightX - tileR}" y="${ry - tileR}" width="${tileR * 2}" height="${tileR * 2}" rx="3" fill="white" stroke="${theme.palette[1] || theme.palette[0]}" stroke-width="0.5"/>`;
    if (useWordsOnRight) {
      body += `<text x="${rightX}" y="${ry + 1.5}" text-anchor="middle" font-size="${Math.min(tileR * 0.7, 4)}" font-weight="700" fill="#1b1f3a">${escapeXml(right.name.toUpperCase())}</text>`;
    } else {
      body += `<text x="${rightX}" y="${ry + tileR * 0.5}" text-anchor="middle" font-size="${tileR * 1.3}" font-family="Arial, Helvetica, sans-serif">${right.emoji}</text>`;
    }

    body += `<circle cx="${leftX + tileR + 2}" cy="${ly}" r="0.9" fill="#1b1f3a"/>`;
    body += `<circle cx="${rightX - tileR - 2}" cy="${ry}" r="0.9" fill="#1b1f3a"/>`;
  }

  return {
    title: `${theme.label} Matching`,
    instructions: useWordsOnRight
      ? "Draw a line from each picture on the left to its matching word on the right."
      : "Draw a line from each picture on the left to the same picture on the right.",
    body,
    accent: theme.palette[0],
  };
}
