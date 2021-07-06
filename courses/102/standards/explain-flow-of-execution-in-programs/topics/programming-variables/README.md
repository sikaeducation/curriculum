# Programming: Variables

A variable assignment statement is made of a few parts:

```js
const name = "Erin"
```

* `const` - This is the variable keyword. In these exercises, it will always be either `let` or `const`.
* `name` - This is the name of the variable. You get to pick this. It's how this variable will be referred to throughout the program.
* `=` - This is the assignment operator. It's important to note that this is the **only** use of this symbol in most programming languages. It does say that two things are equal (that's usually `==` or `===`) like it does in math, but rather that the variable name should be assigned the value.
* `"Erin"` - This is the value that will be stored in the variable name.

## Variable Keywords

Most of the variables you work with in programming don't change once they're set. This is handled differently in every language, but for now you'll use `const` to represent these.

Sometimes, a variable has one value at one point in time, and a different value at a later point in time. These are also handled differently in every language (and sometimes disallowed entirely), but for now you'll use `let` to represent these.

## Variable Names

Variable names should be succinct and descriptive.

* Use complete words. Your code doesn't run faster, look more professional, or take appreciably less time to type if you abbreviate words ("prgrmmrAbbrevs"), use nonsense words ("foo"), or use single letters ("x"). It just makes them harder to read, pronounce, and remember.
* Don't include the type in the name. Call a name `name`, not `nameString` or `nameStr`.

## Variable Values

Variables can usually contain any legal value (such as string, number, or boolean) the language supports.

Variables declared with `const` always need an initial value. Variables declared with `let` may have optionally an initial value.

To change a variable, reference it by name and use the assignment operator:

```
let someNumber = 1
console.log(someNumber) // 1

someNumber = 2
console.log(someNumber) // 2
```

## Copying Variables

If you assign a string, number, or boolean to a variable and make a copy of that variable, you will make separate copy of that value.

```js
let a = 1
let b = a
b = 2

console.log(a, b) // 1, 2
```

## Watch Out!

* You need to declare a variable before you can use it.
* `let` and `const` are needed to declare variables, but they're not needed for reassigning the value of a variable.
