# Programming: Expressions

Different data types contain different kinds of values:

* **Strings**: "Hello, world!", "true", "50", ""
* **Booleans**: true, false
* **Numbers**: -1, 0, 50, 3.42

An _expression_ is something that evaluates to a value. For example, the `.length` property of a string evaluates to a number:

```js
"Hello, world!".length // 13
```

What's powerful about that you can use an expression and the value it evaluates to interchangeably. If you have a function that needs a number:

```js
function isGreaterThan10(number){
  return number > 10
}
```

You can call that function with a number:

```js
isGreaterThan10(13) // true
```

Or you can call it with any expression that evaluates to a number:

```js
const helloWorld = "Hello, world!"
isGreaterThan10(helloWorld.length) // true
```

Some examples of expressions:

* `1 + 5` is the same as `6`
* `6 + 8 * 42` is the same as `342`
* `4` is the same as `4`. Even though `4` is a simple value, it also technically evaluates to that value so it counts as an expression.
* `!someTruthyValue` is the same as `false`
* `theNumberTen / theNumberFive` is the same as `2`
* `[2, 4].includes(four)` is the same as `true`

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators) | MDN's guide to expressions |
| [MDN: Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) | MDN's reference for expressions |
| [Video: Expressions vs. Statements in Code](https://www.youtube.com/watch?v=WVyCrI1cHi8) | Codexpanse's guide to expressions and statements |
