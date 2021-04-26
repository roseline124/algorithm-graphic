module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // https://tailwindcss.com/docs/customizing-spacing
    spacing: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "48px",
      8: "8px",
      9: "9px",
      10: "10px",
      12: "12px",
      14: "14px",
      15: "15px",
      16: "16px",
      18: "18px",
    },
    padding: theme => theme("spacing"), // p-8, p-9, ...
    margin: theme => theme("spacing"), // m-8, m-9, ...
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
