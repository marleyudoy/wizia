const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:"560px",
      md:"760px",
      lg: "1024px",
      xl: "1240px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
      },
    },
    extend: {
      colors: {
        primaryColor1: "#02242A",
        primaryColor2: "#07292F",
        secondaryColor1: "#0FF1F6",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
