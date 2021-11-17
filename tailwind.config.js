module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backdrop: "#121212",
        primary: "#1db954",
        active: "#282828",
        footer: "#181818",
        link: "#b3b3b3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
