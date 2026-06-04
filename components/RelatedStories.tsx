import Link from "next/link";
import { type Locale, asset, pathFor } from "@/lib/i18n/config";
import { getCatatanByAnchor } from "@/lib/content/catatan";
import { posePath } from "@/lib/games/poses";

/**
 * "Cerita terkait" — links the Baby Mo & Baby Ais stories whose Islamic
 * anchor points at this doa / hadith / parenting entry. Cross-linking the
 * narrative content onto the reference pages strengthens internal linking
 * and surfaces the stories at the right moment. Renders nothing when there
 * are no matches.
 */
export function RelatedStories({
  locale,
  type,
  slug,
  limit = 3,
}: {
  locale: Locale;
  type: "doa" | "hadith" | "parenting";
  slug: string;
  limit?: number;
}) {
  const stories = getCatatanByAnchor(type, slug).slice(0, limit);
  if (stories.length === 0) return null;
  const l = locale;

  return (
    <section className="mt-14">
      <h2 className="tracking-display font-serif text-2xl font-medium text-ink">
        {l === "id" ? "Cerita terkait" : "Related stories"}
      </h2>
      <p className="mt-1 text-[14px] text-whisper">
        {l === "id"
          ? "Cerita Baby Mo & Baby Ais untuk dibacakan bersama si kecil."
          : "Baby Mo & Baby Ais stories to read together with your little one."}
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {stories.map((c) => (
          <Link
            key={c.slug}
            href={pathFor(l, `/cerita/${c.slug}`)}
            className="lift tap group flex items-center gap-4 rounded-[20px] border border-hairline bg-paper p-4 hover:border-brave/40"
          >
            {c.pose && (
              <img
                src={asset(posePath(c.pose))}
                alt=""
                width={56}
                height={56}
                loading="lazy"
                className="h-14 w-14 shrink-0 select-none object-contain"
                draggable={false}
              />
            )}
            <div className="min-w-0">
              <p className="font-serif text-[16px] font-medium leading-snug text-ink group-hover:text-brave-deep">
                {c.title[l]}
              </p>
              <p className="mt-1 line-clamp-2 text-[13px] text-whisper">
                {c.hook[l]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
