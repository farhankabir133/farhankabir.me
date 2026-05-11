import { PropsWithChildren } from "react";
import { siteProfile } from "../data/portfolio";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              FARHAN
              <br />
              <span>KABIR</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>{siteProfile.role}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">.</div>
              <div className="landing-h2-2">Designer</div>
            </h2>
            <p className="landing-copy">{siteProfile.intro}</p>
            <h2>
              <div className="landing-h2-info">{siteProfile.tagline}</div>
              <div className="landing-h2-info-1">.</div>
            </h2>
            <div className="landing-cta">
              <a href="#work" data-cursor="disable">
                Explore My Work
              </a>
              <a
                href={siteProfile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
