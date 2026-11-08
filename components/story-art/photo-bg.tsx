import { asset } from "@/lib/i18n/config";
import type { ArtBg, ArtTime } from "@/lib/cerita/illus-types";

/**
 * Baby Mo world backgrounds — the 3D environment renders from the Baby Mo
 * YouTube series (Blender, by the Baby Mo art team), used behind the
 * character renders so the books look like the show.
 *
 * Each render is placed in the 800-wide StoryArt frame by:
 *   h   – its height in frame units (width follows from the aspect ratio)
 *   cx  – the image x (0–1) that sits at the frame centre
 *   by  – the image y (0–1) that sits at the frame bottom (y = 450)
 * The placement always covers every crop StoryArt uses (y ≥ -150, x 0–800).
 * Time of day is a colour wash over the render; windows (image 0–1 boxes)
 * turn into a night sky or rainy glass so weather reads inside rooms.
 *
 * Replacing a render: export a new file with a NEW name (…-v2.webp) —
 * the service worker caches images forever by URL.
 */
export interface PhotoBg {
  src: string;
  /** width / height of the file */
  ar: number;
  h: number;
  cx: number;
  by: number;
  /** colour above the render (only visible in very tall crops) */
  top: string;
  outdoor?: boolean;
  windows?: [number, number, number, number][];
  /** team gallery label */
  name?: string;
}

export const PHOTO_BG: Partial<Record<ArtBg, PhotoBg>> = {
  bedroom: { name: "Kamar si kembar", src: "/story-bg/bg-bedroom-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#AEB3AF", windows: [[0.165, 0.3, 0.265, 0.54]] },
  living: { name: "Ruang keluarga", src: "/story-bg/bg-living-v1.webp", ar: 1.8265, h: 760, cx: 0.52, by: 1, top: "#C3B7AF", windows: [[0.05, 0.23, 0.14, 0.51], [0.41, 0.27, 0.465, 0.49]] },
  kitchen: { name: "Dapur", src: "/story-bg/bg-kitchen-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#BFB4B2", windows: [[0.61, 0.25, 0.75, 0.47]] },
  bathroom: { name: "Kamar mandi", src: "/story-bg/bg-bathroom-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#BCB7B2", windows: [[0.6, 0.4, 0.7, 0.555]] },
  playroom: { name: "Ruang bermain", src: "/story-bg/bg-playroom-v1.webp", ar: 1.7448, h: 760, cx: 0.5, by: 1, top: "#89A657", windows: [[0.455, 0.235, 0.555, 0.525]] },
  classroom: { name: "Kelas TK", src: "/story-bg/bg-classroom-v1.webp", ar: 1.592, h: 760, cx: 0.5, by: 1, top: "#A6A2A1" },
  masterbedroom: { name: "Kamar Abi & Umi", src: "/story-bg/bg-masterbedroom-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#DECDB8" },
  mosque: { name: "Dalam masjid", src: "/story-bg/bg-mosque-v1.webp", ar: 1.581, h: 780, cx: 0.5, by: 1, top: "#B2A36F" },
  // the house from the show: the yard in front of the white fence…
  garden: { name: "Halaman rumah", src: "/story-bg/bg-house-v1.webp", ar: 1.7837, h: 820, cx: 0.5, by: 0.86, top: "#82E0FB", outdoor: true },
  // …and the same street, standing on the road
  street: { name: "Jalan depan rumah", src: "/story-bg/bg-house-v1.webp", ar: 1.7837, h: 740, cx: 0.5, by: 0.985, top: "#82E0FB", outdoor: true },
  school: { name: "Sekolah TK", src: "/story-bg/bg-school-v1.webp", ar: 1.7641, h: 780, cx: 0.5, by: 0.9, top: "#7ADDFB", outdoor: true },

  // themed playrooms from the show — a room with a big mural; good for pretend play
  "icecreamshop": { src: "/story-bg/bg-icecreamshop-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#A66C61", name: "Toko es krim" },
  "play-airport": { src: "/story-bg/bg-play-airport-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#A7968D", name: "Ruang main bandara" },
  "play-amusement": { src: "/story-bg/bg-play-amusement-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#D8AEBA", name: "Ruang main taman hiburan" },
  "play-beach": { src: "/story-bg/bg-play-beach-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#C8C4BF", name: "Ruang main pantai" },
  "play-carnival": { src: "/story-bg/bg-play-carnival-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#C9C0B9", name: "Ruang main karnaval" },
  "play-castle": { src: "/story-bg/bg-play-castle-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#59430C", name: "Ruang main istana" },
  "play-circus": { src: "/story-bg/bg-play-circus-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#CDC0B9", name: "Ruang main sirkus" },
  "play-dinosaur": { src: "/story-bg/bg-play-dinosaur-v2.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#C9C3B8", name: "Ruang main dinosaurus" },
  "play-dragon": { src: "/story-bg/bg-play-dragon-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#BFCBD4", name: "Ruang main naga" },
  "play-firefighter": { src: "/story-bg/bg-play-firefighter-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#E97051", name: "Ruang main pemadam kebakaran" },
  "play-spacecity": { src: "/story-bg/bg-play-spacecity-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#C3C0C0", name: "Ruang main kota masa depan" },
  "play-construction": { src: "/story-bg/bg-play-construction-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#BFCBD4", name: "Ruang main alat berat" },
  "play-chef": { src: "/story-bg/bg-play-chef-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#BFCBD4", name: "Ruang main koki cilik" },
  "play-mountain": { src: "/story-bg/bg-play-mountain-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#C9C4BA", name: "Ruang main gunung" },
  "play-pet": { src: "/story-bg/bg-play-pet-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#BFCBD4", name: "Ruang main hewan peliharaan" },
  "play-pirate": { src: "/story-bg/bg-play-pirate-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#BFCBD4", name: "Ruang main pulau bajak laut" },
  "play-police": { src: "/story-bg/bg-play-police-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#BFCBD4", name: "Ruang main polisi & penyelamat" },
  "play-robot": { src: "/story-bg/bg-play-robot-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#BFCBD4", name: "Ruang main robot" },
  "play-space": { src: "/story-bg/bg-play-space-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#BFCBD4", name: "Ruang main luar angkasa" },
  "play-superhero": { src: "/story-bg/bg-play-superhero-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#C01700", name: "Ruang main pahlawan" },
  "play-pool": { src: "/story-bg/bg-play-pool-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#C6C2BF", name: "Ruang main kolam renang" },
  "play-train": { src: "/story-bg/bg-play-train-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#C7C1B7", name: "Ruang main stasiun kereta" },
  "play-underwater": { src: "/story-bg/bg-play-underwater-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#A6CDB8", name: "Ruang main bawah laut" },
  "play-volcano": { src: "/story-bg/bg-play-volcano-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#CDC5B9", name: "Ruang main gunung berapi" },
  "play-zoo": { src: "/story-bg/bg-play-zoo-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#CFCF93", name: "Ruang main kebun binatang" },
  "play-camping": { src: "/story-bg/bg-play-camping-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#4C4815", name: "Ruang main kemah & hutan" },
  "play-city": { src: "/story-bg/bg-play-city-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#EAF4FB", name: "Ruang main kota & kendaraan" },
  "play-farm": { src: "/story-bg/bg-play-farm-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#F2B8B3", name: "Ruang main peternakan" },
  "play-treasure": { src: "/story-bg/bg-play-treasure-v1.webp", ar: 1.7778, h: 760, cx: 0.5, by: 1, top: "#683B0C", name: "Ruang main harta karun" },
};

const WASH: Partial<Record<ArtTime, { c: string; o: number }>> = {
  night: { c: "#27306E", o: 0.62 },
  dusk: { c: "#FF9E6E", o: 0.3 },
  rain: { c: "#93A3B8", o: 0.32 },
};

/** Night sky or rainy glass, clipped to one window by a nested <svg>. */
function WindowView({ x, y, w, h, time, rainy }: { x: number; y: number; w: number; h: number; time: ArtTime; rainy: boolean }) {
  const night = time === "night";
  const dusk = time === "dusk";
  if (!night && !rainy && !dusk) return null;
  const sky = night ? "#151B44" : rainy ? "#8796AA" : "#FFB48A";
  return (
    <svg x={x} y={y} width={w} height={h} viewBox={`0 0 ${w} ${h}`} overflow="hidden">
      <rect width={w} height={h} fill={sky} opacity={dusk && !rainy ? 0.55 : 0.92} />
      {night && !rainy &&
        [0.2, 0.55, 0.8, 0.35, 0.7].map((f, i) => (
          <circle key={i} className="sa-twinkle" style={{ animationDelay: `${i * 0.4}s` }} cx={w * f} cy={h * ((i * 0.37 + 0.15) % 0.8)} r={1.6} fill="#FFF6C8" />
        ))}
      {night && !rainy && <circle cx={w * 0.72} cy={h * 0.24} r={Math.min(w, h) * 0.12} fill="#FFEFA6" opacity=".9" />}
      {rainy &&
        Array.from({ length: Math.ceil(w / 9) }, (_, i) => (
          <line
            key={i}
            className="sa-winrain"
            style={{ animationDelay: `${-(i * 0.13) % 0.85}s` }}
            x1={(i * 9 + 4) % w}
            y1={-h - ((i * 23) % h)}
            x2={(i * 9 + 1) % w}
            y2={-h - ((i * 23) % h) + 14}
            stroke="#E8F0FA"
            strokeWidth={1.4}
            strokeLinecap="round"
            opacity=".85"
          />
        ))}
    </svg>
  );
}

export function PhotoBackground({ p, time, rainy }: { p: PhotoBg; time: ArtTime; rainy: boolean }) {
  const w = p.h * p.ar;
  const x = 400 - p.cx * w;
  const y = 450 - p.by * p.h;
  const wash = WASH[rainy && time === "day" ? "rain" : time];
  return (
    <g style={{ pointerEvents: "none" }}>
      <rect x={-200} y={-400} width={1200} height={y + 402} fill={p.top} />
      <image href={asset(p.src)} x={x} y={y} width={w} height={p.h} preserveAspectRatio="none" />
      {(p.windows ?? []).map(([x0, y0, x1, y1], i) => (
        <WindowView key={i} x={x + x0 * w} y={y + y0 * p.h} w={(x1 - x0) * w} h={(y1 - y0) * p.h} time={time} rainy={rainy} />
      ))}
      {wash && <rect x={-200} y={-400} width={1200} height={900} fill={wash.c} opacity={wash.o} style={{ mixBlendMode: "multiply" }} />}
      {time === "night" && <rect x={-200} y={-400} width={1200} height={900} fill="#5A6BD8" opacity=".08" />}
    </g>
  );
}
