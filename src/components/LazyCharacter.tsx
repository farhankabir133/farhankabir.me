import React, { Suspense, useRef, useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLoading } from "../context/LoadingProvider";
import { useMediaQuery } from "../hooks/useMediaQuery";

const CharacterModel = React.lazy(() => import("./Character"));

const LazyCharacter = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref, {
    threshold: 0.1,
    rootMargin: "200px", // Start loading 200px before it comes into view
  });
  
  // Use proper media query hook for responsive detection
  // useMediaQuery handles window resize automatically
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const { setIsLoading } = useLoading();

  // On mobile, complete loading immediately and skip 3D character
  useEffect(() => {
    if (isMobile) {
      // Simulate loading completion for mobile users
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isMobile, setIsLoading]);

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
