import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import WorkingExperience from "../components/workingExperience/WorkingExperience";
import Education from "../components/education/Education";
import Profession from "../components/profession/Profession";
import "../../index.css";

const Home = () => {
  return (
    <div className="introduction-profile-background">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-tech-dark pt-12 md:pt-16">
        <WorkProcess />
      </div>
      <Portfolio />
      <div className="bg-tech-darker">
        <WorkTogether />
      </div>
      <div className="bg-tech-dark">
        <WorkingExperience />
      </div>
      <div className="bg-tech-darker">
        <Education />
      </div>
      <div className="bg-tech-dark">
        <Profession />
      </div>
    </div>
  );
};

export default Home;
