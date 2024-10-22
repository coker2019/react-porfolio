module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "shadowTheme": "0px 6px 19px 6px rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
      colors: {
        "HeaderColor": "#4A5D58",
        "primaryBlack": "#192B0C",
        "primaryGreen": "#91B156",
        "primaryMustard": "#C3990F",
        "primaryAsh": "#828282",
        "white": "#ffffff",
        "red": "#F63434",
        "redOuter": "#F63434",
        "yellow": "#FFCA28",
        "yellowOuter": "#FFCA28",
        "blue": "#2F80ED",
        "blueOuter": "#2F80ED",
        "green": "#6BA740",
        "greenOuter": "#6BA740",
        "bgGreen": "#F5FEF1",
        "customGreen": "#284314",
        "lightGray": "#E0E0E0",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          "scrollbar-width": "none" /* Firefox */,
          "-ms-overflow-style": "none" /* IE and Edge */,
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          "display": "none" /* Chrome, Safari, Opera */,
        },
      });
    },
  ],
};