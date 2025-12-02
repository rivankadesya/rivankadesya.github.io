import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="max-w-84 p-3 md:p-3.75 lg:p-6 flex xs:not-odd:my-3 rounded-[10px] bg-gray-800 border border-gray-700 hover:scale-[1] duration-450 cursor-pointer hover:shadow-[0px_0px_37px_5px_rgba(0,217,255,0.2)] shadow-gray-900 max-sm:mx-auto"
      /* Scale effect:  */
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-10 md:h-12 aspect-square ${
          hover ? "bg-picto-primary" : "bg-gray-700 border border-gray-600"
        } center rounded-[4px]`}
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className={`text-lg md:text-xl ${
            hover ? "text-white" : "text-picto-primary"
          }`}
        />
      </div>
      <div className="ms-3.25">
        <p className="text-[12px] md:text-[14px] text-gray-400 font-normal">
          {item?.title}:
        </p>
        <p className="text-[14px] md:text-[16px] text-white font-medium">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;
