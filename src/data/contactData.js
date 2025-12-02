import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { contactInfo } from "./siteConfig";

// Contact data - Data diambil dari siteConfig.js
// Untuk mengubah informasi kontak, edit file: src/data/siteConfig.js
const iconMap = {
  address: faLocationDot,
  email: faEnvelope,
  phone: faPhone,
};

export const contactData = contactInfo.map((contact) => ({
  icon: iconMap[contact.type] || faEnvelope,
  title: contact.label,
  description: contact.value,
}));

