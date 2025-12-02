import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCalendarAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ExperienceCard = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-start md:items-center ${
      isEven ? "md:flex-row" : "md:flex-row-reverse"
    }`}>
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-picto-primary border-4 border-gray-800 shadow-lg shadow-picto-primary/50"></div>
      </div>

      {/* Content card */}
      <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
        isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
      }`}>
        <div className="group relative bg-gray-800 border border-gray-700 rounded-lg hover:border-picto-primary/50 hover:shadow-2xl hover:shadow-cyan-500/20 duration-300 transition-all p-6">
          {/* Decorative gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            {/* Company logo atau icon */}
            <div className="mb-4 flex items-center gap-3">
              {data.logo ? (
                <div className="w-12 h-12 rounded-lg bg-transparent border border-gray-600 group-hover:border-picto-primary/50 transition-all duration-300 overflow-hidden flex-shrink-0">
                  <img
                    src={data.logo}
                    alt={`${data.company} logo`}
                    className="w-full h-full object-contain p-1.5"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-picto-primary/20 to-picto-primary/5 border border-picto-primary/30 group-hover:border-picto-primary/60 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-xl text-picto-primary"
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-white text-lg font-semibold group-hover:text-picto-primary transition-colors duration-300">
                  {data.position}
                </h3>
                <p className="text-picto-primary text-sm font-medium">
                  {data.company}
                </p>
              </div>
            </div>

            {/* Description */}
            {data.description && (
              <p
                style={{ lineHeight: "20px", letterSpacing: "0%" }}
                className="text-gray-300 text-xs xxs:text-[14px] mb-4"
              >
                {data.description}
              </p>
            )}

            {/* Technologies */}
            {data.technologies && data.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {data.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 rounded bg-picto-primary/10 text-picto-primary border border-picto-primary/20 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Details */}
            <div className="space-y-2 pt-4 border-t border-gray-700">
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

              {/* Employment type */}
              {data.type && (
                <div className="flex items-center text-gray-400 text-xs">
                  <span className="px-2 py-1 rounded bg-gray-700/50 text-gray-300 text-xs">
                    {data.type}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

