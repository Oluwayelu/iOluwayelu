module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        indie: ["indie"],
        pacifico: ["pacifico"],
        poppins: ["poppins", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          100: "#32C5FF",
          200: "#0091FF",
          300: "#0F1642",
          400: "#0F1624",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#202125",
          200: "#16181d",
          300: "#0F1642",
          400: "#0a0b0e",
        },
        gray: {
          100: "#CBCBCB",
        },
        error: "#E02020",
        success: "#6CC070",
        warning: "#F7B500",
      },
    },
  },
  plugins: [],
};

