/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        oldPhone: "150px",
        android: "375px",
      },
    },
  },
  plugins: [],
};
