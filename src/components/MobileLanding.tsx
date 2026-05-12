import React, { useEffect, useState } from "react";
import TerminalWindow from "./Terminal/TerminalWindow";
import TypedText from "./Terminal/TypedText";
import ParticleEffect from "./Terminal/ParticleEffect";
import "./styles/MobileLanding.css";

const MobileLanding: React.FC = () => {
  const [phase, setPhase] = useState(0);
  const phases = [
    "$ git init my-journey",
    "$ npm install dependencies",
    "$ npm run build:dreams",
    "$ npm start",
  ];

  useEffect(() => {
    if (phase < phases.length) {
      const timer = setTimeout(() => {
        setPhase(phase + 1);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const showFinal = phase >= phases.length;

  return (
    <div className="mobile-landing">
      <div className="mobile-landing-particles">
           <ParticleEffect intensity="low" />
      </div>

      <div className="mobile-landing-content">
        <TerminalWindow title="init-journey.js">
          <div className="terminal-content">
            {/* Boot Sequence */}
            <div className="boot-sequence">
              {phases.map((cmd, idx) => (
                <div
                  key={idx}
                  className={`boot-line ${idx < phase ? "visible" : ""}`}
                >
                  <span className="prompt">$</span>
                  <span className="command">{cmd}</span>
                </div>
              ))}

              {phase >= 1 && (
                <div className="boot-line visible">
                  <span className="output">
                    Initialized empty Git repository
                  </span>
                </div>
              )}

              {phase >= 2 && (
                <div className="boot-line visible">
                  <span className="output">added 47 packages in 2.3s</span>
                </div>
              )}

              {phase >= 3 && (
                <div className="boot-line visible">
                  <span className="output">⚙️ Compiling dreams...</span>
                </div>
              )}

              {phase >= 4 && (
                <div className="boot-line visible">
                  <span className="output success">✓ Built successfully!</span>
                </div>
              )}
            </div>

            {/* Welcome Message */}
            {showFinal && (
              <div className="welcome-section">
                <div className="welcome-line">
                  <TypedText
                    text="👋 Hello! I'm FARHAN KABIR"
                    speed={40}
                    delay={200}
                  />
                </div>
                <div className="welcome-line">
                  <TypedText
                    text="🚀 Full Stack Developer | Researcher | AI Enthusiast"
                    speed={25}
                    delay={1000}
                  />
                </div>
                <div className="welcome-line tagline">
                  <TypedText
                    text="Building meaningful digital experiences through code"
                    speed={20}
                    delay={2000}
                  />
                </div>
              </div>
            )}
          </div>
        </TerminalWindow>

        {/* CTA Buttons */}
        {showFinal && (
          <div className="mobile-cta-buttons">
            <a href="#work" className="cta-btn cta-primary">
              Explore My Work
            </a>
            <a href="#about" className="cta-btn cta-secondary">
              My Story
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileLanding;
