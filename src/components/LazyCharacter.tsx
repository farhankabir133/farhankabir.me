import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import React, { Suspense, useEffect, useRef, useState } from "react";
const CharacterModel = React.lazy(() => import("./Character"));
import MobileLanding from "./MobileLanding";

const LazyCharacter = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={ref} className={isDesktop ? "character-lazy-shell" : "character-lazy-shell character-lazy-mobile"}>
      {isDesktop && isVisible ? (
        <Suspense fallback={null}>
          <CharacterModel />
        </Suspense>
      ) : (
          <MobileLanding />
      )}
    </div>
  );
};

export default LazyCharacter;
