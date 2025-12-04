import { useEffect } from "react";
import { siteConfig, personalInfo } from "../../../data/siteConfig";

/**
 * Komponen untuk mengupdate document title dan favicon secara dinamis
 * Menggunakan data dari siteConfig.js dan personalInfo
 */
const DocumentHead = () => {
  useEffect(() => {
    // Generate title otomatis jika tidak di-set
    const title =
      siteConfig.title ||
      `${personalInfo.fullName} - ${personalInfo.profession}`;
    document.title = title;

    // Generate description otomatis jika tidak di-set
    const description =
      siteConfig.description ||
      `Portfolio website of ${personalInfo.fullName} - ${personalInfo.profession} with ${personalInfo.experience}`;

    // Update favicon dengan base path yang benar
    const updateFavicon = () => {
      // Gunakan BASE_URL dari Vite untuk mendapatkan base path yang benar
      const baseUrl = import.meta.env.BASE_URL || "/";
      const faviconPath = siteConfig.favicon || "/logo.png";
      
      // Pastikan favicon path menggunakan base URL yang benar
      // Jika faviconPath sudah dimulai dengan /, gabungkan dengan baseUrl
      let finalFaviconPath = faviconPath;
      if (faviconPath.startsWith("/")) {
        // Hapus leading slash dan gabungkan dengan baseUrl
        // Pastikan baseUrl tidak double slash
        const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
        finalFaviconPath = cleanBaseUrl + faviconPath.substring(1);
      } else {
        // Jika tidak dimulai dengan /, tambahkan baseUrl
        const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
        finalFaviconPath = cleanBaseUrl + faviconPath;
      }
      
      // Debug logging (hanya di development)
      if (import.meta.env.DEV) {
        console.log("🔍 Favicon Update:", {
          baseUrl,
          faviconPath,
          finalFaviconPath,
        });
      }
      
      // Tentukan type berdasarkan ekstensi file
      let faviconType = "image/png";
      if (faviconPath.endsWith(".svg")) {
        faviconType = "image/svg+xml";
      } else if (faviconPath.endsWith(".png")) {
        faviconType = "image/png";
      } else if (faviconPath.endsWith(".ico")) {
        faviconType = "image/x-icon";
      }

      // Update semua favicon links yang ada
      const allFaviconLinks = document.querySelectorAll(
        "link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']"
      );

      allFaviconLinks.forEach((link) => {
        // Update href dengan path yang benar (dengan base URL)
        link.href = finalFaviconPath;
        link.type = faviconType;
      });

      // Pastikan ada minimal satu favicon link
      if (allFaviconLinks.length === 0) {
        const link = document.createElement("link");
        link.rel = "icon";
        link.type = faviconType;
        link.href = finalFaviconPath;
        document.head.appendChild(link);
      }
    };

    // Update favicon setelah komponen mount
    updateFavicon();
    
    // Update lagi setelah delay untuk memastikan
    const timeoutId = setTimeout(() => {
      updateFavicon();
    }, 500);

    // Update meta description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Cleanup timeout jika komponen unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return null; // Komponen ini tidak render apapun
};

export default DocumentHead;
