# ESLint

The most popular way to lint JavaScript is with ESLint. For every project that you want to lint, you need an `.eslintrc.js` file in your root directory that describes the rules you want to apply. For now, make the file in the root of the project directory and paste this into it:

```js
/* global module */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs" ],
    "camelcase": "error",
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": "error",
    "comma-style": "error",
    "func-call-spacing": "error",
    "indent": ["error", 2],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "max-len": "warn",
    "newline-per-chained-call": "error",
    "no-multiple-empty-lines": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "warn",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": "error",
    "object-curly-spacing": "error",
    "object-property-newline": "error",
    "one-var-declaration-per-line": "error",
    "operator-linebreak": "error",
    "padded-blocks": ["error", "never"],
    "prefer-object-spread": "error",
    "quote-props": ["error", "consistent-as-needed"],
    "quotes": ["error", "double"],
    "semi": ["error", "never"],
    "space-before-blocks": "error",
    "space-before-function-paren": "error",
    "space-in-parens": "error",
    "spaced-comment": "error",
    "switch-colon-spacing": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "no-shadow": "error",
    "no-useless-return": "error",
    "no-useless-concat": "error",
    "no-unused-expressions": "error",
    "no-self-compare": "error",
    "no-param-reassign": "error",
    "no-loop-func": "error",
    "no-lone-blocks": "error",
    "no-invalid-this": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-floating-decimal": "error",
    "no-empty-function": "error",
    "no-alert": "error",
    "eqeqeq": "error",
    "dot-notation": "error",
    "curly": "error",
    "consistent-return": "error",
    "array-callback-return": "error",
  },
}
```

## Text Editor Plugin

You should install an ESLint integration for your text editor. Here are some ESLint text editor integrations:

* [VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Vim](https://vimawesome.com/plugin/eslint)
* [Atom](https://atom.io/packages/linter-eslint)

These plugins highlights errors in your text editor automatically, and depending on how you configure them may automatically fix errors as well.

## Using ESLint

Text editor plug-ins will usually do most of the work, but these commands that may be useful as well:

```bash
# This command prints any errors
npx eslint .

# This command prints any errors and tries to automatically fix them as well
npx eslint --fix .
```

## Additional Resources

| Resource | Description |
| --- | --- |
| [Video: ESLint Quickstart](https://www.youtube.com/watch?v=qhuFviJn-es) | FreeCodeCamp's guide to ESLint |
