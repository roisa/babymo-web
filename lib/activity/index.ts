// Worksheet orchestrator. Picks the right generator, wraps its body in the
// printable page template, and returns a ready-to-render Worksheet.

import { renderWorksheet } from "./worksheet";
import { getTheme } from "./themes";
import { getAgeRange } from "./ageRanges";
import { getActivityType } from "./activityTypes";
import { randomSeed } from "./random";
import type { GenOptions, GenResult, Worksheet } from "./types";

import { generate as maze } from "./generators/maze";
import { generate as tracing } from "./generators/tracing";
import { generate as coloring } from "./generators/coloring";
import { generate as matching } from "./generators/matching";
import { generate as puzzle } from "./generators/puzzle";
import { generate as wordsearch } from "./generators/wordsearch";
import { generate as counting } from "./generators/counting";
import { generate as pattern } from "./generators/pattern";
import { generate as dottodot } from "./generators/dottodot";

const GENERATORS: Record<string, (o: GenOptions) => GenResult> = {
  maze,
  tracing,
  coloring,
  matching,
  puzzle,
  wordsearch,
  counting,
  pattern,
  dottodot,
};

export function generateWorksheet({
  themeId,
  ageId,
  activityTypeId,
  seed,
  coloringPages,
}: {
  themeId: string;
  ageId: string;
  activityTypeId: string;
  seed?: number;
  coloringPages?: string[];
}): Worksheet {
  const theme = getTheme(themeId);
  const age = getAgeRange(ageId);
  const activity = getActivityType(activityTypeId);
  const finalSeed = seed ?? randomSeed();

  const gen = GENERATORS[activity.id];
  if (!gen) throw new Error(`Unknown activity type: ${activity.id}`);

  const result = gen({ theme, age, seed: finalSeed, coloringPages });
  const svg = renderWorksheet({
    title: result.title,
    instructions: result.instructions,
    themeLabel: theme.label,
    accent: result.accent || theme.palette[0],
    body: result.body,
  });

  return {
    id: `${theme.id}-${age.id}-${activity.id}-${finalSeed}`,
    seed: finalSeed,
    title: result.title,
    themeId: theme.id,
    themeLabel: theme.label,
    ageId: age.id,
    ageLabel: age.label,
    activityTypeId: activity.id,
    activityTypeLabel: activity.label,
    activityTypeIcon: activity.icon,
    svg,
  };
}

export type { Worksheet } from "./types";
