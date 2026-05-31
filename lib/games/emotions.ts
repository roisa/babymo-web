/**
 * "Tebak Perasaan Baby Mo" / "Guess Baby Mo's Feeling".
 *
 * A pose is shown; the player picks the matching emotion from four options.
 * Doubles as an emotional-literacy tool for ages 2–8. Each pose→emotion pair
 * is verified against the actual artwork.
 *
 * The quiz runs through a fixed list of rounds, scoring as it goes; the page
 * itself is a single rich, indexable URL. We also expose the full emotion
 * catalogue so the hub page can render an "emotion dictionary" of Baby Mo
 * faces — extra indexable, on-brand content.
 */

import type { Bilingual } from "@/lib/games/poses";

export interface Emotion {
  key: string;
  emoji: string;
  label: Bilingual;
  /** One verified pose that clearly shows this emotion. */
  poseFile: string;
  /** Short kid-friendly description for the emotion dictionary. */
  note: Bilingual;
}

// Each entry is checked against the real render in /public/baby-mo-poses.
export const EMOTIONS: Emotion[] = [
  {
    key: "senang",
    emoji: "😄",
    label: { id: "Senang", en: "Happy" },
    poseFile: "baby-mo-yeyy.png",
    note: {
      id: "Baby Mo melompat dengan tangan terbuka karena sangat senang.",
      en: "Baby Mo jumps with open arms because it feels so happy.",
    },
  },
  {
    key: "takjub",
    emoji: "😮",
    label: { id: "Takjub", en: "Amazed" },
    poseFile: "baby-mo-wow.png",
    note: {
      id: "Mata membulat dan tangan di pipi — Baby Mo sedang takjub.",
      en: "Wide eyes and hands on cheeks — Baby Mo is amazed.",
    },
  },
  {
    key: "bersemangat",
    emoji: "✊",
    label: { id: "Bersemangat", en: "Excited" },
    poseFile: "baby-mo-yes.png",
    note: {
      id: "Tangan terkepal ke atas, Baby Mo penuh semangat berseru 'Yes!'",
      en: "Fist raised high, Baby Mo cheers 'Yes!' full of spirit.",
    },
  },
  {
    key: "bersyukur",
    emoji: "🙏",
    label: { id: "Bersyukur", en: "Grateful" },
    poseFile: "baby-mo-thank-you.png",
    note: {
      id: "Kedua tangan dirapatkan, Baby Mo berterima kasih dengan tulus.",
      en: "Hands pressed together, Baby Mo says thank you sincerely.",
    },
  },
  {
    key: "berpikir",
    emoji: "🤔",
    label: { id: "Berpikir", en: "Thinking" },
    poseFile: "baby-mo-pose-20.png",
    note: {
      id: "Jari di dagu, Baby Mo sedang memikirkan sesuatu.",
      en: "Finger on chin, Baby Mo is thinking about something.",
    },
  },
  {
    key: "sedih",
    emoji: "😢",
    label: { id: "Sedih", en: "Sad" },
    poseFile: "baby-mo-pose-37.png",
    note: {
      id: "Kepala tertunduk dan murung — Baby Mo sedang sedih.",
      en: "Head down and gloomy — Baby Mo is feeling sad.",
    },
  },
  {
    key: "kesal",
    emoji: "😣",
    label: { id: "Kesal", en: "Grumpy" },
    poseFile: "baby-mo-pose-30.png",
    note: {
      id: "Pipi menggembung dan tangan mengepal, Baby Mo sedang kesal.",
      en: "Puffed cheeks and clenched hands, Baby Mo is grumpy.",
    },
  },
  {
    key: "malu",
    emoji: "🙈",
    label: { id: "Malu", en: "Shy" },
    poseFile: "baby-mo-pose-06.png",
    note: {
      id: "Tersipu sambil menutup pipi, Baby Mo merasa malu-malu.",
      en: "Blushing with hands on cheeks, Baby Mo feels shy.",
    },
  },
  {
    key: "punya-ide",
    emoji: "💡",
    label: { id: "Punya Ide", en: "Has an Idea" },
    poseFile: "baby-mo-idea.png",
    note: {
      id: "Satu jari terangkat — Baby Mo baru saja punya ide!",
      en: "One finger up — Baby Mo just had an idea!",
    },
  },
  {
    key: "ceria",
    emoji: "😊",
    label: { id: "Riang", en: "Cheerful" },
    poseFile: "baby-mo-pose-12.png",
    note: {
      id: "Tangan di pipi dengan senyum lebar, Baby Mo riang gembira.",
      en: "Hands on cheeks with a big smile, Baby Mo is cheerful.",
    },
  },
];

export interface EmotionRound {
  /** The pose shown for this round. */
  poseFile: string;
  /** The correct emotion key. */
  answer: string;
}

/** The fixed set of rounds the quiz plays through (order shuffled client-side). */
export const EMOTION_ROUNDS: EmotionRound[] = EMOTIONS.map((e) => ({
  poseFile: e.poseFile,
  answer: e.key,
}));

export function getEmotion(key: string): Emotion | undefined {
  return EMOTIONS.find((e) => e.key === key);
}
