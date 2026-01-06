/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-out forwards",
        fadeIn: "fadeIn 2s ease-in forwards",
      },
    },
  },
  extend: {
  keyframes: {
    slideIn: {
      "0%": { transform: "translateX(-100%)", opacity: "0" },
      "100%": { transform: "translateX(0)", opacity: "1" },
    },
    fadeIn: {
      "0%": { opacity: "0" },
      "100%": { opacity: "1" },
    },
  },
  animation: {
    slideIn: "slideIn 1s ease-out forwards",
    fadeIn: "fadeIn 2s ease-in forwards",
  },
},

  plugins: [],
};
