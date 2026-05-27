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
    path: "/privasi",
    title: dict.pages.privacy.title,
    description: dict.pages.privacy.description,
  });
}

const BODY = {
  id: `<p>Baby Mo menghormati privasi setiap pengunjung — terutama anak-anak. Kebijakan ini menjelaskan informasi apa yang kami kumpulkan, bagaimana digunakan, dan hak Anda atas data.</p>

<h2>Data yang dikumpulkan</h2>
<p>Kami hanya mengumpulkan data analitik agregat untuk memahami penggunaan situs (halaman yang dilihat, perangkat, lokasi negara). Data ini tidak mengidentifikasi pengguna secara pribadi.</p>

<h2>Anak-anak</h2>
<p>Baby Mo tidak meminta atau menyimpan data pribadi anak. Tidak ada pendaftaran, tidak ada cookie pelacak iklan di halaman anak.</p>

<h2>Pihak ketiga</h2>
<p>Kami menggunakan font dari Google Fonts (dihosting sendiri sejak Mei 2026) dan dapat menggunakan layanan analitik privacy-friendly. Tidak ada iklan dari jaringan iklan.</p>

<h2>Hak Anda</h2>
<p>Sesuai UU Perlindungan Data Pribadi (UU PDP), Anda berhak meminta penghapusan data apapun yang terkait dengan Anda. Hubungi <a href="mailto:hello@babymo.id">hello@babymo.id</a>.</p>

<h2>Perubahan kebijakan</h2>
<p>Kebijakan ini dapat diperbarui. Versi saat ini berlaku sejak 27 Mei 2026.</p>`,
  en: `<p>Baby Mo respects every visitor's privacy — especially children's. This policy describes what information we collect, how it is used, and your rights over your data.</p>

<h2>Data we collect</h2>
<p>We only collect aggregated analytics to understand site usage (pages viewed, device, country). This data does not identify users personally.</p>

<h2>Children</h2>
<p>Baby Mo does not request or store children's personal data. There is no sign-up, and no advertising tracking cookies on child-facing pages.</p>

<h2>Third parties</h2>
<p>We use fonts from Google Fonts (self-hosted since May 2026) and may use privacy-friendly analytics. No advertising networks.</p>

<h2>Your rights</h2>
<p>Under Indonesia's Personal Data Protection Law, you may request deletion of any data tied to you. Email <a href="mailto:hello@babymo.id">hello@babymo.id</a>.</p>

<h2>Changes</h2>
<p>This policy may be updated. The current version is effective from 27 May 2026.</p>`,
} as const;

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);

  return (
    <>
      <Header locale={l} currentPath="/privasi" />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{dict.pages.privacy.title}</span>
        </nav>
        <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {dict.pages.privacy.title}
        </h1>
        <article
          className="prose mt-8"
          dangerouslySetInnerHTML={{ __html: BODY[l] }}
        />
      </main>
      <Footer locale={l} currentPath="/privasi" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.pages.privacy.title, path: "/privasi" },
          ])
        )}
      />
    </>
  );
}
