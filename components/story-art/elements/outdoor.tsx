import { C, GroundShadow, Shine } from "./kit";

/* ───────────────────────── vehicles ───────────────────────── */

function Wheel({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill="#2A2B33" />
      <circle r={r * 0.82} fill="#3A3B45" />
      <circle r={r * 0.5} fill="#C9D3DE" />
      <circle r={r * 0.5} fill="none" stroke="#9AA8B6" strokeWidth={2} />
      <circle r={r * 0.16} fill="#7D8A98" />
      <circle cx={-r * 0.18} cy={-r * 0.2} r={r * 0.12} fill="#fff" opacity=".7" />
    </g>
  );
}

export function Car({ variant = "car" }: { variant?: "car" | "carmud" | "carshiny" }) {
  return (
    <g>
      <GroundShadow rx={180} ry={10} o={0.14} />
      {/* body */}
      <path d="M-170 -40 q 0 -40 40 -46 l40 -50 q 10 -12 30 -12 h110 q 20 0 32 14 l34 48 q 50 4 50 46 v20 q 0 12 -12 12 h-312 q -12 0 -12 -12 z" fill="#FF6B5A" />
      <path d="M-182 -22 h364 v10 q 0 12 -12 12 h-340 q -12 0 -12 -12 z" fill="#E0503F" />
      <path d="M-160 -64 q 6 -16 34 -20 h288 q 26 4 32 20" stroke="#FF9488" strokeWidth={6} fill="none" strokeLinecap="round" />
      {/* windows */}
      <path d="M-80 -88 l32 -40 h62 v40 z" fill="#9FD8F5" />
      <path d="M30 -88 v-40 h40 q 10 0 16 8 l26 32 z" fill="#9FD8F5" />
      <path d="M-62 -94 l20 -26 h10 l-20 26 z M44 -94 v-26 h8 v26 z" fill="#fff" opacity=".7" />
      <rect x={20} y={-130} width={10} height={44} fill="#E0503F" />
      {/* door line + handle */}
      <path d="M20 -86 v52" stroke="#D9473A" strokeWidth={3} />
      <rect x={-6} y={-74} width={18} height={5} rx={2.5} fill="#B83A2F" />
      {/* lights */}
      <path d="M150 -66 q 18 0 20 12 h-22 z" fill="#FFE58A" />
      <circle cx={-170} cy={-58} r={8} fill="#FFB3A7" />
      <rect x={-182} y={-30} width={14} height={8} rx={4} fill="#C9D3DE" />
      <rect x={168} y={-30} width={14} height={8} rx={4} fill="#C9D3DE" />
      <Wheel x={-100} y={-14} r={34} />
      <Wheel x={100} y={-14} r={34} />
      {variant === "carmud" && (
        <g fill="#8A6A44" opacity=".85">
          <ellipse cx={-120} cy={-40} rx={26} ry={14} />
          <ellipse cx={-60} cy={-58} rx={18} ry={10} />
          <ellipse cx={20} cy={-36} rx={30} ry={12} />
          <ellipse cx={110} cy={-50} rx={22} ry={12} />
          <circle cx={-100} cy={-30} r={20} />
          <circle cx={100} cy={-28} r={20} />
          <ellipse cx={60} cy={-110} rx={14} ry={8} />
          <circle cx={-140} cy={-70} r={5} />
          <circle cx={150} cy={-36} r={6} />
        </g>
      )}
      {variant === "carshiny" && (
        <g fill="#FFFFFF">
          <path className="sa-twinkle" transform="translate(-120 -70)" d="M0 -14 L4 -4 L14 0 L4 4 L0 14 L-4 4 L-14 0 L-4 -4 Z" />
          <path className="sa-twinkle" style={{ animationDelay: ".6s" }} transform="translate(60 -112)" d="M0 -12 L3 -3 L12 0 L3 3 L0 12 L-3 3 L-12 0 L-3 -3 Z" />
          <path className="sa-twinkle" style={{ animationDelay: "1.2s" }} transform="translate(130 -46)" d="M0 -12 L3 -3 L12 0 L3 3 L0 12 L-3 3 L-12 0 L-3 -3 Z" />
        </g>
      )}
    </g>
  );
}
export const CarPlain = () => <Car />;
export const CarMud = () => <Car variant="carmud" />;
export const CarShiny = () => <Car variant="carshiny" />;

export function Bicycle() {
  return (
    <g>
      <GroundShadow rx={110} ry={7} />
      {[-60, 60].map((x) => (
        <g key={x} transform={`translate(${x} -40)`}>
          <circle r={38} fill="none" stroke="#2A2B33" strokeWidth={8} />
          <circle r={34} fill="none" stroke="#4A4B55" strokeWidth={2} />
          <g className="sa-spin-fast">
            {[0, 30, 60, 90, 120, 150].map((r) => (
              <line key={r} x1={-33} x2={33} y1={0} y2={0} stroke="#B9C6D2" strokeWidth={1.6} transform={`rotate(${r})`} />
            ))}
          </g>
          <circle r={5} fill="#9AA8B6" />
        </g>
      ))}
      {/* frame */}
      <path d="M-60 -40 L-20 -90 H40 L60 -40 M-20 -90 L0 -40 H-60 M0 -40 L40 -90" stroke="#FF5A5A" strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M-56 -46 L-20 -88" stroke="#FF9488" strokeWidth={2.5} strokeLinecap="round" />
      {/* fork, bars, seat */}
      <path d="M40 -90 L32 -110 H18" stroke="#5A5B66" strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 -114 h10" stroke="#2A2B33" strokeWidth={8} strokeLinecap="round" />
      <path d="M-20 -90 L-24 -98" stroke="#5A5B66" strokeWidth={6} strokeLinecap="round" />
      <path d="M-40 -102 q 14 -6 30 0 q -2 6 -14 6 q -12 0 -16 -6 z" fill="#2A2B33" />
      {/* crank + pedal */}
      <circle cx={0} cy={-40} r={9} fill="#5A5B66" />
      <path d="M0 -40 l8 12" stroke="#5A5B66" strokeWidth={4} strokeLinecap="round" />
      <rect x={3} y={-30} width={14} height={5} rx={2} fill="#2A2B33" />
      {/* basket */}
      <path d="M46 -118 h34 l-5 22 h-24 z" fill="#E0B07A" stroke="#B9783F" strokeWidth={2} strokeLinejoin="round" />
      <path d="M54 -116 v18 M63 -116 v18 M72 -116 v18" stroke="#B9783F" strokeWidth={1.5} />
    </g>
  );
}

export function Umbrella() {
  return (
    <g className="sa-sway">
      <path d="M0 0 v-120" stroke="#5A4A3A" strokeWidth={6} />
      <path d="M0 4 q 0 14 -14 12" stroke="#5A4A3A" strokeWidth={6} fill="none" strokeLinecap="round" />
      <path d="M-90 -110 q 90 -90 180 0 q -22 -14 -45 0 q -22 -14 -45 0 q -22 -14 -45 0 q -22 -14 -45 0 z" fill="#FFC145" />
      {/* alternating panels */}
      <path d="M0 -173 q -30 20 -45 63 q -22 -14 -45 0 q 30 -52 90 -63 z" fill="#FF8FAD" />
      <path d="M0 -173 q 30 20 45 63 q 22 -14 45 0 q -30 -52 -90 -63 z" fill="#FF8FAD" />
      <path d="M0 -173 q -30 20 -45 63 M0 -173 q 30 20 45 63 M0 -173 v63" stroke="#E6A512" strokeWidth={2} fill="none" opacity=".6" />
      <path d="M-62 -128 q 20 -30 50 -38" stroke="#fff" strokeWidth={5} fill="none" strokeLinecap="round" opacity=".5" />
      <circle cx={0} cy={-176} r={5} fill="#5A4A3A" />
    </g>
  );
}

export function Bench() {
  return (
    <g>
      <GroundShadow rx={88} ry={7} />
      <rect x={-70} y={-40} width={10} height={40} rx={3} fill="#5E6470" />
      <rect x={60} y={-40} width={10} height={40} rx={3} fill="#5E6470" />
      <rect x={-72} y={-80} width={8} height={40} rx={3} fill="#5E6470" />
      <rect x={64} y={-80} width={8} height={40} rx={3} fill="#5E6470" />
      {/* seat planks */}
      <rect x={-84} y={-50} width={168} height={10} rx={4} fill="#A86A36" />
      <rect x={-82} y={-56} width={164} height={10} rx={4} fill="#C98A50" />
      {/* backrest planks */}
      <rect x={-82} y={-90} width={164} height={11} rx={5} fill="#C98A50" />
      <rect x={-82} y={-74} width={164} height={11} rx={5} fill="#B9783F" />
      <path d="M-74 -86 h60 M10 -70 h50 M-70 -52 h40" stroke="#E0B07A" strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

export function Kite() {
  return (
    <g>
      <path d="M0 0 q -60 120 -120 260" stroke="#8A8A8A" strokeWidth={2} fill="none" />
      <g className="sa-sway">
        <path d="M0 -60 l40 50 l-40 70 l-40 -70 z" fill="#FF5A5A" />
        <path d="M0 -60 l40 50 h-40 z M0 60 l-40 -70 h40 z" fill="#FFC145" />
        <path d="M0 -60 v120 M-40 -10 h80" stroke="#B83A2F" strokeWidth={3} />
        <path d="M-30 -14 l22 -32" stroke="#fff" strokeWidth={3} strokeLinecap="round" opacity=".55" />
        <path className="sa-wag" d="M0 60 q 14 20 -6 40 q -18 20 4 44" stroke="#8A8A8A" strokeWidth={2.5} fill="none" />
        {[80, 104, 128].map((y, i) => (
          <path key={y} d={`M${i === 1 ? -14 : -2} ${y} l9 -7 l9 7 l-9 7 z`} fill={["#5BB8F5", "#B57BFF", "#7BC67B"][i]} />
        ))}
      </g>
    </g>
  );
}

/* ───────────────────────── beach ───────────────────────── */

export function Sandcastle() {
  const sand = "#E9C27A";
  const sandD = "#D6A956";
  const sandL = "#F4D79A";
  const crenel = (x: number, y: number, fill: string, k: number) => <rect key={k} x={x} y={y} width={12} height={14} rx={2} fill={fill} />;
  return (
    <g>
      <GroundShadow rx={100} ry={7} />
      <rect x={-70} y={-60} width={140} height={60} fill={sand} />
      <rect x={-90} y={-100} width={46} height={100} rx={3} fill={sandD} />
      <rect x={44} y={-100} width={46} height={100} rx={3} fill={sandD} />
      <rect x={-86} y={-100} width={12} height={100} fill={sandL} opacity=".6" />
      <rect x={48} y={-100} width={12} height={100} fill={sandL} opacity=".6" />
      <rect x={-26} y={-120} width={52} height={60} rx={3} fill={sand} />
      <rect x={-22} y={-120} width={12} height={60} fill={sandL} opacity=".6" />
      {[-90, -70, -50, 44, 64, 84].map((x, i) => crenel(x, -112, sandD, i))}
      {[-26, -6, 14].map((x, i) => crenel(x, -132, sand, 10 + i))}
      <path d="M-14 0 v-30 q 14 -18 28 0 v30 z" fill="#A87B3A" />
      <rect x={-75} y={-80} width={12} height={14} rx={6} fill="#A87B3A" />
      <rect x={63} y={-80} width={12} height={14} rx={6} fill="#A87B3A" />
      {/* shells + texture */}
      <path d="M-50 -30 l-6 -2 q 0 -8 6 -9 q 6 1 6 9 z" fill="#FFC9D6" />
      <circle cx={34} cy={-20} r={3} fill="#fff" opacity=".7" />
      {[
        [-40, -46],
        [20, -40],
        [-60, -14],
        [52, -16],
        [0, -90],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.8} fill="#C39446" />
      ))}
      <g transform="translate(0 -132)">
        <line x1={0} y1={0} x2={0} y2={-40} stroke="#8A5A34" strokeWidth={4} />
        <path className="sa-flag" d="M0 -40 h30 l-6 9 l6 9 h-30 z" fill="#FF5A5A" />
      </g>
    </g>
  );
}

export function Bucket() {
  return (
    <g>
      <GroundShadow rx={40} ry={5} />
      <rect x={30} y={-70} width={8} height={70} rx={4} fill="#FFC145" transform="rotate(20 30 0)" />
      <path d="M22 -2 q 18 4 26 -10 l-12 -6 z" fill="#FFC145" transform="rotate(20 30 0)" />
      <path d="M-30 -56 h60 l-8 56 h-44 z" fill="#FF5A5A" />
      <path d="M10 -56 h20 l-8 56 h-14 z" fill="#E04848" />
      <rect x={-33} y={-60} width={66} height={9} rx={4} fill="#FF7A7A" />
      <path d="M-30 -56 q 30 -40 60 0" stroke="#B83A2F" strokeWidth={3.5} fill="none" />
      <path d="M-14 -34 l7 -6 l7 6 l-7 6 z" fill="#FFE29A" />
      <rect x={-22} y={-48} width={4} height={38} rx={2} fill="#fff" opacity=".35" />
    </g>
  );
}

export function Shell() {
  return (
    <g>
      <GroundShadow rx={24} ry={4} />
      <path d="M0 0 l-24 -8 q 0 -32 24 -36 q 24 4 24 36 z" fill="#F7A6BA" />
      <path d="M0 -2 l-20 -8 q 1 -28 20 -32 q 19 4 20 32 z" fill="#FFC9D6" />
      <path d="M0 -2 V-42 M-9 -4 l-6 -32 M9 -4 l6 -32 M-16 -7 l-6 -22 M16 -7 l6 -22" stroke="#F08BA5" strokeWidth={2.4} strokeLinecap="round" />
      <path d="M-10 1 h20 l-4 -8 h-12 z" fill="#F7A6BA" />
      <Shine x={-8} y={-30} r={3} o={0.6} />
    </g>
  );
}

export function Crab() {
  return (
    <g className="sa-crab">
      <GroundShadow rx={44} ry={5} />
      {/* legs */}
      <path d="M-24 -8 l-14 10 M-14 -4 l-10 12 M-30 -14 l-16 4 M24 -8 l14 10 M14 -4 l10 12 M30 -14 l16 4" stroke="#D94A38" strokeWidth={5} strokeLinecap="round" />
      {/* claws */}
      <path d="M-30 -24 q -16 -4 -20 -18" stroke="#FF6B5A" strokeWidth={7} fill="none" strokeLinecap="round" />
      <path d="M30 -24 q 16 -4 20 -18" stroke="#FF6B5A" strokeWidth={7} fill="none" strokeLinecap="round" />
      <path d="M-50 -42 q -12 -6 -8 -18 q 6 6 14 4 q -2 -10 6 -12 q 6 14 -12 26 z" fill="#FF6B5A" />
      <path d="M50 -42 q 12 -6 8 -18 q -6 6 -14 4 q 2 -10 -6 -12 q -6 14 12 26 z" fill="#FF6B5A" />
      {/* shell */}
      <ellipse cx={0} cy={-20} rx={34} ry={20} fill="#E8503F" />
      <ellipse cx={0} cy={-23} rx={31} ry={16} fill="#FF6B5A" />
      <ellipse cx={-12} cy={-30} rx={10} ry={4} fill="#fff" opacity=".35" />
      <circle cx={-16} cy={-18} r={2} fill="#E8503F" />
      <circle cx={16} cy={-18} r={2} fill="#E8503F" />
      {/* eyes on stalks */}
      <path d="M-10 -36 v-6 M10 -36 v-6" stroke="#E8503F" strokeWidth={4} strokeLinecap="round" />
      <circle cx={-11} cy={-46} r={6.5} fill="#fff" stroke="#E8503F" strokeWidth={1.6} />
      <circle cx={11} cy={-46} r={6.5} fill="#fff" stroke="#E8503F" strokeWidth={1.6} />
      <circle cx={-10} cy={-45} r={3.4} fill={C.ink} />
      <circle cx={12} cy={-45} r={3.4} fill={C.ink} />
      <path d="M-6 -14 q 6 5 12 0" stroke="#A8322A" strokeWidth={2.2} fill="none" strokeLinecap="round" />
      <circle cx={-20} cy={-14} r={3.5} fill="#FFB3C1" opacity=".6" />
      <circle cx={20} cy={-14} r={3.5} fill="#FFB3C1" opacity=".6" />
    </g>
  );
}

/* ───────────────────────── camping & night ───────────────────────── */

export function Tent() {
  return (
    <g>
      <GroundShadow rx={140} ry={8} />
      <path d="M-130 0 l130 -150 l130 150 z" fill="#2E8FC2" />
      <path d="M-130 0 l130 -150 l-30 150 z" fill="#5BB8F5" />
      <path d="M-110 -10 l104 -124" stroke="#9AD3F7" strokeWidth={4} strokeLinecap="round" opacity=".7" />
      {/* doorway */}
      <path d="M0 -150 l-36 150 h72 z" fill="#1D5E80" />
      <path className="sa-flap" d="M0 -150 l-36 150 h36 z" fill="#2B7FA8" />
      <path d="M0 -150 l36 150" stroke="#2B7FA8" strokeWidth={3} />
      {/* bunting + pole + pegs */}
      <path d="M-70 -70 q 70 -30 140 0" stroke="#fff" strokeWidth={1.5} fill="none" opacity=".7" />
      {[-56, -28, 0, 28, 56].map((x, i) => (
        <path key={x} d={`M${x - 6} ${-76 - (i === 2 ? 8 : i % 2 ? 6 : 0)} h12 l-6 10 z`} fill={["#FFC145", "#FF8FAD", "#7BC67B", "#FF8FAD", "#FFC145"][i]} />
      ))}
      <path d="M0 -150 v-22" stroke="#8A5A34" strokeWidth={5} strokeLinecap="round" />
      <path d="M0 -172 l16 5 l-16 5 z" fill="#FF5A5A" />
      <path d="M-130 0 l-12 4 M130 0 l12 4" stroke="#8A5A34" strokeWidth={4} strokeLinecap="round" />
    </g>
  );
}

export function Lantern() {
  return (
    <g className="sa-sway">
      <circle cx={0} cy={-70} r={48} fill="#FFE9A8" opacity=".35" className="sa-pulse" />
      <path d="M-10 -122 q 10 -16 20 0" stroke="#8A6A2E" strokeWidth={3} fill="none" />
      <rect x={-14} y={-124} width={28} height={10} rx={4} fill="#B98A1E" />
      <rect x={-22} y={-114} width={44} height={74} rx={14} fill="#E6B52E" />
      <rect x={-15} y={-104} width={30} height={54} rx={10} fill="#FFF3B0" />
      <path d="M-15 -86 h30 M-15 -68 h30 M0 -104 v54" stroke="#E6B52E" strokeWidth={2} />
      <ellipse cx={0} cy={-74} rx={6} ry={10} fill="#FFB52E" className="sa-pulse" />
      <rect x={-16} y={-42} width={32} height={8} rx={4} fill="#B98A1E" />
      <rect x={-18} y={-108} width={4} height={60} rx={2} fill="#fff" opacity=".35" />
    </g>
  );
}

/** Umi resting in bed under a blanket (used in "Hari Umi Sakit"). */
export function Sleeper() {
  return (
    <g>
      <GroundShadow rx={160} ry={8} />
      {/* bed frame + headboard */}
      <rect x={-88} y={-110} width={16} height={110} rx={6} fill="#A86A36" />
      <rect x={-84} y={-104} width={6} height={98} rx={3} fill="#C98A50" />
      <rect x={-80} y={-34} width={276} height={24} rx={8} fill="#C98A50" />
      <rect x={188} y={-60} width={14} height={60} rx={6} fill="#A86A36" />
      <rect x={-80} y={-12} width={10} height={12} fill="#8E5A2E" />
      <rect x={184} y={-12} width={10} height={12} fill="#8E5A2E" />
      {/* mattress + pillow */}
      <rect x={-72} y={-48} width={262} height={18} rx={8} fill="#F3F6FA" />
      <ellipse cx={-34} cy={-56} rx={40} ry={16} fill="#FFFFFF" />
      <ellipse cx={-34} cy={-52} rx={40} ry={10} fill="#E6EDF5" opacity=".7" />
      {/* Umi: hijab + face on the pillow */}
      <ellipse cx={-30} cy={-62} rx={30} ry={27} fill="#B57BFF" />
      <ellipse cx={-26} cy={-58} rx={20} ry={19} fill="#F3CBA5" />
      <path d="M-36 -60 q 5 4 10 0 M-22 -60 q 5 4 10 0" stroke="#5A3A2A" strokeWidth={2.4} fill="none" strokeLinecap="round" />
      <path d="M-29 -49 q 4 3 8 0" stroke="#C0605A" strokeWidth={2.4} fill="none" strokeLinecap="round" />
      <circle cx={-38} cy={-52} r={3.5} fill="#FF9FB0" opacity=".6" />
      <circle cx={-14} cy={-52} r={3.5} fill="#FF9FB0" opacity=".6" />
      <path d="M-50 -76 q 18 -14 40 -4" stroke="#D2A8FF" strokeWidth={4} fill="none" strokeLinecap="round" opacity=".8" />
      {/* blanket */}
      <g className="sa-breathe-blanket">
        <path d="M-4 -44 q 4 -30 70 -32 q 90 -2 122 20 q 6 6 2 16 v14 h-194 z" fill="#6FB2F2" />
        <path d="M-4 -44 q 4 -30 70 -32 q 90 -2 122 20" stroke="#8FC9FF" strokeWidth={8} fill="none" strokeLinecap="round" />
        <path d="M-6 -46 q 8 4 10 -10" stroke="#fff" strokeWidth={6} fill="none" strokeLinecap="round" />
        {[
          [40, -54],
          [90, -58],
          [140, -46],
          [70, -36],
          [120, -32],
        ].map(([x, y], i) => (
          <path key={i} transform={`translate(${x} ${y})`} d="M0 -6 L1.8 -1.8 L6 0 L1.8 1.8 L0 6 L-1.8 1.8 L-6 0 L-1.8 -1.8 Z" fill="#fff" opacity=".8" />
        ))}
      </g>
    </g>
  );
}

/* ───────────────────────── play ───────────────────────── */

const BLOCK_COLS = ["#FF5A5A", "#5BB8F5", "#FFC145", "#7BC67B", "#B57BFF", "#FF9F43", "#5BB8F5"];

function Block({ x, y, w = 44, h = 30, c, rot = 0, cx = 0, cy = 0, k }: { x: number; y: number; w?: number; h?: number; c: string; rot?: number; cx?: number; cy?: number; k?: number }) {
  return (
    <g key={k} transform={rot ? `rotate(${rot} ${cx} ${cy})` : undefined}>
      <rect x={x} y={y} width={w} height={h} rx={5} fill={c} />
      <rect x={x} y={y} width={w} height={h} rx={5} fill="#000" opacity=".12" />
      <rect x={x} y={y} width={w - 4} height={h - 4} rx={4} fill={c} />
      <rect x={x + 4} y={y + 3} width={w * 0.45} height={3} rx={1.5} fill="#fff" opacity=".5" />
      <circle cx={x + w / 2 - 2} cy={y + h / 2 - 1} r={Math.min(w, h) * 0.18} fill="#fff" opacity=".35" />
    </g>
  );
}

export function Blocks({ variant = "blocks" }: { variant?: "blocks" | "blockstall" | "blocksfall" }) {
  if (variant === "blocksfall")
    return (
      <g>
        <GroundShadow rx={110} ry={6} />
        {BLOCK_COLS.map((c, i) => (
          <Block key={i} k={i} x={-90 + i * 28} y={-28 - (i % 3) * 6} w={30} h={26} c={c} rot={((i * 37) % 50) - 25} cx={-75 + i * 28} cy={-15} />
        ))}
      </g>
    );
  const n = variant === "blockstall" ? 7 : 3;
  return (
    <g>
      <GroundShadow rx={34} ry={5} />
      <g className={variant === "blockstall" ? "sa-sway-slow" : undefined}>
        {BLOCK_COLS.slice(0, n).map((c, i) => (
          <Block key={i} k={i} x={-22 + (i % 2 ? 2 : -1)} y={-30 - i * 30} c={c} />
        ))}
      </g>
    </g>
  );
}
export const BlocksLow = () => <Blocks />;
export const BlocksTall = () => <Blocks variant="blockstall" />;
export const BlocksFall = () => <Blocks variant="blocksfall" />;

/** A child's crayon drawing on paper (flowers + a cat), pinned with tape. */
export function Drawing() {
  return (
    <g className="sa-bob">
      <rect x={-48} y={-86} width={100} height={90} rx={4} fill="#000" opacity=".08" />
      <rect x={-50} y={-90} width={100} height={90} rx={4} fill="#FFFDF6" />
      <rect x={-12} y={-96} width={24} height={10} rx={2} fill="#FFE29A" opacity=".85" transform="rotate(-6 0 -91)" />
      <path d="M-50 -14 q 25 -6 50 0 q 25 6 50 0" stroke="#8BD27A" strokeWidth={5} fill="none" strokeLinecap="round" />
      <circle cx={30} cy={-72} r={9} fill="#FFC145" />
      <path d="M30 -86 v4 M44 -72 h-4 M30 -58 v-4 M16 -72 h4" stroke="#FFC145" strokeWidth={2.5} strokeLinecap="round" />
      <path d="M-20 -12 v-38" stroke="#5BBF5B" strokeWidth={3.5} strokeLinecap="round" />
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx={-20} cy={-66} rx={5} ry={8} fill="#FF8FAD" transform={`rotate(${r} -20 -58)`} />
      ))}
      <circle cx={-20} cy={-58} r={5} fill="#8A5A34" />
      <path d="M6 -12 v-24" stroke="#5BBF5B" strokeWidth={3.5} strokeLinecap="round" />
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx={6} cy={-48} rx={4} ry={6} fill="#B57BFF" transform={`rotate(${r} 6 -42)`} />
      ))}
      <circle cx={6} cy={-42} r={3.5} fill="#FFC145" />
      <ellipse cx={34} cy={-18} rx={10} ry={7} fill="#F4A261" />
      <circle cx={27} cy={-26} r={6} fill="#F4A261" />
      <path d="M23 -30 l1 -6 l4 4 M29 -31 l2 -5 l2 5" stroke="#F4A261" strokeWidth={2} fill="#F4A261" strokeLinejoin="round" />
      <path d="M44 -18 q 6 -2 6 -10" stroke="#F4A261" strokeWidth={3} fill="none" strokeLinecap="round" />
    </g>
  );
}

/* ───────────────────────── faith ───────────────────────── */

/** The Qur'an open on a wooden rehal stand, softly glowing. */
export function Quran() {
  return (
    <g>
      <circle className="sa-pulse" cx={0} cy={-80} r={78} fill="#FFF3B0" opacity=".35" />
      <GroundShadow rx={64} ry={6} />
      {/* rehal (X-shaped stand) */}
      <path d="M-60 0 l50 -40 M60 0 l-50 -40" stroke="#8E5A2E" strokeWidth={9} strokeLinecap="round" />
      <path d="M-60 -40 l50 40 M60 -40 l-50 40" stroke="#B07443" strokeWidth={9} strokeLinecap="round" />
      {/* cover */}
      <path d="M-72 -44 q 36 -16 72 0 q 36 -16 72 0 v-14 q -36 -16 -72 0 q -36 -16 -72 0 z" fill="#1E6B4B" />
      <path d="M-72 -52 q 36 -16 72 0 q 36 -16 72 0" stroke="#E6C15C" strokeWidth={2} fill="none" />
      {/* pages */}
      <path d="M-64 -60 q 32 -12 64 0 v-58 q -32 -12 -64 0 z" fill="#FFF8E7" />
      <path d="M64 -60 q -32 -12 -64 0 v-58 q 32 -12 64 0 z" fill="#FFF8E7" />
      <path d="M-4 -60 q 2 -2 4 0 v-58 q -2 -2 -4 0 z M4 -60 q -2 -2 -4 0 v-58 q 2 -2 4 0 z" fill="#E9DCC0" />
      <path d="M-64 -60 q 32 -12 64 0 v-58 q -32 -12 -64 0 z M64 -60 q -32 -12 -64 0 v-58 q 32 -12 64 0 z" fill="none" stroke="#E6C15C" strokeWidth={2} />
      {/* text lines (abstract, not real script) */}
      {[-100, -91, -82, -73].map((y) => (
        <g key={y}>
          <path d={`M-54 ${y} q 24 -6 46 0`} stroke="#B89A5A" strokeWidth={2} fill="none" strokeDasharray="7 3" />
          <path d={`M8 ${y} q 24 -6 46 0`} stroke="#B89A5A" strokeWidth={2} fill="none" strokeDasharray="7 3" />
        </g>
      ))}
      <path d="M-40 -110 q 10 -4 20 0" stroke="#7BC67B" strokeWidth={3} fill="none" strokeLinecap="round" />
    </g>
  );
}

export function Minaret() {
  return (
    <g>
      <rect x={-26} y={-300} width={52} height={300} fill="#F6EBD5" />
      <rect x={8} y={-300} width={18} height={300} fill="#E9DCC0" />
      <rect x={-26} y={-300} width={52} height={300} fill="none" stroke="#E2C98F" strokeWidth={3} />
      {/* balcony */}
      <rect x={-40} y={-222} width={80} height={16} rx={4} fill="#E2C98F" />
      <path d="M-36 -206 h72 l-8 10 h-56 z" fill="#D4B776" />
      {[-30, -18, -6, 6, 18, 30].map((x) => (
        <rect key={x} x={x - 2} y={-236} width={4} height={14} fill="#E2C98F" />
      ))}
      <rect x={-40} y={-240} width={80} height={5} rx={2.5} fill="#E2C98F" />
      {/* arched window + lower door */}
      <path d="M-11 -262 v-12 q 11 -16 22 0 v12 z" fill="#9FD8C0" />
      <path d="M-9 -150 v-20 q 9 -14 18 0 v20 z" fill="#9FD8C0" />
      <path d="M-14 0 v-34 q 14 -20 28 0 v34 z" fill="#C79A4E" />
      {/* dome */}
      <path d="M-28 -300 q 28 -76 56 0 z" fill="#3FAF6A" />
      <path d="M-20 -304 q 8 -40 20 -54" stroke="#7FD49C" strokeWidth={5} fill="none" strokeLinecap="round" />
      <path d="M0 -370 v-16" stroke="#E6B52E" strokeWidth={4} />
      <path d="M-4 -394 a 8 8 0 1 0 8 -6" fill="none" stroke="#E6B52E" strokeWidth={4} />
      {/* call-to-prayer waves */}
      <g className="sa-pulse">
        <path d="M44 -250 q 20 20 0 40 M60 -262 q 32 32 0 64" stroke="#E6B52E" strokeWidth={5} fill="none" strokeLinecap="round" />
      </g>
    </g>
  );
}

/** A red step ladder standing up, leaning slightly (for climbing pages). */
export function LadderUp() {
  return (
    <g>
      <GroundShadow rx={44} ry={6} />
      <g transform="rotate(-6)">
        <rect x={-34} y={-230} width={10} height={230} rx={4} fill="#D9473A" />
        <rect x={24} y={-230} width={10} height={230} rx={4} fill="#D9473A" />
        <rect x={-32} y={-226} width={3} height={222} rx={1.5} fill="#FF8A7E" />
        <rect x={26} y={-226} width={3} height={222} rx={1.5} fill="#FF8A7E" />
        {Array.from({ length: 6 }, (_, i) => (
          <g key={i}>
            <rect x={-26} y={-206 + i * 36} width={52} height={9} rx={4} fill="#E6A512" />
            <rect x={-26} y={-206 + i * 36} width={52} height={3.5} rx={1.75} fill="#FFD25A" />
          </g>
        ))}
        <rect x={-38} y={-238} width={76} height={10} rx={5} fill="#B83A2F" />
      </g>
    </g>
  );
}
