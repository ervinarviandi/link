const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        backgrounddark: "#111111",
        background: "#f6f8fd",
        primarygray: "#a8a8a8",
        primary: "#b4b4b4",
        secondary: "#e5e9f2",
      },
    },
  },
  plugins: [
    // plugin(function ({ addUtilities }) {
    //   const utilities = {
    //     ".bg-hero": {
    //       "background-image": "url(/myweb.jpg) ",
    //     },
    //   };
    //   addUtilities(utilities);
    // }),
  ],
};
