/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        DMsans: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('/src/assets/bg.svg')",
      },
    },
  },
  plugins: [],
};
