import type { ActivityType } from "./types";

export const ACTIVITY_TYPES: ActivityType[] = [
  { id: "maze", label: "Maze", icon: "🌀" },
  { id: "tracing", label: "Tracing", icon: "✏️" },
  { id: "coloring", label: "Coloring Prompt", icon: "🎨" },
  { id: "matching", label: "Matching", icon: "🔗" },
  { id: "puzzle", label: "Simple Puzzle", icon: "🧩" },
  { id: "wordsearch", label: "Word Search", icon: "🔎" },
  { id: "counting", label: "Count & Write", icon: "🔢" },
  { id: "pattern", label: "What Comes Next", icon: "➡️" },
  { id: "dottodot", label: "Dot-to-Dot", icon: "🔵" },
];

export function getActivityType(id: string): ActivityType {
  return ACTIVITY_TYPES.find((a) => a.id === id) ?? ACTIVITY_TYPES[0]!;
}
