# Programming: Expressions

You know about values:

* **Strings**: "Hello, world!", "true", "50", ""
* **Booleans**: true, false
* **Numbers**: -1, 0, 50

An expression is something that evaluates to a value.

## Expressions

For example, the `.length` property of a string evaluates to a number:

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

* `1 + 5`, `6 + 8 * 42`, `4`
* `!someVariable`
* `someVariable / someOtherVariable`
* `[2, 4].includes(someNumber)`
