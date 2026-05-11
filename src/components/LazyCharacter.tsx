import React, { Suspense, useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const CharacterModel = React.lazy(() => import("./Character"));

const LazyCharacter = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

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
