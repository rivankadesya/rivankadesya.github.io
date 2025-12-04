import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { introductionData, personalInfo } from "../../data/introductionData";
import { contactInfo } from "../../data/siteConfig";

// Helper function untuk generate WhatsApp link
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

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-8 lg:pt-16 lg:mb-12 max-xl:gap-2 px-4 sm:px-6 md:px-8 lg:px-12 max-xxl:px-6"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-6 lg:pt-8 me-0 lg:me-16 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full text-white">
            Hello, I'm
            <span className="text-nowrap shrink-0 inline-block w-full text-picto-primary name-font">
              {personalInfo.name}
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-gray-300">
            I'm a{" "}
            <span className="bg-highlight">{personalInfo.profession}</span> with{" "}
            {personalInfo.experience}. {personalInfo.description}
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href={getWhatsAppLink("Hello! I'd like to connect with you.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {introductionData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-cyan-500/30 w-full h-full absolute bottom-0 object-cover bg-gray-800 border border-gray-700 rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
