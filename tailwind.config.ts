import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#243e28", // main brand green
          600: "#1d3321", // hover / active
        },
        secondary: {
          500: "#6b8f71", // lighter green
        },
        background: "#f3f4e1",
        foreground: "#243e28",
      },
      fontFamily: {
        sans: ["var(--font-oxygen)", "Inter", "system-ui", "sans-serif"],
        kaisei: ["var(--font-kaisei)", "serif"],
        oxygen: ["var(--font-oxygen)", "sans-serif"],
        belluga: ["var(--font-bellota)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
