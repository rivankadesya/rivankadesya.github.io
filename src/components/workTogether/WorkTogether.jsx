import { useEffect, useRef, useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { workTogether, contactInfo } from "../../data/siteConfig";

// Helper function untuk generate WhatsApp link
const getWhatsAppLink = (
  message = "Hello! I have a project idea I'd like to discuss with you."
) => {
  const phoneContact = contactInfo.find((contact) => contact.type === "phone");
  if (!phoneContact) return "#!";

  // Format nomor: hapus + dan spasi, hanya angka
  const phoneNumber = phoneContact.value.replace(/[\s+]/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

// Data work together diambil dari siteConfig.js
// Untuk mengubah, edit file: src/data/siteConfig.js
const WorkTogether = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`py-12 md:py-16 max-w-169 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-[50px] scale-95"
      }`}
    >
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          {workTogether.title}
        </p>
        <p className="text-gray-300 text-xs sm:text-lg font-normal text-center pb-8">
          {workTogether.description}
        </p>
        <a
          href={getWhatsAppLink(
            "Hello! I have a project idea I'd like to discuss with you."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px] transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-picto-primary/50 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[20px]"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          {workTogether.buttonText}
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
