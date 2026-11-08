import type { ComponentType } from "react";
import type { ArtProp } from "@/lib/cerita/illus-types";
import { Ring, Rabbit, Balloon, Books, Box, Clock, Cookies, Cup, Fruit, GoldStar, Kitten, Lamp, Mat, Soup, Teddy, Towel, Veggies, Water } from "./home";
import { LadderUp, Bench, Bicycle, BlocksFall, BlocksLow, BlocksTall, Bucket, CarMud, CarPlain, CarShiny, Crab, Drawing, Kite, Lantern, Minaret, Quran, Sandcastle, Shell, Sleeper, Tent, Umbrella } from "./outdoor";
import { BallGreen, BallHopper, BallMachine, BallOrange, BallRed, BallTube, CourtBrush, Medal, MiniNet, Racket, RacketBag, SportBottle, UmpireChairProp } from "./tennis";
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
  teddy: { draw: Teddy, group: "home", note: "Teddy bear with a bow, bobs." },
  lamp: { draw: Lamp, group: "home", note: "Floor lamp with a warm glow." },
  mat: { draw: Mat, group: "faith", note: "Prayer mat (sajadah) with a mihrab arch." },
  box: { draw: Box, group: "home", note: "Open cardboard box." },
  books: { draw: Books, group: "home", note: "Stack of three books with a bookmark." },
  balloon: { draw: Balloon, group: "play", note: "Red balloon floating on a string." },
  clock: { draw: Clock, group: "home", note: "Alarm clock, minute hand turns." },
  cup: { draw: Cup, group: "food", note: "Pink mug of tea with a heart." },
  towel: { draw: Towel, group: "home", note: "Two folded towels." },
  goldstar: { draw: GoldStar, group: "symbols", note: "Shiny reward star, glows." },
  ring: { draw: Ring, group: "home", note: "Gold ring with a pink gem, sparkles." },
  rabbit: { draw: Rabbit, group: "critters", note: "Real white rabbit, sits and blinks." },
  kitten: { draw: Kitten, group: "critters", note: "Ginger kitten, blinks and wags." },
  cookies: { draw: Cookies, group: "food", note: "Choc-chip cookies on a plate." },
  soup: { draw: Soup, group: "food", note: "Steaming bowl of soup with a spoon." },
  fruit: { draw: Fruit, group: "food", note: "Basket of fruit: apple, banana, orange, grapes, pear." },
  veggies: { draw: Veggies, group: "food", note: "Crate of tomatoes, carrot and lettuce." },
  water: { draw: Water, group: "food", note: "Glass of water with bubbles." },
  car: { draw: CarPlain, group: "outdoor", note: "Family car." },
  carmud: { draw: CarMud, group: "outdoor", note: "Car covered in mud splashes." },
  carshiny: { draw: CarShiny, group: "outdoor", note: "Freshly washed car, twinkles." },
  bicycle: { draw: Bicycle, group: "outdoor", note: "Bicycle with a basket, wheels spin." },
  umbrella: { draw: Umbrella, group: "outdoor", note: "Striped umbrella, sways." },
  bench: { draw: Bench, group: "outdoor", note: "Park bench." },
  kite: { draw: Kite, group: "play", note: "Kite with a bow tail, sways in the wind." },
  sandcastle: { draw: Sandcastle, group: "sea", note: "Sandcastle with a waving flag." },
  bucket: { draw: Bucket, group: "sea", note: "Beach bucket and spade." },
  shell: { draw: Shell, group: "sea", note: "Pink scallop shell." },
  crab: { draw: Crab, group: "sea", note: "Smiling crab, scuttles sideways." },
  tent: { draw: Tent, group: "outdoor", note: "Camping tent with bunting, door flaps." },
  lantern: { draw: Lantern, group: "outdoor", note: "Glowing lantern, sways." },
  sleeper: { draw: Sleeper, group: "home", note: "Umi resting in bed, blanket breathes." },
  blocks: { draw: BlocksLow, group: "play", note: "Three toy blocks." },
  blockstall: { draw: BlocksTall, group: "play", note: "Wobbly tall tower of blocks." },
  blocksfall: { draw: BlocksFall, group: "play", note: "Tower fallen over." },
  drawing: { draw: Drawing, group: "play", note: "Child's crayon drawing, taped." },
  quran: { draw: Quran, group: "faith", note: "The Qur'an open on a rehal stand, glowing." },
  ladderup: { draw: LadderUp, group: "play", note: "Standing step ladder for climbing scenes." },
  minaret: { draw: Minaret, group: "faith", note: "Mosque minaret, adzan waves." },
  racket: { draw: Racket, group: "tennis", note: "Junior racket with grip tape." },
  ballbasket: { draw: BallHopper, group: "tennis", note: "Ball hopper full of balls." },
  ballred: { draw: BallRed, group: "tennis", note: "Red stage ball (mini court, slowest)." },
  ballorange: { draw: BallOrange, group: "tennis", note: "Orange stage ball." },
  ballgreen: { draw: BallGreen, group: "tennis", note: "Green stage ball." },
  ballmachine: { draw: BallMachine, group: "tennis", note: "Ball machine, fires balls." },
  racketbag: { draw: RacketBag, group: "tennis", note: "Tennis bag with a racket handle." },
  sportbottle: { draw: SportBottle, group: "tennis", note: "Sports water bottle." },
  balltube: { draw: BallTube, group: "tennis", note: "Tube of three balls." },
  mininet: { draw: MiniNet, group: "tennis", note: "Portable low net for mini-tennis." },
  medal: { draw: Medal, group: "tennis", note: "Finisher's medal on a ribbon." },
  courtbrush: { draw: CourtBrush, group: "tennis", note: "Clay-court drag brush." },
  umpirechair: { draw: UmpireChairProp, group: "tennis", note: "Umpire chair." },
};
