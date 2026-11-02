import type { Locale } from "@/lib/i18n/config";
import { AppIcon } from "./AppIcon";

/**
 * "Untuk Ayah & Bunda" — a fold-out panel that holds the parent-facing
 * detail (sources, grading, authorship, review, guidance) so the page
 * leads with the child-facing content but parents are one tap away.
 */
export function ParentPanel({
  locale,
  children,
  open = false,
  className = "",
  hint,
}: {
  locale: Locale;
  children: React.ReactNode;
  open?: boolean;
  className?: string;
  /** Subtitle under the panel title (defaults to sources/grading). */
  hint?: string;
}) {
  return (
    <details className={`parent-panel group rounded-[24px] border-2 border-hairline bg-paper-2 ${className}`} open={open}>
      <summary className="tap flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 sm:px-6">
        <span className="flex items-center gap-3">
          <AppIcon name="parents" size={40} />
          <span>
            <span className="font-display block text-[18px] leading-tight text-ink">
              {locale === "id" ? "Untuk Ayah & Bunda" : "For parents"}
            </span>
            <span className="block text-[13px] text-whisper">
              {hint ?? (locale === "id" ? "Sumber, derajat, peninjau, dan tips" : "Sources, grading, reviewers and tips")}
            </span>
          </span>
        </span>
        <span aria-hidden className="text-[20px] text-whisper transition group-open:rotate-45">+</span>
      </summary>
      <div className="space-y-5 border-t-2 border-hairline px-5 py-5 sm:px-6">{children}</div>
    </details>
  );
}
