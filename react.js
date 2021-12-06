module.exports = {
  extends: [
    require.resolve("./base.js"),
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    // tsxを許可
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],

    // defaultPropsは不要（TypeScriptを使うので）
    "react/require-default-props": ["off"],

    // reactコンポーネントにはarrow functionを使う
    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function", unnamedComponents: "arrow-function" }
    ]
  }
};
