import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
  faTwitter,
  faWhatsapp,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMedia } from "../../../data/siteConfig";

// Data social media diambil dari siteConfig.js
// Untuk mengubah, edit file: src/data/siteConfig.js
const iconMap = {
  facebook: faFacebookF,
  instagram: faInstagram,
  linkedin: faLinkedin,
  github: faGithub,
  twitter: faTwitter,
  dribbble: faDribbble,
  behance: faBehance,
  whatsapp: faWhatsapp,
  gitlab: faGitlab,
};

const SocialMedia = () => {
  const socialIcons = socialMedia
    .map((social) => ({
      icon: iconMap[social.platform],
      link: social.url,
    }))
    .filter((item) => item.icon); // Filter out unsupported platforms

  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
