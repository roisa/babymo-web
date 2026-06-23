import type { Catatan } from "../content/types";

/**
 * A small set of pure-CSS illustrated "scenes" used as cover art for story
 * cards (and reusable elsewhere). Each scene is drawn with CSS shapes
 * (sky gradient, sun/moon, clouds, hills, flowers…) and hosts the Baby Mo
 * pose, so the list reads as an illustrated storybook rather than plain text.
 */
export type SceneKey = "day" | "night" | "garden" | "rain" | "cozy";

const RULES: [RegExp, SceneKey][] = [
  [/malam|tidur|sleep|bedtime|bintang|\bstar|bulan|\bmoon|selimut|gelap|\bnight|mimpi|dream/i, "night"],
  [/hujan|\brain|gerimis|petir|badai|storm/i, "rain"],
  [/biji|tumbuh|tanam|bunga|flower|kebun|taman|garden|\bseed|\bgrow|pohon|\btree|tunas|daun|liburan|pantai|alam|nature/i, "garden"],
  [/rumah|\bhome\b|dapur|kitchen|makan|\beat\b|kamar|\broom\b|buku|\bbook\b|baca|\bread|masak|cook|bekal|meja/i, "cozy"],
];

/** Pick a scene for a story from its title + hook + tags. Defaults to "day". */
export function sceneForCatatan(n: Catatan): SceneKey {
  const hay = `${n.title.id} ${n.title.en} ${n.hook.id} ${n.hook.en} ${n.tags.join(" ")}`;
  for (const [re, key] of RULES) if (re.test(hay)) return key;
  return "day";
}

/** Deterministic fallback pose for entries without one (keeps cards varied). */
const FALLBACK_POSES = [
  "baby-mo-idea.png",
  "baby-mo-ok.png",
  "baby-mo-alright.png",
  "baby-mo-pose-15.png",
  "baby-mo-pose-22.png",
  "baby-mo-pose-31.png",
];

export function poseForCatatan(n: Catatan): string {
  if (n.pose) return n.pose;
  let h = 0;
  for (let i = 0; i < n.slug.length; i++) h = (h * 31 + n.slug.charCodeAt(i)) >>> 0;
  return FALLBACK_POSES[h % FALLBACK_POSES.length]!;
}
