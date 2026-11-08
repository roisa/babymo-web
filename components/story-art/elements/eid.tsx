import { C, GroundShadow, Shine, crescentPath } from "./kit";

/**
 * Eid & Islamic-calendar elements: nastar jar, opor and ketupat, the
 * six-day Syawal tracker, sandals at the prayer field, and (batch 2+) the
 * qurban animals and Hajj props. Same clay house style as the kit.
 */

const STAR = "M0 -9 L2.6 -3 L9 -2.8 L4.2 1.6 L5.6 8 L0 4.6 L-5.6 8 L-4.2 1.6 L-9 -2.8 L-2.6 -3 Z";

/** Glass jar of golden nastar cookies with a red lid. */
export function Nastar() {
  const spots: [number, number][] = [[-16, -20], [0, -18], [16, -20], [-8, -36], [8, -36], [-16, -52], [0, -54], [16, -52], [-8, -70], [8, -70]];
  return (
    <g>
      <GroundShadow rx={40} ry={6} />
      <rect x={-32} y={-96} width={64} height={92} rx={14} fill="#E3F4FF" opacity=".55" />
      {spots.map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle r={9} fill="#F2B544" />
          <circle r={9} fill="none" stroke="#D9902A" strokeWidth={1.4} />
          <ellipse cx={0} cy={-1} rx={4} ry={3} fill="#C9702A" opacity=".7" />
          <circle cx={-3} cy={-4} r={1.6} fill="#fff" opacity=".6" />
        </g>
      ))}
      <rect x={-32} y={-96} width={64} height={92} rx={14} fill="none" stroke="#B9D7EA" strokeWidth={3} />
      <rect x={-26} y={-90} width={6} height={78} rx={3} fill="#fff" opacity=".55" />
      <rect x={-36} y={-112} width={72} height={18} rx={7} fill="#E04848" />
      <rect x={-36} y={-112} width={72} height={6} rx={3} fill="#FF7A7A" />
      <circle cx={0} cy={-116} r={6} fill="#C43A3A" />
    </g>
  );
}

/** Eid lunch: ketupat halves on a plate and a bowl of opor, steaming. */
export function OporKetupat() {
  return (
    <g>
      <GroundShadow rx={96} ry={8} />
      {/* plate of ketupat */}
      <ellipse cx={-40} cy={-8} rx={52} ry={11} fill="#FFFFFF" />
      <ellipse cx={-40} cy={-10} rx={52} ry={8} fill="#EEF3F8" />
      {[-62, -40, -18].map((x, i) => (
        <g key={x} transform={`translate(${x} -24)`}>
          <path d="M-14 0 l14 -14 l14 14 z" fill="#B9CC52" />
          <path d="M-14 0 l14 -14 l14 14 M-7 -7 l7 7 l7 -7" stroke="#7FA33A" strokeWidth={1.6} fill="none" />
          <rect x={-12} y={-2} width={24} height={14} rx={3} fill="#FFFDF5" />
          <rect x={-12} y={-2} width={24} height={3} fill="#D8E57A" />
          {i === 1 && <Shine x={-4} y={4} r={1.6} o={0.5} />}
        </g>
      ))}
      {/* bowl of opor */}
      <g transform="translate(50 0)">
        <g className="sa-steam"><path d="M-8 -44 q -6 -10 0 -18 q 6 -8 0 -16" stroke="#fff" strokeWidth={4} fill="none" strokeLinecap="round" opacity=".8" /></g>
        <g className="sa-steam" style={{ animationDelay: "1.2s" }}><path d="M10 -44 q -6 -10 0 -18 q 6 -8 0 -16" stroke="#fff" strokeWidth={4} fill="none" strokeLinecap="round" opacity=".8" /></g>
        <path d="M-40 -32 h80 q -4 32 -40 32 q -36 0 -40 -32 z" fill="#F4E2C0" />
        <path d="M-34 -18 q 34 14 68 0" stroke="#D9BE8A" strokeWidth={3} fill="none" />
        <ellipse cx={0} cy={-32} rx={40} ry={8} fill="#F2C94C" />
        <ellipse cx={0} cy={-33} rx={34} ry={5.5} fill="#F7DB7A" />
        <ellipse cx={-12} cy={-35} rx={10} ry={5} fill="#E3A65A" />
        <ellipse cx={10} cy={-34} rx={8} ry={4} fill="#D9934A" />
        <circle cx={22} cy={-33} r={2} fill="#C0392B" />
        <circle cx={-24} cy={-32} r={2} fill="#3B8C45" />
      </g>
    </g>
  );
}

/** Six circles for the six days of Syawal fasting; `done` of them starred. */
export function SyawalTracker({ done = 0 }: { done?: number }) {
  return (
    <g>
      <rect x={-96} y={-110} width={192} height={96} rx={14} fill="#FFFFFF" />
      <rect x={-96} y={-110} width={192} height={30} rx={14} fill="#2E7D5B" />
      <rect x={-96} y={-90} width={192} height={10} fill="#2E7D5B" />
      <path d={crescentPath(9, 4, -3, 8)} transform="translate(-76 -95)" fill="#FFC83D" />
      <rect x={-56} y={-100} width={100} height={9} rx={4.5} fill="#FFFFFF" opacity=".85" />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const x = -70 + i * 28;
        const on = i < done;
        const next = i === done;
        return (
          <g key={i} transform={`translate(${x} -46)`}>
            <circle r={12} fill={on ? "#FFF3C4" : next ? "#FFE1E8" : "#EEF3F8"} />
            {on && <path d={STAR} fill="#FFB627" transform="scale(.95)" />}
            {next && <circle r={12} fill="none" stroke="#FF5A7E" strokeWidth={2.4} className="sa-pulse" />}
            {!on && <text x={0} y={5} fontSize={13} fontWeight={800} fill={next ? "#FF5A7E" : "#9AA5B4"} textAnchor="middle" fontFamily="system-ui, sans-serif">{i + 1}</text>}
          </g>
        );
      })}
    </g>
  );
}
export const Syawal0 = () => <SyawalTracker done={0} />;
export const Syawal1 = () => <SyawalTracker done={1} />;
export const Syawal3 = () => <SyawalTracker done={3} />;
export const Syawal6 = () => <SyawalTracker done={6} />;

function Sandal({ x, c, flip = false }: { x: number; c: string; flip?: boolean }) {
  return (
    <g transform={`translate(${x} 0) scale(${flip ? -1 : 1} 1)`}>
      <ellipse cx={0} cy={-5} rx={10} ry={22} transform="rotate(80)" fill="#5A4A3A" />
      <ellipse cx={0} cy={-7} rx={9} ry={20} transform="rotate(80)" fill={c} />
      <path d="M-6 -12 q 6 -10 12 0" stroke="#2A2B3D" strokeWidth={3.5} fill="none" strokeLinecap="round" />
    </g>
  );
}

/** Rows of sandals outside the prayer field — and one pair that doesn't match. */
export function Sandals() {
  return (
    <g>
      <GroundShadow rx={110} ry={6} o={0.08} />
      <Sandal x={-90} c="#5AA9E6" /><Sandal x={-66} c="#5AA9E6" flip />
      <Sandal x={-30} c="#FF8FAD" /><Sandal x={-6} c="#FF8FAD" flip />
      <Sandal x={30} c="#74C968" /><Sandal x={54} c="#FFC83D" flip />
      <Sandal x={88} c="#B57BE8" /><Sandal x={112} c="#B57BE8" flip />
      <g className="sa-pulse"><circle cx={42} cy={-34} r={12} fill="#FFE066" opacity=".55" /></g>
      <text x={42} y={-28} fontSize={18} fontWeight={900} fill="#E0503F" textAnchor="middle" fontFamily="system-ui, sans-serif">?</text>
    </g>
  );
}

/** A prayer field on Eid morning: rows of mats and a little minbar. */
export function EidRows() {
  const mats = ["#2E7D5B", "#C0392B", "#3F86C4", "#B57BE8", "#2E7D5B"];
  return (
    <g>
      {mats.map((c, i) => (
        <g key={i} transform={`translate(${-120 + i * 60} 0)`}>
          <path d="M-26 0 l6 -26 h40 l6 26 z" fill={c} />
          <path d="M-18 -4 l4 -18 h28 l4 18 z" fill="none" stroke="#FFE9A8" strokeWidth={2} />
          <path d="M-6 -20 q 6 -8 12 0" stroke="#FFE9A8" strokeWidth={2} fill="none" />
        </g>
      ))}
      <g transform="translate(0 -40)">
        <rect x={-150} y={-6} width={300} height={4} rx={2} fill={C.white} opacity=".6" />
      </g>
    </g>
  );
}
