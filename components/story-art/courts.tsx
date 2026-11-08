import type { ReactNode } from "react";
import type { ArtTime } from "@/lib/cerita/illus-types";

/**
 * Tennis court engine — every court background for the Kak Adam stories.
 *
 *   court          blue hard court in the park (the original)
 *   court-green    green hard court with a red surround, neighbourhood club
 *   court-clay     orange clay with a dark-green windscreen and cypress trees
 *   court-grass    striped lawn court by an ivy hedge
 *   court-indoor   indoor hall: roof trusses, hanging lights, high windows
 *   court-stadium  tournament court: stands with a crowd, umpire chair, towers
 *   court-mini     kids' mini-tennis on a schoolyard: short lines, low net
 *   court-wall     practice wall (backboard) with a painted net line
 *   court-baseline the view from behind the baseline, down the whole court
 *
 * The side-view courts share one perspective (the near half up to the net,
 * net along the far edge at y≈280–328), so characters stand at y 428 and
 * tennis props (ballfly, ballrally, swoosh…) line up on every surface.
 * Time of day is a colour wash; outdoor courts switch on floodlights at night.
 */

export const COURT_KINDS = [
  "court",
  "court-green",
  "court-clay",
  "court-grass",
  "court-indoor",
  "court-stadium",
  "court-mini",
  "court-wall",
  "court-baseline",
] as const;
export type CourtKind = (typeof COURT_KINDS)[number];

export const COURT_LABEL: Record<CourtKind, { id: string; en: string }> = {
  court: { id: "Lapangan biru di taman", en: "Blue hard court in the park" },
  "court-green": { id: "Lapangan hijau klub", en: "Green club court" },
  "court-clay": { id: "Lapangan tanah liat", en: "Clay court" },
  "court-grass": { id: "Lapangan rumput", en: "Grass court" },
  "court-indoor": { id: "Lapangan indoor", en: "Indoor court" },
  "court-stadium": { id: "Lapangan stadion turnamen", en: "Tournament stadium court" },
  "court-mini": { id: "Lapangan mini (bola merah)", en: "Mini-tennis court (red ball)" },
  "court-wall": { id: "Dinding latihan", en: "Practice wall" },
  "court-baseline": { id: "Pandangan dari garis belakang", en: "View from the baseline" },
};

export const isCourt = (bg: string): bg is CourtKind => (COURT_KINDS as readonly string[]).includes(bg);

const W = 800;
const H = 450;
const TOP = -340;

interface Look {
  surf: string;
  surround: string;
  line: string;
  stripes?: [string, string];
}

const LOOK: Record<Exclude<CourtKind, "court-baseline">, Look> = {
  court: { surf: "#4C8DDB", surround: "#79C27A", line: "#FFFFFF" },
  "court-green": { surf: "#3F9A5E", surround: "#B04A3C", line: "#FFFFFF" },
  "court-clay": { surf: "#D9733F", surround: "#C7642F", line: "#FFF6EA" },
  "court-grass": { surf: "#6DBE5A", surround: "#5DAA4C", line: "#FFFFFF", stripes: ["#74C562", "#63B452"] },
  "court-indoor": { surf: "#3D7FC4", surround: "#2F8C5E", line: "#FFFFFF" },
  "court-stadium": { surf: "#3E7FD0", surround: "#2E6AAE", line: "#FFFFFF" },
  "court-mini": { surf: "#5BB86C", surround: "#A9D88C", line: "#FFFFFF" },
  "court-wall": { surf: "#4C8DDB", surround: "#79C27A", line: "#FFFFFF" },
};

/* ───────── shared bits ───────── */

function ChainFence({ y = 180, h = 112, color = "#3F7F5B", mesh = "#CFE9D8", posts = "#AEB9C4" }: { y?: number; h?: number; color?: string; mesh?: string; posts?: string }) {
  return (
    <g>
      <rect y={y} width={W} height={h} fill={color} opacity=".9" />
      <g opacity=".35" stroke={mesh} strokeWidth={2}>
        {Array.from({ length: 34 }, (_, i) => (
          <path key={i} d={`M${i * 26 - h} ${y + h} l${h} ${-h} M${i * 26} ${y + h} l${-h} ${-h}`} />
        ))}
      </g>
      {[0, 200, 400, 600, 800].map((x) => (
        <rect key={x} x={x - 5} y={y - 8} width={10} height={h + 12} rx={4} fill={posts} />
      ))}
    </g>
  );
}

function Trees({ y = 170, c1 = "#5DAF62", c2 = "#6CBE6E" }: { y?: number; c1?: string; c2?: string }) {
  return (
    <g>
      {[40, 150, 270, 520, 640, 760].map((x, i) => (
        <g key={x} className="sa-sway-slow" style={{ animationDelay: `${-i * 0.8}s` }}>
          <circle cx={x} cy={y + (i % 2) * 14} r={58} fill={c1} />
          <circle cx={x + 34} cy={y + 22} r={40} fill={c2} />
        </g>
      ))}
    </g>
  );
}

/** The near half of a court, up to the net on the far edge. */
function SideCourt({ look, mini = false }: { look: Look; mini?: boolean }) {
  const shape = "M70 296 H730 L900 450 H-100 Z";
  return (
    <g>
      <rect y={290} width={W} height={H - 290} fill={look.surround} />
      <path d={shape} fill={look.surf} />
      {look.stripes &&
        Array.from({ length: 7 }, (_, i) => {
          const y0 = 296 + i * 22;
          const y1 = y0 + 22;
          const x = (y: number) => 70 - ((y - 296) / 154) * 170;
          const x2 = (y: number) => 730 + ((y - 296) / 154) * 170;
          return <path key={i} d={`M${x(y0)} ${y0} H${x2(y0)} L${x2(y1)} ${y1} H${x(y1)} Z`} fill={look.stripes![i % 2]} />;
        })}
      {mini ? (
        <g stroke="#FF5A5A" strokeWidth={5} fill="none" strokeLinejoin="round">
          <path d="M210 296 H590 L640 410 H160 Z" />
          <path d="M400 296 V410" strokeWidth={4} />
          <path d="M185 352 H615" strokeWidth={4} stroke="#FFC83D" />
        </g>
      ) : (
        <g stroke={look.line} strokeWidth={5} fill="none" strokeLinejoin="round">
          <path d={shape} />
          <path d="M150 296 L40 450 M650 296 L760 450" strokeWidth={4} />
          <path d="M104 360 H696" strokeWidth={4} />
          <path d="M400 330 V360" strokeWidth={4} />
        </g>
      )}
    </g>
  );
}

function Net({ mini = false, dark = false }: { mini?: boolean; dark?: boolean }) {
  if (mini)
    return (
      <g>
        {[200, 600].map((x) => (
          <g key={x}>
            <rect x={x - 3} y={300} width={6} height={30} rx={3} fill="#FF7A3D" />
            <path d={`M${x - 14} 330 h28`} stroke="#FF7A3D" strokeWidth={5} strokeLinecap="round" />
          </g>
        ))}
        <rect x={203} y={304} width={394} height={20} fill="#1E2430" opacity=".18" />
        <g stroke="#2A3242" strokeWidth={1.3} opacity=".55">
          {Array.from({ length: 33 }, (_, i) => <path key={i} d={`M${206 + i * 12} 304 v20`} />)}
          <path d="M203 314 h394" />
        </g>
        <rect x={203} y={300} width={394} height={6} rx={2} fill="#FFC83D" />
      </g>
    );
  return (
    <g>
      <rect x={36} y={276} width={9} height={58} rx={3} fill="#3A3F4A" />
      <rect x={755} y={276} width={9} height={58} rx={3} fill="#3A3F4A" />
      <rect x={44} y={284} width={712} height={44} fill="#1E2430" opacity=".25" />
      <g stroke={dark ? "#9AA6BC" : "#2A3242"} strokeWidth={1.5} opacity=".55">
        {Array.from({ length: 60 }, (_, i) => <path key={i} d={`M${46 + i * 12} 284 v44`} />)}
        {Array.from({ length: 5 }, (_, i) => <path key={i} d={`M44 ${288 + i * 9} h712`} />)}
      </g>
      <rect x={44} y={280} width={712} height={7} rx={2} fill="#FFFFFF" />
      <rect x={396} y={287} width={8} height={41} fill="#FFFFFF" opacity=".85" />
    </g>
  );
}

function Floodlights({ on }: { on: boolean }) {
  return (
    <g>
      {[30, 770].map((x, i) => (
        <g key={x}>
          <rect x={x - 5} y={-60} width={10} height={360} rx={4} fill="#7C8794" />
          <rect x={x - 26} y={-84} width={52} height={26} rx={5} fill="#5C6672" />
          {[-16, 0, 16].map((d) => (
            <circle key={d} cx={x + d} cy={-71} r={6} fill={on ? "#FFF8D6" : "#C9D2DC"} />
          ))}
          {on && (
            <path
              d={i === 0 ? `M${x - 20} -58 L${x + 330} 450 L${x - 60} 450 Z` : `M${x + 20} -58 L${x - 330} 450 L${x + 60} 450 Z`}
              fill="#FFF6C8"
              opacity=".13"
            />
          )}
        </g>
      ))}
    </g>
  );
}

function UmpireChair({ x = 26, y = 330 }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-18 0 L-10 -78 M18 0 L10 -78" stroke="#2E6A4A" strokeWidth={5} strokeLinecap="round" />
      <path d="M-15 -26 h30 M-13 -52 h26" stroke="#2E6A4A" strokeWidth={4} strokeLinecap="round" />
      <rect x={-16} y={-92} width={32} height={14} rx={3} fill="#2E6A4A" />
      <rect x={-16} y={-118} width={6} height={28} rx={2} fill="#2E6A4A" />
      <rect x={-20} y={-126} width={40} height={10} rx={4} fill="#F4F6F8" />
    </g>
  );
}

/* ───────── backdrops ───────── */

function Backdrop({ kind, night }: { kind: CourtKind; night: boolean }) {
  switch (kind) {
    case "court":
    case "court-wall":
      return (
        <g>
          <Trees c1={night ? "#244A3C" : "#5DAF62"} c2={night ? "#2B5544" : "#6CBE6E"} />
          <ChainFence color={night ? "#1F3B33" : "#3F7F5B"} mesh={night ? "#8FB0A0" : "#CFE9D8"} posts={night ? "#6E7C8A" : "#AEB9C4"} />
        </g>
      );
    case "court-green":
      return (
        <g>
          {/* rooftops of the neighbourhood behind the club */}
          {[
            [20, "#E07A5F"],
            [170, "#F2CC8F"],
            [330, "#81B29A"],
            [500, "#E07A5F"],
            [660, "#9AB6E0"],
          ].map(([x, c], i) => (
            <g key={i}>
              <rect x={(x as number) + 10} y={150} width={120} height={60} fill="#FFF4E2" />
              <path d={`M${x} 156 L${(x as number) + 70} 104 L${(x as number) + 140} 156 Z`} fill={c as string} />
              <rect x={(x as number) + 30} y={170} width={22} height={20} rx={3} fill="#9FD8F5" />
              <rect x={(x as number) + 86} y={170} width={22} height={20} rx={3} fill="#9FD8F5" />
            </g>
          ))}
          <ChainFence y={186} h={106} color="#2F6E4E" />
          <rect x={300} y={196} width={200} height={34} rx={8} fill="#FFFFFF" opacity=".92" />
          <text x={400} y={219} textAnchor="middle" fontSize={17} fontWeight={800} fill="#2F6E4E" fontFamily="system-ui, sans-serif">
            KLUB TENIS
          </text>
        </g>
      );
    case "court-clay":
      return (
        <g>
          {/* cypress trees and a small clubhouse */}
          {[60, 130, 680, 750].map((x, i) => (
            <g key={x} className="sa-sway-slow" style={{ animationDelay: `${-i}s` }}>
              <ellipse cx={x} cy={150} rx={26} ry={92} fill="#2F6B45" />
              <ellipse cx={x - 6} cy={140} rx={12} ry={70} fill="#3E8257" />
            </g>
          ))}
          <rect x={250} y={120} width={300} height={90} fill="#F4E6D2" />
          <path d="M236 124 L400 70 L564 124 Z" fill="#C4552D" />
          {[280, 340, 430, 490].map((x) => (
            <rect key={x} x={x} y={146} width={32} height={40} rx={4} fill="#9FD8F5" />
          ))}
          {/* dark-green windscreen with white top band */}
          <rect y={200} width={W} height={92} fill="#24543A" />
          <rect y={200} width={W} height={8} fill="#F4F6F2" />
          <g opacity=".18" stroke="#FFFFFF" strokeWidth={1}>
            {Array.from({ length: 40 }, (_, i) => <path key={i} d={`M${i * 20} 208 v84`} />)}
          </g>
        </g>
      );
    case "court-grass":
      return (
        <g>
          {/* clipped ivy hedge with purple-and-green trim and flower boxes */}
          <rect y={150} width={W} height={142} fill="#2E6B3A" />
          {Array.from({ length: 60 }, (_, i) => (
            <circle key={i} cx={(i * 47) % 820} cy={160 + ((i * 29) % 120)} r={12 + (i % 3) * 3} fill={i % 2 ? "#3A7D45" : "#2A6235"} />
          ))}
          <rect y={140} width={W} height={12} fill="#6B4C9A" />
          <rect y={150} width={W} height={4} fill="#2F7D45" />
          {[100, 300, 500, 700].map((x) => (
            <g key={x}>
              <rect x={x - 40} y={126} width={80} height={16} rx={4} fill="#F4F6F2" />
              {[-28, -14, 0, 14, 28].map((d, j) => (
                <circle key={d} cx={x + d} cy={122} r={6} fill={["#FF8FAD", "#FFFFFF", "#B57BFF", "#FFFFFF", "#FF8FAD"][j]} />
              ))}
            </g>
          ))}
        </g>
      );
    case "court-indoor":
      return (
        <g>
          {/* hall: wall, high windows, roof trusses and hanging lamps */}
          <rect y={TOP} width={W} height={630} fill="#DCE4EC" />
          <rect y={TOP} width={W} height={180} fill="#B9C6D3" />
          <g stroke="#8D9CAD" strokeWidth={6} fill="none">
            {[-160, -40, 80].map((y) => <path key={y} d={`M0 ${y} H800`} />)}
            {Array.from({ length: 9 }, (_, i) => (
              <path key={i} d={`M${i * 100} -160 L${i * 100 + 50} -40 L${i * 100 + 100} -160 M${i * 100 + 50} -40 L${i * 100 + 50} 80`} strokeWidth={3} />
            ))}
          </g>
          {[160, 400, 640].map((x) => (
            <g key={x}>
              <path d={`M${x} 80 v40`} stroke="#6E7C8A" strokeWidth={3} />
              <path d={`M${x - 46} 120 h92 l-14 18 h-64 z`} fill="#5C6672" />
              <ellipse cx={x} cy={140} rx={34} ry={6} fill="#FFF8D6" />
              <path d={`M${x - 30} 140 L${x - 120} 300 H${x + 120} L${x + 30} 140 Z`} fill="#FFF8D6" opacity=".12" />
            </g>
          ))}
          {/* high window strip */}
          {Array.from({ length: 8 }, (_, i) => (
            <rect key={i} className="court-window" x={20 + i * 100} y={-120} width={70} height={46} rx={4} fill="#A9D8F5" />
          ))}
          <rect y={210} width={W} height={82} fill="#2C5E8C" />
          <rect y={210} width={W} height={6} fill="#FFFFFF" opacity=".8" />
        </g>
      );
    case "court-stadium":
      return (
        <g>
          {/* tiers of stands with a crowd */}
          {Array.from({ length: 6 }, (_, r) => (
            <g key={r}>
              <rect y={40 + r * 34} width={W} height={34} fill={r % 2 ? "#3C4A5E" : "#46566C"} />
              {Array.from({ length: 34 }, (_, i) => {
                const x = 10 + i * 24 + (r % 2) * 12;
                const c = ["#FF8FAD", "#FFC83D", "#5BB8F5", "#7BC67B", "#FFFFFF", "#B57BFF", "#FF7A5A"][(i * 7 + r * 3) % 7];
                return (
                  <g key={i} className={(i + r) % 9 === 0 ? "sa-bob" : undefined}>
                    <circle cx={x} cy={52 + r * 34} r={8} fill="#E8C4A0" />
                    <rect x={x - 9} y={58 + r * 34} width={18} height={14} rx={6} fill={c} />
                  </g>
                );
              })}
            </g>
          ))}
          {/* windscreen + scoreboard */}
          <rect y={244} width={W} height={48} fill="#23503A" />
          <rect y={244} width={W} height={5} fill="#FFFFFF" />
          <rect x={300} y={-60} width={200} height={90} rx={8} fill="#1E2430" />
          <rect x={312} y={-48} width={176} height={66} rx={4} fill="#0F1620" />
          <text x={400} y={-20} textAnchor="middle" fontSize={20} fontWeight={800} fill="#FFC83D" fontFamily="system-ui, sans-serif">
            ADAM 6 · 4
          </text>
          <text x={400} y={6} textAnchor="middle" fontSize={14} fontWeight={700} fill="#9FD8F5" fontFamily="system-ui, sans-serif">
            SET 2 · 3 – 3
          </text>
          <UmpireChair x={22} y={334} />
        </g>
      );
    case "court-mini":
      return (
        <g>
          <Trees y={160} c1={night ? "#244A3C" : "#6CBE6E"} c2={night ? "#2B5544" : "#7FCB78"} />
          {/* colourful schoolyard wall */}
          <rect y={210} width={W} height={82} fill="#FFE29A" />
          {Array.from({ length: 10 }, (_, i) => (
            <circle key={i} cx={40 + i * 80} cy={250} r={16} fill={["#FF8FAD", "#5BB8F5", "#7BC67B", "#B57BFF", "#FF9F43"][i % 5]} opacity=".8" />
          ))}
          <rect y={210} width={W} height={8} fill="#F2B52E" />
        </g>
      );
    default:
      return null;
  }
}

/* ───────── views ───────── */

/** Practice wall: a big green backboard where the net would be. */
function PracticeWall() {
  return (
    <g>
      <rect x={60} y={150} width={680} height={180} rx={6} fill="#2F7A55" />
      <rect x={60} y={150} width={680} height={14} fill="#3B8F66" />
      <path d="M60 246 H740" stroke="#FFFFFF" strokeWidth={6} />
      <g opacity=".12" stroke="#FFFFFF" strokeWidth={1}>
        {Array.from({ length: 17 }, (_, i) => <path key={i} d={`M${100 + i * 40} 164 v166`} />)}
      </g>
      {/* worn spots where the balls hit */}
      {[
        [300, 210],
        [420, 222],
        [520, 205],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={14} fill="#D9F04A" opacity=".25" />
      ))}
      <rect x={52} y={140} width={12} height={196} rx={4} fill="#7C8794" />
      <rect x={736} y={140} width={12} height={196} rx={4} fill="#7C8794" />
    </g>
  );
}

/** Looking from behind the near baseline down the whole court. */
function BaselineView({ night }: { night: boolean }) {
  const hw = (y: number) => 110 + ((y - 262) * 170) / 178; // doubles half-width at screen y
  const L = (y: number, f = 1) => 400 - hw(y) * f;
  const R = (y: number, f = 1) => 400 + hw(y) * f;
  const ys = { far: 262, farSvc: 290, net: 318, nearSvc: 360, near: 440 };
  return (
    <g>
      <Trees y={150} c1={night ? "#244A3C" : "#5DAF62"} c2={night ? "#2B5544" : "#6CBE6E"} />
      <ChainFence y={168} h={94} color={night ? "#1F3B33" : "#3F7F5B"} />
      <rect y={262} width={W} height={H - 262} fill="#2E6AAE" />
      <path d={`M${L(ys.far)} ${ys.far} H${R(ys.far)} L${R(H + 10)} ${H + 10} H${L(H + 10)} Z`} fill="#3E7FD0" />
      <g stroke="#FFFFFF" strokeWidth={4} fill="none" strokeLinejoin="round">
        <path d={`M${L(ys.far)} ${ys.far} H${R(ys.far)} L${R(ys.near)} ${ys.near} H${L(ys.near)} Z`} />
        <path d={`M${L(ys.far, 0.75)} ${ys.far} L${L(ys.near, 0.75)} ${ys.near} M${R(ys.far, 0.75)} ${ys.far} L${R(ys.near, 0.75)} ${ys.near}`} strokeWidth={3} />
        <path d={`M${L(ys.farSvc, 0.75)} ${ys.farSvc} H${R(ys.farSvc, 0.75)} M${L(ys.nearSvc, 0.75)} ${ys.nearSvc} H${R(ys.nearSvc, 0.75)}`} strokeWidth={3} />
        <path d={`M400 ${ys.farSvc} V${ys.nearSvc}`} strokeWidth={3} />
        <path d={`M400 ${ys.near} v-10`} strokeWidth={4} />
      </g>
      {/* the net across the middle, seen end-on */}
      <rect x={L(ys.net) - 14} y={ys.net - 30} width={6} height={30} fill="#3A3F4A" />
      <rect x={R(ys.net) + 8} y={ys.net - 30} width={6} height={30} fill="#3A3F4A" />
      <rect x={L(ys.net) - 8} y={ys.net - 26} width={hw(ys.net) * 2 + 16} height={22} fill="#1E2430" opacity=".3" />
      <g stroke="#2A3242" strokeWidth={1} opacity=".5">
        {Array.from({ length: 34 }, (_, i) => <path key={i} d={`M${L(ys.net) - 6 + i * 10} ${ys.net - 26} v22`} />)}
      </g>
      <rect x={L(ys.net) - 8} y={ys.net - 29} width={hw(ys.net) * 2 + 16} height={4} rx={2} fill="#FFFFFF" />
    </g>
  );
}

/* ───────── the court ───────── */

const WASH: Partial<Record<ArtTime, { c: string; o: number }>> = {
  night: { c: "#27306E", o: 0.55 },
  dusk: { c: "#FF9E6E", o: 0.28 },
  rain: { c: "#93A3B8", o: 0.3 },
};

export function TennisCourt({ kind, time, sky, rainy = false }: { kind: CourtKind; time: ArtTime; sky: ReactNode; rainy?: boolean }) {
  const night = time === "night";
  const indoor = kind === "court-indoor";
  const wash = indoor ? (time === "dusk" ? { c: "#FFB07A", o: 0.12 } : null) : WASH[time];
  return (
    <g style={{ pointerEvents: "none" }}>
      {!indoor && sky}
      {kind === "court-baseline" ? (
        <BaselineView night={night} />
      ) : (
        <>
          <Backdrop kind={kind} night={night} />
          {kind === "court-wall" ? <PracticeWall /> : null}
          <SideCourt look={LOOK[kind]} mini={kind === "court-mini"} />
          {kind === "court-wall" ? null : <Net mini={kind === "court-mini"} dark={night} />}
          {time === "rain" && !indoor && (
            <g fill="#BFD8F2" opacity=".5">
              <ellipse cx={560} cy={410} rx={120} ry={14} />
              <ellipse cx={220} cy={380} rx={70} ry={9} />
            </g>
          )}
        </>
      )}
      {indoor && (night || time === "rain" || rainy) && (
        <g>
          {Array.from({ length: 8 }, (_, i) => (
            <rect key={i} x={20 + i * 100} y={-120} width={70} height={46} rx={4} fill={night ? "#1A2046" : "#8796AA"} />
          ))}
        </g>
      )}
      {wash && <rect x={-200} y={-400} width={1200} height={900} fill={wash.c} opacity={wash.o} style={{ mixBlendMode: "multiply" }} />}
      {!indoor && (kind === "court-stadium" || night) && <Floodlights on={night} />}
    </g>
  );
}

export { W as COURT_W, H as COURT_H };
