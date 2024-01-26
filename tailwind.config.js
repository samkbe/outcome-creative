/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: "#E9DABFCC",
        grey: {
          100: "#EEEEEE",
          200: "#BBBBBB",
          300: "#999999",
          400: "#666666",
          500: "#333333",
        },
      },
      backgroundImage: {
        "tan-gradient":
          "linear-gradient(to top, #D2B48C, #D2B48C 20%, transparent 20%, transparent)",
      },
      minHeight: {
        aboveFold: "calc(100vh - 67px)",
        "aboveFold-md": "calc(100vh - 96px)",
      },
      gridTemplateColumns: {
        heroGridCols: "9% 11% 14% 17% 22% 27%",
      },
      gridTemplateRows: {
        heroGridRows: "18% 22% 27% 34%",
      },
      animation: {
        scroll: "scroll 80s linear 0s infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50%))" },
        },
      },
    },
  },
  plugins: [],
};
