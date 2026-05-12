import React, { useEffect, useState, useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import "../styles/Terminal.css";

interface TypedTextProps {
  text: string;
  speed?: number;
  delay?: number;
  animateOnScroll?: boolean;
  showCursor?: boolean;
}

const TypedText: React.FC<TypedTextProps> = ({
  text,
  speed = 30,
  delay = 0,
  animateOnScroll = true,
  showCursor = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [shouldStart, setShouldStart] = useState(!animateOnScroll);

  useEffect(() => {
    if (animateOnScroll) {
      setShouldStart(isVisible);
    }
  }, [isVisible, animateOnScroll]);

  useEffect(() => {
    if (!shouldStart) {
      setDisplayedText("");
      setIsComplete(false);
      return;
    }

    let index = 0;

    const delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => {
      clearTimeout(delayTimeout);
    };
  }, [shouldStart, text, speed, delay]);

  return (
    <div ref={ref} className="typed-text">
      <span className="typed-content">{displayedText}</span>
      {showCursor && !isComplete && <span className="cursor">▍</span>}
    </div>
  );
};

export default TypedText;
