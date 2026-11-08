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

/* ───────────────────────── Eid al-Adha & Hajj ───────────────────────── */

/** Qurban goat: white with a brown patch, little horns, beard; tail wags, blinks. */
export function Goat() {
  return (
    <g>
      <GroundShadow rx={70} ry={8} />
      {/* legs */}
      {[-40, -22, 26, 44].map((x) => (
        <g key={x}><rect x={x - 5} y={-48} width={10} height={46} rx={4} fill="#E9E4DA" /><rect x={x - 5} y={-8} width={10} height={8} rx={2} fill="#5A4A3A" /></g>
      ))}
      {/* tail */}
      <g transform="translate(-58 -78)"><g className="sa-wag" style={{ animationDuration: ".8s" }}><path d="M0 0 q -10 -14 -4 -22" stroke="#F4F0E8" strokeWidth={9} strokeLinecap="round" fill="none" /></g></g>
      {/* body */}
      <ellipse cx={0} cy={-68} rx={62} ry={32} fill="#F4F0E8" />
      <ellipse cx={-14} cy={-76} rx={24} ry={16} fill="#B98A55" opacity=".85" />
      <path d="M-50 -60 q 50 22 100 0" stroke="#E2DCCF" strokeWidth={6} fill="none" strokeLinecap="round" />
      {/* neck + head */}
      <path d="M40 -84 q 18 -20 28 -40 l18 10 q -8 26 -26 42 z" fill="#F4F0E8" />
      <g transform="translate(78 -126)">
        <path d="M-6 -14 q -12 -18 -4 -26 M6 -14 q 4 -20 14 -24" stroke="#9A7A55" strokeWidth={5} fill="none" strokeLinecap="round" />
        <ellipse cx={-14} cy={-4} rx={12} ry={5} fill="#E2DCCF" transform="rotate(-25 -14 -4)" />
        <ellipse cx={0} cy={0} rx={16} ry={20} fill="#F4F0E8" />
        <ellipse cx={6} cy={14} rx={10} ry={8} fill="#F7D9D2" />
        <circle cx={8} cy={13} r={1.6} fill="#8A5A4A" />
        <path d="M2 22 q 2 12 -2 18 q -4 -8 -2 -18" fill="#E2DCCF" />
        <g className="sa-blink"><circle cx={-4} cy={-4} r={3.2} fill={C.ink} /></g>
        <Shine x={-5} y={-5} r={1.1} o={0.9} />
      </g>
      <Shine x={-30} y={-88} r={4} o={0.5} />
    </g>
  );
}

/** Cow: brown and white with a bell; tail swishes, blinks. */
export function Cow() {
  return (
    <g>
      <GroundShadow rx={96} ry={9} />
      {[-58, -34, 38, 62].map((x) => (
        <g key={x}><rect x={x - 7} y={-62} width={14} height={60} rx={5} fill="#F4F0E8" /><rect x={x - 7} y={-10} width={14} height={10} rx={3} fill="#4A3A2E" /></g>
      ))}
      <g transform="translate(-84 -100)"><g className="sa-wag" style={{ animationDuration: "1.3s" }}><path d="M0 0 q -12 26 -6 50" stroke="#B07443" strokeWidth={5} fill="none" strokeLinecap="round" /><ellipse cx={-6} cy={52} rx={6} ry={9} fill="#4A3A2E" /></g></g>
      <ellipse cx={0} cy={-92} rx={88} ry={42} fill="#F4F0E8" />
      <path d="M-70 -110 q 20 -26 50 -14 q 10 24 -14 34 q -30 6 -36 -20 z" fill="#B07443" />
      <path d="M18 -126 q 34 -8 44 16 q -6 24 -34 18 q -18 -10 -10 -34 z" fill="#B07443" />
      <path d="M-70 -76 q 70 30 140 0" stroke="#E2DCCF" strokeWidth={7} fill="none" strokeLinecap="round" />
      {/* udder hint */}
      <ellipse cx={8} cy={-54} rx={16} ry={7} fill="#F7C7C0" />
      {/* head */}
      <g transform="translate(96 -116)">
        <path d="M-14 -24 q -10 -14 -2 -20 M14 -24 q 10 -14 2 -20" stroke="#E9D6B5" strokeWidth={6} fill="none" strokeLinecap="round" />
        <ellipse cx={-24} cy={-14} rx={13} ry={6} fill="#B07443" transform="rotate(-20 -24 -14)" />
        <ellipse cx={24} cy={-14} rx={13} ry={6} fill="#B07443" transform="rotate(20 24 -14)" />
        <ellipse cx={0} cy={0} rx={24} ry={28} fill="#B07443" />
        <path d="M-6 -26 q 6 18 0 30 q 8 -2 10 -14 q -2 -14 -10 -16 z" fill="#F4F0E8" />
        <ellipse cx={0} cy={18} rx={20} ry={13} fill="#F7C7C0" />
        <circle cx={-7} cy={18} r={2.6} fill="#8A5A4A" /><circle cx={7} cy={18} r={2.6} fill="#8A5A4A" />
        <g className="sa-blink"><circle cx={-10} cy={-6} r={3.6} fill={C.ink} /><circle cx={10} cy={-6} r={3.6} fill={C.ink} /></g>
        {/* bell */}
        <path d="M-12 30 q 12 6 24 0" stroke="#C0392B" strokeWidth={4} fill="none" />
        <g className="sa-sway"><path d="M-7 34 h14 l3 14 h-20 z" fill="#FFC83D" /><circle cx={0} cy={49} r={2.6} fill="#B98A1E" /></g>
      </g>
    </g>
  );
}

/** The Ka'bah with its gold-embroidered band and door, on white marble. */
export function Kaaba() {
  return (
    <g>
      <ellipse cx={0} cy={-6} rx={130} ry={18} fill="#F3F1EC" />
      <ellipse cx={0} cy={-8} rx={110} ry={12} fill="#FFFFFF" opacity=".7" />
      {/* cube: front + side */}
      <path d="M-70 -10 v-120 h100 v120 z" fill="#1F1F24" />
      <path d="M30 -10 v-120 l40 -16 v118 z" fill="#2E2E35" />
      <path d="M-70 -130 l40 -16 h100 l-40 16 z" fill="#3A3A42" />
      {/* gold band (hizam) */}
      <path d="M-70 -104 h100 v14 h-100 z" fill="#D9A321" />
      <path d="M30 -104 l40 -16 v14 l-40 16 z" fill="#B98A1E" />
      <path d="M-64 -97 h88" stroke="#FFE08A" strokeWidth={1.5} strokeDasharray="5 4" />
      {/* door */}
      <rect x={-6} y={-78} width={28} height={50} rx={3} fill="#C9971E" />
      <rect x={-2} y={-74} width={20} height={42} rx={2} fill="#E6B52E" />
      <path d="M8 -74 v42" stroke="#B98A1E" strokeWidth={1.5} />
      {/* soft light */}
      <rect x={-66} y={-126} width={6} height={110} rx={3} fill="#fff" opacity=".08" />
      <g className="sa-twinkle"><path d={STAR} transform="translate(88 -160) scale(.8)" fill="#FFE9A8" /></g>
    </g>
  );
}

/** Besek — a woven bamboo box of qurban meat, tied with string. */
export function Besek() {
  return (
    <g>
      <GroundShadow rx={52} ry={6} />
      {[0, 1].map((i) => (
        <g key={i} transform={`translate(${i ? 22 : -22} ${i ? 0 : -6})`}>
          <path d="M-34 0 l4 -36 h60 l4 36 z" fill="#D9B676" />
          {[-26, -16, -6, 4, 14, 24].map((x) => <path key={x} d={`M${x} -2 l1 -32`} stroke="#B8924E" strokeWidth={2} />)}
          {[-30, -20, -10].map((y) => <path key={y} d={`M-32 ${y + 2} h64`} stroke="#C9A35E" strokeWidth={1.6} />)}
          <path d="M-36 -36 h72 v8 h-72 z" fill="#E6C88A" />
          <path d="M0 -38 v40 M-36 -18 h72" stroke="#C0392B" strokeWidth={2.4} />
          <path d="M-6 -42 q 6 -8 12 0 q -6 4 -12 0 z" fill="#C0392B" />
        </g>
      ))}
    </g>
  );
}

/** A bottle of zamzam water — a gift from the Hajj. */
export function Zamzam() {
  return (
    <g>
      <GroundShadow rx={30} ry={5} />
      <path d="M-22 -92 h44 v84 q 0 8 -8 8 h-28 q -8 0 -8 -8 z" fill="#E3F4FF" opacity=".85" />
      <path d="M-18 -70 h36 v60 q 0 6 -6 6 h-24 q -6 0 -6 -6 z" fill="#8FD3F5" opacity=".8" />
      <rect x={-18} y={-62} width={36} height={24} rx={4} fill="#FFFFFF" />
      <text x={0} y={-45} fontSize={10} fontWeight={900} fill="#2E7D5B" textAnchor="middle" fontFamily="system-ui, sans-serif">ZAMZAM</text>
      <rect x={-10} y={-104} width={20} height={14} rx={4} fill="#2E7D5B" />
      <rect x={-16} y={-88} width={5} height={70} rx={2.5} fill="#fff" opacity=".7" />
    </g>
  );
}

/** Wall calendar page showing a Hijri date. */
export function HijriDate({ day, month, color = "#2E7D5B" }: { day: string; month: string; color?: string }) {
  return (
    <g>
      <rect x={-56} y={-150} width={112} height={130} rx={12} fill="#FFFFFF" />
      <rect x={-56} y={-150} width={112} height={34} rx={12} fill={color} />
      <rect x={-56} y={-128} width={112} height={12} fill={color} />
      {[-30, 30].map((x) => <circle key={x} cx={x} cy={-154} r={5} fill="#7D8A98" />)}
      <text x={0} y={-127} fontSize={14} fontWeight={900} fill="#FFFFFF" textAnchor="middle" fontFamily="system-ui, sans-serif">{month}</text>
      <text x={0} y={-50} fontSize={58} fontWeight={900} fill={color} textAnchor="middle" fontFamily="system-ui, sans-serif">{day}</text>
      <path d={crescentPath(8, 4, -3, 7)} transform="translate(36 -36)" fill="#FFC83D" />
      <g className="sa-pulse"><circle cx={0} cy={-68} r={44} fill="none" stroke="#FF5A7E" strokeWidth={3} opacity=".6" /></g>
    </g>
  );
}
export const Arafah9 = () => <HijriDate day="9" month="DZULHIJJAH" />;
export const Adha10 = () => <HijriDate day="10" month="DZULHIJJAH" color="#B07443" />;
export const Muharram1 = () => <HijriDate day="1" month="MUHARRAM" color="#3F86C4" />;
export const Muharram10 = () => <HijriDate day="10" month="MUHARRAM" color="#6A4FB5" />;
export const Rajab27 = () => <HijriDate day="27" month="RAJAB" color="#1F3A6B" />;

/** The Ka'bah seen on a screen at home (Kakek's video call / Hajj on TV). */
export function KaabaScreen() {
  return (
    <g>
      <GroundShadow rx={70} ry={7} />
      {/* stand */}
      <rect x={-6} y={-40} width={12} height={38} rx={4} fill="#3A3B45" />
      <rect x={-40} y={-6} width={80} height={8} rx={4} fill="#3A3B45" />
      {/* screen */}
      <rect x={-104} y={-178} width={208} height={142} rx={12} fill="#2A2B33" />
      <rect x={-96} y={-170} width={192} height={126} rx={6} fill="#9FD3F5" />
      <rect x={-96} y={-96} width={192} height={52} rx={0} fill="#F3F1EC" />
      {/* pilgrims as soft white dots */}
      {Array.from({ length: 26 }, (_, i) => (
        <circle key={i} cx={-88 + (i % 13) * 14.5} cy={-82 + Math.floor(i / 13) * 18} r={4.5} fill="#FFFFFF" stroke="#D9D4C8" strokeWidth={1} />
      ))}
      <g transform="translate(0 -60) scale(.62)">
        <path d="M-70 -10 v-120 h100 v120 z" fill="#1F1F24" />
        <path d="M30 -10 v-120 l40 -16 v118 z" fill="#2E2E35" />
        <path d="M-70 -130 l40 -16 h100 l-40 16 z" fill="#3A3A42" />
        <path d="M-70 -104 h100 v14 h-100 z" fill="#D9A321" />
        <path d="M30 -104 l40 -16 v14 l-40 16 z" fill="#B98A1E" />
        <rect x={-6} y={-78} width={28} height={50} rx={3} fill="#C9971E" />
      </g>
      {/* call bubble */}
      <rect x={58} y={-164} width={32} height={22} rx={6} fill="#2E7D5B" />
      <circle cx={68} cy={-153} r={4} fill="#fff" className="sa-pulse" />
      <rect x={-92} y={-166} width={60} height={5} rx={2.5} fill="#fff" opacity=".35" />
    </g>
  );
}

/** Mo's five-prayer star card: Subuh, Dzuhur, Ashar, Maghrib, Isya. */
export function PrayerStars({ done = 2 }: { done?: number }) {
  const names = ["Subuh", "Dzuhur", "Ashar", "Maghrib", "Isya"];
  return (
    <g>
      <rect x={-120} y={-118} width={240} height={100} rx={14} fill="#FFFFFF" />
      <rect x={-120} y={-118} width={240} height={10} rx={5} fill="#FFC83D" />
      {names.map((n, i) => {
        const x = -96 + i * 48;
        const on = i < done;
        return (
          <g key={n} transform={`translate(${x} -70)`}>
            <path d={STAR} transform="scale(2)" fill={on ? "#FFC83D" : "#FFFFFF"} stroke={on ? "#E0A21E" : "#C9D3DE"} strokeWidth={0.9} className={on ? "sa-twinkle" : undefined} style={on ? { animationDelay: `${i * 0.4}s` } : undefined} />
            <text x={0} y={36} fontSize={11} fontWeight={800} fill="#5A6475" textAnchor="middle" fontFamily="system-ui, sans-serif">{n}</text>
          </g>
        );
      })}
    </g>
  );
}
