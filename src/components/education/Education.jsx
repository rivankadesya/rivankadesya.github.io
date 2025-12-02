import { educationInfo } from "../../data/siteConfig";
import EducationCard from "./EducationCard";

// Data education diambil dari siteConfig.js
// Untuk mengubah deskripsi, edit: src/data/siteConfig.js
// Untuk menambah education, edit array educationInfo.items di siteConfig.js

const Education = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="education"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
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

