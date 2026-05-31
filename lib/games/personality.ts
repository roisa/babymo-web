/**
 * "Baby Mo Kamu Hari Ini?" / "Which Baby Mo Are You?" — a short, shareable
 * personality quiz. Each archetype maps to an expressive (verified) pose and
 * gets its own static, social-friendly result page.
 */

import type { Bilingual } from "@/lib/games/poses";

export type ArchetypeKey =
  | "cerdas"
  | "ceria"
  | "energik"
  | "penyemangat"
  | "santai"
  | "penasaran"
  | "pemikir"
  | "penyayang";

export interface Archetype {
  key: ArchetypeKey;
  /** Verified pose file representing this archetype. */
  poseFile: string;
  emoji: string;
  title: Bilingual;
  tagline: Bilingual;
  description: Bilingual;
  strengths: Bilingual[];
}

// Order matters: earlier entries win score ties.
export const ARCHETYPES: Archetype[] = [
  {
    key: "ceria",
    poseFile: "baby-mo-yeyy.png",
    emoji: "🎉",
    title: { id: "Baby Mo Ceria", en: "Cheerful Baby Mo" },
    tagline: {
      id: "Tawamu menular ke semua orang!",
      en: "Your laughter is contagious!",
    },
    description: {
      id: "Kamu adalah Baby Mo yang penuh tawa dan kebahagiaan. Energi positifmu membuat suasana selalu hangat dan menyenangkan.",
      en: "You are the Baby Mo full of laughter and joy. Your positive energy keeps every room warm and fun.",
    },
    strengths: [
      { id: "Ramah", en: "Friendly" },
      { id: "Optimis", en: "Optimistic" },
      { id: "Menghibur", en: "Uplifting" },
    ],
  },
  {
    key: "energik",
    poseFile: "baby-mo-run.png",
    emoji: "🏃",
    title: { id: "Baby Mo Energik", en: "Energetic Baby Mo" },
    tagline: {
      id: "Selalu bergerak, selalu bersemangat!",
      en: "Always moving, always spirited!",
    },
    description: {
      id: "Kamu tidak bisa diam! Penuh energi, suka berlari dan bermain. Harimu seperti petualangan yang tak pernah berhenti.",
      en: "You can't sit still! Full of energy, you love to run and play. Your days are one non-stop adventure.",
    },
    strengths: [
      { id: "Aktif", en: "Active" },
      { id: "Berani", en: "Brave" },
      { id: "Bersemangat", en: "Spirited" },
    ],
  },
  {
    key: "cerdas",
    poseFile: "baby-mo-idea.png",
    emoji: "💡",
    title: { id: "Baby Mo Cerdas", en: "Bright Baby Mo" },
    tagline: {
      id: "Selalu punya ide cemerlang!",
      en: "Always full of bright ideas!",
    },
    description: {
      id: "Otakmu tak pernah berhenti bekerja. Kamu suka menemukan cara baru dan memecahkan masalah dengan ide-ide segar.",
      en: "Your mind never stops. You love finding new ways and solving problems with fresh ideas.",
    },
    strengths: [
      { id: "Kreatif", en: "Creative" },
      { id: "Cerdik", en: "Clever" },
      { id: "Ingin tahu", en: "Inquisitive" },
    ],
  },
  {
    key: "penasaran",
    poseFile: "baby-mo-wow.png",
    emoji: "😮",
    title: { id: "Baby Mo Penasaran", en: "Curious Baby Mo" },
    tagline: {
      id: "Dunia ini penuh hal menakjubkan!",
      en: "The world is full of amazing things!",
    },
    description: {
      id: "Segala hal membuatmu takjub. Rasa ingin tahumu besar dan kamu selalu siap menjelajah hal-hal baru.",
      en: "Everything amazes you. Your curiosity runs deep and you're always ready to explore something new.",
    },
    strengths: [
      { id: "Penasaran", en: "Curious" },
      { id: "Terbuka", en: "Open-minded" },
      { id: "Cepat belajar", en: "Quick learner" },
    ],
  },
  {
    key: "penyemangat",
    poseFile: "baby-mo-yes.png",
    emoji: "✊",
    title: { id: "Baby Mo Penyemangat", en: "Cheerleader Baby Mo" },
    tagline: {
      id: "Kamu membuat semua orang percaya diri!",
      en: "You make everyone believe in themselves!",
    },
    description: {
      id: "Kamu selalu menyemangati orang di sekitarmu. 'Yes, kamu bisa!' adalah kalimat favoritmu.",
      en: "You always cheer on the people around you. 'Yes, you can!' is your favourite phrase.",
    },
    strengths: [
      { id: "Suportif", en: "Supportive" },
      { id: "Positif", en: "Positive" },
      { id: "Memotivasi", en: "Motivating" },
    ],
  },
  {
    key: "pemikir",
    poseFile: "baby-mo-pose-20.png",
    emoji: "🤔",
    title: { id: "Baby Mo Pemikir", en: "Thinker Baby Mo" },
    tagline: {
      id: "Tenang, bijak, dan penuh pertimbangan.",
      en: "Calm, wise, and thoughtful.",
    },
    description: {
      id: "Kamu suka mengamati dan berpikir sebelum bertindak. Ketenanganmu membuat orang lain merasa nyaman.",
      en: "You like to observe and think before acting. Your calmness makes others feel at ease.",
    },
    strengths: [
      { id: "Bijak", en: "Wise" },
      { id: "Teliti", en: "Careful" },
      { id: "Tenang", en: "Calm" },
    ],
  },
  {
    key: "santai",
    poseFile: "baby-mo-ok.png",
    emoji: "👌",
    title: { id: "Baby Mo Santai", en: "Easygoing Baby Mo" },
    tagline: {
      id: "Semuanya oke, tidak ada yang perlu dikhawatirkan!",
      en: "Everything's okay, nothing to worry about!",
    },
    description: {
      id: "Kamu santai dan mudah bergaul. Tidak mudah panik, kamu selalu membawa ketenangan ke mana pun pergi.",
      en: "You're relaxed and easy to get along with. Rarely flustered, you bring calm wherever you go.",
    },
    strengths: [
      { id: "Santai", en: "Relaxed" },
      { id: "Sabar", en: "Patient" },
      { id: "Ramah", en: "Easygoing" },
    ],
  },
  {
    key: "penyayang",
    poseFile: "baby-mo-thank-you.png",
    emoji: "💖",
    title: { id: "Baby Mo Penyayang", en: "Loving Baby Mo" },
    tagline: {
      id: "Hatimu penuh syukur dan kasih sayang.",
      en: "Your heart is full of gratitude and love.",
    },
    description: {
      id: "Kamu lembut dan penuh rasa syukur. Kamu selalu menghargai orang lain dan membuat mereka merasa disayangi.",
      en: "You are gentle and grateful. You always appreciate others and make them feel loved.",
    },
    strengths: [
      { id: "Penyayang", en: "Loving" },
      { id: "Bersyukur", en: "Grateful" },
      { id: "Perhatian", en: "Caring" },
    ],
  },
];

export interface QuizOption {
  text: Bilingual;
  emoji: string;
  scores: ArchetypeKey[];
}

export interface QuizQuestion {
  id: number;
  question: Bilingual;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: {
      id: "Bagaimana Baby Mo memulai paginya?",
      en: "How does Baby Mo start the morning?",
    },
    options: [
      { emoji: "🎉", text: { id: "Langsung ceria dan tertawa", en: "Instantly cheerful and laughing" }, scores: ["ceria"] },
      { emoji: "🏃", text: { id: "Loncat penuh energi", en: "Jumps up full of energy" }, scores: ["energik"] },
      { emoji: "💡", text: { id: "Sudah punya rencana seru", en: "Already has a fun plan" }, scores: ["cerdas"] },
      { emoji: "👌", text: { id: "Santai dan tenang", en: "Calm and relaxed" }, scores: ["santai"] },
    ],
  },
  {
    id: 2,
    question: {
      id: "Saat melihat sesuatu yang baru, kamu...",
      en: "When you see something new, you...",
    },
    options: [
      { emoji: "😮", text: { id: "Takjub dan ingin tahu", en: "Are amazed and curious" }, scores: ["penasaran"] },
      { emoji: "🤔", text: { id: "Mengamati dulu baik-baik", en: "Observe it carefully first" }, scores: ["pemikir"] },
      { emoji: "💡", text: { id: "Langsung dapat ide", en: "Get an idea right away" }, scores: ["cerdas"] },
      { emoji: "🎉", text: { id: "Senang dan bersorak", en: "Get excited and cheer" }, scores: ["ceria"] },
    ],
  },
  {
    id: 3,
    question: {
      id: "Teman-teman menyukaimu karena...",
      en: "Friends love you because you...",
    },
    options: [
      { emoji: "✊", text: { id: "Selalu menyemangati mereka", en: "Always cheer them on" }, scores: ["penyemangat"] },
      { emoji: "💖", text: { id: "Penuh kasih sayang", en: "Are full of love" }, scores: ["penyayang"] },
      { emoji: "👌", text: { id: "Asyik dan santai diajak main", en: "Are fun and easygoing" }, scores: ["santai"] },
      { emoji: "🏃", text: { id: "Seru dan penuh energi", en: "Are exciting and energetic" }, scores: ["energik"] },
    ],
  },
  {
    id: 4,
    question: {
      id: "Cara kamu menyelesaikan masalah?",
      en: "How do you solve a problem?",
    },
    options: [
      { emoji: "💡", text: { id: "Cari ide kreatif", en: "Find a creative idea" }, scores: ["cerdas"] },
      { emoji: "🤔", text: { id: "Pikirkan matang-matang", en: "Think it through carefully" }, scores: ["pemikir"] },
      { emoji: "✊", text: { id: "Semangat sampai berhasil", en: "Push on until it works" }, scores: ["penyemangat"] },
      { emoji: "😮", text: { id: "Coba hal baru dengan penasaran", en: "Try new things curiously" }, scores: ["penasaran"] },
    ],
  },
  {
    id: 5,
    question: {
      id: "Akhir pekan yang sempurna buatmu?",
      en: "Your perfect weekend?",
    },
    options: [
      { emoji: "🏃", text: { id: "Main di luar sepuasnya", en: "Playing outside all day" }, scores: ["energik"] },
      { emoji: "💖", text: { id: "Berkumpul dengan keluarga", en: "Spending time with family" }, scores: ["penyayang"] },
      { emoji: "🎉", text: { id: "Pesta dan tertawa bersama", en: "A party full of laughter" }, scores: ["ceria"] },
      { emoji: "👌", text: { id: "Bersantai tanpa buru-buru", en: "Relaxing with no rush" }, scores: ["santai"] },
    ],
  },
  {
    id: 6,
    question: {
      id: "Hal yang paling kamu syukuri?",
      en: "What are you most grateful for?",
    },
    options: [
      { emoji: "💖", text: { id: "Orang-orang yang menyayangiku", en: "The people who love me" }, scores: ["penyayang"] },
      { emoji: "😮", text: { id: "Banyak hal seru untuk dijelajahi", en: "So many exciting things to explore" }, scores: ["penasaran"] },
      { emoji: "🤔", text: { id: "Bisa belajar hal baru", en: "Being able to learn new things" }, scores: ["pemikir"] },
      { emoji: "✊", text: { id: "Bisa membantu orang lain", en: "Being able to help others" }, scores: ["penyemangat"] },
    ],
  },
];

export function getArchetype(key: string): Archetype | undefined {
  return ARCHETYPES.find((a) => a.key === key);
}

export function allArchetypeKeys(): ArchetypeKey[] {
  return ARCHETYPES.map((a) => a.key);
}

/** Tally selected option scores and return the winning archetype. */
export function scoreAnswers(selected: ArchetypeKey[][]): Archetype {
  const tally = new Map<ArchetypeKey, number>();
  for (const keys of selected) {
    for (const key of keys) tally.set(key, (tally.get(key) ?? 0) + 1);
  }
  let best: Archetype = ARCHETYPES[0]!;
  let bestScore = -1;
  for (const a of ARCHETYPES) {
    const score = tally.get(a.key) ?? 0;
    if (score > bestScore) {
      best = a;
      bestScore = score;
    }
  }
  return best;
}
