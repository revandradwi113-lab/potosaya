# Portfolio — Revandra Dwi Nur Rohman

Website profil pribadi, dibangun ulang dengan **React + Vite** dan **Bootstrap 5**
(pakai `container`, `row`, `col` di semua section). Struktur mengikuti daftar
bagian yang disarankan di tabel referensi, termasuk beberapa bagian yang
sebelumnya belum ada di versi HTML lama:

- Header / Navbar
- Hero / Beranda
- Tentang Saya (+ **Profil Profesional** — baru)
- **Pendidikan** (timeline — baru)
- **Pengalaman** (timeline, termasuk PKL Fresh Garden — baru)
- Keahlian (sekarang dengan progress bar level skill)
- Karya / Portofolio
- **Sertifikat / Prestasi** (baru, isi contoh — silakan sesuaikan)
- **Kegiatan** (dokumentasi, baru, isi contoh — silakan sesuaikan)
- **Artikel / Blog** (baru, isi contoh — silakan sesuaikan)
- Kontak
- Footer

## Cara menjalankan

```bash
npm install
npm run dev
```

Lalu buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

Untuk build versi produksi:

```bash
npm run build
npm run preview
```

## Struktur

```
src/
  data/content.js      ← semua teks/data (nama, skill, proyek, dst) — edit di sini
  components/          ← satu komponen per section
  App.jsx              ← menyusun urutan section
  index.css            ← semua styling (tema warna gelap ungu/cyan)
public/
  assets/img/          ← taruh foto profil di sini (revandrafoto.jpeg)
```

## Yang perlu kamu sesuaikan

Semua teks ada di **satu file**: `src/data/content.js`. Bagian yang masih
berupa contoh/placeholder (ditandai `TODO` atau tulisan "Segera hadir"):

- `education` → jurusan & nama SMP (isi sesuai data asli)
- `certificates` → sertifikat/prestasi asli (kalau ada)
- `activities` → dokumentasi kegiatan asli (bisa ganti ikon dengan foto)
- `articles` → tulisan/artikel asli kalau sudah ada

Foto profil: taruh file `revandrafoto.jpeg` di `public/assets/img/`. Kalau
foto belum ada, tampilan otomatis memakai avatar inisial "RD" sebagai
pengganti — jadi website tetap rapi meskipun fotonya belum di-upload.
