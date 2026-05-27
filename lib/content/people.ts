import type { Person } from "./types";

/**
 * People who author or review Baby Mo content.
 *
 * - `team` = staff / editors who draft content
 * - `reviewer` = qualified ustadz / scholars who verify religious accuracy
 *   before content goes public
 * - `founder` = founding members
 *
 * Reviewer slots are intentionally pre-allocated with `slug: "reviewer-1"` etc.
 * so the schema and bylines can ship immediately. Each real ustadz that joins
 * just gets their entry filled in here, and every doa/hadith carrying their
 * slug in `reviewedBy:` instantly displays the correct byline.
 */
export const people: Person[] = [
  {
    slug: "tim-baby-mo",
    name: "Tim Baby Mo",
    role: "team",
    title: {
      id: "Tim Editorial Baby Mo",
      en: "Baby Mo Editorial Team",
    },
    bio: {
      id: "Tim editorial Baby Mo menyusun panduan parenting islami, doa harian, dan kurasi hadith dengan fokus pada akurasi sumber dan kenyamanan baca orang tua muslim.",
      en: "The Baby Mo editorial team curates Islamic parenting guidance, daily duas, and hadith with a focus on source accuracy and parent-friendly reading.",
    },
    credentials: [
      "Editorial team @ Baby Mo",
    ],
    socials: {
      youtube: "https://www.youtube.com/@babymo.official",
      instagram: "https://www.instagram.com/babymo.official",
      tiktok: "https://www.tiktok.com/@babymo.official",
      website: "https://babymo.id",
    },
  },
  {
    slug: "roisa",
    name: "Roisatul Azizah",
    role: "founder",
    title: {
      id: "Pendiri & Lead Editor",
      en: "Founder & Lead Editor",
    },
    bio: {
      id: "Pendiri Baby Mo. Berfokus pada produksi konten islami yang ramah anak — game, animasi, dan panduan parenting untuk keluarga muslim Indonesia.",
      en: "Founder of Baby Mo. Focused on producing child-friendly Islamic content — games, animation, and parenting guides for Indonesian Muslim families.",
    },
    credentials: ["Founder @ Baby Mo"],
    socials: {
      instagram: "https://www.instagram.com/babymo.official",
    },
  },
];

export function getAllPeople(): Person[] {
  return people;
}

export function getPersonBySlug(slug: string | undefined): Person | undefined {
  if (!slug) return undefined;
  return people.find((p) => p.slug === slug);
}

export function getAuthor(slug: string | undefined): Person {
  return getPersonBySlug(slug) ?? people[0]!; // tim-baby-mo fallback
}
