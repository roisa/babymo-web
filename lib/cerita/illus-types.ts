import type { Locale } from "@/lib/i18n/config";

/**
 * Illustrated story scenes. Each illustrated story has a list of scenes;
 * a scene starts at a paragraph index (`at`) and stays until the next one,
 * so Book Mode shows the picture that matches the text on each page.
 * Scenes are composed from a drawn background, props, Baby Mo poses and
 * motion effects, rendered as animated SVG by <StoryArt>.
 */
export type ArtBg =
  | "bedroom"
  | "living"
  | "kitchen"
  | "bathroom"
  | "garden"
  | "park"
  | "market"
  | "street"
  | "mosque"
  | "beach"
  | "court"
  | "supermarket"
  | "clinic";

export type ArtTime = "day" | "dusk" | "night" | "rain";

export type ArtProp =
  | "toothbrush"
  | "cup"
  | "veggies"
  | "fruit"
  | "kitten"
  | "box"
  | "umbrella"
  | "puddle"
  | "towel"
  | "fort"
  | "lamp"
  | "books"
  | "teddy"
  | "cookies"
  | "thermometer"
  | "soup"
  | "water"
  | "flowers"
  | "lantern"
  | "mat"
  | "shoes"
  | "sandcastle"
  | "bucket"
  | "crab"
  | "shell"
  | "tent"
  | "camplight"
  | "bicycle"
  | "cone"
  | "mailbox"
  | "parcel"
  | "envelope"
  | "tree"
  | "bush"
  | "butterfly"
  | "bird"
  | "heart"
  | "balloon"
  | "milk"
  | "clock"
  | "card"
  | "seed"
  | "pot"
  | "sprout"
  | "seedling"
  | "plant"
  | "bloom"
  | "wateringcan"
  | "rainbow"
  | "minirainbow"
  | "car"
  | "carmud"
  | "carshiny"
  | "hose"
  | "sponge"
  | "frog"
  | "snail"
  | "ladybug"
  | "boots"
  | "bench"
  | "sleeper"
  | "tablet"
  | "hourglass"
  | "bunny"
  | "cradle"
  | "cow"
  | "trashbag"
  | "litter"
  | "swing"
  | "slide"
  | "shirt"
  | "shirtback"
  | "flour"
  | "egg"
  | "bowl"
  | "oven"
  | "phone"
  | "drawing"
  | "kite"
  | "puzzle"
  | "plane"
  | "tomato"
  | "tomatodry"
  | "tomatored"
  | "cloud"
  | "cracks"
  | "icecreamcart"
  | "icecream"
  | "popsicle"
  | "coins"
  | "brooms"
  | "laptop"
  | "giraffe"
  | "magnifier"
  | "faucet"
  | "minaret"
  | "becak"
  | "robot"
  | "moon"
  | "rooster"
  | "bee"
  | "honey"
  | "ants"
  | "blocks"
  | "blockstall"
  | "blocksfall"
  | "dog"
  | "pictures"
  | "jar"
  | "school"
  | "ball"
  | "apple"
  | "sun"
  | "cookiejar"
  | "mirror"
  | "quran"
  | "dates"
  | "rice"
  | "paddy"
  | "glassbroken"
  | "goldstar"
  /* tennis */
  | "racket"
  | "tennisball"
  | "ballbasket"
  | "tennisnet"
  | "trophy"
  /* moving tennis balls & motion marks (place them where the action is) */
  | "ballfly"
  | "ballbounce"
  | "balltoss"
  | "swoosh"
  | "bonk"
  /* practice & rally motion */
  | "wall"
  | "ballrebound"
  | "ballrally"
  | "target"
  | "footprints"
  | "ladder"
  | "progresschart"
  /* tennis life */
  | "scoreboard"
  | "scoreboardfixed"
  | "ballroll"
  | "ballmark"
  | "racketbroken"
  | "spool"
  | "whistle"
  | "cap"
  /* practical-life books */
  | "counter"
  | "trolley"
  | "phonecard"
  | "germs"
  | "dacin"
  | "candle"
  | "plaster"
  | "jars3"
  | "pricetag"
  | "ketupat"
  | "swimring";

export type ArtFx =
  | "rain"
  | "sparkle"
  | "stars"
  | "bubbles"
  | "hearts"
  | "confetti"
  | "zzz"
  | "fireflies"
  | "leaves"
  | "notes"
  | "lightning"
  | "shootingstar";

export interface ArtItem {
  k: ArtProp;
  /** centre x in the 800-wide frame */
  x: number;
  /** bottom y (defaults to the floor/ground line) */
  y?: number;
  /** scale (1 = default size) */
  s?: number;
  flip?: boolean;
  /** animation delay in seconds (moving props) — e.g. to launch a ball on
   *  the contact frame of a swing */
  d?: number;
}

export interface ArtMo {
  /** "mo" (default), "ais" (lib/cerita/ais-poses.ts) or a friend —
   *  "adam" / "ayah" (lib/cerita/friends-poses.ts, drawn taller automatically) */
  who?: "mo" | "ais" | "adam" | "ayah" | "umi";
  /** pose name: baby-mo-<pose>.png */
  pose: string;
  x: number;
  /** height in px of the 450-tall frame (default 190) */
  s?: number;
  flip?: boolean;
  /** "bob" (default), "hop", "sway" or "still" */
  move?: "bob" | "hop" | "sway" | "still";
  /** frame-by-frame animation: pose names played in order on a loop
   *  (e.g. Adam's tennis-fh-1…6). Repeat a name to hold a frame. */
  seq?: string[];
  /** frames per second for `seq` (default 8) */
  fps?: number;
  /** frame shown when motion is reduced (default: about 2/3 through) */
  key?: number;
  /** onion-skin trail: the two previous frames of `seq` show faintly behind
   *  (slow-motion / "watch the swing" moments) */
  ghost?: boolean;
}

export interface ArtScene {
  /** paragraph index (0-based, blank-line separated) where this picture starts */
  at: number;
  bg: ArtBg;
  time?: ArtTime;
  props?: ArtItem[];
  mo?: ArtMo[];
  fx?: ArtFx[];
  /** x to centre the full-page (portrait) crop on; defaults to Baby Mo */
  focus?: number;
  /** short label read by screen readers and shown under the hero art */
  alt: Record<Locale, string>;
}
