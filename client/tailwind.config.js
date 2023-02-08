/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#c4e3f0",
        bg_body: "#f3f2ef",
        input_bg: "#eef3f8",
        body_color: "rgba(0, 0, 0, 0.9)",
        icon_gray: "contrast(.001)",
        blue: "#0a66c2",
        _gray: "rgba(0,0,0,0.6)",
      },
      fontFamily: {
        primary:
          " system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      },
      fontSize: {
        body_font: "14px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
