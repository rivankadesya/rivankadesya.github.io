import { useEffect, useRef, useState } from "react";
import person from "../../assets/images/person2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { profileInfo } from "../../data/siteConfig";

// Data profile diambil dari siteConfig.js
// Untuk mengubah, edit file: src/data/siteConfig.js
const Profile = () => {
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
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-24 z-10 rounded-2xl bg-gray-800 border border-gray-700 drop-shadow-2xl max-xl:mb-5 shadow-cyan-500/20 xl:p-12 lg:p-10 md:p-8 sm:p-6 p-4 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-[50px] scale-95"
      }`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-gray-800 border border-gray-700 rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-cyan-500/20">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8 text-white`}
          >
            {profileInfo.title}
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-300`}
          >
            <p className={``}>{profileInfo.description1}</p>
            <p className="mt-3">{profileInfo.description2}</p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href={profileInfo.projectsLink}
            >
              My Projects
            </a>
            {profileInfo.cvLink !== "#!" && (
              <a
                className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-gray-700 border border-gray-600 text-gray-200 duration-300 transition-all hover:text-picto-primary hover:bg-gray-600 ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
                href={profileInfo.cvLink}
                download
              >
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
