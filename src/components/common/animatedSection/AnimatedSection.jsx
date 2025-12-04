import { useEffect, useRef, useState } from "react";

/**
 * Komponen wrapper untuk animasi section saat muncul di viewport
 *
 * @param {React.ReactNode} children - Konten yang akan di-animate
 * @param {string} animation - Jenis animasi: 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'scaleIn'
 * @param {number} delay - Delay animasi dalam ms
 * @param {string} className - Class tambahan
 */
const AnimatedSection = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  const animationClasses = {
    fadeInUp: isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]",
    fadeInDown: isVisible
      ? "animate-fade-in-down"
      : "opacity-0 translate-y-[-30px]",
    fadeInLeft: isVisible
      ? "animate-fade-in-left"
      : "opacity-0 translate-x-[-50px]",
    fadeInRight: isVisible
      ? "animate-fade-in-right"
      : "opacity-0 translate-x-[50px]",
    scaleIn: isVisible ? "animate-scale-in" : "opacity-0 scale-90",
  };

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
