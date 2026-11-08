import { C, GroundShadow, Shine } from "./kit";

/**
 * Tennis kit for the Kak Adam stories (shaded element style, see kit.tsx).
 * Ball colours follow the kids' tennis stages: red (mini court, slowest),
 * orange, green, then the yellow match ball.
 */

const BALL: Record<string, [string, string]> = {
  yellow: ["#D9F04A", "#B5CC2E"],
  red: ["#FF5A5A", "#D93F3F"],
  orange: ["#FF9F43", "#E07E22"],
  green: ["#8BD65A", "#5FAF36"],
};

/** A tennis ball; stage balls carry a coloured dot like the real ones. */
export function StageBall({ color = "yellow", r = 12, spin = false }: { color?: keyof typeof BALL; r?: number; spin?: boolean }) {
  const [fill, edge] = BALL[color]!;
  return (
    <g className={spin ? "sa-spin-fast" : undefined}>
      <circle r={r} fill={fill} stroke={edge} strokeWidth={1.6} />
      {color !== "yellow" && <path d={`M${-r} 0 A${r} ${r} 0 0 0 ${r} 0 Z`} fill="#FFE066" opacity=".9" />}
      <path d={`M${-r * 0.75} ${-r * 0.65} q ${r * 0.75} ${r * 0.65} 0 ${r * 1.3} M${r * 0.75} ${-r * 0.65} q ${-r * 0.75} ${r * 0.65} 0 ${r * 1.3}`} stroke="#fff" strokeWidth={r * 0.18} fill="none" />
      <circle cx={-r * 0.35} cy={-r * 0.4} r={r * 0.22} fill="#fff" opacity=".45" />
    </g>
  );
}
export const BallRed = () => <g transform="translate(0 -12)"><StageBall color="red" /></g>;
export const BallOrange = () => <g transform="translate(0 -12)"><StageBall color="orange" /></g>;
export const BallGreen = () => <g transform="translate(0 -12)"><StageBall color="green" /></g>;

/** Junior racket, leaning. */
export function Racket() {
  return (
    <g transform="rotate(-24)">
      <rect x={-5} y={-46} width={10} height={46} rx={4} fill="#2C3E7A" />
      {[-40, -32, -24, -16, -8].map((y) => (
        <path key={y} d={`M-5 ${y} l10 -4`} stroke="#4C64B0" strokeWidth={2} />
      ))}
      <rect x={-6} y={-4} width={12} height={6} rx={3} fill="#1E2C5A" />
      <path d="M-6 -46 L-3 -56 M6 -46 L3 -56" stroke="#2C3E7A" strokeWidth={5} strokeLinecap="round" />
      <ellipse cx={0} cy={-90} rx={30} ry={40} fill="#EEF3FF" fillOpacity=".45" />
      <g stroke="#B9C4DE" strokeWidth={1.2}>
        {[-20, -12, -4, 4, 12, 20].map((x) => <path key={x} d={`M${x} -126 v72`} />)}
        {[-116, -104, -92, -80, -68].map((y) => <path key={y} d={`M-28 ${y} h56`} />)}
      </g>
      <ellipse cx={0} cy={-90} rx={30} ry={40} fill="none" stroke="#2C3E7A" strokeWidth={8} />
      <ellipse cx={0} cy={-90} rx={30} ry={40} fill="none" stroke="#5B78D6" strokeWidth={3} strokeDasharray="30 200" strokeDashoffset={-10} />
      <ellipse cx={-12} cy={-116} rx={6} ry={3} transform="rotate(-30 -12 -116)" fill="#fff" opacity=".6" />
    </g>
  );
}

/** Ball hopper with a fold-down handle. */
export function BallHopper() {
  return (
    <g>
      <GroundShadow rx={52} ry={6} />
      <path d="M-38 0 l6 -12 M38 0 l-6 -12" stroke="#4A5160" strokeWidth={4} strokeLinecap="round" />
      {[
        [-26, -62],
        [-6, -64],
        [14, -62],
        [32, -60],
        [-16, -78],
        [4, -80],
        [24, -76],
        [-6, -94],
        [14, -92],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <StageBall r={11} />
        </g>
      ))}
      <path d="M-46 -64 h92 l-8 52 h-76 z" fill="#3B4252" opacity=".18" />
      <g stroke="#3B4252" strokeWidth={3} fill="none">
        <path d="M-46 -64 h92 l-8 52 h-76 z" />
        {[-30, -12, 6, 24].map((x) => <path key={x} d={`M${x} -64 l-2 52`} />)}
        <path d="M-43 -40 h86" />
      </g>
      <path d="M-46 -64 q 46 -70 92 0" stroke="#3B4252" strokeWidth={4} fill="none" />
      <rect x={-12} y={-134} width={24} height={8} rx={4} fill="#FF7A3D" />
    </g>
  );
}

/** Ball machine that fires balls (the ball loops out of the mouth). */
export function BallMachine() {
  return (
    <g>
      <GroundShadow rx={60} ry={7} />
      <circle cx={-34} cy={-10} r={10} fill="#2A2B33" />
      <circle cx={34} cy={-10} r={10} fill="#2A2B33" />
      <path d="M-50 -20 h100 l-6 -56 h-88 z" fill="#3E8E5A" />
      <path d="M10 -76 h34 l6 56 h-40 z" fill="#2F7A49" />
      <rect x={-40} y={-64} width={44} height={20} rx={6} fill="#1E2430" />
      <circle cx={-28} cy={-54} r={4} fill="#FF5A5A" />
      <circle cx={-14} cy={-54} r={4} fill="#7BC67B" />
      <circle cx={0} cy={-54} r={4} fill="#FFC83D" />
      {/* hopper of balls on top */}
      <path d="M-40 -76 l10 -26 h60 l10 26 z" fill="#5BB8F5" opacity=".35" stroke="#3E98D6" strokeWidth={2} />
      {[-18, -2, 14, -10, 6].map((x, i) => (
        <g key={i} transform={`translate(${x} ${i < 3 ? -86 : -98})`}>
          <StageBall r={9} />
        </g>
      ))}
      {/* barrel */}
      <rect x={40} y={-62} width={34} height={18} rx={9} fill="#2F7A49" />
      <ellipse cx={74} cy={-53} rx={5} ry={9} fill="#1E2430" />
      <g className="sa-ballx" style={{ animationDuration: "1.6s" }}>
        <g className="sa-bally" style={{ animationDuration: "1.6s" }}>
          <g transform="translate(86 -56)">
            <StageBall r={9} spin />
          </g>
        </g>
      </g>
    </g>
  );
}

/** Tennis bag with a racket handle sticking out. */
export function RacketBag() {
  return (
    <g>
      <GroundShadow rx={70} ry={6} />
      <rect x={-64} y={-44} width={128} height={42} rx={21} fill="#E8503F" />
      <rect x={-64} y={-44} width={128} height={14} rx={7} fill="#FF7A6A" />
      <rect x={-52} y={-26} width={104} height={6} rx={3} fill="#1E2430" opacity=".5" />
      <path d="M-40 -42 q40 -24 80 0" stroke="#1E2430" strokeWidth={5} fill="none" strokeLinecap="round" />
      <rect x={44} y={-58} width={30} height={10} rx={5} fill="#2C3E7A" transform="rotate(-18 44 -58)" />
      <circle cx={-44} cy={-22} r={6} fill="#FFC83D" />
    </g>
  );
}

/** Sports water bottle. */
export function SportBottle() {
  return (
    <g>
      <GroundShadow rx={16} ry={4} />
      <rect x={-12} y={-56} width={24} height={56} rx={9} fill="#5BB8F5" />
      <rect x={4} y={-56} width={8} height={56} rx={4} fill="#3E98D6" />
      <rect x={-10} y={-36} width={20} height={14} rx={3} fill="#FFFFFF" opacity=".85" />
      <rect x={-8} y={-66} width={16} height={12} rx={4} fill="#1E2430" />
      <rect x={-3} y={-74} width={6} height={9} rx={2} fill="#FF7A3D" />
      <rect x={-9} y={-52} width={3} height={40} rx={1.5} fill="#fff" opacity=".45" />
    </g>
  );
}

/** A tube (can) of tennis balls. */
export function BallTube() {
  return (
    <g>
      <GroundShadow rx={18} ry={4} />
      <rect x={-15} y={-70} width={30} height={70} rx={6} fill="#EEF3FF" opacity=".85" stroke="#B9C4DE" strokeWidth={2} />
      {[-58, -34, -10].map((y) => (
        <g key={y} transform={`translate(0 ${y + 2})`}>
          <StageBall r={11} />
        </g>
      ))}
      <rect x={-17} y={-76} width={34} height={8} rx={4} fill="#E8503F" />
      <rect x={-17} y={-4} width={34} height={6} rx={3} fill="#E8503F" />
    </g>
  );
}

/** Portable low net for mini-tennis. */
export function MiniNet() {
  return (
    <g>
      <GroundShadow rx={110} ry={6} />
      {[-100, 100].map((x) => (
        <g key={x}>
          <rect x={x - 3} y={-50} width={6} height={50} rx={3} fill="#FF7A3D" />
          <path d={`M${x - 16} 0 h32`} stroke="#FF7A3D" strokeWidth={6} strokeLinecap="round" />
        </g>
      ))}
      <rect x={-97} y={-44} width={194} height={30} fill="#1E2430" opacity=".14" />
      <g stroke="#2A3242" strokeWidth={1.2} opacity=".55">
        {Array.from({ length: 17 }, (_, i) => <path key={i} d={`M${-94 + i * 12} -44 v30`} />)}
        <path d="M-97 -29 h194" />
      </g>
      <rect x={-97} y={-50} width={194} height={7} rx={3} fill="#FFC83D" />
    </g>
  );
}

/** A finisher's medal on a ribbon. */
export function Medal() {
  return (
    <g className="sa-float">
      <path d="M-18 -110 L0 -60 L18 -110" stroke="#E8503F" strokeWidth={10} fill="none" strokeLinejoin="round" />
      <path d="M-18 -110 L-6 -80 M18 -110 L6 -80" stroke="#5BB8F5" strokeWidth={4} />
      <circle cx={0} cy={-42} r={24} fill="#E09A10" />
      <circle cx={0} cy={-43} r={20} fill="#FFC83D" />
      <circle cx={0} cy={-43} r={13} fill="none" stroke="#E6A512" strokeWidth={2} />
      <g transform="translate(0 -43)">
        <StageBall r={7} />
      </g>
      <Shine x={-8} y={-52} r={3} o={0.7} />
    </g>
  );
}

/** Clay-court drag brush (for sweeping the lines after play). */
export function CourtBrush() {
  return (
    <g>
      <GroundShadow rx={70} ry={6} />
      <path d="M-4 -120 L-60 -10" stroke="#9A6A3F" strokeWidth={6} strokeLinecap="round" />
      <path d="M-8 -116 l18 -6" stroke="#9A6A3F" strokeWidth={6} strokeLinecap="round" />
      <rect x={-96} y={-14} width={150} height={12} rx={4} fill="#76492A" />
      <g stroke="#C9A06A" strokeWidth={3} strokeLinecap="round">
        {Array.from({ length: 14 }, (_, i) => <path key={i} d={`M${-90 + i * 10.5} -2 v6`} />)}
      </g>
      <path d="M-100 6 q70 8 160 0" stroke="#E0A060" strokeWidth={3} fill="none" opacity=".6" />
    </g>
  );
}

/** Umpire chair (prop version, for the side of any court). */
export function UmpireChairProp() {
  return (
    <g>
      <GroundShadow rx={34} ry={5} />
      <path d="M-22 0 L-12 -100 M22 0 L12 -100" stroke="#2E6A4A" strokeWidth={7} strokeLinecap="round" />
      <path d="M-18 -34 h36 M-15 -66 h30" stroke="#2E6A4A" strokeWidth={5} strokeLinecap="round" />
      <rect x={-20} y={-116} width={40} height={16} rx={4} fill="#2E6A4A" />
      <rect x={-20} y={-150} width={8} height={36} rx={3} fill="#2E6A4A" />
      <rect x={-26} y={-160} width={52} height={12} rx={5} fill="#F4F6F8" />
      <rect x={-14} y={-128} width={28} height={8} rx={3} fill={C.white} opacity=".5" />
    </g>
  );
}
