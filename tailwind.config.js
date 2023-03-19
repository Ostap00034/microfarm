/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#16A34A",
        dark: "#0F172A",
        darkblue: "#162341",
        gray: "#7E8597",
        white: "#F3F4F6",
        black: "#000000",
      },
      fontFamily: {
        "gilroy-bold": ["Gilroy Bold", "sans-serif"],
        "gilroy-medium": ["Gilroy Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
