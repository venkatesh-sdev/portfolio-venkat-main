/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Components/**/*.{html,js,jsx,ts,tsx}",
    "./Container/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          bodyText: "var(--body-text-color)",
          buttonText: "var(--button-text-color)",
          icon: "var(--icons-color)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--body-bg-color)",
          "button-bg": "var(--icons-color)",
          "hover-bg": "var(--hover-color)",
        },
      },
    },
  },
  plugins: [],
};
