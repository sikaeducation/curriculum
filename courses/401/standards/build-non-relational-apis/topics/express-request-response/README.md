# Express: `request` and `response`

An HTTP server starts with an HTTP request and ends with an HTTP response. What do those look like in code?

## `request`

Every Express route handler gets a `request` object containing details about the HTTP request. For example:

* **`request.body`**: Contains the body of the HTTP request after it's been parsed
* **`request.params`**: Contains the Express route keys and their values
* **`request.query`**: Contains the query string of the request as keys and values
* **`request.cookies` / `request.signedCookies`**: Contains any cookies that were sent over as keys and values after they've been parsed
* **`request.get("header-name-here")`**: Returns the value of an HTTP request header

This is modifiable, as well. For example, it's possible to create a `user` object and add it to the `request` as `request.user`.

## `response`

Every Express route handler has access to a `response` object containing details about the HTTP response. Call methods on the `response` object to progressively build your eventual HTTP response. For example:

* **`response.status(statusCode)`**: Sets the HTTP status code
* **`response.set("header-name-here", "header value here")`**: Sets an HTTP response header

Additionally, there several `response` methods that end Express's processing and send the response back down to the client.

* **`response.json(someObject)`**: Encodes a JavaScript object as JSON and sends it in the HTTP response body
* **`response.send(someString)`**: Sends a string in the HTTP response body
* **`response.sendStatus(someStatusCode)`**: Sends an HTTP status code as the response with no HTTP response body

Refer to the [full list](https://expressjs.com/en/guide/routing.html#response-methods) for other options.

## Watch Out!

* `request.body` is `undefined` until it has been parsed with something like `express.json()`. The same is true of `request.cookies` and `request.signedCookies`.
* `request.cookies` is `undefined` until it has been parsed with something like `express.json()`.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Flavio Copes: Express, a Popular Node.js Framework](https://flaviocopes.com/express/) | A blog post with lots of details of Express's request and response objects |
| [Express: Request](https://expressjs.com/en/4x/api.html#req) | Official Express docs on the `request` object |
| [Express: Response](https://expressjs.com/en/4x/api.html#res) | Official Express docs on the `response` object |
| [Express: Response methods](https://expressjs.com/en/guide/routing.html#response-methods) | Guide to the different ways Express can respond to a request |
