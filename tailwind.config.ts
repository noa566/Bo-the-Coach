import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#FBF7F1",
          100: "#F5EFE6",
          200: "#EADFCD",
          300: "#DDC9A8",
          400: "#CDAE83",
          500: "#C19868",
          600: "#B0844F",
          700: "#8E6A40",
          800: "#6D5232",
          900: "#4D3A24",
        },
        bo: {
          DEFAULT: "#C8A37C",
          dark: "#A88359",
          light: "#E2CCAE",
        },
        accent: {
          50: "#F4EEFB",
          100: "#E8DEF8",
          200: "#D4B5F0",
          300: "#BA94E5",
          400: "#A074E8",
          500: "#8B5CD6",
          600: "#724AB8",
          700: "#5A3A93",
          800: "#42286F",
          900: "#2B194B",
        },
        ink: {
          DEFAULT: "#2C2C2C",
          soft: "#4A4A4A",
          muted: "#6B6B6B",
          light: "#9A9A9A",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "fade-in-up": "fadeInUp 0.9s ease-out",
        "slow-zoom": "slowZoom 20s ease-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
