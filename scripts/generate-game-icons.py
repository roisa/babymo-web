#!/usr/bin/env python3
"""
Baby Mo game icons — one source of truth for the website AND the game hub.

Each icon is an iOS-style squircle: a two-tone gradient, a soft top sheen,
an inner rim, and a white glyph drawn to match what the game actually is.
Writes identical SVGs to:
  babymo-web/public/icons/games/<slug>.svg
  babymo-app/www/icons/games/<slug>.svg   (when the app repo sits beside it)
plus the app-only game icons (APP_ICONS) and the hub's UI icons (UI_ICONS,
-> babymo-app/www/icons/ui/<slug>.svg), drawn in the same style.

Crisp on retina: the icons use NO <filter> and NO <mask>. WebKit (iOS
Safari / WKWebView) rasterises SVG filters inside an <img> at a low
resolution, which made the glyphs look soft on iPhone. The glyph shadow is
baked as two offset, translucent copies of the glyph, and crescents are
real paths, so every icon stays pure vector at any size / DPR.

Run:  python3 scripts/generate-game-icons.py
      (BABYMO_APP=/path/to/babymo-app to point at another app checkout)
"""
import os
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP = Path(os.environ.get("BABYMO_APP") or ROOT.parent / "babymo-app")
OUT_DIRS = [ROOT / "public/icons/games", APP / "www/icons/games"]
APP_GAMES_DIR = APP / "www/icons/games"
APP_UI_DIR = APP / "www/icons/ui"

AR = "font-family=\"'Noto Naskh Arabic','Amiri','Geeza Pro','Segoe UI',serif\" font-weight=\"700\" text-anchor=\"middle\""
import math


def _star_points(r_out=10.0, r_in=4.3):
    pts = []
    for i in range(10):
        r = r_out if i % 2 == 0 else r_in
        a = -math.pi / 2 + i * math.pi / 5
        pts.append(f"{r * math.cos(a):.2f},{r * math.sin(a):.2f}")
    return " ".join(pts)


STAR_PTS = _star_points()


def star(x, y, s=1.0, fill="#FFE27A"):
    return f'<polygon transform="translate({x} {y}) scale({s})" points="{STAR_PTS}" fill="{fill}" stroke="{fill}" stroke-width="1.6" stroke-linejoin="round"/>'


def crescent(cx, cy, r, fill, cut_fill=None, dx=None):
    """Crescent = a disc minus an offset disc, drawn as ONE path (two arcs)
    so it needs no <mask> (masks/filters rasterise soft in WebKit <img>)."""
    dx = r * 0.5 if dx is None else dx
    ox, oy, r1 = cx + dx, cy - r * 0.32, r * 0.84
    vx, vy = ox - cx, oy - cy
    d = math.hypot(vx, vy)
    ux, uy = vx / d, vy / d
    a = (r * r - r1 * r1 + d * d) / (2 * d)
    h = math.sqrt(max(r * r - a * a, 0))
    nx, ny = -uy, ux
    p1 = (cx + a * ux + h * nx, cy + a * uy + h * ny)
    p2 = (cx + a * ux - h * nx, cy + a * uy - h * ny)
    small_large = 1 if a > d else 0
    f = lambda v: f"{v:.2f}"
    return (
        f'<path d="M{f(p1[0])} {f(p1[1])}A{f(r)} {f(r)} 0 1 1 {f(p2[0])} {f(p2[1])}'
        f'A{f(r1)} {f(r1)} 0 {small_large} 0 {f(p1[0])} {f(p1[1])}Z" fill="{fill}"/>'
    )


def _du_a_hand(tone="#047857"):
    """Left-side hand of the pair, palm facing us: chubby kid fingers, the
    thumb attached and pointing outward, the pinky near the centre, a mint cuff."""
    w = 6.6
    f = [(25.4, 38.0), (31.9, 34.5), (38.4, 35.8), (44.9, 41.0)]  # finger x, top y
    fingers = "".join(f'<rect x="{x}" y="{t}" width="{w}" height="{60 - t}" rx="{w / 2}"/>' for x, t in f)
    palm = '<path d="M25.4 52 H51.5 V69 C51.5 77.5 45.5 82.5 38.4 82.5 C31.3 82.5 25.4 77.5 25.4 69 Z"/>'
    thumb = '<path d="M29 71.5 L19.6 58.5" stroke="#fff" stroke-width="7.4" stroke-linecap="round"/>'
    lines = "".join(
        f'<path d="M{x + w - 0.25:.2f} {t + 8:.1f} V55" stroke="{tone}" stroke-opacity=".2" stroke-width="1" stroke-linecap="round"/>'
        for x, t in f[:3]
    )
    cuff = '<rect x="28.4" y="79.5" width="20" height="9" rx="4.5" fill="#A7F3D0"/>'
    return f'{thumb}<g fill="#fff">{palm}{fingers}</g>{lines}{cuff}'


def du_a_hands(rot=-7):
    h = _du_a_hand()
    return (f'<g transform="translate(-1 0) rotate({rot} 38.4 84)">{h}</g>'
            f'<g transform="translate(100 0) scale(-1 1) translate(-1 0) rotate({rot} 38.4 84)">{h}</g>')


ICONS = {
    # Wudhu Bareng Mo — a tap pouring a big clean water drop
    "wudhu": dict(
        a="#7DD3FC", b="#0369A1",
        g='<path d="M22 24h30a6 6 0 0 1 6 6v8H50v-4H22z" fill="#fff"/>'
          + '<rect x="16" y="20" width="10" height="16" rx="3" fill="#fff"/>'
          + '<rect x="30" y="14" width="10" height="6" rx="3" fill="#fff" opacity=".85"/>'
          + '<path d="M54 46c0 0-15 16-15 26a15 15 0 0 0 30 0c0-10-15-26-15-26z" fill="#fff"/>'
          + '<path d="M47 71a7 7 0 0 0 6 7" fill="none" stroke="#38BDF8" stroke-width="3.4" stroke-linecap="round"/>'
          + '<circle cx="54" cy="41" r="2.6" fill="#E0F4FF"/>'
          + star(78, 30, 0.42, "#FFE27A") + star(28, 70, 0.32, "#fff"),
    ),
    # Kenalan Baby Mo — tap tiles to reveal Baby Mo
    "puzzle": dict(
        a="#C4B5FD", b="#6D28D9",
        g="".join(
            f'<rect x="{25 + c * 18}" y="{25 + r * 18}" width="15" height="15" rx="4" fill="#fff" opacity="{0.95 if (r, c) != (1, 1) else 0}"/>'
            for r in range(3) for c in range(3)
        ) + '<rect x="43" y="43" width="15" height="15" rx="4" fill="#FFD54A"/>' + star(50.5, 49.5, 0.48, "#fff"),
    ),
    # Doa Harian — two little hands raised in du'a under a glowing star
    "doa-harian": dict(
        a="#6EE7B7", b="#047857",
        g='<circle cx="50" cy="21" r="13" fill="#fff" opacity=".16"/>'
          + du_a_hands()
          + star(50, 21, 0.66, "#FFE27A") + star(24, 27, 0.3, "#fff") + star(77, 29, 0.34, "#fff"),
    ),
    # Dua Journey — match du'a cards to situations
    "dua-journey": dict(
        a="#93C5FD", b="#1D4ED8",
        g='<rect x="22" y="24" width="34" height="46" rx="7" fill="#fff" opacity=".55" transform="rotate(-12 39 47)"/>'
          + '<rect x="42" y="27" width="34" height="46" rx="7" fill="#fff" transform="rotate(8 59 50)"/>'
          + crescent(59, 48, 10, "#1D4ED8")
          + '<circle cx="74" cy="72" r="10" fill="#FFD54A" stroke="#fff" stroke-width="3"/>'
          + '<path d="M69.5 72l3 3 6-6" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>',
    ),
    # Kata Islam — spell Arabic words with letter tiles (بيت)
    "kata-islam": dict(
        a="#67E8F9", b="#0E7490",
        g="".join(
            f'<rect x="{12 + i * 26}" y="{30 + (4 if i == 1 else 0)}" width="24" height="30" rx="6" fill="#fff"/>'
            f'<text x="{24 + i * 26}" y="{52 + (4 if i == 1 else 0)}" font-size="22" fill="#0E7490" {AR}>{ch}</text>'
            for i, ch in enumerate(["ت", "ي", "ب"])
        ) + '<path d="M28 76h40" stroke="#fff" stroke-width="4.5" stroke-linecap="round" opacity=".9"/>'
          + '<path d="M61 70l8 6-8 6" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>',
    ),
    # Dreamtime — bedtime routine
    "dreamtime": dict(
        a="#A5B4FC", b="#312E81",
        g=crescent(45, 54, 22, "#FFF3C4", dx=13)
          + star(72, 30, 0.6) + star(28, 26, 0.42) + star(76, 66, 0.38)
          + '<text x="68" y="52" font-family="ui-rounded,system-ui,sans-serif" font-weight="800" font-size="13" fill="#fff" opacity=".9">z</text>'
          + '<text x="76" y="44" font-family="ui-rounded,system-ui,sans-serif" font-weight="800" font-size="10" fill="#fff" opacity=".75">z</text>',
    ),
    # Pulau Hijaiyah — voxel island, find the 28 letters
    "hijaiyah": dict(
        a="#5EEAD4", b="#0F766E",
        g='<path d="M50 52l19 9.5-19 9.5-19-9.5z" fill="#fff"/>'
          + '<path d="M31 61.5l19 9.5v17l-19-9.5z" fill="#fff" opacity=".78"/>'
          + '<path d="M69 61.5L50 71v17l19-9.5z" fill="#fff" opacity=".56"/>'
          + '<path d="M42 59.5l8-4 8 4-8 4z" fill="#86EFAC"/>'
          + '<rect x="29" y="10" width="42" height="36" rx="11" fill="#FFD54A"/>'
          + '<path d="M44 45l6 7 6-7z" fill="#FFD54A"/>'
          + f'<text x="50" y="36" font-size="27" fill="#0F766E" {AR}>ب</text>',
    ),
    # Cari Baby Mo — look & find
    "cari-baby-mo": dict(
        a="#FDBA74", b="#C2410C",
        g='<circle cx="44" cy="44" r="19" fill="#fff" opacity=".22"/>'
          + '<circle cx="44" cy="44" r="19" fill="none" stroke="#fff" stroke-width="7"/>'
          + '<path d="M58 58l17 17" stroke="#fff" stroke-width="10" stroke-linecap="round"/>'
          + star(44, 44, 0.85),
    ),
    # Memory Match — flip pairs
    "memory-match": dict(
        a="#FCD34D", b="#B45309",
        g="".join(
            f'<rect x="{24 + c * 27}" y="{22 + r * 30}" width="23" height="27" rx="5" fill="#fff" opacity="{op}"/>'
            for (r, c, op) in [(0, 0, 1), (0, 1, 0.42), (1, 0, 0.42), (1, 1, 1)]
        ) + crescent(35.5, 35.5, 7, "#B45309") + crescent(62.5, 65.5, 7, "#B45309")
          + '<circle cx="62.5" cy="35.5" r="3" fill="#fff"/><circle cx="35.5" cy="65.5" r="3" fill="#fff"/>',
    ),
    # Forehand Beat — rhythm jumper with a tennis ball
    "forehand-beat": dict(
        a="#BEF264", b="#3F6212",
        g='<circle cx="35" cy="63" r="19" fill="#fff"/>'
          + '<path d="M19.5 52c7.5 6 7.5 16 0 22M50.5 52c-7.5 6-7.5 16 0 22" fill="none" stroke="#65A30D" stroke-width="3.4" stroke-linecap="round"/>'
          + '<path d="M72 20v34" stroke="#fff" stroke-width="5" stroke-linecap="round"/>'
          + '<path d="M72 20l13 5v9l-13-5z" fill="#fff"/>'
          + '<ellipse cx="65" cy="55" rx="8.5" ry="6.8" fill="#fff" transform="rotate(-20 65 55)"/>',
    ),
    # Kata Baik — kalimat thayyibah
    "kata-baik": dict(
        a="#F9A8D4", b="#BE185D",
        g='<path d="M24 22h52a8 8 0 0 1 8 8v28a8 8 0 0 1-8 8H48l-14 12v-12H24a8 8 0 0 1-8-8V30a8 8 0 0 1 8-8z" fill="#fff"/>'
          + '<path d="M50 56c-9-6-14-10.5-14-16a7 7 0 0 1 14-2 7 7 0 0 1 14 2c0 5.5-5 10-14 16z" fill="#EC4899"/>'
          + star(78, 18, 0.5),
    ),
    # Pray with Mo — step-by-step sholat on a prayer mat
    "pray-with-mo": dict(
        a="#2F7A52", b="#0B2A1B",
        g='<rect x="28" y="20" width="44" height="62" rx="7" fill="#F4C95D"/>'
          + '<rect x="33" y="25" width="34" height="52" rx="4" fill="none" stroke="#0B2A1B" stroke-width="2" opacity=".35"/>'
          + '<path d="M38 60V44a12 12 0 0 1 24 0v16z" fill="#0F3D27"/>'
          + crescent(50, 46, 5, "#F4C95D", dx=3)
          + '<path d="M30 86v-4M38 86v-4M46 86v-4M54 86v-4M62 86v-4M70 86v-4" stroke="#F4C95D" stroke-width="2.4" stroke-linecap="round"/>',
    ),
    # Streak Sholat Mo — keep the prayer streak alive (+ times & qibla)
    "streak-sholat-mo": dict(
        a="#FCA5A5", b="#B91C1C",
        g='<path d="M50 14c4 12 20 20 20 40a20 20 0 0 1-40 0c0-9 5-15 9-19 1 7 4 10 7 11-2-12 0-23 4-32z" fill="#fff"/>'
          + crescent(50, 60, 10, "#DC2626", dx=6)
          + star(60, 52, 0.36, "#FFD54A"),
    ),
}


_PAINT = re.compile(r'\b(fill|stroke)="(?!none)[^"]*"')


def shadow(g: str) -> str:
    """The glyph's drop shadow, baked as vector: two translucent, slightly
    offset dark copies of the glyph (replaces feDropShadow, which WebKit
    rasterises at low resolution inside <img>)."""
    dark = _PAINT.sub(lambda m: f'{m.group(1)}="#000"', g)
    dark = dark.replace(' mask="', ' data-m="')
    return (
        f'<g fill="#000" opacity=".11" transform="translate(0 .7)" aria-hidden="true">{dark}</g>'
        f'<g fill="#000" opacity=".10" transform="translate(0 1.9)" aria-hidden="true">{dark}</g>'
    )


def svg(slug: str, a: str, b: str, g: str, pre: str = "", post: str = "", label: str = None) -> str:
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="{label or slug}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{a}"/><stop offset="1" stop-color="{b}"/></linearGradient>
    <linearGradient id="sheen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <clipPath id="sq"><rect width="100" height="100" rx="23"/></clipPath>
  </defs>
  <g clip-path="url(#sq)">
    <rect width="100" height="100" fill="url(#bg)"/>
    <ellipse cx="50" cy="8" rx="70" ry="44" fill="url(#sheen)"/>
    {pre}{shadow(g)}
    <g>{g}</g>{post}
    <rect x=".75" y=".75" width="98.5" height="98.5" rx="22.4" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="1.5"/>
  </g>
</svg>
"""


# ── App-only game icons (the website doesn't list these games) ──
APP_ICONS = {
    # Huruf Hijaiyah — letter cards (ب) + a star
    "huruf-hijaiyah": dict(
        a="#34D399", b="#065F46", label="huruf hijaiyah",
        g='<rect x="20" y="22" width="60" height="50" rx="12" fill="#FFF8E7" transform="rotate(-6 50 47)"/>'
          '<rect x="22" y="24" width="60" height="50" rx="12" fill="#fff"/>'
          '<path d="M36 37q1 11 0 22" stroke="#065F46" stroke-width="5" stroke-linecap="round" fill="none"/>'
          '<path d="M45 48q-1 9 6 9h12q6 0 5-8" stroke="#065F46" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
          '<circle cx="56" cy="64" r="3" fill="#065F46"/>'
          '<circle cx="70" cy="34" r="7" fill="#FFD54A"/>'
          '<path d="M70 29.5l1.4 3 3.2.4-2.4 2.1.7 3.2-2.9-1.6-2.9 1.6.7-3.2-2.4-2.1 3.2-.4z" fill="#fff"/>',
        post='<path d="M30 82h12M48 82h22" stroke="#fff" stroke-opacity=".7" stroke-width="4" stroke-linecap="round"/>',
    ),
    # Kebun Kecil Ais — a sprout in a garden bed, tomato & water drops
    "kebun-ais": dict(
        a="#86EFAC", b="#16A34A", label="kebun",
        pre='<circle cx="80" cy="20" r="9" fill="#FFE066"/>',
        g='<ellipse cx="50" cy="74" rx="34" ry="8" fill="#7A4A26"/>'
          '<rect x="15" y="74" width="70" height="16" rx="5" fill="#B5733F"/>'
          '<rect x="15" y="74" width="70" height="4" rx="2" fill="#D08A50"/>'
          '<path d="M50 74 Q48 56 50 40" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>'
          '<path d="M50 52 C38 50 30 42 30 34 C40 34 48 40 50 52Z" fill="#fff"/>'
          '<path d="M50 44 C60 40 70 30 72 22 C60 22 52 30 50 44Z" fill="#fff"/>'
          '<circle cx="30" cy="66" r="7" fill="#FF5A4A"/><path d="M27 60 l3 2 3-2-1 3h-4z" fill="#14803D"/>'
          '<path d="M72 46 c-3 4-4 6-4 8a4 4 0 0 0 8 0c0-2-1-4-4-8z" fill="#fff" fill-opacity=".9"/>'
          '<path d="M80 58 c-2 3-3 4-3 6a3 3 0 0 0 6 0c0-2-1-3-3-6z" fill="#fff" fill-opacity=".75"/>',
    ),
    # Sahabat Hewan — a kitten, a heart and a paw
    "sahabat-hewan": dict(
        a="#FDBA74", b="#EA580C", label="hewan",
        pre='<path d="M0 80 Q50 70 100 80 V100 H0Z" fill="#fff" fill-opacity=".22"/>',
        g='<g fill="#fff"><path d="M26 40 l4 -16 l10 11 z M58 40 l-4 -16 l-10 11 z"/>'
          '<circle cx="42" cy="50" r="18"/>'
          '<path d="M72 30 c-4 -6 -12 -2 -10 4 c1 4 10 10 10 10 s9 -6 10 -10 c2 -6 -6 -10 -10 -4z" fill="#fff"/>'
          '<circle cx="70" cy="70" r="8"/><circle cx="62" cy="60" r="3.4"/><circle cx="69" cy="57" r="3.4"/><circle cx="77" cy="59" r="3.4"/><circle cx="80" cy="66" r="3"/></g>',
        post='<g fill="#C2410C"><circle cx="36" cy="49" r="2.6"/><circle cx="48" cy="49" r="2.6"/><path d="M40 55 h4 l-2 2.4 z"/></g>'
             '<path d="M38 59 q4 3 8 0" stroke="#C2410C" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
    ),
    # Akademi Tenis Kak Adam — racket + red ball on a court
    "tenis-adam": dict(
        a="#60A5FA", b="#1D4ED8", label="tenis",
        pre='<path d="M30.0 54 L70.0 54 L96.0 106 L4.0 106 Z" fill="#fff" fill-opacity=".10"/>'
            '<path d="M30.0 54 L70.0 54 L96.0 106 L4.0 106 Z M34.4 54 L14.1 106 M65.6 54 L85.9 106 M31.3 62 H68.7 M20.4 90 H79.6 M50 62 V90" stroke="#fff" stroke-opacity=".55" stroke-width="1.8" fill="none" stroke-linejoin="round"/>'
            '<path d="M18.0 74 H82.0" stroke="#fff" stroke-opacity=".85" stroke-width="2.6"/><path d="M18.0 70 h64.0 v5 h-64.0 z" fill="#1E3A8A" fill-opacity=".35"/>',
        g='<g transform="rotate(-35 46 40)">'
          '<ellipse cx="46" cy="32" rx="15" ry="19" fill="#fff" fill-opacity=".18" stroke="#fff" stroke-width="4.5"/>'
          '<path d="M37 22 V42 M42 15 V49 M46 13 V51 M50 15 V49 M55 22 V42 M32 26 H60 M31 32 H61 M32 38 H60 M35 44 H57" stroke="#fff" stroke-opacity=".75" stroke-width="1.4"/>'
          '<rect x="43" y="50" width="6" height="8" rx="2" fill="#fff"/>'
          '<rect x="42.5" y="57" width="7" height="17" rx="3" fill="#FF6B5A"/></g>'
          '<circle cx="70" cy="58" r="11" fill="#FF5A4A"/>'
          '<path d="M61 52 Q70 58 61 66 M79 50 Q70 58 79 66" stroke="#fff" stroke-width="2" fill="none"/>'
          '<circle cx="66" cy="53" r="2.5" fill="#fff" opacity=".7"/>',
    ),
}


def _beads(cx=50, cy=43, r=21, n=15, gap_deg=40):
    out = []
    for i in range(n):
        ang = math.radians(90 + gap_deg / 2 + i * (360 - gap_deg) / (n - 1))
        out.append(f'<circle cx="{cx + r * math.cos(ang):.2f}" cy="{cy + r * math.sin(ang):.2f}" r="4.3" fill="#fff"/>')
    return "".join(out)


# ── Hub / Pray-with-Mo UI icons (replace the old plain-emoji tiles) ──
UI_ICONS = {
    # Panduan Sholat — a mosque with a dome, two minarets and a crescent
    "sholat-guide": dict(
        a="#FCD34D", b="#D97706", label="panduan sholat",
        g='<rect x="15" y="40" width="9" height="42" rx="3" fill="#fff"/><rect x="76" y="40" width="9" height="42" rx="3" fill="#fff"/>'
          '<path d="M15 41l4.5-10 4.5 10zM76 41l4.5-10 4.5 10z" fill="#fff"/>'
          '<path d="M28 58C28 44 38 35 50 29c12 6 22 15 22 29z" fill="#fff"/>'
          '<path d="M50 29v-7" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>'
          + crescent(50, 16, 5.6, "#FFF3C4", dx=3.2) +
          '<rect x="26" y="56" width="48" height="26" rx="3" fill="#fff"/>'
          '<path d="M43 82V71a7 7 0 0 1 14 0v11z" fill="#B45309"/>'
          '<path d="M31 64h6M63 64h6" stroke="#B45309" stroke-width="3.4" stroke-linecap="round" opacity=".55"/>',
    ),
    # Progress — a star medal with ribbons
    "sholat-progress": dict(
        a="#A5B4FC", b="#4338CA", label="progress",
        g='<path d="M38 60l-8 24 9-4 6 7 5-20zM62 60l8 24-9-4-6 7-5-20z" fill="#fff" opacity=".8"/>'
          '<circle cx="50" cy="44" r="25" fill="#fff"/>'
          '<circle cx="50" cy="44" r="18.5" fill="none" stroke="#4338CA" stroke-width="2" opacity=".22"/>'
          + star(50, 45, 1.45, "#FFC83D"),
    ),
    # Waktu Sholat — a clock with a little crescent
    "sholat-times": dict(
        a="#6EE7B7", b="#047857", label="waktu sholat",
        g='<circle cx="48" cy="54" r="28" fill="#fff"/>'
          '<path d="M48 31v4M48 73v4M25 54h4M67 54h4" stroke="#047857" stroke-width="3" stroke-linecap="round" opacity=".45"/>'
          '<path d="M48 54V40M48 54l10 7" stroke="#047857" stroke-width="5" stroke-linecap="round"/>'
          '<circle cx="48" cy="54" r="3.6" fill="#047857"/>'
          + crescent(76, 22, 10, "#FFE27A", dx=6),
    ),
    # Dzikir — a loop of prayer beads (tasbih) with a tassel
    "sholat-dzikir": dict(
        a="#FDA4AF", b="#E11D48", label="dzikir",
        g=_beads()
          + '<path d="M50 70v8" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>'
          '<circle cx="50" cy="66" r="5.6" fill="#FFE27A"/>'
          '<path d="M44 90l3-12h6l3 12z" fill="#fff"/>'
          + star(50, 43, 0.7, "#FFE27A"),
    ),
    # Kiblat — a compass
    "qibla": dict(
        a="#7DD3FC", b="#0369A1", label="kiblat",
        g='<circle cx="50" cy="50" r="30" fill="#fff"/>'
          '<circle cx="50" cy="50" r="23" fill="none" stroke="#0369A1" stroke-width="2" opacity=".2"/>'
          '<path d="M50 24v5M50 71v5M24 50h5M71 50h5" stroke="#0369A1" stroke-width="3" stroke-linecap="round" opacity=".45"/>'
          '<path d="M44.6 55.4L64 36l-9.4 19.4z" fill="#F59E0B"/>'
          '<path d="M44.6 55.4L36 64l18.6-8.6z" fill="#0369A1"/>'
          '<circle cx="50" cy="50" r="3.4" fill="#fff" stroke="#0369A1" stroke-width="2"/>',
    ),
    # Mutiara — a pearl in an open shell (verses & hadith "pearls")
    "pearl": dict(
        a="#5EEAD4", b="#0F766E", label="mutiara",
        g='<circle cx="50" cy="42" r="16" fill="#fff"/>'
          '<circle cx="50" cy="42" r="16" fill="#0F766E" opacity=".10"/>'
          '<circle cx="44.5" cy="36.5" r="5" fill="#fff"/>'
          '<path d="M16 56h68c0 15-15 26-34 26S16 71 16 56z" fill="#fff"/>'
          '<path d="M30 61l6 16M50 61v19M70 61l-6 16" stroke="#0F766E" stroke-width="2.4" stroke-linecap="round" opacity=".3"/>'
          + star(78, 24, 0.5, "#FFE27A") + star(23, 28, 0.34, "#fff"),
    ),
    # Kalender — a calendar page with a crescent
    "calendar": dict(
        a="#C4B5FD", b="#6D28D9", label="kalender",
        g='<rect x="20" y="24" width="60" height="56" rx="10" fill="#fff"/>'
          '<path d="M20 34a10 10 0 0 1 10-10h40a10 10 0 0 1 10 10v6H20z" fill="#FFC83D"/>'
          '<rect x="32" y="16" width="7" height="15" rx="3.5" fill="#fff"/><rect x="61" y="16" width="7" height="15" rx="3.5" fill="#fff"/>'
          + crescent(48, 60, 12, "#6D28D9", dx=7) + star(64, 52, 0.42, "#6D28D9"),
    ),
    # Tema — half sun / half moon
    "theme": dict(
        a="#93C5FD", b="#1E40AF", label="tema",
        g='<circle cx="50" cy="50" r="22" fill="none" stroke="#fff" stroke-width="6"/>'
          '<path d="M50 28a22 22 0 0 1 0 44z" fill="#fff"/>'
          '<path d="M50 14v5M50 81v5" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7"/>'
          + star(24, 24, 0.4, "#FFE27A"),
    ),
    # Suara — a speaker with sound waves
    "sound": dict(
        a="#FCD34D", b="#EA580C", label="suara",
        g='<path d="M20 40h12l16-13v46L32 60H20a3 3 0 0 1-3-3V43a3 3 0 0 1 3-3z" fill="#fff" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>'
          '<path d="M60 39a15 15 0 0 1 0 22" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>'
          '<path d="M69 30a27 27 0 0 1 0 40" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".7"/>',
    ),
    # Si Kecil — a child avatar (a simple, faceless silhouette)
    "child": dict(
        a="#7DD3FC", b="#2563EB", label="si kecil",
        g='<circle cx="50" cy="38" r="15" fill="#fff"/>'
          '<path d="M24 82c0-15 11.6-25 26-25s26 10 26 25z" fill="#fff"/>'
          + star(76, 24, 0.5, "#FFE27A"),
    ),
    # Versi — a phone with a crescent & star on its screen
    "version": dict(
        a="#5EEAD4", b="#0D9488", label="versi",
        g='<rect x="31" y="15" width="38" height="70" rx="9" fill="#fff"/>'
          '<rect x="36" y="24" width="28" height="48" rx="4" fill="#0D9488"/>'
          + crescent(49, 48, 9, "#FFE27A", dx=5) + star(57, 41, 0.3, "#fff") +
          '<rect x="44" y="77" width="12" height="3" rx="1.5" fill="#0D9488" opacity=".45"/>',
    ),
    # Total Game — a game controller
    "games": dict(
        a="#86EFAC", b="#16A34A", label="game",
        g='<path transform="translate(50 52) scale(3.5) translate(-12 -12.9)" d="M7 7.5h10a4.2 4.2 0 0 1 4.1 5l-.8 4.1a2.3 2.3 0 0 1-4 1.1L14.6 16H9.4l-1.7 1.7a2.3 2.3 0 0 1-4-1.1l-.8-4.1A4.2 4.2 0 0 1 7 7.5z" fill="#fff"/>'
          '<path d="M33.5 44v13M27 50.5h13" stroke="#16A34A" stroke-width="4.4" stroke-linecap="round"/>'
          '<circle cx="62" cy="46" r="3.6" fill="#16A34A"/><circle cx="70" cy="54" r="3.6" fill="#FFC83D"/>',
    ),
    # Misi — a heart with a sparkle
    "mission": dict(
        a="#F9A8D4", b="#DB2777", label="misi",
        g='<path d="M50 80C30 66 18 55 18 40a15 15 0 0 1 32-6 15 15 0 0 1 32 6c0 15-12 26-32 40z" fill="#fff"/>'
          '<path d="M30 40a8 8 0 0 1 8-8" fill="none" stroke="#DB2777" stroke-width="3.4" stroke-linecap="round" opacity=".35"/>'
          + star(76, 22, 0.55, "#FFE27A"),
    ),
    # Doa — crescent & stars (quick-stats tile)
    "doa": dict(
        a="#93C5FD", b="#2563EB", label="doa",
        g=crescent(46, 54, 26, "#fff", dx=14) + star(70, 30, 0.6, "#FFE27A") + star(76, 58, 0.36, "#fff") + star(30, 24, 0.34, "#fff"),
    ),
}


def main():
    for d in OUT_DIRS:
        if not d.parent.parent.exists():  # repo folder (public/ or www/) must exist
            continue
        d.mkdir(parents=True, exist_ok=True)
        for slug, spec in ICONS.items():
            (d / f"{slug}.svg").write_text(svg(slug, spec["a"], spec["b"], spec["g"]))
        print(f"wrote {len(ICONS)} icons → {d}")
    if APP_GAMES_DIR.parent.parent.exists():
        for slug, spec in APP_ICONS.items():
            (APP_GAMES_DIR / f"{slug}.svg").write_text(svg(slug, **{k: spec[k] for k in spec}))
        APP_UI_DIR.mkdir(parents=True, exist_ok=True)
        for slug, spec in UI_ICONS.items():
            (APP_UI_DIR / f"{slug}.svg").write_text(svg(slug, **{k: spec[k] for k in spec}))
        print(f"wrote {len(APP_ICONS)} app-only game icons + {len(UI_ICONS)} UI icons → {APP / 'www/icons'}")


if __name__ == "__main__":
    main()
