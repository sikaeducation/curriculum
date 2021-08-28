# Programming: Boolean Logic

Boolean logic is a type of math that's used to determine whether something is true or false. There are three basic boolean operators: AND, OR, and NOT.

## Boolean Operators

### AND

`AND` is a confirmation of two values. It's true if both values are true.

* `true AND true` is true
* `true AND false` is false
* `false AND true` is false
* `false AND false` is false

In many programming languages, `AND` is written as `&&`, so:

* `true && true` is true
* `true && false` is false
* `false && true` is false
* `false && false` is false

### OR

`OR` is an option between two values. It's true if either value is true.

* `true OR true` is true
* `true OR false` is true
* `false OR true` is true
* `false OR false` is false

In many programming languages, `OR` is written as `||`, so:

* `true || true` is true
* `true || false` is true
* `false || true` is true
* `false || false` is false

### NOT

`NOT` is a negation of one value. It's the opposite of whatever the value is.

* `NOT true` is false
* `NOT false` is true

In many programming languages, `NOT` is written as `!`, so:

* `!true` is false
* `!false` is true

### Logic Expressions

These three operators can be grouped together with `()` and combined to make logic expressions:

```
(true AND false) OR (true OR NOT true) = true
```

This simplifies to:

```
false OR (true OR false) = true
```

Then:

```
false OR true = true
```

Then:

```
true = true
```

This could also be written as:

```
(true && false) || (true || !true) = true
false || (true || false) = true
false || true = true
true = true
```

## Truthy and Falsy

In programming, the only values that are true and false are `true` and `false`. Many other values can be truthy or falsy; when used in boolean logic, they are treated as either true or false.

For example, in JavaScript:

* `false` is falsy, `true` is truthy
* An empty string (`""`) is falsy, every other string string is truthy
* `0` is falsy, every other number is truthy
* Every object (`{}`) and array (`[]`) is truthy, even if it's empty
* `null` and `undefined` are always falsy

So:

```
(true && false) || (true || !true) = true
```

And:

```
(1 && null) || ("hi" || !{ someProperty: false}) = true
```

Are effectively the same statement because:

* `1` is a non-zero number, so it's truthy
* `null` is always falsy
* `"hi"` is a non-empty string, so it's truthy
* `{ someProperty: false }` is an object, so it's truthy

## Additional Resources

| Resource | Description |
| --- | --- |
| [JavaScript Tutorial: `AND`, `OR`, and `NOT`](https://en.wikipedia.org/wiki/Boolean_algebra) | Wikipedia's article on Boolean Algebra |
| [MDN: Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion) | MDN's guide to booleans |
| [Wikipedia: Boolean Data Type](https://en.wikipedia.org/wiki/Boolean_data_type) | Wikipedia's guide to the boolean data type |
| [MDN: Logical OR)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR) | MDN's guide to `OR`|
| [MDN: Logical AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) | MDN's guide to `AND`|
| [MDN: Logical NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT) | MDN's guide to `NOT`|
| [MDN: Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) | MDN's guide to truthy values |
| [MDN: Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) | MDN's guide to falsy values |
| [MDN: Type Conversion](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion) | MDN's guide to type conversion |
| [Wikipedia: Boolean Algebra](https://en.wikipedia.org/wiki/Boolean_algebra) | Wikipedia's article on Boolean Algebra |
| [Video: Boolean Logic](https://www.youtube.com/watch?v=udOU0gagZqg) | Programming With Anthony's guide to Boolean logic |
