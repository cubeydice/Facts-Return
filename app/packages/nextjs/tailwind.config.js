/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "scaffoldEthDark",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        scaffoldEth: {
          primary: "#2b5a26ff",
          "primary-content": "#FFFAFA",
          secondary: "#9DAA4B",
          "secondary-content": "#212638",
          accent: "#764134ff",
          "accent-content": "#212638",
          neutral: "#212638",
          "neutral-content": "#FFFAFA",
          "base-100": "#2b5a26ff", //header
          "base-200": "#FFFAFA", //input fields
          "base-300": "#2d2d2d",
          "base-content": "#FFFAFA",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#764134",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        scaffoldEthDark: {
          primary: "#2b5a26ff",
          "primary-content": "#F9FBFF",
          secondary: "#F9FBFF",
          "secondary-content": "#0f1f10ff",
          accent: "#764134ff",
          "accent-content": "#F9FBFF",
          neutral: "#F9FBFF",
          "neutral-content": "#385183",
          "base-100": "#0f1f10ff",
          "base-200": "#2A3655",
          "base-300": "#212638",
          "base-content": "#F9FBFF",
          info: "#385183",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
