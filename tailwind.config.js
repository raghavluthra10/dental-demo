/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        marigold: "#E8841A",
        ivory: "#FAF6F0",
        burgundy: "#7B1E3E",
        gold: "#C9A84C",
        charcoal: "#1A1A1A",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right bottom, #7B1E3E, #E8841A, #C9A84C)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
