/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#ee0181",
        anuj: "#01ee91",
      },
      fontFamily: {
        "anuj-font": ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
