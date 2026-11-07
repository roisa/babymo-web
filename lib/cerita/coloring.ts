/** Printable colouring pages, made from the picture-book art (outlines only). */
import type { ArtScene } from "./illus-types";
import type { Locale } from "@/lib/i18n/config";

export interface ColoringPage { slug: string; title: Record<Locale, string>; scene: ArtScene }

const alt = { id: "", en: "" };
export const COLORING: ColoringPage[] = [
  { slug: "gurita-kecil-yang-pemalu", title: { id: "Gurita kecil", en: "The little octopus" }, scene: { at: 0, alt, bg: "underwater", props: [{ k: "seaweed", x: 130 }, { k: "rock", x: 620 }, { k: "octopus", x: 400, s: 1.5 }, { k: "starfish", x: 250 }, { k: "fishschool", x: 520 }] } },
  { slug: "tukik-pulang-ke-laut", title: { id: "Penyu di laut", en: "A turtle in the sea" }, scene: { at: 0, alt, bg: "underwater", props: [{ k: "turtle", x: 420, y: 300, s: 1.6 }, { k: "seaweed", x: 140 }, { k: "coral", x: 640 }, { k: "jellyfish", x: 160, y: 230 }] } },
  { slug: "jingga-ikan-badut-mencari-rumah", title: { id: "Jingga dan anemon", en: "Jingga and the anemone" }, scene: { at: 0, alt, bg: "underwater", props: [{ k: "anemone", x: 400, s: 1.4 }, { k: "clownfish", x: 420, y: 250, s: 1.5 }, { k: "seahorse", x: 640, y: 360 }, { k: "starfish", x: 200 }] } },
  { slug: "lagu-paus-untuk-bayinya", title: { id: "Ibu paus dan bayinya", en: "A mother whale and her baby" }, scene: { at: 0, alt, bg: "underwater", props: [{ k: "whale", x: 380, y: 290 }, { k: "whale", x: 560, y: 380, s: 0.42 }] } },
  { slug: "kepiting-yang-berjalan-miring", title: { id: "Kepiting dan istana pasir", en: "The crab and the sandcastle" }, scene: { at: 0, alt, bg: "beach", props: [{ k: "sandcastle", x: 520 }, { k: "crab", x: 320, s: 1.6 }, { k: "shell", x: 650 }, { k: "bucket", x: 190 }] } },
  { slug: "orangutan-dan-pohon-untuk-anaknya", title: { id: "Ibu orangutan", en: "Mother orangutan" }, scene: { at: 0, alt, bg: "forest", props: [{ k: "orangutan", x: 400, s: 1.2 }, { k: "seedling", x: 600 }, { k: "butterfly", x: 230, y: 220 }] } },
  { slug: "lebah-kecil-dan-madu", title: { id: "Lebah dan bunga", en: "Bees and flowers" }, scene: { at: 0, alt, bg: "garden", props: [{ k: "hive", x: 560, y: 330 }, { k: "flowers", x: 260 }, { k: "bee", x: 330, y: 240 }, { k: "honey", x: 400 }] } },
  { slug: "saat-lampu-padam-bintang-menyala", title: { id: "Teropong bintang", en: "Stargazing" }, scene: { at: 0, alt, bg: "hill", time: "day", props: [{ k: "telescope", x: 400, s: 1.5 }, { k: "goldstar", x: 220, y: 180, s: 0.8 }, { k: "goldstar", x: 560, y: 140, s: 0.6 }] } },
];
export const coloringFor = (slug: string) => COLORING.find((c) => c.slug === slug);
