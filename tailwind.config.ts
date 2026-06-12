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
          DEFAULT: "#DD6A33",
          dark: "#B85220",
          light: "#F4AC85",
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
        joy: {
          50: "#FFFAEC",
          100: "#FFF1CD",
          200: "#FCE198",
          300: "#F8C95F",
          400: "#F3B232",
          500: "#E29318",
          600: "#C0731A",
          700: "#9B581C",
          800: "#75421C",
          900: "#502E16",
        },
        sage: {
          50: "#F2F7F2",
          100: "#E0ECDF",
          200: "#C3DBC1",
          300: "#9DC59C",
          400: "#71AB73",
          500: "#52905A",
          600: "#3F7547",
          700: "#345B3A",
          800: "#2B4830",
          900: "#1F3324",
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
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "bounce-soft": "bounceSoft 2.4s ease-in-out infinite",
        shine: "shine 3.5s ease-in-out infinite",
        "gradient-shift": "gradientShift 12s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.85", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "60%, 100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
