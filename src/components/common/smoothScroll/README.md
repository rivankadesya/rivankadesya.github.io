# 🚂 Smooth Scroll dengan Efek Lokomotif

Sistem smooth scroll yang memberikan efek momentum seperti lokomotif dengan animasi yang halus dan natural.

## ✨ Fitur

- ✅ **Smooth Scroll dengan Momentum**: Efek scroll yang halus dengan momentum seperti lokomotif
- ✅ **Animasi Scroll**: Elemen muncul dengan animasi saat scroll ke viewport
- ✅ **Parallax Effect**: Efek parallax untuk elemen tertentu
- ✅ **Performance Optimized**: Menggunakan Intersection Observer dan requestAnimationFrame
- ✅ **Accessible**: Menghormati prefers-reduced-motion
- ✅ **Touch Friendly**: Optimized untuk touch devices

## 🚀 Penggunaan

### 1. Smooth Scroll (Sudah Terintegrasi)

Smooth scroll sudah otomatis aktif di seluruh aplikasi melalui `Main.jsx`. Tidak perlu konfigurasi tambahan.

### 2. Scroll Animation untuk Elemen

Wrap elemen yang ingin di-animate saat muncul di viewport:

```jsx
import ScrollAnimation from "../components/common/scrollAnimation/ScrollAnimation";

const MyComponent = () => {
  return (
    <ScrollAnimation animation="fadeInUp" triggerOnce={true}>
      <div>
        <h1>Ini akan muncul dengan animasi fade in up</h1>
      </div>
    </ScrollAnimation>
  );
};
```

### 3. Jenis Animasi yang Tersedia

- `fadeInUp` - Fade in dari bawah ke atas
- `fadeInDown` - Fade in dari atas ke bawah
- `fadeInLeft` - Fade in dari kanan ke kiri
- `fadeInRight` - Fade in dari kiri ke kanan
- `scaleIn` - Scale in dengan fade

### 4. Menggunakan Hook Langsung

```jsx
import { useScrollAnimation, useParallax } from "../../hooks/useScrollAnimation";

const MyComponent = () => {
  // Scroll animation
  const { ref, isVisible, className } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
    animationClass: "scroll-fade-in-up",
  });

  // Parallax effect
  const { ref: parallaxRef, style } = useParallax(0.5);

  return (
    <div ref={ref} className={className}>
      <div ref={parallaxRef} style={style}>
        Konten dengan parallax
      </div>
    </div>
  );
};
```

## ⚙️ Konfigurasi

### Smooth Scroll Options

Di `SmoothScroll.jsx`, Anda bisa mengubah konfigurasi:

```jsx
useSmoothScroll({
  damping: 0.08,      // Redaman (0-1), semakin kecil semakin halus
  stiffness: 0.12,    // Kekakuan (0-1), semakin besar semakin responsif
  mass: 0.8,          // Massa virtual untuk momentum
  enabled: true,       // Enable/disable smooth scroll
  smoothness: 0.15,   // Faktor smoothness untuk easing
});
```

### Scroll Animation Options

```jsx
useScrollAnimation({
  threshold: 0.1,           // Persentase elemen yang harus terlihat (0-1)
  rootMargin: "0px",       // Margin untuk trigger
  triggerOnce: false,      // Apakah animasi hanya trigger sekali
  animationClass: "scroll-fade-in-up", // Class animasi
});
```

## 🎨 Custom Styling

Anda bisa menambahkan custom animation di `SmoothScroll.css`:

```css
@keyframes myCustomAnimation {
  from {
    opacity: 0;
    transform: translateY(50px) rotate(5deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }
}

.scroll-my-custom {
  animation: myCustomAnimation 0.8s ease-out forwards;
  opacity: 0;
}
```

## 📱 Responsive & Accessibility

- ✅ Otomatis disable smooth scroll untuk user dengan `prefers-reduced-motion`
- ✅ Optimized untuk touch devices
- ✅ Performance optimized dengan will-change dan transform

## 🔧 Troubleshooting

### Smooth scroll tidak bekerja?
- Pastikan `SmoothScroll` component sudah wrap di `Main.jsx`
- Cek console untuk error messages
- Pastikan tidak ada CSS yang override `scroll-behavior`

### Animasi tidak muncul?
- Pastikan elemen cukup tinggi untuk trigger Intersection Observer
- Cek `threshold` value (coba kurangi jika elemen kecil)
- Pastikan `triggerOnce` sesuai kebutuhan

## 📚 Contoh Lengkap

Lihat contoh penggunaan di komponen-komponen yang sudah menggunakan `ScrollAnimation`.

