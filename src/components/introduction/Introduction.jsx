import { useEffect, useRef, useState } from "react";
import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { introductionData, personalInfo } from "../../data/introductionData";
import { contactInfo } from "../../data/siteConfig";

// Helper function untuk generate WhatsApp link
const getWhatsAppLink = (
  message = "Hello! I'd like to discuss a project with you."
) => {
  const phoneContact = contactInfo.find((contact) => contact.type === "phone");
  if (!phoneContact) return "#!";

  // Format nomor: hapus + dan spasi, hanya angka
  const phoneNumber = phoneContact.value.replace(/[\s+]/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
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
      className={`flex max-lg:flex-col-reverse sm:justify-between pt-8 lg:pt-16 lg:mb-12 max-xl:gap-2 px-4 sm:px-6 md:px-8 lg:px-12 max-xxl:px-6 animate-on-scroll ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div
          ref={textRef}
          className={`pt-6 lg:pt-8 me-0 lg:me-16 w-full lg:w-auto transition-all duration-500 ${
            isVisible
              ? "animate-slide-in-left"
              : "opacity-0 translate-x-[-50px]"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full text-white">
            <span
              className={`inline-block ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              Hello, I'm
            </span>
            <span
              className={`text-nowrap shrink-0 inline-block w-full text-picto-primary name-font ${
                isVisible ? "animate-scale-in" : "opacity-0 scale-0"
              }`}
              style={{ transitionDelay: "0.5s" }}
            >
              {personalInfo.name}
            </span>
          </p>
          <p
            className={`text-xs xxs:text-lg lg:text-[18px] my-6 text-gray-300 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.7s" }}
          >
            I'm a{" "}
            <span className="bg-highlight">{personalInfo.profession}</span> with{" "}
            {personalInfo.experience}. {personalInfo.description}
          </p>
          <p
            className={`text-center lg:text-start ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[20px]"
            }`}
            style={{ transitionDelay: "0.9s" }}
          >
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white hover:scale-105 transition-transform duration-300"
              href={getWhatsAppLink("Hello! I'd like to connect with you.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div
          className={`mx-auto lg:mx-0 relative ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
          style={{ transitionDelay: "1.1s" }}
        >
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {introductionData.map((item, index) => (
              <div
                key={item.id}
                className={`${
                  isVisible ? "animate-scale-in" : "opacity-0 scale-0"
                }`}
                style={{ transitionDelay: `${1.3 + index * 0.1}s` }}
              >
                <InformationSummary item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        ref={imageRef}
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative ${
          isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-[50px]"
        }`}
        style={{ transitionDelay: "0.4s" }}
      >
        <img
          className={`shadow-2xl shadow-cyan-500/30 w-full h-full absolute bottom-0 object-cover bg-gray-800 border border-gray-700 rounded-3xl transition-all duration-700 hover:scale-105 hover:shadow-cyan-500/50`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
