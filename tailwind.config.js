/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ["Satisfy", "cursive"],
        "PT-Sans-Narrow": ["PT Sans Narrow", "sans-serif"],
        "Bebas-Neue": ["Bebas Neue", "cursive"],
      },
      colors: {
        "pale-azure": "#97dffc",
        "tropical-indigo": "#858ae3",
        Iris: "#613dc1",
        Indigo: "#4e148c",
        "russia-violet": "#2C0735",
      },
      maxWidth: {
        vw: "1100px",
      },
    },
  },
  plugins: [],
};
