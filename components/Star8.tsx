/**
 * Soft 8-point star — Baby Mo's take on the classic Islamic khatam
 * motif, with rounded corners so it reads playful rather than formal.
 * Two rounded squares, one turned 45°. Pure decoration (aria-hidden).
 */
export function Star8({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden focusable="false">
      <rect x="17" y="17" width="66" height="66" rx="12" fill="currentColor" />
      <rect x="17" y="17" width="66" height="66" rx="12" fill="currentColor" transform="rotate(45 50 50)" />
    </svg>
  );
}

/** Hairline — star — hairline. A quiet section break. */
export function StarDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto flex max-w-6xl items-center gap-4 px-5 sm:px-7 ${className}`} aria-hidden>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-hairline" />
      <Star8 className="h-3 w-3 text-clay/70" />
      <Star8 className="h-5 w-5 text-clay" />
      <Star8 className="h-3 w-3 text-clay/70" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-hairline" />
    </div>
  );
}
