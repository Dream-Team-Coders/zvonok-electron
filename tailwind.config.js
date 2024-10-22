/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "DEFAULT": "#1B1B1B",
          "foreground": "#E0E0E0"
        },
        "secondary": {
          "DEFAULT": "#3E3E3E",
          "foreground": "#E0E0E0"
        },
        "accent": {
          "DEFAULT": "#1E90FF",
          "foreground": "#FFFFFF"
        },
        "highlight": {
          "DEFAULT": "#40E0D0",
          "foreground": "#1B1B1B"
        },
        "neutral": {
          "DEFAULT": "#E0E0E0",
          "foreground": "#1B1B1B"
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}

