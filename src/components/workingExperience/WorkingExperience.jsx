import { workingExperienceInfo } from "../../data/siteConfig";
import ExperienceCard from "./ExperienceCard";

// Data working experience diambil dari siteConfig.js
// Untuk mengubah deskripsi, edit: src/data/siteConfig.js
// Untuk menambah experience, edit array workingExperienceInfo.items di siteConfig.js

const WorkingExperience = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="experience"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
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
                <ExperienceCard
                  key={experience.id || index}
                  data={experience}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingExperience;

