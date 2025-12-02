import card1 from "../assets/images/portfolio-images/corp1.png";
import card2 from "../assets/images/portfolio-images/corp2.png";
import card3 from "../assets/images/portfolio-images/corp3.png";
import card4 from "../assets/images/portfolio-images/corp4.png";
import card5 from "../assets/images/portfolio-images/corp5.png";
import card6 from "../assets/images/portfolio-images/corp6.png";
import card7 from "../assets/images/portfolio-images/crop7.png";
import card8 from "../assets/images/portfolio-images/crop8.png";
import card9 from "../assets/images/portfolio-images/crop9.png";

/**
 * Portfolio Data
 *
 * Untuk menambahkan project baru:
 * 1. Import gambar project di bagian atas (jika menggunakan gambar baru)
 *    Contoh: import myProjectImage from "../assets/images/portfolio-images/my-project.png";
 *
 * 2. Tambahkan object baru ke array portfolioData di bawah ini
 *
 * 3. Format object:
 *    {
 *      id: 4,                    // ID unik (increment dari ID terakhir)
 *      image: card4,             // Import gambar dari assets
 *      category: "MOBILE APP",   // Kategori: "MOBILE APP", "WEB APP", "UI/UX", dll
 *      title: "Nama Project",    // Nama project
 *      description: "...",       // Deskripsi project (1-2 kalimat)
 *      appStoreLink: "https://apps.apple.com/...", // Link App Store (opsional, "#!" untuk nonaktif)
 *      playStoreLink: "https://play.google.com/...", // Link Play Store (opsional, "#!" untuk nonaktif)
 *    }
 *
 * 4. Project akan otomatis muncul di halaman portfolio tanpa perlu edit komponen!
 */
export const portfolioData = [
  {
    id: 1,
    image: card4,
    category: "MOBILE APP",
    title: "Babamarket Marketplace App",
    description:
      "A comprehensive marketplace mobile application built with React Native, featuring seamless shopping experience, real-time updates, and secure payment integration.",
    appStoreLink:
      "https://apps.apple.com/id/app/baba-market-bahan-bangunan/id6670245449?l=id", // Link App Store (isi dengan URL atau "#!" untuk nonaktif)
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.babamarket&hl=id", // Link Play Store (isi dengan URL atau "#!" untuk nonaktif)
  },
  {
    id: 2,
    image: card5,
    category: "MOBILE APP",
    title: "Dawggle App",
    description:
      "An app for pet lovers, especially dog owners, to discover and find dog-friendly recommended places.",
    appStoreLink:
      "https://apps.apple.com/us/app/dawggle-app/id6550900128?platform=ipad", // Link App Store
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.doggle.app&pcampaignid=web_share", // Link Play Store
  },
  {
    id: 3,
    image: card1,
    category: "MOBILE APP",
    title: "Servisin Aja App",
    description:
      "A service-based mobile application created with React Native, providing intuitive user interface and efficient service booking functionality for users.",
    appStoreLink: "#!", // Link App Store
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.servisinaja", // Link Play Store
  },
  {
    id: 4,
    image: card2,
    category: "MOBILE APP",
    title: "Nadi POS",
    description:
      "A POS application made for farmer partners, integrated with Bluetooth thermal printer for seamless receipt printing.",
    appStoreLink: "#!", // Link App Store (nonaktif)
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.projoteknologi.nadipos&pcampaignid=web_share", // Link Play Store (nonaktif)
  },
  {
    id: 5,
    image: card3,
    category: "MOBILE APP",
    title: "HRDay",
    description:
      "HRDay is a human resources application to handle attendance, reimbursements, and other HR-related features, making HR management easier and more efficient.",
    appStoreLink: "#!", // Link App Store (nonaktif)
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.hrday&pcampaignid=web_share", // Link Play Store (nonaktif)
  },
  {
    id: 6,
    image: card6,
    category: "MOBILE APP",
    title: "KHK Durian",
    description:
      "An offline-first application for durian plantation workers, designed to manage durian plantation systems.",
    appStoreLink: "#!", // Link App Store (nonaktif)
    playStoreLink: "#!", // Link Play Store (nonaktif)
  },
  {
    id: 7,
    image: card7,
    category: "MOBILE APP",
    title: "Bayafleet Driver App",
    description:
      "An application for drivers to monitor locations, request disbursement for fuel, meals, lodging, and other operational expenses.",
    appStoreLink: "#!", // Link App Store (nonaktif)
    playStoreLink: "#!", // Link Play Store (nonaktif)
  },
  {
    id: 8,
    image: card8,
    category: "MOBILE APP",
    title: "Bolt Advance Employee",
    description:
      "Bolt Advance Employee is an HR application that allows employees to manage payroll, submit leave requests, and handle various HR tasks, improving workplace efficiency.",
    appStoreLink:
      "https://apps.apple.com/id/app/bolt-advance-employee/id6560116005", // Link App Store (nonaktif)
    playStoreLink: "https://play.google.com/store/apps/details?id=app.bolt.emp", // Link Play Store (nonaktif)
  },
  {
    id: 9,
    image: card9,
    category: "MOBILE APP",
    title: "Baba Seller",
    description:
      "Baba Seller is an application for marketplace sellers, providing features such as sales reports, fund withdrawals, and other tools related to marketplace seller activities.",
    appStoreLink:
      "https://apps.apple.com/id/app/baba-seller-mitra-penjual/id6670151645", // Link App Store (nonaktif)
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.babamarketseller", // Link Play Store (nonaktif)
  },
];
