# JavaScript: `async` / `await`

`.then` / `.catch` is one syntax for working with promises, but it's not the only one. These are equivalent:

```js
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => {
    return response.json()
  }).then(parsedResponse => {
    console.log(parsedResponse)
  })
```

```js
async function showPikachu(){
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  const parsedResponse = await response.json()
  console.log(parsedResponse)
}
```

`async` / `await` helps your asynchronous code look synchronous, which can make it easier to read and understand.

## `async` / `await`

To use `await` instead of `.then`, you need to be inside of an `async` function. To do this, add the word `async` in front of the `function` keyword:

```js
// A regular function
function someFunction(){
}

// An async function that can use await
async function someAsyncFunction(){
}
```

This will also work with all of the different function syntaxes:

```js
async function anAsyncFunction(){}
const anAsyncFunction = async function(){}
const anAsyncFunction = async () => {}
someElement.addEventListener(async event => {})
```

Once you're inside an `async` function, you can use the `await` keyword to use a promise the same way you would use a synchronous value:

```js
async function fetchSomeData(url){
  const response = await fetch(url)
  const parsedResponse = await response.json()

  return parsedResponse
}
```

Note that calling an async function is asynchronous:

```js
async function anAsyncFunction(){
  // Some async stuff
}

async function anotherAsyncFunction(){
  const result = await anAsyncFunction() // Needs to await to control flow
}
```

You can also mix and match `.then`/`.catch` and `async`/`await` since they're the same data type:

```js
async function anAsyncFunction(){
  const response = await fetch(someUrl).then(response => response.json())
  console.log(response)
}
```

## `try` / `catch`

Errors handling is less elegant in `async`/`await`. To handle errors, you need to use the built-in `try`/`catch` blocks:

```js
async function anAsyncFunction(){
  try {
    const response = await fetch(someUrl)
    const parsedResponse = await response.json()
  } catch (error){
    console.error(error.message)
  }
}
```

The browser will try to run all of the code in the `try` block. If any of it throws an error, it will move the `catch` block, with `error` representing an object with details about the error that occurred.

## Watch Out!

`async`/`await` is not a replacement for `.then`/`.catch`, it's an alternate syntax for working with promises. `async`/`await` comes with tradeoffs. You can come up with examples where `async`/`await` is clearly more readable:

```js
// .then / .catch
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => {
    return response.json()
  }).then(parsedResponse => {
    console.log(parsedResponse)
  })

// async/await
async function showPikachu(){
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  const parsedResponse = await response.json()
  console.log(parsedResponse)
}
```

However, `async`/`await` loses a lot of its readability advantage once errors are handled and more advanced syntax is used:

```js
// .then / .catch
const parsedResponse = response => response.json()
const url = "https://pokeapi.co/api/v2/pokemon/pikachu"

fetch(url)
  .then(parsedResponse)
  .then(console.log)
  .catch(console.error)

// async/await
async function showPikachu(){
  const url = "https://pokeapi.co/api/v2/pokemon/pikachu"

  let response
  try {
    response = await fetch(url)
    const parsedResponse = await response.json()
    return parsedResponse
  } catch (error) {
    console.log(error)
  }
}
```

There are great uses for both syntaxes and you should be fluent in both.

---

You can only `await` inside of an `async function`. So, this works:

```js
async function someFunction(){
  const response = await fetch(someUrl)
}
```

This will not:

```js
const response = await fetch(someUrl)
```

Nor will this:

```js
function someFunction(){
  const response = await fetch(someUrl)
}
```

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | MDN's reference on async functions |
| [MDN: Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) | MDN's reference on `await` |
| [MDN: Async/Await Tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) | MDN's tutorial on `async`/`await` |
| [Video: JavaScript Async Await](https://www.youtube.com/watch?v=V_Kr9OSfDeU) | Web Dev Simplified's guide to `async`/`await` |
