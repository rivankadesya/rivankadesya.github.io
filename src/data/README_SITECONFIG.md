# 🎯 File Konfigurasi Utama: `siteConfig.js`

## 📍 Lokasi
`/src/data/siteConfig.js`

## ✨ Apa itu file ini?

File `siteConfig.js` adalah **satu-satunya file** yang perlu Anda edit untuk mengubah semua informasi di portfolio website. Semua data akan otomatis terupdate di seluruh website tanpa perlu mengubah komponen React.

## 🚀 Cara Menggunakan

1. **Buka file** `/src/data/siteConfig.js`
2. **Isi semua informasi** sesuai data Anda
3. **Simpan file** (Ctrl+S / Cmd+S)
4. **Website otomatis terupdate** (jika hot reload aktif)

## 📋 Informasi yang Dapat Dikonfigurasi

File ini berisi konfigurasi untuk:

1. ✅ **Informasi Personal** - Nama, profesi, email, deskripsi
2. ✅ **Statistik** - Experience, projects, clients
3. ✅ **Kontak** - Alamat, email, telepon
4. ✅ **Social Media** - Facebook, Instagram, LinkedIn, GitHub, dll
5. ✅ **Skills/Services** - Daftar skill dan services yang ditawarkan
6. ✅ **Work Process** - Langkah-langkah proses kerja
7. ✅ **Testimonials** - Testimonial dari klien
8. ✅ **Work Together** - Section ajakan bekerja sama
9. ✅ **Profile Info** - Informasi di profile card
10. ✅ **Navbar** - Menu items untuk navigasi

## ⚠️ Catatan Penting

### File Terpisah (Tidak di siteConfig.js):

1. **Portfolio/Projects** → Edit `/src/data/portfolioData.js`
   - Karena memerlukan import gambar, lebih mudah di file terpisah

2. **Blog Posts** → Edit `/src/components/blog/Blog.jsx`
   - Karena memerlukan import gambar, lebih mudah di file terpisah

## 📖 Dokumentasi Lengkap

Untuk panduan lengkap tentang informasi apa saja yang perlu disediakan, baca:
- **`CONFIGURATION_GUIDE.md`** - Panduan lengkap dengan checklist

## 💡 Tips

- Setiap section sudah ada komentar penjelasan
- Field yang tidak digunakan bisa dikosongkan atau isi dengan `null`
- Pastikan semua URL valid dan dapat diakses
- Gunakan format yang konsisten untuk tanggal, nomor telepon, dll

## 🔄 Hot Reload

Setelah mengubah file ini, website akan otomatis terupdate jika:
- Development server sedang berjalan (`npm run dev`)
- Hot reload aktif (sudah dikonfigurasi di `vite.config.js`)

---

**Edit file ini saja, semua perubahan akan otomatis terupdate! 🎉**

