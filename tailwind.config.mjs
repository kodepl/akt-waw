import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        paper: "#f4efe4",
        navy: "#0c2340",
        stamp: "#a31621",
        chalk: "#e8e2d4",
        slate: "#4a5563",
        line: "#c9c0ae",
      },
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        sans: ["Public Sans", "Segoe UI", "sans-serif"],
        mono: ["IBM Plex Mono", "Consolas", "monospace"],
      },
    },
  },
  plugins: [typography],
};
