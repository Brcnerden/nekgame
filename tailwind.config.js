/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        blue100: "#15124f",
        white: "#f9f9f9",
        purple100: "#e5a5ff",
        purple300: "#5432d3",
        blue400: "#241e92",
        blue500: "#1a166d",
        blue700: "#0c0a32",
        beige100: "#817e7e33",
      },
    },
  },
  plugins: [],
};
