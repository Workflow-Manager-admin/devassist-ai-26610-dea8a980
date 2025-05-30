module.exports = {
  darkMode: 'class', // enable toggling dark mode via 'dark' class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        kavia: {
          orange: "#E87A41",
          dark: "#1A1A1A",
          "dark-2": "#191D22",
          "dark-3": "#23272E",
          "dark-4": "#31343B",
        },
        primary: "#1a202c",
        secondary: "#2d3748",
        accent: "#38b2ac",
      },
      boxShadow: {
        kavia: "0 2px 16px 0 rgba(30, 34, 45, 0.22)"
      }
    },
    fontFamily: {
      sans: ["Inter", "Roboto", "Helvetica", "Arial", "sans-serif"]
    }
  },
  plugins: [],
}
