import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { siteProfile, socialLinks } from "../data/portfolio";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Let's Work Together</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Get in touch</h4>
            <p>{siteProfile.intro}</p>
            <p>
              <a
                href={`mailto:${siteProfile.primaryEmail}`}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                {siteProfile.primaryEmail}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${siteProfile.secondaryEmail}`}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                {siteProfile.secondaryEmail}
              </a>
            </p>
            <p>
              {siteProfile.phone}
            </p>
            <p>{siteProfile.location}</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                {link.label} <MdArrowOutward />
              </a>
            ))}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Farhan Kabir</span>
            </h2>
            <p>{siteProfile.availability}</p>
            <p>
              <a
                href={siteProfile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Download Resume
              </a>
            </p>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
