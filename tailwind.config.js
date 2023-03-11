module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "10.052rem",
      },
      colors: {
        "custom-white": "#ffe",
        browny: "#DCB16B",
        blk: "#1E1818",
        primary: "#fff",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
