/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01adb5",
        secondary: "#0f141e",
        contrast: "#ffffff",
        success: "#127F5F",
        warning: "#EC8603",
        info: "#1265D0",
        error: "#CC2529"
      },
    },
  },
  plugins: [],
};
