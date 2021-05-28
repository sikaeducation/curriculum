# Asynchronous Programming

Tracing the flow of execution in synchronous programs is, if not easy, at least straight-forward. Asynchronous programs add a significant layer of complexity.

When a JavaScript program contains asynchronous elements, it starts executing them top to bottom like synchronous code:

```js
console.log("First")

const a = 1
console.log("Second")

fetch(someUrl)
console.log("Third")
```

Things that depend on something asynchronous generally happen after all the synchronous parts have finished:

```js
console.log("First")

const a = 1
console.log("Second")

fetch(someUrl)
  .then(() => {
    console.log("Fourth")
  }).then(() => {
    console.log("Fifth")
  })

console.log("Third")
```

Techniques for working with asynchronous programs, like promises, allow you to declare which parts of your program depend on happening in a particular order and which parts don't.

## Why Async?

What would the problem be with just waiting for the fetch to resolve before moving on with the rest of the program?

```js
const result = fetch(someUrl) // Wait until this comes back
console.log(result) // Then move on with the program
```

The problem is that when a computer is waiting on something, it usually can't do anything else. In some environments (like servers), that's not always a big deal. In a browser though, that means while you're waiting for the fetch to come back the entire browser becomes unresponsive. It would look like the app has frozen. Techniques like promises allow you to make the best use of the computer's resources while still controlling sequence.
