/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ffffff",
          dark: "#0a0a0a",
        },
        secondary: {
          light: "#f3f4f6",
          dark: "#1a1a1a",
        },
        accent: {
          light: "#0066ff",
          dark: "#00ff9d",
        },
        text: {
          light: "#1a1a1a",
          dark: "#ffffff",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 