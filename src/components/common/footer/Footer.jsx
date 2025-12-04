import logo from "../../../assets/logo.png";
import { personalInfo, socialMedia } from "../../../data/siteConfig";
import SocialMedia from "../socialMedia/SocialMedia";
import { Link } from "react-scroll";

// Data footer diambil dari siteConfig.js
// Untuk mengubah, edit file: src/data/siteConfig.js
const copyrightYear = new Date().getFullYear();
const displayName = personalInfo.shortName || personalInfo.fullName;

const Footer = () => {
  return (
    <footer className="relative pt-12 pb-8 md:pt-16 md:pb-12 overflow-hidden">
      {/* Background dengan gradient dan efek */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-picto-primary/50 to-transparent"></div>
        <div className="absolute top-10 left-1/4 w-1 h-1 bg-picto-primary rounded-full opacity-50"></div>
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-picto-primary rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-picto-primary rounded-full opacity-40"></div>
      </div>

      <div className="relative content px-4 sm:px-6 md:px-8 lg:px-12 max-2xl:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Link
              to="introduction"
              smooth={true}
              duration={900}
              className="inline-flex items-center mb-4 group"
            >
              <div className="relative">
                <img
                  src={logo}
                  className="h-10 sm:h-12 rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  alt="logo"
                />
                <div className="absolute inset-0 rounded-2xl bg-picto-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-2xl sm:text-3xl my-auto ms-3 font-bold text-white group-hover:text-picto-primary transition-colors duration-300 name-font">
                {displayName}
              </p>
            </Link>
            <p className="text-gray-400 text-sm mt-4 max-w-xs mx-auto md:mx-0">
              {personalInfo.profession}
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Building exceptional mobile experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={900}
                  className="text-gray-400 hover:text-picto-primary transition-colors duration-300 text-sm inline-block group"
                >
                  <span className="relative">
                    Portfolio
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-picto-primary group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={900}
                  className="text-gray-400 hover:text-picto-primary transition-colors duration-300 text-sm inline-block group"
                >
                  <span className="relative">
                    Services
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-picto-primary group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="education"
                  smooth={true}
                  duration={900}
                  className="text-gray-400 hover:text-picto-primary transition-colors duration-300 text-sm inline-block group"
                >
                  <span className="relative">
                    Education
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-picto-primary group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="work-process"
                  smooth={true}
                  duration={900}
                  className="text-gray-400 hover:text-picto-primary transition-colors duration-300 text-sm inline-block group"
                >
                  <span className="relative">
                    Process
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-picto-primary group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold text-lg mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Follow me on social media or reach out directly
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              <SocialMedia />
            </div>
            <div className="mt-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-picto-primary hover:text-picto-primary-dark text-sm font-medium inline-flex items-center group"
              >
                <span className="mr-2">{personalInfo.email}</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {copyrightYear}{" "}
              <span className="text-picto-primary font-semibold name-font">
                {displayName}
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
