# JavaScript: `Promise.all`

Promises normally run sequentially:

```js
const urls = [
  "https://data-source.com/1",
  "https://data-source.com/2",
  "https://data-source.com/2",
]

fetch(urls[0])
  .then(response => response.json())
  .then(response1 => {
    return fetch(urls[1])
      .then(response => response.json())
      .then(response2 => {
        return fetch(urls[2])
          .then(response => response.json())
          .then(response3 => {
            console.log(response1, response2, response3)
          })
      })
  })
```

Not only is this code hard to read and maintain, it's also slow. If you had 120 requests and each one only took 1 second, it would still take 2 minutes to load all the data. How can you speed this up?

## `Promise.all`

`Promise.all` is a built-in utility that allows you to execute multiple promises at the same time, and resolves their results as an array.

```js
const urls = [
  "https://data-source.com/1",
  "https://data-source.com/2",
  "https://data-source.com/2",
]

// This turns each URL into a fetch request
const requests = urls.map(url => {
  return fetch(url).then(response => response.json())
})

Promise.all(requests)
  .then(responses => {
    console.log(responses[0], responses[1], responses[2])
  })
```

`Promise.all` accepts an array of promises and evaluates to a promise, which means it can be `.then`ed or `await`ed.

## Watch Out!

* JavaScript is case-sensitive- `Promise.all` starts with a capital `P`
* When doing many HTTP requests with `Promise.all`, you're still limited by how many HTTP requests the browser will send at one time. In many cases this limit is 6, although HTTP/2 effectively allows for much more.

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: `Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) | MDN's reference on `Promise.all` |
