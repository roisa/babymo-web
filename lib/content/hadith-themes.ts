import type { Locale } from "@/lib/i18n/config";
import { getAllHadith } from "@/lib/content/hadith";

/**
 * Bilingual labels for hadith theme tags + helpers. Shared by the
 * /hadith/tema index hub and the /hadith/tema/[theme] pages.
 */
export const HADITH_THEME_LABEL: Record<Locale, Record<string, string>> = {
  id: {
    adab: "Adab",
    akhlak: "Akhlak",
    amanat: "Amanat",
    "amal-jariyah": "Amal Jariyah",
    "anak-perempuan": "Anak Perempuan",
    "anak-shalih": "Anak Shalih",
    "anak-yatim": "Anak Yatim",
    bermain: "Bermain",
    berbakti: "Berbakti",
    doa: "Doa",
    ibu: "Ibu",
    "kasih-sayang": "Kasih Sayang",
    kelembutan: "Kelembutan",
    keluarga: "Keluarga",
    kemuliaan: "Kemuliaan",
    keadilan: "Keadilan",
    kehadiran: "Kehadiran",
    "lisan-orangtua": "Lisan Orang Tua",
    nafkah: "Nafkah",
    "pilih-kasih": "Pilih Kasih",
    rezeki: "Rezeki",
    saudara: "Saudara",
    sholat: "Sholat",
    silaturahmi: "Silaturahmi",
    "suami-istri": "Suami Istri",
    "tanggung-jawab": "Tanggung Jawab",
    tarbiyah: "Tarbiyah",
    tetangga: "Tetangga",
    "tujuh-tahun": "Usia Tujuh Tahun",
    warisan: "Warisan",
  },
  en: {
    adab: "Manners",
    akhlak: "Character",
    amanat: "Trust",
    "amal-jariyah": "Ongoing Charity",
    "anak-perempuan": "Daughters",
    "anak-shalih": "Righteous Child",
    "anak-yatim": "Orphans",
    bermain: "Play",
    berbakti: "Honoring Parents",
    doa: "Dua",
    ibu: "Mother",
    "kasih-sayang": "Mercy & Affection",
    kelembutan: "Gentleness",
    keluarga: "Family",
    kemuliaan: "Honor",
    keadilan: "Justice",
    kehadiran: "Presence",
    "lisan-orangtua": "Parents' Tongue",
    nafkah: "Provision",
    "pilih-kasih": "Favoritism",
    rezeki: "Provision",
    saudara: "Siblings",
    sholat: "Prayer",
    silaturahmi: "Kinship Ties",
    "suami-istri": "Spouse",
    "tanggung-jawab": "Responsibility",
    tarbiyah: "Upbringing",
    tetangga: "Neighbors",
    "tujuh-tahun": "Age Seven",
    warisan: "Legacy",
  },
};

export function hadithThemeLabel(locale: Locale, theme: string): string {
  return HADITH_THEME_LABEL[locale][theme] ?? theme;
}

/** All hadith theme tags with counts, biggest first. */
export function getHadithThemes(): { theme: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const h of getAllHadith())
    for (const t of h.themes) counts.set(t, (counts.get(t) ?? 0) + 1);
  return Array.from(counts, ([theme, count]) => ({ theme, count })).sort(
    (a, b) => b.count - a.count || a.theme.localeCompare(b.theme),
  );
}

export function getHadithThemeTags(): string[] {
  return getHadithThemes().map((t) => t.theme);
}
