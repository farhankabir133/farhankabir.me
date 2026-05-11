import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/farhankabir.me/",
  plugins: [react()],
  build: {
    target: "ES2020",
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          gsap: ["gsap"],
          reactThree: ["@react-three/fiber", "@react-three/drei"],
        },
      },
    },
  },
  server: {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  },
});
