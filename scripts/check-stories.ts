/**
 * Story checks — run on every pull request (and locally: `npm run check:stories`).
 *
 * ERRORS (fail the check): a pose or prop that doesn't exist, a missing pose
 * image, a "duo" pose with a mismatched Baby Mo, Baby Mo twice on one page,
 * a missing translation, unbalanced quote marks, a series pointing at a
 * story that doesn't exist (or a book in two series).
 * WARNINGS (printed only): someone speaks but isn't in the picture, night
 * words on a daytime page.
 */
import fs from "node:fs";
import path from "node:path";
import { getBookPages } from "../lib/cerita/picture-books";
import { getAllCatatan } from "../lib/content/catatan";
import { MO_POSES } from "../lib/cerita/mo-poses";
import { AIS_POSES } from "../lib/cerita/ais-poses";
import { ADAM_POSES, AYAH_POSES, UMI_POSES } from "../lib/cerita/friends-poses";
import { SERIES } from "../lib/cerita/series";

const root = path.join(__dirname, "..");
const pub = (p: string) => fs.existsSync(path.join(root, "public", p));
const types = fs.readFileSync(path.join(root, "lib/cerita/illus-types.ts"), "utf8");
const union = (name: string) => {
  const b = types.slice(types.indexOf(`export type ${name} =`));
  return new Set([...b.slice(0, b.indexOf(";")).matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]!));
};
const PROPS = union("ArtProp");
const BGS = union("ArtBg");

type Pose = { name: string; duo?: boolean; check?: string; props?: string[] };
const LIB: Record<string, { poses: Pose[]; file: (n: string) => string }> = {
  mo: { poses: MO_POSES, file: (n) => `baby-mo-poses/baby-mo-${n}.png` },
  ais: { poses: AIS_POSES as Pose[], file: (n) => `baby-ais-poses/baby-ais-${n}.png` },
  adam: { poses: ADAM_POSES as Pose[], file: (n) => `adam-poses/adam-${n}.png` },
  ayah: { poses: AYAH_POSES as Pose[], file: (n) => `ayah-poses/ayah-${n}.png` },
  umi: { poses: UMI_POSES as Pose[], file: (n) => `umi-poses/umi-${n}.png` },
};
const POSE = new Map<string, Pose>();
for (const [who, l] of Object.entries(LIB)) for (const p of l.poses) POSE.set(`${who}:${p.name}`, p);

const errors: string[] = [];
const warnings: string[] = [];
const err = (where: string, msg: string) => errors.push(`${where}: ${msg}`);
const warn = (where: string, msg: string) => warnings.push(`${where}: ${msg}`);

const stories = getAllCatatan().filter((c) => c.kind === "story");
const SPEAK = /(kata|tanya|jawab|seru|bisik|panggil)\s+(Abi|Umi|Kak Adam|Ais)\b/g;
const WHO: Record<string, string> = { Abi: "ayah", Umi: "umi", "Kak Adam": "adam", Ais: "ais" };
const odd = (s: string) => ((s.match(/"/g) ?? []).length % 2 === 1);

for (const st of stories) {
  const b = getBookPages(st.slug);
  if (!b) continue;
  const scenes = [{ where: `${st.slug} cover`, sc: b.cover, text: null as null | { id: string; en: string } }, ...b.pages.map((p, i) => ({ where: `${st.slug} p${i + 1}`, sc: p.scene, text: p.text, quote: p.quote }))];
  for (const { where, sc, text, ...rest } of scenes) {
    if (!BGS.has(sc.bg)) err(where, `unknown background "${sc.bg}"`);
    for (const p of sc.props ?? []) if (!PROPS.has(p.k)) err(where, `unknown prop "${p.k}"`);
    const cast = sc.mo ?? [];
    for (const m of cast) {
      const who = m.who ?? "mo";
      for (const name of [m.pose, ...(m.seq ?? [])]) {
        const pose = POSE.get(`${who}:${name}`);
        if (!pose) { err(where, `unknown pose ${who}:${name}`); continue; }
        if (!pub(LIB[who]!.file(name))) err(where, `missing image for ${who}:${name}`);
      }
      const pose = POSE.get(`${who}:${m.pose}`);
      if (pose?.duo) {
        if (pose.check && /does not match/.test(pose.check)) err(where, `${who}:${m.pose} has a Baby Mo who doesn't match his model — draw them separately`);
        const others = cast.filter((x) => x !== m).map((x) => x.who ?? "mo");
        if ((pose.props ?? ["Baby Mo"]).includes("Baby Mo") && others.includes("mo")) err(where, `${who}:${m.pose} already contains Baby Mo, and Mo is on the page again`);
        if (pose.props?.includes("Baby Ais") && others.includes("ais")) err(where, `${who}:${m.pose} already contains Baby Ais, and Ais is on the page again`);
      }
    }
    if (text) {
      if (!text.id?.trim() || !text.en?.trim()) err(where, "missing Indonesian or English text");
      if (odd(text.id) || odd(text.en)) err(where, "unbalanced quote marks");
      const q = (rest as { quote?: { id: string; en: string } }).quote;
      if (q && (!q.id?.trim() || !q.en?.trim())) err(where, "quote missing a translation");
      const whoOnPage = new Set<string>(cast.map((m) => m.who ?? "mo"));
      for (const m of text.id.matchAll(SPEAK)) if (!whoOnPage.has(WHO[m[2]!]!)) warn(where, `${m[2]} speaks but isn't in the picture`);
      if (/\b(Malam itu|Malamnya|tengah malam)\b/.test(text.id) && (sc.time ?? "day") === "day") warn(where, "night text on a daytime page");
    }
  }
  const coverPose = (st as { pose?: string }).pose;
  if (coverPose && !pub(`baby-mo-poses/${coverPose}`)) err(`${st.slug}`, `cover pose ${coverPose} not found`);
}

const slugs = new Set(stories.map((s) => s.slug));
const seen = new Map<string, string>();
for (const s of SERIES) {
  for (const b of s.books) {
    if (!slugs.has(b)) err(`series ${s.key}`, `"${b}" is not a story`);
    if (seen.has(b)) err(`series ${s.key}`, `"${b}" is already in series ${seen.get(b)}`);
    seen.set(b, s.key);
  }
}

for (const w of warnings) console.log(`⚠️  ${w}`);
for (const e of errors) console.log(`❌ ${e}`);
console.log(`\nChecked ${stories.length} stories: ${errors.length} error(s), ${warnings.length} warning(s).`);
process.exit(errors.length ? 1 : 0);
