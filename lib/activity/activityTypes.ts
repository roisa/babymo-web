import type { ActivityType } from "./types";

export const ACTIVITY_TYPES: ActivityType[] = [
  { id: "maze", label: "Maze", icon: "🌀" },
  { id: "tracing", label: "Tracing", icon: "✏️" },
  { id: "coloring", label: "Coloring", icon: "🎨" },
  { id: "matching", label: "Matching", icon: "🔗" },
  { id: "puzzle", label: "Puzzle", icon: "🧩" },
];

export function getActivityType(id: string): ActivityType {
  return ACTIVITY_TYPES.find((a) => a.id === id) ?? ACTIVITY_TYPES[0]!;
}
