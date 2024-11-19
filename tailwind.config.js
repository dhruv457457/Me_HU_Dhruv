module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        "slide-left": "slide-left 1.5s ease-in-out",
        "slide-up": "slide-up 1.5s ease-in-out",
        "bounce-slow": "bounce 4s infinite",
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};
