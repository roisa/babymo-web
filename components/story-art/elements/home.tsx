import { C, GroundShadow, Leaf, Shine, crescentPath } from "./kit";

/* ───────────────────────── toys & room ───────────────────────── */

export function Teddy() {
  const fur = "#C98A50";
  const furDark = "#A96F3B";
  const cream = "#EED3AE";
  return (
    <g>
      <GroundShadow rx={44} ry={7} />
      <g className="sa-bob">
        {/* legs */}
        <ellipse cx={-20} cy={-10} rx={14} ry={11} fill={furDark} />
        <ellipse cx={20} cy={-10} rx={14} ry={11} fill={furDark} />
        <ellipse cx={-22} cy={-9} rx={7} ry={6} fill={cream} />
        <ellipse cx={22} cy={-9} rx={7} ry={6} fill={cream} />
        {/* body */}
        <ellipse cx={0} cy={-32} rx={31} ry={28} fill={fur} />
        <ellipse cx={0} cy={-27} rx={18} ry={16} fill={cream} />
        <ellipse cx={-30} cy={-40} rx={10} ry={16} transform="rotate(30 -30 -40)" fill={furDark} />
        <ellipse cx={30} cy={-40} rx={10} ry={16} transform="rotate(-30 30 -40)" fill={furDark} />
        {/* bow */}
        <path d="M0 -50 L-14 -58 L-14 -42 Z M0 -50 L14 -58 L14 -42 Z" fill="#FF6B8A" />
        <circle cx={0} cy={-50} r={4.5} fill="#E8476E" />
        {/* head */}
        <circle cx={-24} cy={-94} r={13} fill={furDark} />
        <circle cx={24} cy={-94} r={13} fill={furDark} />
        <circle cx={-24} cy={-94} r={7} fill={cream} />
        <circle cx={24} cy={-94} r={7} fill={cream} />
        <circle cx={0} cy={-73} r={30} fill={fur} />
        <path d={crescentPath(30, -7, -7, 30)} transform="translate(0 -73)" fill={furDark} opacity=".35" />
        <ellipse cx={0} cy={-63} rx={13} ry={10} fill={cream} />
        <ellipse cx={0} cy={-67} rx={5} ry={3.6} fill="#3A2A20" />
        <path d="M-5 -60 q5 4 10 0" stroke="#3A2A20" strokeWidth={2} fill="none" strokeLinecap="round" />
        <circle cx={-11} cy={-79} r={3.6} fill="#2A2020" />
        <circle cx={11} cy={-79} r={3.6} fill="#2A2020" />
        <Shine x={-10} y={-80.5} r={1.2} o={1} />
        <Shine x={12} y={-80.5} r={1.2} o={1} />
        <circle cx={-20} cy={-66} r={4.5} fill="#FF8FAD" opacity=".45" />
        <circle cx={20} cy={-66} r={4.5} fill="#FF8FAD" opacity=".45" />
        <ellipse cx={-12} cy={-92} rx={8} ry={4} fill="#fff" opacity=".3" />
      </g>
    </g>
  );
}

export function Lamp() {
  return (
    <g>
      <circle cx={0} cy={-120} r={72} fill="#FFE9A8" opacity=".33" className="sa-pulse" />
      <GroundShadow rx={34} ry={6} />
      <ellipse cx={0} cy={-4} rx={30} ry={8} fill="#5E4530" />
      <ellipse cx={0} cy={-7} rx={25} ry={5} fill="#8A6A4A" />
      <rect x={-4} y={-108} width={8} height={102} rx={3} fill="#8A6A4A" />
      <rect x={-2.5} y={-106} width={2} height={98} fill="#B08A62" />
      {/* light pool under the shade */}
      <ellipse cx={0} cy={-104} rx={30} ry={5} fill="#FFF6D6" />
      <path d="M-40 -110 L-26 -160 Q0 -166 26 -160 L40 -110 Q0 -102 -40 -110Z" fill="#FFD27A" />
      <path d="M12 -163 L26 -160 L40 -110 Q31 -107 22 -106 Z" fill="#F2B955" />
      <path d="M-30 -146 Q0 -150 30 -146" stroke="#F7C266" strokeWidth={3} fill="none" />
      <path d="M-35 -126 Q0 -131 35 -126" stroke="#F7C266" strokeWidth={3} fill="none" />
      <ellipse cx={0} cy={-161} rx={26} ry={4} fill="#FFE3A0" />
      <ellipse cx={-20} cy={-140} rx={4} ry={12} transform="rotate(14 -20 -140)" fill="#fff" opacity=".45" />
    </g>
  );
}

/** Prayer mat (sajadah) seen in perspective. */
export function Mat() {
  return (
    <g>
      <path d="M-94 2 L-71 -41 H71 L94 2 Z" fill="#14703F" />
      <path d="M-92 0 L-70 -40 H70 L92 0 Z" fill="#1E8C53" />
      <path d="M-80 -5 L-63 -35 H63 L80 -5 Z" fill="#2FB36F" stroke="#F2C94C" strokeWidth={2.5} strokeLinejoin="round" />
      <path d="M-24 -9 L-22 -22 Q0 -42 22 -22 L24 -9 Z" fill="#1E8C53" stroke="#F2C94C" strokeWidth={2} strokeLinejoin="round" />
      <path d="M-10 -20 Q0 -30 10 -20" stroke="#F2C94C" strokeWidth={1.6} fill="none" />
      {[-56, -40, 40, 56].map((x) => (
        <path key={x} d={`M${x} -22 l4 -5 l4 5 l-4 5 z`} fill="#F2C94C" opacity=".9" />
      ))}
      {Array.from({ length: 13 }, (_, i) => -84 + i * 14).map((x) => (
        <path key={x} d={`M${x} 1 v6`} stroke="#F2C94C" strokeWidth={2} strokeLinecap="round" />
      ))}
    </g>
  );
}

export function Box() {
  return (
    <g>
      <GroundShadow rx={74} ry={7} />
      {/* back flaps */}
      <path d="M-60 -70 L-46 -98 H44 L60 -70 Z" fill="#9E6838" />
      {/* front & side flaps */}
      <path d="M-60 -70 h120 v70 h-120 z" fill="#C98A50" />
      <path d="M30 -70 h30 v70 h-30 z" fill="#B47640" />
      <path d="M-60 -70 l-20 -24 h62 l8 24 z" fill="#D9A066" />
      <path d="M60 -70 l18 -24 h-62 l-8 24 z" fill="#B47640" />
      <rect x={-60} y={-46} width={120} height={9} fill="#E6BE8A" />
      <rect x={-22} y={-30} width={22} height={8} rx={4} fill="#8E5B30" />
      <path d="M-54 -64 h20" stroke="#E6BE8A" strokeWidth={2} strokeLinecap="round" opacity=".7" />
    </g>
  );
}

export function Books() {
  const stack: [string, string, number, number][] = [
    ["#FF7A7A", "#E05A5A", 0, 0],
    ["#5BB8F5", "#3E98D6", 22, 6],
    ["#7BC67B", "#58A858", 44, -4],
  ];
  return (
    <g>
      <GroundShadow rx={58} ry={6} />
      {stack.map(([c, d, y, dx], i) => {
        const w = 100 - i * 10;
        const x = -w / 2 + dx;
        return (
          <g key={i}>
            <rect x={x} y={-22 - y} width={w} height={20} rx={4} fill={d} />
            <rect x={x} y={-22 - y} width={w - 8} height={20} rx={4} fill={c} />
            <rect x={x + w - 9} y={-19 - y} width={7} height={14} rx={1.5} fill="#FFF8EA" />
            <path d={`M${x + w - 8} ${-15 - y} h5 M${x + w - 8} ${-11 - y} h5`} stroke="#E6D9C0" strokeWidth={1} />
            <rect x={x + 10} y={-18 - y} width={6} height={12} rx={1} fill="#fff" opacity=".55" />
            <rect x={x + 22} y={-18 - y} width={w - 46} height={2.5} rx={1.2} fill="#fff" opacity=".35" />
          </g>
        );
      })}
      <path d="M8 -66 v18 l4 -4 l4 4 v-18" fill="#FFC83D" />
    </g>
  );
}

export function Balloon() {
  return (
    <g className="sa-float">
      <path d="M0 2 C-8 20 8 36 -2 52 C-8 62 2 68 4 72" stroke="#9A9AAA" strokeWidth={2} fill="none" strokeLinecap="round" />
      <path d="M-5 4 L0 -2 L5 4 Z" fill="#E05A5A" />
      <ellipse cx={0} cy={-32} rx={28} ry={34} fill="#FF7A7A" />
      <path d={crescentPath(30, -9, -8, 30)} transform="translate(0 -32) scale(.93 1.13)" fill="#E25858" opacity=".55" />
      <ellipse cx={-11} cy={-46} rx={6} ry={11} transform="rotate(20 -11 -46)" fill="#fff" opacity=".55" />
      <Shine x={-4} y={-58} r={2.4} o={0.6} />
    </g>
  );
}

/** Little alarm clock. Minute hand turns. */
export function Clock() {
  return (
    <g>
      <GroundShadow rx={40} ry={6} />
      <path d="M-26 -8 l-8 8 M26 -8 l8 8" stroke="#C0504F" strokeWidth={6} strokeLinecap="round" />
      <path d="M-34 -78 a14 14 0 0 1 22 -10 z" fill="#FFC83D" />
      <path d="M34 -78 a14 14 0 0 0 -22 -10 z" fill="#FFC83D" />
      <circle cx={0} cy={-42} r={40} fill="#E85D5D" />
      <circle cx={0} cy={-42} r={40} fill="none" stroke="#C94848" strokeWidth={3} />
      <circle cx={0} cy={-42} r={31} fill="#FFFDF7" />
      <path d={crescentPath(31, -6, -6, 31)} transform="translate(0 -42)" fill="#EDE6D6" opacity=".7" />
      {Array.from({ length: 12 }, (_, i) => (
        <rect key={i} x={-1.5} y={-70} width={3} height={i % 3 === 0 ? 7 : 4} rx={1.5} fill="#5A5A6A" transform={`rotate(${i * 30} 0 -42)`} />
      ))}
      <g transform="translate(0 -42)">
        <g className="sa-spin">
          <line x1={0} y1={0} x2={0} y2={-24} stroke={C.ink} strokeWidth={3.5} strokeLinecap="round" />
        </g>
        <line x1={0} y1={0} x2={14} y2={0} stroke={C.ink} strokeWidth={4.5} strokeLinecap="round" />
        <circle r={4} fill="#E85D5D" />
      </g>
      <ellipse cx={-18} cy={-68} rx={9} ry={4} transform="rotate(-30 -18 -68)" fill="#fff" opacity=".45" />
    </g>
  );
}

export function Cup() {
  return (
    <g>
      <GroundShadow rx={34} ry={5} />
      <path d="M22 -58 C46 -60 46 -24 18 -22" stroke="#FF8FAD" strokeWidth={8} fill="none" strokeLinecap="round" />
      <path d="M-26 -70 h52 l-6 66 q0 4 -4 4 h-32 q-4 0 -4 -4 z" fill="#FFB0C4" />
      <path d="M10 -70 h16 l-6 66 q0 4 -4 4 h-8 z" fill="#F496B0" />
      <ellipse cx={0} cy={-70} rx={26} ry={6} fill="#FF8FAD" />
      <ellipse cx={0} cy={-70} rx={21} ry={4} fill="#C98A50" />
      <path d="M0 -26 C-12 -34 -12 -46 -5 -46 C-2 -46 0 -43 0 -41 C0 -43 2 -46 5 -46 C12 -46 12 -34 0 -26Z" fill="#fff" opacity=".9" />
      <rect x={-20} y={-62} width={5} height={40} rx={2.5} fill="#fff" opacity=".35" />
    </g>
  );
}

/** Two folded towels. */
export function Towel() {
  return (
    <g>
      <GroundShadow rx={46} ry={5} />
      <rect x={-42} y={-16} width={84} height={16} rx={7} fill="#7CC4F0" />
      <rect x={-42} y={-16} width={84} height={5} rx={2.5} fill="#A9D9F7" />
      <path d="M-30 -16 v16 M30 -16 v16" stroke="#fff" strokeWidth={3} opacity=".8" />
      <rect x={-36} y={-30} width={72} height={15} rx={7} fill="#FFB0C4" />
      <rect x={-36} y={-30} width={72} height={5} rx={2.5} fill="#FFCEDB" />
      <path d="M-24 -30 v15 M24 -30 v15" stroke="#fff" strokeWidth={3} opacity=".8" />
    </g>
  );
}

const STAR = "M0 -76 L10 -52 L36 -50 L16 -34 L22 -8 L0 -22 L-22 -8 L-16 -34 L-36 -50 L-10 -52 Z";

export function GoldStar() {
  return (
    <g className="sa-float">
      <circle cx={0} cy={-40} r={46} fill="#FFF3B0" opacity=".42" className="sa-pulse" />
      <path d={STAR} fill="#F2AE1C" stroke="#E09A10" strokeWidth={6} strokeLinejoin="round" />
      <path d={STAR} fill="#FFC83D" />
      <path d={STAR} transform="translate(0 -40) scale(.55) translate(0 40)" fill="#FFDE7A" />
      <path d="M-14 -50 L-6 -60" stroke="#fff" strokeWidth={4} strokeLinecap="round" opacity=".7" />
      <Shine x={-20} y={-46} r={2.4} o={0.7} />
    </g>
  );
}

export function Kitten() {
  const fur = "#F4A261";
  const dark = "#DD8540";
  return (
    <g>
      <GroundShadow rx={56} ry={6} />
      <g transform="translate(34 -24)">
        <g className="sa-wag">
          <path d="M0 0 q30 -10 26 -46" stroke={fur} strokeWidth={11} strokeLinecap="round" fill="none" />
          <path d="M22 -36 q4 -6 4 -10" stroke={dark} strokeWidth={11} strokeLinecap="round" fill="none" />
        </g>
      </g>
      <ellipse cx={0} cy={-26} rx={42} ry={27} fill={fur} />
      <path d="M-6 -50 q4 10 0 18 M10 -51 q4 10 0 18 M26 -46 q3 8 0 14" stroke={dark} strokeWidth={4} fill="none" strokeLinecap="round" />
      <ellipse cx={-10} cy={-14} rx={20} ry={11} fill="#FFE2C6" />
      {/* head */}
      <path d="M-58 -74 l5 -28 l18 20 z M-26 -80 l12 -24 l8 28 z" fill={fur} />
      <path d="M-54 -78 l3 -16 l10 12 z M-21 -82 l7 -14 l5 16 z" fill="#FFB3C1" />
      <circle cx={-34} cy={-56} r={28} fill={fur} />
      <path d="M-40 -82 q2 8 0 12 M-32 -83 q2 8 0 12" stroke={dark} strokeWidth={3} fill="none" strokeLinecap="round" />
      <ellipse cx={-35} cy={-45} rx={14} ry={9} fill="#FFE2C6" />
      <g className="sa-blink">
        <circle cx={-45} cy={-59} r={4.6} fill={C.ink} />
        <circle cx={-24} cy={-59} r={4.6} fill={C.ink} />
        <Shine x={-43.5} y={-60.5} r={1.5} o={1} />
        <Shine x={-22.5} y={-60.5} r={1.5} o={1} />
      </g>
      <path d="M-37.5 -50 h5 l-2.5 3 z" fill="#FF8FAD" />
      <path d="M-40 -45 q2.5 3 5 0 q2.5 3 5 0" stroke={C.ink} strokeWidth={2} fill="none" strokeLinecap="round" />
      <path d="M-50 -48 h-14 M-50 -44 l-13 3 M-19 -48 h14 M-19 -44 l13 3" stroke="#B9693A" strokeWidth={1.4} strokeLinecap="round" opacity=".7" />
      <circle cx={-52} cy={-50} r={3.5} fill="#FF8FAD" opacity=".45" />
      <circle cx={-17} cy={-50} r={3.5} fill="#FF8FAD" opacity=".45" />
      {/* paws */}
      <ellipse cx={-24} cy={-4} rx={9} ry={6} fill="#FFE2C6" />
      <ellipse cx={20} cy={-4} rx={9} ry={6} fill="#FFE2C6" />
    </g>
  );
}

/* ───────────────────────── food ───────────────────────── */

export function Cookies() {
  const cookie = (x: number, y: number, k: number) => (
    <g key={k}>
      <circle cx={x} cy={y} r={18} fill="#B9773A" />
      <circle cx={x - 1} cy={y - 1.5} r={16.5} fill="#D99A55" />
      <circle cx={x - 5} cy={y - 6} r={8} fill="#E8B271" opacity=".7" />
      <path d={`M${x - 7} ${y - 4} l3 -2 l2 3 l-3 2 z M${x + 6} ${y + 3} l3 -2 l2 3 l-3 2 z M${x + 3} ${y - 9} l3 -1 l1 3 l-3 1 z M${x - 6} ${y + 7} l3 -1 l1 3 l-3 1 z`} fill="#5A3A22" />
    </g>
  );
  return (
    <g>
      <GroundShadow rx={64} ry={6} />
      <ellipse cx={0} cy={-6} rx={62} ry={12} fill="#D9E2EC" />
      <ellipse cx={0} cy={-8} rx={60} ry={11} fill="#fff" />
      <ellipse cx={0} cy={-8} rx={44} ry={7} fill="#EEF3F8" />
      {cookie(-28, -18, 0)}
      {cookie(28, -18, 2)}
      {cookie(0, -28, 1)}
      <circle cx={46} cy={-10} r={1.8} fill="#C9884A" />
      <circle cx={-46} cy={-9} r={1.4} fill="#C9884A" />
    </g>
  );
}

export function Soup() {
  return (
    <g>
      <g className="sa-steam">
        <path d="M-16 -60 q -10 -16 0 -32 q 10 -16 0 -32" stroke="#fff" strokeWidth={6} fill="none" strokeLinecap="round" opacity=".85" />
        <path d="M14 -60 q -10 -16 0 -32 q 10 -16 0 -32" stroke="#fff" strokeWidth={6} fill="none" strokeLinecap="round" opacity=".85" />
      </g>
      <GroundShadow rx={50} ry={6} />
      <path d="M44 -58 L70 -84" stroke="#C9D3DE" strokeWidth={7} strokeLinecap="round" />
      <path d="M-56 -50 h112 q -6 50 -56 50 q -50 0 -56 -50 z" fill="#5BB8F5" />
      <path d="M20 -50 h36 q -6 50 -56 50 q 30 -8 20 -50 z" fill="#3E98D6" />
      <path d="M-50 -34 h100" stroke="#fff" strokeWidth={4} opacity=".75" />
      <path d="M-46 -26 q6 -4 12 0 q6 4 12 0 q6 -4 12 0 q6 4 12 0 q6 -4 12 0 q6 4 12 0 q6 -4 12 0" stroke="#fff" strokeWidth={2.5} fill="none" opacity=".75" />
      <ellipse cx={0} cy={-50} rx={57} ry={12} fill="#EAF6FF" />
      <ellipse cx={0} cy={-50} rx={51} ry={9} fill="#FFC145" />
      <rect x={-26} y={-54} width={8} height={5} rx={1.5} fill="#FF8A2B" />
      <rect x={10} y={-52} width={8} height={5} rx={1.5} fill="#FF8A2B" />
      <circle cx={-6} cy={-48} r={3} fill="#5BBF5B" />
      <circle cx={26} cy={-50} r={2.5} fill="#5BBF5B" />
      <ellipse cx={-30} cy={-46} rx={6} ry={2.5} fill="#FFE29A" />
      <path d="M38 -52 L46 -58" stroke="#C9D3DE" strokeWidth={7} strokeLinecap="round" />
    </g>
  );
}

export function Fruit() {
  return (
    <g>
      <GroundShadow rx={70} ry={6} />
      {/* back row */}
      <circle cx={-16} cy={-48} r={17} fill="#FF9F43" />
      <circle cx={-18} cy={-51} r={13} fill="#FFB466" />
      <Shine x={-22} y={-56} r={2.5} o={0.6} />
      <g>
        {[
          [14, -60],
          [24, -60],
          [19, -52],
          [9, -52],
          [29, -52],
          [14, -44],
          [24, -44],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={6.5} fill={i % 2 ? "#A35BDB" : "#B57BFF"} />
        ))}
        <path d="M19 -66 v-6" stroke={C.b0} strokeWidth={2.5} strokeLinecap="round" />
      </g>
      {/* front row */}
      <path d="M-34 -32 C-52 -32 -52 -12 -34 -12 C-16 -12 -16 -32 -34 -32Z" fill="#FF5A5A" />
      <path d="M-34 -32 v-6" stroke={C.b0} strokeWidth={2.5} strokeLinecap="round" />
      <Leaf x={-33} y={-36} rot={-20} s={0.5} />
      <Shine x={-40} y={-26} r={2.6} o={0.6} />
      <path d="M-10 -26 C0 -14 26 -14 38 -30 C30 -22 6 -22 -6 -32Z" fill="#FFD447" stroke="#E6B52E" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M44 -36 C30 -36 28 -14 44 -14 C60 -14 58 -36 44 -36Z" fill="#9BD06B" />
      <Shine x={40} y={-28} r={2.4} o={0.6} />
      {/* basket */}
      <path d="M-70 -24 h140 l-10 24 h-120 z" fill="#C98A50" />
      <path d="M-70 -24 h140 v6 h-140 z" fill="#E0B07A" />
      {[-48, -24, 0, 24, 48].map((x) => (
        <path key={x} d={`M${x} -16 v14`} stroke="#A96F3B" strokeWidth={3} strokeLinecap="round" />
      ))}
    </g>
  );
}

export function Veggies() {
  return (
    <g>
      <GroundShadow rx={74} ry={6} />
      {/* lettuce */}
      <circle cx={-52} cy={-62} r={18} fill={C.g0} />
      <circle cx={-56} cy={-66} r={14} fill={C.g2} />
      <path d="M-62 -66 q6 -6 12 0" stroke={C.g0} strokeWidth={2} fill="none" />
      {/* tomatoes */}
      {[-30, 0, 30].map((x, i) => (
        <g key={i} className="sa-bob" style={{ animationDelay: `${i * 0.3}s` }}>
          <circle cx={x} cy={-60} r={18} fill="#E84848" />
          <circle cx={x - 2} cy={-62} r={15} fill="#FF5A5A" />
          <path d={`M${x - 8} -76 l8 4 l8 -4 l-4 8 h-8 z`} fill={C.g1} />
          <Shine x={x - 7} y={-66} r={3} o={0.6} />
        </g>
      ))}
      {/* carrot */}
      <path d="M40 -56 L68 -98 Q74 -96 76 -90 Z" fill="#FF8A2B" />
      <path d="M50 -70 l6 3 M58 -82 l6 3" stroke="#E06E14" strokeWidth={2} strokeLinecap="round" />
      <path d="M72 -96 l8 -16 M74 -94 l16 -10 M73 -95 l2 -18" stroke={C.stem} strokeWidth={5} strokeLinecap="round" />
      {/* crate */}
      <path d="M-70 -50 h140 l-12 50 h-116 z" fill="#B47640" />
      <path d="M-68 -44 h136 v10 h-136 z M-64 -24 h128 v10 h-128 z" fill="#D9A066" />
      <path d="M-70 -50 h140 v6 h-140 z" fill="#E0B07A" />
    </g>
  );
}

/** Glass of water with rising bubbles. */
export function Water() {
  return (
    <g>
      <GroundShadow rx={24} ry={4} />
      <path d="M-20 -80 h40 l-5 78 q0 2 -2 2 h-26 q-2 0 -2 -2 z" fill="#EEF9FE" opacity=".9" />
      <path d="M-17 -50 h34 l-3 46 q0 2 -2 2 h-24 q-2 0 -2 -2 z" fill="#7FD3F5" className="sa-pulse" />
      <ellipse cx={0} cy={-50} rx={17} ry={3.5} fill="#B5E8FB" />
      <path d="M-20 -80 h40 l-5 78 q0 2 -2 2 h-26 q-2 0 -2 -2 z" fill="none" stroke="#9FD3EE" strokeWidth={3} strokeLinejoin="round" />
      <ellipse cx={0} cy={-80} rx={20} ry={3.5} fill="none" stroke="#9FD3EE" strokeWidth={2.5} />
      <rect x={-14} y={-74} width={4} height={62} rx={2} fill="#fff" opacity=".75" />
      <circle cx={6} cy={-20} r={2.4} fill="#fff" opacity=".8" />
      <circle cx={2} cy={-32} r={1.8} fill="#fff" opacity=".8" />
      <circle cx={9} cy={-40} r={1.4} fill="#fff" opacity=".8" />
    </g>
  );
}
