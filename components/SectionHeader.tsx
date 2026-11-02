import Link from "next/link";
import { type Locale, pathFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { type SectionKey, SECTION_EMOJI } from "@/lib/sections";

type Props = {
  locale: Locale;
  section: SectionKey;
  /** Breadcrumb label for this page. */
  crumb: string;
  title: string;
  sub?: React.ReactNode;
  /** Extra actions under the text (buttons/links). */
  children?: React.ReactNode;
  /** Right-hand slot (Baby Mo speech bubble). */
  aside?: React.ReactNode;
};

/**
 * Colourful page header for a section index: a soft band in the section's
 * colour, a tilted emoji "sticker", a rounded title, and room for Baby Mo.
 */
export function SectionHeader({ locale, section, crumb, title, sub, children, aside }: Props) {
  const dict = getDictionary(locale);
  return (
    <header className={`sec-${section} sec-band relative mb-10 overflow-hidden rounded-[32px] px-6 py-8 sm:px-10 sm:py-10`}>
      <nav aria-label="Breadcrumb" className="mb-4 text-[12.5px] text-whisper">
        <Link href={pathFor(locale)} className="hover:text-ink">
          {dict.nav.home}
        </Link>{" "}
        / <span className="font-semibold text-[var(--sec-deep)]">{crumb}</span>
      </nav>
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div className="max-w-2xl">
          <span aria-hidden className="sec-sticker">
            {SECTION_EMOJI[section]}
          </span>
          <h1 className="font-display mt-4 text-[34px] leading-[1.08] text-ink sm:text-[46px]">
            {title}
          </h1>
          {sub && <div className="mt-3 text-[16px] leading-relaxed text-ink-soft">{sub}</div>}
          {children && <div className="mt-5 flex flex-wrap gap-3">{children}</div>}
        </div>
        {aside && <div className="md:w-[300px]">{aside}</div>}
      </div>
    </header>
  );
}

/** Pill button in the section colour (use inside SectionHeader children). */
export function SectionButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="sec-btn tap inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[14px] font-bold">
      {children}
    </Link>
  );
}
