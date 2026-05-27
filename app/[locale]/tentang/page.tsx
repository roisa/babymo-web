import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/tentang",
    title: dict.pages.about.title,
    description: dict.pages.about.description,
  });
}

const COPY = {
  id: {
    h1: "Tentang Baby Mo",
    intro:
      "Baby Mo adalah platform parenting islami untuk keluarga muslim Indonesia. Kami menggabungkan doa harian, hadith, panduan parenting berbasis sumber yang shahih, dan permainan edukatif untuk anak usia 2–8 tahun.",
    sections: [
      {
        title: "Mengapa Baby Mo ada",
        body: "Orang tua muslim modern sering kesulitan menemukan konten yang ramah anak, bersumber jelas, dan tetap menyenangkan. Baby Mo menjawab kebutuhan itu dengan kurasi yang teliti dan desain yang tenang untuk dibaca.",
      },
      {
        title: "Editorial standards",
        body: "Setiap doa dan hadith ditelusuri sumbernya. Kami menyertakan tingkat keshahihan (sahih, hasan), referensi, serta konteks penggunaan. Sebelum konten naik tayang publik, naskah ditinjau oleh asatidz mitra kami.",
      },
      {
        title: "Komitmen anak-aman",
        body: "Tidak ada iklan eksternal di halaman yang dirancang untuk anak. Tidak ada pengumpulan data anak. Tidak ada tautan keluar berisiko. Kebijakan ini melebihi standar COPPA dan UU Perlindungan Data Pribadi Indonesia.",
      },
    ],
    sourcesTitle: "Sumber & Metodologi",
    sourcesBody:
      "Doa diambil dari kumpulan hadith shahih (Bukhari, Muslim, Abu Dawud, Tirmidzi) serta Al-Qur'an. Kami menggunakan terjemahan yang diakui luas, dan terus memperbarui konten seiring masukan dari pembaca dan reviewer.",
    contactLine: "Pertanyaan, koreksi, atau usulan?",
    contactCta: "Hubungi tim kami",
  },
  en: {
    h1: "About Baby Mo",
    intro:
      "Baby Mo is an Islamic parenting platform for Muslim families. We combine daily duas, hadith, source-grounded parenting guidance, and educational games for children aged 2–8.",
    sections: [
      {
        title: "Why Baby Mo exists",
        body: "Modern Muslim parents often struggle to find content that is child-friendly, well-sourced, and still joyful. Baby Mo addresses that with careful curation and a calm reading design.",
      },
      {
        title: "Editorial standards",
        body: "Every dua and hadith is traced to its source. We label authenticity grade (sahih, hasan), reference, and use context. Drafts are reviewed by partner asatidz before going live.",
      },
      {
        title: "Child-safe commitment",
        body: "No third-party ads on kid-facing pages. No child data collection. No risky outbound links. This policy exceeds COPPA and Indonesia's Personal Data Protection Law.",
      },
    ],
    sourcesTitle: "Sources & Methodology",
    sourcesBody:
      "Duas come from established hadith collections (Bukhari, Muslim, Abu Dawud, Tirmidzi) and the Qur'an. We use widely accepted translations and continuously refine content based on reader and reviewer feedback.",
    contactLine: "Questions, corrections, or suggestions?",
    contactCta: "Reach our team",
  },
} as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const c = COPY[l];

  return (
    <>
      <Header locale={l} currentPath="/tentang" />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{dict.pages.about.title}</span>
        </nav>
        <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {c.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-whisper">{c.intro}</p>

        <div className="mt-12 space-y-10">
          {c.sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-serif text-xl font-semibold text-ink">
                {s.title}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-whisper">
                {s.body}
              </p>
            </section>
          ))}

          <section className="rounded-2xl border border-mist bg-clay-soft/60 p-6">
            <h2 className="font-serif text-xl font-semibold text-ink">
              {c.sourcesTitle}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-whisper">
              {c.sourcesBody}
            </p>
          </section>

          <section>
            <p className="text-base text-whisper">{c.contactLine}</p>
            <Link
              href={pathFor(l, "/kontak")}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-sage-deep"
            >
              {c.contactCta} →
            </Link>
          </section>
        </div>
      </main>
      <Footer locale={l} currentPath="/tentang" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.pages.about.title, path: "/tentang" },
          ])
        )}
      />
    </>
  );
}
