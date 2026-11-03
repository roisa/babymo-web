/**
 * 20 promo templates for Baby Mo games. Each one draws a single frame for a
 * given time; the studio plays them live and records them to video.
 * Copy defaults come in Indonesian and English and are fully editable.
 */
import {
  type Lang,
  type PromoGame,
  type Scene,
  bg,
  brand,
  chip,
  clamp,
  confetti,
  endCard,
  font,
  hexA,
  icon,
  inCubic,
  inOut,
  lerp,
  mo,
  outBack,
  outCubic,
  outElastic,
  phone,
  pill,
  rng,
  rr,
  seg,
  star,
  text,
  typed,
  Y,
} from "./engine";

export interface Copy {
  headline: string;
  sub: string;
  cta: string;
}

export interface Template {
  id: string;
  emoji: string;
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
  /** single = about one game; multi = shows many games */
  kind: "single" | "multi";
  dur: number;
  palette: string;
  copy: (lang: Lang, g: PromoGame, all: PromoGame[]) => Copy;
  draw: (s: Scene) => void;
}

const CTA = { id: "Main gratis sekarang!", en: "Play free now!" };
const L = (lang: Lang, id: string, en: string) => (lang === "id" ? id : en);
const isStory = (s: Scene) => s.fmt === "story";
const PH = (s: Scene, story = 1000, square = 600) => (isStory(s) ? story : square);
/** pick n games starting from the selected one */
const pickGames = (s: Scene, n: number) => {
  const i = Math.max(0, s.games.findIndex((g) => g.slug === s.game.slug));
  return Array.from({ length: n }, (_, k) => s.games[(i + k) % s.games.length]!);
};

export const TEMPLATES: Template[] = [
  /* 1 ─────────────────────────────────────────── */
  {
    id: "phone-rise",
    emoji: "📱",
    name: { id: "HP Naik", en: "Phone Rise" },
    desc: { id: "Judul besar, HP berisi gameplay naik dari bawah.", en: "Big title, a phone with gameplay rises from below." },
    kind: "single",
    dur: 8,
    palette: "sunny",
    copy: (l, g) => ({ headline: g.name, sub: g.hook, cta: CTA[l] }),
    draw(s) {
      const { W, p } = s;
      bg(s);
      const k = outCubic(seg(p, 0, 0.18));
      text(s, s.text.headline, W / 2, Y(s, 0.08, 0.06), { size: isStory(s) ? 110 : 80, reveal: seg(p, 0.02, 0.2) });
      text(s, s.text.sub, W / 2, Y(s, 0.08, 0.06) + (isStory(s) ? 150 : 100), { size: isStory(s) ? 50 : 38, weight: 600, color: s.pal.soft, alpha: seg(p, 0.12, 0.25), maxW: W - 200 });
      const h = PH(s);
      phone(s, s.game.shot, W / 2, lerp(s.H + h, Y(s, 0.6, 0.66), k), h, Math.sin(s.t * 1.2) * 0.02, 1, inOut(seg(p, 0.25, 0.75)) * 0.5);
      mo(s, "wow", W * 0.82, Y(s, 0.76, 0.8), isStory(s) ? 300 : 220, seg(p, 0.2, 0.3));
      endCard(s, seg(p, 0.8, 0.9));
    },
  },
  /* 2 ─────────────────────────────────────────── */
  {
    id: "icon-grid",
    emoji: "🧩",
    name: { id: "Semua Game", en: "All Games Grid" },
    desc: { id: "Ikon semua game muncul satu per satu.", en: "Every game icon pops in one by one." },
    kind: "multi",
    dur: 8,
    palette: "ocean",
    copy: (l, _g, all) => ({
      headline: L(l, `${all.length} game Islami, gratis!`, `${all.length} Islamic games, free!`),
      sub: L(l, "Doa, sholat, huruf hijaiyah, dan banyak lagi", "Du'as, prayer, Arabic letters and more"),
      cta: CTA[l],
    }),
    draw(s) {
      const { W, p, games } = s;
      bg(s);
      text(s, s.text.headline, W / 2, Y(s, 0.07, 0.05), { size: isStory(s) ? 96 : 72, reveal: seg(p, 0, 0.15) });
      const cols = isStory(s) ? 4 : 5, size = isStory(s) ? 190 : 130, gap = isStory(s) ? 50 : 28;
      const rows = Math.ceil(games.length / cols);
      const gw = cols * size + (cols - 1) * gap;
      const top = Y(s, 0.28, 0.24);
      games.forEach((g, i) => {
        const r = Math.floor(i / cols), c = i % cols;
        const inRow = Math.min(cols, games.length - r * cols);
        const rowW = inRow * size + (inRow - 1) * gap;
        const x = W / 2 - rowW / 2 + c * (size + gap) + size / 2;
        const y = top + r * (size + gap) + size / 2;
        const k = outBack(seg(p, 0.1 + i * 0.03, 0.2 + i * 0.03));
        icon(s, g, x, y + Math.sin(s.t * 2 + i) * 6, size * k, clamp(k), Math.sin(s.t + i) * 0.04);
      });
      void gw;
      const by = top + rows * (size + gap) + 40;
      text(s, s.text.sub, W / 2, by, { size: isStory(s) ? 50 : 38, weight: 600, color: s.pal.soft, alpha: seg(p, 0.55, 0.65), maxW: W - 180 });
      mo(s, "yeyy", W / 2, by + (isStory(s) ? 300 : 200), isStory(s) ? 360 : 0, seg(p, 0.6, 0.7));
      endCard(s, seg(p, 0.8, 0.9));
    },
  },
  /* 3 ─────────────────────────────────────────── */
  {
    id: "countdown",
    emoji: "⏱️",
    name: { id: "Hitung Mundur", en: "Countdown" },
    desc: { id: "3… 2… 1… lalu game muncul dengan confetti.", en: "3… 2… 1… then the game bursts in with confetti." },
    kind: "single",
    dur: 8,
    palette: "berry",
    copy: (l, g) => ({ headline: L(l, `Siap main ${g.name}?`, `Ready for ${g.name}?`), sub: g.hook, cta: CTA[l] }),
    draw(s) {
      const { W, H, p, ctx, pal } = s;
      bg(s);
      text(s, s.text.headline, W / 2, Y(s, 0.08, 0.06), { size: isStory(s) ? 90 : 68, alpha: seg(p, 0, 0.06) });
      for (let n = 0; n < 3; n++) {
        const a = 0.06 + n * 0.1, k = seg(p, a, a + 0.1);
        if (k <= 0 || k >= 1) continue;
        const sc = outElastic(Math.min(1, k * 2)) * (1 - inCubic(seg(k, 0.7, 1)) * 0.6);
        ctx.save();
        ctx.translate(W / 2, H / 2);
        ctx.scale(sc, sc);
        ctx.globalAlpha = 1 - seg(k, 0.75, 1);
        ctx.beginPath();
        ctx.arc(0, 0, 230, 0, Math.PI * 2);
        ctx.fillStyle = [pal.accent, pal.accent2, "#E6B52E"][n]!;
        ctx.fill();
        ctx.font = font(s, 300, 800);
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(3 - n), 0, 14);
        ctx.restore();
      }
      const k = outBack(seg(p, 0.36, 0.48));
      if (k > 0) {
        const h = PH(s, 980, 560);
        phone(s, s.game.shot, W / 2, Y(s, 0.53, 0.6), h * k, Math.sin(s.t * 1.5) * 0.03, clamp(k * 2), seg(p, 0.45, 0.78) * 0.4);
        text(s, s.text.sub, W / 2, Y(s, 0.83, 0.9), { size: isStory(s) ? 48 : 36, weight: 700, color: pal.soft, alpha: seg(p, 0.45, 0.55), maxW: W - 160 });
      }
      confetti(s, seg(p, 0.36, 0.7));
      endCard(s, seg(p, 0.8, 0.9));
    },
  },
  /* 4 ─────────────────────────────────────────── */
  {
    id: "quiz-teaser",
    emoji: "❓",
    name: { id: "Tebak-tebakan", en: "Quiz Teaser" },
    desc: { id: "Pertanyaan + timer, lalu jawabannya: main game ini!", en: "A question with a timer, then the answer: play this game!" },
    kind: "single",
    dur: 9,
    palette: "mint",
    copy: (l, g) => ({ headline: g.hook, sub: L(l, "Jawabannya ada di sini 👇", "The answer is in here 👇"), cta: CTA[l] }),
    draw(s) {
      const { W, p, ctx, pal } = s;
      bg(s);
      chip(s, L(s.lang, "Tebak, yuk!", "Can you guess?"), W / 2, Y(s, 0.08, 0.07), 40, seg(p, 0, 0.05));
      text(s, s.text.headline, W / 2, Y(s, 0.14, 0.13), { size: isStory(s) ? 88 : 64, reveal: seg(p, 0.02, 0.18), maxW: W - 140 });
      // timer ring
      const tk = seg(p, 0.15, 0.42);
      if (p < 0.47) {
        const cx = W / 2, cy = Y(s, 0.52, 0.56), R = isStory(s) ? 230 : 170;
        mo(s, "idea", cx, cy, R * 1.5);
        ctx.save();
        ctx.lineWidth = 26;
        ctx.lineCap = "round";
        ctx.strokeStyle = hexA(pal.ink, 0.1);
        ctx.beginPath();
        ctx.arc(cx, cy, R + 40, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = pal.accent2;
        ctx.beginPath();
        ctx.arc(cx, cy, R + 40, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (1 - tk));
        ctx.stroke();
        ctx.restore();
        text(s, String(Math.max(1, Math.ceil((1 - tk) * 5))), cx, cy + R + 90, { size: 90, color: pal.accent2 });
      }
      const k = outBack(seg(p, 0.45, 0.56));
      if (k > 0) {
        text(s, s.text.sub, W / 2, Y(s, 0.34, 0.36), { size: isStory(s) ? 60 : 44, color: pal.accent, alpha: clamp(k) });
        phone(s, s.game.shot, W / 2, Y(s, 0.62, 0.72), PH(s, 820, 480) * k, 0, clamp(k), seg(p, 0.55, 0.8) * 0.4);
      }
      endCard(s, seg(p, 0.82, 0.92), "yes");
    },
  },
  /* 5 ─────────────────────────────────────────── */
  {
    id: "carousel",
    emoji: "🎠",
    name: { id: "Geser-geser", en: "Swipe Carousel" },
    desc: { id: "Tiga game bergeser seperti carousel.", en: "Three games slide by like a carousel." },
    kind: "multi",
    dur: 10,
    palette: "sunny",
    copy: (l) => ({ headline: L(l, "Pilih game favoritmu!", "Pick your favourite!"), sub: L(l, "Semua gratis, tanpa iklan di dalam game", "All free, no ads inside the games"), cta: CTA[l] }),
    draw(s) {
      const { W, p } = s;
      bg(s);
      text(s, s.text.headline, W / 2, Y(s, 0.07, 0.05), { size: isStory(s) ? 96 : 70, reveal: seg(p, 0, 0.12) });
      const gs = pickGames(s, 3);
      const pos = inOut(seg(p, 0.12, 0.3)) + inOut(seg(p, 0.36, 0.52)) + inOut(seg(p, 0.58, 0.74)) * 0; // 0..2
      const h = PH(s, 980, 560);
      gs.forEach((g, i) => {
        const off = i - pos;
        const x = W / 2 + off * W * 0.56;
        const sc = 1 - Math.min(1, Math.abs(off)) * 0.25;
        phone(s, g.shot, x, Y(s, 0.5, 0.56), h * sc, off * 0.08, 1 - Math.min(0.45, Math.abs(off) * 0.45));
      });
      const cur = gs[Math.min(2, Math.round(pos))]!;
      chip(s, `${cur.emoji} ${cur.name}`, W / 2, Y(s, 0.8, 0.92), isStory(s) ? 46 : 36);
      text(s, s.text.sub, W / 2, Y(s, 0.84, 0.96), { size: 40, weight: 600, color: s.pal.soft, alpha: isStory(s) ? seg(p, 0.1, 0.2) : 0 });
      endCard(s, seg(p, 0.8, 0.9));
    },
  },
  /* 6 ─────────────────────────────────────────── */
  {
    id: "mo-says",
    emoji: "💬",
    name: { id: "Kata Baby Mo", en: "Baby Mo Says" },
    desc: { id: "Baby Mo 'mengetik' ajakan di balon kata.", en: "Baby Mo types an invite in a speech bubble." },
    kind: "single",
    dur: 9,
    palette: "ocean",
    copy: (l, g) => ({ headline: L(l, `Assalamu'alaikum! Yuk main ${g.name} bareng aku!`, `Assalamu'alaikum! Come play ${g.name} with me!`), sub: g.hook, cta: CTA[l] }),
    draw(s) {
      const { W, p, ctx, pal } = s;
      bg(s);
      const bx = 70, by = Y(s, 0.08, 0.06), bw = W - 140;
      const k = outBack(seg(p, 0, 0.08));
      ctx.save();
      ctx.font = font(s, isStory(s) ? 70 : 54, 800);
      ctx.restore();
      const bh = isStory(s) ? 420 : 300;
      ctx.save();
      ctx.globalAlpha = clamp(k);
      ctx.translate(W / 2, by + bh / 2);
      ctx.scale(k, k);
      ctx.translate(-W / 2, -(by + bh / 2));
      ctx.shadowColor = "rgba(20,30,60,.18)";
      ctx.shadowBlur = 40;
      rr(ctx, bx, by, bw, bh, 60);
      ctx.fillStyle = pal.card;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(W * 0.3, by + bh - 2);
      ctx.lineTo(W * 0.24, by + bh + 70);
      ctx.lineTo(W * 0.4, by + bh - 2);
      ctx.fill();
      ctx.restore();
      text(s, typed(s.text.headline, seg(p, 0.08, 0.35)), W / 2, by + 50, { size: isStory(s) ? 70 : 52, maxW: bw - 100 });
      mo(s, "ok", W * 0.27, by + bh + (isStory(s) ? 330 : 220), isStory(s) ? 480 : 300);
      const pk = outCubic(seg(p, 0.35, 0.5));
      phone(s, s.game.shot, lerp(W + 400, W * 0.7, pk), Y(s, 0.58, 0.7), PH(s, 820, 520), 0.12 - pk * 0.08, 1, seg(p, 0.5, 0.8) * 0.4);
      text(s, s.text.sub, W / 2, Y(s, 0.82, 0.93), { size: isStory(s) ? 44 : 32, weight: 700, color: pal.soft, alpha: seg(p, 0.5, 0.6), maxW: W - 140 });
      endCard(s, seg(p, 0.82, 0.92), "thank-you");
    },
  },
  /* 7 ─────────────────────────────────────────── */
  {
    id: "checklist",
    emoji: "✅",
    name: { id: "Ceklis Orang Tua", en: "Parent Checklist" },
    desc: { id: "Alasan orang tua tenang: gratis, tanpa iklan, offline, aman.", en: "Why parents relax: free, no ads, offline, kid-safe." },
    kind: "single",
    dur: 9,
    palette: "mint",
    copy: (l) => ({
      headline: L(l, "Game anak yang bikin Ayah Bunda tenang", "Kids' games parents can relax about"),
      sub: L(l, "Gratis\nTanpa iklan di dalam game\nBisa dimainkan offline\nKonten Islami, aman untuk anak", "Free\nNo ads inside the games\nWorks offline\nIslamic, kid-safe content"),
      cta: CTA[l],
    }),
    draw(s) {
      const { W, p, ctx, pal } = s;
      bg(s);
      text(s, s.text.headline, W / 2, Y(s, 0.07, 0.05), { size: isStory(s) ? 84 : 62, reveal: seg(p, 0, 0.15) });
      const items = s.text.sub.split("\n").filter(Boolean).slice(0, 5);
      const top = Y(s, 0.27, 0.3), gap = isStory(s) ? 130 : 100, x0 = 120;
      items.forEach((it, i) => {
        const k = outBack(seg(p, 0.15 + i * 0.09, 0.24 + i * 0.09));
        if (k <= 0) return;
        const y = top + i * gap;
        ctx.save();
        ctx.globalAlpha = clamp(k);
        rr(ctx, x0 - 20, y - 50, W - 2 * (x0 - 20), 100, 50);
        ctx.fillStyle = pal.dark ? "rgba(255,255,255,.08)" : "rgba(255,255,255,.8)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x0 + 30, y, 32 * k, 0, Math.PI * 2);
        ctx.fillStyle = pal.accent;
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 8;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x0 + 16, y + 2);
        ctx.lineTo(x0 + 27, y + 13);
        ctx.lineTo(x0 + 46, y - 12);
        ctx.stroke();
        ctx.font = font(s, isStory(s) ? 46 : 38, 700);
        ctx.fillStyle = pal.ink;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(it, x0 + 90, y + 2);
        ctx.restore();
      });
      if (isStory(s)) {
        phone(s, s.game.shot, W * 0.68, Y(s, 0.72, 0.8), 600, -0.06, seg(p, 0.55, 0.65), seg(p, 0.6, 0.8) * 0.3);
        mo(s, "thank-you", W * 0.26, Y(s, 0.74, 0.8), 380, seg(p, 0.55, 0.65));
      }
      endCard(s, seg(p, 0.82, 0.92));
    },
  },
  /* 8 ─────────────────────────────────────────── */
  {
    id: "scroll-stop",
    emoji: "✋",
    name: { id: "Stop Scroll", en: "Scroll Stopper" },
    desc: { id: "Hook 'daripada scroll terus…' lalu ajakan main sambil belajar.", en: "'Instead of endless scrolling…' then play-and-learn." },
    kind: "single",
    dur: 9,
    palette: "berry",
    copy: (l, g) => ({ headline: L(l, "Daripada scroll terus…", "Instead of endless scrolling…"), sub: L(l, `…yuk main ${g.name} sambil belajar!`, `…play ${g.name} and learn!`), cta: CTA[l] }),
    draw(s) {
      const { W, H, p, ctx, pal } = s;
      bg(s, { deco: "none" });
      // fake feed scrolling fast, then stops
      const sp = p < 0.3 ? s.t * 1400 : 0.3 * s.d * 1400;
      const blur = p < 0.3;
      ctx.save();
      ctx.globalAlpha = 1 - seg(p, 0.28, 0.36);
      for (let i = -1; i < 6; i++) {
        const y = ((i * 420 - (sp % 420)) + H) % (H + 420) - 420;
        rr(ctx, 90, y, W - 180, 360, 40);
        ctx.fillStyle = hexA(pal.ink, blur ? 0.06 : 0.1);
        ctx.fill();
        rr(ctx, 130, y + 40, 280, 280, 30);
        ctx.fillStyle = hexA(pal.accent2, 0.25);
        ctx.fill();
      }
      ctx.restore();
      const k1 = outBack(seg(p, 0.02, 0.12));
      text(s, s.text.headline, W / 2, Y(s, 0.4, 0.38) - 60, { size: isStory(s) ? 100 * k1 : 76 * k1, alpha: 1 - seg(p, 0.3, 0.36), stroke: "#fff" });
      const k2 = outBack(seg(p, 0.34, 0.44));
      if (k2 > 0) {
        mo(s, "yeyy", W * 0.5, Y(s, 0.2, 0.2), isStory(s) ? 420 : 300, clamp(k2));
        text(s, s.text.sub, W / 2, Y(s, 0.34, 0.38), { size: isStory(s) ? 80 : 58, color: pal.accent, alpha: clamp(k2), maxW: W - 120 });
        phone(s, s.game.shot, W / 2, Y(s, 0.65, 0.8), PH(s, 780, 420) * k2, 0, 1, seg(p, 0.45, 0.8) * 0.4);
      }
      endCard(s, seg(p, 0.82, 0.92));
    },
  },
  /* 9 ─────────────────────────────────────────── */
  {
    id: "kinetic",
    emoji: "💥",
    name: { id: "Kata Meledak", en: "Kinetic Words" },
    desc: { id: "Kata demi kata membesar di tengah layar.", en: "Word after word zooms in centre screen." },
    kind: "single",
    dur: 8,
    palette: "night",
    copy: (l) => ({ headline: L(l, "Belajar. Doa. Main. Seru!", "Learn. Pray. Play. Fun!"), sub: L(l, "Semua bareng Baby Mo", "All with Baby Mo"), cta: CTA[l] }),
    draw(s) {
      const { W, H, p, ctx, pal } = s;
      bg(s);
      const words = s.text.headline.split(/\s+/).filter(Boolean);
      const span = 0.5 / Math.max(1, words.length);
      words.forEach((w, i) => {
        const k = seg(p, i * span, (i + 1) * span);
        if (k <= 0 || k >= 1) return;
        const sc = 0.4 + outBack(Math.min(1, k * 2.5)) * 0.6 + k * 0.2;
        ctx.save();
        ctx.translate(W / 2, H / 2);
        ctx.rotate((i % 2 ? 1 : -1) * 0.05);
        ctx.scale(sc, sc);
        ctx.globalAlpha = 1 - seg(k, 0.8, 1);
        ctx.font = font(s, isStory(s) ? 190 : 150, 800);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = [pal.accent, pal.accent2, pal.ink][i % 3]!;
        ctx.fillText(w, 0, 0);
        ctx.restore();
      });
      const k = outBack(seg(p, 0.52, 0.62));
      if (k > 0) {
        phone(s, s.game.shot, W / 2, Y(s, 0.55, 0.58), PH(s, 1000, 580) * k, Math.sin(s.t * 2) * 0.03, 1, seg(p, 0.6, 0.8) * 0.4);
        text(s, s.text.sub, W / 2, Y(s, 0.12, 0.06), { size: isStory(s) ? 80 : 60, alpha: clamp(k) });
        mo(s, "run", W * 0.2, Y(s, 0.76, 0.82), isStory(s) ? 320 : 220, clamp(k));
      }
      endCard(s, seg(p, 0.8, 0.9));
    },
  },
  /* 10 ─────────────────────────────────────────── */
  {
    id: "polaroids",
    emoji: "📸",
    name: { id: "Foto Polaroid", en: "Polaroid Drop" },
    desc: { id: "Cuplikan game jatuh seperti foto polaroid.", en: "Game shots drop in like polaroid photos." },
    kind: "multi",
    dur: 9,
    palette: "sunny",
    copy: (l) => ({ headline: L(l, "Satu hari, banyak cerita seru", "One day, lots of fun"), sub: L(l, "Game Islami untuk si kecil", "Islamic games for little ones"), cta: CTA[l] }),
    draw(s) {
      const { W, p, ctx } = s;
      bg(s);
      text(s, s.text.headline, W / 2, Y(s, 0.07, 0.05), { size: isStory(s) ? 92 : 68, reveal: seg(p, 0, 0.12) });
      const gs = pickGames(s, 4);
      const spots = isStory(s)
        ? [[0.3, 0.32, -0.12], [0.7, 0.37, 0.1], [0.32, 0.6, 0.08], [0.68, 0.64, -0.08]]
        : [[0.28, 0.42, -0.12], [0.72, 0.45, 0.1], [0.3, 0.75, 0.08], [0.7, 0.78, -0.08]];
      const cw = isStory(s) ? 420 : 300;
      gs.forEach((g, i) => {
        const k = outCubic(seg(p, 0.1 + i * 0.1, 0.22 + i * 0.1));
        if (k <= 0) return;
        const [fx, fy, rot] = spots[i]!;
        const x = fx! * W, y = lerp(-600, fy! * s.H, k);
        const ch = cw * 1.25;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot! * k + Math.sin(s.t + i) * 0.01);
        ctx.shadowColor = "rgba(0,0,0,.25)";
        ctx.shadowBlur = 30;
        ctx.fillStyle = "#fff";
        ctx.fillRect(-cw / 2, -ch / 2, cw, ch);
        ctx.shadowColor = "transparent";
        const iw = cw - 40, ih = ch - 140;
        ctx.save();
        ctx.beginPath();
        ctx.rect(-iw / 2, -ch / 2 + 20, iw, ih);
        ctx.clip();
        if (g.shot.naturalWidth) ctx.drawImage(g.shot, -iw / 2, -ch / 2 + 20, iw, (g.shot.naturalHeight / g.shot.naturalWidth) * iw);
        ctx.restore();
        ctx.font = font(s, isStory(s) ? 40 : 30, 800);
        ctx.fillStyle = "#152230";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${g.emoji} ${g.name}`, 0, ch / 2 - 60, cw - 30);
        ctx.restore();
      });
      text(s, s.text.sub, W / 2, Y(s, 0.8, 0.93), { size: isStory(s) ? 50 : 36, weight: 700, color: s.pal.soft, alpha: seg(p, 0.5, 0.6) });
      endCard(s, seg(p, 0.82, 0.92));
    },
  },
  /* 11 ─────────────────────────────────────────── */
  {
    id: "bedtime",
    emoji: "🌙",
    name: { id: "Malam Tenang", en: "Bedtime Calm" },
    desc: { id: "Langit malam, bulan, bintang — untuk game sebelum tidur.", en: "Night sky, moon and stars — for bedtime games." },
    kind: "single",
    dur: 10,
    palette: "night",
    copy: (l, g) => ({ headline: L(l, "Sebelum tidur, yuk tenang bareng Baby Mo", "Before bed, wind down with Baby Mo"), sub: g.hook, cta: L(l, "Coba malam ini!", "Try it tonight!") }),
    draw(s) {
      const { W, p, ctx, pal } = s;
      bg(s, { deco: "stars", seed: 11 });
      // moon
      const my = lerp(Y(s, 0.3, 0.35), Y(s, 0.14, 0.16), outCubic(seg(p, 0, 0.3)));
      ctx.save();
      ctx.shadowColor = "rgba(253,230,138,.8)";
      ctx.shadowBlur = 80;
      ctx.fillStyle = "#FDE68A";
      ctx.beginPath();
      ctx.arc(W * 0.78, my, 110, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowColor = "transparent";
      ctx.fillStyle = pal.bg[0];
      ctx.beginPath();
      ctx.arc(W * 0.78 + 50, my - 30, 100, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      // shooting star
      const sk = seg(p, 0.3, 0.4);
      if (sk > 0 && sk < 1) {
        ctx.save();
        ctx.strokeStyle = "rgba(255,255,255,.8)";
        ctx.lineWidth = 6;
        ctx.lineCap = "round";
        const x = lerp(W * 0.1, W * 0.7, sk), y = lerp(Y(s, 0.05), Y(s, 0.2), sk);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - 120, y - 40);
        ctx.stroke();
        ctx.restore();
      }
      text(s, s.text.headline, W * 0.08, Y(s, 0.08, 0.06), { size: isStory(s) ? 80 : 58, align: "left", maxW: W * 0.6, reveal: seg(p, 0.05, 0.25) });
      phone(s, s.game.shot, W * 0.66, Y(s, 0.55, 0.66), PH(s, 820, 520), -0.05, seg(p, 0.25, 0.35), seg(p, 0.35, 0.8) * 0.4);
      mo(s, "pose-12", W * 0.24, Y(s, 0.66, 0.75), isStory(s) ? 420 : 280, seg(p, 0.3, 0.4));
      text(s, s.text.sub, W / 2, Y(s, 0.8, 0.93), { size: isStory(s) ? 44 : 32, weight: 700, color: pal.soft, alpha: seg(p, 0.4, 0.5), maxW: W - 140 });
      endCard(s, seg(p, 0.82, 0.92), "thank-you");
    },
  },
  /* 12 ─────────────────────────────────────────── */
  {
    id: "parent-tips",
    emoji: "💛",
    name: { id: "Tips Ayah Bunda", en: "Parent Tips" },
    desc: { id: "Kartu 3 tips main bareng anak.", en: "A card with 3 tips for playing together." },
    kind: "single",
    dur: 11,
    palette: "sunny",
    copy: (l, g) => ({
      headline: L(l, `3 tips main ${g.name} bareng si kecil`, `3 tips for playing ${g.name} together`),
      sub: L(l, "Duduk di samping, main bareng 10 menit\nTanya: tadi belajar apa?\nPuji usahanya, bukan hanya skornya", "Sit beside them, play together for 10 minutes\nAsk: what did you learn?\nPraise the effort, not just the score"),
      cta: CTA[l],
    }),
    draw(s) {
      const { W, p, ctx, pal } = s;
      bg(s);
      chip(s, L(s.lang, "💛 Untuk Ayah & Bunda", "💛 For parents"), W / 2, Y(s, 0.06, 0.06), 38, seg(p, 0, 0.05));
      text(s, s.text.headline, W / 2, Y(s, 0.1, 0.11), { size: isStory(s) ? 80 : 58, reveal: seg(p, 0.02, 0.15) });
      const tips = s.text.sub.split("\n").filter(Boolean).slice(0, 4);
      const top = Y(s, 0.3, 0.32), ch = isStory(s) ? 220 : 150, gap = isStory(s) ? 40 : 22;
      tips.forEach((tip, i) => {
        const k = outCubic(seg(p, 0.15 + i * 0.13, 0.25 + i * 0.13));
        if (k <= 0) return;
        const y = top + i * (ch + gap);
        ctx.save();
        ctx.globalAlpha = k;
        ctx.translate(lerp(-W, 0, k), 0);
        ctx.shadowColor = "rgba(20,30,60,.12)";
        ctx.shadowBlur = 30;
        rr(ctx, 80, y, W - 160, ch, 44);
        ctx.fillStyle = pal.card;
        ctx.fill();
        ctx.shadowColor = "transparent";
        ctx.beginPath();
        ctx.arc(170, y + ch / 2, isStory(s) ? 54 : 40, 0, Math.PI * 2);
        ctx.fillStyle = [pal.accent, pal.accent2, "#E6B52E", "#8A79D9"][i]!;
        ctx.fill();
        ctx.font = font(s, isStory(s) ? 60 : 44, 800);
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(i + 1), 170, y + ch / 2 + 3);
        ctx.restore();
        ctx.save();
        ctx.globalAlpha = k;
        ctx.translate(lerp(-W, 0, k), 0);
        text(s, tip, 260, y + ch / 2 - (isStory(s) ? 50 : 34), { size: isStory(s) ? 46 : 34, weight: 700, align: "left", maxW: W - 400, lh: 1.15 });
        ctx.restore();
      });
      if (isStory(s)) mo(s, "thank-you", W * 0.78, Y(s, 0.78), 340, seg(p, 0.6, 0.7));
      endCard(s, seg(p, 0.84, 0.94));
    },
  },
  /* 13 ─────────────────────────────────────────── */
  {
    id: "spotlight",
    emoji: "🔦",
    name: { id: "Sorotan Misteri", en: "Mystery Spotlight" },
    desc: { id: "Lampu sorot menyapu layar gelap, lalu game terungkap.", en: "A spotlight sweeps the dark, then the game is revealed." },
    kind: "single",
    dur: 9,
    palette: "night",
    copy: (l, g) => ({ headline: L(l, "Coba tebak, game apa ini?", "Guess which game this is?"), sub: g.name, cta: CTA[l] }),
    draw(s) {
      const { W, H, p, ctx } = s;
      bg(s, { deco: "none" });
      phone(s, s.game.shot, W / 2, Y(s, 0.55, 0.58), PH(s, 1050, 620), 0, 1, seg(p, 0.5, 0.8) * 0.4);
      mo(s, "wow", W * 0.18, Y(s, 0.76, 0.85), isStory(s) ? 320 : 220);
      // darkness with a moving hole
      const reveal = seg(p, 0.42, 0.55);
      const sx = W / 2 + Math.sin(s.t * 1.7) * W * 0.32 * (1 - reveal);
      const sy = Y(s, 0.55, 0.58) + Math.cos(s.t * 1.3) * H * 0.18 * (1 - reveal);
      const R = lerp(isStory(s) ? 230 : 180, H * 1.2, inCubic(reveal));
      ctx.save();
      const g = ctx.createRadialGradient(sx, sy, R * 0.7, sx, sy, R);
      g.addColorStop(0, "rgba(5,8,20,0)");
      g.addColorStop(1, "rgba(5,8,20,0.94)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();
      text(s, s.text.headline, W / 2, Y(s, 0.08, 0.05), { size: isStory(s) ? 86 : 64, color: "#fff", alpha: 1 - seg(p, 0.5, 0.56) });
      const k = outBack(seg(p, 0.52, 0.62));
      if (k > 0) text(s, `${s.game.emoji} ${s.text.sub}`, W / 2, Y(s, 0.08, 0.05), { size: (isStory(s) ? 100 : 74) * k, color: s.pal.ink, stroke: s.pal.bg[0] });
      confetti(s, seg(p, 0.52, 0.8), 5);
      endCard(s, seg(p, 0.82, 0.92));
    },
  },
  /* 14 ─────────────────────────────────────────── */
  {
    id: "ticker",
    emoji: "🎗️",
    name: { id: "Pita Berjalan", en: "Ticker Bands" },
    desc: { id: "Pita teks miring berjalan, HP di tengah.", en: "Diagonal text bands scroll past a centre phone." },
    kind: "single",
    dur: 8,
    palette: "berry",
    copy: (l, g) => ({ headline: L(l, "GRATIS • TANPA IKLAN • ISLAMI • SERU", "FREE • NO ADS • ISLAMIC • FUN"), sub: g.name, cta: CTA[l] }),
    draw(s) {
      const { W, H, p, ctx, pal } = s;
      bg(s);
      const band = (y: number, rot: number, dir: number, color: string, fg: string) => {
        ctx.save();
        ctx.translate(W / 2, y);
        ctx.rotate(rot);
        ctx.fillStyle = color;
        ctx.fillRect(-W, -60, W * 2, 120);
        ctx.font = font(s, 64, 800);
        ctx.fillStyle = fg;
        ctx.textBaseline = "middle";
        const str = `${s.text.headline}  •  `;
        const tw = ctx.measureText(str).width;
        let x = -W - ((s.t * 260 * dir) % tw) - tw;
        while (x < W) {
          ctx.fillText(str, x, 4);
          x += tw;
        }
        ctx.restore();
      };
      band(Y(s, 0.2, 0.2), -0.12, 1, pal.accent, "#fff");
      band(Y(s, 0.8, 0.84), 0.1, -1, pal.accent2, "#fff");
      const k = outBack(seg(p, 0.05, 0.2));
      phone(s, s.game.shot, W / 2, Y(s, 0.5, 0.5), PH(s, 940, 640) * k, Math.sin(s.t * 2) * 0.04, 1, seg(p, 0.2, 0.75) * 0.4);
      chip(s, `${s.game.emoji} ${s.text.sub}`, W / 2, Y(s, 0.12, 0.95), isStory(s) ? 48 : 34, seg(p, 0.2, 0.3));
      mo(s, "yes", W * 0.84, Y(s, 0.68, 0.7), isStory(s) ? 300 : 220, seg(p, 0.25, 0.35));
      endCard(s, seg(p, 0.8, 0.9));
    },
  },
  /* 15 ─────────────────────────────────────────── */
  {
    id: "card-flip",
    emoji: "🃏",
    name: { id: "Kartu Terbalik", en: "Card Flip" },
    desc: { id: "Kartu Baby Mo berbalik, menampilkan game.", en: "A Baby Mo card flips to reveal the game." },
    kind: "single",
    dur: 8,
    palette: "ocean",
    copy: (l, g) => ({ headline: L(l, "Game hari ini adalah…", "Today's game is…"), sub: g.hook, cta: CTA[l] }),
    draw(s) {
      const { W, H, p, ctx, pal } = s;
      bg(s);
      text(s, s.text.headline, W / 2, Y(s, 0.08, 0.06), { size: isStory(s) ? 92 : 68, reveal: seg(p, 0, 0.12) });
      const fk = inOut(seg(p, 0.2, 0.38));
      const sx = Math.abs(Math.cos(fk * Math.PI));
      const front = fk > 0.5;
      const cw = isStory(s) ? 640 : 460, ch = cw * 1.3;
      const cy = Y(s, 0.47, 0.55);
      ctx.save();
      ctx.translate(W / 2, cy + Math.sin(s.t * 2) * 10);
      ctx.scale(Math.max(0.02, sx) * (1 + 0.06 * Math.sin(fk * Math.PI)), 1);
      ctx.shadowColor = "rgba(20,30,60,.3)";
      ctx.shadowBlur = 50;
      rr(ctx, -cw / 2, -ch / 2, cw, ch, 60);
      if (!front) {
        const g = ctx.createLinearGradient(-cw / 2, -ch / 2, cw / 2, ch / 2);
        g.addColorStop(0, pal.accent);
        g.addColorStop(1, pal.accent2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.shadowColor = "transparent";
        ctx.fillStyle = "rgba(255,255,255,.18)";
        for (let i = 0; i < 6; i++) star(ctx, (i % 3 - 1) * cw * 0.3, (Math.floor(i / 3) - 0.5) * ch * 0.6, 40, 18);
        ctx.font = font(s, 200, 800);
        ctx.fillStyle = "#fff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("?", 0, 10);
      } else {
        ctx.fillStyle = pal.card;
        ctx.fill();
      }
      ctx.restore();
      if (front && sx > 0.05) {
        ctx.save();
        ctx.translate(W / 2, cy + Math.sin(s.t * 2) * 10);
        ctx.scale(sx, 1);
        ctx.translate(-W / 2, -cy);
        icon(s, s.game, W / 2, cy - ch * 0.15, cw * 0.5);
        text(s, s.game.name, W / 2, cy + ch * 0.17, { size: isStory(s) ? 70 : 52, maxW: cw - 60 });
        ctx.restore();
      }
      text(s, s.text.sub, W / 2, cy + ch / 2 + 60, { size: isStory(s) ? 50 : 36, weight: 700, color: pal.soft, alpha: seg(p, 0.42, 0.52), maxW: W - 160 });
      confetti(s, seg(p, 0.38, 0.7), 9);
      void H;
      endCard(s, seg(p, 0.8, 0.9));
    },
  },
  /* 16 ─────────────────────────────────────────── */
  {
    id: "level-up",
    emoji: "⭐",
    name: { id: "Naik Level", en: "Level Up" },
    desc: { id: "Bar bintang terisi, level naik — terasa seperti game.", en: "A star bar fills and levels up — feels like a game." },
    kind: "single",
    dur: 9,
    palette: "mint",
    copy: (l, g) => ({ headline: L(l, "Setiap main, si kecil naik level!", "Every play, your child levels up!"), sub: g.name, cta: CTA[l] }),
    draw(s) {
      const { W, p, ctx, pal } = s;
      bg(s);
      text(s, s.text.headline, W / 2, Y(s, 0.07, 0.05), { size: isStory(s) ? 88 : 64, reveal: seg(p, 0, 0.12) });
      const lv = Math.min(5, 1 + Math.floor(seg(p, 0.12, 0.62) * 5));
      const fill = (seg(p, 0.12, 0.62) * 5) % 1;
      const by = Y(s, 0.3, 0.32), bw = W - 240, bh = 64;
      text(s, `Level ${lv}`, W / 2, by - (isStory(s) ? 150 : 120), { size: isStory(s) ? 110 : 80, color: pal.accent });
      ctx.save();
      rr(ctx, 120, by, bw, bh, bh / 2);
      ctx.fillStyle = hexA(pal.ink, 0.1);
      ctx.fill();
      rr(ctx, 120, by, Math.max(bh, bw * (p > 0.62 ? 1 : fill)), bh, bh / 2);
      const g = ctx.createLinearGradient(120, 0, 120 + bw, 0);
      g.addColorStop(0, "#E6B52E");
      g.addColorStop(1, pal.accent2);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.restore();
      for (let i = 0; i < 5; i++) {
        const on = i < lv - (p > 0.62 ? 0 : 1) || (p > 0.62 && i < 5);
        ctx.save();
        ctx.fillStyle = on ? "#E6B52E" : hexA(pal.ink, 0.15);
        const sc = on ? 1 + Math.sin(s.t * 5 + i) * 0.05 : 1;
        star(ctx, W / 2 + (i - 2) * 130, by + 170, 52 * sc, 24 * sc);
        ctx.restore();
      }
      phone(s, s.game.shot, W * (isStory(s) ? 0.62 : 0.66), Y(s, 0.64, 0.78), PH(s, 760, 380), -0.05, seg(p, 0.2, 0.3), seg(p, 0.3, 0.8) * 0.4);
      mo(s, "yeyy", W * 0.24, Y(s, 0.7, 0.8), isStory(s) ? 400 : 240, seg(p, 0.2, 0.3));
      confetti(s, seg(p, 0.62, 0.85), 4);
      endCard(s, seg(p, 0.82, 0.92));
    },
  },
  /* 17 ─────────────────────────────────────────── */
  {
    id: "bubbles",
    emoji: "🫧",
    name: { id: "Gelembung", en: "Bubble Pop" },
    desc: { id: "Gelembung berisi ikon game naik lalu pecah.", en: "Bubbles with game icons float up and pop." },
    kind: "multi",
    dur: 9,
    palette: "ocean",
    copy: (l) => ({ headline: L(l, "Pop! Ada game baru buat si kecil", "Pop! New games for your little one"), sub: L(l, "Ketuk, main, belajar", "Tap, play, learn"), cta: CTA[l] }),
    draw(s) {
      const { W, H, p, ctx, games } = s;
      bg(s, { deco: "none" });
      const r = rng(21);
      games.forEach((g, i) => {
        const st = r() * 0.35, sp = 0.35 + r() * 0.25, x0 = 120 + r() * (W - 240), sz = (isStory(s) ? 190 : 150) + r() * 60;
        const k = seg(p, st, st + sp);
        if (k <= 0) return;
        const y = lerp(H + sz, H * (0.18 + r() * 0.3), outCubic(k));
        const x = x0 + Math.sin(s.t * 1.5 + i) * 30;
        const popped = p > st + sp + 0.08 && i % 3 === 0;
        if (popped) {
          const pk = seg(p, st + sp + 0.08, st + sp + 0.16);
          if (pk < 1) {
            ctx.save();
            ctx.globalAlpha = 1 - pk;
            ctx.fillStyle = s.pal.accent2;
            for (let j = 0; j < 8; j++) {
              const a = (j / 8) * Math.PI * 2;
              star(ctx, x + Math.cos(a) * sz * 0.6 * (0.6 + pk), y + Math.sin(a) * sz * 0.6 * (0.6 + pk), 18, 8, 4);
            }
            ctx.restore();
          }
          return;
        }
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, sz * 0.62, 0, Math.PI * 2);
        const bgG = ctx.createRadialGradient(x - sz * 0.2, y - sz * 0.2, 4, x, y, sz * 0.62);
        bgG.addColorStop(0, "rgba(255,255,255,.75)");
        bgG.addColorStop(1, "rgba(255,255,255,.15)");
        ctx.fillStyle = bgG;
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,.9)";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.restore();
        icon(s, g, x, y, sz * 0.62);
      });
      text(s, s.text.headline, W / 2, Y(s, 0.06, 0.05), { size: isStory(s) ? 90 : 66, reveal: seg(p, 0, 0.12), stroke: s.pal.bg[0] });
      text(s, s.text.sub, W / 2, Y(s, 0.8, 0.9), { size: isStory(s) ? 60 : 44, color: s.pal.accent, alpha: seg(p, 0.5, 0.6) });
      mo(s, "wow", W / 2, Y(s, 0.7, 0.74), isStory(s) ? 300 : 0, seg(p, 0.5, 0.6));
      endCard(s, seg(p, 0.8, 0.9));
    },
  },
  /* 18 ─────────────────────────────────────────── */
  {
    id: "path-map",
    emoji: "🗺️",
    name: { id: "Peta Petualangan", en: "Adventure Map" },
    desc: { id: "Baby Mo berjalan di jalur, melewati game-game.", en: "Baby Mo walks a path past the games." },
    kind: "multi",
    dur: 10,
    palette: "mint",
    copy: (l) => ({ headline: L(l, "Petualangan belajar si kecil", "Your child's learning adventure"), sub: "", cta: CTA[l] }),
    draw(s) {
      const { W, p, ctx, pal } = s;
      bg(s);
      text(s, s.text.headline, W / 2, Y(s, 0.06, 0.04), { size: isStory(s) ? 86 : 62, reveal: seg(p, 0, 0.12) });
      const gs = pickGames(s, 5);
      const pts = gs.map((_, i) => ({
        x: W / 2 + (i % 2 ? 1 : -1) * W * 0.24,
        y: Y(s, 0.22, 0.24) + i * (isStory(s) ? 270 : 160),
      }));
      // dotted path
      ctx.save();
      ctx.setLineDash([2, 34]);
      ctx.lineCap = "round";
      ctx.lineWidth = 20;
      ctx.strokeStyle = hexA(pal.ink, 0.25);
      ctx.beginPath();
      pts.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else {
          const pr = pts[i - 1]!;
          ctx.bezierCurveTo(pr.x, (pr.y + pt.y) / 2, pt.x, (pr.y + pt.y) / 2, pt.x, pt.y);
        }
      });
      ctx.stroke();
      ctx.restore();
      const walk = seg(p, 0.1, 0.75) * (pts.length - 1);
      gs.forEach((g, i) => {
        const reached = walk >= i - 0.05;
        const sz = isStory(s) ? 170 : 110;
        icon(s, g, pts[i]!.x, pts[i]!.y, sz * (reached ? 1 + Math.sin(s.t * 4 + i) * 0.03 : 0.8), reached ? 1 : 0.45);
        if (reached) {
          ctx.save();
          ctx.font = font(s, isStory(s) ? 34 : 24, 800);
          ctx.fillStyle = pal.ink;
          ctx.textAlign = "center";
          ctx.fillText(g.name, pts[i]!.x, pts[i]!.y + sz * 0.5 + (isStory(s) ? 44 : 30), W * 0.45);
          ctx.restore();
        }
      });
      const i0 = Math.min(pts.length - 2, Math.floor(walk));
      const f = walk - i0;
      const a = pts[i0]!, b = pts[i0 + 1]!;
      const mx = lerp(a.x, b.x, inOut(f)) + (i0 % 2 ? -1 : 1) * 0;
      const my = lerp(a.y, b.y, f);
      mo(s, "run", mx + (b.x > a.x ? -130 : 130), my - 40 - Math.abs(Math.sin(s.t * 8)) * 20, isStory(s) ? 220 : 150, 1, b.x < a.x);
      endCard(s, seg(p, 0.82, 0.92));
    },
  },
  /* 19 ─────────────────────────────────────────── */
  {
    id: "duo-phones",
    emoji: "🆚",
    name: { id: "Dua HP", en: "Two Phones" },
    desc: { id: "Dua game masuk dari kiri dan kanan: mana favoritmu?", en: "Two games swing in from both sides: which is your favourite?" },
    kind: "multi",
    dur: 8,
    palette: "berry",
    copy: (l) => ({ headline: L(l, "Mana favoritmu?", "Which one's your favourite?"), sub: L(l, "Tulis di komentar 👇", "Tell us in the comments 👇"), cta: CTA[l] }),
    draw(s) {
      const { W, p, ctx, pal } = s;
      bg(s);
      text(s, s.text.headline, W / 2, Y(s, 0.07, 0.05), { size: isStory(s) ? 100 : 74, reveal: seg(p, 0, 0.12) });
      const [a, b] = pickGames(s, 2);
      const k = outBack(seg(p, 0.08, 0.25));
      const h = PH(s, 800, 520), cy = Y(s, 0.46, 0.55);
      phone(s, a!.shot, lerp(-W * 0.4, W * 0.29, k), cy, h, -0.1 + Math.sin(s.t * 2) * 0.02, 1, seg(p, 0.3, 0.75) * 0.3);
      phone(s, b!.shot, lerp(W * 1.4, W * 0.71, k), cy + 30, h, 0.1 - Math.sin(s.t * 2) * 0.02, 1, seg(p, 0.3, 0.75) * 0.3);
      const vk = outElastic(seg(p, 0.25, 0.4));
      ctx.save();
      ctx.translate(W / 2, cy);
      ctx.scale(vk, vk);
      ctx.beginPath();
      ctx.arc(0, 0, 90, 0, Math.PI * 2);
      ctx.fillStyle = pal.accent2;
      ctx.fill();
      ctx.font = font(s, 80, 800);
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("VS", 0, 6);
      ctx.restore();
      chip(s, `${a!.emoji} ${a!.name}`, W * 0.27, cy + h / 2 + 70, isStory(s) ? 36 : 28, seg(p, 0.3, 0.4));
      chip(s, `${b!.emoji} ${b!.name}`, W * 0.73, cy + h / 2 + 100, isStory(s) ? 36 : 28, seg(p, 0.3, 0.4));
      text(s, s.text.sub, W / 2, Y(s, 0.82, 0.93), { size: isStory(s) ? 56 : 40, color: pal.accent, alpha: seg(p, 0.45, 0.55) });
      endCard(s, seg(p, 0.8, 0.9));
    },
  },
  /* 20 ─────────────────────────────────────────── */
  {
    id: "logo-burst",
    emoji: "✨",
    name: { id: "Logo Bumper", en: "Logo Bumper" },
    desc: { id: "Bumper singkat: logo, cincin warna, alamat web.", en: "A short bumper: logo, colour rings, web address." },
    kind: "multi",
    dur: 6,
    palette: "sunny",
    copy: (l) => ({ headline: L(l, "Main, belajar, cinta Allah", "Play, learn, love Allah"), sub: "", cta: CTA[l] }),
    draw(s) {
      const { W, H, p, ctx, pal } = s;
      bg(s);
      const cx = W / 2, cy = H * 0.42;
      for (let i = 0; i < 4; i++) {
        const k = seg(p, 0.05 + i * 0.07, 0.45 + i * 0.07);
        if (k <= 0 || k >= 1) continue;
        ctx.save();
        ctx.globalAlpha = 1 - k;
        ctx.lineWidth = 30 * (1 - k) + 4;
        ctx.strokeStyle = [pal.accent, pal.accent2, "#E6B52E", "#8A79D9"][i]!;
        ctx.beginPath();
        ctx.arc(cx, cy, 120 + outCubic(k) * W * 0.7, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      const k = outElastic(seg(p, 0, 0.3));
      if (s.a.logo.naturalWidth) {
        const sz = (isStory(s) ? 380 : 300) * k;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate((1 - clamp(k)) * -0.6);
        ctx.drawImage(s.a.logo, -sz / 2, -sz / 2, sz, sz);
        ctx.restore();
      }
      text(s, s.text.headline, W / 2, cy + (isStory(s) ? 260 : 200), { size: isStory(s) ? 80 : 60, reveal: seg(p, 0.3, 0.55) });
      pill(s, s.text.url, W / 2, cy + (isStory(s) ? 470 : 370), isStory(s) ? 52 : 40, { alpha: seg(p, 0.5, 0.6), scale: 1 + Math.sin(s.t * 6) * 0.03 });
      mo(s, "yeyy", W * 0.8, H * (isStory(s) ? 0.76 : 0.82), isStory(s) ? 320 : 220, seg(p, 0.55, 0.65));
      brand(s, W / 2, H - 120, 70, 0);
      confetti(s, seg(p, 0.25, 0.75), 2, 40);
    },
  },
];

export function captionFor(t: Template, g: PromoGame, lang: Lang, url: string) {
  const name = t.kind === "single" ? g.name : "Baby Mo";
  if (lang === "id")
    return `${t.kind === "single" ? `${g.emoji} ${g.name} — ${g.hook}` : "🎮 Game Islami gratis untuk si kecil!"}\n\nMain gratis, tanpa iklan di dalam game, bisa offline. Cocok untuk anak 2–8 tahun.\n👉 ${url}\n\n#BabyMo #GameAnakMuslim #BelajarIslam #AnakSholeh #ParentingIslami #${name.replace(/[^A-Za-z0-9]/g, "")}`;
  return `${t.kind === "single" ? `${g.emoji} ${g.name} — ${g.hook}` : "🎮 Free Islamic games for little ones!"}\n\nFree, no ads inside the games, works offline. Made for ages 2–8.\n👉 ${url}\n\n#BabyMo #MuslimKids #IslamicLearning #KidsGames #MuslimParenting #${name.replace(/[^A-Za-z0-9]/g, "")}`;
}
