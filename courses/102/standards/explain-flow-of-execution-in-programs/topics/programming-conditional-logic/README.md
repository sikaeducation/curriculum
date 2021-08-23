# Programming: Conditional Logic

One of the fundamental things every programming language must do is allow for some code to run sometimes, and other code to run other times. The most straight-forward way to control this is with conditional logic.

## `if`

`if` is the most basic form of conditional logic. If an expression given to `if` is `true` or truthy, the code in the `if` block runs:

```js
if (true){
  console.log("This will always print")
}
```

If its `false` or falsy, it won't run:

```js
if (false){
  console.log("This will never print")
}
```

The power in conditional logic comes from combining them with Boolean expressions:

```js
const zipCode = "802394"
if (zipCode.length !== 5){
  console.log("Please enter a 5 digit ZIP code.")
}
```

## `else`

If an `if` condition fails, you may want to specify an alternate behavior. You can do this with `else`:

```js
if (zipCode.length === 5){
  console.log("Your shipping estimate is being calculated now.")
} else {
  console.log("Please enter a 5 digit ZIP code.")
}
```

You can always be sure that one of the two blocks will run.

## `else if`

You can also specify multiple conditions with `else if`:

```js
if (zipCode.length === 5){
  console.log("Your general shipping estimate is being calculated now.")
} else if (zipCode.length === 10){
  console.log("Your specific shipping estimate is being calculated now.")
} else {
  console.log("Please enter a 5 or 9 digit ZIP code.")
}
```

## Watch Out!

The most common mistake you're likely to make when using comparisons in conditional logic is to mix up the assignment operator (`=`) with one the comparison operator (`===`). In some languages, the result of an assignment is `undefined`, so this will never run:

```js
const zipCode = "80239"
if (zipCode.length = 5){
  console.log("No chance")
}
```

---

If you reverse the condition of an `if` statement, you can reorder the blocks. These two are the same:

```js
if (zipCode.length === 5){
  console.log("Your shipping estimate is being calculated now.")
} else {
  console.log("Please enter a 5 digit ZIP code.")
}

if (zipCode.length !== 5){
  console.log("Please enter a 5 digit ZIP code.")
} else {
  console.log("Your shipping estimate is being calculated now.")
}
```

In general, it's usually easier to read negative cases first and the ideal case last.
