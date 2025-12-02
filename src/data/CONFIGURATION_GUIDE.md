# 📋 Panduan Konfigurasi Portfolio Website

File ini menjelaskan **informasi apa saja yang perlu Anda sediakan** untuk mengisi template portfolio ini.

## 🎯 File Utama: `siteConfig.js`

**Lokasi:** `/src/data/siteConfig.js`

File ini adalah **satu-satunya file** yang perlu Anda edit untuk mengubah semua informasi di website. Semua data akan otomatis terupdate di seluruh website.

---

## 📝 Informasi yang Perlu Disiapkan

### 1. **Informasi Personal** ✅
- [ ] **Nama Lengkap** - Nama yang akan muncul di hero section
- [ ] **Nama Pendek** (opsional) - Untuk navbar/logo, jika tidak diisi akan pakai nama lengkap
- [ ] **Profesi/Jabatan** - Contoh: "Mobile React Native Developer", "UI/UX Designer", dll
- [ ] **Pengalaman Kerja** - Format: "X years of experience"
- [ ] **Deskripsi Singkat** - 1-2 kalimat tentang diri Anda
- [ ] **Email** - Untuk tombol "Say Hello!"
- [ ] **Foto Profil** - File gambar (PNG/JPG) untuk hero section

### 2. **Statistik** ✅
- [ ] **Experience** - Contoh: "2 Y.", "5 Y."
- [ ] **Projects Completed** - Contoh: "250+", "50+"
- [ ] **Happy Clients** - Contoh: "58", "100+"
- [ ] Statistik tambahan (opsional)

### 3. **Informasi Kontak** ✅
- [ ] **Alamat** - Alamat lengkap atau kota, negara
- [ ] **Email** - Email untuk kontak
- [ ] **Nomor Telepon** - Format: "+6281393914809"
- [ ] Kontak tambahan (opsional): Website, WhatsApp, dll

### 4. **Social Media Links** ✅
- [ ] **Facebook** - URL profil Facebook
- [ ] **Instagram** - URL profil Instagram
- [ ] **LinkedIn** - URL profil LinkedIn
- [ ] **GitHub** - URL profil GitHub
- [ ] **Twitter/X** - URL profil Twitter
- [ ] **Dribbble** (opsional)
- [ ] **Behance** (opsional)

### 5. **Portfolio/Projects** ✅
**Catatan:** Untuk menambahkan project, edit file `/src/data/portfolioData.js`

Untuk setiap project, siapkan:
- [ ] **Gambar Project** - File gambar (PNG/JPG) untuk thumbnail
- [ ] **Nama Project** - Judul project
- [ ] **Kategori** - Contoh: "MOBILE APP", "WEB APP", "UI/UX DESIGN"
- [ ] **Deskripsi** - 1-2 kalimat tentang project
- [ ] **Link Project** - URL ke project (GitHub, demo, dll) atau "#!" untuk placeholder

### 6. **Skills/Services** ✅
Untuk setiap skill/service, siapkan:
- [ ] **Judul Skill** - Contoh: "React Native Development"
- [ ] **Deskripsi Skill** - 1-2 kalimat menjelaskan skill tersebut

### 7. **Work Process** ✅
- [ ] **Deskripsi Section** - 1-2 paragraf tentang proses kerja Anda
- [ ] **Langkah-langkah** - Minimal 4 langkah:
  - Judul langkah (contoh: "Research", "Design", "Develop", "Launch")
  - Deskripsi singkat untuk setiap langkah

### 8. **Testimonials** ✅
Untuk setiap testimonial, siapkan:
- [ ] **Message** - Pesan singkat dari klien
- [ ] **Quote** - Kutipan lengkap testimonial
- [ ] **Nama Klien** - Nama pemberi testimonial
- [ ] **Jabatan & Perusahaan** - Contoh: "Managing Director, ABC Company"

### 9. **Blog Posts** (Opsional) ✅
**Catatan:** Untuk menambahkan blog post, edit file `/src/components/blog/Blog.jsx`

Untuk setiap blog post, siapkan:
- [ ] **Gambar Blog** - File gambar untuk thumbnail
- [ ] **Tanggal** - Format: "22 Oct, 2020"
- [ ] **Jumlah Komentar** - Contoh: 246
- [ ] **Judul Blog** - Judul artikel
- [ ] **Link Blog** - URL ke artikel lengkap

### 10. **Work Together Section** ✅
- [ ] **Judul** - Contoh: "Do you have a Project Idea? Let's discuss your project!"
- [ ] **Deskripsi** - 1-2 kalimat ajakan untuk bekerja sama
- [ ] **Teks Tombol** - Contoh: "Let's work Together"
- [ ] **Link Tombol** - Link ke contact form atau "#!" untuk scroll ke contact

### 11. **Profile Section** ✅
- [ ] **Judul** - Contoh: "I am Mobile React Native Developer"
- [ ] **Deskripsi 1** - Paragraf pertama
- [ ] **Deskripsi 2** - Paragraf kedua
- [ ] **Link "My Projects"** - Link ke portfolio section
- [ ] **Link "Download CV"** - Path ke file CV (PDF) atau "#!" untuk nonaktif
- [ ] **Foto Profil** - File gambar untuk profile card

### 12. **Happy Clients** ✅
- [ ] **Deskripsi** - 1 kalimat tentang klien yang pernah bekerja sama
- [ ] **Logo Perusahaan** (opsional) - File logo perusahaan klien

---

## 📁 Struktur File yang Perlu Disiapkan

### Folder: `/src/assets/images/`
```
src/assets/images/
├── person.png              # Foto profil untuk hero section
├── person2.png            # Foto profil untuk profile card
└── portfolio-images/
    ├── card-1.png         # Gambar project 1
    ├── card-2.png         # Gambar project 2
    ├── card-3.png         # Gambar project 3
    └── ...                # Gambar project lainnya
```

### File CV (opsional)
```
public/
└── cv.pdf                 # File CV untuk download
```

---

## 🚀 Cara Menggunakan

### Langkah 1: Buka File Konfigurasi
Buka file `/src/data/siteConfig.js` di editor Anda.

### Langkah 2: Isi Informasi
Isi semua informasi sesuai dengan data Anda. Setiap section sudah ada komentar penjelasan.

### Langkah 3: Simpan File
Simpan file (Ctrl+S / Cmd+S). Jika hot reload aktif, website akan otomatis terupdate.

### Langkah 4: Tambahkan Project (jika perlu)
Edit file `/src/data/portfolioData.js` untuk menambahkan project baru.

### Langkah 5: Tambahkan Blog Post (jika perlu)
Edit file `/src/components/blog/Blog.jsx` untuk menambahkan blog post baru.

---

## 📌 Tips

1. **Gunakan Format yang Konsisten**
   - Untuk tanggal: "22 Oct, 2020"
   - Untuk nomor telepon: "+6281393914809"
   - Untuk URL: selalu gunakan "https://"

2. **Ukuran Gambar**
   - Foto profil: disarankan 500x600px atau lebih besar
   - Gambar project: disarankan 800x600px atau lebih besar
   - Format: PNG atau JPG

3. **Deskripsi yang Baik**
   - Gunakan 1-2 kalimat yang jelas dan menarik
   - Hindari kalimat terlalu panjang
   - Fokus pada value yang diberikan

4. **Testimonial**
   - Gunakan testimonial yang autentik
   - Sertakan nama, jabatan, dan perusahaan
   - Pastikan testimonial relevan dengan profesi Anda

5. **Social Media**
   - Hanya tambahkan platform yang aktif Anda gunakan
   - Pastikan URL valid dan dapat diakses

---

## ❓ FAQ

**Q: Bagaimana cara menambahkan project baru?**
A: Edit file `/src/data/portfolioData.js` dan tambahkan object baru ke array `portfolioData`.

**Q: Bagaimana cara mengubah warna tema?**
A: Edit file `/index.css` untuk mengubah warna tema.

**Q: Bagaimana cara menambahkan section baru?**
A: Anda perlu mengedit komponen React yang sesuai. File `siteConfig.js` hanya untuk data yang sudah ada.

**Q: Apakah semua field wajib diisi?**
A: Tidak, field yang tidak digunakan bisa dikosongkan atau diisi dengan `null` atau `#!`.

**Q: Bagaimana cara menonaktifkan section tertentu?**
A: Edit file komponen yang sesuai atau komentari import di `Home.jsx`.

---

## 📞 Butuh Bantuan?

Jika ada pertanyaan atau butuh bantuan, silakan:
1. Baca komentar di file `siteConfig.js`
2. Periksa file README.md di folder `data/`
3. Lihat contoh data yang sudah ada di file-file data lainnya

---

**Selamat mengisi portfolio website Anda! 🎉**

