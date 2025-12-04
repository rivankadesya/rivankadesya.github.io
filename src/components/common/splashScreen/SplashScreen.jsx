import { useState, useEffect } from "react";
import logo from "../../../assets/logo.png";
import "./SplashScreen.css";

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulasi loading dari 0 sampai 100
    const duration = 2000; // 2 detik total
    const steps = 100;
    const intervalTime = duration / steps;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep += 1;
      const newProgress = Math.min(currentStep, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(progressInterval);
        // Mulai fade out
        setIsFadingOut(true);
        // Tunggu animasi fade out selesai sebelum menghilangkan komponen
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }
    }, intervalTime);

    return () => clearInterval(progressInterval);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`splash-screen ${isFadingOut ? "fade-out" : ""}`}>
      <div className="splash-content">
        {/* Logo dengan glow effect */}
        <div className="splash-logo">
          <div className="logo-glow">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
        </div>

        {/* Progress Container */}
        <div className="progress-container">
          {/* Progress Bar */}
          <div className="progress-bar-wrapper">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            >
              <div className="progress-glow"></div>
            </div>
          </div>

          {/* Progress Text */}
          <div className="progress-text">{progress}%</div>

          {/* Loading Dots */}
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

