import { educationInfo } from "../../data/siteConfig";
import EducationCard from "./EducationCard";

// Data education diambil dari siteConfig.js
// Untuk mengubah deskripsi, edit: src/data/siteConfig.js
// Untuk menambah education, edit array educationInfo.items di siteConfig.js

const Education = () => {
  return (
    <div
      className="content mt-8 md:mt-12 xl:mt-16 mb-8 md:mb-12 px-4 sm:px-6 md:px-8 lg:px-12 max-xxl:px-6"
      id="education"
    >
      <div className="xl:mb-10 mb-5">
        <div className="px-2 sm:px-4 text-center mx-auto max-w-144.25">
          <p className="section-title pb-6">Education</p>
          <p className="text-xs xs:text-[16px] md:text-lg text-gray-300">
            {educationInfo.description}
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center w-full">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-full">
          {educationInfo.items?.map((education, index) => (
            <EducationCard key={education.id || index} data={education} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

