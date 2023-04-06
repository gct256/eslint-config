module.exports = {
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    require.resolve("./base.js"),
    require.resolve("./use-airbnb-base.js"),
    "prettier"
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".mjs", ".ts"]
      }
    }
  },
  rules: {}
};