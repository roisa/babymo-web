import Link from "next/link";
import { type Locale, asset, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { posePath } from "@/lib/games/poses";
import type { Catatan } from "@/lib/content/types";

function formatDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** The standard cerita list card — pose + chips + title + hook. */
export function CeritaCard({ note: n, locale: l }: { note: Catatan; locale: Locale }) {
  const dict = getDictionary(l);
  return (
    <Link
      href={pathFor(l, `/cerita/${n.slug}`)}
      className="lift tap group flex items-start gap-4 rounded-[24px] border border-hairline bg-paper p-6 sm:gap-6 sm:p-8"
    >
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-whisper">
          <span className="rounded-full bg-sage-soft px-2.5 py-0.5 font-semibold uppercase tracking-[0.1em] text-sage-deep">
            {dict.catatan.childChip[n.child]}
          </span>
          <span className="rounded-full bg-brave-soft px-2.5 py-0.5 font-semibold uppercase tracking-[0.1em] text-brave-deep">
            {n.kind === "story"
              ? dict.catatan.kidsStory
              : n.pov === "umi"
                ? dict.catatan.byUmi
                : dict.catatan.bySalman}
          </span>
          <time dateTime={n.published}>{formatDate(n.published, l)}</time>
          <span aria-hidden>·</span>
          <span>
            {n.readingTimeMin} {dict.blog.readingTime}
          </span>
        </div>
        <h2 className="font-display mt-3 text-[24px] font-medium leading-snug text-ink group-hover:text-brave-deep sm:text-[30px]">
          {n.title[l]}
        </h2>
        <p className="mt-2 text-[15.5px] leading-relaxed text-whisper">{n.hook[l]}</p>
        <p className="mt-5 text-[12.5px] font-semibold text-brave-deep">
          {dict.catatan.readMore} →
        </p>
      </div>
      {n.pose && (
        <div className="relative hidden shrink-0 sm:block">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-brave-soft via-sage-soft to-transparent blur-xl opacity-70" />
          <img
            src={asset(posePath(n.pose))}
            alt=""
            width={104}
            height={104}
            className="h-[104px] w-[104px] select-none object-contain transition-transform duration-300 group-hover:scale-105"
            draggable={false}
            loading="lazy"
          />
        </div>
      )}
    </Link>
  );
}
