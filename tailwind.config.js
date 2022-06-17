/* eslint-disable global-require */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        modal: "modal 0.3s ease-in-out",
      },
      keyframes: {
        modal: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "100" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
