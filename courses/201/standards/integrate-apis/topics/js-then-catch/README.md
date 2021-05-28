# JavaScript: `.then` / `.catch`

The things that come after a `fetch()` call bear some explanation:

```js
fetch(someUrl)
  .then(response => {
    return response.json()
  }).then(parsedResponse => {
    console.log(parsedResponse)
  })
```

HTTP requests can take a while to come back, and we don't want to freeze the browser while we wait. `fetch` returns a "promise", which is a data type that represents an value that we don't have yet, but expect to have in the future. If we want to do something that depends on that data, we need to indicate that we're waiting putting it in a `.then` block.

The data types can be confusing on this, so to illustrate:

```js
fetch(aString)
  .then(aFunctionDefinition)
  .then(aFunctionDefinition)
  .then(aFunctionDefinition)
```

Each successive function will be called with whatever the previous one returned. What's more, while the first thing in the chain (`fetch` in this case) must return a promise, every function after that can return a promise, a chain of promises, or static values:

```js
fetch(someUrl)
  .then(() => {
    return 5
  }).then(theNumberFive => {
    console.log(theNumberFive) // 5

    return fetch(anotherUrl)
      .then(response => response.json()) // Chain
  }).then(responseFromTheSecondFetch => {
    // 
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

## Watch Out!

* If successive `.then`s require data from previous `.then`s, they need to be nested so they can be accessed with scoping rules:

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
