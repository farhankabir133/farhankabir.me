/**
 * Get the base path for assets on GitHub Pages
 * This handles both localhost (/) and GitHub Pages (/farhankabir.me/)
 */
export const getBasePath = (): string => {
  // Prefer Vite's BASE_URL which reflects the configured `base` both in dev and prod.
  // Fallback to '/' when it's not available for any reason.
  // Vite exposes the base at import.meta.env.BASE_URL and it will be '/' in a normal
  // dev setup or '/your-repo/' when the dev server is started with that base.
  return (import.meta.env.BASE_URL as string) || '/';
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
