# Panduan Deploy ke GitHub Pages

Panduan lengkap untuk deploy portfolio website ke GitHub Pages.

## 📋 Prerequisites

1. **GitHub Account** - Pastikan Anda sudah punya akun GitHub
2. **Git** - Pastikan Git sudah terinstall di komputer Anda
3. **Node.js & npm** - Sudah terinstall (untuk build project)

## 🚀 Langkah-langkah Deploy

### 1. Persiapan Repository GitHub

#### Opsi A: Repository Baru
```bash
# Buat repository baru di GitHub (via web)
# Jangan centang "Initialize with README"
```

#### Opsi B: Repository Sudah Ada
```bash
# Jika repository sudah ada, pastikan sudah di-initialize
git init
git remote add origin https://github.com/username/repo-name.git
```

### 2. Konfigurasi Base Path

Buat file `.env` di root project:

**Untuk GitHub Pages dengan repo name** (misal: `username.github.io/portfolio`):
```env
VITE_REPO_NAME=portfolio
```

**Untuk custom domain atau root repo** (misal: `username.github.io`):
```env
VITE_REPO_NAME=
```
atau buat file `.env` kosong.

### 3. Install Dependencies

```bash
# Install semua dependencies termasuk gh-pages
npm install

# Install gh-pages jika belum ada
npm install --save-dev gh-pages
```

### 4. Build Project

```bash
# Build project untuk production
npm run build
```

Ini akan membuat folder `dist/` yang berisi file-file siap deploy.

### 5. Deploy ke GitHub Pages

#### Metode 1: Menggunakan Script Deploy (Recommended)
```bash
npm run deploy
```

Script ini akan:
- Build project (`vite build`)
- Deploy ke branch `gh-pages` di GitHub
- Website akan tersedia di: `https://username.github.io/repo-name/`

#### Metode 2: Manual Deploy
```bash
# Build project
npm run build

# Install gh-pages jika belum
npm install --save-dev gh-pages

# Deploy manual
npx gh-pages -d dist
```

### 6. Konfigurasi GitHub Pages

1. Buka repository di GitHub
2. Pergi ke **Settings** → **Pages**
3. Di bagian **Source**, pilih:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Klik **Save**

### 7. Akses Website

Website akan tersedia di:
- **Dengan repo name**: `https://username.github.io/repo-name/`
- **Root repo**: `https://username.github.io/`
- **Custom domain**: Sesuai domain yang dikonfigurasi

**Catatan**: Butuh beberapa menit (5-10 menit) untuk website muncul setelah deploy pertama kali.

## 🔄 Update Website

Setelah melakukan perubahan, deploy ulang:

```bash
npm run deploy
```

Atau:

```bash
npm run build
npx gh-pages -d dist
```

## ⚙️ Konfigurasi Custom Domain (Opsional)

1. Buat file `CNAME` di folder `public/` dengan isi:
   ```
   yourdomain.com
   ```

2. Deploy ulang:
   ```bash
   npm run deploy
   ```

3. Konfigurasi DNS di provider domain Anda:
   - **Type**: CNAME
   - **Name**: www (atau @)
   - **Value**: username.github.io

## 🐛 Troubleshooting

### Problem: Assets tidak muncul
**Solusi**: Pastikan `VITE_REPO_NAME` di `.env` sesuai dengan nama repo GitHub Anda.

### Problem: 404 Error
**Solusi**: 
- Pastikan base path di `vite.config.js` sudah benar
- Pastikan GitHub Pages sudah dikonfigurasi dengan benar
- Tunggu beberapa menit untuk cache GitHub Pages update

### Problem: Deploy gagal
**Solusi**:
- Pastikan sudah login ke GitHub via Git
- Pastikan repository sudah dibuat
- Cek apakah branch `gh-pages` sudah ada

### Problem: Website kosong
**Solusi**:
- Pastikan build berhasil (`npm run build`)
- Cek folder `dist/` apakah berisi file
- Pastikan file `index.html` ada di `dist/`

## 📝 Checklist Sebelum Deploy

- [ ] File `.env` sudah dikonfigurasi dengan benar
- [ ] Semua perubahan sudah di-commit
- [ ] Project sudah di-build (`npm run build`)
- [ ] Folder `dist/` berisi file yang benar
- [ ] GitHub repository sudah dibuat
- [ ] Git remote sudah dikonfigurasi

## 🎉 Selesai!

Setelah deploy berhasil, website portfolio Anda akan live di GitHub Pages!

---

**Tips**: 
- Gunakan `npm run deploy` untuk deploy cepat
- Selalu test build lokal dengan `npm run preview` sebelum deploy
- Simpan file `.env` di `.gitignore` jika berisi informasi sensitif

