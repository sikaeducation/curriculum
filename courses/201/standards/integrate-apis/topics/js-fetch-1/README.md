# JavaScript: `fetch` 1

How do you use APIs in JavaScript?

## Fetch

```js
const url = "https://pokeapi.co/api/v2/pokemon/pikachu"
fetch(url)
  .then(response => {
    return response.json()
  }).then(parsedResponse => {
    console.log(parsedResponse.name) // "pikachu"
    console.log(parsedResponse.weight) // 160
    console.log(parsedResponse.id) // 25
  })
```

`fetch` is a built-in function that takes a URL as an argument. By default, it makes an HTTP GET request to that URL. To read the response, you need to use the `.then` methods:

```
fetch(url)
  .then(response => {
    console.log(response) // This is an object with data about the HTTP response, its headers, its status code, etc.

    return response.json() // This takes a HTTP response body that's formatted as JSON and turns it into a JavaScript object
  }).then(parsedResponse => {
    console.log(parsedResponse) // This is the data from the API. Anything logic that needs this data has to come after this.
  })
```

## Watch Out!

* Despite the name, `fetch` is used for all HTTP requests, not just `GET`.
* `response.json()` turns a JSON HTTP response body into a JavaScript object, not the other way around. It does not the response into JSON.

## History

`fetch` was added to Browser JavaScript as part of ES2015. The predecessor to `fetch` was called `XMLHTTPRequest`, which worked off of event handlers. It was awkward and highly technical to use, and `fetch` is much more straight-forward.
