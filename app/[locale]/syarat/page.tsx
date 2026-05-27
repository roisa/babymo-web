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
    path: "/syarat",
    title: dict.pages.terms.title,
    description: dict.pages.terms.description,
  });
}

const BODY = {
  id: `<p>Dengan mengakses atau menggunakan situs Baby Mo, Anda menyetujui syarat berikut.</p>

<h2>Penggunaan konten</h2>
<p>Seluruh teks, gambar, dan permainan di situs ini dilindungi hak cipta. Konten boleh dibagikan untuk kebaikan dengan menyertakan kredit ke babymo.id.</p>

<h2>Sumber agama</h2>
<p>Kami berusaha menyajikan doa dan hadith yang shahih dengan sumber yang jelas. Namun, untuk masalah fiqih atau aqidah yang spesifik, mohon merujuk kepada ulama yang terpercaya.</p>

<h2>Tidak ada jaminan</h2>
<p>Situs disediakan "apa adanya". Kami tidak menjamin kebenaran mutlak dari setiap konten — silakan verifikasi independen jika diperlukan.</p>

<h2>Tautan eksternal</h2>
<p>Beberapa tautan mengarah ke situs/aplikasi pihak ketiga (YouTube, marketplace). Kami tidak bertanggung jawab atas konten di situs eksternal tersebut.</p>

<h2>Kontak</h2>
<p>Pertanyaan tentang syarat ini: <a href="mailto:hello@babymo.id">hello@babymo.id</a>.</p>`,
  en: `<p>By accessing or using the Baby Mo site, you agree to the following terms.</p>

<h2>Use of content</h2>
<p>All text, images, and games on this site are copyrighted. Content may be shared for good with credit to babymo.id.</p>

<h2>Religious sources</h2>
<p>We endeavor to present authentic duas and hadith with clear sources. However, for specific fiqh or aqidah questions, please refer to trusted scholars.</p>

<h2>No warranties</h2>
<p>The site is provided "as is". We make no warranty of absolute accuracy — verify independently when needed.</p>

<h2>External links</h2>
<p>Some links go to third-party sites/apps (YouTube, marketplaces). We are not responsible for content on external sites.</p>

<h2>Contact</h2>
<p>Questions about these terms: <a href="mailto:hello@babymo.id">hello@babymo.id</a>.</p>`,
} as const;

export default async function TermsPage({
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
      <Header locale={l} currentPath="/syarat" />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{dict.pages.terms.title}</span>
        </nav>
        <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {dict.pages.terms.title}
        </h1>
        <article
          className="prose mt-8"
          dangerouslySetInnerHTML={{ __html: BODY[l] }}
        />
      </main>
      <Footer locale={l} currentPath="/syarat" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.pages.terms.title, path: "/syarat" },
          ])
        )}
      />
    </>
  );
}
