import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { SavedShelf } from "@/components/SavedShelf";

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
  return buildMetadata({
    locale,
    path: "/tersimpan",
    title: locale === "id" ? "Tersimpan untukmu" : "Saved for you",
    description:
      locale === "id"
        ? "Doa, hadis, surat, dan catatan yang kamu simpan di Baby Mo — siap dibaca bersama si kecil kapan saja."
        : "Du'as, hadith, surahs, and notes you've saved on Baby Mo — ready to read with your little one anytime.",
  });
}

export default async function SavedPage({
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
      <Header locale={l} currentPath="/tersimpan" />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-28 pt-12 sm:px-7 sm:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <span className="text-ink">
            {l === "id" ? "Tersimpan" : "Saved"}
          </span>
        </nav>

        <header className="mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brave-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            {l === "id" ? "Koleksimu" : "Your collection"}
          </span>
          <h1 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px]">
            {l === "id" ? "Tersimpan untukmu" : "Saved for you"}
          </h1>
          <p className="mt-4 text-[16.5px] leading-[1.65] text-whisper">
            {l === "id"
              ? "Semua yang kamu simpan, tersimpan di perangkat ini — tanpa akun, tanpa login. Siap dibuka kapan saja, bahkan saat offline."
              : "Everything you save lives on this device — no account, no login. Ready whenever you need it, even offline."}
          </p>
        </header>

        <SavedShelf locale={l} context="page" />
      </main>

      <Footer locale={l} currentPath="/tersimpan" />
      <MobileNav locale={l} />
    </>
  );
}
