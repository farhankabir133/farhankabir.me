/**
 * Get the base path for assets on GitHub Pages
 * This handles both localhost (/) and GitHub Pages (/farhankabir.me/)
 */
export const getBasePath = (): string => {
  // In development, base is /
  // In production on GitHub Pages, base is /farhankabir.me/
  if (import.meta.env.DEV) {
    return '/';
  }
  
  // For GitHub Pages, we use the configured base from Vite
  // This is replaced at build time with the actual base path
  return import.meta.env.BASE_URL;
};

/**
 * Get the full asset path for public folder assets
 */
export const getAssetPath = (path: string): string => {
  const basePath = getBasePath();
  // Remove leading ./ or / from the path if present
  const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
  return basePath + cleanPath;
};
