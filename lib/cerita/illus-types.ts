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
  | "beach";

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
  | "glassbroken";

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
}

export interface ArtMo {
  /** pose name: baby-mo-<pose>.png */
  pose: string;
  x: number;
  /** height in px of the 450-tall frame (default 190) */
  s?: number;
  flip?: boolean;
  /** "bob" (default), "hop", "sway" or "still" */
  move?: "bob" | "hop" | "sway" | "still";
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
