/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f2a44",
        secondary: "#1b4f72",
        accent: "#f4b41a"
      }
    }
  },
  plugins: []
}
