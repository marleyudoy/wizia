const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "560px",
      md: "760px",
      lg: "1024px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.6rem",
      },
    },
    extend: {
      colors: {
        primaryColor1: "#02242A",
        primaryColor2: "#07292F",
        primaryColor3: "#002228",
        secondaryColor1: "#0FF1F6",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
