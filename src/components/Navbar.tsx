import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { navigationItems } from "../data/portfolio";
import { getBasePath } from "../utils/basePath";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    const isDesktop = window.innerWidth > 1024;

    if (isDesktop) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.7,
        speed: 1.7,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
      });

      smoother.scrollTop(0);
      smoother.paused(true);
    }

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (isDesktop && smoother) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        ScrollSmoother.refresh(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      smoother?.kill();
    };
  }, []);
  return (
    <>
      <div className="header">
        <a
          href={`${getBasePath()}#landingDiv`}
          className="navbar-title"
          data-cursor="disable"
        >
          FK
        </a>
        <ul>
          {navigationItems.map((item) => {
            const isExternal = item.href.startsWith("http");
            return (
              <li key={item.label}>
                {isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                  >
                    <HoverLinks text={item.label.toUpperCase()} />
                  </a>
                ) : (
                  <a data-href={item.href} href={item.href}>
                    <HoverLinks text={item.label.toUpperCase()} />
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
