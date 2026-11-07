/**
 * Join-the-story extras for some picture books (by page index):
 *  - chants: a short line the child says out loud ("Giliranmu! 🎤")
 *  - choices: "Apa yang harus Mo lakukan?" — tap an answer; the wrong one
 *    gets a gentle, funny reply and another try
 *  - friend: a friend's name in the text that becomes the child's own name
 */
import type { Locale } from "@/lib/i18n/config";

type L = Record<Locale, string>;
export interface Choice {
  q: L;
  options: { label: L; good: boolean; reply: L }[];
}
export interface Interactive {
  chants?: Record<number, L>;
  choices?: Record<number, Choice>;
  friend?: string;
}

export const INTERACTIVE: Record<string, Interactive> = {
  "baby-mo-terpisah-di-supermarket": {
    chants: { 1: { id: "Berhenti! Penolong aman! Nomor Abi!", en: "Stop! Safe helper! Abi's number!" }, 15: { id: "Berhenti! Penolong aman! Nomor Abi!", en: "Stop! Safe helper! Abi's number!" } },
    choices: {
      6: {
        q: { id: "Apa yang harus Mo lakukan?", en: "What should Mo do?" },
        options: [
          { label: { id: "Lari mencari Abi ke mana-mana", en: "Run around looking for Abi" }, good: false, reply: { id: "Ups! Kalau Mo berlari, Abi jadi makin sulit menemukannya. Coba lagi!", en: "Oops! If Mo runs around, Abi will find it harder to find him. Try again!" } },
          { label: { id: "Berhenti dan tarik napas", en: "Stop and take a breath" }, good: true, reply: { id: "Betul! Langkah pertama: BERHENTI.", en: "Yes! Step one: STOP." } },
        ],
      },
      8: {
        q: { id: "Siapa penolong yang aman?", en: "Who is a safe helper?" },
        options: [
          { label: { id: "Kakak kasir berseragam", en: "The cashier in uniform" }, good: true, reply: { id: "Hebat! Petugas berseragam adalah penolong yang aman.", en: "Great! Staff in uniform are safe helpers." } },
          { label: { id: "Om asing yang mengajak keluar", en: "A stranger who says 'come outside'" }, good: false, reply: { id: "Hmm, orang asing yang mengajak pergi bukan penolong aman. Coba lagi!", en: "Hmm, a stranger who wants to take you away isn't a safe helper. Try again!" } },
        ],
      },
    },
  },
  "lebah-kecil-dan-madu": {
    chants: { 15: { id: "Diam seperti patung!", en: "Freeze like a statue!" } },
    choices: {
      0: {
        q: { id: "Apa yang sebaiknya Mo lakukan?", en: "What should Mo do?" },
        options: [
          { label: { id: "Kibas-kibaskan tangan", en: "Flap his hands" }, good: false, reply: { id: "Bzzz! Lebahnya malah kaget dan merasa terancam. Coba lagi!", en: "Bzzz! That startles the bee and makes it feel threatened. Try again!" } },
          { label: { id: "Diam seperti patung", en: "Freeze like a statue" }, good: true, reply: { id: "Betul! Diam seperti patung, lalu menjauh pelan-pelan.", en: "Yes! Freeze like a statue, then move away slowly." } },
        ],
      },
    },
  },
  "saat-bumi-bergoyang": {
    chants: { 2: { id: "Merunduk, berlindung, berpegangan!", en: "Drop, cover, hold on!" }, 15: { id: "Merunduk, berlindung, berpegangan!", en: "Drop, cover, hold on!" } },
    choices: {
      1: {
        q: { id: "Lantai bergoyang! Apa yang harus dilakukan?", en: "The floor is shaking! What should we do?" },
        options: [
          { label: { id: "Lari keluar rumah sekarang", en: "Run outside right now" }, good: false, reply: { id: "Waduh, berlari saat lantai bergoyang bisa membuat jatuh. Coba lagi!", en: "Uh-oh, running while the floor shakes can make you fall. Try again!" } },
          { label: { id: "Merunduk di bawah meja yang kokoh", en: "Get under a sturdy table" }, good: true, reply: { id: "Tepat! Merunduk, berlindung, berpegangan!", en: "Exactly! Drop, cover, hold on!" } },
        ],
      },
    },
  },
  "kepiting-yang-berjalan-miring": {
    chants: { 13: { id: "Semua beda, semua keren!", en: "Everyone's different, everyone's cool!" } },
    choices: {
      3: {
        q: { id: "Kepitingnya bersembunyi. Apa yang sebaiknya Mo lakukan?", en: "The crab is hiding. What should Mo do?" },
        options: [
          { label: { id: "Terus menertawakannya", en: "Keep laughing at it" }, good: false, reply: { id: "Kasihan… kepitingnya jadi makin takut. Coba lagi!", en: "Poor thing… the crab gets even more scared. Try again!" } },
          { label: { id: "Berhenti mengejek", en: "Stop teasing" }, good: true, reply: { id: "Betul! Mengejek membuat hati sedih.", en: "Yes! Teasing makes hearts sad." } },
        ],
      },
    },
  },
  "gurita-kecil-yang-pemalu": { chants: { 12: { id: "TIGA!", en: "THREE!" } }, friend: "Nala" },
  "tukik-pulang-ke-laut": { chants: { 5: { id: "Ayo, tukik! Kamu bisa!", en: "Go, little turtles! You can do it!" } } },
  "saat-lampu-padam-bintang-menyala": { chants: { 4: { id: "MASYA ALLAH!", en: "MASYA ALLAH!" } } },
  "jingga-ikan-badut-mencari-rumah": { chants: { 8: { id: "Masuklah, Jingga!", en: "Come in, Jingga!" } } },
  "lagu-paus-untuk-bayinya": { chants: { 5: { id: "Ibu di sini.", en: "I'm here." } } },
  "tablet-juga-perlu-tidur": { chants: { 5: { id: "Selamat tidur, tablet!", en: "Good night, tablet!" } } },
};

export const NAME_KEY = "bm-child-name";
