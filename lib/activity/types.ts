// Shared types for the Kids Activity worksheet generator.
// Ported from the standalone kids-activity app into Baby Mo as a native route.

export type ThemeItem = { name: string; emoji: string };

export type Theme = {
  id: string;
  label: string;
  icon: string;
  palette: string[];
  words: string[];
  items: ThemeItem[];
  coloringPrompts: string[];
};

export type AgeDifficulty = {
  mazeSize: number;
  mazeBranchiness: number;
  tracingWordCount: number;
  tracingRepeats: number;
  matchingPairs: number;
  puzzlePieces: number;
  // Word search
  wordSearchGrid: number;
  wordSearchWords: number;
  wordSearchDiagonal: boolean;
  // Count & write
  countRows: number;
  countMax: number;
  // What comes next (patterns)
  patternRows: number;
  patternUnit: number; // distinct items per repeating unit (AB=2, ABC=3)
  // Dot-to-dot
  dotCount: number;
};

export type AgeRange = {
  id: string;
  label: string;
  description: string;
  difficulty: AgeDifficulty;
};

export type ActivityType = { id: string; label: string; icon: string };

/** Options handed to each individual generator. */
export type GenOptions = {
  theme: Theme;
  age: AgeRange;
  seed: number;
  /** Raw line-art SVG strings for the theme (coloring only); may be empty. */
  coloringPages?: string[];
};

/** What a generator returns: the inner SVG body + worksheet metadata. */
export type GenResult = {
  title: string;
  instructions: string;
  body: string;
  accent?: string;
};

/** A fully rendered, ready-to-print worksheet. */
export type Worksheet = {
  id: string;
  seed: number;
  title: string;
  themeId: string;
  themeLabel: string;
  ageId: string;
  ageLabel: string;
  activityTypeId: string;
  activityTypeLabel: string;
  activityTypeIcon: string;
  svg: string;
};
