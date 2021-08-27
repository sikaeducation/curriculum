# Asynchronous Programming

Tracing the flow of execution in synchronous programs is, if not easy, at least straight-forward. Asynchronous programs add a significant layer of complexity. When a JavaScript program contains asynchronous elements, it starts executing them top to bottom like synchronous code:

```js
console.log("First")

const a = 1
console.log("Second")

fetch(someUrl) // This is asynchronous
console.log("Third")
```

Things that depend on something asynchronous usually generally happen after all the synchronous parts have finished:

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

Techniques for working with asynchronous programs, like promises, allow you to separate your code into parts that must occur in a particular sequence from code that doesn't. For example, in a web program that allows you delete files from a server, you might send the HTTP request to delete the file to the server and then immediately remove that item from the UI without waiting for the response to come back.

## Why Async?

What would the problem be with just waiting for the fetch to resolve before moving on with the rest of the program?

```js
const result = fetch(someUrl) // Wait until this comes back
console.log(result) // Then move on with the program
```

The problem is that when a computer is waiting on something, it usually can't do anything else. In some environments (like servers), that's not always a big deal. In a browser though, that means while you're waiting for the fetch to come back the entire browser becomes unresponsive, which would make it look like the app has frozen. Techniques like promises allow you to make the computer multi-task while still having control over the sequence.

## Watch Out!

Async is not the same as real-time. Real-time data is pushed from the server every time data changes, such as messages in a chat room. While these are usually also handled asynchrously, most fetch requests are done once and not updated again until explicitly requested.


## Additional Resources

| Resource | Description |
| --- | --- |
| [Video: Asynchronous vs. Synchronous Programming](https://www.youtube.com/watch?v=Kpn2ajSa92c) | Web Dev Simplified's guide to async programming |
