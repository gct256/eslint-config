module.exports = {
  rules: {
    // 関数は const = ... の形式のみ
    "func-style": ["error", "expression"],

    // eslint-config-airbnb-base の no-restricted-syntax から ForOfStatement だけ除く
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message: "The `for` ... `in` statement should not be used."
      },
      {
        selector: "LabeledStatement",
        message: "The labeled statement should not be used."
      },
      {
        selector: "WithStatement",
        message: "The `with` statement should not be used."
      }
    ]
  }
};
