import { useEffect, useState } from "react";

const Roles = ({ role }) => {
  const [mouseHover, setMouseHover] = useState(false);
  useEffect(() => {
    window.addEventListener("mouseenter", (e) => {});
  }, []);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="p-4 xs:p-8 bg-gray-800 border border-gray-700 hover:shadow-xl hover:shadow-cyan-500/20 h-auto shadow-gray-900 ease-out duration-800 rounded-lg my-6 flex relative overflow-hidden"
    >
      <p
        className={`bg-picto-primary absolute start-0 w-0 h-full mt-[-16px] xs:mt-[-32px] ${
          mouseHover && "duration-200 w-[5px]"
        }`}
      />
      <div>
        <p className="text-xl sm:text-2xl font-semibold text-white pb-4">
          {role?.title}
        </p>
        <p className="text-[13px] sm:text-[16px] font-normal text-gray-300">
          {role?.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;
