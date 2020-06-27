module.exports = {
  root: true,
  parserOptions: {
    "parser": "babel-eslint"
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:tailwind/recommended"
  ],
  plugins: [
    "vue"
  ],
};