import edu1 from "../assets/images/edu1.png";
import edu2 from "../assets/images/edu2.png";
import edu3 from "../assets/images/edu3.png";

/**
 * ============================================
 * SITE CONFIGURATION - EDIT FILE INI SAJA!
 * ============================================
 *
 * File ini berisi SEMUA informasi yang perlu Anda isi untuk portfolio website.
 * Edit file ini saja, semua perubahan akan otomatis terupdate di website.
 *
 * INSTRUKSI:
 * 1. Isi semua informasi di bawah ini sesuai data Anda
 * 2. Simpan file (Ctrl+S / Cmd+S)
 * 3. Website akan otomatis terupdate (jika hot reload aktif)
 *
 * ============================================
 */

// ============================================
// 0. KONFIGURASI SITE (Title & Favicon)
// ============================================
// Catatan: Title akan otomatis dibuat dari personalInfo.fullName dan personalInfo.profession
// Jika ingin custom title, edit di bawah ini
export const siteConfig = {
  // Title yang muncul di tab browser
  // Jika null, akan otomatis menggunakan: "{fullName} - {profession}"
  title: null, // null = otomatis dari personalInfo

  // Deskripsi untuk SEO (meta description)
  // Jika null, akan otomatis dibuat dari personalInfo
  description: null, // null = otomatis dari personalInfo

  // Path ke favicon (letakkan di public/ folder)
  // Contoh: "/logo.svg" atau "/favicon.ico" atau "/logo.png"
  // Pastikan file ada di folder public/
  favicon: "/logo.png", // Menggunakan logo.png di public folder
};

// ============================================
// 1. INFORMASI PERSONAL
// ============================================
export const personalInfo = {
  // Nama lengkap Anda (akan muncul di hero section)
  fullName: "Rivanka Desya",

  // Nama pendek untuk navbar/logo (opsional, jika tidak diisi akan pakai fullName)
  shortName: "Rivanka",

  // Profesi/jabatan Anda
  profession: "Mobile React Native Developer",

  // Pengalaman kerja (format: "X years of experience")
  experience: "2 years of experience",

  // Deskripsi singkat tentang Anda (1-2 kalimat)
  description:
    "I specialize in building cross-platform mobile applications that deliver exceptional user experiences through carefully crafted code and modern development practices.",

  // Email untuk tombol "Say Hello!"
  email: "ivanrivanka10@gmail.com",

  // Path ke foto profil Anda (letakkan di src/assets/images/)
  // Contoh: import personImage from "../../assets/images/person.png";
  profileImage: null, // Akan diisi di introductionData.js
};

// ============================================
// 2. STATISTIK (Introduction Summary)
// ============================================
export const statistics = [
  {
    id: 1,
    title: "Experience", // Label statistik
    value: "2 Y.", // Nilai statistik
  },
  {
    id: 2,
    title: "Projects Completed",
    value: "20+",
  },
  {
    id: 3,
    title: "Client Satisfaction",
    value: "9.3/10.0",
  },

  // Tambahkan statistik lain jika perlu
  // {
  //   id: 4,
  //   title: "Awards Won",
  //   value: "10+",
  // },
];

// ============================================
// 3. INFORMASI KONTAK
// ============================================
export const contactInfo = [
  {
    type: "address", // "address", "email", atau "phone"
    label: "Address", // Label yang ditampilkan
    value: "Yogyakarta, Indonesia", // Nilai kontak
  },
  {
    type: "email",
    label: "My Email",
    value: "ivanrivanka10@gmail.com",
  },
  {
    type: "phone",
    label: "Call Me Now",
    value: "+6281393914809",
  },
  // Tambahkan kontak lain jika perlu
  // {
  //   type: "website",
  //   label: "Website",
  //   value: "https://yourwebsite.com",
  // },
];

// ============================================
// 4. SOCIAL MEDIA LINKS
// ============================================
export const socialMedia = [
  {
    platform: "instagram",
    url: "https://instagram.com/rivankadesya",
  },
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/rivankadesya",
  },
  {
    platform: "github",
    url: "https://https://github.com/rivankadesya",
  },
  {
    platform: "gitlab",
    url: "https://gitlab.com/ivanrivanka10",
  },

  {
    platform: "whatsapp",
    url: "https://wa.me/6281393914809",
  },

  // Tambahkan platform lain sesuai kebutuhan
  // Platform yang didukung: facebook, instagram, linkedin, twitter, github, dribbble, behance
];

// ============================================
// 5. PORTFOLIO / PROJECTS
// ============================================
// Catatan: Untuk menambahkan project, edit file src/data/portfolioData.js
// File ini hanya untuk referensi struktur data

export const portfolioInfo = {
  // Deskripsi section portfolio (akan muncul di atas daftar project)
  description:
    "Here's a selection of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.",

  // Link tombol "More Project" (atau "#!" untuk nonaktif)
  moreProjectsLink: "#!",
};

// ============================================
// 6. SKILLS / SERVICES (What I Do)
// ============================================
export const skills = [
  {
    id: 1,
    title: "React Native Development",
    description:
      "I develop cross-platform mobile applications using React Native, creating native-like experiences for both iOS and Android with a single codebase.",
  },
  {
    id: 2,
    title: "Mobile UI/UX",
    description:
      "I design and implement intuitive mobile interfaces that provide seamless user experiences, focusing on performance, accessibility, and modern design principles.",
  },
  {
    id: 3,
    title: "Mobile App Architecture",
    description:
      "I build scalable and maintainable mobile applications with clean architecture, state management, and integration with RESTful APIs and third-party services.",
  },
  // Tambahkan skill/service lain
  // {
  //   id: 4,
  //   title: "Backend Integration",
  //   description: "Your description here...",
  // },
];

// ============================================
// 7. WORK PROCESS
// ============================================
export const workProcess = {
  // Deskripsi section work process
  description: [
    "Driven by design and powered by code, I create digital interfaces that feel intuitive and perform seamlessly. Every layout, animation, and component is crafted with intention — merging usability with visual clarity,",
    "I blend clean design with efficient code to build engaging, user-friendly web experiences that stand out.",
  ],

  // Langkah-langkah work process
  steps: [
    {
      id: 1,
      title: "Research",
      description:
        "Design meets function in every pixel, blending clarity with intuitive motion.",
      // SVG path untuk icon (opsional, bisa dikosongkan jika tidak ada)
      svgPath:
        "M21.3333 18.6667H10.6667C10.313 18.6667 9.97391 18.8072 9.72386 19.0573C9.47381 19.3073 9.33333 19.6465 9.33333 20.0001C9.33333 20.3537 9.47381 20.6928 9.72386 20.9429C9.97391 21.1929 10.313 21.3334 10.6667 21.3334H21.3333C21.687 21.3334 22.0261 21.1929 22.2761 20.9429C22.5262 20.6928 22.6667 20.3537 22.6667 20.0001C22.6667 19.6465 22.5262 19.3073 22.2761 19.0573C22.0261 18.8072 21.687 18.6667 21.3333 18.6667ZM21.3333 13.3334H13.3333C12.9797 13.3334 12.6406 13.4739 12.3905 13.7239C12.1405 13.974 12 14.3131 12 14.6667C12 15.0204 12.1405 15.3595 12.3905 15.6096C12.6406 15.8596 12.9797 16.0001 13.3333 16.0001H21.3333C21.687 16.0001 22.0261 15.8596 22.2761 15.6096C22.5262 15.3595 22.6667 15.0204 22.6667 14.6667C22.6667 14.3131 22.5262 13.974 22.2761 13.7239C22.0261 13.4739 21.687 13.3334 21.3333 13.3334ZM26.6667 5.33341H22.6667V4.00008C22.6667 3.64646 22.5262 3.30732 22.2761 3.05727C22.0261 2.80722 21.687 2.66675 21.3333 2.66675C20.9797 2.66675 20.6406 2.80722 20.3905 3.05727C20.1405 3.30732 20 3.64646 20 4.00008V5.33341H17.3333V4.00008C17.3333 3.64646 17.1929 3.30732 16.9428 3.05727C16.6928 2.80722 16.3536 2.66675 16 2.66675C15.6464 2.66675 15.3072 2.80722 15.0572 3.05727C14.8071 3.30732 14.6667 3.64646 14.6667 4.00008V5.33341H12V4.00008C12 3.64646 11.8595 3.30732 11.6095 3.05727C11.3594 2.80722 11.0203 2.66675 10.6667 2.66675C10.313 2.66675 9.97391 2.80722 9.72386 3.05727C9.47381 3.30732 9.33333 3.64646 9.33333 4.00008V5.33341H5.33333C4.97971 5.33341 4.64057 5.47389 4.39052 5.72394C4.14048 5.97399 4 6.31313 4 6.66675V25.3334C4 26.3943 4.42143 27.4117 5.17157 28.1618C5.92172 28.912 6.93913 29.3334 8 29.3334H24C25.0609 29.3334 26.0783 28.912 26.8284 28.1618C27.5786 27.4117 28 26.3943 28 25.3334V6.66675C28 6.31313 27.8595 5.97399 27.6095 5.72394C27.3594 5.47389 27.0203 5.33341 26.6667 5.33341ZM25.3333 25.3334C25.3333 25.687 25.1929 26.0262 24.9428 26.2762C24.6928 26.5263 24.3536 26.6667 24 26.6667H8C7.64638 26.6667 7.30724 26.5263 7.05719 26.2762C6.80714 26.0262 6.66667 25.687 6.66667 25.3334V8.00008H9.33333V9.33342C9.33333 9.68704 9.47381 10.0262 9.72386 10.2762C9.97391 10.5263 10.313 10.6667 10.6667 10.6667C11.0203 10.6667 11.3594 10.5263 11.6095 10.2762C11.8595 10.0262 12 9.68704 12 9.33342V8.00008H14.6667V9.33342C14.6667 9.68704 14.8071 10.0262 15.0572 10.2762C15.3072 10.5263 15.6464 10.6667 16 10.6667C16.3536 10.6667 16.6928 10.5263 16.9428 10.2762C17.1929 10.0262 17.3333 9.68704 17.3333 9.33342V8.00008H20V9.33342C20 9.68704 20.1405 10.0262 20.3905 10.2762C20.6406 10.5263 20.9797 10.6667 21.3333 10.6667C21.687 10.6667 22.0261 10.5263 22.2761 10.2762C22.5262 10.0262 22.6667 9.68704 22.6667 9.33342V8.00008H25.3333V25.3334Z",
    },
    {
      id: 2,
      title: "Analyze",
      description:
        "Crafting clean, thoughtful interfaces where form flows seamlessly into function and clarity.",
      svgPath:
        "M9.33333 21.3334C9.86377 21.3334 10.3725 21.1227 10.7475 20.7476C11.1226 20.3726 11.3333 19.8638 11.3333 19.3334C11.3398 19.2669 11.3398 19.1999 11.3333 19.1334L15.0533 15.4134H15.36H15.6667L17.8133 17.5601C17.8133 17.5601 17.8133 17.6267 17.8133 17.6667C17.8133 18.1972 18.024 18.7059 18.3991 19.081C18.7742 19.456 19.2829 19.6667 19.8133 19.6667C20.3438 19.6667 20.8525 19.456 21.2275 19.081C21.6026 18.7059 21.8133 18.1972 21.8133 17.6667V17.5601L26.6667 12.6667C27.0622 12.6667 27.4489 12.5495 27.7778 12.3297C28.1067 12.1099 28.363 11.7976 28.5144 11.4321C28.6658 11.0667 28.7054 10.6645 28.6282 10.2766C28.5511 9.88861 28.3606 9.53224 28.0809 9.25253C27.8012 8.97283 27.4448 8.78235 27.0568 8.70518C26.6689 8.62801 26.2668 8.66761 25.9013 8.81899C25.5358 8.97036 25.2235 9.22671 25.0037 9.55561C24.784 9.88451 24.6667 10.2712 24.6667 10.6667C24.6602 10.7333 24.6602 10.8002 24.6667 10.8667L19.8533 15.6801H19.64L17.3333 13.3334C17.3333 12.803 17.1226 12.2943 16.7475 11.9192C16.3725 11.5441 15.8638 11.3334 15.3333 11.3334C14.8029 11.3334 14.2942 11.5441 13.9191 11.9192C13.544 12.2943 13.3333 12.803 13.3333 13.3334L9.33333 17.3334C8.8029 17.3334 8.29419 17.5441 7.91912 17.9192C7.54405 18.2943 7.33333 18.803 7.33333 19.3334C7.33333 19.8638 7.54405 20.3726 7.91912 20.7476C8.29419 21.1227 8.8029 21.3334 9.33333 21.3334ZM27.3333 26.6667H4.66667V4.00008C4.66667 3.64646 4.52619 3.30732 4.27614 3.05727C4.02609 2.80722 3.68696 2.66675 3.33333 2.66675C2.97971 2.66675 2.64057 2.80722 2.39052 3.05727C2.14048 3.30732 2 3.64646 2 4.00008V28.0001C2 28.3537 2.14048 28.6928 2.39052 28.9429C2.64057 29.1929 2.97971 29.3334 3.33333 29.3334H27.3333C27.687 29.3334 28.0261 29.1929 28.2761 28.9429C28.5262 28.6928 28.6667 28.3537 28.6667 28.0001C28.6667 27.6465 28.5262 27.3073 28.2761 27.0573C28.0261 26.8072 27.687 26.6667 27.3333 26.6667Z",
    },
    {
      id: 3,
      title: "Design",
      description:
        "I design seamless digital experiences with precision, purpose, and a touch of elegance.",
      svgPath:
        "M29.3333 9.65319C29.3343 9.47772 29.3007 9.30377 29.2343 9.14132C29.168 8.97887 29.0702 8.83111 28.9466 8.70653L23.2933 3.05319C23.1687 2.92962 23.021 2.83185 22.8585 2.7655C22.6961 2.69915 22.5221 2.66551 22.3466 2.66653C22.1712 2.66551 21.9972 2.69915 21.8348 2.7655C21.6723 2.83185 21.5246 2.92962 21.4 3.05319L17.6266 6.82653L3.05331 21.3999C2.92974 21.5244 2.83197 21.6722 2.76562 21.8347C2.69927 21.9971 2.66563 22.1711 2.66665 22.3465V27.9999C2.66665 28.3535 2.80712 28.6926 3.05717 28.9427C3.30722 29.1927 3.64636 29.3332 3.99998 29.3332H9.65331C9.83988 29.3433 10.0265 29.3142 10.2011 29.2475C10.3756 29.1809 10.5343 29.0784 10.6666 28.9465L25.16 14.3732L28.9466 10.6665C29.0683 10.5373 29.1675 10.3886 29.24 10.2265C29.2528 10.1202 29.2528 10.0128 29.24 9.90653C29.2462 9.84446 29.2462 9.78192 29.24 9.71986L29.3333 9.65319ZM9.10665 26.6665H5.33331V22.8932L18.5733 9.65319L22.3466 13.4265L9.10665 26.6665ZM24.2266 11.5465L20.4533 7.77319L22.3466 5.89319L26.1066 9.65319L24.2266 11.5465Z",
    },
    {
      id: 4,
      title: "Launch",
      description:
        "I craft digital products where thoughtful design meets performance-driven, responsive development.",
      svgPath:
        "M28 18.6668H26.6666V9.3335C26.6666 8.27263 26.2452 7.25521 25.4951 6.50507C24.7449 5.75492 23.7275 5.3335 22.6666 5.3335H9.33329C8.27243 5.3335 7.25501 5.75492 6.50487 6.50507C5.75472 7.25521 5.33329 8.27263 5.33329 9.3335V18.6668H3.99996C3.64634 18.6668 3.3072 18.8073 3.05715 19.0574C2.8071 19.3074 2.66663 19.6465 2.66663 20.0002V22.6668C2.66663 23.7277 3.08805 24.7451 3.8382 25.4953C4.58834 26.2454 5.60576 26.6668 6.66663 26.6668H25.3333C26.3942 26.6668 27.4116 26.2454 28.1617 25.4953C28.9119 24.7451 29.3333 23.7277 29.3333 22.6668V20.0002C29.3333 19.6465 29.1928 19.3074 28.9428 19.0574C28.6927 18.8073 28.3536 18.6668 28 18.6668ZM7.99996 9.3335C7.99996 8.97987 8.14044 8.64074 8.39048 8.39069C8.64053 8.14064 8.97967 8.00016 9.33329 8.00016H22.6666C23.0202 8.00016 23.3594 8.14064 23.6094 8.39069C23.8595 8.64074 24 8.97987 24 9.3335V18.6668H7.99996V9.3335ZM26.6666 22.6668C26.6666 23.0205 26.5262 23.3596 26.2761 23.6096C26.0261 23.8597 25.6869 24.0002 25.3333 24.0002H6.66663C6.313 24.0002 5.97387 23.8597 5.72382 23.6096C5.47377 23.3596 5.33329 23.0205 5.33329 22.6668V21.3335H26.6666V22.6668Z",
    },
  ],
};

// ============================================
// 8. TESTIMONIALS
// ============================================
export const testimonials = [
  {
    id: 1,
    message:
      "Working with this team was a fantastic experience. Their attention to detail and commitment to quality exceeded our expectations.",
    quote:
      "From the initial consultation to the final delivery, every step was handled professionally. The end result was a product that not only met our needs but also impressed our stakeholders. Highly recommended!",
    name: "Esther Howard",
    designation: "Managing Director, ABC Company",
  },
  {
    id: 2,
    message:
      "Their expertise in UI/UX design helped us transform our digital presence and improve user engagement.",
    quote:
      "The team demonstrated a deep understanding of our requirements and delivered a solution that was both visually appealing and highly functional. Communication was clear throughout the project.",
    name: "Ali Haider",
    designation: "COO, XYZ Company",
  },
  {
    id: 3,
    message:
      "Professional, reliable, and creative—everything you want in a development partner.",
    quote:
      "They delivered our project on time and went above and beyond to ensure our satisfaction. The new features have made a significant difference for our users. We look forward to working together again.",
    name: "Elon Max",
    designation: "Managing Director, KFC Company",
  },
  // Tambahkan testimonial lain
  // {
  //   id: 4,
  //   message: "Your testimonial message here...",
  //   quote: "Full testimonial quote here...",
  //   name: "Client Name",
  //   designation: "Position, Company Name",
  // },
];

// ============================================
// 9. EDUCATION
// ============================================
// Catatan: Untuk menambahkan education, edit array items di bawah ini

export const educationInfo = {
  // Deskripsi section education
  description:
    "My educational background and academic achievements that have shaped my journey in mobile development.",

  // Daftar pendidikan
  items: [
    {
      id: 1,
      degree: "Bachelor's Degree in Computer Science",
      institution: `UPN "VETERAN" Yogyakarta`,
      period: "2019 - 2023",
      location: "Yogyakarta, Indonesia",
      description:
        "Focused on software engineering, mobile development, and computer science fundamentals.",
      gpa: "3.84/4.0", // Opsional
      logo: edu1, // Path ke logo institusi (letakkan di src/assets/images/), contoh: import logo from "../../assets/images/education/upn-logo.png"
    },
    {
      id: 2,
      degree: "React Native Certification",
      institution: "Bootcamp Code Master",
      period: "2023",
      location: "Yogyakarta, Indonesia",
      description:
        "Advanced React Native development course covering cross-platform mobile app development.",
      // gpa tidak perlu untuk sertifikat
      logo: edu2, // Path ke logo institusi (letakkan di src/assets/images/), contoh: import logo from "../../assets/images/education/bootcamp-logo.png"
    },
    {
      id: 3,
      degree: "Senior High School",
      institution: "State Senior High School 7 Yogyakarta",
      period: "2016 - 2019",
      location: "Yogyakarta, Indonesia",
      description:
        "Studied natural sciences (MIPA) with a focus on mathematics, biology, physics, and chemistry.",
      // gpa tidak perlu untuk sertifikat
      logo: edu3, // Path ke logo institusi (letakkan di src/assets/images/), contoh: import logo from "../../assets/images/education/bootcamp-logo.png"
    },
    // Tambahkan education lain
    // {
    //   id: 3,
    //   degree: "Your Degree",
    //   institution: "Institution Name",
    //   period: "Year - Year",
    //   location: "Location",
    //   description: "Description here...",
    //   gpa: "3.5/4.0", // Opsional
    //   logo: null, // Path ke logo, atau null untuk menggunakan icon default
    // },
  ],
};

// ============================================
// 10. WORKING EXPERIENCE
// ============================================
// Catatan: Untuk menambahkan working experience, edit array items di bawah ini

export const workingExperienceInfo = {
  // Deskripsi section working experience
  description:
    "My professional journey and work experience in mobile development and software engineering.",

  // Daftar working experience
  items: [
    {
      id: 1,
      position: "Mobile Developer",
      company: "PT.Technova Solusi Informatika",
      period: "Aug 2023 - Jul 2025",
      location: "Yogyakarta, Indonesia",
      type: "Full-time", // "Full-time", "Part-time", "Contract", "Freelance", dll
      description:
        "Developed and maintained cross-platform mobile applications using React Native. Collaborated with cross-functional teams to deliver high-quality mobile solutions.",
      technologies: ["React Native", "JavaScript", "TypeScript", "Redux"],
      logo: null, // Path ke logo perusahaan (letakkan di src/assets/images/), contoh: import logo from "../../assets/images/experience/company-logo.png"
    },
    {
      id: 2,
      position: "Mobile Developer Outsource",
      company: "Bayafleet",
      period: "Sep 2023 - Jun 2025",
      location: "Selangor, Malaysia",
      type: "Full-time", // "Full-time", "Part-time", "Contract", "Freelance", dll
      description:
        "Developed and maintained cross-platform mobile applications using React Native. Collaborated with cross-functional teams to deliver high-quality mobile solutions.",
      technologies: [
        "React Native",
        "JavaScript",
        "TypeScript",
        "Redux",
        "Firebase",
        "AWS S3",
        "Realm Mongo DB",
      ],
      logo: null, // Path ke logo perusahaan (letakkan di src/assets/images/), contoh: import logo from "../../assets/images/experience/company-logo.png"
    },
    {
      id: 3,
      position: "Front End Developer",
      company: "CV.Projo Teknologi Nusantara",
      period: "Jan 2024 - Agu 2025",
      location: "Yogyakarta, Indonesia",
      type: "Full-time", // "Full-time", "Part-time", "Contract", "Freelance", dll
      description:
        "Worked on frontend development for both mobile and web platforms, focusing on delivering responsive and user-friendly interfaces using React Native and web technologies. Collaborated closely with cross-functional teams to build high-quality digital solutions.",
      technologies: [
        "React Native",
        "React JS",
        "JavaScript",
        "TypeScript",
        "Redux",
        "Firebase",
        "AWS S3",
      ],
      logo: null, // Path ke logo perusahaan (letakkan di src/assets/images/), contoh: import logo from "../../assets/images/experience/company-logo.png"
    },
    {
      id: 4,
      position: "Mobile Developer",
      company: "Servisin Aja",
      period: "Juli 2025 - Present",
      location: "Klaten, Indonesia",
      type: "Full-time", // "Full-time", "Part-time", "Contract", "Freelance", dll
      description:
        "Worked on frontend development mobile, focusing on delivering responsive and user-friendly interfaces using React Native. Collaborated closely with cross-functional teams to build high-quality digital solutions.",
      technologies: [
        "React Native",
        "JavaScript",
        "Redux",
        "Firebase",
        "WatermelonDB",
      ],
      logo: null, // Path ke logo perusahaan (letakkan di src/assets/images/), contoh: import logo from "../../assets/images/experience/company-logo.png"
    },
    // Tambahkan experience lain
    // {
    //   id: 2,
    //   position: "Junior Developer",
    //   company: "Previous Company",
    //   period: "2020 - 2022",
    //   location: "City, Country",
    //   type: "Full-time",
    //   description: "Your description here...",
    //   technologies: ["React", "Node.js"],
    //   logo: null,
    // },
  ],
};

// ============================================
// 11. WORK TOGETHER SECTION
// ============================================
export const workTogether = {
  title: "Do you have a Project Idea? Let's discuss your project!",
  description:
    "I'm always open to discussing new projects and creative ideas. Let's connect and build something amazing together.",
  buttonText: "Let's work Together",
  buttonLink: "#!", // Link ke contact form atau "#!" untuk scroll ke contact
};

// ============================================
// 12. NAVBAR CONFIGURATION
// ============================================
export const navbarConfig = {
  // Menu items untuk navbar
  menuItems: [
    { id: 1, name: "Home", url: "introduction" },
    { id: 2, name: "About", url: "profile" },
    { id: 3, name: "Process", url: "work-process" },
    { id: 4, name: "Portfolio", url: "portfolio" },
    { id: 5, name: "Experience", url: "experience" },
    { id: 6, name: "Education", url: "education" },
    { id: 7, name: "Services", url: "services" },
  ],
};

// ============================================
// 13. PROFILE SECTION
// ============================================
export const profileInfo = {
  // Judul di profile card
  title: "I am Mobile React Native Developer",

  // Deskripsi di profile card (paragraf 1)
  description1:
    "I develop cross-platform mobile applications using React Native, specializing in creating high-performance, user-friendly mobile apps. My passion is to build scalable mobile solutions that provide exceptional user experiences.",

  // Deskripsi di profile card (paragraf 2)
  description2:
    "With 2 years of experience, I focus on writing clean, maintainable code and implementing best practices in mobile development.",

  // Link tombol "My Projects" (atau "#!" untuk scroll ke portfolio)
  projectsLink: "#portfolio",

  // Link tombol "Download CV" (path ke file CV atau "#!" untuk nonaktif)
  cvLink: "#!",

  // Path ke foto profil di profile card (letakkan di src/assets/images/)
  // Contoh: import profileImage from "../../assets/images/person2.png";
  profileImage: null, // Akan diisi di Profile.jsx
};

// ============================================
// 14. HAPPY CLIENTS SECTION
// ============================================
export const happyClients = {
  description:
    "I've had the pleasure of working with a diverse range of companies, from startups to established brands.",
  // Logo perusahaan akan ditampilkan otomatis dari komponen
};

// ============================================
// CATATAN PENTING:
// ============================================
// 1. Untuk menambahkan PROJECT/PORTFOLIO, edit file: src/data/portfolioData.js
// 2. Untuk menambahkan EDUCATION, edit array educationInfo.items di atas
// 3. Pastikan semua URL valid dan gambar ada di folder yang benar
// 4. Setelah mengubah file ini, website akan otomatis terupdate (hot reload)
// 5. Jika ada field yang tidak digunakan, biarkan kosong atau isi dengan null
// ============================================
