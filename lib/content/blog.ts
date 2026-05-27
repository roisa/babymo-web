import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "cara-mengenalkan-huruf-hijaiyah-pada-anak",
    title: {
      id: "7 Cara Menyenangkan Mengenalkan Huruf Hijaiyah pada Anak Usia 3–6 Tahun",
      en: "7 Joyful Ways to Introduce Arabic Letters to Children Aged 3–6",
    },
    excerpt: {
      id: "Anak susah hafal hijaiyah? 7 metode bermain yang terbukti — kartu warna, lagu, game interaktif — supaya anak 3–6 tahun hafal 28 huruf hijaiyah dalam 30 hari.",
      en: "Child struggling with Arabic letters? 7 proven play-based methods — color cards, songs, interactive games — to help a 3–6 year old master 28 letters in 30 days.",
    },
    body: {
      id: `<p>Anak usia 3–6 tahun ada di masa <em>golden age</em> — saat otak menyerap informasi paling cepat. Mengenalkan <strong>huruf hijaiyah</strong> di usia ini bukan hanya soal hafalan, tapi membangun fondasi cinta Al-Qur'an seumur hidup.</p>

<h2>1. Mulai dari 3 Huruf, Bukan 28</h2>
<p>Kesalahan umum: ingin anak langsung hafal Alif sampai Ya' dalam seminggu. Otak balita belum siap. Mulai dari <strong>Alif (ا), Ba (ب), Ta (ت)</strong> dulu — kuasai 3 huruf ini selama 3–5 hari.</p>

<h2>2. Gunakan Lagu Hijaiyah</h2>
<p>Otak anak menyerap melodi 10× lebih cepat dari kata-kata biasa. Nyanyikan lagu hijaiyah berirama ceria sambil menggerakkan badan.</p>

<h2>3. Kartu Bergambar Warna-warni</h2>
<p>Cetak kartu hijaiyah dengan warna kontras tinggi. Tunjukkan 1 kartu per hari sambil tempel di pintu kulkas.</p>

<h2>4. Game Interaktif Edukatif</h2>
<p>Game khusus balita muslim membuat belajar terasa seperti bermain. Anak menyeret huruf, mendengar bunyi yang benar, dapat reward visual saat berhasil.</p>

<h2>5. Tracing dengan Jari</h2>
<p>Aktivitas kinestetik membantu anak mengingat bentuk huruf. Sediakan nampan pasir, atau kertas dan krayon.</p>

<h2>6. Konsisten 10 Menit per Hari</h2>
<p><strong>10 menit setiap hari selama 4 minggu</strong> menghasilkan retensi 3× lipat dibanding 70 menit seminggu sekali.</p>

<h2>7. Rayakan Setiap Kemajuan Kecil</h2>
<p>"Subhanallah, kakak sudah hafal 5 huruf!" — kalimat sederhana ini melepas dopamin di otak anak.</p>

<h2>Kesimpulan</h2>
<p>Mengenalkan huruf hijaiyah pada anak usia 3–6 tahun bukan tentang kecepatan, tapi konsistensi dan kesenangan. Mulai dari 3 huruf, gabungkan lagu, kartu, game, dan tracing — lakukan <strong>10 menit per hari</strong> selama sebulan.</p>`,
      en: `<p>Children aged 3–6 are in their <em>golden age</em> — when the brain absorbs information fastest. Introducing the <strong>Arabic alphabet</strong> at this age is not just about memorization, but building a lifelong love for the Qur'an.</p>

<h2>1. Start with 3 Letters, Not 28</h2>
<p>A common mistake: wanting your child to memorize Alif through Ya' in a week. A toddler's brain isn't ready. Start with <strong>Alif (ا), Ba (ب), Ta (ت)</strong> — master these 3 letters over 3–5 days.</p>

<h2>2. Use Hijaiyah Songs</h2>
<p>A child's brain absorbs melody 10× faster than plain words. Sing rhythmic hijaiyah songs while moving the body.</p>

<h2>3. Colorful Picture Cards</h2>
<p>Print hijaiyah cards in high-contrast colors. Show 1 per day, taped to the fridge door.</p>

<h2>4. Interactive Educational Games</h2>
<p>Games designed for Muslim toddlers turn learning into play. The child drags letters, hears the correct sound, and gets visual rewards.</p>

<h2>5. Finger Tracing</h2>
<p>Kinesthetic activity helps children remember letter shapes. Provide a sand tray, or paper and crayons.</p>

<h2>6. Consistent 10 Minutes a Day</h2>
<p><strong>10 minutes every day for 4 weeks</strong> yields 3× the retention of 70 minutes once a week.</p>

<h2>7. Celebrate Every Small Win</h2>
<p>"SubhanAllah, you've memorized 5 letters!" — this simple sentence releases dopamine in your child's brain.</p>

<h2>Conclusion</h2>
<p>Teaching the Arabic alphabet to a 3–6 year old is not about speed, but consistency and joy. Start with 3 letters, mix in songs, cards, games, and tracing — for <strong>10 minutes a day</strong> over a month.</p>`,
    },
    tags: ["hijaiyah", "parenting", "edukasi"],
    published: "2026-05-27",
    updated: "2026-05-27",
    readingTimeMin: 6,
    author: "Tim Baby Mo",
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.published.localeCompare(a.published));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
