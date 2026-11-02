/**
 * iOS-style app icon: a vivid gradient squircle with a white SF-Symbols-like
 * glyph, a glossy top sheen and a soft coloured shadow. Used for the section
 * icons (nav, headers, tab bar) so Baby Mo's navigation feels like a home
 * screen a child already knows how to use.
 */
export type AppIconName = "doa" | "cerita" | "main" | "belajar" | "home" | "parents" | "music" | "momen";

const GLYPH: Record<AppIconName, React.ReactNode> = {
  // cupped hands with a little star
  doa: (
    <>
      <path d="M4.3 10.2c-.5-.2-1 .2-.9.8.6 3.9 4 6.9 8.6 6.9s8-3 8.6-6.9c.1-.6-.4-1-.9-.8-2 .7-4.4 1.1-7.7 1.1s-5.7-.4-7.7-1.1z" />
      <path d="M12 3l.9 2 2.1.3-1.5 1.4.4 2.1L12 7.8l-1.9 1 .4-2.1L9 5.3l2.1-.3z" />
    </>
  ),
  // open book
  cerita: <path d="M2.8 5.6C5.4 4.3 8.6 4.4 11.1 6.1v13.3c-2.5-1.6-5.7-1.7-8.3-.4zM21.2 5.6c-2.6-1.3-5.8-1.2-8.3.5v13.3c2.5-1.6 5.7-1.7 8.3-.4z" />,
  // game controller
  main: (
    <path
      fillRule="evenodd"
      d="M7.6 6.5h8.8a5 5 0 0 1 4.9 6l-.6 3.1a2.6 2.6 0 0 1-4.4 1.2l-1.7-2.1H9.4l-1.7 2.1a2.6 2.6 0 0 1-4.4-1.2l-.6-3.1a5 5 0 0 1 4.9-6zM7.3 9.4v1.3H6v1.4h1.3v1.3h1.4v-1.3H10v-1.4H8.7V9.4zm9.4 1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1.6 2.6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
    />
  ),
  // graduation cap
  belajar: (
    <>
      <path d="M12 3.6 1.6 8.7 12 13.8l8.4-4.1v5.6h1.6V8.7z" />
      <path d="M6 12.1v3.7c0 1.6 2.7 3.2 6 3.2s6-1.6 6-3.2v-3.7l-6 2.9z" />
    </>
  ),
  // play button inside a little screen
  momen: (
    <path
      fillRule="evenodd"
      d="M5 5h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm5 3.6v6.8l5.8-3.4z"
    />
  ),
  // house
  home: <path d="M12 3.2 3 10.3v9.7a1 1 0 0 0 1 1h5.4v-5.8h5.2V21H20a1 1 0 0 0 1-1v-9.7z" />,
  // two grown-ups
  parents: (
    <>
      <circle cx="8" cy="7.6" r="3" />
      <circle cx="16.2" cy="8.2" r="2.6" />
      <path d="M2.6 19.4c0-3.1 2.4-5.6 5.4-5.6s5.4 2.5 5.4 5.6zM14 19.4c0-1.9-.5-3.6-1.4-4.9a4.8 4.8 0 0 1 9 2.4v2.5z" />
    </>
  ),
  // music note
  music: <path d="M9 18.2A2.7 2.7 0 1 1 7.3 15.7V5.6L19.2 3v12.4a2.7 2.7 0 1 1-1.7-2.5V7.3L9 9.1z" />,
};

export function AppIcon({
  name,
  size = 40,
  className = "",
  tilt = false,
}: {
  name: AppIconName;
  size?: number;
  className?: string;
  tilt?: boolean;
}) {
  return (
    <span
      aria-hidden
      className={`app-icon app-icon--${name} ${tilt ? "app-icon--tilt" : ""} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" fill="#fff" width={Math.round(size * 0.58)} height={Math.round(size * 0.58)}>
        {GLYPH[name]}
      </svg>
    </span>
  );
}
