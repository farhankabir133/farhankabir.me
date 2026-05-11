import "./styles/About.css";
import { siteProfile } from "../data/portfolio";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">{siteProfile.aboutHeading}</p>
        <p className="para">
          {siteProfile.aboutBody}
        </p>
        <p className="para">
          {siteProfile.aboutJourney}
        </p>
        <p className="para">
          {siteProfile.aboutOutsideWork}
        </p>
      </div>
    </div>
  );
};

export default About;
