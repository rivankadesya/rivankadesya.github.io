import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppStoreIos,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";

const Projects = ({ data }) => {
  // Cek apakah ada link App Store atau Play Store
  const hasAppStore = data?.appStoreLink && data?.appStoreLink !== "#!";
  const hasPlayStore = data?.playStoreLink && data?.playStoreLink !== "#!";
  const hasAnyStore = hasAppStore || hasPlayStore;

  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl hover:shadow-cyan-500/20 duration-300 transition-all shadow-gray-800 border border-gray-700 bg-gray-800">
      <div className="w-full h-[220px] overflow-hidden flex items-center justify-center bg-gray-900 rounded-t-lg">
        <img
          src={data?.image}
          alt={`${data?.title} image`}
          className="rounded-t-lg object-contain w-full h-full"
        />
      </div>
      <div className="p-4 xs:p-8">
        <p className="text-picto-primary text-xs font-medium">
          {data?.category}
        </p>
        <p className="text-white text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-300 text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>

        {/* App Store & Play Store Buttons atau Keterangan Project Internal */}
        {hasAnyStore ? (
          <div className={`flex gap-3 mt-5 flex-wrap justify-center`}>
            {/* App Store Button */}
            {hasAppStore && (
              <a
                href={data.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:opacity-80 transition-opacity duration-300"
                aria-label="Download on App Store"
              >
                <FontAwesomeIcon icon={faAppStoreIos} className="text-xl" />
                <div className="flex flex-col">
                  <span className="text-[10px] leading-tight">
                    Download on the
                  </span>
                  <span className="text-sm font-semibold leading-tight">
                    App Store
                  </span>
                </div>
              </a>
            )}

            {/* Play Store Button */}
            {hasPlayStore && (
              <a
                href={data.playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:opacity-80 transition-opacity duration-300"
                aria-label="Get it on Google Play"
              >
                <FontAwesomeIcon icon={faGooglePlay} className="text-xl" />
                <div className="flex flex-col">
                  <span className="text-[10px] leading-tight">GET IT ON</span>
                  <span className="text-sm font-semibold leading-tight">
                    Google Play
                  </span>
                </div>
              </a>
            )}
          </div>
        ) : (
          <div className="mt-5 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="text-sm font-medium">
                Internal Project & Confidential
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
