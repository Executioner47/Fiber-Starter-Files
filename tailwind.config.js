/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "--clr-primary": "#4d13d1",
        "--clr-light-primary": "#875fdc",
        "--clr-light-gray": "#fbf8f3",
        "--clr-teal": "#45b19e",
        "--clr-orange": "#ff962a",
      },
      fontFamily: {
        cfont: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
