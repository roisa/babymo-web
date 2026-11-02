import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { AppIcon } from "@/components/AppIcon";
import { breadcrumbSchema, graph } from "@/lib/seo/schemas";
import { getDoaOfTheDay } from "@/lib/doa-of-the-day";
import { doaEmoji } from "@/lib/doa-emoji";
import { getAllDoa } from "@/lib/content/doa";
import { getAllSurah } from "@/lib/content/surah";
import { getAllProphets } from "@/lib/content/prophets";
import { getAllAsmaulHusna } from "@/lib/content/asmaul-husna";
import { getAllHadith } from "@/lib/content/hadith";
import { getAllParenting } from "@/lib/content/parenting";
import { getAllBlogPosts } from "@/lib/content/blog";
import { getAllDzikir } from "@/lib/content/dzikir";
import { getAllBacaanSholat } from "@/lib/content/bacaan-sholat";
import { getAllPuasa } from "@/lib/content/puasa";
import { currentHijriMonth, getCurrentIslamicEvent } from "@/lib/islamic-calendar";

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
    path: "/learn",
    title: dict.pages.learn.title,
    description: dict.pages.learn.description,
  });
}

/** Same pick for everyone on a given day (the site rebuilds daily). */
function pickOfDay<T>(list: T[], salt: number): T {
  const day = Math.floor(Date.now() / 86400000);
  return list[(day + salt) % list.length]!;
}

export default async function LearnHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const id = l === "id";

  const doa = getAllDoa();
  const surah = getAllSurah();
  const nabi = getAllProphets();
  const asma = getAllAsmaulHusna();
  const dzikir = getAllDzikir();
  const sholat = getAllBacaanSholat();
  const puasa = getAllPuasa();
  const hadith = getAllHadith();
  const parenting = getAllParenting();
  const posts = getAllBlogPosts();

  const { doa: doaToday } = getDoaOfTheDay();
  const nameToday = pickOfDay(asma, 7);
  const nabiToday = pickOfDay(nabi, 3);
  const surahToday = pickOfDay(surah, 11);
  const event = getCurrentIslamicEvent();
  const hijri = currentHijriMonth(l);

  const today: {
    href: string; tone: string; label: string; big: React.ReactNode; title: string; line: string;
  }[] = [
    {
      href: `/doa/${doaToday.slug}`,
      tone: "sky",
      label: id ? "🤲 Doa hari ini" : "🤲 Today's du'a",
      big: <span aria-hidden className="text-[44px] leading-none">{doaEmoji(doaToday.slug)}</span>,
      title: doaToday.title[l],
      line: doaToday.context[l],
    },
    {
      href: `/asmaul-husna/${nameToday.slug}`,
      tone: "grape",
      label: id ? `✨ Nama Allah ke-${nameToday.number}` : `✨ Name of Allah #${nameToday.number}`,
      big: <span lang="ar" dir="rtl" className="font-arabic text-[34px] leading-none text-[var(--t-deep)]">{nameToday.arabic}</span>,
      title: `${nameToday.transliteration} · ${nameToday.meaning[l]}`,
      line: nameToday.forKids[l],
    },
    {
      href: `/kisah/${nabiToday.slug}`,
      tone: "peach",
      label: id ? "📖 Kisah hari ini" : "📖 Today's story",
      big: <span lang="ar" dir="rtl" className="font-arabic text-[30px] leading-none text-[var(--t-deep)]">{nabiToday.arabicName}</span>,
      title: nabiToday.name[l],
      line: nabiToday.keyMoment[l],
    },
    {
      href: `/surat/${surahToday.slug}`,
      tone: "brave",
      label: id ? "🕋 Surat hari ini" : "🕋 Today's surah",
      big: <span lang="ar" dir="rtl" className="font-arabic text-[30px] leading-none text-[var(--t-deep)]">{surahToday.arabicName}</span>,
      title: `${surahToday.name[l]} · ${surahToday.ayahCount} ${id ? "ayat" : "verses"}`,
      line: surahToday.introForKids[l],
    },
  ];

  const kids: { href: string; emoji: string; tone: string; title: string; count: string; line: string; wide?: boolean }[] = [
    { href: "/doa", emoji: "🤲", tone: "sky", wide: true, title: id ? "Doa Harian" : "Daily Du'as", count: `${doa.length} doa`,
      line: id ? "Doa pendek untuk tidur, makan, hujan, sampai naik kendaraan — dengan bacaan Arab, cara baca, dan artinya." : "Short du'as for sleeping, eating, rain and car rides — with the Arabic, how to read it and what it means." },
    { href: "/surat", emoji: "🕋", tone: "brave", title: id ? "Surat Pendek" : "Short Surahs", count: `${surah.length} surat`,
      line: id ? "Ayat demi ayat, mulai dari Al-Fatihah." : "Verse by verse, starting with Al-Fatihah." },
    { href: "/kisah", emoji: "📖", tone: "peach", title: id ? "Kisah 25 Nabi" : "25 Prophet Stories", count: `${nabi.length} kisah`,
      line: id ? "Dari Nabi Adam sampai Nabi Muhammad ﷺ, dengan 3 pelajaran di setiap kisah." : "From Prophet Adam to Prophet Muhammad ﷺ, with 3 lessons in each story." },
    { href: "/asmaul-husna", emoji: "✨", tone: "grape", wide: true, title: "Asmaul Husna", count: id ? `${asma.length} nama` : `${asma.length} names`,
      line: id ? "99 nama Allah yang indah — masing-masing dengan cara sederhana mengenalkannya pada si kecil." : "Allah's 99 beautiful names — each with a simple way to share it with your little one." },
    { href: "/sholat", emoji: "🕌", tone: "sun", title: id ? "Bacaan Sholat" : "Prayer Recitations", count: `${sholat.length} ${id ? "bacaan" : "recitations"}`,
      line: id ? "Dari takbir sampai salam." : "From takbir to salam." },
    { href: "/dzikir", emoji: "🌅", tone: "berry", title: id ? "Dzikir Pagi & Petang" : "Morning & Evening Dhikr", count: `${dzikir.length} dzikir`,
      line: id ? "Kalimat pendek untuk membuka dan menutup hari." : "Short phrases to open and close the day." },
    { href: "/puasa", emoji: "🌙", tone: "sky", wide: true, title: id ? "Belajar Puasa" : "Learning to Fast", count: `${puasa.length} ${id ? "panduan" : "guides"}`,
      line: id ? "Puasa pertama yang menyenangkan, langkah demi langkah." : "A happy first fast, step by step." },
  ];

  const parents: { href: string; emoji: string; title: string; count: string; line: string }[] = [
    { href: "/parenting", emoji: "🧭", title: id ? "Panduan Parenting" : "Parenting Guides", count: `${parenting.length} ${id ? "situasi" : "situations"}`,
      line: id ? "Tantrum, susah tidur, susah makan, rebutan mainan — apa yang bisa dilakukan, dengan rujukan Islam." : "Tantrums, sleep, picky eating, sibling fights — what to do, grounded in Islamic sources." },
    { href: "/hadith", emoji: "📜", title: id ? "Hadith Parenting" : "Parenting Hadith", count: `${hadith.length} hadith`,
      line: id ? "Hadith pilihan tentang mendidik anak, lengkap dengan derajat dan catatan untuk orang tua." : "Chosen hadith on raising children, with grading and a note for parents." },
    { href: "/blog", emoji: "✍️", title: id ? "Artikel" : "Articles", count: `${posts.length} ${id ? "artikel" : "articles"}`,
      line: id ? "Bacaan panjang untuk Ayah & Bunda: Ramadan, rutinitas, sekolah, dan banyak lagi." : "Longer reads for parents: Ramadan, routines, school and more." },
  ];

  return (
    <>
      <Header locale={l} currentPath="/learn" />
      <main id="main" className="mx-auto max-w-6xl px-5 pb-28 pt-10 sm:px-7 sm:pt-14 md:pb-16">
        <SectionHeader
          locale={l}
          section="belajar"
          crumb={dict.nav.learn}
          title={id ? "Belajar itu seru!" : "Learning is fun!"}
          sub={
            id
              ? `Doa, surat pendek, kisah ${nabi.length} nabi, dan ${asma.length} nama Allah — sedikit demi sedikit, setiap hari.`
              : `Du'as, short surahs, ${nabi.length} prophet stories and Allah's ${asma.length} names — a little at a time, every day.`
          }
        />

        {/* ── Today's picks ── */}
        <section aria-labelledby="today">
          <h2 id="today" className="font-display flex flex-wrap items-baseline gap-x-3 text-[26px] sm:text-[30px]">
            <span className="text-grad">{id ? "Hari ini kita belajar…" : "Today we're learning…"}</span>
            <span className="font-sans text-[14px] font-semibold text-whisper">{id ? "berganti setiap hari" : "changes every day"}</span>
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {today.map((t) => (
              <li key={t.href}>
                <Link href={pathFor(l, t.href)} className={`learn-today learn-tone--${t.tone} tap group flex h-full flex-col rounded-[26px] p-5`}>
                  <span className="text-[12.5px] font-bold text-[var(--t-deep)]">{t.label}</span>
                  <span className="mt-4 flex min-h-[56px] items-center">{t.big}</span>
                  <span className="font-display mt-3 text-[18px] leading-snug text-ink">{t.title}</span>
                  <span className="mt-1 line-clamp-3 text-[13.5px] leading-relaxed text-ink-soft">{t.line}</span>
                  <span className="mt-auto pt-4 text-[13px] font-bold text-[var(--t-deep)]">{id ? "Pelajari" : "Learn it"} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Kids' shelf (bento) ── */}
        <section className="mt-16" aria-labelledby="kids">
          <h2 id="kids" className="font-display flex items-center gap-2 text-[26px] text-ink sm:text-[30px]">
            <span aria-hidden>🎒</span> {id ? "Rak si kecil" : "The little one's shelf"}
          </h2>
          <p className="mt-1 max-w-2xl text-[15.5px] text-whisper">
            {id ? "Semua yang bisa dibaca dan dihafal bersama — pilih satu, mulai dari yang paling pendek." : "Everything to read and memorise together — pick one and start with the shortest."}
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {kids.map((k) => (
              <li key={k.href} className={k.wide ? "col-span-2" : ""}>
                <Link href={pathFor(l, k.href)} className={`learn-tile learn-tone--${k.tone} tap group flex h-full flex-col rounded-[26px] p-5`}>
                  <span className="flex items-start justify-between gap-3">
                    <span aria-hidden className="learn-emoji">{k.emoji}</span>
                    <span className="whitespace-nowrap rounded-full bg-paper/80 px-2.5 py-1 text-[12px] font-bold text-[var(--t-deep)]">{k.count}</span>
                  </span>
                  <span className="font-display mt-4 text-[20px] leading-tight text-ink sm:text-[22px]">{k.title}</span>
                  <span className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{k.line}</span>
                </Link>
              </li>
            ))}
            <li className="col-span-2">
            <Link href={pathFor(l, "/permainan")} className="learn-play tap flex h-full items-center gap-4 rounded-[26px] p-5">
              <AppIcon name="main" size={48} />
              <span className="min-w-0 flex-1">
                <span className="font-display block text-[18px] text-ink">{id ? "Capek membaca? Main sambil belajar!" : "Tired of reading? Learn through play!"}</span>
                <span className="block text-[13.5px] text-ink-soft">{id ? "13 game: hijaiyah, doa, wudhu, sholat, dan kata Arab." : "13 games: hijaiyah, du'as, wudu, prayer and Arabic words."}</span>
              </span>
              <span aria-hidden className="text-[18px] font-bold text-[var(--color-sun-deep)]">→</span>
            </Link>
            </li>
          </ul>
        </section>

        {/* ── This Hijri month ── */}
        <section className="mt-16">
          <Link href={pathFor(l, "/kalender")} className="learn-month tap group grid items-center gap-5 rounded-[28px] p-6 sm:grid-cols-[auto_1fr_auto] sm:p-8">
            <span aria-hidden className="learn-moon">🌙</span>
            <span>
              <span className="block text-[13px] font-bold text-[#5B3FD6]">{id ? "Bulan ini dalam kalender Islam" : "This month in the Islamic calendar"}</span>
              <span className="font-display mt-1 block text-[24px] leading-tight text-ink sm:text-[28px]">{hijri}</span>
              {event && (
                <span className="mt-1 block text-[14.5px] leading-relaxed text-ink-soft">
                  <b className="text-ink">{event.name[l]}</b> — {event.caption[l]}
                </span>
              )}
            </span>
            <span className="text-[14px] font-bold text-[#5B3FD6]">{id ? "Buka kalender" : "Open calendar"} →</span>
          </Link>
        </section>

        {/* ── Parents' shelf ── */}
        <section className="mt-16 rounded-[30px] border-2 border-hairline bg-paper-2 p-6 sm:p-8" aria-labelledby="parents">
          <div className="flex items-center gap-3">
            <AppIcon name="parents" size={44} />
            <div>
              <h2 id="parents" className="font-display text-[24px] text-ink sm:text-[28px]">{id ? "Untuk Ayah & Bunda" : "For parents"}</h2>
              <p className="text-[14.5px] text-whisper">{id ? "Panduan dan bacaan untuk menemani si kecil belajar." : "Guides and reading for walking alongside your child."}</p>
            </div>
          </div>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {parents.map((p) => (
              <li key={p.href}>
                <Link href={pathFor(l, p.href)} className="lift tap group flex h-full flex-col rounded-[22px] border border-hairline bg-paper p-5">
                  <span className="flex items-center justify-between">
                    <span aria-hidden className="text-[26px]">{p.emoji}</span>
                    <span className="rounded-full bg-sage-soft px-2.5 py-0.5 text-[12px] font-bold text-sage-deep">{p.count}</span>
                  </span>
                  <span className="font-display mt-3 text-[19px] text-ink group-hover:text-sage-deep">{p.title}</span>
                  <span className="mt-1 text-[13.5px] leading-relaxed text-whisper">{p.line}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[13px] font-bold text-whisper">{id ? "Artikel terbaru" : "Latest articles"}</p>
          <ul className="mt-2 divide-y divide-hairline">
            {posts.slice(0, 3).map((p) => (
              <li key={p.slug}>
                <Link href={pathFor(l, `/blog/${p.slug}`)} className="tap flex items-center justify-between gap-4 py-3 text-[15px] font-semibold text-ink hover:text-sage-deep">
                  <span className="min-w-0">{p.title[l]}</span>
                  <span className="shrink-0 text-[12.5px] font-medium text-whisper">{p.readingTimeMin} {dict.blog.readingTime}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer locale={l} currentPath="/learn" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.learn, path: "/learn" },
          ]),
        )}
      />
    </>
  );
}
