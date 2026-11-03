import { notFound } from "next/navigation";
import Link from "next/link";
import { type Locale, absoluteUrl, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { buildMetadata } from "@/lib/seo/metadata";
import { GameLayout } from "@/components/games/GameLayout";
import { BrainJourney } from "@/components/games/BrainJourney";
import { PoseImg } from "@/components/games/PoseImg";
import { t } from "@/lib/games/poses";

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
  return buildMetadata({
    locale,
    path: "/kuis",
    title: locale === "id" ? "Tantangan Otak Baby Mo — Kuis & Permainan Anak" : "Baby Mo Brain Challenge — Kids Quizzes & Games",
    description:
      locale === "id"
        ? "Main kuis dan permainan seru bareng Baby Mo: temukan yang beda, cari perbedaan, tebak perasaan, dan kuis kepribadian. Gratis, edukatif, dan menggemaskan!"
        : "Play fun Baby Mo quizzes and games: spot the odd one, find the differences, guess the feeling, and a personality quiz. Free, educational, and adorable!",
  });
}

const FREE_PLAY = [
  {
    href: "/kuis/cari-yang-beda",
    pose: "baby-mo-run.png",
    emoji: "🔍",
    tone: "from-sky-soft to-sage-soft",
    title: { id: "Temukan yang Beda", en: "Spot the Odd One" },
    desc: { id: "14 tantangan, 3 tingkat kesulitan", en: "14 challenges, 3 difficulty levels" },
  },
  {
    href: "/kuis/cari-perbedaan",
    pose: "baby-mo-wow.png",
    emoji: "🧩",
    tone: "from-grape-soft to-berry-soft",
    title: { id: "Cari Perbedaan", en: "Spot the Difference" },
    desc: { id: "Bandingkan dua gambar Baby Mo", en: "Compare two Baby Mo pictures" },
  },
  {
    href: "/kuis/tebak-perasaan",
    pose: "baby-mo-yeyy.png",
    emoji: "😀",
    tone: "from-sun-soft to-peach-soft",
    title: { id: "Tebak Perasaan", en: "Guess the Feeling" },
    desc: { id: "Belajar mengenali emosi", en: "Learn to recognise emotions" },
  },
  {
    href: "/kuis/baby-mo-kamu",
    pose: "baby-mo-thank-you.png",
    emoji: "🍼",
    tone: "from-brave-soft to-sky-soft",
    title: { id: "Baby Mo Kamu Hari Ini?", en: "Which Baby Mo Are You?" },
    desc: { id: "Kuis kepribadian 6 pertanyaan", en: "A 6-question personality quiz" },
  },
];

export default async function KuisHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const id = l === "id";
  const gameSchema = {
    "@type": "Game",
    name: id ? "Tantangan Otak Baby Mo" : "Baby Mo Brain Challenge",
    description: id
      ? "24 level permainan otak untuk anak: cari yang beda, cari perbedaan, tebak perasaan, dan tebak siapa yang hilang."
      : "24 brain-game levels for kids: spot the odd one, spot the difference, guess the feeling, and who's missing.",
    url: absoluteUrl(l, "/kuis"),
    inLanguage: id ? "id-ID" : "en",
    genre: id ? "Permainan edukatif anak" : "Educational kids game",
    isAccessibleForFree: true,
  };
  return (
    <GameLayout
      locale={l}
      currentPath="/kuis"
      trail={[{ name: id ? "Kuis" : "Quizzes", path: "/kuis" }]}
      extraSchema={[gameSchema]}
    >
      <header className="mb-6 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-grape">
          {id ? "24 level · 4 dunia" : "24 levels · 4 worlds"}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-medium tracking-tight text-ink sm:text-5xl">
          {id ? "Tantangan Otak " : "Brain Challenge "}
          <span className="bg-gradient-to-r from-grape via-berry to-peach bg-clip-text text-transparent">Baby Mo</span>
        </h1>
        <p className="mt-3 text-base leading-relaxed text-whisper">
          {id
            ? "Satu petualangan, banyak permainan otak. Selesaikan level untuk membuka level berikutnya, kumpulkan bintang, dan naikkan level otakmu — dari Pemula Cerdas sampai Jenius Cilik!"
            : "One adventure, lots of brain games. Clear a level to unlock the next, collect stars and grow your brain level — from Bright Beginner to Little Genius!"}
        </p>
      </header>

      <BrainJourney locale={l} />

      <section className="mt-14">
        <h2 className="font-serif text-2xl font-semibold text-ink">{id ? "Main bebas" : "Free play"}</h2>
        <p className="mt-1 text-sm text-whisper">
          {id ? "Pilih permainan favoritmu dan main sesukamu." : "Pick a favourite game and play as you like."}
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {FREE_PLAY.map((g) => (
            <li key={g.href}>
              <Link
                href={pathFor(l, g.href)}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-paper shadow-sm transition hover:shadow-md active:scale-[0.98]"
              >
                <div className={`relative flex aspect-square items-end justify-center bg-gradient-to-br ${g.tone} sm:aspect-[4/3]`}>
                  <div className="h-[78%] w-[78%] transition duration-300 group-hover:scale-105">
                    <PoseImg file={g.pose} alt="" className="h-full w-full object-contain" />
                  </div>
                  <span className="absolute left-2.5 top-2.5 grid h-9 w-9 place-items-center rounded-xl bg-paper/90 text-lg shadow-sm">
                    {g.emoji}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-3 sm:p-4">
                  <h3 className="font-serif text-[15px] font-semibold leading-snug text-ink sm:text-base">{t(g.title, l)}</h3>
                  <p className="mt-1 flex-1 text-xs leading-snug text-whisper sm:text-sm">{t(g.desc, l)}</p>
                  <span className="mt-2 text-xs font-bold text-sage-deep">{id ? "Main" : "Play"} →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-3xl border border-hairline bg-clay-soft/50 p-5 sm:p-6">
        <h2 className="font-serif text-lg font-semibold text-ink">
          {id ? "Untuk Ayah & Bunda 💛" : "For parents 💛"}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink">
          {id
            ? "Setiap jenis level melatih kemampuan berbeda: ketelitian visual (cari yang beda & cari perbedaan), memori kerja (siapa yang hilang), dan kecerdasan emosi (tebak perasaan). Level dibuat makin menantang sedikit demi sedikit. Progres tersimpan di perangkat ini — tanpa akun, tanpa iklan."
            : "Each level type trains a different skill: visual attention (odd one out & spot the difference), working memory (who's missing), and emotional literacy (guess the feeling). Levels get a little harder step by step. Progress is saved on this device — no account, no ads."}
        </p>
      </section>
    </GameLayout>
  );
}
