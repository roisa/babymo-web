import type { ReactNode } from "react";
import { C, GroundShadow, Shine, crescentPath } from "./kit";

/**
 * Ramadan & Eid elements: fanous lantern, bedug drum, iftar spread, sahur
 * tray, kolak, garland, tasbih, zakat rice, Ramadan calendar, takbiran
 * torches, dates and ketupat. Same clay house style as the rest of the kit.
 */

const STAR = "M0 -9 L2.6 -3 L9 -2.8 L4.2 1.6 L5.6 8 L0 4.6 L-5.6 8 L-4.2 1.6 L-9 -2.8 L-2.6 -3 Z";

/* ───────────────────────── lights ───────────────────────── */

/** Fanous — the ornate Ramadan lantern with coloured glass, glowing. */
export function Fanous() {
  const gold = "#D9A321", goldDark = "#A9781A", goldLight = "#F5CF5C";
  return (
    <g className="sa-sway">
      <circle cx={0} cy={-78} r={62} fill="#FFE4A0" opacity=".32" className="sa-pulse" />
      {/* ring + dome */}
      <circle cx={0} cy={-166} r={7} fill="none" stroke={goldDark} strokeWidth={3.5} />
      <path d="M-26 -132 q 4 -26 26 -30 q 22 4 26 30 z" fill={gold} />
      <path d="M-14 -138 q 4 -16 14 -20" stroke={goldLight} strokeWidth={4} fill="none" strokeLinecap="round" />
      <rect x={-32} y={-134} width={64} height={9} rx={4} fill={goldDark} />
      {/* glass body: three panes (front + two sides) */}
      <path d="M-30 -125 h60 l-6 74 h-48 z" fill={goldDark} />
      <path d="M-25 -120 h14 l-2 64 h-9 z" fill="#5FC3E8" />
      <path d="M-9 -120 h18 l-1 64 h-16 z" fill="#FFD65A" />
      <path d="M11 -120 h14 l-3 64 h-9 z" fill="#FF7A8A" />
      <g className="sa-pulse">
        <ellipse cx={0} cy={-80} rx={7} ry={12} fill="#FFF6D0" />
        <ellipse cx={0} cy={-77} rx={4} ry={7} fill="#FFB42E" />
      </g>
      {/* lattice: arches on the panes */}
      <path d="M-25 -104 q 7 -10 14 0 M-9 -104 q 9 -12 18 0 M11 -104 q 7 -10 14 0" stroke={goldLight} strokeWidth={2.4} fill="none" />
      <path d="M-25 -72 h50" stroke={goldLight} strokeWidth={2} opacity=".8" />
      {/* base */}
      <path d="M-28 -51 h56 l-10 14 h-36 z" fill={gold} />
      <rect x={-12} y={-37} width={24} height={8} rx={3} fill={goldDark} />
      <path d="M0 -29 v14" stroke={goldDark} strokeWidth={3} />
      <circle cx={0} cy={-12} r={4} fill={gold} />
      <rect x={-27} y={-122} width={4} height={60} rx={2} fill="#fff" opacity=".4" />
      <Shine x={-8} y={-150} r={3} />
    </g>
  );
}

/** Garland of crescents and stars strung across a room or a street. */
export function RamadanGarland() {
  const flags = [-150, -100, -50, 0, 50, 100, 150];
  return (
    <g>
      <path d="M-180 -64 Q 0 -10 180 -64" stroke="#8A6A2E" strokeWidth={2.5} fill="none" />
      {flags.map((x, i) => {
        const y = -64 + 54 * (1 - (x / 180) ** 2);
        const isMoon = i % 2 === 0;
        return (
          <g key={x} transform={`translate(${x} ${y})`}>
            <g className="sa-hang" style={{ animationDelay: `${-i * 0.4}s` }}>
              <path d="M0 0 v8" stroke="#8A6A2E" strokeWidth={1.6} />
              {isMoon ? (
                <g transform="translate(0 26) scale(1.45)">
                  <path d={crescentPath(14, 7, -4, 12)} fill="#FFC83D" />
                  <path d={crescentPath(14, 7, -4, 12)} fill="none" stroke="#E0A21E" strokeWidth={1.5} />
                </g>
              ) : (
                <g transform="translate(0 26) scale(1.9)" className="sa-twinkle" style={{ animationDelay: `${i * 0.3}s` }}>
                  <path d={STAR} fill={i % 4 === 1 ? "#FF8FAD" : "#7FD3F5"} />
                </g>
              )}
            </g>
          </g>
        );
      })}
      {[-130, -75, -25, 25, 75, 130].map((x, i) => (
        <circle key={x} cx={x} cy={-64 + 54 * (1 - (x / 180) ** 2) + 1} r={4.5} fill={["#FFE066", "#FF8FAD", "#7FD3F5"][i % 3]} className="sa-pulse" style={{ animationDelay: `${i * 0.35}s` }} />
      ))}
    </g>
  );
}

/** Two bamboo torches for the takbiran walk on Eid eve, flames flicker. */
export function Obor() {
  return (
    <g>
      <GroundShadow rx={60} ry={6} />
      {[-30, 30].map((x, i) => (
        <g key={x} transform={`translate(${x} 0) rotate(${i ? 6 : -6})`}>
          <circle cx={0} cy={-176} r={30} fill="#FFD27A" opacity=".3" className="sa-pulse" />
          <rect x={-6} y={-150} width={12} height={150} rx={5} fill="#C9A15A" />
          <rect x={-6} y={-150} width={4} height={150} rx={2} fill="#E3C27F" />
          {[-110, -60, -14].map((y) => <rect key={y} x={-7} y={y} width={14} height={4} rx={2} fill="#9C7A3C" />)}
          <rect x={-9} y={-160} width={18} height={14} rx={4} fill="#7A5A2A" />
          <g transform="translate(0 -160)">
            <g className="sa-flicker" style={{ animationDelay: `${i * 0.2}s` }}>
              <path d="M0 -38 q 16 18 10 32 q -4 8 -10 8 q -6 0 -10 -8 q -6 -14 10 -32 z" fill="#FF8A2E" />
              <path d="M0 -24 q 8 12 5 20 q -2 4 -5 4 q -3 0 -5 -4 q -3 -8 5 -20 z" fill="#FFE066" />
            </g>
          </g>
        </g>
      ))}
    </g>
  );
}

/* ───────────────────────── mosque ───────────────────────── */

/** Bedug — the big mosque drum on its stand; the beater swings, DUG rings. */
export function Bedug() {
  const wood = "#A8652F", woodDark = "#7A4320", woodLight = "#C98447";
  return (
    <g>
      <GroundShadow rx={120} ry={9} />
      {/* stand */}
      <path d="M-86 0 l14 -64 M86 0 l-14 -64" stroke={woodDark} strokeWidth={12} strokeLinecap="round" />
      <rect x={-96} y={-70} width={192} height={12} rx={5} fill={wood} />
      {/* drum body (side) */}
      <path d="M-80 -150 h140 q 14 46 0 92 h-140 z" fill={wood} />
      <path d="M-80 -146 h138" stroke={woodLight} strokeWidth={6} strokeLinecap="round" opacity=".7" />
      <path d="M-76 -84 h132" stroke={woodDark} strokeWidth={4} opacity=".5" />
      {/* pegs */}
      {[-130, -112, -94, -76].map((y) => <circle key={y} cx={56} cy={y} r={3} fill="#E9D6B5" />)}
      {[-130, -112, -94, -76].map((y) => <circle key={y} cx={-80} cy={y} r={3} fill="#E9D6B5" />)}
      {/* drum face */}
      <ellipse cx={-80} cy={-104} rx={26} ry={47} fill="#F0DDB8" />
      <ellipse cx={-80} cy={-104} rx={26} ry={47} fill="none" stroke={woodDark} strokeWidth={5} />
      <ellipse cx={-84} cy={-112} rx={10} ry={20} fill="#fff" opacity=".35" />
      {/* sound rings */}
      <g fill="none" stroke="#FFB627" strokeWidth={4} strokeLinecap="round">
        <path className="sa-pulse" d="M-122 -132 q -12 28 0 56" />
        <path className="sa-pulse" style={{ animationDelay: ".4s" }} d="M-140 -144 q -18 40 0 80" opacity=".7" />
      </g>
      {/* beater, swings onto the face */}
      <g transform="translate(-30 -40)">
        <g className="sa-wag" style={{ animationDuration: ".9s" }}>
          <rect x={-5} y={-80} width={10} height={80} rx={5} fill={woodLight} transform="rotate(-28)" />
          <circle cx={37} cy={-71} r={13} fill="#E9D6B5" transform="rotate(-28)" />
        </g>
      </g>
    </g>
  );
}

/** Tasbih — a loop of prayer beads with a tassel. */
export function Tasbih() {
  const n = 22;
  const beads = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return [Math.round(Math.cos(a) * 3400) / 100, Math.round((-34 + Math.sin(a) * 18) * 100) / 100] as const;
  });
  return (
    <g className="sa-sway-slow">
      <GroundShadow rx={44} ry={6} />
      {beads.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={6} fill={i === 0 ? "#2E7D5B" : "#3FA57A"} />
          <circle cx={x - 2} cy={y - 2} r={1.8} fill="#fff" opacity=".7" />
        </g>
      ))}
      <path d="M0 -16 v14" stroke="#2E7D5B" strokeWidth={3} />
      <path d="M-6 -4 h12 l4 18 h-20 z" fill="#FFC83D" />
      <path d="M-4 0 l-2 14 M0 0 v14 M4 0 l2 14" stroke="#E0A21E" strokeWidth={1.5} />
    </g>
  );
}

/* ───────────────────────── food ───────────────────────── */

function Dates({ x = 0, y = 0, s = 1 }: { x?: number; y?: number; s?: number }) {
  const spots: [number, number, number][] = [[-24, -14, -20], [-6, -17, 10], [12, -15, -8], [28, -12, 22], [-14, -27, 30], [6, -28, -14], [20, -25, 6]];
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-46 -14 q 46 30 92 0 z" fill="#B8823F" />
      <path d="M-46 -14 q 46 22 92 0" fill="none" stroke="#8E5E28" strokeWidth={3} />
      <ellipse cx={0} cy={-14} rx={46} ry={7} fill="#D9A766" />
      {spots.map(([dx, dy, r], i) => (
        <g key={i} transform={`translate(${dx} ${dy}) rotate(${r})`}>
          <ellipse rx={11} ry={6.5} fill="#6B3418" />
          <ellipse cx={-1} cy={-1.5} rx={8} ry={3.6} fill="#8A4A24" />
          <ellipse cx={-4} cy={-3} rx={2.6} ry={1.3} fill="#fff" opacity=".55" />
        </g>
      ))}
    </g>
  );
}

function WaterGlass({ x = 0, y = 0, s = 1 }: { x?: number; y?: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-15 -58 h30 l-4 56 q 0 2 -2 2 h-18 q -2 0 -2 -2 z" fill="#E3F4FF" opacity=".9" />
      <path d="M-13 -40 h26 l-3 37 h-20 z" fill="#8FD3F5" opacity=".8" />
      <path d="M-15 -58 h30" stroke="#B9D7EA" strokeWidth={3} strokeLinecap="round" />
      <rect x={-10} y={-52} width={4} height={44} rx={2} fill="#fff" opacity=".75" />
    </g>
  );
}

/** Bowl of dates with a glass of water — the sunnah way to break the fast. */
export function DatesWater() {
  return (
    <g>
      <GroundShadow rx={80} ry={7} />
      <Dates x={-18} />
      <WaterGlass x={56} />
    </g>
  );
}

function Kolak({ x = 0, y = 0, s = 1 }: { x?: number; y?: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className="sa-steam"><path d="M-10 -40 q -6 -10 0 -18 q 6 -8 0 -16" stroke="#fff" strokeWidth={4} fill="none" strokeLinecap="round" opacity=".8" /></g>
      <g className="sa-steam" style={{ animationDelay: "1.1s" }}><path d="M10 -40 q -6 -10 0 -18 q 6 -8 0 -16" stroke="#fff" strokeWidth={4} fill="none" strokeLinecap="round" opacity=".8" /></g>
      <path d="M-40 -30 h80 q -4 30 -40 30 q -36 0 -40 -30 z" fill="#5AA9E6" />
      <path d="M-34 -18 q 34 14 68 0" stroke="#fff" strokeWidth={3} fill="none" opacity=".6" />
      <ellipse cx={0} cy={-30} rx={40} ry={8} fill="#C98A3E" />
      <ellipse cx={0} cy={-31} rx={34} ry={5.5} fill="#E1A85A" />
      {/* banana and sweet potato pieces */}
      <ellipse cx={-16} cy={-33} rx={7} ry={4} fill="#FFE9A0" />
      <ellipse cx={6} cy={-34} rx={6} ry={3.6} fill="#FFB347" />
      <ellipse cx={20} cy={-31} rx={6} ry={3.4} fill="#FFE9A0" />
      <path d="M26 -36 l14 -22" stroke="#C9D3DE" strokeWidth={5} strokeLinecap="round" />
    </g>
  );
}

/** A warm bowl of kolak (banana in palm-sugar coconut milk), steaming. */
export function KolakBowl() {
  return (
    <g>
      <GroundShadow rx={50} ry={6} />
      <Kolak />
    </g>
  );
}

function Gorengan({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx={0} cy={-6} rx={38} ry={8} fill="#FFFFFF" />
      <ellipse cx={0} cy={-8} rx={38} ry={6} fill="#EEF3F8" />
      <ellipse cx={-14} cy={-15} rx={14} ry={7} fill="#D98E2B" />
      <ellipse cx={-14} cy={-17} rx={10} ry={4} fill="#EDB04E" />
      <path d="M2 -12 l12 -14 l12 14 z" fill="#E09A33" />
      <path d="M8 -14 l6 -7 l6 7" fill="#F2C063" />
      <ellipse cx={0} cy={-24} rx={12} ry={6} fill="#C77F22" />
      <ellipse cx={-2} cy={-26} rx={7} ry={3} fill="#E4A445" />
    </g>
  );
}

/** Iftar spread on a low table: dates, water, kolak and fried snacks. */
export function IftarTable() {
  return (
    <g>
      <GroundShadow rx={150} ry={9} />
      <rect x={-130} y={-34} width={14} height={34} rx={4} fill={C.b0} />
      <rect x={116} y={-34} width={14} height={34} rx={4} fill={C.b0} />
      <rect x={-146} y={-46} width={292} height={16} rx={7} fill={C.b1} />
      <rect x={-146} y={-46} width={292} height={6} rx={3} fill={C.b2} />
      {/* table runner */}
      <path d="M-60 -46 h120 v10 h-120 z" fill="#2E7D5B" />
      <path d="M-60 -41 h120" stroke="#FFC83D" strokeWidth={2} strokeDasharray="6 5" />
      <Dates x={-88} y={-44} s={0.8} />
      <Kolak x={-6} y={-46} s={0.85} />
      <Gorengan x={72} y={-46} />
      <WaterGlass x={122} y={-46} s={0.8} />
    </g>
  );
}

/** Sahur tray: rice with a fried egg, a glass of milk and a banana. */
export function SahurTray() {
  return (
    <g>
      <GroundShadow rx={100} ry={7} />
      <rect x={-96} y={-14} width={192} height={14} rx={6} fill="#B07443" />
      <rect x={-96} y={-14} width={192} height={5} rx={2.5} fill="#CC9260" />
      {/* plate of rice + egg */}
      <ellipse cx={-30} cy={-18} rx={50} ry={10} fill="#FFFFFF" />
      <ellipse cx={-30} cy={-20} rx={50} ry={7} fill="#EEF3F8" />
      <path d="M-62 -22 q 14 -30 40 -26 q 18 4 18 26 z" fill="#FFFDF5" />
      <path d="M-56 -26 q 10 -16 26 -18" stroke="#fff" strokeWidth={4} fill="none" strokeLinecap="round" />
      <ellipse cx={-12} cy={-24} rx={18} ry={8} fill="#FFFFFF" />
      <circle cx={-12} cy={-25} r={6} fill="#FFB627" />
      <circle cx={-14} cy={-27} r={1.8} fill="#fff" opacity=".8" />
      {/* milk */}
      <g transform="translate(40 -12)">
        <path d="M-13 -50 h26 l-3 48 h-20 z" fill="#E3F4FF" />
        <path d="M-12 -38 h24 l-2 36 h-20 z" fill="#FFFFFF" />
        <rect x={-9} y={-46} width={3.5} height={38} rx={1.7} fill="#fff" opacity=".8" />
      </g>
      {/* banana */}
      <path d="M62 -18 q 20 4 30 -22 q 2 22 -26 28 z" fill="#FFD84A" />
      <path d="M64 -16 q 18 2 26 -18" stroke="#E0B21E" strokeWidth={2} fill="none" />
      <circle cx={92} cy={-40} r={2.5} fill="#6B4A1A" />
    </g>
  );
}

/** Sack of rice for zakat fitrah, with a measuring scoop. */
export function ZakatRice() {
  return (
    <g>
      <GroundShadow rx={80} ry={8} />
      <path d="M-46 0 q -10 -60 6 -100 h80 q 16 40 6 100 z" fill="#F1E3C6" />
      <path d="M-46 0 q -10 -60 6 -100 h12 q -14 50 -6 100 z" fill="#E2CFA6" />
      <path d="M-40 -100 q 40 -18 80 0 q -40 10 -80 0 z" fill="#FFFDF5" />
      {[[-18, -104], [-6, -108], [8, -105], [20, -103], [0, -100]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx={3} ry={1.6} fill="#E6DCC8" />)}
      <path d="M-30 -86 q 30 -10 60 0" stroke="#C9B48A" strokeWidth={3} fill="none" />
      {/* green band with a crescent */}
      <rect x={-38} y={-60} width={76} height={24} rx={6} fill="#2E7D5B" />
      <path d={crescentPath(8, 4, -2, 7)} transform="translate(-2 -48)" fill="#FFC83D" />
      <rect x={-40} y={-92} width={5} height={80} rx={2.5} fill="#fff" opacity=".45" />
      {/* scoop of rice */}
      <g transform="translate(66 0)">
        <path d="M-20 -30 h40 l-4 30 h-32 z" fill="#5AA9E6" />
        <path d="M-20 -30 q 20 -12 40 0 z" fill="#FFFDF5" />
        <path d="M20 -24 h12 q 4 0 4 4 v4" stroke="#3F86C4" strokeWidth={5} fill="none" strokeLinecap="round" />
      </g>
    </g>
  );
}

/** Ramadan calendar on the wall: thirty days, ticked off with stars. */
export function RamadanCalendar({ done = 0 }: { done?: number }) {
  return (
    <g>
      <rect x={-70} y={-170} width={140} height={150} rx={10} fill="#FFFFFF" />
      <rect x={-70} y={-170} width={140} height={36} rx={10} fill="#2E7D5B" />
      <rect x={-70} y={-146} width={140} height={12} fill="#2E7D5B" />
      <path d={crescentPath(10, 5, -3, 8.5)} transform="translate(-48 -152)" fill="#FFC83D" />
      <rect x={-30} y={-158} width={78} height={10} rx={5} fill="#FFFFFF" opacity=".85" />
      {[-40, 40].map((x) => <circle key={x} cx={x} cy={-174} r={5} fill="#7D8A98" />)}
      {Array.from({ length: 30 }, (_, i) => {
        const cx = -58 + (i % 6) * 23.2, cy = -124 + Math.floor(i / 6) * 21;
        return (
          <g key={i} transform={`translate(${cx} ${cy})`}>
            <rect x={0} y={0} width={19} height={17} rx={4} fill={i < done ? "#FFF3C4" : i === done ? "#FFE1E8" : "#EEF3F8"} />
            {i < done && <path d={STAR} transform="translate(9.5 8.5) scale(.75)" fill="#FFB627" />}
            {i === done && <rect x={0} y={0} width={19} height={17} rx={4} fill="none" stroke="#FF5A7E" strokeWidth={2} className="sa-pulse" />}
          </g>
        );
      })}
    </g>
  );
}

/** Woven ketupat hanging in a row — the Eid decoration. */
export function Ketupat() {
  return (
    <g>
      {[-44, 0, 44].map((x, i) => (
        <g key={x} transform={`translate(${x} ${-170 + (i % 2) * 18})`}>
          <path d="M0 -60 v38" stroke="#6E8B3D" strokeWidth={2} />
          <g className="sa-hang" style={{ animationDelay: `${-i * 0.5}s` }}>
            <path d="M0 -22 l22 22 l-22 22 l-22 -22 z" fill="#B9CC52" />
            <path d="M0 -22 l11 11 l-11 11 l-11 -11 z M11 -11 l11 11 l-11 11 l-11 -11 z M-11 -11 l11 11 l-11 11 l-11 -11 z M0 0 l11 11 l-11 11 l-11 -11 z" fill="#D8E57A" />
            <path d="M0 -22 l22 22 l-22 22 l-22 -22 z" fill="none" stroke="#7FA33A" strokeWidth={2.5} />
            <path d="M-11 -11 l22 22 M11 -11 l-22 22" stroke="#7FA33A" strokeWidth={1.6} />
            <path d="M0 22 q -4 10 -10 16 M0 22 q 4 10 10 16" stroke="#7FA33A" strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <Shine x={-6} y={-8} r={2.5} o={0.6} />
          </g>
        </g>
      ))}
    </g>
  );
}
export const RamadanCalendar0 = () => <RamadanCalendar done={0} />;
export const RamadanCalendar1 = () => <RamadanCalendar done={1} />;
export const RamadanCalendarHalf = () => <RamadanCalendar done={15} />;
export const RamadanCalendarFull = () => <RamadanCalendar done={30} />;

/* ───────────────────────── more Ramadan ───────────────────────── */

/** Takjil stall at the Ramadan market: striped awning, trays of treats. */
export function TakjilStall() {
  const stripes = [-120, -80, -40, 0, 40, 80];
  return (
    <g>
      <GroundShadow rx={140} ry={9} />
      {/* poles */}
      <rect x={-122} y={-196} width={8} height={196} rx={3} fill="#9A6A3F" />
      <rect x={114} y={-196} width={8} height={196} rx={3} fill="#9A6A3F" />
      {/* awning, flaps sway */}
      <g className="sa-awning">
        <path d="M-134 -206 h268 l-10 -30 h-248 z" fill="#FFFFFF" />
        {stripes.map((x, i) => (
          <path key={x} d={`M${x - 4} -236 h${i % 2 ? 0 : 40} l${i % 2 ? 0 : 6} 30 h${i % 2 ? 0 : -42} z`} fill="#2E9E6B" />
        ))}
        {[-120, -80, -40, 0, 40, 80, 120].map((x, i) => (
          <path key={x} d={`M${x - 14} -206 q 14 20 28 0 z`} fill={i % 2 ? "#FFFFFF" : "#2E9E6B"} />
        ))}
      </g>
      {/* sign */}
      <rect x={-46} y={-188} width={92} height={26} rx={8} fill="#FFC83D" />
      <text x={0} y={-169} fontSize={17} fontWeight={900} fill="#5A3A00" textAnchor="middle" fontFamily="system-ui, sans-serif">TAKJIL</text>
      {/* counter */}
      <rect x={-130} y={-74} width={260} height={74} rx={8} fill={C.b1} />
      <rect x={-130} y={-74} width={260} height={10} rx={5} fill={C.b2} />
      <path d="M-110 -50 h220" stroke={C.b0} strokeWidth={3} opacity=".4" />
      {/* trays: klepon, kue lapis, es buah, gorengan */}
      <g transform="translate(-92 -76)">
        <ellipse rx={30} ry={7} fill="#E9EEF3" />
        {([[-14, -6], [0, -8], [14, -6], [-7, -14], [7, -14]] as const).map(([x, y], i) => (
          <g key={i}><circle cx={x} cy={y} r={7} fill="#4FB255" /><circle cx={x - 2} cy={y - 3} r={2} fill="#fff" opacity=".6" />{[-3, 0, 3].map((d) => <circle key={d} cx={x + d} cy={y - 7} r={1} fill="#fff" />)}</g>
        ))}
      </g>
      <g transform="translate(-30 -76)">
        <ellipse rx={28} ry={7} fill="#E9EEF3" />
        {[-14, 0, 14].map((x) => (
          <g key={x} transform={`translate(${x} -4)`}>
            {["#FF6B6B", "#FFF3E0", "#FF6B6B", "#FFF3E0", "#FF6B6B"].map((c, j) => <rect key={j} x={-6} y={-18 + j * 3.6} width={12} height={3.6} fill={c} />)}
          </g>
        ))}
      </g>
      <g transform="translate(32 -76)">
        {[-12, 12].map((x) => (
          <g key={x} transform={`translate(${x} 0)`}>
            <path d="M-10 -30 h20 l-3 30 h-14 z" fill="#E3F4FF" opacity=".9" />
            <path d="M-9 -20 h18 l-2 20 h-14 z" fill="#FF8FAD" opacity=".85" />
            <circle cx={-3} cy={-12} r={3} fill="#FFE066" /><circle cx={3} cy={-7} r={3} fill="#74C968" /><circle cx={-2} cy={-4} r={2.5} fill="#FF6B6B" />
          </g>
        ))}
      </g>
      <g transform="translate(96 -76)">
        <ellipse rx={30} ry={7} fill="#E9EEF3" />
        <ellipse cx={-10} cy={-8} rx={12} ry={6} fill="#D98E2B" />
        <ellipse cx={10} cy={-8} rx={12} ry={6} fill="#E8A53C" />
        <ellipse cx={0} cy={-15} rx={11} ry={5} fill="#C77F22" />
      </g>
      {/* string lights */}
      <path d="M-118 -200 Q 0 -176 118 -200" stroke="#8A6A2E" strokeWidth={1.5} fill="none" />
      {[-90, -50, -10, 30, 70, 104].map((x, i) => (
        <circle key={x} cx={x} cy={-200 + 24 * (1 - (x / 118) ** 2)} r={4} fill={["#FFE066", "#FF8FAD", "#7FD3F5"][i % 3]} className="sa-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
      ))}
    </g>
  );
}

/** Hijaiyah letter blocks — alif, ba, ta — drawn as shapes, so they render
 *  the same on every device. */
export function HijaiyahBlocks() {
  const ink = "#2A2B3D";
  const blocks: { x: number; c: string; d: ReactNode }[] = [
    // alif: one tall upright stroke
    { x: -58, c: "#FF8FAD", d: <path d="M0 -22 q 2 22 0 40" stroke={ink} strokeWidth={6} strokeLinecap="round" fill="none" /> },
    // ba: a little boat with one dot below
    { x: 0, c: "#FFC83D", d: <g><path d="M-19 -8 q -3 12 7 12 h24 q 9 0 7 -10" stroke={ink} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" fill="none" /><circle cx={0} cy={14} r={3.6} fill={ink} /></g> },
    // ta: the same boat with two dots on top
    { x: 58, c: "#7FD3F5", d: <g><path d="M-19 -8 q -3 12 7 12 h24 q 9 0 7 -10" stroke={ink} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" fill="none" /><circle cx={-5} cy={-10} r={3.6} fill={ink} /><circle cx={5} cy={-10} r={3.6} fill={ink} /></g> },
  ];
  return (
    <g>
      <GroundShadow rx={96} ry={7} />
      {blocks.map((b, i) => (
        <g key={b.x} transform={`translate(${b.x} -28)`}>
          <g className="sa-wobble" style={{ animationDelay: `${-i * 0.7}s`, animationDuration: "4s" }}>
            <rect x={-26} y={-26} width={52} height={52} rx={9} fill={b.c} />
            <rect x={-26} y={-26} width={52} height={10} rx={5} fill="#fff" opacity=".35" />
            <rect x={-20} y={-20} width={40} height={40} rx={7} fill="#FFFFFF" opacity=".55" />
            {b.d}
          </g>
        </g>
      ))}
    </g>
  );
}

/** Siwak — a twig toothbrush with a frayed tip. */
export function Siwak() {
  return (
    <g className="sa-sway-slow">
      <g transform="rotate(-62)">
        <rect x={-6} y={-100} width={12} height={92} rx={6} fill="#B98A55" />
        <rect x={-6} y={-100} width={4} height={92} rx={2} fill="#D6AE7A" />
        {[-80, -60, -40].map((y) => <path key={y} d={`M-6 ${y} h12`} stroke="#9A6E3E" strokeWidth={1.5} opacity=".6" />)}
        <path d="M-6 -100 l-3 -16 M-3 -100 l-1 -18 M0 -100 v-19 M3 -100 l1 -18 M6 -100 l3 -16" stroke="#F1E3C6" strokeWidth={2.4} strokeLinecap="round" />
      </g>
    </g>
  );
}

/** A see-through plastic bag stuffed with takjil treats. */
export function TakjilBag() {
  return (
    <g className="sa-sway-slow">
      <GroundShadow rx={46} ry={6} />
      {/* handles */}
      <path d="M-24 -96 q -4 -30 12 -30 q 12 0 10 26 M24 -96 q 4 -30 -12 -30 q -12 0 -10 26" stroke="#E3EAF0" strokeWidth={6} fill="none" strokeLinecap="round" />
      {/* treats inside */}
      <circle cx={-16} cy={-30} r={11} fill="#4FB255" />
      <circle cx={-2} cy={-24} r={11} fill="#4FB255" />
      <rect x={4} y={-62} width={26} height={44} rx={5} fill="#FF8FAD" opacity=".9" />
      <rect x={4} y={-62} width={26} height={8} rx={3} fill="#E3F4FF" />
      <ellipse cx={-14} cy={-58} rx={18} ry={10} fill="#D98E2B" transform="rotate(-20 -14 -58)" />
      <path d="M-30 -80 h30 v18 h-30 z" fill="#F2C063" />
      <path d="M-30 -74 h30" stroke="#D99A3A" strokeWidth={2} />
      {/* the bag itself */}
      <path d="M-38 -100 h76 l6 92 q 0 8 -8 8 h-72 q -8 0 -8 -8 z" fill="#FFFFFF" opacity=".5" />
      <path d="M-38 -100 h76" stroke="#E3EAF0" strokeWidth={4} strokeLinecap="round" />
      <path d="M-30 -88 q -4 40 0 76" stroke="#fff" strokeWidth={5} fill="none" opacity=".8" strokeLinecap="round" />
    </g>
  );
}

/** Mosque charity box (kotak infak) with a coin dropping in. */
export function InfaqBox() {
  return (
    <g>
      <GroundShadow rx={50} ry={7} />
      <rect x={-6} y={-46} width={12} height={46} rx={4} fill={C.b0} />
      <rect x={-30} y={-54} width={60} height={10} rx={4} fill={C.b0} />
      <rect x={-40} y={-128} width={80} height={76} rx={10} fill="#2E7D5B" />
      <rect x={-40} y={-128} width={80} height={14} rx={7} fill="#3FA57A" />
      <rect x={-18} y={-124} width={36} height={6} rx={3} fill="#1E4F3A" />
      <path d={crescentPath(13, 6, -4, 11)} transform="translate(-4 -84)" fill="#FFC83D" />
      <path d={STAR} transform="translate(14 -92) scale(.6)" fill="#FFC83D" />
      <rect x={-34} y={-110} width={5} height={52} rx={2.5} fill="#fff" opacity=".3" />
      {/* coin drops into the slot */}
      <g className="sa-coindrop" style={{ animationDuration: "2.4s" }}>
        <g transform="translate(0 -184)">
          <circle r={11} fill="#FFC83D" />
          <circle r={7.5} fill="none" stroke="#E0A21E" strokeWidth={2} />
          <Shine x={-3} y={-4} r={2.4} />
        </g>
      </g>
    </g>
  );
}
