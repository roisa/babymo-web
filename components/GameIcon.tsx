import type { ReactNode } from "react";

/**
 * Modern line-icon set for the Baby Mo games, replacing the old emoji.
 * Each game maps to a simple 24×24 stroke glyph shown in a soft, rounded
 * "app tile" tinted with one of the fresh accent tones (green stays the
 * most-used, for the ibadah-core games). Falls back to a generic sparkle.
 */

type IconDef = { tile: string; glyph: ReactNode };

const S = {
  // common stroke svg props
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICONS: Record<string, IconDef> = {
  puzzle: {
    tile: "bg-grape-soft text-grape",
    glyph: (
      <>
        <path d="M9 4.5a1.5 1.5 0 0 1 3 0c0 .7.6 1 1.2.8l2-.6a1 1 0 0 1 1.2.7l.6 2c.2.7.6 1.1 1.3 1.1a1.5 1.5 0 0 1 0 3c-.7 0-1.1.4-1.3 1.1l-.6 2a1 1 0 0 1-1.2.7l-2-.6c-.6-.2-1.2.1-1.2.8a1.5 1.5 0 0 1-3 0c0-.7-.6-1-1.2-.8l-2 .6a1 1 0 0 1-1.2-.7l-.6-2C5.3 15 4.9 14.6 4.2 14.6" />
        <path d="M4.2 14.6a1.5 1.5 0 0 1 0-3c.7 0 1.1-.4 1.3-1.1l.6-2A1 1 0 0 1 7.3 7.7l2 .6c.6.2 1.2-.1 1.2-.8" />
      </>
    ),
  },
  "doa-harian": {
    tile: "bg-brave-soft text-brave",
    glyph: (
      <>
        <path d="M6 10v3a6 6 0 0 0 12 0v-3" />
        <path d="M6 10c0-2 1-3.5 2-4M18 10c0-2-1-3.5-2-4" />
        <path d="M12 3v3" />
        <path d="M10.5 4.5h3" />
      </>
    ),
  },
  "dua-journey": {
    tile: "bg-berry-soft text-berry",
    glyph: (
      <>
        <rect x="4" y="7" width="10" height="13" rx="2" transform="rotate(-8 9 13.5)" />
        <rect x="10" y="5" width="10" height="13" rx="2" transform="rotate(8 15 11.5)" />
      </>
    ),
  },
  "kata-islam": {
    tile: "bg-sky-soft text-sky",
    glyph: (
      <>
        <rect x="3.5" y="5" width="17" height="14" rx="3" />
        <path d="M7.5 10h5M7.5 13.5h9" />
      </>
    ),
  },
  dreamtime: {
    tile: "bg-grape-soft text-grape",
    glyph: (
      <>
        <path d="M18 14.5A7 7 0 0 1 9 5.5a7 7 0 1 0 9 9Z" />
        <path d="M15 4l.6 1.4L17 6l-1.4.6L15 8l-.6-1.4L13 6l1.4-.6Z" />
      </>
    ),
  },
  hijaiyah: {
    tile: "bg-sky-soft text-sky",
    glyph: (
      <>
        <path d="M17.5 14.5A7 7 0 1 1 15 4a5.5 5.5 0 0 0 2.5 10.5Z" />
      </>
    ),
  },
  "cari-baby-mo": {
    tile: "bg-sun-soft text-sun",
    glyph: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
  },
  "memory-match": {
    tile: "bg-peach-soft text-peach",
    glyph: (
      <>
        <rect x="4" y="4" width="7" height="7" rx="2" />
        <rect x="13" y="4" width="7" height="7" rx="2" />
        <rect x="4" y="13" width="7" height="7" rx="2" />
        <rect x="13" y="13" width="7" height="7" rx="2" />
      </>
    ),
  },
  "forehand-beat": {
    tile: "bg-berry-soft text-berry",
    glyph: (
      <>
        <path d="M9 18V6l10-2v10" />
        <circle cx="6.5" cy="18" r="2.5" />
        <circle cx="16.5" cy="16" r="2.5" />
      </>
    ),
  },
  "kata-baik": {
    tile: "bg-peach-soft text-peach",
    glyph: (
      <>
        <path d="M12 20s-7-4.4-7-9.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7 2.7C19 15.6 12 20 12 20Z" />
      </>
    ),
  },
  "pray-with-mo": {
    tile: "bg-brave-soft text-brave",
    glyph: (
      <>
        <path d="M5 20v-6a7 7 0 0 1 14 0v6" />
        <path d="M12 4c1.8 1.5 2.5 2.8 0 4.5C9.5 6.8 10.2 5.5 12 4Z" />
        <path d="M4 20h16M4 11v9M20 11v9" />
      </>
    ),
  },
  "streak-sholat-mo": {
    tile: "bg-peach-soft text-peach",
    glyph: (
      <>
        <path d="M12 3c.5 3-2 4-2 7a2 2 0 0 0 4 0c0-.8.3-1.4.7-1.9C16 10.6 17 12.4 17 14a5 5 0 0 1-10 0c0-3.2 2.6-4.9 5-11Z" />
      </>
    ),
  },
};

const FALLBACK: IconDef = {
  tile: "bg-sage-soft text-sage-deep",
  glyph: <path d="m12 3 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" />,
};

export function GameIcon({
  slug,
  className = "h-11 w-11",
}: {
  slug: string;
  className?: string;
}) {
  const def = ICONS[slug] ?? FALLBACK;
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[14px] ${def.tile} ${className}`}
      aria-hidden
    >
      <svg width="60%" height="60%" viewBox="0 0 24 24" {...S}>
        {def.glyph}
      </svg>
    </span>
  );
}
