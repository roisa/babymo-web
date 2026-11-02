#!/usr/bin/env python3
"""
Baby Mo game icons — one source of truth for the website AND the game hub.

Each icon is an iOS-style squircle: a two-tone gradient, a soft top sheen,
an inner rim, and a white glyph drawn to match what the game actually is.
Writes identical SVGs to:
  babymo-web/public/icons/games/<slug>.svg
  babymo-app/www/icons/games/<slug>.svg   (when the app repo sits beside it)

Run:  python3 scripts/generate-game-icons.py
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIRS = [ROOT / "public/icons/games", ROOT.parent / "babymo-app/www/icons/games"]

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


_MASK_N = [0]


def crescent(cx, cy, r, fill, cut_fill=None, dx=None):
    """Crescent = a disc with an offset disc masked out (works on gradients)."""
    dx = r * 0.5 if dx is None else dx
    _MASK_N[0] += 1
    mid = f"cm{_MASK_N[0]}"
    return (
        f'<mask id="{mid}"><rect x="0" y="0" width="100" height="100" fill="#fff"/>'
        f'<circle cx="{cx + dx}" cy="{cy - r * 0.32}" r="{r * 0.84}" fill="#000"/></mask>'
        f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}" mask="url(#{mid})"/>'
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


def svg(slug: str, a: str, b: str, g: str) -> str:
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="{slug}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{a}"/><stop offset="1" stop-color="{b}"/></linearGradient>
    <linearGradient id="sheen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <filter id="sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".22"/></filter>
    <clipPath id="sq"><rect width="100" height="100" rx="23"/></clipPath>
  </defs>
  <g clip-path="url(#sq)">
    <rect width="100" height="100" fill="url(#bg)"/>
    <ellipse cx="50" cy="8" rx="70" ry="44" fill="url(#sheen)"/>
    <g filter="url(#sh)">{g}</g>
    <rect x=".75" y=".75" width="98.5" height="98.5" rx="22.4" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="1.5"/>
  </g>
</svg>
"""


def main():
    for d in OUT_DIRS:
        if not d.parent.parent.exists():  # repo folder (public/ or www/) must exist
            continue
        d.mkdir(parents=True, exist_ok=True)
        for slug, spec in ICONS.items():
            (d / f"{slug}.svg").write_text(svg(slug, spec["a"], spec["b"], spec["g"]))
        print(f"wrote {len(ICONS)} icons → {d}")


if __name__ == "__main__":
    main()
