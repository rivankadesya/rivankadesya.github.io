import { useEffect } from "react";
import { useSmoothScroll } from "../../../hooks/useSmoothScroll";
import "./SmoothScroll.css";

/**
 * Komponen untuk mengaktifkan smooth scroll dengan efek lokomotif
 * Menggunakan physics-based animation untuk efek yang natural
 */
const SmoothScroll = ({ children, enabled = true }) => {
  // Aktifkan smooth scroll dengan konfigurasi lokomotif
  useSmoothScroll({
    damping: 0.08, // Redaman rendah untuk efek momentum yang lebih panjang
    stiffness: 0.12, // Kekakuan sedang untuk responsif tapi halus
    mass: 0.8, // Massa ringan untuk percepatan yang lebih cepat
    enabled: enabled,
  });

  useEffect(() => {
    // Tambahkan class untuk styling
    document.documentElement.classList.add("smooth-scroll-enabled");
    
    return () => {
      document.documentElement.classList.remove("smooth-scroll-enabled");
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;

