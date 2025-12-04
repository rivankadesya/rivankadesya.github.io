import { useEffect, useRef, useState } from "react";

/**
 * Hook untuk animasi elemen saat muncul di viewport saat scroll
 * Menggunakan Intersection Observer untuk performa yang lebih baik
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1, // Persentase elemen yang harus terlihat (0-1)
    rootMargin = "0px", // Margin untuk trigger
    triggerOnce = false, // Apakah animasi hanya trigger sekali
    animationClass = "scroll-fade-in-up", // Class animasi default
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && !hasAnimated) {
              setHasAnimated(true);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return {
    ref: elementRef,
    isVisible,
    className: isVisible ? animationClass : "",
  };
};

/**
 * Hook untuk parallax effect saat scroll
 */
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const elementTop = rect.top + scrollY;
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Hitung posisi relatif elemen terhadap viewport
      const scrolled = scrollY + windowHeight;
      const elementCenter = elementTop + elementHeight / 2;
      const distance = scrolled - elementCenter;

      // Apply parallax effect
      setOffset(distance * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return {
    ref: elementRef,
    style: {
      transform: `translateY(${offset}px)`,
      willChange: "transform",
    },
  };
};

