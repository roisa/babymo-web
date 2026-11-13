import { asset } from "@/lib/i18n/config";

/**
 * Game icon — the same SVG app icons the game hub (play.babymo.id) uses,
 * generated from one source by scripts/generate-game-icons.py. Each glyph
 * matches what the game actually is (hands for du'as, a voxel block for
 * Pulau Hijaiyah, a tennis ball + note for Forehand Beat…).
 */
const KNOWN = new Set([
  "puzzle", "doa-harian", "dua-journey", "kata-islam", "dreamtime", "hijaiyah",
  "cari-baby-mo", "memory-match", "forehand-beat", "kata-baik", "pray-with-mo",
  "streak-sholat-mo", "wudhu", "huruf-hijaiyah", "sahabat-hewan", "kebun-ais", "tenis-adam", "doa-ramadan",
]);
/** slugs whose icon file has a different name */
const FILE: Record<string, string> = { tasbih: "tasbih-malam" };

export function GameIcon({
  slug,
  className = "h-11 w-11",
  alt = "",
}: {
  slug: string;
  className?: string;
  alt?: string;
}) {
  const file = FILE[slug] ?? (KNOWN.has(slug) ? slug : "puzzle");
  return (
    <img
      src={asset(`/icons/games/${file}.svg`)}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      width={100}
      height={100}
      loading="lazy"
      decoding="async"
      draggable={false}
      className={`game-icon inline-block shrink-0 select-none ${className}`}
    />
  );
}
