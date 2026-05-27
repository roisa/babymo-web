import Link from "next/link";
import { type Locale, pathFor } from "@/lib/i18n/config";
import { getAuthor, getPersonBySlug } from "@/lib/content/people";
import { getDictionary } from "@/lib/i18n/dictionaries";

type Props = {
  locale: Locale;
  authorSlug?: string;
  reviewerSlug?: string;
  date?: string;
  readingTimeMin?: number;
  compact?: boolean;
};

export function Byline({
  locale,
  authorSlug,
  reviewerSlug,
  date,
  readingTimeMin,
  compact,
}: Props) {
  const author = getAuthor(authorSlug);
  const reviewer = getPersonBySlug(reviewerSlug);
  const dict = getDictionary(locale);

  return (
    <div
      className={
        compact
          ? "flex flex-wrap items-center gap-2 text-[12px] text-whisper"
          : "flex flex-wrap items-center gap-2 text-[13px] text-whisper"
      }
    >
      <span>
        {locale === "id" ? "Ditulis oleh" : "Written by"}{" "}
        <Link
          href={pathFor(locale, `/tim#${author.slug}`)}
          className="font-semibold text-ink hover:underline"
        >
          {author.name}
        </Link>
      </span>
      {reviewer && (
        <>
          <span aria-hidden>·</span>
          <span>
            {locale === "id" ? "Ditinjau oleh" : "Reviewed by"}{" "}
            <Link
              href={pathFor(locale, `/tim#${reviewer.slug}`)}
              className="font-semibold text-sage-deep hover:underline"
            >
              {reviewer.name}
            </Link>
          </span>
        </>
      )}
      {date && (
        <>
          <span aria-hidden>·</span>
          <time dateTime={date}>{date}</time>
        </>
      )}
      {readingTimeMin && (
        <>
          <span aria-hidden>·</span>
          <span>
            {readingTimeMin} {dict.blog.readingTime}
          </span>
        </>
      )}
    </div>
  );
}
