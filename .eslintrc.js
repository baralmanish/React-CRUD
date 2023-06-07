// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    // "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "@typescript-eslint"],
  rules: {
    // General
    // "no-console": "error",
    // "no-debugger": "error",

    // Import
    "import/no-cycle": 0,
    "import/no-named-as-default": 0,
    "import/no-unassigned-import": 0,

    // TypeScript
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": "error",
    "@typescript-eslint/no-implicit-any-catch": "error",
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "error",
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": ["error", { variables: false }],
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",

    // React
    "react/state-in-constructor": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-boolean-value": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/jsx-fragments": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-uses-react": "off",
    "react/prefer-stateless-function": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",

    "prettier/prettier": [
      "error",
      {
        jsxSingleQuote: false,
        endOfLine: "auto",
        spaceWidth: 2,
        singleQuote: false,
        semi: true,
        trailingComma: "es5",
        printWidth: 120,
        arrowParens: "avoid",
        parser: "typescript",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
