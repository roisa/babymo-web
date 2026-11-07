import type { ComponentType } from "react";
import type { ArtProp } from "@/lib/cerita/illus-types";
import { Bee, Bird, Bush, Butterfly, CrescentProp, Flowers, Heart, MoonProp, Puddle, StormCloud, SunProp, Tree } from "./nature";

/**
 * StoryArt element library — the redrawn, shaded versions of scene props.
 *
 * Each entry draws one prop at its anchor (see kit.tsx for the house style).
 * StoryArt checks this registry first and falls back to its older inline
 * drawings for anything not listed yet, so props can be upgraded one by one
 * without touching any story data. The team gallery (/elemen) lists every
 * prop and marks which ones are already redrawn.
 */
export type ElementGroup = "nature" | "sky" | "critters" | "home" | "food" | "play" | "outdoor" | "sea" | "tennis" | "faith" | "symbols";

export interface ArtElement {
  draw: ComponentType;
  group: ElementGroup;
  /** short note for the team gallery */
  note: string;
}

export const ELEMENTS: Partial<Record<ArtProp, ArtElement>> = {
  tree: { draw: Tree, group: "nature", note: "Shady fruit tree, canopy sways." },
  bush: { draw: Bush, group: "nature", note: "Round bush with tiny blossoms." },
  flowers: { draw: Flowers, group: "nature", note: "Three swaying flowers with leaves." },
  butterfly: { draw: Butterfly, group: "critters", note: "Flaps and flutters around." },
  bird: { draw: Bird, group: "critters", note: "Flies across the sky, wing flaps." },
  bee: { draw: Bee, group: "critters", note: "Smiling bee, buzzes about." },
  heart: { draw: Heart, group: "symbols", note: "Floating love heart." },
  puddle: { draw: Puddle, group: "nature", note: "Rain puddle with ripples." },
  sun: { draw: SunProp, group: "sky", note: "Smiling sun, rays turn slowly." },
  moon: { draw: MoonProp, group: "sky", note: "Full moon with soft craters." },
  crescent: { draw: CrescentProp, group: "sky", note: "Smiling crescent moon." },
  cloud: { draw: StormCloud, group: "sky", note: "Storm cloud with flashing bolt." },
};
