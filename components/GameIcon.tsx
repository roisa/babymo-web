import type { ReactNode } from "react";

/**
 * App-store-style icons for the Baby Mo games: a vivid gradient squircle
 * with a bold white glyph, a glossy top highlight and a soft depth shadow —
 * built to read instantly and invite a tap. Each game gets its own colour.
 * Falls back to a star.
 */

type IconDef = { grad: string; glyph: ReactNode };

const ICONS: Record<string, IconDef> = {
  // Meet Baby Mo — a friendly star
  puzzle: {
    grad: "from-[#7C5CFF] to-[#B14BE0]",
    glyph: <path d="M12 2.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9l6.1-.9z" />,
  },
  // Daily Du'as — cupped hands
  "doa-harian": {
    grad: "from-[#36C98A] to-[#149E63]",
    glyph: (
      <>
        <path d="M4.3 10.2c-.5-.2-1 .2-.9.8.6 3.9 4 6.9 8.6 6.9s8-3 8.6-6.9c.1-.6-.4-1-.9-.8-2 .7-4.4 1.1-7.7 1.1s-5.7-.4-7.7-1.1z" />
        <path d="M11 3.2l.9 2 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2L8.1 5.5l2-.3z" />
      </>
    ),
  },
  // Dua Journey — a card with a heart
  "dua-journey": {
    grad: "from-[#FF7AA8] to-[#EC3C7B]",
    glyph: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm5 5.1c-1.1-1.6-3.7-.9-3.7 1.1 0 1.6 2.1 3 3.7 4.1 1.6-1.1 3.7-2.5 3.7-4.1 0-2-2.6-2.7-3.7-1.1z"
      />
    ),
  },
  // Islamic Words — letters
  "kata-islam": {
    grad: "from-[#45B0F0] to-[#2E7BE0]",
    glyph: (
      <text
        x="12"
        y="16.5"
        fontSize="12"
        fontWeight="800"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        Aa
      </text>
    ),
  },
  // Dreamtime — moon + star
  dreamtime: {
    grad: "from-[#7C83F0] to-[#4F46C9]",
    glyph: (
      <>
        <path d="M20.5 14.3A7.6 7.6 0 1 1 11 4.6a6.1 6.1 0 0 0 9.5 9.7z" />
        <path d="M17 4.3l.7 1.6 1.7.2-1.3 1.2.4 1.7L17 8.3l-1.5.9.4-1.7-1.3-1.2 1.7-.2z" />
      </>
    ),
  },
  // Hijaiyah letters — open book
  hijaiyah: {
    grad: "from-[#FFB648] to-[#F08A2E]",
    glyph: (
      <path d="M11 6.3C9.9 5.3 8.3 4.7 6 4.5A1.4 1.4 0 0 0 4.5 6v10.4c0 .8.6 1.4 1.4 1.4 2 .1 3.4.6 4.6 1.5.3.2.7.2 1 0 1.2-.9 2.6-1.4 4.6-1.5a1.4 1.4 0 0 0 1.4-1.4V6A1.4 1.4 0 0 0 18 4.5c-2.3.2-3.9.8-5 1.8zm1 1.8c.9-.7 2.1-1.1 3.6-1.3V16c-1.4.1-2.6.5-3.6 1.1z" />
    ),
  },
  // Find Baby Mo — magnifier
  "cari-baby-mo": {
    grad: "from-[#F7C13A] to-[#E88A17]",
    glyph: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 3a7.5 7.5 0 0 1 5.9 12.1l3.8 3.8-2.3 2.3-3.8-3.8A7.5 7.5 0 1 1 10.5 3zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"
      />
    ),
  },
  // Memory Match — grid of cards
  "memory-match": {
    grad: "from-[#FF9F5A] to-[#F26B35]",
    glyph: (
      <>
        <rect x="4" y="4" width="7" height="7" rx="1.6" />
        <rect x="13" y="4" width="7" height="7" rx="1.6" />
        <rect x="4" y="13" width="7" height="7" rx="1.6" />
        <rect x="13" y="13" width="7" height="7" rx="1.6" />
      </>
    ),
  },
  // Forehand Beat — music note
  "forehand-beat": {
    grad: "from-[#F277C9] to-[#D23FA6]",
    glyph: (
      <>
        <rect x="10.4" y="4.6" width="1.9" height="11.4" rx=".9" />
        <path d="M12.3 4.6c3.1.5 4.8 2.1 4.8 4.3-1.1-1.5-2.8-2.1-4.8-2.1z" />
        <circle cx="8.6" cy="16.6" r="3.1" />
      </>
    ),
  },
  // Kind Words — heart
  "kata-baik": {
    grad: "from-[#FF8A80] to-[#EC3B57]",
    glyph: (
      <path d="M12 20.3S4.6 15.6 4.6 10.5A3.9 3.9 0 0 1 12 8.3a3.9 3.9 0 0 1 7.4 2.2c0 5.1-7.4 9.8-7.4 9.8z" />
    ),
  },
  // Pray with Mo — mosque
  "pray-with-mo": {
    grad: "from-[#2FD0A6] to-[#149E86]",
    glyph: (
      <>
        <path d="M12 2.6c1.7 1.5 2.3 2.7 0 4.3-2.3-1.6-1.7-2.8 0-4.3z" />
        <path d="M5 20.4v-6.1a7 7 0 0 1 14 0v6.1h-3.2v-4.1a3.8 3.8 0 0 0-7.6 0v4.1z" />
        <rect x="3" y="11.4" width="1.8" height="9" rx=".9" />
        <rect x="19.2" y="11.4" width="1.8" height="9" rx=".9" />
        <rect x="2.6" y="20.2" width="18.8" height="1.6" rx=".8" />
      </>
    ),
  },
  // Prayer streak — flame
  "streak-sholat-mo": {
    grad: "from-[#FFA14A] to-[#F2602B]",
    glyph: (
      <path d="M12 2.8c.7 3.1-2.1 4.4-2.1 7.4a2.1 2.1 0 0 0 4.2 0c0-.8.3-1.5.8-2C16.2 10.7 17.2 12.6 17.2 14.5a5.2 5.2 0 0 1-10.4 0c0-3.5 2.7-5.2 5.2-11.7z" />
    ),
  },
};

const FALLBACK: IconDef = {
  grad: "from-[#5FB97E] to-[#2E8B57]",
  glyph: <path d="M12 2.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9l6.1-.9z" />,
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
      aria-hidden
      className={`relative inline-grid shrink-0 place-items-center overflow-hidden rounded-[28%] bg-gradient-to-br text-white shadow-[0_8px_16px_-6px_rgba(16,18,19,0.45)] ring-1 ring-inset ring-white/15 ${def.grad} ${className}`}
    >
      {/* glossy top highlight */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent" />
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative h-[58%] w-[58%] drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.22)]"
      >
        {def.glyph}
      </svg>
    </span>
  );
}
