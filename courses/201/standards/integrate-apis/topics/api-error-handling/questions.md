* Which of the following will trigger a `.catch` handler in a `fetch`?
  * Losing your internet connection
  * Getting a 404 response
  * The server breaking while handling the response and sending a 500 response
  * The server going offline while handling the response
  * Giving a bad URL to `fetch`
* How do you intentionally throw an error in JavaScript?
* List 3 reasons why `fetch` request might error
* What's wrong with this code?

```js
fetch("https://httpstat.us/500")
  .then(response => {
    if (response.ok){
      response.json()
    }
  }).then(parsedResponse => {
    console.log(parsedResponse)
  })
```

* What's wrong with this code?

```js
fetch("https://httpstat.us/404")
  .then(response => {
    if (response.isOk()){
      return response.json()
    }
  }).then(parsedResponse => {
    console.log(parsedResponse)
  })
```

* Is there a more semantic way to write this?

```js
fetch("https://httpstat.us/401")
  .then(response => {
    if (response.statusCode < 400){
      throw new Error(response.statusMessage)
    }
    return response.json()
  }).then(parsedResponse => {
    console.log(parsedResponse)
  })
```
