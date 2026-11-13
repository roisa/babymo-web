import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { notFound } from "next/navigation";
import { type Locale, isLocale, locales, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph, videoGameSchema } from "@/lib/seo/schemas";
import { getAllGames } from "@/lib/content/games";
import { GameIcon } from "@/components/GameIcon";
import { AppIcon } from "@/components/AppIcon";
import { ParentPanel } from "@/components/ParentPanel";
import { GAME_GROUPS, GAME_PROMO } from "@/lib/content/game-promo";
import { asset } from "@/lib/i18n/config";

const HUB = "https://play.babymo.id/";

const TRUST: Record<Locale, [string, string][]> = {
  id: [["🎮", "Main langsung di browser"], ["🚫", "Tanpa iklan di dalam game"], ["🔒", "Tanpa daftar akun"], ["📱", "Juga di iPhone, iPad & Apple Watch"]],
  en: [["🎮", "Play right in the browser"], ["🚫", "No ads inside the games"], ["🔒", "No account needed"], ["📱", "Also on iPhone, iPad & Apple Watch"]],
};

const PARENT: Record<Locale, [string, string][]> = {
  id: [
    ["🛡️", "Tidak ada iklan, chat, atau tautan keluar yang berisiko di dalam game."],
    ["🔒", "Tidak ada akun dan tidak ada data anak yang dikumpulkan."],
    ["⏳", "Satu sesi cukup 10–15 menit. Akhiri dengan main bareng di dunia nyata."],
    ["🗣️", "Main bersama: bacakan doanya, tanyakan 'kamu temukan huruf apa?'"],
  ],
  en: [
    ["🛡️", "No ads, chat or risky outbound links inside the games."],
    ["🔒", "No accounts and no child data collected."],
    ["⏳", "One session of 10–15 minutes is enough. Finish with real-world play."],
    ["🗣️", "Play together: read the du'a aloud, ask 'which letter did you find?'"],
  ],
};

/** A short looping promo video made from real gameplay screens (public/games/video,
 *  9:16, muted). It only plays while on screen (see VIDEO_JS) and shows its poster otherwise. */
function GameVideo({ slug, l, alt, className = "" }: { slug: string; l: Locale; alt: string; className?: string }) {
  return (
    <span className={`game-video block overflow-hidden rounded-[22px] shadow-[0_16px_30px_-18px_rgba(30,60,110,.55)] ${className}`}>
      <video
        className="block aspect-[9/16] h-auto w-full object-cover"
        src={asset(`/games/video/${l}-${slug}.mp4`)}
        poster={asset(`/games/video/${l}-${slug}.webp`)}
        muted
        loop
        playsInline
        preload="none"
        aria-label={alt}
        data-autoplay=""
      />
    </span>
  );
}

/* Play each video only while it is visible; respect reduced motion (poster stays). */
const VIDEO_JS = `(function(){if(!('IntersectionObserver' in window))return;var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;if(rm)return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;if(e.isIntersecting){var p=v.play();p&&p.catch&&p.catch(function(){})}else{v.pause()}})},{threshold:.35});
document.querySelectorAll('video[data-autoplay]').forEach(function(v){io.observe(v)});})();`;

/** Age + skills chips. */
function GameMeta({ slug, l }: { slug: string; l: Locale }) {
  const pr = GAME_PROMO[slug];
  if (!pr) return null;
  return (
    <span className="mt-3 flex flex-wrap gap-1.5">
      <span className="rounded-full bg-[var(--color-sun-soft)] px-2.5 py-0.5 text-[12px] font-bold text-[var(--color-sun-deep)]">
        👶 {l === "id" ? `Usia ${pr.ages}` : `Ages ${pr.ages}`}
      </span>
      {pr.skills[l].map((sk) => (
        <span key={sk} className="rounded-full bg-paper-2 px-2.5 py-0.5 text-[12px] font-semibold text-ink-soft">{sk}</span>
      ))}
    </span>
  );
}

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
    path: "/permainan",
    title: dict.pages.games.title,
    description: dict.pages.games.description,
  });
}

export default async function GamesIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const games = getAllGames();
  const bySlug = Object.fromEntries(games.map((g) => [g.slug, g]));
  const spotlight = bySlug["puzzle"];

  return (
    <>
      <Header locale={l} currentPath="/permainan" />
      <main id="main" className="mx-auto max-w-6xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-16">
        <SectionHeader
          locale={l}
          section="main"
          crumb={dict.nav.games}
          title={l === "id" ? "Ayo main bareng Baby Mo!" : "Let's play with Baby Mo!"}
          sub={
            l === "id"
              ? `${games.length} game islami untuk belajar doa, huruf Arab, dan akhlak baik — gratis dimainkan di browser, sambil tertawa.`
              : `${games.length} Islamic games for learning du'as, Arabic letters and good character — free to play in the browser, while laughing.`
          }
        >
          <a href={HUB} target="_blank" rel="noopener" className="sec-btn tap inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14.5px] font-bold">
            🎮 {l === "id" ? "Buka semua game" : "Open all games"} ↗
          </a>
        </SectionHeader>

        {/* Trust chips — what parents ask first */}
        <ul className="-mt-4 mb-12 flex flex-wrap gap-2.5">
          {TRUST[l].map(([em, t]) => (
            <li key={t} className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-[13.5px] font-bold text-ink-soft shadow-[0_0_0_1px_var(--color-hairline),0_8px_18px_-14px_rgba(30,60,110,.5)]">
              <span aria-hidden>{em}</span> {t}
            </li>
          ))}
        </ul>

        {/* ── Spotlight: start here ── */}
        {spotlight && (
          <section className="sec-main game-spot relative mb-16 overflow-hidden rounded-[32px] p-6 sm:p-10" aria-labelledby="spot">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-paper/80 px-3 py-1 text-[13px] font-bold text-[var(--sec-deep)]">
                  ✨ {l === "id" ? "Mulai di sini" : "Start here"}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <GameIcon slug={spotlight.slug} className="h-16 w-16" />
                  <h2 id="spot" className="font-display text-grad text-[30px] leading-tight sm:text-[38px]">{spotlight.title[l]}</h2>
                </div>
                <p className="font-display mt-4 text-[20px] leading-snug text-ink">{GAME_PROMO[spotlight.slug]!.hook[l]}</p>
                <p className="mt-2 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">{GAME_PROMO[spotlight.slug]!.pitch[l]}</p>
                <GameMeta slug={spotlight.slug} l={l} />
                <a href={spotlight.externalUrl} target="_blank" rel="noopener" className="sec-btn tap mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15.5px] font-bold">
                  ▶ {l === "id" ? "Main sekarang" : "Play now"}
                </a>
              </div>
              <GameVideo slug={spotlight.slug} l={l} alt={spotlight.title[l]} className="mx-auto w-[230px] rotate-2 sm:w-[260px]" />
            </div>
          </section>
        )}

        {/* ── Games grouped by what children learn ── */}
        {GAME_GROUPS.map((grp) => {
          const items = grp.slugs.map((sl) => bySlug[sl]).filter((g): g is (typeof games)[number] => Boolean(g));
          if (!items.length) return null;
          return (
            <section key={grp.key} className="mb-16" aria-labelledby={`g-${grp.key}`}>
              <h2 id={`g-${grp.key}`} className="font-display flex items-center gap-2 text-[26px] text-ink sm:text-[30px]">
                <span aria-hidden>{grp.emoji}</span> {grp.title[l]}
              </h2>
              <p className="mt-1 max-w-2xl text-[15.5px] leading-relaxed text-whisper">{grp.line[l]}</p>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2">
                {items.map((g) => {
                  const pr = GAME_PROMO[g.slug];
                  return (
                    <li key={g.slug}>
                      <a href={g.externalUrl} target="_blank" rel="noopener" className="game-card tap group flex h-full flex-row gap-4 rounded-[28px] bg-paper p-4 sm:p-5">
                        {/* Phone: a wide tinted "peek" box with the phone rising out of it.
                            sm+: the classic side-by-side phone (natural 9:16, never stretched). */}
                        <GameVideo slug={g.slug} l={l} alt={g.title[l]} className="w-[132px] shrink-0 self-start sm:w-[150px]" />
                        <span className="flex min-w-0 flex-col">
                          <span className="flex items-center gap-3">
                            <GameIcon slug={g.slug} className="h-11 w-11" />
                            <span className="font-display text-[20px] leading-tight text-ink group-hover:text-[var(--color-sun-deep)]">{g.title[l]}</span>
                          </span>
                          <span className="mt-3 block text-[15px] font-bold leading-snug text-ink">{pr?.hook[l] ?? g.description[l]}</span>
                          {pr && <span className="mt-1.5 block text-[14px] leading-relaxed text-whisper">{pr.pitch[l]}</span>}
                          <GameMeta slug={g.slug} l={l} />
                          <span className="mt-auto pt-4">
                            <span className="game-play inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px] font-bold">
                              ▶ {l === "id" ? "Main" : "Play"}
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        {/* ── The app ── */}
        <section className="mb-16 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#E8F4FF,#F1EAFF_55%,#E9FAF0)] p-6 sm:p-10" aria-labelledby="app-cta">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[13px] font-extrabold uppercase tracking-wide text-[#2D8CFF]">iPhone · iPad · Apple Watch</p>
              <h2 id="app-cta" className="font-display mt-1 text-[28px] leading-tight text-ink sm:text-[34px]">
                {l === "id" ? "Semua game ini juga ada di aplikasi Baby Mo." : "All these games are in the Baby Mo app too."}
              </h2>
              <p className="mt-2 max-w-xl text-[15.5px] leading-relaxed text-ink-soft">
                {l === "id"
                  ? "Bisa offline, tanpa iklan, tanpa akun — plus doa dengan suara Mo, tasbih, dan jadwal sholat di Apple Watch."
                  : "Works offline, no ads, no account — plus du'as in Mo's voice, tasbih and prayer times on Apple Watch."}
              </p>
            </div>
            <a href={asset("/app/")} className="tap inline-flex items-center gap-2 rounded-full bg-[#0B0B0C] px-6 py-3 text-[15.5px] font-bold text-white">
              {l === "id" ? "Lihat aplikasinya" : "See the app"} →
            </a>
          </div>
        </section>

        {/* ── For parents ── */}
        <ParentPanel locale={l} hint={l === "id" ? "Kenapa game Baby Mo aman untuk si kecil" : "Why Baby Mo games are safe for little ones"}>
          <ul className="grid gap-3 text-[15px] leading-relaxed text-ink-soft sm:grid-cols-2">
            {PARENT[l].map(([em, t]) => (
              <li key={t} className="flex gap-2.5"><span aria-hidden>{em}</span><span>{t}</span></li>
            ))}
          </ul>
          <Link href={pathFor(l, "/parenting/screen-time")} className="tap inline-flex text-[14px] font-semibold text-sage-deep hover:underline">
            {l === "id" ? "Panduan screen time untuk si kecil →" : "Screen-time guide for little ones →"}
          </Link>
        </ParentPanel>

        {/* More ways to play — printable activities + upcoming quizzes */}
        <h2 className="mt-14 font-serif text-2xl font-medium tracking-tight text-ink">
          {l === "id" ? "Lainnya untuk dimainkan" : "More to play"}
        </h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2">
          <li>
            <Link
              href={pathFor(l, "/momen")}
              className="group flex h-full items-center gap-4 rounded-2xl border border-mist bg-paper p-6 transition hover:-translate-y-0.5 hover:border-sage/40"
            >
              <AppIcon name="momen" size={48} />
              <span className="min-w-0">
                <span className="block font-serif text-lg font-semibold text-ink group-hover:text-sage-deep">
                  {dict.nav.watch}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-whisper">
                  {l === "id"
                    ? "Kurasi video Baby Mo di YouTube untuk ditonton bareng anak."
                    : "Curated Baby Mo YouTube videos to watch together with your child."}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-sage-deep">
                  {l === "id" ? "Tonton" : "Watch"} →
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={pathFor(l, "/apps/kids-activity")}
              className="group flex h-full items-center gap-4 rounded-2xl border border-mist bg-paper p-6 transition hover:-translate-y-0.5 hover:border-sage/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-clay-soft text-2xl">
                🎨
              </span>
              <span className="min-w-0">
                <span className="block font-serif text-lg font-semibold text-ink group-hover:text-sage-deep">
                  {l === "id" ? "Aktivitas Anak" : "Kids Activity"}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-whisper">
                  {l === "id"
                    ? "Lembar kegiatan siap cetak — labirin, mewarnai, menjiplak."
                    : "Printable worksheets — mazes, coloring, and tracing."}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-sage-deep">
                  {l === "id" ? "Buka" : "Open"} →
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={pathFor(l, "/unduh")}
              className="group flex h-full items-center gap-4 rounded-2xl border border-mist bg-paper p-6 transition hover:-translate-y-0.5 hover:border-sage/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-clay-soft text-2xl">
                🖼️
              </span>
              <span className="min-w-0">
                <span className="block font-serif text-lg font-semibold text-ink group-hover:text-sage-deep">
                  {l === "id" ? "Wallpaper Doa" : "Du'a Wallpapers"}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-whisper">
                  {l === "id"
                    ? "Wallpaper doa harian yang cantik untuk layar ponsel anak."
                    : "Pretty daily-du'a wallpapers for your child's phone screen."}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-sage-deep">
                  {l === "id" ? "Unduh" : "Download"} →
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={pathFor(l, "/kuis")}
              className="group flex h-full items-center gap-4 rounded-2xl border border-mist bg-paper p-6 transition hover:-translate-y-0.5 hover:border-sage/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-clay-soft text-2xl">
                🧠
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-2 font-serif text-lg font-semibold text-ink group-hover:text-sage-deep">
                  {l === "id" ? "Kuis & Permainan" : "Quizzes & Games"}
                  <span className="rounded-full bg-brave-soft px-2 py-0.5 text-[11.5px] font-semibold normal-case-label text-brave-deep">
                    {l === "id" ? "Baru" : "New"}
                  </span>
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-whisper">
                  {l === "id"
                    ? "Temukan yang beda, cari perbedaan, tebak perasaan, dan kuis kepribadian Baby Mo."
                    : "Spot the odd one, find the differences, guess the feeling, and the Baby Mo personality quiz."}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-sage-deep">
                  {l === "id" ? "Main" : "Play"} →
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </main>
      <script dangerouslySetInnerHTML={{ __html: VIDEO_JS }} />
      <Footer locale={l} currentPath="/permainan" />
      <MobileNav locale={l} />
      <JsonLd
        data={graph(
          breadcrumbSchema(l, [
            { name: dict.nav.home, path: "/" },
            { name: dict.nav.games, path: "/permainan" },
          ]),
          ...games.map((g) => videoGameSchema(l, g))
        )}
      />
    </>
  );
}
