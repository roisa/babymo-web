import type { Locale } from "@/lib/i18n/config";
import { getAllDoa } from "@/lib/content/doa";

/**
 * Bilingual labels + short descriptions for the doa category tags
 * (the `situations` field on each doa). Shared by the /doa/kategori
 * index hub and the /doa/kategori/[tag] pages.
 */
export const DOA_CATEGORY_LABEL: Record<Locale, Record<string, string>> = {
  id: {
    pagi: "Pagi",
    petang: "Petang",
    malam: "Malam",
    tidur: "Tidur",
    bangun: "Bangun Tidur",
    makan: "Makan",
    minum: "Minum",
    syukur: "Syukur",
    "kamar-mandi": "Kamar Mandi",
    wudhu: "Wudhu",
    sholat: "Sholat",
    adzan: "Adzan",
    masjid: "Masjid",
    perjalanan: "Perjalanan",
    kendaraan: "Kendaraan",
    rumah: "Rumah",
    perlindungan: "Perlindungan",
    orangtua: "Orang Tua",
    keluarga: "Keluarga",
    cuaca: "Cuaca",
    pakaian: "Pakaian",
    akhlak: "Akhlak",
    adab: "Adab",
    sosial: "Sosial",
    belajar: "Belajar",
    sekolah: "Sekolah",
    ibadah: "Ibadah",
    harian: "Sehari-hari",
    sakit: "Saat Sakit",
    emosi: "Perasaan",
    rezeki: "Rezeki",
    puasa: "Puasa",
    ramadan: "Ramadan",
    "bulan-hijriyah": "Bulan Hijriyah",
    umum: "Umum",
  },
  en: {
    pagi: "Morning",
    petang: "Evening",
    malam: "Night",
    tidur: "Sleep",
    bangun: "Waking Up",
    makan: "Eating",
    minum: "Drinking",
    syukur: "Gratitude",
    "kamar-mandi": "Bathroom",
    wudhu: "Wudu",
    sholat: "Prayer",
    adzan: "Adhan",
    masjid: "Mosque",
    perjalanan: "Travel",
    kendaraan: "Vehicle",
    rumah: "Home",
    perlindungan: "Protection",
    orangtua: "Parents",
    keluarga: "Family",
    cuaca: "Weather",
    pakaian: "Clothing",
    akhlak: "Character",
    adab: "Manners",
    sosial: "Social",
    belajar: "Study",
    sekolah: "School",
    ibadah: "Worship",
    harian: "Everyday",
    sakit: "When Ill",
    emosi: "Feelings",
    rezeki: "Provision",
    puasa: "Fasting",
    ramadan: "Ramadan",
    "bulan-hijriyah": "Hijri Month",
    umum: "General",
  },
};

export function doaCategoryLabel(locale: Locale, tag: string): string {
  return DOA_CATEGORY_LABEL[locale][tag] ?? tag;
}

/** All unique category tags across all doa, with counts, sorted by count desc. */
export function getDoaCategories(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const d of getAllDoa())
    for (const s of d.situations) counts.set(s, (counts.get(s) ?? 0) + 1);
  return Array.from(counts, ([tag, count]) => ({ tag, count })).sort(
    (a, b) => b.count - a.count || a.tag.localeCompare(b.tag),
  );
}

/** Just the tag slugs (for generateStaticParams). */
export function getDoaCategoryTags(): string[] {
  return getDoaCategories().map((c) => c.tag);
}
