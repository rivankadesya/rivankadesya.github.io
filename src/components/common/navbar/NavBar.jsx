import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";
import {
  contactInfo,
  navbarConfig,
  personalInfo,
} from "../../../data/siteConfig";

// Data navbar diambil dari siteConfig.js
// Untuk mengubah, edit file: src/data/siteConfig.js
const navItems = navbarConfig.menuItems;
const displayName = personalInfo.shortName || personalInfo.fullName;

const getWhatsAppLink = (
  message = "Hello! I'd like to discuss a project with you."
) => {
  const phoneContact = contactInfo.find((contact) => contact.type === "phone");
  if (!phoneContact) return "#!";

  // Format nomor: hapus + dan spasi, hanya angka
  const phoneNumber = phoneContact.value.replace(/[\s+]/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-140}
      activeStyle={{
        backgroundColor: "#00d9ff",
        color: "#0f0f1e",
      }}
      className={`text-white hover:text-picto-primary px-5 py-3 mx-1`}
    >
      {item.name}
    </Link>
  </li>
));

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-gray-800 border-b border-gray-700 shadow-lg shadow-cyan-500/10"
          : "bg-gray-900 border-gray-800"
      } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between mx-auto content">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-gray-800 border border-gray-700 text-white`}
            >
              {menu}
            </ul>
          </div>

          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5"
          >
            <img src={logo} className="h-8 sm:h-12 rounded-4xl" alt="logo" />
            <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold text-white name-font">
              {displayName}
            </p>
          </Link>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0 text-white">
            {menu}
          </ul>
          <p className="">
            <a
              href={getWhatsAppLink("Hello! I'd like to connect with you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm xs:btn-md sm:btn-lg btn-primary"
            >
              Contact
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
