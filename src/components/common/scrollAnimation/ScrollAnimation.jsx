import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

/**
 * Komponen wrapper untuk animasi elemen saat muncul di viewport
 * 
 * @param {React.ReactNode} children - Konten yang akan di-animate
 * @param {string} animation - Jenis animasi: 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'scaleIn'
 * @param {number} threshold - Persentase elemen yang harus terlihat untuk trigger animasi (0-1)
 * @param {boolean} triggerOnce - Apakah animasi hanya trigger sekali
 * @param {string} className - Class tambahan
 */
const ScrollAnimation = ({
  children,
  animation = "fadeInUp",
  threshold = 0.1,
  triggerOnce = true,
  className = "",
}) => {
  const animationClasses = {
    fadeInUp: "scroll-fade-in-up",
    fadeInDown: "scroll-fade-in-down",
    fadeInLeft: "scroll-fade-in-left",
    fadeInRight: "scroll-fade-in-right",
    scaleIn: "scroll-scale-in",
  };

  const { ref, isVisible, className: animClass } = useScrollAnimation({
    threshold,
    triggerOnce,
    animationClass: animationClasses[animation] || animationClasses.fadeInUp,
  });

  return (
    <div
      ref={ref}
      className={`${animClass} ${className}`}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;

