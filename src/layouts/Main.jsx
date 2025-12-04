import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";
import DocumentHead from "../components/common/documentHead/DocumentHead";
import SplashScreen from "../components/common/splashScreen/SplashScreen";
import SmoothScroll from "../components/common/smoothScroll/SmoothScroll";

const Main = () => {
  return (
    <SmoothScroll enabled={true}>
      <div data-theme={"light"} className="relative">
        <SplashScreen />
        <DocumentHead />
        <NavBar />
        <Outlet />
        <div className="bg-[#2A374A]">
          <Footer />
        </div>
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
};

export default Main;
