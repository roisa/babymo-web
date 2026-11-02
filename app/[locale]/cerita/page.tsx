import Link from "next/link";
import { SectionHeader, SectionButton } from "@/components/SectionHeader";
import { notFound } from "next/navigation";
import { type Locale, absoluteUrl, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph, itemListSchema } from "@/lib/seo/schemas";
import { getAllCatatan } from "@/lib/content/catatan";
import { StoryScene } from "@/components/StoryScene";
import { poseForCatatan, sceneForCatatan } from "@/lib/cerita/scene";

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
    path: "/cerita",
    title: dict.catatan.indexTitle,
    description: dict.catatan.indexDescription,
    image: `https://babymo.id/og/cerita/${locale}/index.jpg`,
  });
}

export default async function CatatanIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const notes = getAllCatatan();
  const stories = notes.filter((n) => n.kind === "story");
  const parentNotes = notes.filter((n) => n.kind !== "story");

  return (
    <>
      <Header locale={l} currentPath="/cerita" />
      <main id="main" className="mx-auto max-w-6xl px-5 pb-28 pt-12 sm:px-7 sm:pt-16 md:pb-20">
        <SectionHeader
          locale={l}
          section="cerita"
          crumb={dict.nav.catatan}
          title={l === "id" ? "Yuk, baca cerita Baby Mo & Baby Ais!" : "Story time with Baby Mo & Baby Ais!"}
          sub={dict.catatan.intro}
        >
          <SectionButton href={pathFor(l, "/cerita/tema")}>
            {l === "id" ? "Jelajahi per tema" : "Browse by theme"} →
          </SectionButton>
        </SectionHeader>

        {/* ── Shelf 1: picture-book covers for kids ── */}
        <section className="sec-cerita" aria-labelledby="shelf-kids">
          <h2 id="shelf-kids" className="font-display flex items-center gap-2 text-[26px] text-ink sm:text-[30px]">
            <span aria-hidden>📚</span> {l === "id" ? "Rak cerita anak" : "Kids' story shelf"}
            <span className="ml-1 rounded-full bg-[var(--sec-soft)] px-2.5 py-0.5 font-sans text-[13px] font-bold text-[var(--sec-deep)]">{stories.length}</span>
          </h2>
          <ul className="shelf mt-6 grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
            {stories.map((n, i) => (
              <li key={n.slug}>
                <Link href={pathFor(l, `/cerita/${n.slug}`)} className="shelf-book tap group block" style={{ ["--tilt" as string]: `${(i % 3) - 1}deg` }}>
                  <div className="book-cover relative">
                    <StoryScene scene={sceneForCatatan(n)} pose={poseForCatatan(n)} className="book-art" />
                    <span className="book-spine" aria-hidden />
                    <span className="book-chip">{dict.catatan.childChip[n.child]}</span>
                  </div>
                  <h3 className="font-display mt-3 text-[17px] leading-snug text-ink group-hover:text-[var(--sec-deep)] sm:text-[19px]">
                    {n.title[l]}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[13.5px] leading-relaxed text-whisper">{n.hook[l]}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Shelf 2: Abi & Umi's notes, for parents ── */}
        <section className="mt-16 rounded-[28px] border-2 border-hairline bg-paper-2 p-6 sm:p-8" aria-labelledby="shelf-parents">
          <h2 id="shelf-parents" className="font-display flex items-center gap-2 text-[24px] text-ink sm:text-[28px]">
            <span aria-hidden>👨‍👩‍👧</span> {l === "id" ? "Catatan untuk Ayah & Bunda" : "Notes for parents"}
          </h2>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-whisper">
            {l === "id"
              ? "Catatan pendek dari Abi & Umi tentang membesarkan si kembar — satu momen, satu pelajaran."
              : "Short notes from Abi & Umi on raising the twins — one moment, one lesson."}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {parentNotes.map((n) => (
              <li key={n.slug}>
                <Link href={pathFor(l, `/cerita/${n.slug}`)} className="lift tap group flex h-full items-start gap-3 rounded-[20px] border border-hairline bg-paper p-4">
                  <span aria-hidden className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-soft text-[16px]">
                    {n.pov === "umi" ? "👩" : "👨"}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[12.5px] font-semibold text-sage-deep">
                      {n.pov === "umi" ? dict.catatan.byUmi : dict.catatan.bySalman} · {n.readingTimeMin} {dict.blog.readingTime}
                    </span>
                    <span className="mt-0.5 block font-display text-[17px] leading-snug text-ink group-hover:text-sage-deep">{n.title[l]}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12 rounded-[18px] border border-hairline bg-paper-2 px-5 py-4 text-[12.5px] leading-relaxed text-whisper">
          {dict.catatan.privacyNote}
        </p>
      </main>

      <Footer locale={l} currentPath="/cerita" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.catatan, path: "/cerita" },
          ]),
          itemListSchema(
            l,
            dict.catatan.indexTitle,
            notes.map((n) => ({
              name: n.title[l],
              url: absoluteUrl(l, `/cerita/${n.slug}`),
            })),
          ),
        )}
      />
    </>
  );
}
