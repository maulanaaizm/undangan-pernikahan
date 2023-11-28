/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      rouge: ["Rouge Script", "cursive"],
      baloo: ["Baloo Bhai 2", "sans-serif"],
    },
    extend: {
      colors: {
        clifford: "#da373d",
      },
      screens: {
        "2xl": "1320px",
      },
      animation: {
        progress: "progress",
      },
      keyframes: {
        progress: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};
