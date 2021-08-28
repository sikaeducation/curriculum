# Programming: Variables

A variable assignment statement is made of a few parts:

```js
const firstName = "Erin"
```

* **`const`**: This is the variable keyword, either `let` or `const`.
* **`firstName`**: This is the name of the variable. You get to pick this. It's how this variable will be referred to throughout the program.
* **`=`**: This is the assignment operator. It's important to note that this is the only use of this symbol in JavaScript. It does say that two things are equal (that's `===`) like it does in math, but rather that the variable name should be given the value.
* **`"Erin"`**: This is the value that will be given to the variable name.

## Variable Keywords

Despite the name, most variables don't change once they're set. Use `const` to represent these.

```js
const pi = 3.14159
```

Sometimes, a variable has one value at one point in time, and a different value at a later point in time. Use `let` to represent these.

```js
let name = "Saul"
name = "Paul"
```

## Variable Names

Variable names should be succinct and descriptive. Some guidelines:

* Use complete words. Your code doesn't run faster, look more professional, or take appreciably less time to type if you abbreviate words ("prgrmmrAbbrevs"), use nonsense words ("foo"), or use single letters ("x"). It just makes them harder to read, pronounce, and remember.
* Don't include the type in the name. Call a name `name`, not `nameString` or `nameStr`.

## Variable Values

Variables can contain any value, and variables declared with `const` always need an initial value. Variables declared with `let` may have optionally have an initial value.

To change a variable, reference it by name and use the assignment operator:

```js
let someNumber = 1
console.log(someNumber) // Prints "1" to the screen

someNumber = 2
console.log(someNumber) // Prints "2" to the screen
```

## Copying Variables

If you assign a string, number, or boolean to a variable and make a copy of that variable, you will make separate copy of that value.

```js
let a = 1
let b = a
b = 2

console.log(a, b) // Prints "1, 2" to the screen
```

## Watch Out!

* You need to declare a variable before you can use it.
* `let` and `const` are needed to declare variables, but they're not needed for reassigning the value of a variable.

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: Storing the information you need](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables) | MDN's tutorial on variables |
