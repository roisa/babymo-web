import Link from "next/link";
import { type Locale, pathFor, absoluteUrl } from "@/lib/i18n/config";
import { getPersonBySlug } from "@/lib/content/people";

const WA_NUMBER = "6282315971002";

type Props = {
  locale: Locale;
  /** Person slug of the reviewing scholar — set when verified */
  reviewedBy?: string;
  /** Content type label, e.g. "doa" | "surat" | "hadis" */
  kindLabel: string;
  /** Display title of the content (for the review request message) */
  title: string;
  /** App-relative path, e.g. "/doa/sebelum-tidur" */
  path: string;
};

/**
 * Shows the verification status of a piece of religious content.
 *   - Verified (reviewedBy set): a green "Diperiksa oleh ___" badge
 *     linking to the reviewer's profile.
 *   - Not yet verified: a one-tap "send to an ustadz to check" button
 *     that opens WhatsApp pre-filled with the content title + link.
 *     Doubles as a humble crowdsourced-correction channel.
 */
export function VerificationBadge({
  locale,
  reviewedBy,
  kindLabel,
  title,
  path,
}: Props) {
  const reviewer = getPersonBySlug(reviewedBy);

  if (reviewer) {
    return (
      <Link
        href={pathFor(locale, `/tim#${reviewer.slug}`)}
        className="inline-flex items-center gap-2 rounded-full border border-brave/30 bg-brave-soft px-3.5 py-1.5 text-[12.5px] font-semibold text-brave-deep transition hover:border-brave/50"
      >
        <ShieldCheckIcon />
        {locale === "id" ? "Diperiksa oleh" : "Verified by"} {reviewer.name}
      </Link>
    );
  }

  const url = absoluteUrl(locale, path);
  const message =
    locale === "id"
      ? `Assalamu'alaikum, mohon bantu periksa ${kindLabel} ini di Baby Mo:\n\n"${title}"\n${url}\n\nApakah teks Arab, transliterasi, terjemahan, dan sumbernya sudah tepat? Jazakallahu khairan.`
      : `Assalamu'alaikum, please help check this ${kindLabel} on Baby Mo:\n\n"${title}"\n${url}\n\nAre the Arabic text, transliteration, translation, and source accurate? Jazakallahu khairan.`;
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-hairline bg-paper px-3.5 py-1.5 text-[12.5px] font-medium text-whisper transition hover:border-brave/40 hover:text-brave-deep"
    >
      <CheckSeekIcon />
      {locale === "id" ? "Bantu verifikasi konten ini" : "Help verify this content"}
    </a>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckSeekIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="M12 8v4M12 15.5v.5" />
    </svg>
  );
}
