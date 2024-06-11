/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@ooakt/eslint-config/qwik.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};