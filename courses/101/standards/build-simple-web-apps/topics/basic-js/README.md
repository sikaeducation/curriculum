# Basic JS

JavaScript is a language for adding actions to web pages. For example, when we click the button in our MadLibs app, we want to read all the values out of the inputs and add them back to the page.

## JavaScript Variables

JavaScript variables are containers that keep values.

```js
const someVariableName = "Some message here"
```

We can declare variables with `const`, give the variable a name, and then set it equal to a value.

## DOM Methods

DOM methods are a way to read and write things to web pages.

```html
<input id="text-input" />
<output id="text-output"></output>
```

```js
const textInput = document.querySelector("#text-input").value
document.querySelector("#text-output").textContent = textInput
```

## JavaScript Functions

Functions are a way to group a bunch of things in JavaScript.

```js
// This says what the function does
function substituteWords(){
  const textInput = document.querySelector("#text-input").value
  document.querySelector("#text-output").textContent = textInput
}

// This actually executes it
substituteWords()
```
