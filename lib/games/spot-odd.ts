/**
 * "Temukan Baby Mo yang Beda" / "Spot the Odd Baby Mo".
 *
 * A grid is filled with many copies of one pose; exactly one cell shows a
 * different pose. The player taps the odd one. Difficulty is an in-page toggle
 * (grid size), so each puzzle is a single rich, indexable page rather than
 * many thin near-duplicates. The odd cell's position re-randomises every play,
 * so a static page stays replayable.
 */

import type { Bilingual } from "@/lib/games/poses";

export interface SpotOddLevel {
  key: "mudah" | "sedang" | "sulit";
  label: Bilingual;
  cols: number;
  rows: number;
}

export const SPOT_ODD_LEVELS: SpotOddLevel[] = [
  { key: "mudah", label: { id: "Mudah", en: "Easy" }, cols: 4, rows: 4 },
  { key: "sedang", label: { id: "Sedang", en: "Medium" }, cols: 6, rows: 5 },
  { key: "sulit", label: { id: "Sulit", en: "Hard" }, cols: 8, rows: 7 },
];

export interface SpotOddPuzzle {
  slug: string;
  emoji: string;
  /** The pose that fills the grid. */
  baseFile: string;
  /** The single odd pose to find. */
  oddFile: string;
  title: Bilingual;
  /** One-line teaser for hubs / meta description. */
  blurb: Bilingual;
  /** Intro paragraph shown above the board. */
  intro: Bilingual;
  /** A light, on-brand fun fact to make each page unique. */
  funFact: Bilingual;
}

export const SPOT_ODD_PUZZLES: SpotOddPuzzle[] = [
  {
    slug: "baby-mo-berlari",
    emoji: "🏃",
    baseFile: "baby-mo-run.png",
    oddFile: "baby-mo-idea.png",
    title: { id: "Baby Mo Berlari", en: "Running Baby Mo" },
    blurb: {
      id: "Semua Baby Mo sedang berlari — temukan satu yang berhenti dapat ide!",
      en: "Every Baby Mo is running — find the one who stopped for an idea!",
    },
    intro: {
      id: "Baby Mo paling suka berlari di taman. Tapi di antara semua yang berlari, ada satu Baby Mo yang berhenti karena punya ide cemerlang. Bisakah kamu menemukannya secepat kilat?",
      en: "Baby Mo loves running in the park. But among all the runners, one Baby Mo has stopped because of a bright idea. Can you find it in a flash?",
    },
    funFact: {
      id: "Berlari membantu anak melatih keseimbangan dan koordinasi tubuh.",
      en: "Running helps children build balance and body coordination.",
    },
  },
  {
    slug: "baby-mo-gembira",
    emoji: "🎉",
    baseFile: "baby-mo-yeyy.png",
    oddFile: "baby-mo-wow.png",
    title: { id: "Baby Mo Gembira", en: "Joyful Baby Mo" },
    blurb: {
      id: "Lautan Baby Mo melompat gembira — mana yang sedang takjub?",
      en: "A sea of cheering Baby Mo — which one is amazed instead?",
    },
    intro: {
      id: "Hore! Semua Baby Mo melompat kegirangan. Namun ada satu yang berhenti sejenak karena takjub melihat sesuatu. Ayo temukan Baby Mo yang berbeda itu!",
      en: "Hooray! Every Baby Mo is jumping for joy. But one paused, amazed by something. Find that different Baby Mo!",
    },
    funFact: {
      id: "Tertawa dan melompat melepaskan hormon bahagia pada anak.",
      en: "Laughing and jumping release happy hormones in children.",
    },
  },
  {
    slug: "baby-mo-semangat",
    emoji: "✊",
    baseFile: "baby-mo-yes.png",
    oddFile: "baby-mo-alright.png",
    title: { id: "Baby Mo Semangat", en: "Cheering Baby Mo" },
    blurb: {
      id: "Semua mengepalkan tangan 'Yes!' — temukan yang berpose beda.",
      en: "All fists up shouting 'Yes!' — spot the one posing differently.",
    },
    intro: {
      id: "Yes! Baby Mo penuh semangat. Tapi satu Baby Mo memilih gaya yang berbeda. Pusatkan perhatianmu dan temukan dia!",
      en: "Yes! Baby Mo is full of spirit. But one Baby Mo chose a different style. Focus and find it!",
    },
    funFact: {
      id: "Memberi semangat pada anak menumbuhkan rasa percaya diri.",
      en: "Cheering kids on builds their self-confidence.",
    },
  },
  {
    slug: "baby-mo-oke",
    emoji: "👌",
    baseFile: "baby-mo-ok.png",
    oddFile: "baby-mo-idea.png",
    title: { id: "Baby Mo Oke", en: "Okay Baby Mo" },
    blurb: {
      id: "Semuanya bilang 'oke' — kecuali satu yang punya ide.",
      en: "Everyone says 'okay' — except one with an idea.",
    },
    intro: {
      id: "Baby Mo memberi tanda oke dengan ceria. Di antara semuanya, satu Baby Mo justru mengangkat jari karena punya ide. Temukan yang beda!",
      en: "Baby Mo gives a cheerful okay sign. Among them, one raises a finger with an idea instead. Spot the difference!",
    },
    funFact: {
      id: "Isyarat tangan membantu bayi berkomunikasi sebelum bisa bicara.",
      en: "Hand gestures help babies communicate before they can talk.",
    },
  },
  {
    slug: "baby-mo-ide",
    emoji: "💡",
    baseFile: "baby-mo-idea.png",
    oddFile: "baby-mo-ok.png",
    title: { id: "Baby Mo Punya Ide", en: "Baby Mo's Bright Idea" },
    blurb: {
      id: "Semua Baby Mo dapat ide — temukan satu yang bilang oke.",
      en: "Every Baby Mo has an idea — find the one saying okay.",
    },
    intro: {
      id: "Lampu ide menyala! Semua Baby Mo mengangkat jari penuh semangat. Tapi satu Baby Mo malah memberi tanda oke. Bisa temukan?",
      en: "Idea lights on! Every Baby Mo raises a finger eagerly. But one gives an okay sign. Can you find it?",
    },
    funFact: {
      id: "Anak yang sering diajak berpikir tumbuh lebih kreatif.",
      en: "Children encouraged to think tend to grow more creative.",
    },
  },
  {
    slug: "baby-mo-takjub",
    emoji: "😮",
    baseFile: "baby-mo-wow.png",
    oddFile: "baby-mo-yeyy.png",
    title: { id: "Baby Mo Takjub", en: "Amazed Baby Mo" },
    blurb: {
      id: "Wow! Semua takjub — mana yang melompat gembira?",
      en: "Wow! Everyone's amazed — which one is jumping for joy?",
    },
    intro: {
      id: "Wow! Baby Mo terpana melihat sesuatu yang menakjubkan. Namun satu Baby Mo justru melompat kegirangan. Temukan dia di antara keramaian!",
      en: "Wow! Baby Mo is stunned by something amazing. But one Baby Mo is jumping with joy instead. Find it in the crowd!",
    },
    funFact: {
      id: "Rasa kagum mendorong anak untuk terus bertanya dan belajar.",
      en: "A sense of wonder pushes children to keep asking and learning.",
    },
  },
  {
    slug: "baby-mo-berpikir",
    emoji: "🤔",
    baseFile: "baby-mo-pose-20.png",
    oddFile: "baby-mo-wow.png",
    title: { id: "Baby Mo Berpikir", en: "Thinking Baby Mo" },
    blurb: {
      id: "Semua sedang berpikir — temukan satu yang tiba-tiba takjub.",
      en: "All deep in thought — find the one who's suddenly amazed.",
    },
    intro: {
      id: "Hmm… Baby Mo sedang berpikir keras. Tapi satu Baby Mo sudah menemukan jawabannya dan takjub! Temukan Baby Mo yang berbeda itu.",
      en: "Hmm… Baby Mo is thinking hard. But one Baby Mo already found the answer and is amazed! Spot that different Baby Mo.",
    },
    funFact: {
      id: "Memberi anak waktu berpikir melatih kesabaran dan fokus.",
      en: "Giving children time to think builds patience and focus.",
    },
  },
  {
    slug: "baby-mo-terima-kasih",
    emoji: "🙏",
    baseFile: "baby-mo-thank-you.png",
    oddFile: "baby-mo-ok.png",
    title: { id: "Baby Mo Berterima Kasih", en: "Grateful Baby Mo" },
    blurb: {
      id: "Semua berterima kasih — mana yang memberi tanda oke?",
      en: "Everyone says thanks — which one gives an okay sign?",
    },
    intro: {
      id: "Terima kasih! Baby Mo penuh rasa syukur. Di antara semuanya, satu Baby Mo memberi tanda oke. Ayo temukan yang berbeda!",
      en: "Thank you! Baby Mo is full of gratitude. Among them, one gives an okay sign. Find the different one!",
    },
    funFact: {
      id: "Mengajarkan rasa syukur membuat anak lebih bahagia.",
      en: "Teaching gratitude makes children happier.",
    },
  },
  {
    slug: "baby-mo-malu",
    emoji: "🙈",
    baseFile: "baby-mo-pose-09.png",
    oddFile: "baby-mo-pose-06.png",
    title: { id: "Baby Mo Malu", en: "Shy Baby Mo" },
    blurb: {
      id: "Semua tersipu malu — temukan satu yang melambai ceria.",
      en: "All blushing shyly — find the one waving cheerfully.",
    },
    intro: {
      id: "Hihi… Baby Mo tersipu malu sambil menutup pipinya. Tapi satu Baby Mo justru melambai dengan ceria. Bisakah kamu menemukannya?",
      en: "Hehe… Baby Mo blushes shyly with hands on its cheeks. But one Baby Mo is waving cheerfully instead. Can you find it?",
    },
    funFact: {
      id: "Rasa malu adalah bagian normal dari perkembangan emosi anak.",
      en: "Shyness is a normal part of a child's emotional development.",
    },
  },
  {
    slug: "baby-mo-tepuk",
    emoji: "🙌",
    baseFile: "baby-mo-pose-31.png",
    oddFile: "baby-mo-pose-37.png",
    title: { id: "Baby Mo Ceria", en: "Happy Baby Mo" },
    blurb: {
      id: "Semua tersenyum ceria — mana yang sedang sedih?",
      en: "Everyone's smiling happily — which one is sad?",
    },
    intro: {
      id: "Baby Mo tersenyum ceria sepanjang hari. Namun satu Baby Mo sedang murung dan sedih. Temukan Baby Mo yang berbeda itu, lalu beri dia pelukan!",
      en: "Baby Mo smiles happily all day. But one Baby Mo is gloomy and sad. Find that different Baby Mo, then give it a hug!",
    },
    funFact: {
      id: "Mengenali teman yang sedih mengajarkan anak berempati.",
      en: "Noticing a sad friend teaches children empathy.",
    },
  },
  {
    slug: "baby-mo-mengedip",
    emoji: "😉",
    baseFile: "baby-mo-pose-05.png",
    oddFile: "baby-mo-pose-10.png",
    title: { id: "Baby Mo Mengedip", en: "Winking Baby Mo" },
    blurb: {
      id: "Tantangan jeli! Dua pose mengedip yang sangat mirip.",
      en: "A sharp-eye challenge! Two very similar winking poses.",
    },
    intro: {
      id: "Baby Mo mengedipkan mata dengan gaya. Tantangan ini sulit karena pose yang beda sangat mirip — perhatikan tangannya baik-baik!",
      en: "Baby Mo winks with style. This one is tricky because the odd pose looks almost identical — watch the hands closely!",
    },
    funFact: {
      id: "Permainan mencari perbedaan melatih ketelitian visual anak.",
      en: "Spot-the-difference games train a child's visual attention.",
    },
  },
  {
    slug: "baby-mo-keren",
    emoji: "🤙",
    baseFile: "baby-mo-alright.png",
    oddFile: "baby-mo-yes.png",
    title: { id: "Baby Mo Keren", en: "Cool Baby Mo" },
    blurb: {
      id: "Semua bergaya keren — temukan satu yang berseru 'Yes!'",
      en: "All looking cool — find the one shouting 'Yes!'",
    },
    intro: {
      id: "Baby Mo bergaya keren dan santai. Tapi satu Baby Mo terlalu bersemangat dan berseru 'Yes!'. Ayo cari yang berbeda!",
      en: "Baby Mo looks cool and relaxed. But one Baby Mo is too excited and shouts 'Yes!'. Find the different one!",
    },
    funFact: {
      id: "Meniru gaya adalah cara alami anak belajar berekspresi.",
      en: "Imitating styles is a natural way children learn to express themselves.",
    },
  },
];

export function getSpotOddPuzzle(slug: string): SpotOddPuzzle | undefined {
  return SPOT_ODD_PUZZLES.find((p) => p.slug === slug);
}

export function allSpotOddSlugs(): string[] {
  return SPOT_ODD_PUZZLES.map((p) => p.slug);
}
