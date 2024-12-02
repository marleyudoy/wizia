/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
  plugins: [],
};
