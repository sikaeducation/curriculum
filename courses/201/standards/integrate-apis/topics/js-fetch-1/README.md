# JavaScript: `fetch`

How do you use APIs in JavaScript?

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

* Despite the name, `fetch` is used for all HTTP requests, not just requests that use the `GET` method.
* `response.json()` turns a JSON HTTP response body into a JavaScript object, not the other way around. It does not transform the response into JSON.

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) | MDN's reference on `fetch` |
| [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) | MDN's guide to `fetch` |
| [MDN: Fetch Tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) | MDN's tutorial on `fetch` |
| [Video: Learn Fetch API in 6 Minutes](https://www.youtube.com/watch?v=cuEtnrL9-H0) | Web Dev Simplified's guide to `fetch` |
