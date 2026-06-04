import type { Locale } from "@/lib/i18n/config";
import { getAllCatatan } from "@/lib/content/catatan";
import type { Catatan } from "@/lib/content/types";

/**
 * Curated cerita themes for the /cerita/tema hub. The raw story `tags` are
 * noisy (synonyms, singletons, non-themes), so each theme maps a clean set
 * of tags to one keyword-targeted landing page. A theme page only renders
 * when it has enough stories — see MIN_STORIES below.
 */
export type CeritaTheme = {
  slug: string;
  label: Record<Locale, string>;
  /** SEO + on-page intro */
  desc: Record<Locale, string>;
  /** Story tags that belong to this theme */
  tags: string[];
};

export const CERITA_THEMES: CeritaTheme[] = [
  {
    slug: "akhlak",
    label: { id: "Akhlak", en: "Good Character" },
    desc: {
      id: "Cerita anak islami tentang akhlak mulia — jujur, rendah hati, dan berbuat baik dalam keseharian.",
      en: "Islamic stories for children about good character — honesty, humility, and kindness in daily life.",
    },
    tags: ["akhlak", "jujur"],
  },
  {
    slug: "persaudaraan",
    label: { id: "Persaudaraan", en: "Siblings & Friendship" },
    desc: {
      id: "Cerita hangat tentang kasih sayang antar saudara — Baby Mo & Baby Ais belajar saling menjaga, berbagi, dan rukun.",
      en: "Warm stories about love between siblings — Baby Mo & Baby Ais learning to protect, share, and get along.",
    },
    tags: ["saudara", "anak-kembar", "kembar", "bayi-kembar"],
  },
  {
    slug: "kasih-sayang",
    label: { id: "Kasih Sayang", en: "Kindness & Compassion" },
    desc: {
      id: "Cerita anak tentang kasih sayang, empati, dan kelembutan kepada sesama dan kepada makhluk kecil.",
      en: "Children's stories about compassion, empathy, and gentleness toward others and small creatures.",
    },
    tags: ["kasih-sayang", "kelembutan", "empati", "binatang", "maaf"],
  },
  {
    slug: "sabar",
    label: { id: "Sabar", en: "Patience" },
    desc: {
      id: "Cerita anak tentang sabar dan tidak mudah menyerah — menunggu giliran, mencoba lagi, dan tetap tenang.",
      en: "Children's stories about patience and not giving up — waiting turns, trying again, and staying calm.",
    },
    tags: ["sabar", "ketangguhan", "coba-lagi"],
  },
  {
    slug: "syukur",
    label: { id: "Syukur", en: "Gratitude" },
    desc: {
      id: "Cerita anak tentang bersyukur — menghitung nikmat dan berterima kasih kepada Allah setiap hari.",
      en: "Children's stories about gratitude — counting blessings and thanking Allah each day.",
    },
    tags: ["syukur"],
  },
  {
    slug: "berbagi",
    label: { id: "Berbagi", en: "Sharing" },
    desc: {
      id: "Cerita anak tentang berbagi dengan saudara, teman, dan tetangga — belajar memberi dengan hati senang.",
      en: "Children's stories about sharing with siblings, friends, and neighbours — learning to give gladly.",
    },
    tags: ["berbagi", "tetangga"],
  },
  {
    slug: "berani",
    label: { id: "Berani", en: "Courage" },
    desc: {
      id: "Cerita anak tentang keberanian — menghadapi gelap dan rasa takut dengan percaya bahwa Allah menjaga.",
      en: "Children's stories about courage — facing the dark and fear, trusting that Allah is watching over us.",
    },
    tags: ["berani", "takut-gelap"],
  },
  {
    slug: "adab",
    label: { id: "Adab", en: "Manners" },
    desc: {
      id: "Cerita anak tentang adab sehari-hari — salam, bismillah, sopan santun, dan adab makan.",
      en: "Children's stories about everyday manners — greetings, bismillah, politeness, and table manners.",
    },
    tags: ["adab", "adab-makan", "sopan-santun", "salam", "bismillah"],
  },
  {
    slug: "sebelum-tidur",
    label: { id: "Sebelum Tidur", en: "Bedtime" },
    desc: {
      id: "Cerita pengantar tidur islami — rutinitas malam yang tenang dan doa sebelum tidur bersama si kecil.",
      en: "Islamic bedtime stories — a calm night routine and the sleep du'a with your little one.",
    },
    tags: ["malam", "doa-tidur", "rutinitas"],
  },
  {
    slug: "mengenal-allah",
    label: { id: "Mengenal Allah", en: "Knowing Allah" },
    desc: {
      id: "Cerita anak yang menumbuhkan iman — mengenal Allah, merenungi ciptaan-Nya, dan pertanyaan-pertanyaan kecil tentang Tuhan.",
      en: "Stories that nurture faith — knowing Allah, reflecting on His creation, and a child's little questions about God.",
    },
    tags: ["iman", "pertanyaan-anak", "tadabbur", "masjid"],
  },
  {
    slug: "keluarga",
    label: { id: "Keluarga", en: "Family" },
    desc: {
      id: "Cerita anak tentang keluarga — membantu di rumah, silaturahmi, kerja sama, dan menyayangi orang tua.",
      en: "Children's stories about family — helping at home, visiting relatives, teamwork, and loving parents.",
    },
    tags: ["keluarga", "silaturahmi", "kerja-sama", "membantu", "tanggung-jawab"],
  },
  {
    slug: "fakta-seru",
    label: { id: "Sains & Fakta Seru", en: "Science & Fun Facts" },
    desc: {
      id: "Cerita anak penuh fakta seru — lebah, semut, bulan, dan keajaiban ciptaan Allah yang membuat anak penasaran.",
      en: "Children's stories full of fun facts — bees, ants, the moon, and the wonders of Allah's creation.",
    },
    tags: ["fakta-seru", "tadabbur"],
  },
  {
    slug: "perasaan",
    label: { id: "Mengelola Perasaan", en: "Managing Feelings" },
    desc: {
      id: "Cerita anak tentang mengenali dan mengelola perasaan — marah, sedih, dan tantrum dengan tenang.",
      en: "Children's stories about recognising and managing feelings — anger, sadness, and tantrums, calmly.",
    },
    tags: ["emosi", "tantrum"],
  },
];

const MIN_STORIES = 3;

function matches(story: Catatan, theme: CeritaTheme): boolean {
  return story.tags.some((t) => theme.tags.includes(t));
}

export function getCeritaByTheme(slug: string): Catatan[] {
  const theme = CERITA_THEMES.find((t) => t.slug === slug);
  if (!theme) return [];
  return getAllCatatan().filter((c) => matches(c, theme));
}

export function getCeritaThemeBySlug(slug: string): CeritaTheme | undefined {
  return CERITA_THEMES.find((t) => t.slug === slug);
}

/** Themes that have at least MIN_STORIES stories, with counts, biggest first. */
export function getCeritaThemes(): { theme: CeritaTheme; count: number }[] {
  const all = getAllCatatan();
  return CERITA_THEMES.map((theme) => ({
    theme,
    count: all.filter((c) => matches(c, theme)).length,
  }))
    .filter((x) => x.count >= MIN_STORIES)
    .sort((a, b) => b.count - a.count || a.theme.slug.localeCompare(b.theme.slug));
}

/** The visible themes a given story belongs to (for chips on the detail page). */
export function getThemesForCatatan(story: Catatan): CeritaTheme[] {
  const visible = new Set(getCeritaThemes().map((x) => x.theme.slug));
  return CERITA_THEMES.filter((t) => visible.has(t.slug) && matches(story, t));
}

/** Theme slugs that should get a static page. */
export function getCeritaThemeSlugs(): string[] {
  return getCeritaThemes().map((x) => x.theme.slug);
}
