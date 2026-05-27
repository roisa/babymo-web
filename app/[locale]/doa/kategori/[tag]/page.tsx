import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
  isLocale,
  locales,
  absoluteUrl,
  pathFor,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { DoaCard } from "@/components/DoaCard";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  graph,
  itemListSchema,
} from "@/lib/seo/schemas";
import { getAllDoa } from "@/lib/content/doa";

const CATEGORY_LABEL: Record<Locale, Record<string, string>> = {
  id: {
    pagi: "Pagi",
    malam: "Malam",
    tidur: "Tidur",
    bangun: "Bangun",
    makan: "Makan",
    minum: "Minum",
    syukur: "Syukur",
    "kamar-mandi": "Kamar Mandi",
    perjalanan: "Perjalanan",
    kendaraan: "Kendaraan",
    rumah: "Rumah",
    perlindungan: "Perlindungan",
    orangtua: "Orang Tua",
    cuaca: "Cuaca",
    sholat: "Sholat",
    adzan: "Adzan",
    pakaian: "Pakaian",
    akhlak: "Akhlak",
    sosial: "Sosial",
    belajar: "Belajar",
    sekolah: "Sekolah",
    wudhu: "Wudhu",
    petang: "Petang",
    puasa: "Puasa",
    ramadan: "Ramadan",
    "bulan-hijriyah": "Bulan Hijriyah",
    rezeki: "Rezeki",
    adab: "Adab",
  },
  en: {
    pagi: "Morning",
    malam: "Night",
    tidur: "Sleep",
    bangun: "Wake",
    makan: "Eating",
    minum: "Drinking",
    syukur: "Gratitude",
    "kamar-mandi": "Bathroom",
    perjalanan: "Travel",
    kendaraan: "Vehicle",
    rumah: "Home",
    perlindungan: "Protection",
    orangtua: "Parents",
    cuaca: "Weather",
    sholat: "Prayer",
    adzan: "Adhan",
    pakaian: "Clothing",
    akhlak: "Character",
    sosial: "Social",
    belajar: "Study",
    sekolah: "School",
    wudhu: "Wudu",
    petang: "Evening",
    puasa: "Fasting",
    ramadan: "Ramadan",
    "bulan-hijriyah": "Hijri Month",
    rezeki: "Provision",
    adab: "Manners",
  },
};

/** All unique tags across all doa, used to generate static category pages. */
function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const d of getAllDoa()) for (const s of d.situations) tags.add(s);
  return Array.from(tags).sort();
}

export async function generateStaticParams() {
  const out: { locale: string; tag: string }[] = [];
  for (const locale of locales)
    for (const tag of getAllTags()) out.push({ locale, tag });
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tag: string }>;
}) {
  const { locale, tag } = await params;
  if (!isLocale(locale)) return {};
  const label = CATEGORY_LABEL[locale][tag] ?? tag;
  const title =
    locale === "id"
      ? `Doa Kategori: ${label}`
      : `Duas — ${label}`;
  const description =
    locale === "id"
      ? `Kumpulan doa harian dalam kategori "${label}" — lengkap dengan teks Arab, transliterasi, terjemahan, dan sumber yang shahih untuk anak muslim.`
      : `A curated set of daily duas in the "${label}" category — with Arabic, transliteration, translation, and authentic sources for Muslim children.`;
  return buildMetadata({
    locale,
    path: `/doa/kategori/${tag}`,
    title,
    description,
  });
}

export default async function DoaKategoriPage({
  params,
}: {
  params: Promise<{ locale: string; tag: string }>;
}) {
  const { locale, tag } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const label = CATEGORY_LABEL[l][tag];
  const all = getAllDoa().filter((d) => d.situations.includes(tag));
  if (all.length === 0) notFound();

  const allTags = getAllTags();

  return (
    <>
      <Header locale={l} currentPath={`/doa/kategori/${tag}`} />
      <main id="main" className="mx-auto max-w-5xl px-5 pb-28 pt-10 sm:px-7 sm:pt-14 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/doa")} className="hover:text-ink">
            {dict.nav.doa}
          </Link>{" "}
          / <span className="text-ink">{label ?? tag}</span>
        </nav>
        <header className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-sage-deep">
            {l === "id" ? "Kategori" : "Category"}
          </p>
          <h1 className="tracking-display mt-2 font-serif text-[36px] font-medium leading-[1.1] text-ink sm:text-[44px]">
            {l === "id"
              ? `Doa Kategori: ${label ?? tag}`
              : `Duas: ${label ?? tag}`}
          </h1>
          <p className="mt-3 text-[15.5px] leading-relaxed text-whisper">
            {l === "id"
              ? `${all.length} doa dalam kategori ini. Bersumber dari hadith shahih dan Al-Qur'an, dengan teks Arab, transliterasi, dan terjemahan lengkap.`
              : `${all.length} duas in this category. Sourced from authentic hadith and the Qur'an, with Arabic, transliteration, and full translation.`}
          </p>
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {all.map((d) => (
            <DoaCard key={d.slug} doa={d} locale={l} />
          ))}
        </div>

        {/* Other categories chips */}
        <section className="mt-16 border-t border-hairline pt-10">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-whisper">
            {l === "id" ? "Kategori lain" : "Other categories"}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {allTags
              .filter((t) => t !== tag)
              .map((t) => (
                <Link
                  key={t}
                  href={pathFor(l, `/doa/kategori/${t}`)}
                  className="tap rounded-full border border-hairline bg-paper px-3.5 py-1.5 text-[13px] font-semibold text-ink-soft transition hover:border-sage/40"
                >
                  {CATEGORY_LABEL[l][t] ?? t}
                </Link>
              ))}
          </div>
        </section>
      </main>
      <Footer locale={l} currentPath={`/doa/kategori/${tag}`} />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.doa, path: "/doa" },
            { name: label ?? tag, path: `/doa/kategori/${tag}` },
          ]),
          itemListSchema(
            l,
            `${dict.nav.doa} — ${label ?? tag}`,
            all.map((d) => ({
              name: d.title[l],
              url: absoluteUrl(l, `/doa/${d.slug}`),
            })),
          ),
        )}
      />
    </>
  );
}
