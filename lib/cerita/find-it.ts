/**
 * "Cari, yuk!" — one small thing hidden on every page of some picture books.
 * StoryArt places it near the action (inside the phone crop, away from the
 * characters), so the position never needs hand-tuning.
 */
import type { ArtProp } from "./illus-types";
import type { Locale } from "@/lib/i18n/config";

export interface FindIt {
  k: ArtProp;
  label: Record<Locale, string>;
  /** where it hides: on the ground / sand, floating in water, or up high */
  zone: "ground" | "water" | "sky";
  s: number;
}

export const FIND_IT: Record<string, FindIt> = {
  "gurita-kecil-yang-pemalu": { k: "starfish", label: { id: "bintang laut kecil", en: "a little starfish" }, zone: "ground", s: 0.7 },
  "tukik-pulang-ke-laut": { k: "shell", label: { id: "kerang merah muda", en: "a pink shell" }, zone: "ground", s: 0.8 },
  "jingga-ikan-badut-mencari-rumah": { k: "seahorse", label: { id: "kuda laut", en: "a seahorse" }, zone: "water", s: 0.42 },
  "lagu-paus-untuk-bayinya": { k: "starfish", label: { id: "bintang laut", en: "a starfish" }, zone: "ground", s: 0.65 },
  "kepiting-yang-berjalan-miring": { k: "shell", label: { id: "kerang kecil", en: "a little shell" }, zone: "ground", s: 0.8 },
  "lebah-kecil-dan-madu": { k: "ladybug", label: { id: "kepik merah", en: "a red ladybird" }, zone: "ground", s: 1 },
  "orangutan-dan-pohon-untuk-anaknya": { k: "butterfly", label: { id: "kupu-kupu", en: "a butterfly" }, zone: "sky", s: 0.85 },
  "saat-lampu-padam-bintang-menyala": { k: "goldstar", label: { id: "bintang emas", en: "a golden star" }, zone: "sky", s: 0.42 },
};

/** Names the voice says when a child taps something (toddler vocabulary). */
export const TAP_NAMES: Partial<Record<string, Record<Locale, string>>> = {
  octopus: { id: "Gurita!", en: "Octopus!" }, octopusshy: { id: "Gurita!", en: "Octopus!" }, octopuswave: { id: "Halo, gurita!", en: "Hello, octopus!" }, octopushide: { id: "Ciluk… ba! Gurita!", en: "Peek-a-boo! Octopus!" },
  turtle: { id: "Penyu!", en: "Turtle!" }, hatchling: { id: "Tukik!", en: "Baby turtle!" }, hatchlings: { id: "Tukik-tukik!", en: "Baby turtles!" },
  whale: { id: "Paus!", en: "Whale!" }, clownfish: { id: "Ikan badut!", en: "Clownfish!" }, anemone: { id: "Anemon!", en: "Anemone!" },
  jellyfish: { id: "Ubur-ubur!", en: "Jellyfish!" }, starfish: { id: "Bintang laut!", en: "Starfish!" }, seahorse: { id: "Kuda laut!", en: "Seahorse!" },
  fishschool: { id: "Ikan-ikan!", en: "Fish!" }, crab: { id: "Kepiting! Kres-kres!", en: "Crab! Scuttle!" }, shell: { id: "Kerang!", en: "Shell!" },
  orangutan: { id: "Orangutan!", en: "Orangutan!" }, orangutanswing: { id: "Wiii! Orangutan!", en: "Wheee! Orangutan!" },
  bee: { id: "Lebah! Bzzz!", en: "Bee! Bzzz!" }, hive: { id: "Sarang lebah!", en: "Beehive!" }, beebox: { id: "Rumah lebah!", en: "Bee box!" }, honey: { id: "Madu!", en: "Honey!" },
  ladybug: { id: "Kepik!", en: "Ladybird!" }, butterfly: { id: "Kupu-kupu!", en: "Butterfly!" }, snail: { id: "Siput!", en: "Snail!" }, frog: { id: "Katak! Kwok!", en: "Frog! Ribbit!" },
  kitten: { id: "Meong!", en: "Meow!" }, cow: { id: "Sapi! Mooo!", en: "Cow! Moo!" }, bird: { id: "Burung! Cuit-cuit!", en: "Bird! Tweet!" }, bunny: { id: "Kelinci!", en: "Bunny!" },
  dog: { id: "Guk-guk!", en: "Woof!" }, rooster: { id: "Kukuruyuk!", en: "Cock-a-doodle-doo!" }, giraffe: { id: "Jerapah!", en: "Giraffe!" }, ants: { id: "Semut!", en: "Ants!" },
  telescope: { id: "Teropong!", en: "Telescope!" }, goldstar: { id: "Bintang!", en: "A star!" }, moon: { id: "Bulan!", en: "The moon!" }, sun: { id: "Matahari!", en: "The sun!" },
  tennisball: { id: "Bola tenis!", en: "Tennis ball!" }, racket: { id: "Raket!", en: "Racket!" }, balloon: { id: "Balon!", en: "Balloon!" }, teddy: { id: "Boneka beruang!", en: "Teddy bear!" },
  car: { id: "Mobil! Brum-brum!", en: "Car! Vroom!" }, bicycle: { id: "Sepeda! Kring-kring!", en: "Bike! Ring-ring!" }, plane: { id: "Pesawat! Ngeeeng!", en: "Plane! Whoosh!" },
  mo: { id: "Hai, aku Baby Mo!", en: "Hi, I'm Baby Mo!" }, ais: { id: "Hai, aku Baby Ais!", en: "Hi, I'm Baby Ais!" }, adam: { id: "Kak Adam!", en: "Kak Adam!" }, ayah: { id: "Abi!", en: "Abi!" }, umi: { id: "Umi!", en: "Umi!" },
};
