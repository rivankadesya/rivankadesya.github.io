import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { contactData } from "../../data/contactData";

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-gray-800 border border-gray-700 rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,217,255,0.1)]"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <div>
            <div>
              <p className="text-[35px] max-lg:hidden font-semibold text-nowrap text-white">
                Let's discuss your Project
              </p>
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-gray-300">
                I'm available for freelance work. Drop me a line if you have a
                project you think I'd be a good fit for.
              </p>
            </div>
            <div className="my-8.75 sm:max-lg:flex justify-between items-center">
              {contactData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4">
              <SocialMedia />
            </div>
          </div>
          <div className="w-full overflow-y-scroll py-6.5">
            <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold text-white lg:hidden text-center">
              Let’s discuss your Project
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
