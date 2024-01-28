/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["var(--font-cormorant)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        sonja: {
          black: "#1E1E1E",
          "orange-100": "#F6ECE6",
          "orange-200": "#FF6600",
          blue: "#1E598F",
          gray: "#F7F7F7",
        },
      },
    },
  },
  plugins: [],
};
