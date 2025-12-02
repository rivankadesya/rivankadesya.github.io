import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCalendarAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const EducationCard = ({ data }) => {
  return (
    <div className="group relative bg-gray-800 border border-gray-700 rounded-lg hover:shadow-2xl hover:shadow-cyan-500/20 duration-300 transition-all shadow-gray-800 h-full flex flex-col w-full">
      {/* Decorative gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex flex-col h-full p-4 xs:p-8">
        {/* Logo atau Icon */}
        <div className="mb-4">
          {data.logo ? (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-transparent border border-gray-600 group-hover:border-picto-primary/50 transition-all duration-300 overflow-hidden">
              <img
                src={data.logo}
                alt={`${data.institution} logo`}
                className="w-full h-full object-contain p-2"
              />
            </div>
          ) : (
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-picto-primary/20 to-picto-primary/5 border border-picto-primary/30 group-hover:border-picto-primary/60 transition-all duration-300">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-2xl text-picto-primary"
              />
            </div>
          )}
        </div>

        {/* Degree/Title */}
        <h3 className="text-white text-md xxs:text-lg font-semibold mb-2 group-hover:text-picto-primary transition-colors duration-300">
          {data.degree || data.title}
        </h3>

        {/* Institution */}
        <p className="text-picto-primary text-xs font-medium mb-3">
          {data.institution}
        </p>

        {/* Description - flex-1 untuk mengambil ruang yang tersedia */}
        {data.description && (
          <p
            style={{ lineHeight: "20px", letterSpacing: "0%" }}
            className="text-gray-300 text-xs xxs:text-[14px] text-wrap mb-4 flex-grow"
          >
            {data.description}
          </p>
        )}

        {/* Details - selalu di bawah */}
        <div className="space-y-2 pt-4 border-t border-gray-700 mt-auto">
          {/* Period */}
          {data.period && (
            <div className="flex items-center text-gray-400 text-xs">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="w-3 h-3 mr-2 text-picto-primary/70 flex-shrink-0"
              />
              <span>{data.period}</span>
            </div>
          )}

          {/* Location */}
          {data.location && (
            <div className="flex items-center text-gray-400 text-xs">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="w-3 h-3 mr-2 text-picto-primary/70 flex-shrink-0"
              />
              <span>{data.location}</span>
            </div>
          )}

          {/* GPA/Grade (optional) */}
          {data.gpa && (
            <div className="flex items-center text-gray-300 text-xs font-medium mt-2">
              <span className="px-2 py-1 rounded bg-picto-primary/10 text-picto-primary border border-picto-primary/20">
                GPA: {data.gpa}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;

