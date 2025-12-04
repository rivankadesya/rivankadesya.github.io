import Roles from "./Roles";
import { professionData } from "../../data/professionData";
import { contactInfo } from "../../data/siteConfig";

const Profession = () => {
  const getWhatsAppLink = (
    message = "Hello! I'd like to discuss a project with you."
  ) => {
    const phoneContact = contactInfo.find(
      (contact) => contact.type === "phone"
    );
    if (!phoneContact) return "#!";

    // Format nomor: hapus + dan spasi, hanya angka
    const phoneNumber = phoneContact.value.replace(/[\s+]/g, "");
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <div
      className="content grid md:grid-cols-2 px-4 sm:px-6 md:px-8 lg:px-12 max-xxl:px-6 py-10 md:py-12 lg:py-16"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-300 mb-4">
            I specialize in developing cross-platform mobile applications using
            React Native, creating high-performance apps that deliver
            exceptional user experiences on both iOS and Android.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-300">
            My approach combines technical expertise with best practices in
            mobile development to deliver scalable, maintainable, and
            user-friendly mobile solutions.
          </p>
        </div>
        <a
          href={getWhatsAppLink("Hello! I'd like to connect with you.")}
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {professionData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
