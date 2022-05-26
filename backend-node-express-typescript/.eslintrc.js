module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["plugin:@typescript-eslint/recommended", "standard"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/camelcase": "off",
    camelcase: "off",
    semi: [2, "always"],
  },
};
