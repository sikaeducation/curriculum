# Programming: Boolean Logic

Boolean logic is a type of math that's used to determine whether something is true or false.

## Boolean Operators

There are three basic boolean operators: AND, OR, and NOT.

### NOT

`NOT` is a negation of one value. It is the opposite of whatever the value is.

* `NOT true` is false
* `NOT false` is true

In many programming languages, `NOT` is written as `!`, so:

* `!true` is false
* `!false` is true

### AND

`AND` is a confirmation of two values. It is true if both values are true.

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

`OR` is an option between two values. It is true if either value is true.

* `true OR true` is true
* `true OR false` is true
* `false OR true` is true
* `false OR false` is false

In many programming languages, `OR` is written as `||`, so:

* `true || true` is true
* `true || false` is true
* `false || true` is true
* `false || false` is false

### Logic Expressions

These three operators can be combined to make sentences.

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

In programming, the only values that are true and false are `true` and `false`. Many other values can be "truthy" or "falsy"; when used in boolean logic, they are treated as either true or false.

For example, in JavaScript:

* An empty string (`""`) is considered falsy, every other string string is considered truthy
* `0` is considered falsy, every other number is considered truthy
* Every object (`{}`) and array (`[]`) is considered truthy
* `null` and `undefined` are always considered falsy

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
