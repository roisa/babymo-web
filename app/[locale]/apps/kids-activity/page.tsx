import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type Locale,
  absoluteUrl,
  isLocale,
  locales,
  pathFor,
  siteUrl,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/seo/schemas";
import { ActivityGenerator } from "@/components/activity/ActivityGenerator";

const PATH = "/apps/kids-activity";

const CONTENT = {
  id: {
    title: "Generator Lembar Aktivitas Anak",
    metaTitle: "Generator Lembar Aktivitas Anak",
    metaDesc:
      "Lembar aktivitas anak siap cetak, gratis — labirin, mewarnai, menjiplak, mencocokkan, dan puzzle. Pilih tema & usia, buat, lalu cetak di rumah. Tanpa daftar.",
    crumb: "Aktivitas Anak",
    intro:
      "Buat lembar kerja anak yang siap cetak dalam hitungan detik. Pilih sebuah tema, tentukan rentang usia, lalu pilih satu atau lebih aktivitas — labirin, menjiplak, mewarnai, mencocokkan, atau puzzle. Semua berjalan di peramban, gratis, dan tanpa perlu mendaftar.",
    badges: ["Gratis", "Tanpa daftar", "Berjalan di peramban", "Unduh PDF & SVG"],
    howTitle: "Cara kerjanya",
    how: [
      ["Pilih tema & usia", "Delapan tema (Dinosaurus, Luar Angkasa, Hewan, Ramadan, dan lainnya) dengan tiga tingkat usia: 3–4, 5–6, dan 7–8."],
      ["Pilih aktivitas", "Centang satu atau lebih jenis aktivitas. Atur berapa lembar per aktivitas (1–10)."],
      ["Buat & cetak", "Klik Buat, lalu unduh paket sebagai PDF, simpan tiap lembar sebagai SVG, atau cetak langsung."],
    ],
    insideTitle: "Apa saja di dalamnya",
    inside: [
      ["🌀 Labirin", "Labirin acak dengan penanda mulai & selesai bertema."],
      ["✏️ Menjiplak", "Garis bantu tulisan tangan untuk melatih huruf dan kata."],
      ["🎨 Mewarnai", "Gambar garis siap warna, atau prompt menggambar bebas."],
      ["🔗 Mencocokkan", "Pasangkan gambar dengan gambar — atau dengan kata untuk usia 7–8."],
      ["🧩 Puzzle", "Potong dan tempel: susun potongan bernomor ke dalam bingkai."],
    ],
    faqTitle: "Pertanyaan umum",
    faq: [
      { q: "Apakah generator ini gratis?", a: "Ya, sepenuhnya gratis. Tidak ada biaya, tidak ada akun, dan tidak ada batas jumlah lembar yang bisa Anda buat dan cetak." },
      { q: "Perlukah saya mendaftar atau masuk?", a: "Tidak. Semua berjalan langsung di peramban Anda. Tidak ada pendaftaran dan tidak ada data yang dikirim ke server." },
      { q: "Untuk usia berapa lembar ini cocok?", a: "Tersedia tiga tingkat: 3–4, 5–6, dan 7–8 tahun. Tingkat usia menyesuaikan tingkat kesulitan setiap aktivitas." },
      { q: "Bisakah saya mencetak atau menyimpan sebagai PDF?", a: "Bisa. Unduh seluruh paket sebagai satu PDF, simpan tiap lembar sebagai PDF atau SVG, atau gunakan tombol Cetak langsung dari peramban." },
      { q: "Apakah cocok untuk guru dan homeschooling?", a: "Sangat cocok. Buat banyak lembar sekaligus untuk seisi kelas, atau campur beberapa aktivitas menjadi satu paket latihan." },
    ],
  },
  en: {
    title: "Kids Activity Worksheet Generator",
    metaTitle: "Kids Activity Worksheet Generator",
    metaDesc:
      "Free printable kids worksheets — mazes, coloring, tracing, matching, and puzzles. Pick a theme and age, generate, and print at home. No sign-up.",
    crumb: "Kids Activity",
    intro:
      "Create printable kids worksheets in seconds. Pick a theme, choose an age range, then select one or more activities — mazes, tracing, coloring, matching, or puzzles. Everything runs in your browser, free, with no sign-up.",
    badges: ["Free", "No sign-up", "Runs in your browser", "PDF & SVG export"],
    howTitle: "How it works",
    how: [
      ["Pick a theme & age", "Eight themes (Dinosaurs, Space, Animals, Ramadan and more) across three age levels: 3–4, 5–6, and 7–8."],
      ["Choose activities", "Tick one or more activity types. Set how many sheets per activity (1–10)."],
      ["Generate & print", "Hit Generate, then download the pack as a PDF, save each sheet as SVG, or print directly."],
    ],
    insideTitle: "What's inside",
    inside: [
      ["🌀 Mazes", "Randomized mazes with themed start & finish markers."],
      ["✏️ Tracing", "Handwriting guide lines to practice letters and words."],
      ["🎨 Coloring", "Ready-to-color line art, or a free-draw prompt frame."],
      ["🔗 Matching", "Match picture to picture — or to the word for ages 7–8."],
      ["🧩 Puzzles", "Cut & paste: arrange numbered pieces into the frame."],
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Is this worksheet generator free?", a: "Yes, completely free. There's no cost, no account, and no limit on how many worksheets you can generate and print." },
      { q: "Do I need to sign up or log in?", a: "No. Everything runs right in your browser. There's no sign-up and no data is sent to a server." },
      { q: "What ages are the worksheets for?", a: "There are three levels: ages 3–4, 5–6, and 7–8. The age level adjusts the difficulty of each activity." },
      { q: "Can I print or save as PDF?", a: "Yes. Download the whole pack as a single PDF, save each sheet as PDF or SVG, or use the Print button straight from your browser." },
      { q: "Is it good for teachers and homeschooling?", a: "Absolutely. Generate many sheets at once for a class, or mix several activities into one practice pack." },
    ],
  },
} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = CONTENT[locale as Locale];
  return buildMetadata({
    locale: locale as Locale,
    path: PATH,
    title: c.metaTitle,
    description: c.metaDesc,
  });
}

export default async function KidsActivityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const c = CONTENT[l];

  const appSchema = {
    "@type": "WebApplication",
    name: c.metaTitle,
    description: c.metaDesc,
    url: absoluteUrl(l, PATH),
    applicationCategory: "EducationalApplication",
    operatingSystem: "Any (Web)",
    browserRequirements: "Requires JavaScript",
    inLanguage: l === "id" ? "id-ID" : "en",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": `${siteUrl}/#org` },
    audience: { "@type": "PeopleAudience", suggestedMinAge: 3, suggestedMaxAge: 8 },
  };

  return (
    <>
      <Header locale={l} currentPath="/apps/kids-activity" />
      <main id="main" className="mx-auto max-w-6xl px-5 pb-24 pt-6 sm:px-8 md:pb-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <Link href={pathFor(l, "/play")} className="hover:text-ink">
            {dict.nav.play ?? "Play"}
          </Link>{" "}
          / <span className="text-ink">{c.crumb}</span>
        </nav>

        {/* Hero / intro (server-rendered for SEO) */}
        <header className="mb-8 max-w-3xl">
          <h1 className="tracking-display font-serif text-3xl font-medium text-ink sm:text-4xl">
            {c.title}
          </h1>
          <p className="mt-3 text-[15.5px] leading-relaxed text-whisper">{c.intro}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {c.badges.map((b) => (
              <li
                key={b}
                className="rounded-full bg-sage-soft px-3 py-1 text-[12px] font-semibold text-sage-deep"
              >
                {b}
              </li>
            ))}
          </ul>
        </header>

        {/* The tool */}
        <ActivityGenerator locale={l} />

        {/* How it works */}
        <section className="mt-16 border-t border-hairline pt-12">
          <h2 className="font-serif text-2xl font-medium text-ink">{c.howTitle}</h2>
          <ol className="mt-6 grid gap-5 sm:grid-cols-3">
            {c.how.map(([title, body], i) => (
              <li key={title} className="rounded-[20px] border border-hairline bg-paper p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brave-soft text-[14px] font-bold text-brave-deep">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display text-[16px] font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-whisper">{body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* What's inside */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-medium text-ink">{c.insideTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.inside.map(([title, body]) => (
              <div key={title} className="rounded-[20px] border border-hairline bg-paper-2 p-5">
                <h3 className="font-display text-[15.5px] font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-[13.5px] leading-relaxed text-whisper">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-medium text-ink">{c.faqTitle}</h2>
          <div className="mt-6 divide-y divide-hairline rounded-[20px] border border-hairline bg-paper">
            {c.faq.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="cursor-pointer list-none font-display text-[15.5px] font-semibold text-ink marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-2 text-[14px] leading-relaxed text-whisper">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer locale={l} currentPath="/apps/kids-activity" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.play ?? "Play", path: "/play" },
            { name: c.crumb, path: PATH },
          ]),
          appSchema,
          faqSchema(c.faq.map((f) => ({ q: f.q, a: f.a })))
        )}
      />
    </>
  );
}
