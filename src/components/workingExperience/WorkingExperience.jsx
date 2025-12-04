import { useEffect, useRef, useState } from "react";
import { workingExperienceInfo } from "../../data/siteConfig";
import ExperienceCard from "./ExperienceCard";

// Data working experience diambil dari siteConfig.js
// Untuk mengubah deskripsi, edit: src/data/siteConfig.js
// Untuk menambah experience, edit array workingExperienceInfo.items di siteConfig.js

const WorkingExperience = () => {
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
      className={`content mt-8 md:mt-12 xl:mt-16 mb-8 md:mb-12 px-4 sm:px-6 md:px-8 lg:px-12 max-xxl:px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
      }`}
      id="experience"
    >
      <div className="xl:mb-10 mb-5">
        <div className="px-2 sm:px-4 text-center mx-auto max-w-144.25">
          <p className="section-title pb-6">Working Experience</p>
          <p className="text-xs xs:text-[16px] md:text-lg text-gray-300">
            {workingExperienceInfo.description}
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center w-full">
        <div className="w-full max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-picto-primary via-picto-primary/50 to-picto-primary transform md:-translate-x-1/2"></div>

            {/* Experience items */}
            <div className="space-y-8 md:space-y-12">
              {workingExperienceInfo.items?.map((experience, index) => (
                <div
                  key={experience.id || index}
                  className={`transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-[-30px] scale-95"
                  }`}
                  style={{ transitionDelay: `${0.3 + index * 0.2}s` }}
                >
                  <ExperienceCard data={experience} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingExperience;
