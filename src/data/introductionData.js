// Introduction summary data - Data diambil dari siteConfig.js
// Untuk mengubah informasi, edit file: src/data/siteConfig.js
import { statistics, personalInfo as configPersonalInfo } from "./siteConfig";

// Convert statistics format
export const introductionData = statistics.map((stat) => ({
  id: stat.id,
  title: stat.title,
  description: stat.value,
}));

// Personal information - diambil dari siteConfig.js
export const personalInfo = {
  name: configPersonalInfo.fullName,
  profession: configPersonalInfo.profession,
  experience: configPersonalInfo.experience,
  description: configPersonalInfo.description,
  email: configPersonalInfo.email,
};
