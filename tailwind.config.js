/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        100: "100vh",
      },
      fontSize: {
        "8xl": "6rem",
      },
    },
  },
  plugins: [],
};
