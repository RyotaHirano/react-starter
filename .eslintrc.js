module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: [
    "@typescript-eslint"
  ],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    "node/no-unsupported-features/es-syntax": "off",
    "no-dupe-class-members": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", {"args": "none"}],
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/no-namespace": ["error", {"allowDeclarations": true}],
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-object-literal-type-assertion": "error",
    // "@typescript-eslint/no-unnecessary-type-assertion": "error", // prettier error
    // "@typescript-eslint/restrict-plus-operands": "error", // prettier error
    "react/display-name": "off",
    "react/prop-types": "off"
  },
  settings: {
    node: {
      tryExtensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"]
    }
  }
}
