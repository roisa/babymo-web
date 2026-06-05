import Link from "next/link";
import { type Locale, asset, pathFor } from "@/lib/i18n/config";

type Props = { locale: Locale };

/**
 * Homepage teaser inviting families into Teman Tumbuh — the daily
 * companion. Server component (just a link card); the interactive
 * experience lives on /teman-tumbuh.
 */
export function TemanTumbuhTeaser({ locale: l }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-6 sm:px-7">
      <Link
        href={pathFor(l, "/teman-tumbuh")}
        className="lift tap group block overflow-hidden rounded-[28px] border border-sage/25 bg-gradient-to-br from-sage-soft/70 via-paper to-brave-soft/40"
      >
        <div className="grid items-center gap-5 p-6 sm:grid-cols-[auto_1fr_auto] sm:p-8">
          <div className="relative mx-auto">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 m-auto h-[80%] w-[80%] rounded-full bg-sage-soft blur-2xl"
            />
            <img
              src={asset("/baby-mo-poses/baby-mo-alright.png")}
              alt="Baby Mo"
              width={180}
              height={180}
              loading="lazy"
              decoding="async"
              className="h-24 w-24 select-none drop-shadow-[0_12px_24px_rgba(15,18,19,0.10)] sm:h-28 sm:w-28"
              draggable={false}
            />
          </div>

          <div className="text-center sm:text-left">
            <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-sage-deep sm:justify-start">
              <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-sage text-sage" />
              {l === "id" ? "Baru · Teman harian si kecil" : "New · Your child's daily friend"}
            </p>
            <h2 className="font-display mt-2 text-[24px] font-medium leading-[1.15] text-ink sm:text-[30px]">
              {l === "id"
                ? "Teman Tumbuh — satu kebaikan setiap hari"
                : "Teman Tumbuh — one good deed every day"}
            </h2>
            <p className="mt-1.5 text-[14.5px] leading-snug text-whisper">
              {l === "id"
                ? "Baby Mo menyapa si kecil dengan namanya, memberi satu misi kebaikan, dan kebun amalnya tumbuh setiap hari."
                : "Baby Mo greets your little one by name, gives one good-deed mission, and their garden grows each day."}
            </p>
          </div>

          <span className="mx-auto inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-sage-deep px-5 py-3 text-[14px] font-semibold text-paper transition group-hover:bg-sage-deep/90 sm:mx-0">
            {l === "id" ? "Mulai menanam" : "Start planting"} 🌱
          </span>
        </div>
      </Link>
    </section>
  );
}
