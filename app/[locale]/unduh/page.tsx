import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, asset, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";
import { getAllDoa } from "@/lib/content/doa";

const LOCKSCREEN_SLUGS = [
  "sebelum-tidur",
  "bangun-tidur",
  "sebelum-makan",
  "sesudah-makan",
  "doa-pagi",
  "doa-petang",
  "perlindungan-anak",
  "doa-untuk-orang-tua",
];

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
    path: "/unduh",
    title:
      locale === "id"
        ? "Wallpaper Lockscreen Doa Harian"
        : "Daily Du'a Lockscreen Wallpapers",
    description:
      locale === "id"
        ? "Unduh wallpaper lockscreen iPhone berisi doa harian — gratis, cetak biru cream + sage Baby Mo."
        : "Download iPhone lockscreen wallpapers with daily du'as — free, in Baby Mo's cream + sage palette.",
  });
}

export default async function DownloadsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const doaMap = new Map(getAllDoa().map((d) => [d.slug, d]));

  const items = LOCKSCREEN_SLUGS.map((slug) => {
    const doa = doaMap.get(slug);
    if (!doa) return null;
    return {
      slug,
      title: doa.title[l],
      source: doa.source.reference,
      previewSrc: asset(`/lockscreens/${slug}.jpg`),
      downloadHref: asset(`/lockscreens/${slug}.jpg`),
      doaHref: pathFor(l, `/doa/${slug}`),
    };
  }).filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <Header locale={l} currentPath="/unduh" />
      <main id="main" className="mx-auto max-w-5xl px-5 pb-28 pt-12 sm:px-7 sm:pt-16 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-[12px] text-whisper">
          <Link href={pathFor(l)} className="hover:text-ink">
            {dict.nav.home}
          </Link>{" "}
          /{" "}
          <span className="text-ink">
            {l === "id" ? "Unduh" : "Downloads"}
          </span>
        </nav>

        <header className="mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brave-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brave-deep">
            {l === "id" ? "Gratis · Untuk Dibagikan" : "Free · Shareable"}
          </span>
          <h1 className="font-display mt-4 text-[40px] font-medium leading-[1.05] text-ink sm:text-[52px]">
            {l === "id"
              ? "Wallpaper doa untuk lockscreen"
              : "Du'a wallpapers for your lockscreen"}
          </h1>
          <p className="mt-4 text-[16.5px] leading-[1.65] text-whisper">
            {l === "id"
              ? "8 wallpaper lockscreen iPhone (1170×2532) berisi doa harian dalam Arab + arti — supaya yang pertama dilihat tiap kali buka HP adalah pengingat lembut. Gratis untuk diunduh, dipakai, dan dibagikan."
              : "8 iPhone lockscreen wallpapers (1170×2532) with daily du'as in Arabic + translation — so the first thing you see each time you unlock your phone is a gentle reminder. Free to download, use, and share."}
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article
              key={it.slug}
              className="group flex flex-col gap-3 overflow-hidden rounded-[20px] border border-hairline bg-paper p-3"
            >
              <Link href={it.doaHref} className="block">
                {/* iPhone-ish frame around the preview */}
                <div className="relative overflow-hidden rounded-[14px] bg-paper-2">
                  <img
                    src={it.previewSrc}
                    alt={it.title}
                    width={1170}
                    height={2532}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full transition group-hover:scale-[1.02]"
                  />
                </div>
              </Link>
              <div className="px-2 pt-1">
                <h2 className="font-serif text-[15px] font-medium leading-snug text-ink">
                  {it.title}
                </h2>
                <p className="mt-1 truncate text-[11.5px] text-whisper">
                  {it.source}
                </p>
              </div>
              <a
                href={it.downloadHref}
                download={`baby-mo-${it.slug}.jpg`}
                className="tap mx-1 inline-flex items-center justify-center gap-2 rounded-full bg-brave px-4 py-2.5 text-[13px] font-semibold text-paper hover:bg-brave-deep"
              >
                <DownloadIcon />
                {l === "id" ? "Unduh" : "Download"}
              </a>
            </article>
          ))}
        </div>

        <section className="mt-14 grid gap-4 rounded-[22px] border border-hairline bg-paper-2 p-6 sm:p-8">
          <h2 className="font-serif text-[20px] font-medium text-ink">
            {l === "id" ? "Cara pasang di iPhone" : "How to set on iPhone"}
          </h2>
          <ol className="space-y-2 text-[14.5px] leading-[1.65] text-ink">
            <li>
              <span className="font-semibold">1.</span>{" "}
              {l === "id"
                ? "Ketuk tombol Unduh — gambar tersimpan ke Foto."
                : "Tap Download — the image saves to Photos."}
            </li>
            <li>
              <span className="font-semibold">2.</span>{" "}
              {l === "id"
                ? "Buka Pengaturan → Wallpaper → Tambah Wallpaper Baru → Foto."
                : "Open Settings → Wallpaper → Add New Wallpaper → Photos."}
            </li>
            <li>
              <span className="font-semibold">3.</span>{" "}
              {l === "id"
                ? "Pilih wallpaper yang baru diunduh. Atur sebagai lockscreen."
                : "Choose the wallpaper you just downloaded. Set as lockscreen."}
            </li>
          </ol>
          <p className="text-[13px] text-whisper">
            {l === "id"
              ? "Android: simpan gambar, lalu buka Pengaturan → Wallpaper → Galeri."
              : "Android: save the image, then Settings → Wallpaper → Gallery."}
          </p>
        </section>

        <p className="mt-10 rounded-[18px] border border-hairline bg-paper px-5 py-4 text-[12.5px] leading-relaxed text-whisper">
          {l === "id"
            ? "Wallpaper ini hadiah dari Tim Baby Mo. Bebas dibagikan ke siapa saja, dipasang di HP teman atau saudara, atau dicetak. Tidak untuk dijual ulang. Mohon doanya agar Tim Baby Mo bisa terus berkarya untuk keluarga muslim Indonesia."
            : "These wallpapers are a gift from the Baby Mo team. Free to share with anyone, install on friends' or family's phones, or print. Not for resale. Please remember the Baby Mo team in your du'as — that we may keep building for Muslim families everywhere."}
        </p>
      </main>

      <Footer locale={l} currentPath="/unduh" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: l === "id" ? "Unduh" : "Downloads", path: "/unduh" },
          ]),
        )}
      />
    </>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 4v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  );
}
