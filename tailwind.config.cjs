module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1200px" },
      lg: { max: "991px" },
      md: { max: "767px" },
      sm: { max: "550px" },
      xsm: { max: "375px" },
    },
    colors: {
      primary: "#D17E33",
      "header-border-color": "#413732",
      white: "#fff",
      "bg-cart-color": "#1f1c1a",
      "bg-side-cart-color": "rgba(0,0,0,0.8)",
      secondry: "#29201B",
      black: "rgba(0,0,0,0.6)",
    },
  },
  plugins: [],
};
