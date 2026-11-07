import { notFound } from "next/navigation";
import { type Locale, isLocale, locales } from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { PoseLibrary, type PoseRow, type FrameSet } from "@/components/PoseLibrary";
import { MO_POSES, moPoseSrc } from "@/lib/cerita/mo-poses";
import { AIS_POSES, AIS_CATEGORIES, AIS_FOR, aisPoseSrc } from "@/lib/cerita/ais-poses";
import { ADAM_POSES, AYAH_POSES, UMI_POSES, ADAM_FOR, AYAH_FOR, friendPoseSrc } from "@/lib/cerita/friends-poses";
import { getBookPages } from "@/lib/cerita/picture-books";
import { ADAPTED } from "@/lib/cerita/picture-books-adapted";
import { getAllCatatan } from "@/lib/content/catatan";

/**
 * Pose Library — a team tool (not in the menu, not indexed) for finding the
 * right Baby Mo & friends pose: search, filter by character / category,
 * copy the pose name or StoryArt snippet, preview frame animations, and see
 * which books already use a pose.
 */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/pose",
    title: locale === "id" ? "Pustaka Pose — Tim Baby Mo" : "Pose Library — Baby Mo Team",
    description: locale === "id" ? "Cari pose Baby Mo, Baby Ais, Kak Adam, Abi dan Umi." : "Find poses of Baby Mo, Baby Ais, Kak Adam, Abi and Umi.",
    noindex: true,
  });
}

type Who = PoseRow["who"];

/** which book titles use each `${who}:${pose}` */
function poseUsage(l: Locale): Map<string, string[]> {
  const use = new Map<string, Set<string>>();
  const slugs = new Set<string>(Object.keys(ADAPTED));
  const titles = new Map<string, string>();
  for (const c of getAllCatatan()) titles.set(c.slug, c.title[l]);
  for (const s of titles.keys()) if (getBookPages(s)) slugs.add(s);
  for (const slug of slugs) {
    const b = getBookPages(slug);
    if (!b) continue;
    const title = titles.get(slug) ?? slug;
    for (const sc of [b.cover, ...b.pages.map((p) => p.scene)]) {
      for (const m of sc.mo ?? []) {
        const who = (m.who ?? "mo") as Who;
        for (const p of [m.pose, ...(m.seq ?? [])]) {
          if (!p) continue;
          const k = `${who}:${p}`;
          if (!use.has(k)) use.set(k, new Set());
          use.get(k)!.add(title);
        }
      }
    }
  }
  return new Map([...use].map(([k, v]) => [k, [...v].sort()]));
}

function frameSets(who: Who, table: Record<string, string[]>): FrameSet[] {
  return Object.entries(table)
    .filter(([k]) => k.endsWith("Frames"))
    .map(([k, frames]) => ({ who, key: k.replace(/Frames$/, ""), frames }));
}

export default async function PosePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const id = l === "id";
  const usage = poseUsage(l);
  const used = (who: Who, name: string) => usage.get(`${who}:${name}`) ?? [];

  const rows: PoseRow[] = [
    ...MO_POSES.map((p) => ({ who: "mo" as const, name: p.name, src: moPoseSrc(p.name), category: p.category, mood: p.mood, use: p.use, low: p.low, air: p.air, books: used("mo", p.name) })),
    ...AIS_POSES.map((p) => ({ who: "ais" as const, name: p.name, src: aisPoseSrc(p.name), category: p.category, mood: p.mood, use: p.use, props: p.props, low: p.low, check: p.check, books: used("ais", p.name) })),
    ...ADAM_POSES.map((p) => ({ who: "adam" as const, name: p.name, src: friendPoseSrc("adam", p.name), category: p.category, mood: p.mood, use: p.use, props: p.props, low: p.low, air: p.air, duo: p.duo, alt: p.alt, check: p.check, books: used("adam", p.name) })),
    ...AYAH_POSES.map((p) => ({ who: "ayah" as const, name: p.name, src: friendPoseSrc("ayah", p.name), category: p.category, mood: p.mood, use: p.use, props: p.props, low: p.low, air: p.air, duo: p.duo, alt: p.alt, check: p.check, books: used("ayah", p.name) })),
    ...UMI_POSES.map((p) => ({ who: "umi" as const, name: p.name, src: friendPoseSrc("umi", p.name), category: p.category, mood: p.mood, use: p.use, props: p.props, low: p.low, air: p.air, duo: p.duo, alt: p.alt, check: p.check, books: used("umi", p.name) })),
  ];
  const sets: FrameSet[] = [
    ...frameSets("adam", ADAM_FOR),
    ...frameSets("ayah", AYAH_FOR),
    ...frameSets("ais", AIS_FOR),
  ];

  return (
    <>
      <Header locale={l} currentPath="/pose" />
      <main id="main" className="mx-auto max-w-7xl px-4 pb-28 pt-8 sm:px-8 sm:pt-12 md:pb-16">
        <header className="mb-5 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-berry">{id ? "Khusus tim Baby Mo" : "Baby Mo team only"}</p>
          <h1 className="mt-1 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">{id ? "Pustaka Pose" : "Pose Library"} 🧸</h1>
          <p className="mt-2 text-base leading-relaxed text-whisper">
            {id
              ? `${rows.length} pose Baby Mo, Baby Ais, Kak Adam, Abi dan Umi. Cari dengan kata (misalnya "doa", "tidur", "raket", "sedih"), saring per tokoh atau kategori, lalu klik pose untuk melihat detail, menyalin nama, atau mengunduh PNG-nya.`
              : `${rows.length} poses of Baby Mo, Baby Ais, Kak Adam, Abi and Umi. Search by word (e.g. "dua", "sleep", "racket", "sad"), filter by character or category, then click a pose to see details, copy its name or download the PNG.`}
          </p>
        </header>
        <PoseLibrary locale={l} rows={rows} sets={sets} categories={AIS_CATEGORIES} />
      </main>
      <Footer locale={l} currentPath="/pose" />
      <MobileNav locale={l} />
    </>
  );
}
