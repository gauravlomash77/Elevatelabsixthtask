/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#6366F1",
        secondary: "#F472B6",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
