module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', "prettier", "@typescript-eslint", "cypress", "chai-friendly", "no-only-tests"],
  extends: [
    'plugin:@typescript-eslint/recommended',
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:chai-friendly/recommended",
    "plugin:cypress/recommended",
    'plugin:prettier/recommended',
    "prettier"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    "cypress/globals": true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "no-only-tests/no-only-tests": "error",
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "prettier/prettier": 2,
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
