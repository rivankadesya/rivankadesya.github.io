import Projects from "./Projects";
import { portfolioData } from "../../data/portfolioData";
import { portfolioInfo } from "../../data/siteConfig";

// Data portfolio diambil dari siteConfig.js dan portfolioData.js
// Untuk mengubah deskripsi, edit: src/data/siteConfig.js
// Untuk menambah project, edit: src/data/portfolioData.js
const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
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
            className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
          >
            More Project
          </a>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
