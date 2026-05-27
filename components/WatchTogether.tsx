import { MomentCard } from "./MomentCard";
import { getMomentsRelatedTo } from "@/lib/content/moments";
import type { Locale } from "@/lib/i18n/config";

type Props = {
  /** Reference key, e.g. "doa/sebelum-tidur" or "blog/aktivitas-muharram-untuk-anak" */
  refKey: string;
  locale: Locale;
  /** Optional override of the heading */
  heading?: string;
};

/**
 * Embeddable block for article / doa / parenting detail pages.
 * Looks up moments whose `related` array contains the refKey, then
 * renders them as editorial cards. Silent if none match — so authors
 * can always include <WatchTogether refKey="..."/> and it only appears
 * when moments are curated for that entity.
 */
export function WatchTogether({ refKey, locale, heading }: Props) {
  const moments = getMomentsRelatedTo(refKey).slice(0, 3);
  if (moments.length === 0) return null;

  const h =
    heading ?? (locale === "id" ? "Tonton Bareng Keluarga" : "Watch Together as a Family");
  const sub =
    locale === "id"
      ? "Konten pendek yang melengkapi bacaan ini."
      : "Short clips that complement this read.";

  return (
    <aside className="mt-14 rounded-[28px] border border-hairline bg-paper-2 p-6 sm:p-8">
      <header className="mb-6 max-w-xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
          {locale === "id" ? "Momen Baby Mo" : "Baby Mo Moments"}
        </p>
        <h2 className="tracking-display mt-1 font-serif text-2xl font-medium text-ink">
          {h}
        </h2>
        <p className="mt-1.5 text-[14px] leading-relaxed text-whisper">
          {sub}
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moments.map((m) => (
          <MomentCard key={m.slug} moment={m} locale={locale} />
        ))}
      </div>
    </aside>
  );
}
