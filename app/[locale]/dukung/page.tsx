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
import { SupportCard } from "@/components/SupportCard";
import { getEnabledSupportMethods } from "@/lib/support";

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
    path: "/dukung",
    title: dict.pages.support.title,
    description: dict.pages.support.description,
  });
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const methods = getEnabledSupportMethods();

  return (
    <>
      <Header locale={l} currentPath="/dukung" />
      <main
        id="main"
        className="mx-auto max-w-4xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-16"
      >
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          / <span className="text-ink">{dict.nav.support}</span>
        </nav>

        <header className="max-w-2xl">
          <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {dict.pages.support.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-whisper">
            {dict.pages.support.description}
          </p>
        </header>

        {/* Sadaqah jariyah framing — the hadith that anchors the ask */}
        <figure className="mt-8 rounded-[22px] border border-clay/30 bg-clay-soft/60 p-6 sm:p-8">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl leading-loose text-ink sm:text-[28px]"
          >
            إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ
            ثَلَاثٍ
          </p>
          <figcaption className="mt-4 text-[14.5px] leading-relaxed text-whisper">
            {l === "id"
              ? "“Apabila manusia meninggal, terputuslah amalnya kecuali tiga: sedekah jariyah, ilmu yang bermanfaat, dan anak saleh yang mendoakannya.”"
              : "“When a person dies, their deeds end except for three: an ongoing charity, beneficial knowledge, and a righteous child who prays for them.”"}
            <span className="mt-1 block text-[12.5px] text-whisper/80">
              HR. Muslim
            </span>
          </figcaption>
        </figure>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {methods.map((m) => (
            <li key={m.id}>
              <SupportCard method={m} locale={l} />
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-[13.5px] leading-relaxed text-whisper">
          {l === "id"
            ? "Baby Mo tidak memungut biaya, tidak memasang iklan untuk anak, dan tidak mengunci permainan. Dukunganmu murni membantu biaya pengembangan agar semuanya tetap gratis. Jazākumullāhu khairan. 💚"
            : "Baby Mo charges nothing, runs no ads aimed at children, and locks no games. Your support purely covers development so everything stays free. Jazākumullāhu khairan. 💚"}
        </p>
      </main>
      <Footer locale={l} currentPath="/dukung" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.support, path: "/dukung" },
          ])
        )}
      />
    </>
  );
}
