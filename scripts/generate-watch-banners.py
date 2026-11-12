#!/usr/bin/env python3
"""Baby Mo — Apple Watch App Store banners.

Takes the plain 416x496 simulator captures and produces caption banners in the
same family style as the iPhone/iPad sets: soft mint gradient, "BABY MO" pill,
a two-tone Fredoka headline (navy + green), and the screenshot in a rounded
watch-like frame. Output stays exactly 416x496 (the size App Store Connect's
watch slot accepts).

Usage: python3 gen.py <captures-dir> <out-dir>
"""
import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 416, 496
NAVY = (42, 47, 122)        # #2A2F7A — kit headline navy
GREEN = (18, 161, 90)       # #12A15A — kit accent green
BG_TOP = (240, 247, 240)    # mint gradient, like the iPhone banners
BG_BOT = (214, 238, 222)

FREDOKA = "/tmp/watch-banners/Fredoka.ttf"
NUNITO = "/tmp/watch-banners/Nunito.ttf"

def font(path, size, wght):
    f = ImageFont.truetype(path, size)
    try:
        f.set_variation_by_axes([wght])
    except Exception:
        pass
    return f

# key -> (navy part, green part) per language
CAPTIONS = {
    "home":    {"id": ("Baby Mo di ", "jam tanganmu"), "en": ("Baby Mo on ", "your wrist")},
    "dua":     {"id": ("Doa dengan ", "suara Mo"),      "en": ("Du'as in ", "Mo's voice")},
    "tasbih":  {"id": ("Tasbih: ", "putar & goyang"),   "en": ("Tasbih: ", "turn or shake")},
    "prayer":  {"id": ("Waktu sholat ", "sekilas"),     "en": ("Prayer times ", "at a glance")},
    "ramadan": {"id": ("Teman ", "Ramadan"),            "en": ("Your ", "Ramadan buddy")},
    "pet":     {"id": ("Rawat ", "Mimi"),               "en": ("Care for ", "Mimi")},
    "duas":    {"id": ("5 momen ", "doa harian"),       "en": ("5 du'a ", "moments")},
}

def gradient(w, h, top, bot):
    img = Image.new("RGB", (w, h))
    px = img.load()
    for y in range(h):
        t = y / (h - 1)
        c = tuple(round(top[i] + (bot[i] - top[i]) * t) for i in range(3))
        for x in range(w):
            px[x, y] = c
    return img

def rounded(img, radius):
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, img.size[0] - 1, img.size[1] - 1], radius, fill=255)
    out = img.convert("RGBA")
    out.putalpha(mask)
    return out

def banner(shot_path, cap, out_path):
    base = gradient(W, H, BG_TOP, BG_BOT)
    d = ImageDraw.Draw(base)

    # "BABY MO" pill
    pf = font(NUNITO, 11, 900)
    label, tracking = "BABY MO", 3
    tw = sum(d.textlength(ch, font=pf) + tracking for ch in label) - tracking
    pw, ph = tw + 28, 24
    px0, py0 = (W - pw) / 2, 12
    d.rounded_rectangle([px0, py0, px0 + pw, py0 + ph], ph / 2, fill=(255, 255, 255))
    x = px0 + 14
    for ch in label:
        d.text((x, py0 + ph / 2), ch, font=pf, fill=NAVY, anchor="lm")
        x += d.textlength(ch, font=pf) + tracking

    # two-tone headline, auto-shrunk to fit
    size = 29
    while size > 18:
        hf = font(FREDOKA, size, 600)
        tw = d.textlength(cap[0], font=hf) + d.textlength(cap[1], font=hf)
        if tw <= W - 32:
            break
        size -= 1
    hy = 62
    x = (W - tw) / 2
    d.text((x, hy), cap[0], font=hf, fill=NAVY, anchor="lm")
    d.text((x + d.textlength(cap[0], font=hf), hy), cap[1], font=hf, fill=GREEN, anchor="lm")

    # screenshot in a rounded watch-like frame with soft shadow
    shot = Image.open(shot_path).convert("RGB")
    sw = 318
    sh = round(shot.height * sw / shot.width)
    shot = shot.resize((sw, sh), Image.LANCZOS)
    sx, sy = (W - sw) // 2, 92
    r = 56

    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle([sx - 2, sy + 6, sx + sw + 2, sy + sh + 10], r, fill=(30, 50, 90, 70))
    shadow = shadow.filter(ImageFilter.GaussianBlur(9))
    base = Image.alpha_composite(base.convert("RGBA"), shadow)

    frame = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(frame).rounded_rectangle([sx - 5, sy - 5, sx + sw + 5, sy + sh + 5], r + 5, fill=(24, 26, 34, 255))
    base = Image.alpha_composite(base, frame)
    base.alpha_composite(rounded(shot, r), (sx, sy))

    base.convert("RGB").resize((W, H)).save(out_path, "PNG", optimize=True)

src, out = sys.argv[1], sys.argv[2]
import os
os.makedirs(out, exist_ok=True)
for key, langs in CAPTIONS.items():
    for lang, cap in langs.items():
        banner(f"{src}/watch-{lang}-{key}.png", cap, f"{out}/banner-{lang}-{key}.png")
        print("made", f"banner-{lang}-{key}.png")
