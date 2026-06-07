import type { Locale } from "@/lib/i18n/config";

/**
 * Shared state for the hero mascot so the speech bubble (MascotGreeting)
 * and the rotating figure (MascotPoses) stay in sync — the words always
 * match the pose. MascotPoses is the driver (owns the timer + pose
 * crossfade) and publishes the current index here; MascotGreeting follows
 * and renders the matching line. A plain module singleton is fine: both
 * mount exactly once on the homepage.
 */

export type MascotLine = { pose: string; text: Record<Locale, string> };

// Each pose paired with words that fit it. Expressive named poses get a
// reaction; neutral standing poses get a warm greeting / gentle nudge.
export const MASCOT_LINES: MascotLine[] = [
  { pose: "baby-mo-pose-01", text: { id: "Assalamu'alaikum! 👋", en: "Assalamu'alaikum! 👋" } },
  { pose: "baby-mo-idea", text: { id: "Aku punya ide seru! 💡", en: "I've got a fun idea! 💡" } },
  { pose: "baby-mo-pose-09", text: { id: "Yuk baca doa hari ini 🤲", en: "Let's read today's du'a 🤲" } },
  { pose: "baby-mo-wow", text: { id: "Wow… MasyaAllah! 😮", en: "Wow… MashaAllah! 😮" } },
  { pose: "baby-mo-pose-05", text: { id: "Bismillah dulu, ya! 😊", en: "Say Bismillah first! 😊" } },
  { pose: "baby-mo-yeyy", text: { id: "Yeay! Kita hebat! 🎉", en: "Yay! We did it! 🎉" } },
  { pose: "baby-mo-pose-08", text: { id: "Sudah sholat belum? 🕌", en: "Have you prayed yet? 🕌" } },
  { pose: "baby-mo-yes", text: { id: "Bisa, dong! 👍", en: "We can do it! 👍" } },
  { pose: "baby-mo-pose-30", text: { id: "Hari yang berkah ✨", en: "A blessed day ✨" } },
  { pose: "baby-mo-ok", text: { id: "Siap belajar! 👌", en: "Ready to learn! 👌" } },
  { pose: "baby-mo-pose-15", text: { id: "Yuk main sambil belajar! 🧩", en: "Let's play and learn! 🧩" } },
  { pose: "baby-mo-alright", text: { id: "Semangat, ya! 💪", en: "You've got this! 💪" } },
  { pose: "baby-mo-pose-19", text: { id: "Sayang Allah, sayang keluarga ❤️", en: "Love Allah, love family ❤️" } },
  { pose: "baby-mo-pose-22", text: { id: "Jangan lupa senyum! 😄", en: "Don't forget to smile! 😄" } },
  { pose: "baby-mo-pose-26", text: { id: "Ayo hafal surat pendek 📖", en: "Let's memorize a short surah 📖" } },
  { pose: "baby-mo-pose-33", text: { id: "Alhamdulillah hari ini! 🌟", en: "Alhamdulillah for today! 🌟" } },
];

let current = -1;
const listeners = new Set<() => void>();

export function setMascotIndex(i: number) {
  current = i;
  listeners.forEach((l) => l());
}

export function getMascotIndex() {
  return current;
}

export function subscribeMascot(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}
