// Age ranges drive difficulty parameters for each generator.

import type { AgeRange } from "./types";

export const AGE_RANGES: AgeRange[] = [
  {
    id: "3-4",
    label: "3 – 4",
    description: "Big strokes, very simple",
    difficulty: {
      mazeSize: 6,
      mazeBranchiness: 0.15,
      tracingWordCount: 1,
      tracingRepeats: 3,
      matchingPairs: 3,
      puzzlePieces: 4,
      wordSearchGrid: 7,
      wordSearchWords: 3,
      wordSearchDiagonal: false,
      countRows: 3,
      countMax: 5,
      patternRows: 3,
      patternUnit: 2,
      dotCount: 10,
    },
  },
  {
    id: "5-6",
    label: "5 – 6",
    description: "Beginner reading and drawing",
    difficulty: {
      mazeSize: 9,
      mazeBranchiness: 0.35,
      tracingWordCount: 2,
      tracingRepeats: 3,
      matchingPairs: 4,
      puzzlePieces: 6,
      wordSearchGrid: 9,
      wordSearchWords: 4,
      wordSearchDiagonal: false,
      countRows: 4,
      countMax: 10,
      patternRows: 4,
      patternUnit: 2,
      dotCount: 15,
    },
  },
  {
    id: "7-8",
    label: "7 – 8",
    description: "More detail and challenge",
    difficulty: {
      mazeSize: 13,
      mazeBranchiness: 0.55,
      tracingWordCount: 3,
      tracingRepeats: 4,
      matchingPairs: 5,
      puzzlePieces: 9,
      wordSearchGrid: 11,
      wordSearchWords: 6,
      wordSearchDiagonal: true,
      countRows: 5,
      countMax: 20,
      patternRows: 5,
      patternUnit: 3,
      dotCount: 22,
    },
  },
];

export function getAgeRange(id: string): AgeRange {
  return AGE_RANGES.find((a) => a.id === id) ?? AGE_RANGES[1]!;
}
