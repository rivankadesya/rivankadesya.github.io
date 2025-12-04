import WorkSteps from "./WorkSteps";
import { workProcess } from "../../data/siteConfig";

// Data work process diambil dari siteConfig.js
// Untuk mengubah work process, edit file: src/data/siteConfig.js
const workStepData = workProcess.steps;

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 xl:py-20 max-xxl:px-6"
      id="work-process"
    >
      <div className="lg:pe-8 xl:pe-12 max-xs:mb-3 max-xl:mb-8">
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
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-gray-800 border border-gray-700 aspect-auto sm:max-w-78 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
