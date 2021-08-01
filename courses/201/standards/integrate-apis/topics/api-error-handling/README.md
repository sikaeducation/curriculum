# Handling API Errors

If an HTTP status code is `400` or greater, the request was unsuccessful in some way.

```js
fetch("http://httpstat.us/500")
  .then(response => response.json())
  .then(parsedResponse => {
    console.log("It worked!")
  }).catch(error => {
    console.error("It failed...")
  })
```

You would expect "It failed..." to log, but instead "It worked!" logs. Why?

## Types of Failed Requests

These are some ways a network request can be considered a failure from `fetch`'s perspective:

* The computer's connection to the internet is interrupted
* The browser is unable to find the IP address for the domain
* The URL is invalid

All of these will trigger the `.catch` handler and are considered failed requests. Getting an error back from the server is still considered a successful request since it generated an HTTP response, even if that response is not what you wanted.

## Handling 4xx-5xx Statuses

`fetch` has a built-in way to check for error statuses:

```js
fetch("http://httpstat.us/500")
  .then(response => {
    if (!response.ok){
      throw new Error(response.statusCode)
    }
    console.log("It worked!")
  }).catch(error => {
    console.error("It failed...")
  })
```

The `response.ok` property checks the status code of the response, and returns `true` for codes below `400` and `false` for codes `400` or greater. You can use a conditional to check this status and throw an error if the response code is 400 or greater.

## Watch Out!

* `.ok` is only available on the initial response object. Once the body has been parsed (for example, with `.json()`), it is no longer available.
* All of concepts work the same way with `async`/`await`.
* If the response from the server isn't valid JSON, running `response.json()` will throw an error and it will hit the catch block anyway. This is not a reliable way to catch server errors though, as many servers will return valid JSON explaining the error.

## Additional Resources

| Resource | Description |
| --- | --- |
| [HTTP Stat.us](http://httpstat.us) | Free server that generates the specified status code in the HTTP response |
| [MDN: Checking that a fetch was successful](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful) | MDN documentation on checking that a request was successful |
