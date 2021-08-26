# Express: Request Data

There are 3 different ways to read data from an HTTP request: Route parameters, HTTP bodies, and query parameters.

## Route Parameters

Any part of a route path that contains `:` is a route parameter, also called a dynamic segment:

```js
app.get("/products/:productId", (request, response) => {
  response.json({
    message: `You just asked for product ${request.params.productId}`
  })
})
```

If you make an HTTP GET request to `https://api-example.com/products/34`, you will receive a JSON response saying:

```json
{
  "message": "You just asked for product 34"
}
```

This is useful to matching specific items from a database by their IDs.

## HTTP Bodies

Most data is send in the body of HTTP requests. To read JSON data from the body of an HTTP request, you need to parse the request first:

```js
const express = require("express")
const app = express()

app.use(express.json())

app.post("/", (request, response) => {
  response.send(request.body) // Prints whatever was sent in the body
})
```

Note that `app.use(express.json())` only needs to be run once.

## Query Parameters

To read query parameters from the query string of the request URL, use `request.query`:

```js
// HTTP GET https://api-example.com/products?filterDuplicates=true&sort=DESC
app.get("/products", (request, response) => {
  if (request.query.filterDuplicates === "true"){
    products = products.filter(product => product)
  }

  if (request.query.sort === "DESC"){
    products.sortDescending()
  } else {
    products.sortAscending()
  }
})
```

Express will automatically break the query string into separate key:value pairs in the `request.query` object.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Express: `express.json()`](http://expressjs.com/en/resources/middleware/body-parser.html) | Express's built-in JSON body parser |
| [Express: `req.body`](http://expressjs.com/en/4x/api.html#req.body) | Express's documentation on `request.body` |
| [Express: `req.params`](http://expressjs.com/en/4x/api.html#req.params) | Express's documentation on `request.params` |
| [Express: `req.query`](http://expressjs.com/en/4x/api.html#req.query) | Express's documentation on `request.query` |
