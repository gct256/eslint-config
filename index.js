module.exports = {
  extends: [
    require.resolve("./base.js"),
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
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
