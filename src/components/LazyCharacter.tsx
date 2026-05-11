import React, { Suspense, useRef, useState, useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const CharacterModel = React.lazy(() => import("./Character"));

const LazyCharacter = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Skip 3D character on mobile devices
  if (isMobile) {
    return <div style={{ height: "100vh" }} />;
  }

  return (
    <div ref={ref}>
      {isVisible ? (
        <Suspense fallback={null}>
          <CharacterModel />
        </Suspense>
      ) : (
        <div style={{ height: "100vh" }} /> // Placeholder with same height
      )}
    </div>
  );
};

export default LazyCharacter;
