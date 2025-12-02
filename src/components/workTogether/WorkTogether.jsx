import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { workTogether, contactInfo } from "../../data/siteConfig";

// Helper function untuk generate WhatsApp link
const getWhatsAppLink = (message = "Hello! I have a project idea I'd like to discuss with you.") => {
  const phoneContact = contactInfo.find((contact) => contact.type === "phone");
  if (!phoneContact) return "#!";
  
  // Format nomor: hapus + dan spasi, hanya angka
  const phoneNumber = phoneContact.value.replace(/[\s+]/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

// Data work together diambil dari siteConfig.js
// Untuk mengubah, edit file: src/data/siteConfig.js
const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          {workTogether.title}
        </p>
        <p className="text-gray-300 text-xs sm:text-lg font-normal text-center pb-8">
          {workTogether.description}
        </p>
        <a
          href={getWhatsAppLink("Hello! I have a project idea I'd like to discuss with you.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
        >
          {workTogether.buttonText}
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
