# ESLint

The most popular way to lint JavaScript is with ESLint.

## Installing

### Node Package

To install ESLint, run this command in your terminal

```bash
npm i -g eslint 
```

You only need to do this once, but it won't hurt anything if you do it more than once.

### Text Editor Plugin

You should also install an ESLint integration for your text editor. Here are some ESLint text editor integrations:

* [VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Vim](https://vimawesome.com/plugin/eslint)
* [Atom](https://atom.io/packages/linter-eslint)

This highlights errors in your text editor automatically.

### Project Configuration

For every project that you want to lint, you need an `.eslintrc.js` file in your root directory. For now, copy/paste this into it:

```js
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

## Using ESLint

Your text editor plugin will often do most of the work. Some other commands that may be useful:

```
# This command prints any errors
eslint .
```

```
# This command prints any errors and tries to automatically fix them as well
eslint --fix .
```

## Watch Out!

* This uses the global install of `eslint`, which is discouraged by the ESLint maintainers. This is appropriate for website development, but as you move on to web application development, you'll use a new installation of `eslint` for every project, and often use external style-guides by companies like AirBnB and Google. The principles are the same.
