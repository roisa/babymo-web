import Link from "next/link";
import { type Locale, asset, pathFor } from "@/lib/i18n/config";

type Props = { locale: Locale };

/**
 * Homepage teaser inviting families into Teman Tumbuh — the daily companion.
 * Deliberately COMPACT (a slim one-row card, not a hero) so it points to the
 * feature without dominating the homepage. The full interactive experience
 * lives on /teman-tumbuh. Server component (just a link).
 */
export function TemanTumbuhTeaser({ locale: l }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-3 sm:px-7">
      <Link
        href={pathFor(l, "/teman-tumbuh")}
        className="lift tap group flex items-center gap-4 overflow-hidden rounded-[22px] border border-sage/25 bg-gradient-to-r from-sage-soft/60 via-paper to-brave-soft/30 p-3.5 sm:p-4"
      >
        <img
          src={asset("/baby-mo-poses/baby-mo-alright.png")}
          alt="Baby Mo"
          width={96}
          height={96}
          loading="lazy"
          decoding="async"
          className="h-12 w-12 shrink-0 select-none drop-shadow-[0_6px_14px_rgba(15,18,19,0.10)] sm:h-14 sm:w-14"
          draggable={false}
        />
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.13em] text-sage-deep">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-sage text-sage" />
            {l === "id" ? "Teman harian si kecil" : "Your child's daily friend"}
          </p>
          <h2 className="mt-0.5 truncate font-serif text-[16px] font-semibold text-ink sm:text-[17px]">
            {l === "id"
              ? "Teman Tumbuh — satu kebaikan setiap hari"
              : "Teman Tumbuh — one good deed every day"}
          </h2>
          <p className="mt-0.5 truncate text-[13px] leading-snug text-whisper">
            {l === "id"
              ? "Baby Mo memberi satu misi kebaikan, dan kebun amalnya tumbuh."
              : "Baby Mo gives one good-deed mission, and their garden grows."}
          </p>
        </div>
        <span className="hidden shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-sage-deep px-4 py-2 text-[13px] font-semibold text-paper transition group-hover:bg-sage-deep/90 sm:inline-flex">
          {l === "id" ? "Mulai" : "Start"} 🌱
        </span>
        <span
          aria-hidden
          className="shrink-0 text-sage-deep transition group-hover:translate-x-0.5 sm:hidden"
        >
          →
        </span>
      </Link>
    </section>
  );
}
