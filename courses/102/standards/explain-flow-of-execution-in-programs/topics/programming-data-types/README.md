# Programming: Data Types

Any piece of data in programming has two characteristics: A value and a type.

* `5` - The value is 5 and the type is "number"
* `"5"` - The value is 5 and the type is "string"
* `true` - The value is true and the type is "boolean"

## Common Data Types

There are three basic (sometimes called "primitive") data types.

### Strings

A collection of characters. All of these are examples of strings:

* `"Hello, world!"`
* `"H"`
* `"500"`
* `"true"`
* `"false"`
* `"0"`
* `""`
* `"The entire text of the novel 'The Great Gatsby' by F. Scott Fitzgerald."
* `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`

Strings can be short, long, or even completely empty, and they can contain any characters or words. The easiest way to tell if something is a string is to look for surrounding quotes.

#### Escape Characters and Sequences

How do you make a string with quotation marks in it?

```js
const message = "This is Jill's message: "See you at 8!""
```

If you try to run this as written, you'll end up with:

* The string `"This is Jill's message: "`
* The JavaScript `See you at 8!`, which will likely cause an error immediately because `See` is not a valid JavaScript command
* The string `""`

The solution is to use an escape character:

```js
const message = "This is Jill's message: \"See you at 8!\""
```

In many languages, `\` functions as an escape character in strings. When you put the `\` in front of a character that might otherwise have a special meaning, it removes the special meaning and becomes a normal character again. You escape the escape character by repeating it: `\\` will display as `\`.

The escape character is also used in escape sequences:

```
const message = "Dear Beverly,\n\nI hope this letter finds you well.\nIt has been many days and nights since our last communication,"
```

The `\n` character is an escape sequence that creates a new line. The above string will print like this:

```
Dear Beverly,

I hope this letter finds you well.
It has been many days and nights since our last communication,
```

#### Quotes

In many languages, it doesn't matter if you use single quotes `'` or double quotes `"`.

```js
const someString = "This is a string with double quotes"
const anotherString = 'This is a string with single quotes.'
```

If you use double quotes for strings, you'll get apostrophes for free:

```js
const message = "This is Jill's message"
```

On the other hand, you'll need to escape quotation marks:

```js
const message = "This is Jill's message: \""See you at 8!\""
```

If you use single quotes for strings, you have to escape apostrophes:

```js
const message = 'This is Jill\'s message'
```

But you'll get quotation marks for free:

```js
const message = 'This is Jill\'s message: "See you at 8!"'
```

### Numbers

Numbers represent things you can do math with. All of these are examples of numbers:

* `1`
* `0`
* `-1`
* `6.0`
* `13453834`
* `-2342.2342`

Many languages have several different types for numbers. For now, we'll just focus on one.

Any number value can be either a number type or a string type. For example, `5` is the value 5 as a number type, while `"5"` is the value 5 as a string type. Which type you use for a number depends on what kinds of operations you want to do with it. If you could conceivably do math with it (like an age), it should be a number type. If you're displaying or formatting a value, or if the numbers aren't used for math (like a phone or social security number), it should be a string.

### Booleans

Booleans are either `true` or `false`. They get used in Boolean logic, indicating whether an option or checkbox has been selected, or storing whether some condition has been met.

## Type Operations

One of the defining features of types is they dictate what kinds of operations can be performed on the values.
b
* You can get a count of the number of characters in a string by calling `.length`; `"Hello!".length` is `6`
* You can perform math operations on numbers; `9 / 3` is `3`, `3 * 4` is 12, and so on.
* You can perform Boolean operations and comparisons on booleans; `true || false` is `true`, `6 >= 10` is `false`

## Type Coercion

Type coercion is keeping the value of a piece of data but changing the type.

* To coerce a string into a number, put a `+` in front of it; `+"5"` is `5`
* To coerce a number into a string, call `.toString()` on it; `1234.toString()` is "1234"
* To coerce a string or number into a boolean, put `!!` in front of it; `!!"Hello, world!"` is `true`
* Booleans generally shouldn't be turned into numbers or strings

There are other ways to do these coercions in JavaScript and even more variety in other languages, but these will get you started.
