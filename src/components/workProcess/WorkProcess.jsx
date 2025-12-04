import { useEffect, useRef, useState } from "react";
import WorkSteps from "./WorkSteps";
import { workProcess } from "../../data/siteConfig";

// Data work process diambil dari siteConfig.js
// Untuk mengubah work process, edit file: src/data/siteConfig.js
const workStepData = workProcess.steps;

const WorkProcess = () => {
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
      className={`content grid xl:grid-cols-2 xl:items-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 xl:py-20 max-xxl:px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
      }`}
      id="work-process"
    >
      <div
        className={`lg:pe-8 xl:pe-12 max-xs:mb-3 max-xl:mb-8 transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-50px]"
        }`}
        style={{ transitionDelay: "0.2s" }}
      >
        <p className="section-title max-xl:text-center">Work Process</p>
        {workProcess.description.map((paragraph, index) => (
          <p
            key={index}
            className={`mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-300 ${
              index === 0 ? "mb-4" : ""
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data, index) => {
          return (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-[50px] scale-95"
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
            >
              <WorkSteps
                data={data}
                style={`max-xs:mt-3 p-4 sm:p-8 bg-gray-800 border border-gray-700 aspect-auto sm:max-w-78 ${
                  index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
