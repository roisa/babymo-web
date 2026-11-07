import { C, GroundShadow, Leaf, Shine, crescentPath } from "./kit";

/* ───────────────────────── plants ───────────────────────── */

export function Tree() {
  return (
    <g>
      <GroundShadow rx={80} ry={10} />
      {/* trunk with root flare + two branches */}
      <path d="M-20 0 C-12 -28 -12 -80 -11 -134 L11 -134 C12 -80 12 -28 22 0 Q1 6 -20 0Z" fill={C.b1} />
      <path d="M3 -134 L11 -134 C12 -80 12 -28 22 0 Q12 4 5 3 C7 -40 6 -92 3 -134Z" fill={C.b0} />
      <path d="M-7 -32 q-3 -9 0 -18 M-3 -78 q-3 -8 0 -15" stroke={C.b0} strokeWidth={2.5} fill="none" strokeLinecap="round" opacity=".7" />
      <path d="M-5 -110 C-18 -120 -30 -132 -40 -152" stroke={C.b1} strokeWidth={9} fill="none" strokeLinecap="round" />
      <path d="M5 -118 C18 -128 28 -142 36 -162" stroke={C.b0} strokeWidth={8} fill="none" strokeLinecap="round" />
      <g className="sa-sway-slow">
        {/* canopy: shadow mass → body → light → shine */}
        <g fill={C.g0}>
          <circle cx={-56} cy={-134} r={46} />
          <circle cx={60} cy={-134} r={46} />
          <circle cx={4} cy={-168} r={72} />
          <circle cx={-26} cy={-110} r={34} />
          <circle cx={30} cy={-108} r={34} />
        </g>
        <g fill={C.g1}>
          <circle cx={-58} cy={-142} r={42} />
          <circle cx={56} cy={-142} r={42} />
          <circle cx={0} cy={-176} r={66} />
          <circle cx={-26} cy={-120} r={30} />
          <circle cx={28} cy={-122} r={30} />
        </g>
        <g fill={C.g2}>
          <circle cx={-14} cy={-196} r={40} />
          <circle cx={-64} cy={-152} r={25} />
          <circle cx={42} cy={-166} r={25} />
        </g>
        <g fill={C.g3} opacity=".9">
          <circle cx={-26} cy={-214} r={15} />
          <circle cx={-72} cy={-162} r={8} />
          <circle cx={34} cy={-178} r={8} />
        </g>
        {/* leaf ticks for texture */}
        <g stroke={C.g0} strokeWidth={3} fill="none" strokeLinecap="round" opacity=".55">
          <path d="M-48 -122 q7 5 14 0" />
          <path d="M18 -146 q7 5 14 0" />
          <path d="M-8 -150 q7 5 14 0" />
          <path d="M50 -124 q7 5 14 0" />
        </g>
        {/* fruit */}
        {[
          [-32, -170],
          [26, -136],
          [-58, -126],
          [14, -210],
          [62, -152],
        ].map(([x, y], i) => (
          <g key={i}>
            <path d={`M${x} ${y! - 8} q2 -5 6 -6`} stroke={C.b0} strokeWidth={2} fill="none" strokeLinecap="round" />
            <circle cx={x} cy={y} r={9} fill={C.red} />
            <circle cx={x! + 2} cy={y! + 2} r={6} fill="#E65252" opacity=".45" />
            <Shine x={x! - 3} y={y! - 3} r={2.6} />
          </g>
        ))}
      </g>
    </g>
  );
}

export function Bush() {
  return (
    <g>
      <GroundShadow rx={86} ry={8} />
      <g className="sa-sway-slow">
        <g fill={C.g0}>
          <circle cx={-30} cy={-28} r={33} />
          <circle cx={22} cy={-36} r={41} />
          <circle cx={58} cy={-22} r={27} />
          <rect x={-62} y={-24} width={146} height={24} rx={12} />
        </g>
        <g fill={C.g1}>
          <circle cx={-31} cy={-32} r={30} />
          <circle cx={20} cy={-42} r={38} />
          <circle cx={56} cy={-26} r={24} />
        </g>
        <g fill={C.g2}>
          <circle cx={-38} cy={-42} r={16} />
          <circle cx={8} cy={-58} r={20} />
          <circle cx={54} cy={-34} r={11} />
        </g>
        <g fill={C.g3} opacity=".9">
          <circle cx={-42} cy={-48} r={6} />
          <circle cx={2} cy={-66} r={7} />
        </g>
        {/* a few blossoms */}
        {[
          [-14, -24],
          [34, -18],
          [44, -52],
          [-46, -16],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            {[0, 72, 144, 216, 288].map((r) => (
              <circle key={r} cx={0} cy={-4} r={3.6} fill="#FFF4F7" transform={`rotate(${r})`} />
            ))}
            <circle r={2.4} fill={C.yellow} />
          </g>
        ))}
      </g>
    </g>
  );
}

const PETALS: [string, string, string][] = [
  ["#FF8FAD", "#FFC6D6", "#E0668A"],
  ["#FFC145", "#FFE29A", "#E09A1A"],
  ["#B57BFF", "#DDBEFF", "#8E52DB"],
];

export function Flowers() {
  return (
    <g>
      <GroundShadow rx={52} ry={6} o={0.1} />
      {[-30, 0, 30].map((x, i) => {
        const h = 70 + i * 14;
        const [c0, c1, c2] = PETALS[i]!;
        return (
          <g key={i} transform={`translate(${x} 0)`}>
            <g className="sa-sway" style={{ animationDelay: `${-i * 0.6}s` }}>
              <path d={`M0 0 C4 -${h * 0.3} -4 -${h * 0.62} 0 -${h}`} stroke={C.stem} strokeWidth={5} fill="none" strokeLinecap="round" />
              <Leaf x={0} y={-h * 0.38} rot={i % 2 ? -150 : -30} s={0.8} />
              <g transform={`translate(0 -${h})`}>
                {[0, 60, 120, 180, 240, 300].map((r) => (
                  <g key={r} transform={`rotate(${r + i * 15})`}>
                    <ellipse cx={0} cy={-12} rx={8.5} ry={13} fill={c0} stroke={c2} strokeWidth={1.2} />
                    <ellipse cx={0} cy={-13} rx={4.2} ry={7.5} fill={c1} />
                  </g>
                ))}
                <circle r={7.5} fill="#F2A31B" />
                <circle r={5.5} fill="#FFD25A" />
                <Shine x={-2} y={-2} r={1.8} o={0.85} />
              </g>
            </g>
          </g>
        );
      })}
    </g>
  );
}

/* ───────────────────────── critters ───────────────────────── */

function Wing({ upper, lower }: { upper: [string, string]; lower: [string, string] }) {
  return (
    <g>
      <path d="M-1 -9 C-10 -36 -42 -42 -38 -18 C-36 -5 -18 -3 -1 -7Z" fill={upper[0]} stroke="#6A3A9E" strokeWidth={1.4} strokeLinejoin="round" />
      <path d="M-5 -12 C-12 -28 -30 -32 -30 -19 C-29 -11 -18 -9 -6 -10Z" fill={upper[1]} />
      <circle cx={-27} cy={-25} r={3.2} fill="#fff" opacity=".9" />
      <circle cx={-19} cy={-31} r={2} fill="#fff" opacity=".9" />
      <path d="M-1 -5 C-18 -4 -30 9 -21 18 C-13 25 -4 11 -1 -2Z" fill={lower[0]} stroke="#B2456E" strokeWidth={1.4} strokeLinejoin="round" />
      <path d="M-4 -2 C-14 0 -22 8 -17 13 C-12 16 -6 8 -4 0Z" fill={lower[1]} />
    </g>
  );
}

export function Butterfly() {
  const upper: [string, string] = ["#B57BFF", "#E2C4FF"];
  const lower: [string, string] = ["#FF8FAD", "#FFD0DD"];
  return (
    <g className="sa-flutter-path">
      <g className="sa-flutter">
        <Wing upper={upper} lower={lower} />
        <g transform="scale(-1 1)">
          <Wing upper={upper} lower={lower} />
        </g>
      </g>
      {/* body */}
      <ellipse cx={0} cy={6} rx={3.2} ry={12} fill="#3A2A4A" />
      <ellipse cx={0} cy={-9} rx={3.8} ry={5} fill="#3A2A4A" />
      <circle cx={0} cy={-17} r={4.6} fill="#3A2A4A" />
      <path d="M-1.5 -20 C-4 -28 -8 -31 -11 -31 M1.5 -20 C4 -28 8 -31 11 -31" stroke="#3A2A4A" strokeWidth={1.6} fill="none" strokeLinecap="round" />
      <circle cx={-11} cy={-31} r={2} fill="#3A2A4A" />
      <circle cx={11} cy={-31} r={2} fill="#3A2A4A" />
      <Shine x={-1.4} y={-18.5} r={1.3} o={0.8} />
    </g>
  );
}

/** Little round bird flying left → right (faces right). */
export function Bird() {
  return (
    <g className="sa-fly">
      <path d="M-14 -1 L-30 -9 Q-25 0 -30 8 Z" fill={C.skyDark} />
      <ellipse cx={0} cy={0} rx={18} ry={12.5} fill={C.sky} />
      <ellipse cx={4} cy={5} rx={11} ry={6} fill="#E4F3FF" />
      <circle cx={14} cy={-6} r={10} fill={C.sky} />
      <path d="M22.5 -8 L31 -4.5 L22.5 -1 Z" fill="#F7A934" />
      <circle cx={17} cy={-8} r={2.5} fill={C.ink} />
      <Shine x={17.8} y={-8.8} r={0.9} o={1} />
      <circle cx={13} cy={-1.5} r={2.6} fill="#FF9EB5" opacity=".7" />
      <Shine x={-4} y={-7} r={4} o={0.35} />
      <g className="sa-wing">
        <path d="M-8 -4 C-8 -26 10 -30 9 -6 Z" fill={C.skyDark} />
        <path d="M-4 -7 C-3 -18 5 -21 5 -8Z" fill="#79BDF0" />
      </g>
    </g>
  );
}

/** Chubby honey bee, faces left. */
export function Bee() {
  return (
    <g className="sa-flutter-path">
      <g className="sa-flutter">
        <ellipse cx={-4} cy={-31} rx={10} ry={15} transform="rotate(-22 -4 -31)" fill="#EAF8FF" opacity=".88" stroke="#B9DFF2" strokeWidth={1.5} />
        <ellipse cx={9} cy={-31} rx={10} ry={15} transform="rotate(22 9 -31)" fill="#EAF8FF" opacity=".88" stroke="#B9DFF2" strokeWidth={1.5} />
      </g>
      <path d="M20 -13 L30 -11 L20 -8Z" fill={C.ink} />
      <ellipse cx={0} cy={-12} rx={22} ry={15} fill={C.yellow} />
      <path d="M-4 -26.75 V2.75 M8 -25.97 V1.97" stroke={C.ink} strokeWidth={6} />
      <path d="M17 -21.4 V-2.6" stroke={C.ink} strokeWidth={4} />
      <ellipse cx={-6} cy={-21} rx={10} ry={3.6} fill="#fff" opacity=".45" />
      {/* face */}
      <circle cx={-14} cy={-15} r={2.8} fill={C.ink} />
      <Shine x={-13.2} y={-16} r={1} o={1} />
      <path d="M-18 -8 q3 3 7 0" stroke={C.ink} strokeWidth={1.8} fill="none" strokeLinecap="round" />
      <circle cx={-8} cy={-9} r={2.6} fill="#FF9EB5" opacity=".7" />
      <path d="M-13 -25 q-3 -9 -10 -11" stroke={C.ink} strokeWidth={2} fill="none" strokeLinecap="round" />
      <circle cx={-23} cy={-36} r={2.6} fill={C.ink} />
    </g>
  );
}

/* ───────────────────────── symbols & water ───────────────────────── */

const HEART = "M0 0 C-14 -10 -42 -28 -42 -50 C-42 -64 -32 -74 -20 -74 C-10 -74 -3 -68 0 -60 C3 -68 10 -74 20 -74 C32 -74 42 -64 42 -50 C42 -28 14 -10 0 0Z";

export function Heart() {
  return (
    <g className="sa-float">
      <path d={HEART} fill={C.rose} />
      <path d="M0 0 C14 -10 42 -28 42 -50 C42 -60 38 -68 31 -72 C35 -50 22 -24 0 -7Z" fill="#E4406A" opacity=".8" />
      <ellipse cx={-24} cy={-56} rx={9} ry={5.5} transform="rotate(-35 -24 -56)" fill="#fff" opacity=".55" />
      <Shine x={-12} y={-64} r={2.6} o={0.55} />
    </g>
  );
}

export function Puddle() {
  return (
    <g>
      <path d="M-90 -6 C-92 -17 -60 -22 -30 -20 C-6 -24 30 -24 58 -20 C88 -18 98 -8 86 -2 C60 7 -60 7 -90 -6Z" fill="#6FA6D2" />
      <path d="M-82 -8 C-82 -15 -56 -18 -30 -17 C-6 -20 30 -20 56 -17 C80 -15 88 -9 78 -5 C56 1 -56 1 -82 -8Z" fill="#9CCBEA" />
      <path d="M-52 -12 h30 M18 -14 h20 M-8 -9 h12" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" opacity=".75" />
      <ellipse cx={-20} cy={-8} rx={18} ry={5} fill="none" stroke="#fff" strokeWidth={2} className="sa-ripple" />
      <ellipse cx={34} cy={-10} rx={14} ry={4} fill="none" stroke="#fff" strokeWidth={2} className="sa-ripple" style={{ animationDelay: "-.8s" }} />
    </g>
  );
}

/* ───────────────────────── sky ───────────────────────── */

/** Smiling sun prop, centre at (0,-80). */
export function SunProp() {
  return (
    <g>
      <circle cx={0} cy={-80} r={76} fill="#FFE58A" opacity=".33" className="sa-pulse" />
      <g className="sa-spin">
        {Array.from({ length: 12 }, (_, i) => (
          <path key={i} d="M-9 -126 Q0 -146 9 -126 L4 -116 L-4 -116Z" fill={C.sun} transform={`rotate(${i * 30} 0 -80)`} />
        ))}
      </g>
      <circle cx={0} cy={-80} r={46} fill="#FFB52E" />
      <circle cx={-2} cy={-82} r={41} fill={C.yellow} />
      <ellipse cx={-16} cy={-100} rx={14} ry={8} transform="rotate(-30 -16 -100)" fill="#fff" opacity=".45" />
      <path d="M-18 -84 q5 -5 10 0 M8 -84 q5 -5 10 0" stroke="#9A5A12" strokeWidth={3} fill="none" strokeLinecap="round" />
      <path d="M-10 -70 q10 9 20 0" stroke="#9A5A12" strokeWidth={3} fill="none" strokeLinecap="round" />
      <circle cx={-24} cy={-72} r={5} fill="#FF8A6B" opacity=".5" />
      <circle cx={24} cy={-72} r={5} fill="#FF8A6B" opacity=".5" />
    </g>
  );
}

/** Full moon prop with soft craters, centre at (0,-60). */
export function MoonProp() {
  return (
    <g className="sa-float">
      <circle cx={0} cy={-60} r={82} fill="#FFF6C8" opacity=".2" />
      <circle cx={0} cy={-60} r={66} fill="#FFF6C8" opacity=".22" />
      <circle cx={0} cy={-60} r={56} fill="#FFF0A8" />
      <path d={crescentPath(56, -16, -4, 54)} transform="translate(0 -60)" fill="#EBD47E" opacity=".7" />
      {[
        [-18, -74, 10],
        [18, -42, 7],
        [22, -82, 5],
        [-22, -40, 4],
      ].map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} fill="#E9D58A" />
          <path d={`M${x! - r! * 0.7} ${y! + r! * 0.7} A${r} ${r} 0 0 0 ${x! + r!} ${y}`} stroke="#FFF9DC" strokeWidth={1.6} fill="none" />
        </g>
      ))}
      <ellipse cx={-26} cy={-88} rx={12} ry={7} transform="rotate(-35 -26 -88)" fill="#fff" opacity=".4" />
    </g>
  );
}

/** Smiling crescent moon prop, centre at (0,-60). */
export function CrescentProp() {
  return (
    <g className="sa-float">
      <circle cx={0} cy={-60} r={74} fill="#FFF6C8" opacity=".16" />
      <g transform="translate(0 -60)">
        <path d={crescentPath(52, 24, -16, 44)} fill="#F4DD7C" />
        <path d={crescentPath(48, 24, -16, 44)} fill="#FFF0A8" />
      </g>
      <circle cx={-31} cy={-62} r={3.5} fill={C.ink} />
      <path d="M-37 -44 q7 6 14 2" stroke={C.ink} strokeWidth={3} fill="none" strokeLinecap="round" />
      <circle cx={-38} cy={-52} r={4.5} fill="#FFB3C1" opacity=".7" />
      <ellipse cx={-36} cy={-88} rx={8} ry={4.5} transform="rotate(-50 -36 -88)" fill="#fff" opacity=".5" />
    </g>
  );
}

/** Grumbly storm cloud with a flashing bolt. */
export function StormCloud() {
  return (
    <g className="sa-bob">
      <g fill="#555A6A">
        <circle cx={-40} cy={-28} r={30} />
        <circle cx={2} cy={-44} r={40} />
        <circle cx={44} cy={-26} r={28} />
        <rect x={-72} y={-30} width={146} height={32} rx={16} />
      </g>
      <g fill="#707687">
        <circle cx={-40} cy={-33} r={25} />
        <circle cx={0} cy={-50} r={34} />
        <circle cx={42} cy={-31} r={23} />
        <rect x={-64} y={-34} width={130} height={24} rx={12} />
      </g>
      <g fill="#8D93A3">
        <circle cx={-12} cy={-66} r={14} />
        <circle cx={-46} cy={-44} r={9} />
      </g>
      <path className="sa-bolt" d="M6 -6 l-14 26 h12 l-8 24 l24 -32 h-12 l8 -18 z" fill="#FFE066" stroke="#F2B300" strokeWidth={2} strokeLinejoin="round" />
    </g>
  );
}

/* ── background sky pieces (used by the Background, not as props) ── */

export function SkySun({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={58} fill="#FFF1A8" opacity=".35" className="sa-pulse" />
      <g className="sa-spin">
        {Array.from({ length: 10 }, (_, i) => (
          <path key={i} d="M-6 -60 Q0 -72 6 -60 L3 -46 L-3 -46Z" fill={C.sun} transform={`rotate(${i * 36})`} />
        ))}
      </g>
      <circle r={38} fill="#FFB52E" />
      <circle cx={-2} cy={-2} r={34} fill="#FFD447" />
      <ellipse cx={-13} cy={-15} rx={11} ry={6} transform="rotate(-35 -13 -15)" fill="#fff" opacity=".5" />
    </g>
  );
}

export function SkyMoon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={62} fill="#FFF3B0" opacity=".14" className="sa-pulse" />
      <circle r={46} fill="#FFF3B0" opacity=".1" />
      <path d={crescentPath(36, 16, -10, 32)} fill="#F2DA78" />
      <path d={crescentPath(33, 16, -10, 32)} fill="#FFEB94" />
      <ellipse cx={-20} cy={-14} rx={6} ry={3.5} transform="rotate(-55 -20 -14)" fill="#fff" opacity=".55" />
    </g>
  );
}

export function SkyCloud({ x, y, s = 1, d = 0, grey = false }: { x: number; y: number; s?: number; d?: number; grey?: boolean }) {
  const top = grey ? "#E4EAF1" : "#FFFFFF";
  const under = grey ? "#C9D3DE" : "#DCEBF8";
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className="sa-drift" style={{ animationDelay: `${d}s` }}>
        <g fill={under}>
          <circle cx={-34} cy={2} r={22} />
          <circle cx={-6} cy={-12} r={30} />
          <circle cx={28} cy={-4} r={26} />
          <rect x={-62} y={-2} width={124} height={24} rx={12} />
        </g>
        <g fill={top}>
          <circle cx={-34} cy={-2} r={21} />
          <circle cx={-6} cy={-16} r={29} />
          <circle cx={28} cy={-8} r={25} />
          <rect x={-60} y={-6} width={118} height={20} rx={10} />
        </g>
        <ellipse cx={-16} cy={-30} rx={11} ry={5} fill="#fff" opacity=".9" />
      </g>
    </g>
  );
}
