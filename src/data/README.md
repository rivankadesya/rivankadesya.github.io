# Data Folder

Folder ini berisi semua data yang digunakan di website portfolio. Dengan memisahkan data dari komponen, Anda dapat dengan mudah mengupdate informasi tanpa perlu mengubah kode komponen.

## File-file di folder ini:

### 1. `portfolioData.js`
Berisi data portfolio/project yang ditampilkan di halaman portfolio.

**Cara menambahkan project baru:**
```javascript
{
  id: 4, // ID unik (increment dari ID terakhir)
  image: card4, // Import gambar dari assets
  category: "MOBILE APP", // Kategori project
  title: "Nama Project", // Nama project
  description: "Deskripsi project...", // Deskripsi project
  link: "#!", // Link ke project (bisa URL atau #!)
}
```

**Contoh:**
1. Import gambar di bagian atas file (jika menggunakan gambar baru)
2. Tambahkan object baru ke array `portfolioData`
3. Project akan otomatis muncul di halaman portfolio

### 2. `contactData.js`
Berisi informasi kontak yang ditampilkan di halaman contact.

**Cara mengupdate:**
- Edit `description` pada object yang sesuai
- Untuk menambah field kontak baru, tambahkan object baru ke array

### 3. `professionData.js`
Berisi data skill/services yang ditampilkan di halaman "What I do?".

**Cara mengupdate:**
- Edit `title` dan `description` pada object yang ada
- Untuk menambah skill baru, tambahkan object baru ke array

### 4. `introductionData.js`
Berisi:
- `introductionData`: Statistik (Experience, Projects Completed, Happy Clients)
- `personalInfo`: Informasi personal (nama, profesi, email, dll)

**Cara mengupdate:**
- Edit nilai pada object `personalInfo` untuk mengubah nama, profesi, email, dll
- Edit array `introductionData` untuk mengubah statistik

## Tips:
- Selalu gunakan ID yang unik untuk setiap item
- Pastikan import path gambar sudah benar
- Setelah mengubah data, website akan otomatis menampilkan perubahan (jika menggunakan hot reload)

