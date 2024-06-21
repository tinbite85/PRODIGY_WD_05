/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Weather_app.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
        colors: {
          "primary-color": "#000000",
          "secondary-color": "#ffffff",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    container: {
      padding: "10px",
      center: true,
    },

  plugins: [],
}

