import type { App } from "./types";

export const apps: App[] = [
  {
    slug: "kids-activity",
    emoji: "🎨",
    title: { id: "Aktivitas Anak", en: "Kids Activity" },
    description: {
      id: "Buat lembar kegiatan anak siap cetak — labirin, mewarnai, menjiplak, mencocokkan, dan puzzle.",
      en: "Generate printable kids worksheets — mazes, coloring, tracing, matching, and puzzles.",
    },
    url: "https://roisa.github.io/kids-activity/",
    mode: "embed",
    tags: ["worksheet", "printable", "edukasi"],
  },
];

export function getAllApps(): App[] {
  return apps;
}

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug);
}
