module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true
  },

  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx"]
      }
    }
  },

  rules: {
    // console は debug, warn, error のみ
    "no-console": [
      "error",
      {
        allow: ["debug", "warn", "error"]
      }
    ],

    // いい感じに空行を入れる
    "padding-line-between-statements": [
      "error",
      { prev: "*", blankLine: "always", next: "return" },
      { prev: "export", blankLine: "any", next: "export" },
      { prev: "*", blankLine: "always", next: "if" },
      { prev: "*", blankLine: "always", next: "const" },
      { prev: "const", blankLine: "always", next: "*" },
      { prev: "const", blankLine: "any", next: "const" },
      { prev: "*", blankLine: "always", next: "default" }
    ],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true }
    ],

    // 関数は const = ... の形式のみ
    "func-style": ["error", "expression"],

    // 引数のプロパティ変更はNG
    "no-param-reassign": [
      "error",
      {
        ignorePropertyModificationsFor: [],
        props: true
      }
    ],

    // importの拡張子は不要
    "import/extensions": ["error", "never"],

    // exportは名前付きのみ（default不可）
    "import/no-default-export": ["error"],
    "import/prefer-default-export": ["off"],

    // importの並べ替え
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          caseInsensitive: true,
          order: "asc"
        }
      }
    ],

    // typescriptのreturn typeは省略不可
    "@typescript-eslint/explicit-module-boundary-types": ["error"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true }
    ],

    // 使用しない変数はアンダースコア始まりならOK
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_"
      }
    ],

    // 定義前の使用はNG
    "no-use-before-define": ["off"],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: true,
        classes: true,
        typedefs: true,
        variables: true,
        enums: true
      }
    ],

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
