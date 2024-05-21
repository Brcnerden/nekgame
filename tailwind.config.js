/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        blue100: "#15124f",
        white: "#f9f9f9",
        white200: "#ffffff33",
        "white-10": "hsla(0, 0%, 100%, .1)",
        purple100: "#e5a5ff",
        purple300: "#5432d3",
        blue300: "rgba(84, 50, 211, 1)",
        blue400: "#241e92",
        blue500: "#1a166d",
        blue600: "rgba(21, 18, 79, 1)",
        blue700: "#0c0a32",
        beige100: "#817e7e33",
        "blue500-90": "rgba(12, 10, 50, .9)",
        "black500-60": "rgba(0, 0, 0, 0.6)",
        "pink100-75": "rgba(229, 165, 255, .75)",
        pink200: "#e5a5ff",
        pink100: "rgba(229, 165, 255, 1)",
        black500: "rgba(0, 0, 0, 1)",
        "blue300-30": "rgba(84, 50, 211, .3)",
        "blue600-80": "rgba(21, 18, 79, .8)",
      },
    },
  },
  plugins: [],
};
