Modify this code so that it handles HTTP error codes correctly:

```js
fetch("https://httpstat.us/400")
  .then(response => response.text())
  .then(parsedResponse => {
    console.error("Sorry, this shouldn't have run. Try again!")
  }).catch(error => {
    console.log("You did it!")
  })
```

As a stretch, abstract out the error handling logic into a separate function.

---

Using the url "https://httpstat.us/400" (which will always return a `400` response, write a `fetch` call that will correctly handle the error.
