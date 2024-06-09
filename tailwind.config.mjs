/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      platinum: "#e7e5df",
      eerie_black: "#1c2321",
      asparagus: "#78a168",
      vermilion: "#de443f",
      flame: "#dc602e",
    },
    spacing: {
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
