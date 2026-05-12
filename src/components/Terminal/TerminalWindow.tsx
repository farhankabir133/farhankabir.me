import React, { PropsWithChildren } from "react";
import "../styles/Terminal.css";

interface TerminalWindowProps extends PropsWithChildren {
  title?: string;
  showLineNumbers?: boolean;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title = "terminal",
  showLineNumbers = true,
  children,
}) => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-title">~ {title}</div>
      </div>
      <div className={`terminal-body ${showLineNumbers ? "with-line-numbers" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
