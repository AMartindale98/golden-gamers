/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: ["./src/pages/**/*.jsx", "./src/components/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        "gamer-font": ["Share Tech Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
