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
          DEFAULT: "#C97A4F",
          dark: "#A4542E",
          light: "#EBBC9C",
        },
        accent: {
          50: "#F3EEFE",
          100: "#E5DBFD",
          200: "#CFBCFB",
          300: "#B398F8",
          400: "#9D6BFF",
          500: "#7C3AED",
          600: "#6D28D9",
          700: "#5B21B6",
          800: "#4C1D95",
          900: "#2E1065",
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
