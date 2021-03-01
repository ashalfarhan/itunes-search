module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: [`'Poppins', sans-serif`]
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      borderColor: ["hover", "focus"],
      scale: ["hover", "focus"]
    }
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
      // TypeScript
      "plugins/**/*.ts",
      "nuxt.config.ts"
    ]
  }
};
