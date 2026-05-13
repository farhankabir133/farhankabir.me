import { useEffect, useState } from 'react';

/**
 * Custom hook for responsive media queries
 * Uses native window.matchMedia API for efficient responsive behavior
 * 
 * @param query - CSS media query string (e.g., '(max-width: 768px)')
 * @returns boolean indicating if the media query matches
 * 
 * @example
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
 * const isDesktop = useMediaQuery('(min-width: 1025px)');
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(() => {
    // SSR-safe: Check if window is available
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    // SSR-safe: Only run in browser
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Modern browsers use addEventListener
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    
    // Fallback for older browsers
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [query]);

  return matches;
};

// Common breakpoints matching Tailwind CSS defaults
export const useResponsive = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isSmallMobile = useMediaQuery('(max-width: 480px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
  const isLargeTablet = useMediaQuery('(min-width: 1025px) and (max-width: 1280px)');
  const isDesktop = useMediaQuery('(min-width: 1281px)');
  const isLargeDesktop = useMediaQuery('(min-width: 1921px)');
  const isTouchDevice = useMediaQuery('(hover: none) and (pointer: coarse)');

  return {
    isMobile,
    isSmallMobile,
    isTablet,
    isLargeTablet,
    isDesktop,
    isLargeDesktop,
    isTouchDevice,
    isNotMobile: !isMobile,
    isMobileOrTablet: isMobile || isTablet,
  };
};

export default useMediaQuery;
