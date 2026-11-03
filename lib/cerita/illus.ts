import type { ArtScene } from "./illus-types";
import { getBookPages, getPictureBook, pictureBookIllus } from "./picture-books";

/**
 * Animated illustrations for the illustrated picture-book stories.
 * `at` = paragraph index (blank-line separated, same in ID and EN) where a
 * picture starts. The first scene is also the story page's hero picture
 * and the Book Mode cover.
 */
const ILLUS: Record<string, ArtScene[]> = {
  "monster-gigi-takut-sikat": [
    { at: 0, bg: "bedroom", time: "night", props: [{ k: "teddy", x: 330 }, { k: "lamp", x: 440, s: 0.85 }], mo: [{ pose: "pose-12", x: 200 }], fx: ["sparkle"], alt: { id: "Baby Mo sudah siap tidur", en: "Baby Mo is ready for bed" } },
    { at: 3, bg: "bedroom", time: "night", props: [{ k: "teddy", x: 360 }], mo: [{ pose: "wow", x: 220, move: "hop" }], fx: ["sparkle", "stars"], alt: { id: "Monster gigi sedang berpesta?", en: "Are tooth monsters having a party?" } },
    { at: 9, bg: "bathroom", props: [{ k: "toothbrush", x: 360 }, { k: "cup", x: 440 }], mo: [{ pose: "yes", x: 240 }], alt: { id: "Siap mengusir monster gigi!", en: "Ready to chase the tooth monsters!" } },
    { at: 12, bg: "bathroom", props: [{ k: "toothbrush", x: 370, s: 1.2 }], mo: [{ pose: "yeyy", x: 240, move: "hop" }], fx: ["bubbles", "notes"], alt: { id: "Sikat kiri, sikat kanan!", en: "Brush the left and brush the right!" } },
    { at: 16, bg: "bathroom", props: [{ k: "cup", x: 400 }], mo: [{ pose: "ok", x: 250 }], fx: ["sparkle"], alt: { id: "Gigi bersih berkilau", en: "Sparkling clean teeth" } },
    { at: 19, bg: "bathroom", props: [{ k: "toothbrush", x: 380 }], mo: [{ pose: "idea", x: 250 }], fx: ["sparkle"], alt: { id: "Nabi ﷺ suka bersiwak", en: "The Prophet ﷺ loved the siwak" } },
    { at: 23, bg: "bedroom", time: "night", props: [{ k: "teddy", x: 330 }], mo: [{ pose: "pose-12", x: 200, move: "sway" }], fx: ["zzz", "stars"], alt: { id: "Tidur dengan mulut segar", en: "Asleep with a fresh mouth" } },
  ],
  "senyum-untuk-bu-sayur": [
    { at: 0, bg: "market", props: [{ k: "veggies", x: 145, y: 255 }, { k: "fruit", x: 405, y: 255 }, { k: "veggies", x: 665, y: 255 }], mo: [{ pose: "yeyy", x: 400 }], fx: ["sparkle"], alt: { id: "Pasar yang ramai di Sabtu pagi", en: "A busy market on Saturday morning" } },
    { at: 3, bg: "market", props: [{ k: "veggies", x: 145, y: 255 }, { k: "veggies", x: 665, y: 255 }], mo: [{ pose: "idea", x: 400 }], alt: { id: "Bu Sayur tampak lelah hari ini", en: "The Vegetable Lady looks tired today" } },
    { at: 8, bg: "market", props: [{ k: "veggies", x: 405, y: 255, s: 1.1 }], mo: [{ pose: "yeyy", x: 400, move: "hop" }], fx: ["hearts"], alt: { id: "Senyum paling lebar!", en: "The widest smile!" } },
    { at: 13, bg: "market", props: [{ k: "veggies", x: 145, y: 255 }, { k: "fruit", x: 665, y: 255 }], mo: [{ pose: "alright", x: 300 }, { pose: "yes", x: 520, flip: true }], fx: ["hearts", "sparkle"], alt: { id: "Senyum itu menular", en: "Smiles are catching" } },
    { at: 17, bg: "street", props: [{ k: "fruit", x: 560, s: 0.7 }], mo: [{ pose: "thank-you", x: 330 }], fx: ["sparkle"], alt: { id: "Jeruk hadiah dari Bu Sayur", en: "An orange from the Vegetable Lady" } },
    { at: 21, bg: "market", props: [{ k: "veggies", x: 145, y: 255 }, { k: "fruit", x: 405, y: 255 }, { k: "veggies", x: 665, y: 255 }], mo: [{ pose: "alright", x: 400 }], fx: ["hearts"], alt: { id: "Bagikan senyum dulu!", en: "Share smiles first!" } },
  ],
  "anak-kucing-di-bawah-hujan": [
    { at: 0, bg: "street", time: "rain", props: [{ k: "umbrella", x: 300, y: 330 }, { k: "puddle", x: 520 }], mo: [{ pose: "ok", x: 300 }], fx: ["rain"], alt: { id: "Pulang di bawah payung kuning", en: "Walking home under the yellow umbrella" } },
    { at: 3, bg: "street", time: "rain", props: [{ k: "box", x: 560 }, { k: "kitten", x: 560, y: 380, s: 0.8 }, { k: "puddle", x: 300 }], mo: [{ pose: "wow", x: 260 }], fx: ["rain"], alt: { id: "Ada suara meong dari kardus", en: "A meow from the box" } },
    { at: 13, bg: "street", time: "rain", props: [{ k: "box", x: 460 }, { k: "kitten", x: 460, y: 380, s: 0.8 }, { k: "umbrella", x: 460, y: 300, s: 1.1 }], mo: [{ pose: "yes", x: 240 }], fx: ["rain"], alt: { id: "Payung untuk si kucing kecil", en: "An umbrella for the little kitten" } },
    { at: 15, bg: "living", time: "rain", props: [{ k: "towel", x: 470 }, { k: "kitten", x: 480, y: 395, s: 0.9 }, { k: "water", x: 600, s: 0.7 }], mo: [{ pose: "ok", x: 260 }], alt: { id: "Kucing kecil minum", en: "The little kitten drinks" } },
    { at: 18, bg: "living", time: "rain", props: [{ k: "towel", x: 470 }, { k: "kitten", x: 480, y: 395, s: 0.9 }], mo: [{ pose: "yeyy", x: 250 }], fx: ["hearts", "notes"], alt: { id: "Kucing kecil, jangan takut", en: "Little kitten, don't you fear" } },
    { at: 24, bg: "living", time: "night", props: [{ k: "box", x: 480 }, { k: "kitten", x: 480, y: 380, s: 0.8 }], mo: [{ pose: "pose-12", x: 230, move: "sway" }], fx: ["zzz"], alt: { id: "Tidur dengan hati yang hangat", en: "Asleep with warm hearts" } },
  ],
  "benteng-selimut-hari-hujan": [
    { at: 0, bg: "living", props: [{ k: "cookies", x: 480 }, { k: "box", x: 640, s: 0.7 }], mo: [{ pose: "yeyy", x: 260, move: "hop" }], fx: ["sparkle"], alt: { id: "Hari piknik sudah tiba!", en: "Picnic day is here!" } },
    { at: 1, bg: "living", time: "rain", props: [{ k: "box", x: 520, s: 0.7 }], mo: [{ pose: "pose-37", x: 280 }], alt: { id: "Hujan deras, piknik batal", en: "Pouring rain — no picnic" } },
    { at: 7, bg: "living", time: "rain", props: [{ k: "fort", x: 500 }], mo: [{ pose: "idea", x: 200 }], alt: { id: "Membangun benteng selimut", en: "Building a blanket fort" } },
    { at: 11, bg: "living", time: "rain", props: [{ k: "fort", x: 500 }, { k: "cookies", x: 250 }], mo: [{ pose: "yeyy", x: 140, move: "hop" }], fx: ["hearts"], alt: { id: "Piknik di dalam benteng", en: "A picnic inside the fort" } },
    { at: 13, bg: "living", time: "rain", props: [{ k: "fort", x: 520 }, { k: "teddy", x: 280 }, { k: "books", x: 720 }], mo: [{ pose: "thank-you", x: 140 }], fx: ["sparkle"], alt: { id: "Main 'Untung Ada'", en: "Playing 'Lucky We Have'" } },
    { at: 22, bg: "garden", props: [{ k: "flowers", x: 600 }, { k: "tree", x: 130 }, { k: "butterfly", x: 520, y: 220 }], mo: [{ pose: "yes", x: 360 }], fx: ["sparkle"], alt: { id: "Hujan reda, hati gembira", en: "The rain stops, hearts are happy" } },
  ],
  "hari-umi-sakit": [
    { at: 0, bg: "kitchen", props: [{ k: "clock", x: 400, y: 240, s: 0.8 }, { k: "cup", x: 620, y: 255 }], mo: [{ pose: "idea", x: 280 }], alt: { id: "Dapur yang sepi pagi ini", en: "A quiet kitchen this morning" } },
    { at: 3, bg: "bedroom", props: [{ k: "thermometer", x: 640, y: 300 }], mo: [{ pose: "pose-37", x: 260 }], alt: { id: "Umi sedang sakit", en: "Umi is sick" } },
    { at: 7, bg: "bedroom", props: [{ k: "water", x: 400 }], mo: [{ pose: "yes", x: 250 }], alt: { id: "Siap merawat Umi!", en: "Ready to take care of Umi!" } },
    { at: 11, bg: "bedroom", props: [{ k: "card", x: 410 }, { k: "teddy", x: 620, y: 300, s: 0.6 }], mo: [{ pose: "thank-you", x: 250 }], fx: ["hearts"], alt: { id: "Kartu cepat sembuh untuk Umi", en: "A get-well card for Umi" } },
    { at: 14, bg: "bedroom", props: [{ k: "soup", x: 400 }, { k: "water", x: 480, s: 0.8 }, { k: "thermometer", x: 640, y: 300 }], mo: [{ pose: "ok", x: 240 }], alt: { id: "Sup hangat dari Abi", en: "Warm soup from Abi" } },
    { at: 17, bg: "bedroom", time: "dusk", props: [{ k: "flowers", x: 420 }], mo: [{ pose: "yeyy", x: 250 }], fx: ["hearts", "sparkle"], alt: { id: "Umi mulai sembuh", en: "Umi is feeling better" } },
    { at: 23, bg: "bedroom", time: "night", props: [{ k: "teddy", x: 380 }], mo: [{ pose: "pose-12", x: 230, move: "sway" }], fx: ["zzz", "hearts"], alt: { id: "Umi sayang kalian", en: "Umi loves you both" } },
  ],
  "pertama-kali-ke-masjid": [
    { at: 0, bg: "street", time: "dusk", props: [{ k: "bird", x: 200, y: 110 }], mo: [{ pose: "thank-you", x: 380 }], alt: { id: "Adzan Maghrib terdengar", en: "The Maghrib adhan rings out" } },
    { at: 3, bg: "mosque", props: [{ k: "shoes", x: 560 }], mo: [{ pose: "ok", x: 300 }], alt: { id: "Sandal rapi di rak", en: "Sandals neatly on the rack" } },
    { at: 6, bg: "mosque", mo: [{ pose: "wow", x: 400 }], fx: ["sparkle"], alt: { id: "Masjidnya besar sekali", en: "The masjid is enormous" } },
    { at: 10, bg: "mosque", props: [{ k: "mat", x: 400 }], mo: [{ pose: "thank-you", x: 400, move: "still" }], alt: { id: "Barisan lurus, bahu ke bahu", en: "Straight rows, shoulder to shoulder" } },
    { at: 15, bg: "mosque", props: [{ k: "mat", x: 400 }], mo: [{ pose: "alright", x: 400 }], fx: ["hearts"], alt: { id: "Masya Allah, anak kecil sholat berjamaah", en: "Masha Allah, a little boy praying in congregation" } },
    { at: 17, bg: "street", time: "night", mo: [{ pose: "yes", x: 400 }], fx: ["stars"], alt: { id: "Pulang di bawah bintang", en: "Walking home under the stars" } },
  ],
  "istana-pasir-yang-roboh": [
    { at: 0, bg: "beach", props: [{ k: "bucket", x: 560 }, { k: "shell", x: 680 }], mo: [{ pose: "yeyy", x: 320, move: "hop" }], alt: { id: "Liburan ke pantai!", en: "A beach holiday!" } },
    { at: 2, bg: "beach", props: [{ k: "sandcastle", x: 520 }, { k: "bucket", x: 690 }], mo: [{ pose: "yes", x: 260 }], fx: ["sparkle"], alt: { id: "Istana paling tinggi", en: "The tallest castle" } },
    { at: 5, bg: "beach", props: [{ k: "sandcastle", x: 560 }, { k: "crab", x: 330 }], mo: [{ pose: "wow", x: 150 }], alt: { id: "Kepiting berjalan menyamping", en: "A crab walking sideways" } },
    { at: 8, bg: "beach", props: [{ k: "bucket", x: 560, flip: true }, { k: "shell", x: 470 }], mo: [{ pose: "pose-30", x: 280 }], alt: { id: "Istananya roboh!", en: "The castle fell down!" } },
    { at: 12, bg: "beach", props: [{ k: "shell", x: 560 }], mo: [{ pose: "ok", x: 330, move: "sway" }], alt: { id: "Tarik napas panjang…", en: "A long, slow breath…" } },
    { at: 20, bg: "beach", props: [{ k: "sandcastle", x: 500, s: 1.15 }, { k: "bucket", x: 690 }], mo: [{ pose: "yeyy", x: 230, move: "hop" }], fx: ["confetti"], alt: { id: "Istana kedua, dibangun berdua", en: "The second castle, built together" } },
    { at: 24, bg: "beach", time: "dusk", props: [{ k: "shell", x: 560 }], mo: [{ pose: "thank-you", x: 330 }], alt: { id: "Dadah, istana!", en: "Bye-bye, castle!" } },
  ],
  "kemah-di-halaman-belakang": [
    { at: 0, bg: "garden", props: [{ k: "tent", x: 520 }, { k: "tree", x: 110 }], mo: [{ pose: "yeyy", x: 300, move: "hop" }], alt: { id: "Malam ini kita berkemah!", en: "Tonight we're camping!" } },
    { at: 3, bg: "garden", time: "dusk", props: [{ k: "tent", x: 520 }, { k: "camplight", x: 330 }], mo: [{ pose: "ok", x: 200 }], alt: { id: "Matahari terbenam", en: "The sun goes down" } },
    { at: 5, bg: "garden", time: "night", props: [{ k: "tent", x: 520 }, { k: "camplight", x: 330 }], mo: [{ pose: "pose-37", x: 200 }], alt: { id: "Gelap sekali…", en: "So dark…" } },
    { at: 9, bg: "garden", time: "night", props: [{ k: "tent", x: 560 }], mo: [{ pose: "wow", x: 300 }], fx: ["stars", "sparkle"], alt: { id: "Langit penuh bintang!", en: "A sky full of stars!" } },
    { at: 14, bg: "garden", time: "night", props: [{ k: "tent", x: 560 }, { k: "camplight", x: 420 }], mo: [{ pose: "idea", x: 240 }], fx: ["stars", "fireflies"], alt: { id: "Kunang-kunang menari", en: "Dancing fireflies" } },
    { at: 22, bg: "garden", time: "night", props: [{ k: "tent", x: 520 }, { k: "camplight", x: 330 }], mo: [{ pose: "pose-12", x: 200, move: "sway" }], fx: ["stars", "zzz"], alt: { id: "Tidur di bawah bintang", en: "Asleep under the stars" } },
  ],
  "sepeda-roda-dua": [
    { at: 0, bg: "park", props: [{ k: "bicycle", x: 520 }, { k: "bird", x: 200, y: 110 }, { k: "tree", x: 90 }], mo: [{ pose: "wow", x: 300 }], alt: { id: "Kakak-kakak naik sepeda", en: "Big kids riding bikes" } },
    { at: 3, bg: "park", props: [{ k: "bicycle", x: 460 }, { k: "cone", x: 680 }], mo: [{ pose: "yes", x: 260 }], alt: { id: "Siap mengayuh!", en: "Ready to pedal!" } },
    { at: 5, bg: "park", props: [{ k: "bicycle", x: 470, s: 0.95 }, { k: "cone", x: 680 }], mo: [{ pose: "pose-30", x: 260 }], alt: { id: "Gubrak! Jatuh…", en: "Crash! A fall…" } },
    { at: 10, bg: "park", props: [{ k: "bird", x: 300, y: 110 }, { k: "tree", x: 640 }], mo: [{ pose: "pose-37", x: 330 }], alt: { id: "Aku nggak bisa…", en: "I can't do it…" } },
    { at: 15, bg: "park", props: [{ k: "bicycle", x: 540 }], mo: [{ pose: "thank-you", x: 300 }], fx: ["sparkle"], alt: { id: "Ya Allah, tolong aku", en: "Ya Allah, please help me" } },
    { at: 21, bg: "park", props: [{ k: "bicycle", x: 450 }, { k: "cone", x: 700 }, { k: "cone", x: 120 }], mo: [{ pose: "run", x: 280, move: "hop" }], fx: ["leaves", "confetti"], alt: { id: "Aku bisa!", en: "I can do it!" } },
  ],
  "terima-kasih-pak-pos": [
    { at: 0, bg: "street", props: [{ k: "mailbox", x: 150 }, { k: "bird", x: 300, y: 110 }], mo: [{ pose: "wow", x: 400 }], alt: { id: "Ting-tong! Pak Pos datang", en: "Ding-dong! The Postman is here" } },
    { at: 2, bg: "street", props: [{ k: "parcel", x: 560 }, { k: "mailbox", x: 150 }], mo: [{ pose: "yeyy", x: 360, move: "hop" }], fx: ["sparkle"], alt: { id: "Paket dari Nenek!", en: "A parcel from Grandma!" } },
    { at: 6, bg: "living", props: [{ k: "parcel", x: 500 }], mo: [{ pose: "idea", x: 280 }], alt: { id: "Ada yang kita lupa…", en: "We forgot something…" } },
    { at: 11, bg: "street", props: [{ k: "mailbox", x: 650 }, { k: "water", x: 520, s: 0.8 }], mo: [{ pose: "thank-you", x: 330 }], fx: ["hearts"], alt: { id: "Terima kasih, Pak Pos!", en: "Thank you, Postman!" } },
    { at: 18, bg: "living", props: [{ k: "books", x: 470 }, { k: "parcel", x: 650, s: 0.8 }], mo: [{ pose: "yeyy", x: 250 }], fx: ["sparkle"], alt: { id: "Buku cerita dari Nenek", en: "Picture books from Grandma" } },
    { at: 20, bg: "living", props: [{ k: "card", x: 470 }, { k: "flowers", x: 640 }], mo: [{ pose: "thank-you", x: 250 }], fx: ["hearts"], alt: { id: "Kartu terima kasih untuk Nenek", en: "A thank-you card for Grandma" } },
    { at: 24, bg: "street", props: [{ k: "mailbox", x: 300 }, { k: "envelope", x: 430, y: 250 }], mo: [{ pose: "yes", x: 560 }], alt: { id: "Dikirim lewat kotak pos", en: "Off it goes in the postbox" } },
  ],
};

export function illusFor(slug: string): ArtScene[] | null {
  const pb = getPictureBook(slug);
  if (pb) return pictureBookIllus(pb);
  const bp = getBookPages(slug);
  if (bp) {
    const first = bp.pages[0]!.text;
    const cut = (t: string) => (t.match(/^[^.!?]*[.!?]/)?.[0] ?? t).replace(/["“”]/g, "");
    return [{ ...bp.cover, at: 0, alt: { id: cut(first.id), en: cut(first.en) } }];
  }
  return ILLUS[slug] ?? null;
}

export function hasIllus(slug: string): boolean {
  return slug in ILLUS || !!getBookPages(slug);
}
