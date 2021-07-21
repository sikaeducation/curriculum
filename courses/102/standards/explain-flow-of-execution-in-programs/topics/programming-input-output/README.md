# Programming: Input and Output

If programming is about transforming inputs into outputs, how do you collect inputs and how do you generate outputs?

## Input

There are a many ways to collect input:

* In a CLI program, input usually comes from flags, arguments, and the contents of other files
* In a web program, input usually comes from forms and user interactions
* In a data API program, input usually comes from HTTP requests
* In a hardware program, input usually comes from either passive sensors on the device or user interactions

These exercises will focus more on output than input for right now.

## Output

There are also many ways to generate output:

* In a CLI program, the output is usually printed to the terminal
* In a web program, the output is usually rendered to the screen or sent to a server as an HTTP request
* In a data API program, the output is usually an HTTP response
* In a hardware program, the output is usually some visualization or change in behavior of the device

## Logging in JavaScript

The easiest way to output to the screen with JavaScript is with `console.log`.

```js
const message = "Hello, world!"
console.log(message) // Prints "Hello, world!" to the screen
```

To open up the console in a browser:

* Mac: ⌘ + ⇧ + `j`
* Windows and Linux: `Control` + ⇧ + `j`

(image here)

This is where anything passed to `console.log` will be shown.

Note that you can also pass multiple things to `console.log` separated by commas:

```js
const one = 1
const two = 2
const three = 3
console.log(one, two, three) // Prints "1, 2, 3" to the screen
```

Logging is a great tool for inspecting the value of different variables and expressions at different points in a program's execution. For example:

```js
let message = "hello, world!"
message = titleCase(message)

console.log(message)

renderToPage(message)
```

This `console.log` can help inspect `message` if what's rendering on the page isn't what you expect.
