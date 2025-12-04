import { useEffect, useRef } from "react";

/**
 * Custom hook untuk smooth scroll dengan efek lokomotif (momentum-based)
 * Memberikan efek scroll yang halus dan natural seperti lokomotif
 * Menggunakan CSS scroll-behavior dan JavaScript untuk efek momentum
 */
export const useSmoothScroll = (options = {}) => {
  const {
    damping = 0.08, // Faktor redaman (0-1), semakin kecil semakin halus
    stiffness = 0.12, // Faktor kekakuan (0-1), semakin besar semakin responsif
    mass = 0.8, // Massa virtual untuk efek momentum
    enabled = true,
    smoothness = 0.15, // Faktor smoothness untuk easing
  } = options;

  const rafId = useRef(null);
  const isScrolling = useRef(false);
  const lastScrollY = useRef(0);
  const scrollVelocity = useRef(0);
  const momentumTimeout = useRef(null);

  useEffect(() => {
    if (!enabled) {
      // Disable smooth scroll
      document.documentElement.style.scrollBehavior = "auto";
      return;
    }

    // Enable CSS smooth scroll sebagai fallback
    document.documentElement.style.scrollBehavior = "smooth";

    let lastTime = performance.now();
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const currentTime = performance.now();
      const currentScrollTop = window.scrollY;
      const deltaTime = currentTime - lastTime;
      const deltaScroll = currentScrollTop - lastScrollTop;

      // Hitung velocity
      if (deltaTime > 0) {
        scrollVelocity.current = deltaScroll / deltaTime;
      }

      lastScrollTop = currentScrollTop;
      lastTime = currentTime;

      // Reset momentum timeout
      if (momentumTimeout.current) {
        clearTimeout(momentumTimeout.current);
      }

      // Set flag scrolling
      isScrolling.current = true;
      document.documentElement.classList.add("scrolling");

      // Clear scrolling flag setelah scroll berhenti
      momentumTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        scrollVelocity.current = 0;
        document.documentElement.classList.remove("scrolling");
      }, 150);
    };

    // Handle wheel untuk momentum scroll
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) < 5) return; // Ignore small movements

      // Tambahkan momentum effect
      const momentum = e.deltaY * smoothness;
      scrollVelocity.current = momentum;

      // Trigger scroll dengan momentum
      if (!isScrolling.current) {
        isScrolling.current = true;
        document.documentElement.classList.add("scrolling");
      }

      // Clear momentum setelah beberapa saat
      if (momentumTimeout.current) {
        clearTimeout(momentumTimeout.current);
      }

      momentumTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        scrollVelocity.current = 0;
        document.documentElement.classList.remove("scrolling");
      }, 200);
    };

    // Smooth scroll untuk anchor links (hanya jika bukan react-scroll)
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      // Skip jika menggunakan react-scroll
      if (target.hasAttribute("data-scroll") || target.closest("[data-scroll]")) {
        return;
      }

      const href = target.getAttribute("href");
      if (href === "#" || href === "") return;

      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      e.preventDefault();

      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - 100;

      // Smooth scroll dengan easing
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = Math.min(Math.abs(distance) * 0.5, 1000);
      let startTime = null;

      const easeInOutCubic = (t) => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo({
          top: startPosition + distance * easeInOutCubic(progress),
          behavior: "auto",
        });

        if (progress < 1) {
          rafId.current = requestAnimationFrame(animateScroll);
        }
      };

      rafId.current = requestAnimationFrame(animateScroll);
    };

    // Initialize
    lastScrollY.current = window.scrollY;
    lastScrollTop = window.scrollY;

    // Event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      document.removeEventListener("click", handleAnchorClick);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      if (momentumTimeout.current) {
        clearTimeout(momentumTimeout.current);
      }
      document.documentElement.style.scrollBehavior = "auto";
      document.documentElement.classList.remove("scrolling");
    };
  }, [damping, stiffness, mass, enabled, smoothness]);
};

