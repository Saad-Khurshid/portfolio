module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: {
      current: "currentColor",
    },
    extend: {
      fontFamily: {
        body: ["Open Sans"],
        logo: ["Audiowide"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          dark: "#063978",
          DEFAULT: "#0d73f1",
          light: "#d3dfe5", //"#86b9f8",
        },
        secondary: "#fffffe",
      },
      boxShadow: {
        navShadow:
          "rgba(0, 0, 0, 0.22) 0px 3px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px;",
      },
    },
  },
  variants: {
    extend: {
      cursor: ["hover"],
      transitionProperty: ["hover", "focus"],
      backgroundColor: ["active"],
      fill: ["hover", "focus"],
    },
  },
  plugins: [],
};
