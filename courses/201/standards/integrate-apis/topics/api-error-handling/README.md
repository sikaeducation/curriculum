# Handling API Errors

If an HTTP status code is `400` or greater, the request errored in some way.

```js
fetch(someUrlThatWillReturnA500StatusCode)
  .then(response => response.json())
  .then(parsedResponse => {
    console.log("It worked!")
  }).catch(error => {
    console.error("It failed...")
  })
```

You would expect "It failed..." to log, but instead "It worked!" logs. Why?

## Types of Failed Requests

These are some ways a network request can fail:

* The computer's connection to the internet is interrupted
* The browser is unable to find the IP address for the domain
* The URL is invalid

All of these will trigger the `.catch` handler and are considered failed requests. Getting an error back from the server is still considered a successful request since it generated an HTTP response (even if that response is not what you wanted).

## Handling 4xx-5xx Statuses

`fetch` has a built-in way to check for error statuses:

```js
fetch(someUrl)
  .then(response => {
    if (!response.ok){
      throw new Error(response.statusCode)
    }

    return response.json()
  }).then(parsedResponse => {
    // Handle response
  }).catch(error => {
    console.error(error.message)
  })
```

The `response.ok` property checks the status code of the response, and returns `true` for codes below `400` and `false` for codes `400` or greater.

## Watch Out!

* `.ok` is only available on the initial response object. Once the body has been parsed (for example, with `.json()`), it is no longer available.
