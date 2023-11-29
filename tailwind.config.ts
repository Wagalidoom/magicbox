import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode
        'primary-light': '#FFA726', // Orange
        'secondary-light': '#29B6F6', // Light Blue
        'background-light': '#FAFAFA', // Off White
        'foreground-light': '#002839', // Dark Grey
        'accent-light': '#FFEE58', // Yellow
        'tertiary-light': '#F0EAE3', // Beige


        // Dark Mode
        'primary-dark': '#FFB74D', // Bright Orange
        'secondary-dark': '#4FC3F7', // Brighter Blue
        'background-dark': '#121212', // Dark Grey
        'foreground-dark': '#E0E0E0', // Light Grey
        'accent-dark': '#FFFF72', // Bright Yellow
        'tertiary-dark': '#2E2E2E', // Charcoal
      },
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
