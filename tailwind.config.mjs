/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      platinum: {
        DEFAULT: "#e7e5df",
        100: "#fafaf9",
        200: "#f5f5f2",
        300: "#f1efec",
        400: "#eceae5",
        500: "#e7e5df",
        600: "#c0bbab",
        700: "#999078",
        800: "#67614e",
        900: "#343127",
      },
      eerie_black: {
        DEFAULT: "#1c2321",
        100: "#cdd7d4",
        200: "#9bafaa",
        300: "#6b867e",
        400: "#43544f",
        500: "#1c2321",
        600: "#161b1a",
        700: "#101413",
        800: "#0b0e0d",
        900: "#050706",
      },
      asparagus: {
        DEFAULT: "#78a168",
        100: "#e4ece1",
        200: "#c9d9c3",
        300: "#aec6a5",
        400: "#93b487",
        500: "#78a168",
        600: "#608252",
        700: "#48623d",
        800: "#304129",
        900: "#182114",
      },
      vermilion: {
        DEFAULT: "#de443f",
        100: "#f8dad9",
        200: "#f2b4b2",
        300: "#eb8f8c",
        400: "#e56a66",
        500: "#de443f",
        600: "#c32721",
        700: "#931d19",
        800: "#621311",
        900: "#310a08",
      },
      flame: {
        DEFAULT: "#dc602e",
        100: "#f8dfd5",
        200: "#f1bfab",
        300: "#ea9f81",
        400: "#e37f58",
        500: "#dc602e",
        600: "#b5491f",
        700: "#883717",
        800: "#5b250f",
        900: "#2d1208",
      },
    },
    spacing: {
      none: "0",
      xs: "0.25rem", // 4px
      sm: "0.5rem", // 8px
      md: "1rem", // 16px
      lg: "1.5rem", // 24px
      xl: "2rem", // 32px
      "2xl": "3rem", // 48px
      "3xl": "4rem", // 64px
      "4xl": "6rem", // 96px
    },
    rounded: {
      xs: "0.25rem", // 4px
      sm: "0.5rem", // 8px
      md: "1rem", // 16px
      lg: "1.5rem", // 24px
      xl: "2rem", // 32px
      "2xl": "3rem", // 48px
      "3xl": "4rem", // 64px
      "4xl": "6rem", // 96px
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    fontFamily: {},
    fontWeight: {},

    extend: {},
  },
  plugins: [],
};
