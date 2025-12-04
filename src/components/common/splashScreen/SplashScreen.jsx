import { useState, useEffect } from "react";
import logo from "../../../assets/logo.png";
import "./SplashScreen.css";

// Kalimat motivasi yang akan ditampilkan selama loading
const loadingMessages = [
  "Prepare for amazing",
  "Loading awesome content",
  "Almost there...",
  "Crafting perfection",
  "Building something great",
  "Just a moment",
  "Preparing your experience",
  "Loading magic",
  "Setting things up",
  "Almost ready",
];

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [messageKey, setMessageKey] = useState(0);

  useEffect(() => {
    // Simulasi loading dari 0 sampai 100
    const duration = 4500; // 4.5 detik total (diperlama)
    const steps = 100;
    const intervalTime = duration / steps;
    let currentStep = 0;

    // Rotate messages setiap 2 detik (lebih lambat agar bisa dibaca)
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        const next = (prev + 1) % loadingMessages.length;
        setMessageKey((k) => k + 1); // Force re-render untuk animasi
        return next;
      });
    }, 2000);

    const progressInterval = setInterval(() => {
      currentStep += 1;
      const newProgress = Math.min(currentStep, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(progressInterval);
        clearInterval(messageInterval);
        // Mulai fade out
        setIsFadingOut(true);
        // Tunggu animasi fade out selesai sebelum menghilangkan komponen
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }
    }, intervalTime);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
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

        {/* Loading Message */}
        <div className="loading-message-container">
          <div
            key={messageKey}
            className="loading-message"
            style={{ width: 400 }}
          >
            {loadingMessages[currentMessage]}
          </div>
        </div>

        {/* Progress Container */}
        <div className="progress-container">
          {/* Progress Bar */}
          <div className="progress-bar-wrapper">
            <div className="progress-bar" style={{ width: `${progress}%` }}>
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
