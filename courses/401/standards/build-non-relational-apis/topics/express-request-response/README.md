# Express: `request` and `response`

An HTTP server starts with an HTTP request and ends with an HTTP response. What do those two things look like in code?

## `request`

Every Express route handler has access to a `request` object containing details about the HTTP request. For example:

* `request.body` - Contains the body of the HTTP request (after it's been parsed)
* `request.params` - An object containing the Express route keys and their values
* `request.query` - An object containing the query string of the request as keys and values
* `request.cookies` / `request.signedCookies` - An object containing any cookies that were sent over as keys and values (after they've been parsed)
* `request.get("header-name-here")` - Returns the value of an HTTP request header

This is modifiable, as well. For example, it's possible to look up a `user` object and add it to the `request` as `request.user`.

## `response`

Every Express route handler has access to a `response` object containing details about the HTTP response. You are generally calling methods on the `response` object to build up your eventual HTTP response. For example:

* `response.status(statusCode)` - Set an HTTP status code
* `response.set("header-name-here", "header value here") - Set an HTTP response header

Additionally, there several `response` methods that terminate the entire HTTP cycle and send the response back down to the client.

* `response.json(someObject)` - Encodes a JavaScript object as JSON and sends it in the HTTP response body
* `response.send(someString)` - Sends a string in the HTTP response body
* `response.sendStatus(someStatusCode)` - Send an HTTP status code as the response with no HTTP response body

## Watch Out!

* `request.body` is `undefined` until it has been parsed with something like `express.json()`. The same is true of `request.cookies` and `request.signedCookies`.
* `request.cookies` is `undefined` until it has been parsed with something like `express.json()`.
