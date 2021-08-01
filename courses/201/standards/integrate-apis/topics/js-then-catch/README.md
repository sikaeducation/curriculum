# JavaScript: `.then` / `.catch`

When making calling an asynchronous function like `fetch`, how do you control the sequence of execution? HTTP requests can take a while to come back, and you don't want to freeze the browser while you wait. `fetch` returns a promise, which is a data type that represents a value that we don't have yet but expect to have in the future. If you want to do something that depends on that data, you need to indicate that by putting it in a `.then` handler.

```js
fetch(someUrl)
  .then(response => {
    return response.json()
  }).then(parsedResponse => {
    console.log(parsedResponse)
  })
```

The syntax can appear confusing when you write the handlers inline, but `.then` always takes a function definition:

```js
fetch(someString)
  .then(someFunctionDefinition)
  .then(someFunctionDefinition)
  .then(someFunctionDefinition)
```

That means the original example could be rewritten like this:

```js
const url = "https://pokeapi.co/api/v2/pokemon/pikachu"
function parseResponse(response){
  return response.json()
}
function logParsedResponse(parsedResponse){
  console.log(parsedResponse)
}

fetch(url)
  .then(parseResponse)
  .then(logParsedResponse)
```

Each successive `.then` handler function will be called with whatever the previous one returned. While the first thing in the chain (`fetch` in this case) must return a promise, every function after that can return a promise, a chain of promises, or static values:

```js
fetch(someUrl) // Promise
  .then(() => {
    return 5 // Static value
  }).then(theNumberFive => {
    console.log(theNumberFive) // 5

    return fetch(anotherUrl)
      .then(response => response.json()) // Chain of promises
  }).then(responseFromTheSecondFetch => {
    console.log(responseFromTheSecondFetch)
  })
```

## `.catch`

If something goes wrong with a promise, how will you find out?

```js
fetch(someUrl)
  .then(response => response.json())
  .then(parsedResponse => {
    console.log(parsedResponse)
  }).catch(error => {
    console.error(error.message)
  })
```

`.catch` also takes a function definition, and if any error occurs anywhere in the `.then` chain before it, the `.catch` block will be called with details about the error.

You can throw your own errors with `throw new Error()`:

```js
fetch(someUrl)
  .then(response => {
    if (!response.ok){
      throw new Error(`The response failed: ${response.statusMessage}`)
    }
    response.json()
  })
  .then(parsedResponse => {
    console.log(parsedResponse)
  }).catch(error => {
    console.error(error.message)
  })
```

In the example, if the HTTP request returns any status code 400 or greater, control will move to the `.catch` block.

## Watch Out!

If later `.then`s require data from previous `.then`s, they need to be nested so they can be accessed within scope:

```js
fetch(url1)
  .then(response => response.json())
  .then(parsedResponse1 => {
    return fetch(url2)
      .then(response => response.json())
      .then(parsedResponse2 => {
        console.log(parsedResponse1, parsedResponse2) // parsedResponse1 is still in scope because it's nested
      })
  })
```

This works because you can return chains of promises in any promise handler.

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) | MDN promise reference |
| [MDN: `.then`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) | MDN `.then` reference |
| [MDN: `.catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) | MDN `.catch` reference |
| [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) | MDN guide to using promises |
