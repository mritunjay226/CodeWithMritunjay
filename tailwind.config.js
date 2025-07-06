/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ enable dark mode via class

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 12px rgba(255, 255, 255, 0.5)",
        glowGradient:
          "0 0 10px rgba(59,130,246,0.5), 0 0 20px rgba(168,85,247,0.4), 0 0 30px rgba(59,130,246,0.3)",
      },
      fontFamily: {
        ibm: ["'IBM Plex Sans Arabic'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
