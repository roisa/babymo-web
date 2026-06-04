import Link from "next/link";
import { type Locale, asset, pathFor } from "@/lib/i18n/config";

type Props = { locale: Locale };

/**
 * "Why Baby Mo" — a warm mission teaser that gives the homepage a brand
 * soul: who we are, why we exist, and a nudge to the About + Team pages
 * (real people + source review behind the content). Honest claims only.
 */
export function BrandMission({ locale: l }: Props) {
  const chips =
    l === "id"
      ? ["Gratis selamanya", "Tanpa iklan", "Dwibahasa ID/EN", "Ditinjau sesuai sumber"]
      : ["Free forever", "No ads", "Bilingual ID/EN", "Source-reviewed"];

  return (
    <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-7 sm:pb-20">
      <div className="overflow-hidden rounded-[28px] border border-sage/25 bg-gradient-to-br from-sage-soft/70 via-paper to-brave-soft/40">
        <div className="grid items-center gap-8 p-7 sm:grid-cols-[1.1fr_0.9fr] sm:p-10">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-sage-deep">
              <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-sage text-sage" />
              {l === "id" ? "Kenapa Baby Mo" : "Why Baby Mo"}
            </p>
            <h2 className="font-display mt-3 text-[28px] font-medium leading-[1.12] text-ink sm:text-[36px]">
              {l === "id"
                ? "Menanam cinta pada Allah, dari hal-hal kecil yang anak sukai."
                : "Planting love for Allah, through the small things kids love."}
            </h2>
            <p className="mt-4 max-w-xl text-[15.5px] leading-[1.7] text-whisper">
              {l === "id"
                ? "Baby Mo lahir dari satu harapan sederhana: membuat anak muslim jatuh cinta pada Allah dan akhlak mulia lewat doa, cerita, lagu, dan permainan — dibuat agar tenang dibaca orang tua dan menyenangkan bagi anak."
                : "Baby Mo began with one simple hope: to help Muslim children fall in love with Allah and good character through du'a, stories, songs, and play — calm for parents to read, fun for kids to enjoy."}
            </p>
            <p className="mt-3 max-w-xl text-[15.5px] leading-[1.7] text-whisper">
              {l === "id"
                ? "Di balik setiap halaman ada tim editorial yang menjaga konten tetap sesuai sumber Al-Qur'an dan hadith."
                : "Behind every page is an editorial team keeping the content faithful to the Qur'an and hadith."}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {chips.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-paper px-3 py-1 text-[12.5px] font-semibold text-ink-soft"
                >
                  <span aria-hidden className="text-sage-deep">✓</span>
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href={pathFor(l, "/tentang")}
                className="magnet tap inline-flex items-center gap-2 rounded-full bg-sage-deep px-5 py-3 text-[14px] font-semibold text-paper hover:bg-sage-deep/90"
              >
                {l === "id" ? "Kenalan dengan Baby Mo" : "Get to know Baby Mo"} →
              </Link>
              <Link
                href={pathFor(l, "/tim")}
                className="tap inline-flex items-center gap-2 rounded-full border border-hairline bg-paper/80 px-5 py-3 text-[14px] font-semibold text-ink backdrop-blur hover:border-sage/40"
              >
                {l === "id" ? "Tim & Reviewer" : "Team & Reviewers"}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[260px]">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 m-auto h-[78%] w-[78%] rounded-full bg-gradient-to-br from-brave-soft via-sage-soft to-transparent blur-2xl opacity-70"
            />
            <img
              src={asset("/baby-mo-poses/baby-mo-pose-01.png")}
              alt="Baby Mo"
              width={520}
              height={520}
              loading="lazy"
              decoding="async"
              className="h-auto w-full select-none drop-shadow-[0_18px_36px_rgba(15,18,19,0.10)]"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
