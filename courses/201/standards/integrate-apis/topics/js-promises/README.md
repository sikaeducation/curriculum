# JavaScript: Promises

Ordinarily in JavaScript, code executes immediately:

```js
const a = 1
console.log(a) // This will always be 1
```

There are other things, like network requests, that take time:

```js
const a = fetch(someUrl)
console.log(a) // Won't have a value until the HTTP response comes back
```

## Promises

A promise is a data type in JavaScript that represents an eventual value.

```js
const a = fetch(someUrl)
console.log(a) // Unresolved promise

a.then(eventualValue => {
  console.log(eventualValue) // The HTTP response
})
```

While it has some differences, you can think of promises in the same category as strings, booleans, numbers, and other JavaScript data types. To work with the value a promise represents, you need to resolve the promise first with `.then` or `await`. This allows you to indicate which parts of your program depend on the resolved data and which ones don't:

```js
fetch(someUrl)
  .then(response => {
    // Do things that depend on the response
  })

// Do things that don't depend on the response
```

## Watch Out!

If all of the code in your application depends on the result of a promise like an HTTP request, then all of the logic has to happen after a `.then` or `await`. There are techniques for making this more readable, but something like this will never work:

```js
const data = ""
fetch(someUrl)
  .then(response => response.json())
  .then(parsedResponse => {
    data = parsedResponse
  })

console.log(data) // ""
```

---

`.then`/`.catch` and `async`/`await` are two different techniques for working with the promise data type. You can freely mix and match them, there is nothing that can only be accomplished with one of them.

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) | MDN's reference on promises |
| [MDN: Guide to Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) | MDN's guide to promises |
| [MDN: Promises Tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises) | MDN's tutorial on promises |
| [Video: JavaScript Promises in 10 Minutes](https://www.youtube.com/watch?v=DHvZLI7Db8E) | Web Dev Simplified's guide to promises |
