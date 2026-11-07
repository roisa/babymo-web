import { asset } from "@/lib/i18n/config";
import type { ArtBg, ArtFx, ArtItem, ArtMo, ArtProp, ArtScene, ArtTime } from "@/lib/cerita/illus-types";
import { FRIEND_SCALE } from "@/lib/cerita/friends-poses";

/**
 * Animated SVG picture-book illustration for a story scene.
 * 800×450 frame: a drawn background (room or outdoors, with time of day),
 * props with little idle motions, real Baby Mo renders, and effects
 * (rain, stars, bubbles…). Position lives on an outer <g transform>, the
 * CSS animation on an inner <g> (a CSS transform would override the SVG
 * transform attribute). Motion stops for prefers-reduced-motion.
 */

const W = 800;
const H = 450;
const FLOOR = 330;
/** top of the drawn backdrop — the full-page layout shows sky/wall above y=0 */
const TOP = -340;

/* ───────── backgrounds ───────── */

function sky(time: ArtTime) {
  const c =
    time === "night"
      ? ["#1B2350", "#2E2A63", "#3B3473"]
      : time === "dusk"
        ? ["#FFB88A", "#FF9AA8", "#B79CF0"]
        : time === "rain"
          ? ["#8FA3B8", "#A9B8C8", "#C3CEDA"]
          : ["#9FDBFF", "#C6EBFF", "#EAF7FF"];
  return (
    <>
      <defs>
        <linearGradient id={`sa-sky-${time}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c[0]} />
          <stop offset=".6" stopColor={c[1]} />
          <stop offset="1" stopColor={c[2]} />
        </linearGradient>
      </defs>
      <rect y={TOP} width={W} height={H - TOP} fill={`url(#sa-sky-${time})`} />
      {time === "night" && <Moon x={650} y={80} />}
      {time === "day" && <Sun x={660} y={80} />}
      {time === "dusk" && <circle cx={640} cy={250} r={70} fill="#FFD27A" opacity=".85" />}
      {time !== "night" && (
        <>
          <Cloud x={160} y={80} s={1} d={0} grey={time === "rain"} />
          <Cloud x={430} y={55} s={0.75} d={-12} grey={time === "rain"} />
        </>
      )}
    </>
  );
}

function Sun({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="sa-spin">
        {Array.from({ length: 10 }, (_, i) => (
          <rect key={i} x={-4} y={-62} width={8} height={18} rx={4} fill="#FFC93C" transform={`rotate(${i * 36})`} />
        ))}
      </g>
      <circle r={38} fill="#FFD447" />
      <circle r={38} fill="url(#sa-sunglow)" />
    </g>
  );
}
function Moon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={60} fill="#FFF3B0" opacity=".18" className="sa-pulse" />
      <circle r={36} fill="#FFE98A" />
      <circle cx={16} cy={-10} r={32} fill="#2A2A60" />
    </g>
  );
}
function Cloud({ x, y, s = 1, d = 0, grey = false }: { x: number; y: number; s?: number; d?: number; grey?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className="sa-drift" style={{ animationDelay: `${d}s` }}>
        <ellipse cx={0} cy={0} rx={60} ry={24} fill={grey ? "#E2E8EF" : "#fff"} />
        <circle cx={-22} cy={-14} r={24} fill={grey ? "#E2E8EF" : "#fff"} />
        <circle cx={16} cy={-20} r={30} fill={grey ? "#E2E8EF" : "#fff"} />
      </g>
    </g>
  );
}

function Window({ x, y, w = 170, h = 140, time }: { x: number; y: number; w?: number; h?: number; time: ArtTime }) {
  const sk = time === "night" ? "#22285A" : time === "dusk" ? "#FFB49A" : time === "rain" ? "#A9B8C8" : "#BFE6FF";
  return (
    <g>
      <rect x={x - 8} y={y - 8} width={w + 16} height={h + 16} rx={14} fill="#FFFFFF" />
      <rect x={x} y={y} width={w} height={h} rx={8} fill={sk} />
      {time === "night" ? (
        <>
          <circle cx={x + w * 0.72} cy={y + h * 0.32} r={16} fill="#FFE98A" />
          <circle cx={x + w * 0.72 + 8} cy={y + h * 0.32 - 5} r={14} fill={sk} />
          {[0.2, 0.4, 0.55, 0.3].map((f, i) => (
            <circle key={i} className="sa-twinkle" style={{ animationDelay: `${i * 0.5}s` }} cx={x + w * f} cy={y + h * (0.25 + i * 0.15)} r={2.5} fill="#fff" />
          ))}
        </>
      ) : time === "rain" ? (
        <g className="sa-rainwin">
          {Array.from({ length: 8 }, (_, i) => (
            <line key={i} x1={x + 12 + i * (w / 8)} y1={y + 10 + (i % 3) * 20} x2={x + 6 + i * (w / 8)} y2={y + 30 + (i % 3) * 20} stroke="#fff" strokeWidth={3} strokeLinecap="round" opacity=".7" />
          ))}
        </g>
      ) : (
        <>
          <circle cx={x + w * 0.75} cy={y + h * 0.3} r={16} fill="#FFD447" />
          <g transform={`translate(${x + w * 0.35} ${y + h * 0.4}) scale(.45)`}>
            <g className="sa-drift">
              <ellipse rx={60} ry={24} fill="#fff" />
              <circle cx={16} cy={-20} r={30} fill="#fff" />
            </g>
          </g>
          <path d={`M${x} ${y + h} q ${w * 0.3} -${h * 0.35} ${w * 0.6} -${h * 0.1} t ${w * 0.4} 0 v ${h * 0.1} z`} fill="#9BD98A" />
        </>
      )}
      <rect x={x + w / 2 - 4} y={y} width={8} height={h} fill="#FFFFFF" />
      <rect x={x} y={y + h / 2 - 4} width={w} height={8} fill="#FFFFFF" />
      {/* curtains */}
      <g transform={`translate(${x - 18} ${y - 14})`}>
        <path className="sa-curtain" d={`M0 0 h34 c-8 ${h * 0.5} 6 ${h * 0.8} 0 ${h + 26} h-34 z`} fill="#FF9EB5" />
      </g>
      <g transform={`translate(${x + w + 18} ${y - 14}) scale(-1 1)`}>
        <path className="sa-curtain" d={`M0 0 h34 c-8 ${h * 0.5} 6 ${h * 0.8} 0 ${h + 26} h-34 z`} fill="#FF9EB5" />
      </g>
    </g>
  );
}

function Floor({ color, plank = true }: { color: string; plank?: boolean }) {
  return (
    <g>
      <rect y={FLOOR} width={W} height={H - FLOOR} fill={color} />
      {plank && [0, 1, 2].map((i) => <line key={i} x1={0} x2={W} y1={FLOOR + 30 + i * 32} y2={FLOOR + 30 + i * 32} stroke="#000" strokeOpacity=".06" strokeWidth={3} />)}
      <rect y={FLOOR - 6} width={W} height={8} fill="#000" opacity=".06" />
    </g>
  );
}

function Background({ bg, time }: { bg: ArtBg; time: ArtTime }) {
  const night = time === "night";
  switch (bg) {
    case "bedroom":
      return (
        <g>
          <rect y={TOP} width={W} height={H - TOP} fill={night ? "#3A3F73" : "#FFF1E3"} />
          <g opacity=".5">{Array.from({ length: 9 }, (_, i) => <circle key={i} cx={40 + i * 92} cy={40 + (i % 2) * 34} r={5} fill={night ? "#6A6FA8" : "#FFD6B8"} />)}</g>
          <Window x={70} y={70} time={time} />
          {/* bed */}
          <g>
            <rect x={470} y={200} width={26} height={170} rx={10} fill="#C08552" />
            <rect x={490} y={262} width={300} height={70} rx={18} fill="#FFFFFF" />
            <rect x={530} y={250} width={262} height={92} rx={22} fill={night ? "#7C8CE0" : "#8FC9FF"} />
            <ellipse cx={538} cy={258} rx={44} ry={22} fill="#fff" />
            <rect x={486} y={330} width={312} height={22} rx={8} fill="#A86E3E" />
          </g>
          <Floor color={night ? "#5A4E7A" : "#E8C7A0"} />
          <ellipse cx={330} cy={398} rx={190} ry={30} fill={night ? "#7A6BA8" : "#FFB7C9"} opacity=".8" />
          {night && <rect y={TOP} width={W} height={H - TOP} fill="#0B1030" opacity=".22" />}
        </g>
      );
    case "living":
      return (
        <g>
          <rect y={TOP} width={W} height={H - TOP} fill={night ? "#2F4A55" : "#E5F4EF"} />
          <rect y={0} width={W} height={30} fill="#000" opacity=".03" />
          <Window x={520} y={60} w={200} h={140} time={time} />
          {/* frame */}
          <rect x={250} y={80} width={110} height={80} rx={10} fill="#fff" />
          <path d="M262 150 l30 -36 l24 26 l14 -14 l18 24 z" fill="#8FD18C" />
          <circle cx={340} cy={102} r={9} fill="#FFD447" />
          {/* sofa */}
          <g>
            <rect x={40} y={200} width={300} height={90} rx={30} fill="#7FB8E6" />
            <rect x={20} y={240} width={340} height={80} rx={26} fill="#93C7F0" />
            <rect x={20} y={240} width={50} height={90} rx={22} fill="#7FB8E6" />
            <rect x={310} y={240} width={50} height={90} rx={22} fill="#7FB8E6" />
            <rect x={40} y={318} width={14} height={18} fill="#8A5A34" />
            <rect x={326} y={318} width={14} height={18} fill="#8A5A34" />
          </g>
          <Floor color={night ? "#4C5B5F" : "#E9D1AE"} />
          <ellipse cx={420} cy={395} rx={230} ry={32} fill="#FFCF7A" opacity=".75" />
          {night && <rect y={TOP} width={W} height={H - TOP} fill="#0B1030" opacity=".2" />}
        </g>
      );
    case "kitchen":
      return (
        <g>
          <rect y={TOP} width={W} height={H - TOP} fill="#FFF6E4" />
          <g opacity=".35">
            {Array.from({ length: 14 }, (_, i) => <line key={`v${i}`} x1={i * 60} x2={i * 60} y1={120} y2={250} stroke="#E9C98F" strokeWidth={2} />)}
            {[150, 190, 230].map((y) => <line key={y} x1={0} x2={W} y1={y} y2={y} stroke="#E9C98F" strokeWidth={2} />)}
          </g>
          <Window x={300} y={30} w={200} h={110} time={time} />
          {/* cabinets */}
          <rect x={40} y={20} width={200} height={90} rx={12} fill="#F4A261" />
          <rect x={560} y={20} width={200} height={90} rx={12} fill="#F4A261" />
          <rect x={0} y={250} width={W} height={20} fill="#C9A27A" />
          <rect x={0} y={268} width={W} height={70} fill="#E9B872" />
          {[60, 220, 380, 540, 700].map((x) => <rect key={x} x={x - 50} y={280} width={100} height={46} rx={8} fill="#F4C687" />)}
          {/* hanging pans */}
          <g transform="translate(120 112)"><g className="sa-hang"><line x1={0} y1={0} x2={0} y2={22} stroke="#888" strokeWidth={3} /><circle cy={44} r={22} fill="#556" /></g></g>
          <g transform="translate(680 112)"><g className="sa-hang" style={{ animationDelay: "-1s" }}><line x1={0} y1={0} x2={0} y2={18} stroke="#888" strokeWidth={3} /><rect x={-6} y={18} width={12} height={40} rx={6} fill="#C0874F" /></g></g>
          <Floor color="#D9E4EC" plank={false} />
          <g opacity=".5">{Array.from({ length: 10 }, (_, i) => <rect key={i} x={i * 90} y={FLOOR + ((i % 2) * 40)} width={45} height={40} fill="#C5D3DE" />)}</g>
        </g>
      );
    case "bathroom":
      return (
        <g>
          <rect y={TOP} width={W} height={H - TOP} fill="#E3F4FB" />
          <g opacity=".5">
            {Array.from({ length: 16 }, (_, i) => <line key={`v${i}`} x1={i * 52} x2={i * 52} y1={0} y2={FLOOR} stroke="#BFE3F2" strokeWidth={3} />)}
            {Array.from({ length: 7 }, (_, i) => <line key={`h${i}`} x1={0} x2={W} y1={i * 52} y2={i * 52} stroke="#BFE3F2" strokeWidth={3} />)}
          </g>
          {/* mirror + sink */}
          <ellipse cx={260} cy={120} rx={90} ry={80} fill="#fff" />
          <ellipse cx={260} cy={120} rx={78} ry={68} fill="#CFEFFF" />
          <path d="M210 90 l40 -30" stroke="#fff" strokeWidth={10} strokeLinecap="round" opacity=".8" className="sa-shine" />
          <rect x={170} y={236} width={180} height={34} rx={14} fill="#fff" />
          <rect x={235} y={270} width={50} height={60} fill="#fff" />
          <rect x={250} y={214} width={20} height={26} rx={6} fill="#B9C6D2" />
          {/* towel */}
          <rect x={430} y={90} width={60} height={8} rx={4} fill="#9AA8B6" />
          <g transform="translate(460 98)"><g className="sa-hang"><rect x={-26} y={0} width={52} height={90} rx={8} fill="#FFB0C4" /><rect x={-26} y={70} width={52} height={8} fill="#FF8FAD" /></g></g>
          {/* tub */}
          <rect x={560} y={230} width={240} height={100} rx={30} fill="#fff" />
          <rect x={580} y={220} width={210} height={20} rx={10} fill="#F2FAFF" />
          <Floor color="#BFD9E6" plank={false} />
        </g>
      );
    case "garden":
    case "park":
      return (
        <g>
          {sky(time)}
          <path d="M0 270 q 200 -60 400 -10 t 400 -20 v 200 h -800 z" fill={night ? "#2F5A4A" : "#A8E28F"} />
          <path d="M0 310 q 250 -40 500 0 t 300 -10 v 150 h -800 z" fill={night ? "#244A3C" : "#8CD478"} />
          {bg === "garden" && (
            <g>
              {Array.from({ length: 12 }, (_, i) => (
                <rect key={i} x={i * 70} y={255} width={14} height={70} rx={4} fill={night ? "#6E6A8E" : "#FFFFFF"} />
              ))}
              <rect x={0} y={272} width={W} height={10} fill={night ? "#6E6A8E" : "#FFFFFF"} />
              <rect x={0} y={302} width={W} height={10} fill={night ? "#6E6A8E" : "#FFFFFF"} />
            </g>
          )}
          {bg === "park" && (
            <g>
              <path d="M330 450 q 40 -90 120 -150 q 40 -20 90 -20 l 10 10 q -70 20 -110 70 q -40 50 -50 90 z" fill={night ? "#5C5A7A" : "#F2DFB8"} />
              <g transform="translate(640 330)">
                <rect x={-70} y={-40} width={140} height={14} rx={6} fill="#B5753E" />
                <rect x={-70} y={-62} width={140} height={12} rx={6} fill="#C98A50" />
                <rect x={-60} y={-28} width={10} height={30} fill="#7A4A26" />
                <rect x={50} y={-28} width={10} height={30} fill="#7A4A26" />
              </g>
            </g>
          )}
        </g>
      );
    case "market":
      return (
        <g>
          {sky(time)}
          <rect y={280} width={W} height={H - 280} fill="#E8D3B0" />
          {[0, 1, 2].map((i) => {
            const x = 30 + i * 260;
            const c = ["#FF7A7A", "#5BB8F5", "#FFC145"][i]!;
            return (
              <g key={i}>
                <rect x={x + 10} y={150} width={10} height={180} fill="#9C6B3F" />
                <rect x={x + 210} y={150} width={10} height={180} fill="#9C6B3F" />
                <g className="sa-awning" style={{ animationDelay: `${-i * 0.7}s` }}>
                  {Array.from({ length: 6 }, (_, j) => (
                    <path key={j} d={`M${x + j * 38} 120 h38 v40 q -19 16 -38 0 z`} fill={j % 2 ? "#FFFFFF" : c} />
                  ))}
                </g>
                <rect x={x} y={250} width={230} height={70} rx={8} fill="#C98A50" />
                <rect x={x} y={250} width={230} height={12} rx={6} fill="#B07443" />
              </g>
            );
          })}
        </g>
      );
    case "street":
      return (
        <g>
          {sky(time)}
          {[
            [60, "#FFB4A2", 150],
            [250, "#A0D8EF", 120],
            [450, "#FFE08A", 160],
            [640, "#C7B8F5", 130],
          ].map(([x, c, h], i) => (
            <g key={i}>
              <rect x={x as number} y={300 - (h as number)} width={150} height={h as number} fill={c as string} />
              <path d={`M${(x as number) - 12} ${300 - (h as number)} l ${87} -60 l ${87} 60 z`} fill="#C8554B" />
              <rect x={(x as number) + 55} y={240} width={40} height={60} rx={6} fill="#8A5A34" />
              <rect x={(x as number) + 18} y={300 - (h as number) + 24} width={32} height={30} rx={4} fill={time === "night" ? "#FFE58A" : "#E8F7FF"} />
              <rect x={(x as number) + 100} y={300 - (h as number) + 24} width={32} height={30} rx={4} fill={time === "night" ? "#FFE58A" : "#E8F7FF"} />
            </g>
          ))}
          <rect y={300} width={W} height={40} fill="#D5D9DE" />
          <rect y={340} width={W} height={H - 340} fill="#6B7380" />
          {Array.from({ length: 6 }, (_, i) => <rect key={i} x={30 + i * 140} y={392} width={70} height={8} rx={4} fill="#fff" opacity=".7" />)}
        </g>
      );
    case "mosque":
      return (
        <g>
          <rect y={TOP} width={W} height={H - TOP} fill="#FFF7E8" />
          {[110, 400, 690].map((x, i) => (
            <g key={x}>
              <path d={`M${x - 80} 300 v-150 q 0 -80 80 -110 q 80 30 80 110 v150 z`} fill={i === 1 ? "#E8F4EC" : "#F6EBD5"} stroke="#E2C98F" strokeWidth={6} />
              {i === 1 && <path d={`M${x - 40} 300 v-90 q 0 -40 40 -60 q 40 20 40 60 v90 z`} fill="#CFE8D7" />}
            </g>
          ))}
          {[260, 540].map((x, i) => (
            <g key={x} transform={`translate(${x} 0)`}>
              <g className="sa-hang" style={{ animationDelay: `${-i}s` }}>
                <line x1={0} y1={0} x2={0} y2={70} stroke="#C9A55B" strokeWidth={3} />
                <path d="M-20 70 h40 l-8 34 h-24 z" fill="#E6B52E" />
                <circle cy={92} r={10} fill="#FFF3B0" className="sa-pulse" />
              </g>
            </g>
          ))}
          <rect y={FLOOR - 30} width={W} height={H - FLOOR + 30} fill="#B83B4B" />
          {Array.from({ length: 5 }, (_, i) => <rect key={i} y={FLOOR - 10 + i * 30} width={W} height={4} fill="#E8B04B" opacity=".6" />)}
        </g>
      );
    case "court": {
      const night = time === "night";
      const wet = time === "rain";
      const grass = night ? "#2E5A44" : "#79C27A";
      const surf = night ? "#2D4F86" : wet ? "#4F7FB8" : "#4C8DDB";
      const line = night ? "#C9D3F0" : "#FFFFFF";
      return (
        <g>
          {sky(time)}
          {/* trees behind the fence */}
          {[40, 150, 270, 520, 640, 760].map((x, i) => (
            <g key={x} className="sa-sway-slow" style={{ animationDelay: `${-i * 0.8}s` }}>
              <circle cx={x} cy={170 + (i % 2) * 14} r={58} fill={night ? "#244A3C" : "#5DAF62"} />
              <circle cx={x + 34} cy={192} r={40} fill={night ? "#2B5544" : "#6CBE6E"} />
            </g>
          ))}
          {/* chain-link fence */}
          <rect y={180} width={W} height={112} fill={night ? "#1F3B33" : "#3F7F5B"} opacity=".9" />
          <g opacity=".35" stroke={night ? "#8FB0A0" : "#CFE9D8"} strokeWidth={2}>
            {Array.from({ length: 34 }, (_, i) => (
              <path key={i} d={`M${i * 26 - 112} 292 l112 -112 M${i * 26} 292 l-112 -112`} />
            ))}
          </g>
          {[0, 200, 400, 600, 800].map((x) => <rect key={x} x={x - 5} y={172} width={10} height={124} rx={4} fill={night ? "#6E7C8A" : "#AEB9C4"} />)}
          {/* ground + court in perspective */}
          <rect y={290} width={W} height={H - 290} fill={grass} />
          <path d="M70 296 H730 L900 450 H-100 Z" fill={surf} />
          <g stroke={line} strokeWidth={5} fill="none" strokeLinejoin="round">
            <path d="M70 296 H730 L900 450 H-100 Z" />
            <path d="M150 296 L40 450 M650 296 L760 450" strokeWidth={4} />
            <path d="M104 360 H696" strokeWidth={4} />
            <path d="M400 330 V360" strokeWidth={4} />
          </g>
          {wet && <ellipse cx={560} cy={410} rx={120} ry={14} fill="#BFD8F2" opacity=".5" />}
          {/* the net */}
          <g>
            <rect x={36} y={276} width={9} height={58} rx={3} fill="#3A3F4A" />
            <rect x={755} y={276} width={9} height={58} rx={3} fill="#3A3F4A" />
            <rect x={44} y={284} width={712} height={44} fill="#1E2430" opacity=".25" />
            <g stroke={night ? "#9AA6BC" : "#2A3242"} strokeWidth={1.5} opacity=".55">
              {Array.from({ length: 60 }, (_, i) => <path key={i} d={`M${46 + i * 12} 284 v44`} />)}
              {Array.from({ length: 5 }, (_, i) => <path key={i} d={`M44 ${288 + i * 9} h712`} />)}
            </g>
            <rect x={44} y={280} width={712} height={7} rx={2} fill="#FFFFFF" />
          </g>
        </g>
      );
    }
    case "beach":
      return (
        <g>
          {sky(time)}
          <rect y={210} width={W} height={90} fill="#4CB8E8" />
          <g className="sa-waves">
            <path d="M-40 250 q 40 -14 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 v 60 h -880 z" fill="#7FD3F5" />
          </g>
          <g className="sa-waves2">
            <path d="M-40 290 q 40 -12 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 t 80 0 v 40 h -880 z" fill="#FFFFFF" opacity=".7" />
          </g>
          <rect y={300} width={W} height={H - 300} fill="#F7DFA8" />
          <g opacity=".35">{Array.from({ length: 20 }, (_, i) => <circle key={i} cx={(i * 97) % W} cy={330 + ((i * 53) % 110)} r={3} fill="#C9A060" />)}</g>
        </g>
      );
  }
}

/** a tennis ball: yellow-green with the white seam */
function TennisBall({ x = 0, y = 0, r = 10, spin = false }: { x?: number; y?: number; r?: number; spin?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className={spin ? "sa-spin-fast" : undefined}>
        <circle r={r} fill="#D9F04A" stroke="#B5CC2E" strokeWidth={1.5} />
        <path d={`M${-r * 0.75} ${-r * 0.65} q ${r * 0.75} ${r * 0.65} 0 ${r * 1.3} M${r * 0.75} ${-r * 0.65} q ${-r * 0.75} ${r * 0.65} 0 ${r * 1.3}`} stroke="#fff" strokeWidth={r * 0.18} fill="none" />
      </g>
    </g>
  );
}

/* ───────── props ───────── */

function Prop({ k }: { k: ArtProp }) {
  switch (k) {
    case "toothbrush":
      return (
        <g className="sa-brush">
          <rect x={-6} y={-110} width={12} height={110} rx={6} fill="#5BB8F5" />
          <rect x={-10} y={-140} width={20} height={34} rx={6} fill="#fff" />
          <ellipse cx={0} cy={-142} rx={16} ry={10} fill="#E9F8FF" />
        </g>
      );
    case "cup":
      return (
        <g>
          <path d="M-26 -70 h52 l-6 70 h-40 z" fill="#FFB0C4" />
          <rect x={-26} y={-74} width={52} height={8} rx={4} fill="#FF8FAD" />
        </g>
      );
    case "veggies":
      return (
        <g>
          <path d="M-70 -50 h140 l-14 50 h-112 z" fill="#C98A50" />
          {[[-40, "#FF5A5A"], [-8, "#FF5A5A"], [24, "#FF5A5A"]].map(([x, c], i) => (
            <circle key={i} cx={x as number} cy={-60} r={18} fill={c as string} className="sa-bob" style={{ animationDelay: `${i * 0.3}s` }} />
          ))}
          <path d="M40 -56 l28 -40 l8 6 z" fill="#FF8A2B" />
          <path d="M70 -96 l10 -16 M74 -94 l16 -10" stroke="#3AA655" strokeWidth={5} strokeLinecap="round" />
          <ellipse cx={-56} cy={-66} rx={22} ry={14} fill="#5BBF5B" />
        </g>
      );
    case "fruit":
      return (
        <g>
          <ellipse cx={0} cy={-14} rx={70} ry={16} fill="#E9C27A" />
          {[[-34, "#FF5A5A"], [0, "#FFD447"], [34, "#7BC67B"], [-16, "#FF9F43"], [18, "#C77DFF"]].map(([x, c], i) => (
            <circle key={i} cx={x as number} cy={i > 2 ? -50 : -32} r={18} fill={c as string} />
          ))}
        </g>
      );
    case "kitten":
      return (
        <g>
          <g transform="translate(34 -26)">
            <path className="sa-wag" d="M0 0 q 30 -10 26 -46" stroke="#F4A261" strokeWidth={10} strokeLinecap="round" fill="none" />
          </g>
          <ellipse cx={0} cy={-26} rx={42} ry={28} fill="#F4A261" />
          <circle cx={-34} cy={-56} r={28} fill="#F4A261" />
          <path d="M-56 -76 l6 -26 l16 18 z M-24 -82 l14 -22 l6 26 z" fill="#F4A261" />
          <g className="sa-blink">
            <circle cx={-44} cy={-58} r={4.5} fill="#2B2B2B" />
            <circle cx={-26} cy={-58} r={4.5} fill="#2B2B2B" />
          </g>
          <path d="M-38 -46 q 3 4 6 0" stroke="#2B2B2B" strokeWidth={2.5} fill="none" />
          <circle cx={-35} cy={-50} r={3} fill="#FF8FAD" />
          <rect x={-30} y={-8} width={12} height={10} rx={5} fill="#E08A45" />
          <rect x={14} y={-8} width={12} height={10} rx={5} fill="#E08A45" />
        </g>
      );
    case "box":
      return (
        <g>
          <path d="M-60 -70 h120 v70 h-120 z" fill="#C98A50" />
          <path d="M-60 -70 l-18 -26 h70 l8 26 z M60 -70 l18 -26 h-70 l-8 26 z" fill="#B07443" />
          <rect x={-60} y={-46} width={120} height={8} fill="#E0B07A" />
        </g>
      );
    case "umbrella":
      return (
        <g className="sa-sway">
          <path d="M0 0 v-120" stroke="#5A4A3A" strokeWidth={6} />
          <path d="M0 4 q 0 14 -14 12" stroke="#5A4A3A" strokeWidth={6} fill="none" strokeLinecap="round" />
          <path d="M-90 -110 q 90 -90 180 0 q -22 -14 -45 0 q -22 -14 -45 0 q -22 -14 -45 0 q -22 -14 -45 0 z" fill="#FFC145" />
          <path d="M0 -170 q -20 30 -45 60 M0 -170 q 20 30 45 60" stroke="#F4A261" strokeWidth={3} fill="none" />
        </g>
      );
    case "puddle":
      return (
        <g>
          <ellipse cx={0} cy={-6} rx={90} ry={16} fill="#7FB3D9" opacity=".7" />
          <ellipse cx={-20} cy={-6} rx={18} ry={5} fill="none" stroke="#fff" strokeWidth={2} className="sa-ripple" />
          <ellipse cx={30} cy={-8} rx={14} ry={4} fill="none" stroke="#fff" strokeWidth={2} className="sa-ripple" style={{ animationDelay: "-.8s" }} />
        </g>
      );
    case "towel":
      return <rect x={-40} y={-16} width={80} height={16} rx={6} fill="#FFB0C4" />;
    case "fort":
      return (
        <g>
          <path d="M-150 0 l150 -190 l150 190 z" fill="#FFB86B" />
          <path d="M-150 0 l150 -190 l-40 190 z" fill="#FFCB8F" />
          <path d="M-40 0 q 40 -110 80 0 z" fill="#5A3E6B" />
          <path d="M-150 -60 q 150 40 300 0" stroke="#7A6A8A" strokeWidth={2} fill="none" />
          {Array.from({ length: 9 }, (_, i) => (
            <circle key={i} className="sa-twinkle" style={{ animationDelay: `${i * 0.25}s` }} cx={-135 + i * 34} cy={-56 + Math.sin(i) * 6 + (i === 4 ? 14 : 0)} r={6} fill={["#FFE066", "#FF8FAD", "#7FD3F5"][i % 3]} />
          ))}
        </g>
      );
    case "lamp":
      return (
        <g>
          <circle cx={0} cy={-120} r={70} fill="#FFE9A8" opacity=".35" className="sa-pulse" />
          <rect x={-5} y={-110} width={10} height={110} fill="#8A6A4A" />
          <ellipse cx={0} cy={-2} rx={34} ry={8} fill="#6B5038" />
          <path d="M-40 -110 l14 -50 h52 l14 50 z" fill="#FFD27A" />
        </g>
      );
    case "books":
      return (
        <g>
          {[["#FF7A7A", 0], ["#5BB8F5", 22], ["#7BC67B", 44]].map(([c, y], i) => (
            <rect key={i} x={-50 + i * 4} y={-22 - (y as number)} width={100 - i * 8} height={20} rx={4} fill={c as string} />
          ))}
        </g>
      );
    case "teddy":
      return (
        <g className="sa-bob">
          <circle cx={-26} cy={-92} r={14} fill="#B07443" />
          <circle cx={26} cy={-92} r={14} fill="#B07443" />
          <circle cx={0} cy={-72} r={30} fill="#C98A50" />
          <ellipse cx={0} cy={-26} rx={34} ry={30} fill="#C98A50" />
          <ellipse cx={0} cy={-64} rx={12} ry={9} fill="#E8C49A" />
          <circle cx={-11} cy={-80} r={3.5} fill="#2B2B2B" />
          <circle cx={11} cy={-80} r={3.5} fill="#2B2B2B" />
        </g>
      );
    case "cookies":
      return (
        <g>
          <ellipse cx={0} cy={-8} rx={60} ry={12} fill="#fff" />
          {[-28, 0, 28].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy={-18 - (i === 1 ? 10 : 0)} r={18} fill="#D99A55" />
              <circle cx={x - 6} cy={-22 - (i === 1 ? 10 : 0)} r={3} fill="#5A3A22" />
              <circle cx={x + 6} cy={-14 - (i === 1 ? 10 : 0)} r={3} fill="#5A3A22" />
            </g>
          ))}
        </g>
      );
    case "thermometer":
      return (
        <g transform="rotate(-20)">
          <rect x={-7} y={-80} width={14} height={80} rx={7} fill="#fff" stroke="#B9C6D2" strokeWidth={3} />
          <circle cy={-6} r={11} fill="#FF5A5A" />
          <rect x={-3} y={-50} width={6} height={44} fill="#FF5A5A" className="sa-pulse" />
        </g>
      );
    case "soup":
      return (
        <g>
          <g className="sa-steam">
            <path d="M-16 -60 q -10 -16 0 -32 q 10 -16 0 -32" stroke="#fff" strokeWidth={6} fill="none" strokeLinecap="round" opacity=".85" />
            <path d="M14 -60 q -10 -16 0 -32 q 10 -16 0 -32" stroke="#fff" strokeWidth={6} fill="none" strokeLinecap="round" opacity=".85" />
          </g>
          <path d="M-56 -50 h112 q -6 50 -56 50 q -50 0 -56 -50 z" fill="#5BB8F5" />
          <ellipse cx={0} cy={-50} rx={56} ry={12} fill="#FFC145" />
        </g>
      );
    case "water":
      return (
        <g>
          <path d="M-20 -80 h40 l-5 80 h-30 z" fill="#E3F4FB" stroke="#9FD3EE" strokeWidth={3} />
          <path d="M-17 -50 h34 l-3 48 h-28 z" fill="#7FD3F5" className="sa-pulse" />
        </g>
      );
    case "flowers":
      return (
        <g>
          {[-30, 0, 30].map((x, i) => (
            <g key={i} transform={`translate(${x} 0)`}>
              <g className="sa-sway" style={{ animationDelay: `${-i * 0.6}s` }}>
                <path d={`M0 0 v-${70 + i * 14}`} stroke="#3AA655" strokeWidth={5} />
                <g transform={`translate(0 -${70 + i * 14})`}>
                  {[0, 72, 144, 216, 288].map((r) => <ellipse key={r} cx={0} cy={-12} rx={8} ry={13} fill={["#FF8FAD", "#FFC145", "#C77DFF"][i]} transform={`rotate(${r})`} />)}
                  <circle r={7} fill="#FFE066" />
                </g>
              </g>
            </g>
          ))}
        </g>
      );
    case "lantern":
      return (
        <g className="sa-sway">
          <circle cx={0} cy={-70} r={46} fill="#FFE9A8" opacity=".35" className="sa-pulse" />
          <rect x={-22} y={-110} width={44} height={70} rx={14} fill="#E6B52E" />
          <rect x={-14} y={-100} width={28} height={50} rx={10} fill="#FFF3B0" />
          <rect x={-10} y={-122} width={20} height={14} rx={4} fill="#B98A1E" />
        </g>
      );
    case "mat":
      return (
        <g>
          <path d="M-90 0 l20 -40 h140 l20 40 z" fill="#1E8C53" />
          <path d="M-60 -6 l12 -26 h96 l12 26 z" fill="#2FB36F" />
          <path d="M0 -30 q -14 8 0 22 q 14 -14 0 -22 z" fill="#E6B52E" />
        </g>
      );
    case "shoes":
      return (
        <g>
          <rect x={-70} y={-16} width={140} height={10} rx={4} fill="#9C6B3F" />
          {[-46, -14, 18, 48].map((x, i) => <ellipse key={i} cx={x} cy={-24} rx={14} ry={9} fill={["#5BB8F5", "#5BB8F5", "#FF8FAD", "#FF8FAD"][i]} />)}
        </g>
      );
    case "sandcastle":
      return (
        <g>
          <rect x={-70} y={-60} width={140} height={60} fill="#E9C27A" />
          <rect x={-90} y={-100} width={46} height={100} fill="#E2B866" />
          <rect x={44} y={-100} width={46} height={100} fill="#E2B866" />
          <rect x={-26} y={-120} width={52} height={60} fill="#E9C27A" />
          {[-90, -70, -50, 44, 64, 84, -26, -6, 14].map((x, i) => <rect key={i} x={x} y={i < 6 ? -112 : -132} width={12} height={14} fill={i < 6 ? "#E2B866" : "#E9C27A"} />)}
          <path d="M-14 0 v-30 q 14 -18 28 0 v30 z" fill="#C79A4E" />
          <g transform="translate(0 -132)">
            <line x1={0} y1={0} x2={0} y2={-40} stroke="#8A5A34" strokeWidth={4} />
            <path className="sa-flag" d="M0 -40 h30 l-6 9 l6 9 h-30 z" fill="#FF5A5A" />
          </g>
        </g>
      );
    case "bucket":
      return (
        <g>
          <path d="M-30 -56 h60 l-8 56 h-44 z" fill="#FF5A5A" />
          <path d="M-30 -56 q 30 -40 60 0" stroke="#C0392B" strokeWidth={4} fill="none" />
          <rect x={30} y={-70} width={8} height={70} rx={4} fill="#FFC145" transform="rotate(20 30 0)" />
        </g>
      );
    case "crab":
      return (
        <g className="sa-crab">
          <ellipse cx={0} cy={-20} rx={34} ry={20} fill="#FF6B5A" />
          <circle cx={-12} cy={-44} r={6} fill="#fff" /><circle cx={-12} cy={-44} r={3} fill="#222" />
          <circle cx={12} cy={-44} r={6} fill="#fff" /><circle cx={12} cy={-44} r={3} fill="#222" />
          <path d="M-34 -22 q -20 -6 -22 -24 M34 -22 q 20 -6 22 -24" stroke="#FF6B5A" strokeWidth={8} fill="none" strokeLinecap="round" />
          <path d="M-24 -6 l-12 8 M-12 -2 l-8 10 M24 -6 l12 8 M12 -2 l8 10" stroke="#E0503F" strokeWidth={5} strokeLinecap="round" />
        </g>
      );
    case "shell":
      return (
        <g>
          <path d="M0 0 l-22 -8 q 0 -30 22 -34 q 22 4 22 34 z" fill="#FFC9D6" />
          <path d="M0 0 v-40 M-10 -4 l-6 -30 M10 -4 l6 -30" stroke="#F49BB0" strokeWidth={3} />
        </g>
      );
    case "tent":
      return (
        <g>
          <path d="M-130 0 l130 -150 l130 150 z" fill="#3AA7DA" />
          <path d="M-130 0 l130 -150 l-30 150 z" fill="#5BB8F5" />
          <path className="sa-flap" d="M0 -150 l-36 150 h36 z" fill="#2B7FA8" />
          <path d="M0 -150 v-20" stroke="#8A5A34" strokeWidth={5} />
        </g>
      );
    case "camplight":
      return (
        <g>
          <circle cx={0} cy={-36} r={52} fill="#FFE9A8" opacity=".35" className="sa-pulse" />
          <rect x={-18} y={-56} width={36} height={50} rx={10} fill="#FFD27A" />
          <rect x={-22} y={-10} width={44} height={10} rx={4} fill="#5A4A3A" />
          <path d="M-12 -56 q 12 -20 24 0" stroke="#5A4A3A" strokeWidth={4} fill="none" />
        </g>
      );
    case "bicycle":
      return (
        <g>
          {[-60, 60].map((x) => (
            <g key={x} transform={`translate(${x} -40)`}>
              <circle r={38} fill="none" stroke="#2B2B2B" strokeWidth={7} />
              <g className="sa-spin-fast">
                {[0, 45, 90, 135].map((r) => <line key={r} x1={-34} x2={34} y1={0} y2={0} stroke="#9AA8B6" strokeWidth={2} transform={`rotate(${r})`} />)}
              </g>
            </g>
          ))}
          <path d="M-60 -40 l40 -50 h60 l20 50 M-20 -90 l20 50 h-60 M40 -90 l-8 -20 h-16 M-24 -96 h-22" stroke="#FF5A5A" strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    case "cone":
      return (
        <g>
          <path d="M-22 0 l18 -70 h8 l18 70 z" fill="#FF8A2B" />
          <rect x={-14} y={-40} width={28} height={10} fill="#fff" />
          <rect x={-28} y={-6} width={56} height={8} rx={3} fill="#E0701C" />
        </g>
      );
    case "mailbox":
      return (
        <g>
          <rect x={-6} y={-90} width={12} height={90} fill="#8A5A34" />
          <path d="M-40 -90 v-40 q 40 -30 80 0 v40 z" fill="#3AA7DA" />
          <g transform="translate(40 -118)"><g className="sa-flagup"><rect x={0} y={-30} width={6} height={36} fill="#8A5A34" /><rect x={0} y={-30} width={22} height={14} fill="#FF5A5A" /></g></g>
        </g>
      );
    case "parcel":
      return (
        <g>
          <rect x={-46} y={-70} width={92} height={70} rx={6} fill="#D9A066" />
          <rect x={-6} y={-70} width={12} height={70} fill="#FF8FAD" />
          <rect x={-46} y={-42} width={92} height={10} fill="#FF8FAD" />
          <path d="M0 -70 q -24 -26 -24 -6 q 0 10 24 6 q 24 4 24 -6 q 0 -20 -24 6 z" fill="#FF5A7E" />
        </g>
      );
    case "envelope":
      return (
        <g className="sa-float">
          <rect x={-40} y={-56} width={80} height={56} rx={6} fill="#fff" stroke="#E2C98F" strokeWidth={3} />
          <path d="M-40 -56 l40 30 l40 -30" fill="none" stroke="#E2C98F" strokeWidth={3} />
          <path d="M0 -20 q -12 -12 -12 -4 q 0 6 12 12 q 12 -6 12 -12 q 0 -8 -12 4 z" fill="#FF5A7E" />
        </g>
      );
    case "tree":
      return (
        <g>
          <rect x={-14} y={-130} width={28} height={130} rx={10} fill="#9C6B3F" />
          <g className="sa-sway-slow">
            <circle cx={0} cy={-170} r={70} fill="#5BBF5B" />
            <circle cx={-56} cy={-140} r={46} fill="#4CAF50" />
            <circle cx={56} cy={-140} r={46} fill="#4CAF50" />
            <circle cx={-24} cy={-190} r={10} fill="#FF7A7A" />
            <circle cx={30} cy={-150} r={10} fill="#FF7A7A" />
          </g>
        </g>
      );
    case "bush":
      return (
        <g className="sa-sway-slow">
          <circle cx={-30} cy={-30} r={32} fill="#5BBF5B" />
          <circle cx={20} cy={-40} r={40} fill="#4CAF50" />
          <circle cx={56} cy={-24} r={26} fill="#5BBF5B" />
        </g>
      );
    case "butterfly":
      return (
        <g className="sa-flutter-path">
          <g className="sa-flutter">
            <ellipse cx={-12} cy={-8} rx={14} ry={18} fill="#C77DFF" />
            <ellipse cx={12} cy={-8} rx={14} ry={18} fill="#FF8FAD" />
          </g>
          <rect x={-2} y={-22} width={4} height={26} rx={2} fill="#3A2A4A" />
        </g>
      );
    case "bird":
      return (
        <g className="sa-fly">
          <path className="sa-wing" d="M-20 0 q 10 -14 20 0 q 10 -14 20 0" stroke="#3A3A5A" strokeWidth={4} fill="none" strokeLinecap="round" />
        </g>
      );
    case "heart":
      return (
        <g className="sa-float">
          <path d="M0 0 q -40 -26 -40 -50 q 0 -22 20 -22 q 14 0 20 14 q 6 -14 20 -14 q 20 0 20 22 q 0 24 -40 50 z" fill="#FF5A7E" />
        </g>
      );
    case "balloon":
      return (
        <g className="sa-float">
          <path d="M0 0 q -8 30 4 70" stroke="#888" strokeWidth={2} fill="none" />
          <ellipse cx={0} cy={-30} rx={28} ry={34} fill="#FF7A7A" />
          <ellipse cx={-10} cy={-42} rx={6} ry={10} fill="#fff" opacity=".5" />
        </g>
      );
    case "milk":
      return (
        <g>
          <rect x={-14} y={-70} width={28} height={70} rx={10} fill="#fff" stroke="#B9C6D2" strokeWidth={3} />
          <rect x={-8} y={-86} width={16} height={18} rx={6} fill="#FFC9D6" />
        </g>
      );
    case "clock":
      return (
        <g>
          <circle cx={0} cy={-40} r={40} fill="#fff" stroke="#C98A50" strokeWidth={6} />
          <g transform="translate(0 -40)">
            <g className="sa-spin"><line x1={0} y1={0} x2={0} y2={-28} stroke="#2B2B2B" strokeWidth={4} strokeLinecap="round" /></g>
            <line x1={0} y1={0} x2={16} y2={0} stroke="#2B2B2B" strokeWidth={5} strokeLinecap="round" />
          </g>
        </g>
      );
    case "card":
      return (
        <g className="sa-bob">
          <rect x={-46} y={-80} width={92} height={80} rx={8} fill="#FFF3B0" stroke="#E6B52E" strokeWidth={3} />
          <path d="M0 -30 q -18 -16 -18 -26 q 0 -10 9 -10 q 6 0 9 6 q 3 -6 9 -6 q 9 0 9 10 q 0 10 -18 26 z" fill="#FF5A7E" />
          <rect x={-30} y={-18} width={60} height={5} rx={2} fill="#E6B52E" />
        </g>
      );
    case "seed":
      return (
        <g className="sa-float">
          <circle cx={0} cy={-26} r={26} fill="#FFF3B0" opacity=".55" className="sa-pulse" />
          <ellipse cx={0} cy={-26} rx={9} ry={13} fill="#6B4A2B" transform="rotate(25 0 -26)" />
          <ellipse cx={-3} cy={-30} rx={3} ry={6} fill="#A47A50" transform="rotate(25 0 -26)" />
        </g>
      );
    case "pot":
    case "sprout":
    case "seedling":
    case "plant":
    case "bloom": {
      const stage = ["pot", "sprout", "seedling", "plant", "bloom"].indexOf(k);
      const stem = [0, 26, 70, 130, 230][stage]!;
      return (
        <g>
          {stage > 0 && (
            <g className="sa-sway-slow">
              <path d={`M0 -58 q ${stage > 2 ? 8 : 3} -${stem / 2} 0 -${stem}`} stroke="#3AA655" strokeWidth={stage > 2 ? 9 : 6} fill="none" strokeLinecap="round" />
              {stage >= 1 && (
                <g transform={`translate(0 -${58 + stem})`}>
                  <ellipse cx={-14} cy={-4} rx={15} ry={8} fill="#5BBF5B" transform="rotate(-25 -14 -4)" />
                  <ellipse cx={14} cy={-4} rx={15} ry={8} fill="#5BBF5B" transform="rotate(25 14 -4)" />
                </g>
              )}
              {stage >= 2 && (
                <g>
                  <ellipse cx={-20} cy={-58 - stem * 0.45} rx={20} ry={10} fill="#4CAF50" transform={`rotate(-30 -20 ${-58 - stem * 0.45})`} />
                  <ellipse cx={20} cy={-58 - stem * 0.6} rx={20} ry={10} fill="#4CAF50" transform={`rotate(30 20 ${-58 - stem * 0.6})`} />
                </g>
              )}
              {stage >= 3 && (
                <g>
                  <ellipse cx={-26} cy={-58 - stem * 0.25} rx={26} ry={12} fill="#5BBF5B" transform={`rotate(-25 -26 ${-58 - stem * 0.25})`} />
                  <ellipse cx={26} cy={-58 - stem * 0.3} rx={26} ry={12} fill="#5BBF5B" transform={`rotate(25 26 ${-58 - stem * 0.3})`} />
                </g>
              )}
              {stage === 3 && <circle cx={0} cy={-58 - stem - 14} r={13} fill="#7BC67B" stroke="#4CAF50" strokeWidth={3} />}
              {stage === 4 && (
                <g transform={`translate(0 -${58 + stem + 20})`}>
                  <g className="sa-spin" style={{ animationDuration: "40s" }}>
                    {Array.from({ length: 16 }, (_, r) => (
                      <ellipse key={r} cx={0} cy={-46} rx={13} ry={28} fill={r % 2 ? "#FFC93C" : "#FFB300"} transform={`rotate(${r * 22.5})`} />
                    ))}
                  </g>
                  <circle r={34} fill="#7A4A26" />
                  <circle r={24} fill="#5A3418" />
                  <circle cx={-8} cy={-6} r={3.5} fill="#2B2B2B" />
                  <circle cx={8} cy={-6} r={3.5} fill="#2B2B2B" />
                  <path d="M-9 7 q 9 9 18 0" stroke="#2B2B2B" strokeWidth={3} fill="none" strokeLinecap="round" />
                </g>
              )}
            </g>
          )}
          <path d="M-44 -62 h88 l-10 62 h-68 z" fill="#E07A4F" />
          <rect x={-50} y={-70} width={100} height={16} rx={6} fill="#C8623A" />
          <ellipse cx={0} cy={-62} rx={40} ry={6} fill="#6B4A2B" />
        </g>
      );
    }
    case "wateringcan":
      return (
        <g transform="rotate(-18)">
          <g className="sa-pour">
            {[0, 1, 2, 3].map((d) => (
              <circle key={d} className="sa-drip" style={{ animationDelay: `${d * 0.2}s` }} cx={-96 - d * 4} cy={-40} r={4.5} fill="#7FD3F5" />
            ))}
          </g>
          <path d="M-30 -70 h70 v60 q 0 10 -10 10 h-50 q -10 0 -10 -10 z" fill="#5BB8F5" />
          <path d="M-30 -50 l-60 -24 l-6 10 l58 30 z" fill="#3AA7DA" />
          <rect x={-100} y={-80} width={16} height={12} rx={3} fill="#3AA7DA" transform="rotate(-20 -92 -74)" />
          <path d="M40 -66 q 30 0 30 26 q 0 22 -30 22" stroke="#3AA7DA" strokeWidth={9} fill="none" />
        </g>
      );
    case "rainbow":
      return (
        <g className="sa-pulse">
          {["#FF5A5A", "#FF9F43", "#FFD447", "#5BBF5B", "#5BB8F5", "#8A79D9"].map((c, r) => (
            <path key={c} d={`M${-260 + r * 18} 0 A ${260 - r * 18} ${230 - r * 18} 0 0 1 ${260 - r * 18} 0`} stroke={c} strokeWidth={18} fill="none" opacity=".9" />
          ))}
          <g transform="translate(-250 0)"><ellipse rx={50} ry={22} fill="#fff" /><circle cx={-18} cy={-12} r={22} fill="#fff" /><circle cx={16} cy={-16} r={26} fill="#fff" /></g>
          <g transform="translate(250 0)"><ellipse rx={50} ry={22} fill="#fff" /><circle cx={-18} cy={-12} r={22} fill="#fff" /><circle cx={16} cy={-16} r={26} fill="#fff" /></g>
        </g>
      );
    case "minirainbow":
      return (
        <g className="sa-pulse">
          {["#FF5A5A", "#FFD447", "#5BBF5B", "#5BB8F5", "#8A79D9"].map((c, r) => (
            <path key={c} d={`M${-90 + r * 8} 0 A ${90 - r * 8} ${70 - r * 8} 0 0 1 ${90 - r * 8} 0`} stroke={c} strokeWidth={8} fill="none" opacity=".75" />
          ))}
        </g>
      );
    case "car":
    case "carmud":
    case "carshiny":
      return (
        <g>
          <path d="M-170 -40 q 0 -40 40 -46 l40 -50 q 10 -12 30 -12 h110 q 20 0 32 14 l34 48 q 50 4 50 46 v20 q 0 12 -12 12 h-312 q -12 0 -12 -12 z" fill="#FF6B5A" />
          <path d="M-80 -88 l32 -40 h62 v40 z" fill="#CFEFFF" />
          <path d="M30 -88 v-40 h40 q 10 0 16 8 l26 32 z" fill="#CFEFFF" />
          <rect x={-170} y={-48} width={340} height={10} fill="#E0503F" />
          <circle cx={160} cy={-58} r={10} fill="#FFE58A" />
          <circle cx={-162} cy={-58} r={8} fill="#FFB3A7" />
          {[-100, 100].map((x) => (
            <g key={x} transform={`translate(${x} -14)`}>
              <circle r={34} fill="#2B2B2B" />
              <circle r={16} fill="#B9C6D2" />
            </g>
          ))}
          {k === "carmud" && (
            <g fill="#8A6A44" opacity=".85">
              <ellipse cx={-120} cy={-40} rx={26} ry={14} />
              <ellipse cx={-60} cy={-58} rx={18} ry={10} />
              <ellipse cx={20} cy={-36} rx={30} ry={12} />
              <ellipse cx={110} cy={-50} rx={22} ry={12} />
              <circle cx={-100} cy={-30} r={20} />
              <circle cx={100} cy={-28} r={20} />
              <ellipse cx={60} cy={-110} rx={14} ry={8} />
            </g>
          )}
          {k === "carshiny" && (
            <g fill="#FFFFFF">
              <path className="sa-twinkle" transform="translate(-120 -70)" d="M0 -14 L4 -4 L14 0 L4 4 L0 14 L-4 4 L-14 0 L-4 -4 Z" />
              <path className="sa-twinkle" style={{ animationDelay: ".6s" }} transform="translate(60 -112)" d="M0 -12 L3 -3 L12 0 L3 3 L0 12 L-3 3 L-12 0 L-3 -3 Z" />
              <path className="sa-twinkle" style={{ animationDelay: "1.2s" }} transform="translate(130 -46)" d="M0 -12 L3 -3 L12 0 L3 3 L0 12 L-3 3 L-12 0 L-3 -3 Z" />
              <path d="M-150 -76 q 60 -8 120 -2" stroke="#fff" strokeWidth={6} strokeLinecap="round" opacity=".6" fill="none" />
            </g>
          )}
        </g>
      );
    case "hose":
      return (
        <g>
          <ellipse cx={0} cy={-14} rx={40} ry={14} fill="none" stroke="#3AA655" strokeWidth={10} />
          <ellipse cx={0} cy={-24} rx={34} ry={12} fill="none" stroke="#4CAF50" strokeWidth={10} />
          <path d="M30 -26 q 40 -20 60 -70" stroke="#3AA655" strokeWidth={10} fill="none" strokeLinecap="round" />
          <g className="sa-spray">
            {Array.from({ length: 9 }, (_, d) => (
              <circle key={d} className="sa-drip" style={{ animationDelay: `${d * 0.12}s` }} cx={110 + d * 22} cy={-120 - Math.sin(d / 3) * 40} r={6 - d * 0.3} fill="#7FD3F5" />
            ))}
            <path d="M92 -100 q 90 -80 200 -20" stroke="#BFE9FF" strokeWidth={12} fill="none" strokeLinecap="round" opacity=".7" />
          </g>
        </g>
      );
    case "sponge":
      return (
        <g>
          <rect x={-30} y={-26} width={60} height={26} rx={8} fill="#FFD447" />
          <rect x={-30} y={-26} width={60} height={9} rx={4} fill="#5BBF5B" />
          <circle cx={-12} cy={-8} r={3} fill="#E6B52E" /><circle cx={8} cy={-12} r={2.5} fill="#E6B52E" /><circle cx={18} cy={-5} r={2} fill="#E6B52E" />
        </g>
      );
    case "frog":
      return (
        <g className="sa-hopframe">
          <ellipse cx={0} cy={-24} rx={34} ry={24} fill="#5BBF5B" />
          <circle cx={-16} cy={-48} r={12} fill="#5BBF5B" /><circle cx={16} cy={-48} r={12} fill="#5BBF5B" />
          <circle cx={-16} cy={-50} r={6} fill="#fff" /><circle cx={16} cy={-50} r={6} fill="#fff" />
          <circle cx={-15} cy={-50} r={3} fill="#222" /><circle cx={17} cy={-50} r={3} fill="#222" />
          <path d="M-14 -26 q 14 10 28 0" stroke="#2E7D32" strokeWidth={3} fill="none" strokeLinecap="round" />
          <circle cx={-22} cy={-28} r={4} fill="#FF8FAD" opacity=".7" /><circle cx={22} cy={-28} r={4} fill="#FF8FAD" opacity=".7" />
          <ellipse cx={-30} cy={-4} rx={14} ry={6} fill="#4CAF50" /><ellipse cx={30} cy={-4} rx={14} ry={6} fill="#4CAF50" />
        </g>
      );
    case "snail":
      return (
        <g className="sa-crawl">
          <path d="M-40 0 q 0 -16 20 -16 h46 q 20 0 20 16 z" fill="#E9C27A" />
          <circle cx={-6} cy={-30} r={26} fill="#C98A50" />
          <path d="M-6 -30 m -16 0 a 16 16 0 1 1 16 16 a 10 10 0 1 1 -8 -12" stroke="#8A5A34" strokeWidth={4} fill="none" />
          <path d="M34 -14 l6 -22 M42 -12 l10 -20" stroke="#E9C27A" strokeWidth={4} strokeLinecap="round" />
          <circle cx={40} cy={-37} r={4} fill="#5A3418" /><circle cx={52} cy={-33} r={4} fill="#5A3418" />
        </g>
      );
    case "ladybug":
      return (
        <g className="sa-crawl">
          <circle cx={14} cy={-14} r={8} fill="#2B2B2B" />
          <ellipse cx={0} cy={-14} rx={16} ry={14} fill="#FF4D4D" />
          <path d="M0 -28 v28" stroke="#2B2B2B" strokeWidth={2} />
          <circle cx={-7} cy={-18} r={3} fill="#2B2B2B" /><circle cx={7} cy={-10} r={3} fill="#2B2B2B" /><circle cx={-6} cy={-7} r={2.5} fill="#2B2B2B" />
        </g>
      );
    case "boots":
      return (
        <g>
          {[-22, 22].map((x) => (
            <g key={x} transform={`translate(${x} 0)`}>
              <path d="M-12 -46 h24 v34 h12 q 6 0 6 8 v4 h-42 z" fill="#FFC145" />
              <rect x={-12} y={-50} width={24} height={8} rx={3} fill="#E6A512" />
            </g>
          ))}
        </g>
      );
    case "sleeper":
      return (
        <g>
          {/* Umi resting under the blanket: hijab + face on the pillow */}
          <ellipse cx={70} cy={-38} rx={120} ry={34} fill="#6FB2F2" />
          <ellipse cx={-30} cy={-58} rx={34} ry={30} fill="#C77DFF" />
          <ellipse cx={-26} cy={-54} rx={22} ry={21} fill="#F3CBA5" />
          <path d="M-36 -56 q 5 4 10 0 M-22 -56 q 5 4 10 0" stroke="#5A3A2A" strokeWidth={2.4} fill="none" strokeLinecap="round" />
          <path d="M-29 -45 q 4 3 8 0" stroke="#C0605A" strokeWidth={2.4} fill="none" strokeLinecap="round" />
          <circle cx={-38} cy={-48} r={3.5} fill="#FF9FB0" opacity=".6" />
          <circle cx={-14} cy={-48} r={3.5} fill="#FF9FB0" opacity=".6" />
          <g className="sa-breathe-blanket"><ellipse cx={70} cy={-50} rx={100} ry={20} fill="#8FC9FF" /></g>
        </g>
      );
    case "tablet":
      return (
        <g>
          <rect x={-46} y={-66} width={92} height={62} rx={10} fill="#3A3A5A" />
          <rect x={-38} y={-58} width={76} height={46} rx={4} fill="#7FD3F5" />
          <g className="sa-bob"><rect x={-24} y={-40} width={36} height={18} rx={4} fill="#FF5A5A" /><rect x={12} y={-34} width={12} height={12} rx={2} fill="#FF5A5A" /><circle cx={-14} cy={-20} r={5} fill="#2B2B2B" /><circle cx={16} cy={-20} r={5} fill="#2B2B2B" /></g>
          <rect x={-50} y={-6} width={100} height={8} rx={4} fill="#C98A50" />
        </g>
      );
    case "hourglass":
      return (
        <g>
          <rect x={-30} y={-104} width={60} height={10} rx={4} fill="#B5753E" />
          <rect x={-30} y={-10} width={60} height={10} rx={4} fill="#B5753E" />
          <path d="M-22 -94 h44 q 0 30 -18 42 q 18 12 18 42 h-44 q 0 -30 18 -42 q -18 -12 -18 -42 z" fill="#E9F8FF" stroke="#B9C6D2" strokeWidth={3} />
          <path d="M-14 -84 h28 q -4 18 -14 26 q -10 -8 -14 -26 z" fill="#FFC145" />
          <path d="M-18 -10 q 18 -24 36 0 z" fill="#FFC145" />
          <rect className="sa-drip" x={-1.5} y={-52} width={3} height={36} fill="#FFC145" />
        </g>
      );
    case "bunny":
      return (
        <g className="sa-bob">
          <ellipse cx={-12} cy={-104} rx={9} ry={28} fill="#7FB2F0" transform="rotate(-8 -12 -104)" />
          <ellipse cx={14} cy={-92} rx={9} ry={18} fill="#7FB2F0" transform="rotate(30 14 -92)" />
          <circle cx={0} cy={-66} r={24} fill="#8FC0F5" />
          <ellipse cx={0} cy={-22} rx={26} ry={24} fill="#8FC0F5" />
          <ellipse cx={0} cy={-18} rx={14} ry={13} fill="#DCEBFF" />
          <circle cx={-9} cy={-70} r={3.5} fill="#2B2B2B" /><circle cx={9} cy={-70} r={3.5} fill="#2B2B2B" />
          <circle cx={0} cy={-60} r={3.5} fill="#FF8FAD" />
        </g>
      );
    case "cradle":
      return (
        <g>
          <path d="M-80 -60 q 0 60 80 60 q 80 0 80 -60 z" fill="#E9C27A" />
          <path d="M-80 -60 q 80 14 160 0" stroke="#C98A50" strokeWidth={6} fill="none" />
          <g className="sa-breathe-blanket"><ellipse cx={14} cy={-56} rx={52} ry={16} fill="#FFC9D6" /></g>
          <circle cx={-40} cy={-66} r={20} fill="#F3CBA5" />
          <path d="M-52 -82 q 12 -10 24 0" stroke="#FFC9D6" strokeWidth={10} fill="none" strokeLinecap="round" />
          <path d="M-48 -66 q 4 3 8 0 M-38 -66 q 4 3 8 0" stroke="#5A3A2A" strokeWidth={2} fill="none" strokeLinecap="round" />
          <circle cx={-40} cy={-58} r={2.5} fill="#E07A7A" />
        </g>
      );
    case "cow":
      return (
        <g>
          <ellipse cx={0} cy={-56} rx={60} ry={34} fill="#fff" stroke="#3A3A3A" strokeWidth={3} />
          <ellipse cx={-14} cy={-66} rx={16} ry={11} fill="#3A3A3A" /><ellipse cx={26} cy={-50} rx={12} ry={9} fill="#3A3A3A" />
          {[-40, -18, 22, 42].map((x) => <rect key={x} x={x - 5} y={-30} width={10} height={30} rx={4} fill="#fff" stroke="#3A3A3A" strokeWidth={3} />)}
          <g className="sa-sway-slow"><ellipse cx={-66} cy={-74} rx={22} ry={20} fill="#fff" stroke="#3A3A3A" strokeWidth={3} />
          <ellipse cx={-74} cy={-64} rx={13} ry={9} fill="#FFB0C4" />
          <circle cx={-70} cy={-80} r={3} fill="#2B2B2B" /></g>
        </g>
      );
    case "trashbag":
      return (
        <g>
          <path d="M-34 -70 q -14 40 -6 70 h80 q 8 -30 -6 -70 z" fill="#5BBF5B" />
          <path d="M-20 -70 l20 -18 l20 18" stroke="#3AA655" strokeWidth={6} fill="none" strokeLinecap="round" />
          <rect x={-14} y={-50} width={12} height={22} rx={4} fill="#9DD8F5" transform="rotate(-14)" />
          <rect x={6} y={-48} width={16} height={12} rx={3} fill="#FFD447" />
        </g>
      );
    case "litter":
      return (
        <g>
          <g transform="rotate(80) translate(-6 -6)"><rect x={-6} y={-30} width={14} height={30} rx={4} fill="#9DD8F5" opacity=".9" /></g>
          <rect x={22} y={-8} width={18} height={8} rx={2} fill="#FF8FAD" />
          <path d="M-30 0 l6 -14 h14 l2 14 z" fill="#E0B07A" />
        </g>
      );
    case "swing":
      return (
        <g>
          <path d="M-70 0 l20 -190 M70 0 l-20 -190" stroke="#E0503F" strokeWidth={10} strokeLinecap="round" />
          <rect x={-60} y={-196} width={120} height={12} rx={6} fill="#E0503F" />
          <g className="sa-sway"><path d="M-20 -186 v120 M20 -186 v120" stroke="#8A8A8A" strokeWidth={3} /><rect x={-28} y={-70} width={56} height={10} rx={4} fill="#5BB8F5" /></g>
        </g>
      );
    case "slide":
      return (
        <g>
          <path d="M-90 0 v-140 M-50 0 v-140" stroke="#5BB8F5" strokeWidth={8} />
          {[-30, -60, -90, -120].map((y) => <rect key={y} x={-90} y={y} width={40} height={6} fill="#5BB8F5" />)}
          <rect x={-96} y={-150} width={52} height={12} rx={4} fill="#3AA7DA" />
          <path d="M-46 -144 q 60 10 120 140 h-20 q -56 -120 -100 -124 z" fill="#FFC145" />
        </g>
      );
    case "shirt":
    case "shirtback":
      return (
        <g className="sa-sway-slow">
          <path d="M-46 -96 l-30 22 l14 22 l16 -10 v62 h92 v-62 l16 10 l14 -22 l-30 -22 q -16 12 -46 12 q -30 0 -46 -12 z" fill="#5BBF5B" />
          <path d="M-18 -96 q 18 16 36 0" stroke="#3AA655" strokeWidth={5} fill="none" />
          {k === "shirt" ? (
            <path transform="translate(0 -44)" d="M0 -20 L6 -6 L20 -6 L9 3 L13 18 L0 9 L-13 18 L-9 3 L-20 -6 L-6 -6 Z" fill="#FFFFFF" />
          ) : (
            <rect x={-8} y={-92} width={16} height={12} rx={2} fill="#fff" />
          )}
        </g>
      );
    case "flour":
      return (
        <g>
          <path d="M-34 -84 h68 l6 84 h-80 z" fill="#F4ECDD" stroke="#D9C9A8" strokeWidth={3} />
          <path d="M-34 -84 l10 -12 h48 l10 12" fill="#E8DCC4" />
          <rect x={-22} y={-58} width={44} height={22} rx={4} fill="#FFC145" />
          <g className="sa-steam"><circle cx={-6} cy={-104} r={10} fill="#fff" opacity=".9" /><circle cx={10} cy={-112} r={7} fill="#fff" opacity=".8" /></g>
        </g>
      );
    case "egg":
      return (
        <g className="sa-bob">
          <ellipse cx={0} cy={-22} rx={17} ry={22} fill="#FFF6E6" stroke="#E8D4B0" strokeWidth={2} />
          <ellipse cx={-5} cy={-30} rx={4} ry={7} fill="#fff" />
        </g>
      );
    case "bowl":
      return (
        <g>
          <path d="M-60 -46 h120 q 0 46 -60 46 q -60 0 -60 -46 z" fill="#7FB2F0" />
          <ellipse cx={0} cy={-46} rx={60} ry={10} fill="#F4E2C0" />
          <g className="sa-sway"><rect x={18} y={-110} width={8} height={70} rx={4} fill="#C98A50" transform="rotate(20 22 -46)" /></g>
        </g>
      );
    case "oven":
      return (
        <g>
          <rect x={-70} y={-140} width={140} height={140} rx={10} fill="#E8EEF4" stroke="#B9C6D2" strokeWidth={3} />
          <rect x={-56} y={-104} width={112} height={78} rx={8} fill="#5A3A22" />
          <rect className="sa-pulse" x={-50} y={-98} width={100} height={66} rx={6} fill="#FFB347" opacity=".7" />
          {[-28, 0, 28].map((x) => <circle key={x} cx={x} cy={-50} r={10} fill="#D99A55" />)}
          {[-40, -10, 20, 46].map((x) => <circle key={x} cx={x} cy={-124} r={6} fill="#8A97A6" />)}
        </g>
      );
    case "phone":
      return (
        <g className="sa-sway">
          <rect x={-22} y={-80} width={44} height={80} rx={8} fill="#3A3A5A" />
          <rect x={-17} y={-72} width={34} height={60} rx={4} fill="#9DD8F5" />
          <path d="M-8 -50 q 8 -10 16 0 M-12 -56 q 12 -16 24 0" stroke="#fff" strokeWidth={3} fill="none" strokeLinecap="round" />
        </g>
      );
    case "drawing":
      return (
        <g className="sa-bob">
          <rect x={-50} y={-90} width={100} height={90} rx={4} fill="#fff" stroke="#E2C98F" strokeWidth={3} />
          <path d="M-20 -10 v-40" stroke="#5BBF5B" strokeWidth={4} />
          <circle cx={-20} cy={-58} r={14} fill="#FFC145" /><circle cx={-20} cy={-58} r={6} fill="#8A5A34" />
          <path d="M10 -10 v-28" stroke="#5BBF5B" strokeWidth={4} />
          <circle cx={10} cy={-44} r={10} fill="#FFC145" /><circle cx={10} cy={-44} r={4} fill="#8A5A34" />
          <ellipse cx={34} cy={-16} rx={10} ry={7} fill="#F4A261" /><circle cx={28} cy={-24} r={6} fill="#F4A261" />
        </g>
      );
    case "kite":
      return (
        <g>
          <path d="M0 0 q -60 120 -120 260" stroke="#8A8A8A" strokeWidth={2} fill="none" />
          <g className="sa-sway">
            <path d="M0 -60 l40 50 l-40 70 l-40 -70 z" fill="#FF5A5A" />
            <path d="M0 -60 v120 M-40 -10 h80" stroke="#C0392B" strokeWidth={3} />
            <path className="sa-wag" d="M0 60 q 14 20 -6 40 q -18 20 4 44" stroke="#FFC145" strokeWidth={4} fill="none" />
            {[80, 104, 128].map((y) => <path key={y} d={`M-8 ${y} l8 -6 l8 6 l-8 6 z`} fill="#5BB8F5" />)}
          </g>
        </g>
      );
    case "puzzle":
      return (
        <g>
          {[[-40, -8, "#FFC145", -12], [-6, -4, "#5BB8F5", 20], [26, -10, "#FF8FAD", -30], [56, -2, "#7BC67B", 8], [-70, -2, "#C77DFF", 40]].map(([x, y, c, r], i) => (
            <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
              <rect x={-14} y={-14} width={28} height={28} rx={3} fill={c as string} />
              <circle cx={14} cy={0} r={6} fill={c as string} /><circle cx={0} cy={-14} r={6} fill={c as string} />
            </g>
          ))}
        </g>
      );
    case "plane":
      return (
        <g className="sa-bob">
          <ellipse cx={0} cy={-30} rx={50} ry={14} fill="#5BB8F5" />
          <path d="M-10 -32 l-24 -36 h14 l34 36 z M-10 -28 l-24 30 h14 l34 -30 z" fill="#3A8FD8" />
          <path d="M-44 -34 l-12 -20 h10 l12 18 z" fill="#3A8FD8" />
          {[-10, 6, 22].map((x) => <circle key={x} cx={x} cy={-34} r={4} fill="#E9F8FF" />)}
          <circle cx={48} cy={-30} r={5} fill="#FF5A5A" />
        </g>
      );
    case "tomato":
    case "tomatodry":
    case "tomatored": {
      const dry = k === "tomatodry";
      const leaf = dry ? "#B9B05A" : "#4CAF50";
      return (
        <g className={dry ? undefined : "sa-sway-slow"}>
          <path d="M-36 -54 h72 l-8 54 h-56 z" fill="#C9683E" />
          <rect x={-40} y={-62} width={80} height={12} rx={4} fill="#B05530" />
          <path d={dry ? "M0 -60 q 4 -50 -10 -90" : "M0 -60 v-100"} stroke={leaf} strokeWidth={6} fill="none" strokeLinecap="round" />
          {(dry ? [[-24, -96, 30], [18, -110, -30], [-20, -132, 40]] : [[-26, -100, -20], [26, -112, 20], [-24, -140, -30], [22, -150, 30]]).map(([x, y, r], i) => (
            <ellipse key={i} cx={x} cy={y} rx={20} ry={9} fill={leaf} transform={`rotate(${r} ${x} ${y})`} />
          ))}
          {!dry && [[-12, -88], [14, -124], [-8, -136]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={10} fill={k === "tomatored" && i === 0 ? "#FF4D4D" : k === "tomatored" && i === 1 ? "#FF9F43" : "#8BCF6B"} />
          ))}
        </g>
      );
    }
    case "cloud":
      return (
        <g className="sa-bob">
          <circle cx={-40} cy={-30} r={30} fill="#6B7080" /><circle cx={0} cy={-46} r={40} fill="#5A5F70" /><circle cx={44} cy={-28} r={28} fill="#6B7080" />
          <rect x={-70} y={-30} width={140} height={30} rx={15} fill="#6B7080" />
          <path className="sa-bolt" d="M6 -6 l-14 26 h12 l-8 24 l24 -32 h-12 l8 -18 z" fill="#FFE066" />
        </g>
      );
    case "cracks":
      return (
        <g>
          <ellipse cx={0} cy={-4} rx={110} ry={14} fill="#C9A267" opacity=".6" />
          <path d="M-90 -6 l20 -4 l10 6 l18 -6 M-20 -2 l14 -8 l12 6 l20 -4 l14 6 M40 -8 l18 4 l20 -6" stroke="#8A6A44" strokeWidth={3} fill="none" strokeLinecap="round" />
        </g>
      );
    case "icecreamcart":
      return (
        <g>
          <rect x={-70} y={-110} width={140} height={84} rx={10} fill="#FFFFFF" stroke="#B9C6D2" strokeWidth={3} />
          <rect x={-70} y={-110} width={140} height={20} rx={8} fill="#7FD3F5" />
          <circle cx={-20} cy={-62} r={16} fill="#FFB0C4" /><circle cx={14} cy={-66} r={16} fill="#8A5A34" /><circle cx={44} cy={-60} r={13} fill="#FFF3B0" />
          <rect x={-4} y={-250} width={8} height={140} fill="#9AA8B6" />
          <g className="sa-sway-slow">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <path key={i} d={`M0 -250 L${-100 + i * 33.3} -196 L${-66.7 + i * 33.3} -196 Z`} fill={i % 2 ? "#FFFFFF" : "#FF5A7E"} />
            ))}
          </g>
          {[-46, 46].map((x) => <g key={x} transform={`translate(${x} -16)`}><circle r={16} fill="#3A3A5A" /><circle r={6} fill="#B9C6D2" /></g>)}
        </g>
      );
    case "icecream":
      return (
        <g className="sa-bob">
          <path d="M-18 -50 l18 50 l18 -50 z" fill="#E9B76B" />
          <path d="M-12 -44 l24 0 M-8 -32 l16 0" stroke="#C98A50" strokeWidth={2} />
          <circle cx={0} cy={-62} r={20} fill="#8A5A34" />
          <circle cx={-8} cy={-68} r={5} fill="#A9785A" />
          <path className="sa-drip" d="M12 -50 q 2 8 0 12" stroke="#8A5A34" strokeWidth={5} strokeLinecap="round" />
        </g>
      );
    case "popsicle":
      return (
        <g className="sa-bob">
          <rect x={-5} y={-30} width={10} height={30} rx={4} fill="#E9C27A" />
          <rect x={-18} y={-88} width={36} height={62} rx={16} fill="#9BCB6B" />
          <rect x={-12} y={-80} width={8} height={30} rx={4} fill="#fff" opacity=".4" />
        </g>
      );
    case "coins":
      return (
        <g className="sa-float">
          {[-16, 16].map((x, i) => (
            <g key={x} transform={`translate(${x} ${i ? -10 : 0})`}>
              <circle cy={-20} r={20} fill="#FFC145" stroke="#E6A512" strokeWidth={4} />
              <circle cy={-20} r={10} fill="none" stroke="#E6A512" strokeWidth={3} />
            </g>
          ))}
        </g>
      );
    case "brooms":
      return (
        <g>
          {[-30, -10, 10, 30].map((x, i) => (
            <g key={x} transform={`rotate(${(i - 1.5) * 6})`}>
              <rect x={x - 3} y={-170} width={6} height={110} fill="#B5753E" />
              <path d={`M${x - 14} -60 h28 l6 60 h-40 z`} fill={i % 2 ? "#E9C27A" : "#D9A85A"} />
            </g>
          ))}
          <path d="M-40 -110 h80" stroke="#8A5A34" strokeWidth={6} />
        </g>
      );
    case "laptop":
      return (
        <g>
          <path d="M-46 -64 h92 v56 h-92 z" fill="#3A3A5A" />
          <rect x={-40} y={-58} width={80} height={44} rx={3} fill="#CFEFFF" />
          {[-48, -40, -32].map((y) => <rect key={y} x={-30} y={y} width={50} height={4} rx={2} fill="#7FB2F0" />)}
          <path d="M-60 -8 h120 l-8 8 h-104 z" fill="#9AA8B6" />
        </g>
      );
    case "giraffe":
      return (
        <g className="sa-bob">
          <ellipse cx={0} cy={-26} rx={26} ry={20} fill="#FFC145" />
          <rect x={4} y={-110} width={16} height={86} rx={8} fill="#FFC145" transform="rotate(8 12 -24)" />
          <ellipse cx={22} cy={-114} rx={18} ry={12} fill="#FFC145" />
          <circle cx={26} cy={-118} r={3} fill="#2B2B2B" />
          <path d="M14 -126 v-12 M24 -126 v-12" stroke="#C98A50" strokeWidth={4} strokeLinecap="round" />
          {[[-8, -30], [10, -20], [12, -70], [14, -94]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={5} fill="#C98A50" />)}
        </g>
      );
    case "magnifier":
      return (
        <g className="sa-sway">
          <rect x={-5} y={-50} width={12} height={50} rx={5} fill="#8A5A34" transform="rotate(-30)" />
          <circle cx={28} cy={-72} r={30} fill="#E9F8FF" opacity=".75" stroke="#3A3A5A" strokeWidth={7} />
          <circle cx={20} cy={-80} r={4} fill="#8A6A44" /><circle cx={34} cy={-66} r={3} fill="#8A6A44" />
        </g>
      );
    case "faucet":
      return (
        <g>
          <rect x={-60} y={-14} width={120} height={14} rx={6} fill="#FFFFFF" stroke="#B9C6D2" strokeWidth={3} />
          <path d="M-10 -170 h40 q 14 0 14 14 v20" stroke="#9AA8B6" strokeWidth={12} fill="none" strokeLinecap="round" />
          <rect x={-18} y={-180} width={16} height={24} rx={4} fill="#B9C6D2" />
          <rect x={40} y={-136} width={8} height={120} rx={4} fill="#7FD3F5" opacity=".8" />
          {[0, 1, 2].map((d) => <circle key={d} className="sa-drip" style={{ animationDelay: `${d * 0.3}s` }} cx={44} cy={-30} r={5} fill="#7FD3F5" />)}
        </g>
      );
    case "minaret":
      return (
        <g>
          <rect x={-26} y={-300} width={52} height={300} fill="#F6EBD5" stroke="#E2C98F" strokeWidth={4} />
          <rect x={-38} y={-220} width={76} height={14} rx={4} fill="#E2C98F" />
          <path d="M-26 -300 q 26 -70 52 0 z" fill="#5BBF5B" />
          <path d="M0 -370 v-20" stroke="#E6B52E" strokeWidth={4} />
          <path d="M-4 -394 a 8 8 0 1 0 8 -6" fill="none" stroke="#E6B52E" strokeWidth={4} />
          <rect x={-12} y={-270} width={24} height={36} rx={12} fill="#CFE8D7" />
          <g className="sa-pulse">
            <path d="M40 -250 q 20 20 0 40 M56 -262 q 32 32 0 64" stroke="#E6B52E" strokeWidth={5} fill="none" strokeLinecap="round" />
          </g>
        </g>
      );
    case "becak":
      return (
        <g>
          <path d="M-90 -120 q 0 -50 60 -50 h20 v80 h-80 z" fill="#3A8FD8" />
          <rect x={-96} y={-90} width={90} height={50} rx={10} fill="#FF5A5A" />
          <path d="M-6 -60 h70 l30 -50" stroke="#555" strokeWidth={8} fill="none" strokeLinecap="round" />
          <rect x={80} y={-124} width={30} height={10} rx={5} fill="#3A3A5A" />
          {[[-80, -28, 28], [-20, -28, 28], [80, -28, 28]].map(([x, y, r], i) => (
            <g key={i} transform={`translate(${x} ${y})`}><circle r={r} fill="none" stroke="#3A3A5A" strokeWidth={6} /><circle r={5} fill="#3A3A5A" /></g>
          ))}
        </g>
      );
    case "robot":
      return (
        <g className="sa-bob">
          <path d="M0 -112 v-14" stroke="#9AA8B6" strokeWidth={4} /><circle cx={0} cy={-130} r={6} fill="#FF5A5A" className="sa-pulse" />
          <rect x={-26} y={-112} width={52} height={40} rx={10} fill="#5BB8F5" />
          <circle cx={-10} cy={-92} r={7} fill="#fff" /><circle cx={10} cy={-92} r={7} fill="#fff" />
          <circle cx={-10} cy={-92} r={3} fill="#2B2B2B" /><circle cx={10} cy={-92} r={3} fill="#2B2B2B" />
          <rect x={-30} y={-68} width={60} height={46} rx={8} fill="#3A8FD8" />
          <rect x={-12} y={-58} width={24} height={14} rx={3} fill="#FFC145" />
          <rect x={-44} y={-64} width={12} height={34} rx={6} fill="#5BB8F5" /><rect x={32} y={-64} width={12} height={34} rx={6} fill="#5BB8F5" />
          <rect x={-22} y={-22} width={14} height={22} rx={4} fill="#5BB8F5" /><rect x={8} y={-22} width={14} height={22} rx={4} fill="#5BB8F5" />
        </g>
      );
    case "moon":
      return (
        <g className="sa-float">
          <circle cx={0} cy={-60} r={80} fill="#FFF6C8" opacity=".25" />
          <circle cx={0} cy={-60} r={56} fill="#FFF3B0" />
          <circle cx={-18} cy={-74} r={10} fill="#F2E39A" /><circle cx={16} cy={-44} r={7} fill="#F2E39A" /><circle cx={20} cy={-80} r={5} fill="#F2E39A" />
        </g>
      );
    case "rooster":
      return (
        <g className="sa-hopframe">
          <path d="M30 -60 q 50 -40 40 -90 q -20 30 -30 20 q 10 -30 -10 -50 q -6 40 -20 40 z" fill="#3AA655" />
          <path d="M40 -80 q 30 -20 24 -60 q -14 22 -24 16" fill="#2E7D9A" />
          <ellipse cx={0} cy={-56} rx={44} ry={34} fill="#F4A261" />
          <circle cx={-34} cy={-100} r={22} fill="#F4A261" />
          <path d="M-46 -122 q 4 -16 12 -6 q 4 -16 12 -4 q 6 -12 10 4 z" fill="#FF4D4D" />
          <path d="M-56 -100 l-16 6 l16 6 z" fill="#FFC145" />
          <path d="M-46 -84 q -4 14 6 14 q 4 -8 -2 -14 z" fill="#FF4D4D" />
          <circle cx={-38} cy={-104} r={4} fill="#2B2B2B" />
          <path d="M-8 -22 v22 M10 -22 v22" stroke="#E6A512" strokeWidth={5} strokeLinecap="round" />
        </g>
      );
    case "bee":
      return (
        <g className="sa-flutter-path">
          <g className="sa-flutter"><ellipse cx={-6} cy={-30} rx={12} ry={16} fill="#E9F8FF" opacity=".85" /><ellipse cx={10} cy={-30} rx={12} ry={16} fill="#E9F8FF" opacity=".85" /></g>
          <ellipse cx={0} cy={-12} rx={22} ry={15} fill="#FFC145" />
          <path d="M-8 -26 v28 M6 -26 v28" stroke="#2B2B2B" strokeWidth={5} />
          <circle cx={-20} cy={-16} r={3} fill="#2B2B2B" />
        </g>
      );
    case "honey":
      return (
        <g>
          <rect x={-60} y={-22} width={70} height={22} rx={8} fill="#E9B76B" />
          <rect x={-56} y={-26} width={62} height={10} rx={5} fill="#FFC145" />
          <path className="sa-drip" d="M-20 -16 v12" stroke="#FFB800" strokeWidth={5} strokeLinecap="round" />
          <path d="M22 -70 h40 v62 q 0 8 -8 8 h-24 q -8 0 -8 -8 z" fill="#FFB800" opacity=".9" />
          <rect x={18} y={-80} width={48} height={12} rx={4} fill="#C98A50" />
          <rect x={30} y={-52} width={24} height={16} rx={3} fill="#FFF3B0" />
        </g>
      );
    case "ants":
      return (
        <g className="sa-crawl">
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} transform={`translate(${-80 + i * 34} 0)`}>
              <circle cx={-6} cy={-6} r={4} fill="#3A2A2A" /><circle cx={2} cy={-6} r={5} fill="#3A2A2A" /><circle cx={11} cy={-7} r={4} fill="#3A2A2A" />
              <path d="M-4 -2 l-3 4 M2 -2 v4 M8 -2 l3 4 M13 -10 l4 -6" stroke="#3A2A2A" strokeWidth={1.6} />
              {i === 4 && <rect x={-4} y={-26} width={22} height={14} rx={5} fill="#E9C27A" />}
            </g>
          ))}
        </g>
      );
    case "blocks":
    case "blockstall":
    case "blocksfall": {
      const cols = ["#FF5A5A", "#5BB8F5", "#FFC145", "#7BC67B", "#C77DFF", "#FF9F43", "#5BB8F5"];
      if (k === "blocksfall")
        return (
          <g>
            {cols.map((c, i) => <rect key={i} x={-90 + i * 28} y={-28 - (i % 3) * 6} width={30} height={26} rx={4} fill={c} transform={`rotate(${(i * 37) % 50 - 25} ${-75 + i * 28} -15)`} />)}
          </g>
        );
      const n = k === "blockstall" ? 7 : 3;
      return (
        <g className={k === "blockstall" ? "sa-sway-slow" : undefined}>
          {cols.slice(0, n).map((c, i) => <rect key={i} x={-22} y={-30 - i * 30} width={44} height={30} rx={4} fill={c} stroke="#fff" strokeWidth={2} />)}
        </g>
      );
    }
    case "dog":
      return (
        <g>
          <g transform="translate(44 -60)"><path className="sa-wag" d="M0 0 q 20 -10 22 -34" stroke="#B07443" strokeWidth={10} strokeLinecap="round" fill="none" /></g>
          <ellipse cx={0} cy={-52} rx={52} ry={30} fill="#C98A50" />
          {[-34, -14, 18, 36].map((x) => <rect key={x} x={x - 7} y={-34} width={14} height={34} rx={6} fill="#C98A50" />)}
          <circle cx={-50} cy={-86} r={30} fill="#C98A50" />
          <ellipse cx={-70} cy={-78} rx={16} ry={12} fill="#E8C49A" />
          <circle cx={-82} cy={-82} r={6} fill="#2B2B2B" />
          <ellipse cx={-34} cy={-104} rx={12} ry={22} fill="#8A5A34" transform="rotate(20 -34 -104)" />
          <g className="sa-blink"><circle cx={-56} cy={-94} r={4.5} fill="#2B2B2B" /></g>
          <path d="M-74 -68 q 6 6 12 0" stroke="#2B2B2B" strokeWidth={2.5} fill="none" />
          <path d="M-70 -66 q 4 14 10 4" fill="#FF8FAD" />
        </g>
      );
    case "pictures":
      return (
        <g>
          {[-58, 58].map((x, i) => (
            <g key={x} transform={`translate(${x} 0)`}>
              <rect x={-50} y={-100} width={100} height={100} rx={6} fill="#fff" stroke="#E2C98F" strokeWidth={4} />
              <rect x={-44} y={-94} width={88} height={56} fill="#CFEFFF" />
              <rect x={-44} y={-38} width={88} height={32} fill="#9BD67B" />
              <circle cx={24} cy={-80} r={8} fill="#FFC145" />
              {(i ? [-24, -6] : [-24, -6, 10]).map((cx) => <ellipse key={cx} cx={cx} cy={-78} rx={9} ry={5} fill="#fff" />)}
              <circle cx={-20} cy={-24} r={7} fill={i ? "#FF8FAD" : "#FF5A5A"} />
              <circle cx={14} cy={-22} r={8} fill="#F4A261" />
              {i ? <path d="M10 -24 h8" stroke="#2B2B2B" strokeWidth={2} /> : <><circle cx={11} cy={-24} r={1.6} fill="#2B2B2B" /><circle cx={17} cy={-24} r={1.6} fill="#2B2B2B" /></>}
            </g>
          ))}
        </g>
      );
    case "jar":
      return (
        <g>
          <rect x={-40} y={-104} width={80} height={104} rx={18} fill="#E9F8FF" opacity=".85" stroke="#B9C6D2" strokeWidth={4} />
          <rect x={-30} y={-118} width={60} height={18} rx={6} fill="#FF8FAD" />
          {[["#FFC145", -18, -24, 20], ["#5BB8F5", 10, -30, -15], ["#7BC67B", -6, -52, 35], ["#C77DFF", 16, -60, -30], ["#FF7A7A", -20, -70, 10], ["#FF9F43", 4, -82, 50]].map(([c, x, y, r], i) => (
            <rect key={i} x={(x as number) - 14} y={(y as number) - 5} width={28} height={10} rx={5} fill={c as string} transform={`rotate(${r} ${x} ${y})`} />
          ))}
          <path d="M-30 -96 q -4 40 0 80" stroke="#fff" strokeWidth={5} opacity=".7" fill="none" strokeLinecap="round" />
        </g>
      );
    case "school":
      return (
        <g>
          <rect x={-120} y={-170} width={240} height={170} fill="#FFE8A3" />
          <path d="M-136 -170 L0 -240 L136 -170 Z" fill="#FF7A7A" />
          <rect x={-28} y={-84} width={56} height={84} rx={6} fill="#5BB8F5" />
          {[-84, 56].map((x) => <rect key={x} x={x} y={-140} width={40} height={36} rx={4} fill="#CFEFFF" stroke="#fff" strokeWidth={4} />)}
          <circle cx={0} cy={-196} r={16} fill="#fff" stroke="#E2C98F" strokeWidth={3} />
          <path d="M0 -196 v-8 M0 -196 h7" stroke="#3A3A5A" strokeWidth={3} />
          <path d="M130 -240 v-40" stroke="#9AA8B6" strokeWidth={4} />
          <g className="sa-sway-slow"><path d="M130 -280 h34 l-8 10 l8 10 h-34 z" fill="#FF5A5A" /></g>
          {["#FF5A5A", "#FFC145", "#5BBF5B", "#5BB8F5"].map((c, i) => <circle key={c} cx={-90 + i * 14} cy={-176} r={5} fill={c} />)}
        </g>
      );
    case "ball":
      return (
        <g className="sa-bob">
          <circle cx={0} cy={-24} r={24} fill="#FF5A5A" />
          <path d="M-24 -24 h48 M0 -48 q 16 24 0 48 M0 -48 q -16 24 0 48" stroke="#fff" strokeWidth={4} fill="none" />
        </g>
      );
    case "apple":
      return (
        <g className="sa-bob">
          <path d="M0 -50 q -34 -14 -34 18 q 0 30 34 32 q 34 -2 34 -32 q 0 -32 -34 -18 z" fill="#FF4D4D" />
          <path d="M0 -50 q 2 -12 8 -16" stroke="#8A5A34" strokeWidth={4} strokeLinecap="round" fill="none" />
          <ellipse cx={14} cy={-62} rx={10} ry={5} fill="#5BBF5B" transform="rotate(-20 14 -62)" />
          <ellipse cx={-14} cy={-34} rx={6} ry={10} fill="#fff" opacity=".4" />
        </g>
      );
    case "sun":
      return (
        <g>
          <g className="sa-spin">{Array.from({ length: 12 }, (_, i) => <rect key={i} x={-5} y={-130} width={10} height={26} rx={5} fill="#FFC145" transform={`rotate(${i * 30} 0 -80)`} />)}</g>
          <circle cx={0} cy={-80} r={70} fill="#FFE58A" opacity=".35" className="sa-pulse" />
          <circle cx={0} cy={-80} r={44} fill="#FFC145" />
        </g>
      );
    case "cookiejar":
      return (
        <g>
          <rect x={-36} y={-90} width={72} height={90} rx={16} fill="#E9F8FF" opacity=".85" stroke="#B9C6D2" strokeWidth={4} />
          <rect x={-28} y={-104} width={56} height={16} rx={6} fill="#C98A50" />
          {([[-14, -24], [12, -30], [-4, -50], [16, -62], [-16, -70]] as const).map(([x, y], i) => (
            <g key={i}><circle cx={x} cy={y} r={13} fill="#D99A55" /><circle cx={x - 4} cy={y - 3} r={2.5} fill="#5A3A22" /><circle cx={x + 4} cy={y + 3} r={2.5} fill="#5A3A22" /></g>
          ))}
        </g>
      );
    case "mirror":
      return (
        <g>
          <rect x={-8} y={-30} width={16} height={30} fill="#C98A50" />
          <ellipse cx={0} cy={-110} rx={60} ry={82} fill="#C98A50" />
          <ellipse cx={0} cy={-110} rx={50} ry={72} fill="#CFEFFF" />
          <path className="sa-shine" d="M-26 -150 l28 -24 M-30 -126 l40 -34" stroke="#fff" strokeWidth={7} strokeLinecap="round" opacity=".75" />
          <rect x={-40} y={-8} width={80} height={8} rx={4} fill="#B07443" />
        </g>
      );
    case "quran":
      return (
        <g>
          <circle className="sa-pulse" cx={0} cy={-80} r={78} fill="#FFF3B0" opacity=".35" />
          <path d="M-60 0 l50 -40 M60 0 l-50 -40 M-60 -40 l50 40 M60 -40 l-50 40" stroke="#B07443" strokeWidth={8} strokeLinecap="round" />
          <path d="M-70 -46 q 35 -14 70 0 q 35 -14 70 0 v-12 q -35 -14 -70 0 q -35 -14 -70 0 z" fill="#2E7D5B" />
          <path d="M-62 -60 q 31 -12 62 0 v-56 q -31 -12 -62 0 z" fill="#FFF8E7" />
          <path d="M62 -60 q -31 -12 -62 0 v-56 q 31 -12 62 0 z" fill="#FFF8E7" />
          {[-96, -86, -76].map((y) => <g key={y}><path d={`M-52 ${y} q 22 -6 44 0`} stroke="#C9A55B" strokeWidth={2} fill="none" /><path d={`M8 ${y} q 22 -6 44 0`} stroke="#C9A55B" strokeWidth={2} fill="none" /></g>)}
        </g>
      );
    case "dates":
      return (
        <g>
          <ellipse cx={0} cy={-8} rx={56} ry={12} fill="#F4E2C0" stroke="#E2C98F" strokeWidth={3} />
          {[[-26, -16], [-6, -20], [14, -16], [32, -14], [4, -30], [-16, -30]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx={11} ry={7} fill="#7A3E1E" transform={`rotate(${i * 25} ${x} ${y})`} />)}
          <rect x={60} y={-60} width={30} height={60} rx={6} fill="#CFEFFF" opacity=".85" stroke="#B9C6D2" strokeWidth={3} />
          <rect x={63} y={-40} width={24} height={36} rx={4} fill="#7FD3F5" opacity=".7" />
        </g>
      );
    case "rice":
      return (
        <g>
          <path d="M-46 -30 h92 q 0 30 -46 30 q -46 0 -46 -30 z" fill="#FFFFFF" stroke="#B9C6D2" strokeWidth={3} />
          <ellipse cx={0} cy={-32} rx={42} ry={18} fill="#FFFDF5" />
          {Array.from({ length: 14 }, (_, i) => <ellipse key={i} cx={-30 + (i * 37) % 60} cy={-38 + (i * 13) % 12} rx={4} ry={2} fill="#F0E8D0" />)}
          <g className="sa-steam"><path d="M-10 -56 q 6 -10 0 -20" stroke="#fff" strokeWidth={4} fill="none" opacity=".8" /></g>
        </g>
      );
    case "paddy":
      return (
        <g className="sa-sway-slow">
          {[-60, -36, -12, 12, 36, 60].map((x, i) => (
            <g key={x}>
              <path d={`M${x} 0 q ${i % 2 ? 6 : -6} -60 ${i % 2 ? 18 : -18} -110`} stroke="#7BC67B" strokeWidth={4} fill="none" />
              {[0, 1, 2, 3].map((j) => <ellipse key={j} cx={x + (i % 2 ? 14 : -14) + (i % 2 ? 2 : -2) * j} cy={-90 + j * 10} rx={4} ry={7} fill="#E6C25A" />)}
            </g>
          ))}
        </g>
      );
    case "glassbroken":
      return (
        <g>
          <path d="M-40 -6 l14 -14 l6 12 z M-6 -4 l10 -18 l10 16 z M26 -6 l16 -10 l2 12 z M-20 -2 l8 -8 l4 8 z" fill="#CFEFFF" stroke="#9AC4DA" strokeWidth={2} />
          <ellipse cx={0} cy={-2} rx={60} ry={6} fill="#BFE9FF" opacity=".5" />
        </g>
      );
    case "goldstar":
      return (
        <g className="sa-float">
          <circle cx={0} cy={-40} r={44} fill="#FFF3B0" opacity=".45" className="sa-pulse" />
          <path d="M0 -76 L10 -52 L36 -50 L16 -34 L22 -8 L0 -22 L-22 -8 L-16 -34 L-36 -50 L-10 -52 Z" fill="#FFC145" stroke="#E6A512" strokeWidth={3} strokeLinejoin="round" />
        </g>
      );
    case "racket":
      return (
        <g transform="rotate(-24)">
          <rect x={-4} y={-46} width={8} height={46} rx={4} fill="#F4F4F6" stroke="#2C3E7A" strokeWidth={2} />
          <ellipse cx={0} cy={-84} rx={28} ry={38} fill="#EEF3FF" fillOpacity=".55" stroke="#2C3E7A" strokeWidth={7} />
          <g stroke="#9AA7C7" strokeWidth={1.2}>
            {[-18, -9, 0, 9, 18].map((x) => <path key={x} d={`M${x} -118 v68`} />)}
            {[-108, -96, -84, -72, -60].map((y) => <path key={y} d={`M-26 ${y} h52`} />)}
          </g>
          <path d="M-6 -48 L0 -54 L6 -48" stroke="#2C3E7A" strokeWidth={4} fill="none" />
        </g>
      );
    case "tennisball":
      return <TennisBall y={-11} />;
    case "ballbasket":
      return (
        <g>
          {[-30, -10, 10, 30, -20, 0, 20, -8, 12].map((x, i) => (
            <TennisBall key={i} x={x} y={i < 4 ? -60 : i < 7 ? -78 : -94} r={11} />
          ))}
          <path d="M-46 -64 h92 l-8 64 h-76 z" fill="#3B4252" opacity=".25" />
          <g stroke="#3B4252" strokeWidth={3} fill="none">
            <path d="M-46 -64 h92 l-8 64 h-76 z" />
            {[-30, -12, 6, 24].map((x) => <path key={x} d={`M${x} -64 l-2 64`} />)}
            <path d="M-43 -40 h86 M-40 -18 h80" />
          </g>
          <path d="M-46 -64 q 46 -70 92 0" stroke="#3B4252" strokeWidth={4} fill="none" />
        </g>
      );
    case "tennisnet":
      return (
        <g>
          <rect x={-120} y={-66} width={7} height={66} rx={3} fill="#3A3F4A" />
          <rect x={113} y={-66} width={7} height={66} rx={3} fill="#3A3F4A" />
          <rect x={-113} y={-58} width={226} height={44} fill="#1E2430" opacity=".18" />
          <g stroke="#2A3242" strokeWidth={1.4} opacity=".6">
            {Array.from({ length: 20 }, (_, i) => <path key={i} d={`M${-110 + i * 11.5} -58 v44`} />)}
            {Array.from({ length: 4 }, (_, i) => <path key={i} d={`M-113 ${-50 + i * 10} h226`} />)}
          </g>
          <rect x={-113} y={-62} width={226} height={6} rx={2} fill="#fff" />
        </g>
      );
    case "trophy":
      return (
        <g className="sa-bob">
          <rect x={-26} y={-14} width={52} height={14} rx={3} fill="#8A5A34" />
          <rect x={-8} y={-38} width={16} height={26} fill="#E6B52E" />
          <path d="M-34 -96 h68 q 0 50 -34 60 q -34 -10 -34 -60 z" fill="#FFC93C" stroke="#E0A21E" strokeWidth={3} />
          <path d="M-34 -86 q -24 0 -18 22 q 6 14 22 12 M34 -86 q 24 0 18 22 q -6 14 -22 12" stroke="#E0A21E" strokeWidth={5} fill="none" />
          <path className="sa-twinkle" d="M14 -104 L17 -97 L24 -94 L17 -91 L14 -84 L11 -91 L4 -94 L11 -97 Z" fill="#FFF6C8" />
        </g>
      );
    case "ballfly":
      return (
        <g className="sa-ballx">
          <g className="sa-bally">
            <TennisBall r={11} spin />
          </g>
        </g>
      );
    case "ballbounce":
      return (
        <g>
          <ellipse className="sa-ballshadow" cx={0} cy={0} rx={13} ry={4} fill="#000" opacity=".18" />
          <g className="sa-bounce">
            <TennisBall y={-11} r={11} />
          </g>
        </g>
      );
    case "balltoss":
      return (
        <g className="sa-toss">
          <TennisBall r={11} />
        </g>
      );
    case "swoosh":
      return (
        <g className="sa-swoosh" fill="none" stroke="#FFFFFF" strokeLinecap="round">
          <path d="M-70 -10 q 60 -70 140 -30" strokeWidth={8} opacity=".9" />
          <path d="M-58 8 q 56 -54 122 -22" strokeWidth={5} opacity=".7" />
          <path d="M-44 24 q 44 -36 96 -14" strokeWidth={3} opacity=".5" />
        </g>
      );
    case "wall":
      return (
        <g>
          <rect x={-130} y={-230} width={260} height={230} rx={6} fill="#5E8C6A" />
          {Array.from({ length: 9 }, (_, r) => (
            <g key={r}>
              {Array.from({ length: 6 }, (_, c) => (
                <rect key={c} x={-130 + c * 46 + (r % 2 ? 23 : 0) - (r % 2 && c === 5 ? 23 : 0)} y={-230 + r * 25.5} width={44} height={23} rx={3} fill={(r + c) % 3 ? "#6B9A76" : "#628F6D"} />
              ))}
            </g>
          ))}
          <rect x={-130} y={-96} width={260} height={6} fill="#FFFFFF" opacity=".9" />
          <g className="sa-pulse">
            <circle cx={0} cy={-150} r={30} fill="none" stroke="#FFFFFF" strokeWidth={5} />
            <circle cx={0} cy={-150} r={15} fill="none" stroke="#FFC93C" strokeWidth={5} />
            <circle cx={0} cy={-150} r={5} fill="#FF7A59" />
          </g>
        </g>
      );
    case "ballrebound":
      return (
        <g className="sa-rebx">
          <g className="sa-reby">
            <TennisBall r={11} spin />
          </g>
        </g>
      );
    case "ballrally":
      return (
        <g className="sa-rallyx">
          <g className="sa-rallyy">
            <TennisBall r={11} spin />
          </g>
        </g>
      );
    case "target":
      return (
        <g>
          <g className="sa-target">
            <ellipse cx={0} cy={-4} rx={58} ry={14} fill="#FF7A59" opacity=".9" />
            <ellipse cx={0} cy={-4} rx={40} ry={9.5} fill="#FFFFFF" />
            <ellipse cx={0} cy={-4} rx={22} ry={5.5} fill="#FF7A59" />
            <ellipse cx={0} cy={-4} rx={7} ry={2} fill="#FFFFFF" />
          </g>
        </g>
      );
    case "footprints":
      return (
        <g>
          {[[-60, -6], [-25, 4], [10, -8], [45, 3]].map(([x, y], i) => (
            <g key={i} className="sa-step" style={{ animationDelay: `${i * 0.35}s` }} transform={`translate(${x} ${y}) rotate(${i % 2 ? 8 : -8})`}>
              <ellipse cx={0} cy={0} rx={13} ry={6} fill="#FFFFFF" opacity=".85" />
              <ellipse cx={-11} cy={-1} rx={5} ry={4} fill="#FFFFFF" opacity=".85" />
            </g>
          ))}
        </g>
      );
    case "ladder":
      return (
        <g>
          <path d="M-150 -6 L150 -6 M-170 14 L170 14" stroke="#FFC93C" strokeWidth={6} strokeLinecap="round" />
          {Array.from({ length: 8 }, (_, i) => (
            <path key={i} d={`M${-150 + i * 43} -6 L${-170 + i * 48.5} 14`} stroke="#FFC93C" strokeWidth={5} strokeLinecap="round" />
          ))}
        </g>
      );
    case "progresschart":
      return (
        <g>
          <rect x={-12} y={-150} width={10} height={150} rx={4} fill="#8A5A34" />
          <rect x={-90} y={-250} width={180} height={130} rx={10} fill="#FFFFFF" stroke="#E2D3B8" strokeWidth={4} />
          <path d="M-74 -135 H74" stroke="#C9B99A" strokeWidth={3} />
          {[22, 38, 55, 70, 92].map((h, i) => (
            <rect key={i} className="sa-grow" style={{ animationDelay: `${i * 0.25}s` }} x={-68 + i * 28} y={-135 - h} width={20} height={h} rx={4} fill={["#9AD0F5", "#7BC0F0", "#5BB0EB", "#3E9BE0", "#FFC93C"][i]} />
          ))}
          <path className="sa-twinkle" d="M58 -238 L61 -231 L68 -228 L61 -225 L58 -218 L55 -225 L48 -228 L55 -231 Z" fill="#FFC93C" />
        </g>
      );
    case "scoreboard":
    case "scoreboardfixed": {
      const steps = ["0", "15", "30", "40", "GAME"];
      return (
        <g>
          <rect x={-8} y={-120} width={16} height={120} rx={4} fill="#5B6573" />
          <rect x={-86} y={-230} width={172} height={118} rx={12} fill="#1F3B2D" stroke="#C9A55B" strokeWidth={5} />
          <text x={-46} y={-205} fontSize={15} fontWeight={800} fill="#C9E6D3" textAnchor="middle">ADAM</text>
          <text x={46} y={-205} fontSize={15} fontWeight={800} fill="#C9E6D3" textAnchor="middle">LAWAN</text>
          <path d="M0 -218 V-124" stroke="#C9A55B" strokeWidth={2} opacity=".6" />
          {k === "scoreboard" ? (
            steps.map((v, i) => (
              <text key={v} className="sa-score" style={{ animationDelay: `${i * 1.2}s` }} x={-46} y={-148} fontSize={v.length > 2 ? 22 : 40} fontWeight={900} fill="#FFE066" textAnchor="middle">{v}</text>
            ))
          ) : (
            <text x={-46} y={-148} fontSize={40} fontWeight={900} fill="#FFE066" textAnchor="middle">40</text>
          )}
          <text x={46} y={-148} fontSize={40} fontWeight={900} fill="#FFFFFF" textAnchor="middle">{k === "scoreboard" ? "0" : "40"}</text>
        </g>
      );
    }
    case "ballroll":
      return (
        <g className="sa-roll">
          <ellipse cx={0} cy={0} rx={12} ry={3.5} fill="#000" opacity=".15" />
          <TennisBall y={-11} r={11} spin />
        </g>
      );
    case "ballmark":
      return (
        <g>
          <ellipse cx={0} cy={-2} rx={70} ry={5} fill="#FFFFFF" />
          <ellipse className="sa-mark" cx={-6} cy={-2} rx={16} ry={5} fill="#7A90B8" opacity=".55" />
          <g className="sa-puff">
            {[-18, -6, 8, 20].map((x, i) => <circle key={i} cx={x} cy={-8 - (i % 2) * 6} r={6 + (i % 2) * 2} fill="#FFFFFF" opacity=".75" />)}
          </g>
          <g className="sa-land">
            <TennisBall y={-11} r={11} />
          </g>
        </g>
      );
    case "racketbroken":
      return (
        <g transform="rotate(-24)">
          <rect x={-4} y={-46} width={8} height={46} rx={4} fill="#F4F4F6" stroke="#2C3E7A" strokeWidth={2} />
          <ellipse cx={0} cy={-84} rx={28} ry={38} fill="#EEF3FF" fillOpacity=".35" stroke="#2C3E7A" strokeWidth={7} />
          <g stroke="#9AA7C7" strokeWidth={1.4} fill="none">
            {[-18, 0, 18].map((x) => <path key={x} d={`M${x} -118 v68`} />)}
            {[-108, -84, -60].map((y) => <path key={y} d={`M-26 ${y} h52`} />)}
            <path className="sa-wiggle" d="M-9 -118 q -6 20 4 34 q 8 12 -2 22" />
            <path className="sa-wiggle" d="M9 -50 q 8 -14 -2 -26" style={{ animationDelay: "-.4s" }} />
          </g>
          <g className="sa-spin-fast" transform="translate(0 -84)">
            <path d="M0 -40 L3 -33 L10 -30 L3 -27 L0 -20 L-3 -27 L-10 -30 L-3 -33 Z" fill="#FFC93C" />
          </g>
        </g>
      );
    case "spool":
      return (
        <g>
          <rect x={-26} y={-52} width={52} height={10} rx={3} fill="#3B4252" />
          <rect x={-26} y={-10} width={52} height={10} rx={3} fill="#3B4252" />
          <rect x={-20} y={-44} width={40} height={36} fill="#F2F2F2" />
          {[-38, -30, -22, -14].map((y) => <path key={y} d={`M-20 ${y} h40`} stroke="#C8CCD6" strokeWidth={2} />)}
          <path className="sa-wiggle" d="M20 -26 q 30 -10 40 -40" stroke="#E8E8E8" strokeWidth={2} fill="none" />
        </g>
      );
    case "whistle":
      return (
        <g className="sa-bob">
          <path d="M-22 -30 h30 a14 14 0 1 1 -2 18 h-28 z" fill="#C9D3DE" stroke="#7A8794" strokeWidth={2} />
          <circle cx={14} cy={-21} r={5} fill="#7A8794" />
          {[0, 1, 2].map((i) => <path key={i} className="sa-pulse" style={{ animationDelay: `${i * .3}s` }} d={`M${-30 - i * 10} ${-38 - i * 6} l-8 -8`} stroke="#5BB8F5" strokeWidth={3} strokeLinecap="round" />)}
        </g>
      );
    case "cap":
      return (
        <g>
          <path d="M-28 -6 q 0 -34 30 -34 q 30 0 30 34 z" fill="#3E7DD8" />
          <path d="M30 -8 q 26 0 34 8 h-38 z" fill="#2C5FAE" />
          <circle cx={2} cy={-38} r={4} fill="#2C5FAE" />
          <path d="M-8 -22 l4 -7 l4 7 l-6 -4 h7 z" fill="#FFFFFF" />
        </g>
      );
    case "bonk":
      return (
        <g>
          <g className="sa-spin-fast">
            {[0, 120, 240].map((a) => (
              <path key={a} transform={`rotate(${a}) translate(30 0)`} d="M0 -9 L3 -3 L9 0 L3 3 L0 9 L-3 3 L-9 0 L-3 -3 Z" fill="#FFC93C" stroke="#E0A21E" strokeWidth={1.5} />
            ))}
          </g>
          <text x={22} y={-26} fontSize={22} fontWeight={900} fill="#FF7A59" className="sa-pulse">!</text>
        </g>
      );
    case "bench":
      return (
        <g>
          <rect x={-80} y={-48} width={160} height={14} rx={6} fill="#B5753E" />
          <rect x={-80} y={-74} width={160} height={12} rx={6} fill="#C98A50" />
          <rect x={-70} y={-36} width={10} height={36} fill="#7A4A26" />
          <rect x={60} y={-36} width={10} height={36} fill="#7A4A26" />
        </g>
      );
  }
}

/* ───────── effects ───────── */

function Fx({ k, time, page = false }: { k: ArtFx; time: ArtTime; page?: boolean }) {
  const seeds = Array.from({ length: 16 }, (_, i) => ({ x: (i * 53 + 17) % W, d: (i * 0.37) % 3, y: (i * 41) % 260 }));
  switch (k) {
    case "rain":
      return (
        <g>
          {Array.from({ length: 34 }, (_, i) => (
            <line key={i} className={page ? "sa-raindrop sa-raindrop--tall" : "sa-raindrop"} style={{ animationDelay: `${-((i * 0.13) % 1)}s` }} x1={(i * 37) % W} y1={page ? -360 : -20} x2={(i * 37) % W - 8} y2={page ? -332 : 8} stroke="#DDEBFA" strokeWidth={3} strokeLinecap="round" opacity=".8" />
          ))}
        </g>
      );
    case "lightning":
      return (
        <g>
          <rect className="sa-flash" x={-100} y={page ? -360 : -20} width={W + 200} height={900} fill="#FFFFFF" />
          <path className="sa-bolt" transform={`translate(${page ? 515 : 640} ${page ? 30 : 20})`} d="M0 0 l-28 70 h22 l-18 70 l50 -90 h-24 l20 -50 z" fill="#FFE066" stroke="#FFB800" strokeWidth={3} />
        </g>
      );
    case "shootingstar":
      return (
        <g>
          <g className="sa-shoot" transform={`translate(${page ? 300 : 200} ${page ? 0 : 40})`}>
            <path d="M0 0 l-90 -36" stroke="#FFF6C8" strokeWidth={4} strokeLinecap="round" opacity=".7" />
            <path d="M0 -10 L3 -3 L10 0 L3 3 L0 10 L-3 3 L-10 0 L-3 -3 Z" fill="#FFF6C8" />
          </g>
        </g>
      );
    case "stars":
      return (
        <g>
          {seeds.map((s, i) => (
            <path key={i} className="sa-twinkle" style={{ animationDelay: `${s.d}s` }} transform={`translate(${s.x} ${page ? -300 + ((s.y * 2.1) % 520) : 20 + (s.y % 200)})`} d="M0 -7 L2 -2 L7 0 L2 2 L0 7 L-2 2 L-7 0 L-2 -2 Z" fill="#FFF6C8" />
          ))}
        </g>
      );
    case "sparkle":
      return (
        <g>
          {seeds.slice(0, 9).map((s, i) => (
            <path key={i} className="sa-twinkle" style={{ animationDelay: `${s.d}s` }} transform={`translate(${s.x} ${60 + s.y})`} d="M0 -10 L3 -3 L10 0 L3 3 L0 10 L-3 3 L-10 0 L-3 -3 Z" fill={time === "night" ? "#FFF6C8" : "#FFC145"} />
          ))}
        </g>
      );
    case "bubbles":
      return (
        <g>
          {seeds.slice(0, 12).map((s, i) => (
            <g key={i} transform={`translate(${120 + ((s.x * 0.6) % 520)} 420)`}>
              <circle className="sa-rise" style={{ animationDelay: `${-s.d * 1.6}s` }} r={8 + (i % 4) * 4} fill="#fff" fillOpacity=".35" stroke="#fff" strokeWidth={2} />
            </g>
          ))}
        </g>
      );
    case "hearts":
      return (
        <g>
          {seeds.slice(0, 7).map((s, i) => (
            <g key={i} transform={`translate(${160 + ((s.x * 0.6) % 480)} 400) scale(.35)`}>
              <path className="sa-rise" style={{ animationDelay: `${-s.d * 1.5}s` }} d="M0 0 q -40 -26 -40 -50 q 0 -22 20 -22 q 14 0 20 14 q 6 -14 20 -14 q 20 0 20 22 q 0 24 -40 50 z" fill="#FF7A9C" />
            </g>
          ))}
        </g>
      );
    case "confetti":
      return (
        <g>
          {Array.from({ length: 26 }, (_, i) => (
            <rect key={i} className="sa-fall" style={{ animationDelay: `${-((i * 0.29) % 3)}s` }} x={(i * 31) % W} y={-20} width={10} height={14} rx={2} fill={["#FF7A7A", "#FFC145", "#5BB8F5", "#7BC67B", "#C77DFF"][i % 5]} />
          ))}
        </g>
      );
    case "zzz":
      return (
        <g>
          {["Z", "z", "Z"].map((z, i) => (
            <text key={i} className="sa-zzz" style={{ animationDelay: `${i * 0.9}s` }} x={560 + i * 26} y={210 - i * 10} fontSize={34 - i * 6} fontWeight={800} fill={time === "night" ? "#E3E8FF" : "#7A86C9"}>
              {z}
            </text>
          ))}
        </g>
      );
    case "fireflies":
      return (
        <g>
          {seeds.slice(0, 12).map((s, i) => (
            <circle key={i} className="sa-firefly" style={{ animationDelay: `${-s.d * 2}s` }} cx={s.x} cy={180 + (s.y % 180)} r={4} fill="#FFF27A" />
          ))}
        </g>
      );
    case "leaves":
      return (
        <g>
          {seeds.slice(0, 8).map((s, i) => (
            <ellipse key={i} className="sa-leaf" style={{ animationDelay: `${-s.d * 2}s` }} cx={-20} cy={60 + s.y * 0.8} rx={9} ry={5} fill={["#7BC67B", "#F4A261", "#FFC145"][i % 3]} />
          ))}
        </g>
      );
    case "notes":
      return (
        <g>
          {seeds.slice(0, 5).map((s, i) => (
            <text key={i} className="sa-rise" style={{ animationDelay: `${-s.d * 1.4}s` }} x={300 + i * 50} y={300} fontSize={30} fill="#8A79D9">
              {i % 2 ? "♪" : "♫"}
            </text>
          ))}
        </g>
      );
  }
}

/* ───────── characters ───────── */

/** Empty space under the feet in each pose PNG (fraction of the image
 *  height), measured from the renders — so the feet land on the ground. */
const FOOT_PAD: Record<string, number> = {
  alright: 0.092, idea: 0.094, ok: 0.092, "pose-01": 0.092, "pose-02": 0.198, "pose-03": 0.092,
  "pose-04": 0.092, "pose-05": 0.092, "pose-06": 0.076, "pose-07": 0.092, "pose-08": 0.092,
  "pose-09": 0.084, "pose-10": 0.092, "pose-11": 0.182, "pose-12": 0.086, "pose-13": 0.051,
  "pose-14": 0.092, "pose-15": 0.092, "pose-16": 0.094, "pose-17": 0.109, "pose-18": 0.074,
  "pose-19": 0.092, "pose-20": 0.075, "pose-21": 0.092, "pose-22": 0.092, "pose-23": 0.109,
  "pose-24": 0.092, "pose-25": 0.094, "pose-26": 0.092, "pose-27": 0.092, "pose-28": 0.092,
  "pose-29": 0.092, "pose-30": 0.085, "pose-31": 0.092, "pose-32": 0.07, "pose-33": 0.092,
  "pose-34": 0.085, "pose-35": 0.094, "pose-36": 0.092, "pose-37": 0.092, "pose-38": 0.092,
  "pose-39": 0.066, "pose-40": 0.092, "pose-41": 0.062, "pose-42": 0.083, run: 0.107,
  "thank-you": 0.092, wow: 0.094, yes: 0.092, yeyy: 0.094,
};

function srcFor(who: NonNullable<ArtMo["who"]>, pose: string) {
  return who === "mo" ? `/baby-mo-poses/baby-mo-${pose}.png`
    : who === "ais" ? `/baby-ais-poses/baby-ais-${pose}.png`
    : `/${who}-poses/${who}-${pose}.png`;
}

function Mo({ m, idx, ground }: { m: ArtMo; idx: number; ground: number }) {
  const who = m.who ?? "mo";
  // friends are taller than the twins at the same `s`
  const s = (m.s ?? 235) * (who === "adam" || who === "ayah" ? FRIEND_SCALE[who] : 1);
  const move = m.move ?? "bob";
  // Ais and friend renders all share one ground line: feet at 725/800
  const pad = (who === "mo" ? FOOT_PAD[m.pose] ?? 0.09 : 0.094) * s;
  const src = srcFor(who, m.pose);
  const cls = move === "still" ? "" : move === "bob" ? "sa-mo-breathe" : `sa-mo-${move}`;
  const delay = { animationDelay: `${-idx * 0.7}s` };
  return (
    <g transform={`translate(${m.x} ${ground})`}>
      {/* contact shadow right under the feet; shrinks when Baby Mo hops */}
      <g className={move === "hop" ? "sa-shadow-hop" : ""} style={delay}>
        <ellipse cx={0} cy={2} rx={s * 0.2} ry={s * 0.035} fill="#000" opacity=".16" />
        <ellipse cx={0} cy={1} rx={s * 0.12} ry={s * 0.02} fill="#000" opacity=".14" />
      </g>
      <g className={cls} style={delay}>
        {m.seq ? (
          <g className="sa-seq" transform={m.flip ? "scale(-1 1)" : undefined}>
            {/* onion-skin: the same loop shifted one and two frames back, faint */}
            {(m.ghost ? [2, 1] : []).map((lag) => (
              <g key={`g${lag}`} className="sa-ghost" opacity={lag === 1 ? 0.32 : 0.15} style={{ filter: "saturate(.6)" }}>
              {m.seq!.map((p, j, all) => {
                const n = all.length;
                const dur = n / (m.fps ?? 8);
                return (
                  <image
                    key={`g${lag}-${j}`}
                    className={`sa-f sa-f${n}`}
                    style={{ animationDuration: `${dur}s`, animationDelay: `${-((n - j - lag) * dur) / n}s` }}
                    href={asset(srcFor(who, p))}
                    x={-s / 2}
                    y={-s + pad}
                    width={s}
                    height={s}
                    preserveAspectRatio="xMidYMax meet"
                  />
                );
              })}
              </g>
            ))}
            {m.seq.map((p, j, all) => {
              const n = all.length;
              const dur = n / (m.fps ?? 8);
              const key = m.key ?? Math.round((n - 1) * 0.66);
              return (
                <image
                  key={j}
                  className={`sa-f sa-f${n}${j === key ? " sa-key" : ""}`}
                  style={{ animationDuration: `${dur}s`, animationDelay: `${-((n - j) * dur) / n}s` }}
                  href={asset(srcFor(who, p))}
                  x={-s / 2}
                  y={-s + pad}
                  width={s}
                  height={s}
                  preserveAspectRatio="xMidYMax meet"
                />
              );
            })}
          </g>
        ) : (
          <image
            href={asset(src)}
            x={-s / 2}
            y={-s + pad}
            width={s}
            height={s}
            transform={m.flip ? "scale(-1 1)" : undefined}
            preserveAspectRatio="xMidYMax meet"
          />
        )}
      </g>
    </g>
  );
}

/** Centre of the full-page crop: the scene's focus, else midway between
 *  Baby Mo and the main prop (so both are on the page). */
/** Two-page spreads: slide the characters and props onto one page so
 *  nobody stands in the fold; the text sits on the other page. Matches the
 *  side BookReader picks (characters mostly right of 410 → text on the left). */
export function spreadShift(scene: ArtScene): number {
  const mo = scene.mo ?? [];
  if (!mo.length) return 0;
  const mid = mo.reduce((a, m) => a + m.x, 0) / mo.length;
  const target = mid > 410 ? 575 : 225;
  const xs = [...mo.map((m) => m.x), ...(scene.props ?? []).filter((p) => (p.y ?? 999) > 250).map((p) => p.x)];
  const lo = Math.min(...xs);
  const hi = Math.max(...xs);
  let d = target - mid;
  d = Math.max(d, 70 - lo);
  d = Math.min(d, 730 - hi);
  return Math.round(d);
}

const isKid = (m: ArtMo) => !m.who || m.who === "mo" || m.who === "ais";

function pageFocus(scene: ArtScene): number {
  // keep the first little one on the page (grown-ups are big enough to be cropped a bit)
  const mo = (scene.mo?.find(isKid) ?? scene.mo?.[0])?.x;
  const prop = scene.props?.[0]?.x;
  let f = scene.focus ?? (mo !== undefined && prop !== undefined && Math.abs(mo - prop) < 320 ? (mo + prop) / 2 : (mo ?? prop ?? W / 2));
  // Never let Baby Mo slip off a narrow phone page: keep him near the middle.
  // (a little more room when a grown-up shares the page, so both fit)
  const room = scene.mo?.some((m) => !isKid(m)) ? 85 : 60;
  if (mo !== undefined) f = Math.min(mo + room, Math.max(mo - room, f));
  return f;
}

export function StoryArt({
  scene,
  className = "",
  title,
  portrait = false,
  page = false,
  spread = false,
}: {
  scene: ArtScene;
  className?: string;
  title?: string;
  /** 4:5 crop centred on Baby Mo (for book-cover thumbnails) */
  portrait?: boolean;
  /** full picture-book page: tall portrait crop with sky / wall above the
   *  scene for the text, anchored to the ground so Baby Mo never gets cut */
  page?: boolean;
  /** two-page spread: the whole 800-wide scene as one continuous picture,
   *  with extra sky / wall above for the text, anchored to the ground */
  spread?: boolean;
}) {
  const time = scene.time ?? "day";
  const outdoor = ["garden", "park", "market", "street", "beach", "court"].includes(scene.bg);
  const groundY = outdoor ? 410 : 405;
  // Baby Mo stands on the floor / ground in the foreground
  const moGround = outdoor ? 428 : 425;
  return (
    <svg
      viewBox={
        spread
          ? `0 -150 ${W} 600`
          : page
          ? `${Math.min(W - 460, Math.max(0, pageFocus(scene) - 230))} -110 460 560`
          : portrait
            ? `${Math.min(W - 360, Math.max(0, (scene.mo?.[0]?.x ?? W / 2) - 180))} 0 360 ${H}`
            : `0 0 ${W} ${H}`
      }
      className={`story-art ${className}`}
      role="img"
      aria-label={title}
      preserveAspectRatio={page || spread ? "xMidYMax slice" : "xMidYMid slice"}
    >
      <defs>
        <radialGradient id="sa-sunglow">
          <stop offset="0" stopColor="#FFF6C8" stopOpacity=".9" />
          <stop offset="1" stopColor="#FFD447" stopOpacity="0" />
        </radialGradient>
      </defs>
      <Background bg={scene.bg} time={time} />
      {(scene.fx ?? []).filter((f) => f === "stars").map((f) => <Fx key={f} k={f} time={time} page={page || spread} />)}
      <g transform={spread ? `translate(${spreadShift(scene)} 0)` : undefined}>
      {(scene.props ?? []).map((p: ArtItem, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y ?? groundY}) scale(${(p.s ?? 1) * (p.flip ? -1 : 1)} ${p.s ?? 1})`} style={p.d ? ({ "--sa-d": `${p.d}s` } as React.CSSProperties) : undefined}>
          <Prop k={p.k} />
        </g>
      ))}
      {/* grown-ups and big brother stand behind the little ones */}
      {(scene.mo ?? []).map((m, i) => [m, i] as const).sort(([a], [b]) => Number(isKid(a)) - Number(isKid(b))).map(([m, i]) => <Mo key={i} m={m} idx={i} ground={moGround} />)}
      </g>
      {(scene.fx ?? []).filter((f) => f !== "stars").map((f) => <Fx key={f} k={f} time={time} page={page || spread} />)}
      {(time === "rain" && !(scene.fx ?? []).includes("rain") && outdoor) && <Fx k="rain" time={time} page={page || spread} />}
    </svg>
  );
}
