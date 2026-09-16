// Semua teks & data ditaruh di sini supaya gampang diubah tanpa
// harus mengubah komponen React-nya satu-satu.

export const profile = {
  name: "Revandra Dwi Nur Rohman",
  role: "Student • Web Developer • Creative",
  tagline:
    "Saya seorang pelajar dan calon developer yang senang membuat website modern, sederhana, dan nyaman digunakan.",
  education: "SMKN 1 Jenangan",
  domisili: "Ponorogo",
  email: "drarevan51@gmail.com",
  photo: "/assets/img/fotodirisaya.jpeg",
  stats: [
    { value: "10+", label: "Proyek" },
    { value: "4+", label: "Skill" },
    { value: "100%", label: "Belajar" },
  ],
};

export const about = {
  text:
    "Saya memiliki ketertarikan pada dunia teknologi, khususnya pengembangan website. Saya suka mempelajari hal baru, mencoba membuat proyek, dan terus meningkatkan kemampuan melalui praktik langsung.",
};

// TODO: sesuaikan jabatan/instansi jika ada perubahan (mis. setelah lulus PKL)
export const professionalProfile = {
  jabatan: "Siswa",
  instansi: "SMKN 1 Jenangan — Praktik Kerja Lapangan (PKL)",
  bidang: "Web Development (Frontend & Backend dasar)",
  deskripsi:
    "Fokus belajar membangun aplikasi web dari sisi tampilan hingga koneksi ke database, melalui praktik langsung di sekolah maupun tempat PKL.",
};

// Urutan dari terbaru ke terlama
export const education = [
  {
    period: "2024 - Sekarang",
    title: "SMKN 1 Jenangan",
    subtitle: "Rekayasa Perangkat Lunak (RPL)", // TODO: sesuaikan jika jurusan berbeda
    desc: "Mempelajari dasar pemrograman, basis data, dan pengembangan aplikasi web.",
  },
  {
    period: "2021 - 2024",
    title: "SMPN 1 JETIS",
    subtitle: "Pendidikan Menengah Pertama",
    desc: "Menyelesaikan pendidikan menengah pertama.",
  },
   {
    period: "2015 - 2021",
    title: "SDN 1 TURI",
    subtitle: "pendidikan formal pada jenjang pendidikan dasar",
    desc: " Membangun fondasi pengetahuan, keterampilan, sikap sosial, serta pembentukan karakter anak.",
  },
];

export const experience = [
  {
    period: "2026",
    title: "Praktik Kerja Lapangan — Fresh Garden",
    subtitle: "Web Developer (PKL)",
    desc: "Mengembangkan dashboard admin untuk jual-beli produk segar (telur, sayur, dll), meliputi halaman Overview, Produk, Pembeli, Pembelian, dan Artikel menggunakan React, Vite, Node.js, dan MySQL.",
  },
  {
    period: "2025 — Sekarang",
    title: "Proyek Mandiri",
    subtitle: "Belajar & membangun portofolio",
    desc: "Membangun beberapa proyek latihan seperti Personal Portfolio dan Sistem Keluhan untuk mengasah kemampuan React, Node.js, dan MySQL.",
  },
];

export const skills = [
  {
    icon: "bi-filetype-html",
    name: "HTML",
    desc: "Membuat struktur website yang rapi.",
    level: 85,
  },

  {
    icon: "bi-css",
    name: "CSS",
    desc: "Membuat tampilan modern dan responsive.",
    level: 80,
  },

  {
    icon: "bi-javascript",
    name: "JavaScript",
    desc: "Membuat website lebih interaktif.",
    level: 70,
  },

  {
    icon: "bi-bootstrap",
    name: "Bootstrap",
    desc: "Membuat layout responsive dengan cepat.",
    level: 80,
  },

  {
    icon: "bi-filetype-sql",
    name: "MySQL",
    desc: "Menyimpan dan mengelola data dalam aplikasi atau website.",
    level: 80,
  },

  {
  icon: "bi-robot",
  name: "AI",
  desc: "Memanfaatkan tools AI untuk membantu proses belajar dan coding sehari-hari.",
  level: 70,
  },

];

export const projects = [
  {
    title: "Personal Portfolio",
    desc: "Website profil pribadi yang menampilkan informasi, keahlian, dan karya.",
    tags: ["Ract", "Vite", "Bootstrap"],
  },
  {
    title: "Fresh Garden",
    desc: "Website penjualan produk segar dengan katalog dan informasi produk, lengkap dengan dashboard admin.",
    tags: ["Express.js", "Node.js", "React", "Vite", "API", "MySQL"],
  },
  {
    title: "Sistem Keluhan",
    desc: "Sistem sederhana untuk menerima dan mengelola laporan atau keluhan.",
    tags: ["React", "Vite", "Node.js", "MySQL"],
  },
];

// TODO: ganti dengan sertifikat/prestasi asli jika sudah ada
export const certificates = [
  {
    icon: "bi-patch-check",
    title: "Sertifikat Pratik Kerja Lapangan",
    issuer: "PKL",
    year: "2026",
  },
];

// TODO: ganti dengan dokumentasi kegiatan asli (foto/nama kegiatan)
export const activities = [
  {
    icon: "bi-laptop",
     image: "/assets/img/webp.jpeg",
    title: "Workshop Pengembangan Web",
    desc: "Belajar praktik langsung membangun aplikasi web modern.",
  },
  {
    icon: "bi-people",
    image: "/assets/img/pkl.jpeg",
    title: "Praktik Kerja Lapangan",
    desc: "Mengerjakan proyek bersama tim di tempat PKL.",
  },
  {
    icon: "bi-mortarboard",
    image: "/assets/img/belajarman.jpeg",
    title: "Kegiatan Belajar Mandiri",
    desc: "Mengikuti tutorial dan latihan coding di luar jam sekolah.",
  },
];

// TODO: ganti dengan artikel/tulisan asli
export const articles = [
  {
     title: "Perjalanan Belajar: Dari Pondasi HTML sampai Full-Stack Sederhana",
    excerpt:"Semua bermula dari belajar pondasi HTML untuk memahami struktur website, lalu berlanjut ke CSS, JavaScript, Bootstrap, hingga MySQL untuk membuat aplikasi web yang lebih lengkap.",
  },
  {
    title: "Pengalaman PKL: Membangun Dashboard Admin Fresh Garden",
    excerpt:
      "Cerita di balik pengembangan dashboard admin Fresh Garden selama PKL — mulai dari merancang halaman Overview, Produk, hingga Pembelian, menggunakan React, Node.js, dan MySQL.",
  },
];

export const contactLinks = [
  { icon: "bi-envelope", label: "Email", href: `mailto:${profile.email}` },
  { icon: "bi-whatsapp", label: "WhatsApp", href: "https://wa.me/6281315937215" },
  { icon: "bi-github", label: "GitHub", href: "https://revandradwi113-lab.com/" },
  { icon: "bi-instagram", label: "Instagram", href: "https://revandradwi0603.com/" },
];

export const nav = [
  { href: "#home", label: "Beranda" },
  { href: "#about", label: "Tentang" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#skills", label: "Keahlian" },
  { href: "#projects", label: "Proyek" },
  { href: "#certificates", label: "Sertifikat" },
  { href: "#activities", label: "Kegiatan" },
  { href: "#blog", label: "Artikel" },
  { href: "#contact", label: "Kontak" },
];
