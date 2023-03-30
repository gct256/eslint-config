module.exports = {
  parser: "@typescript-eslint/parser",

  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    require.resolve("./base.js"),
    require.resolve("./alternate-base.js"),
    "prettier"
  ]
};
