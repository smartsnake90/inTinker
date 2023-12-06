/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        sm: "20px",
        md: "30px",
      },
      lineHeight: {
        sm: "28px",
      },
      colors: {
        "regal-orange": "#F3762B",
      },
      maxWidth: {
        sm: "400px",
        lg: "1350px",
      },
    },
  },
};
