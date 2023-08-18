module.exports = {
  parser: "@typescript-eslint/parser",

  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    require.resolve("./base.js"),
    "prettier"
  ],

  plugins: ["react-refresh"],

  rules: {
    // tsxを許可
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],

    // defaultPropsは不要（TypeScriptを使うので）
    "react/require-default-props": ["off"],

    // react コンポーネントには function declaration を使う
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "function-declaration",
        unnamedComponents: "arrow-function"
      }
    ],

    // コンポーネントのみexportする（viteなどのHMR対策）
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ]
  }
};
