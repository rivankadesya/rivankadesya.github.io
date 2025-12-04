import Projects from "./Projects";
import { portfolioData } from "../../data/portfolioData";
import { portfolioInfo } from "../../data/siteConfig";

// Data portfolio diambil dari siteConfig.js dan portfolioData.js
// Untuk mengubah deskripsi, edit: src/data/siteConfig.js
// Untuk menambah project, edit: src/data/portfolioData.js
const Portfolio = () => {
  return (
    <div
      className="content mt-8 md:mt-12 xl:mt-16 mb-8 md:mb-12 px-4 sm:px-6 md:px-8 lg:px-12 max-xxl:px-6"
      id="portfolio"
    >
      <div className="xl:mb-10 mb-5">
        <div className="px-2 sm:px-4 text-center mx-auto max-w-144.25">
          <p className="font-bold text-[60px] max-sm:text-[30px] pt-6 text-white">
            Portfolio
          </p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-300">
            {portfolioInfo.description}
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {portfolioData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        {portfolioInfo.moreProjectsLink !== "#!" && (
          <a
            href={portfolioInfo.moreProjectsLink}
            className="btn btn-primary py-3 px-6 mt-8 text-center text-[16px] font-semibold"
          >
            More Project
          </a>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
