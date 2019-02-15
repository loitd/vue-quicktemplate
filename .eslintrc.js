module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // Remove unsued vars warnings from eslint
    // https://eslint.org/docs/rules/no-unused-vars
    "no-unused-vars": ["error", { vars: "all", args: "none" }]
  },
  parserOptions: {
    parser: "babel-eslint",
    // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
    // Need this config for ignore error while run test
    "ecmaVersion": 6,
    sourceType: "module",
    allowImportExportEverywhere: true
  },
};
