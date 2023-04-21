module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    es2016: true,
    es2017: true,
    es2018: true,
    es2019: true,
    es2020: true,
    es2021: true,
    es2022: true
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },

  settings: {
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$"
    ],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx"]
      }
    }
  },

  rules: {
    // コンソールは warn, error 以外は警告
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"]
      }
    ],

    // いい感じに空行を入れる・改
    "padding-line-between-statements": [
      "error",
      { prev: "*", blankLine: "always", next: "return" },
      { prev: "*", blankLine: "always", next: "export" },
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
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      { prev: "*", blankLine: "always", next: "type" }
    ]
  }
};
