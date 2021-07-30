# JavaScript: Strings

Strings are one of the basic types in JavaScript. The most common things you'll do with strings include:

* [Declaring strings](#Declaring-Strings)
* [Including special characters](#Including-Special-Characters)
* [Including JavaScript expressions in strings](#Including-JavaScript-Expressions-In-Strings)
* [Getting part of a string](#Getting-Part-Of-A-String)
* [Determining if one string is in another](#Determining-If-One-String-Is-In-Another)
* [Replacing a part of a string](#Replacing-A-Part-Of-A-String)
* [Creating multiline strings](#Creating-Multiline-Strings)

## Declaring Strings

There are 3 ways to make a string in JavaScript:

```js
const singleQuotes = 'This is a string'
const doubleQuotes = "This is a string"
const backTicks = `This is a string`
```

They are mostly equivalent, although backticks allow string interpolation and multiple lines.

## Including Special Characters

If you declare a string with double quotes, how do you include the `"` character in the string?

```js
const message = "As they say, \"When in Rome\""
```

Putting the `\` before a character "escapes" it, which keeps JavaScript from considering it part of JavaScript syntax. There are also "escape sequences" that include things like newlines (`\n`) and tabs (`\t`).

## Including JavaScript Expressions In Strings

Also called template literals, strings that are declared with backticks allow you to embed JavaScript variables and expressions in the string:

```js
const firstName = "Herbie"
const lastName = "Hancock"
const message = `Hello, my name is ${firstName} ${lastName}`

console.log(message) // "Hello, my name is Herbie Hancock"
```

Inside of backticks, the `${}` characters denote that the JavaScript inside should be executed and the result should be put in the string. Simple variables are the most common, but any expression is valid.

## Getting Part of a String

A part of a string is called a substring. To get one, use the `.slice` method:

```js
const string = "Hello, world!"
const substring = string.slice(0, 4) // "Hello"
```

`.slice` takes a starting index and an ending index. Note that both of these are zero-based, like arrays.

## Determining If One String Is In Another

The easiest way to see if one string includes another string is with `.includes`:

```js
const needle = "oo"
const haystack = "Look at this!"

isMatch = haystack.includes(needle)

console.log(isMatch) // true
```

## Replacing a Part of a String

You can replace part of a string with `.replace()`:

```js
const message = "Hello, my name is Herbie Hancock"
const newMessage = message.replace("Herbie Hancock", "Dave Weckl")

console.log(newMessage) // "Hello, my name is Dave Weckl"
```

## Creating Multiline Strings

Strings that use quotes can't take up more than one line:

```js
const someString = "And a one
And a two
And a one
two
three" // Error
```

Within strings, the `\n` character indicate that a string should include a line break when displayed:

```js
const someString = "And a one\nAnd a two\nAnd a one\ntwo\nthree"
```

Additionally, backticks do allow multiple lines:

```js
const someString = `And a one
And a two
And a one
two
three`
```

## Watch Out!

You can also build strings with concatenation:

```js
const firstName = "Herbie"
const lastName = "Hancock"
const message = "Hello, my name is " +  firstName + " " + lastName

console.log(message) // "Hello, my name is Herbie Hancock"
```

Historically, this was the only way to accomplish this. Unforunately, it's difficult to read and easy to make mistakes writing strings this way, especially with spaces. With the wide support of template literals, there is no reason to use string concatenation anymore.
