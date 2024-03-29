/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#cccccc",
        "primary-200": "#999999",
        "primary-300": "#666666",
        "primary-400": "#333333",
        "primary-500": "#000000",
        "primary-600": "#000000",
        "primary-700": "#000000",
        "primary-800": "#000000",
        "primary-900": "#000000",
        "secondary-100": "#f7ccd2",
        "secondary-200": "#ef99a4",
        "secondary-300": "#e66677",
        "secondary-400": "#de3349",
        "secondary-500": "#d6001c",
        "secondary-600": "#ab0016",
        "secondary-700": "#800011",
        "secondary-800": "#56000b",
        "secondary-900": "#2b0006",
        "neutral-100": "#f5f5f5",
        "neutral-200": "#ecebeb",
        "neutral-300": "#e2e1e1",
        "neutral-400": "#d9d7d7",
        "neutral-500": "#cfcdcd",
        "neutral-600": "#a6a4a4",
        "neutral-700": "#7c7b7b",
        "neutral-800": "#535252",
        "neutral-900": "#292929",
      },
    },
  },
  plugins: [],
});
