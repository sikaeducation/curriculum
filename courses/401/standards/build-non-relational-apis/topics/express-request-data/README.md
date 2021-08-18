# Express: Request Data

There are 3 different ways to read data from an HTTP request: Route parameters, HTTP bodies, and query parameters.

### Route Parameters

Any route path that contains `:` uses route parameters, also called dynamic segments.

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

### HTTP Bodies

To read JSON data from the body of an HTTP request, you need to parse the request first:

```js
const express = require("express")
const app = express()

app.use(express.json())

app.post("/", (request, response) => {
  response.send(request.body) // Prints whatever was sent in the body
})
```

`app.use(express.json())` only needs to be run once.

### Query Parameters

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

Express will automatically break a query string into separate key:value pairs in the `.query` object.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Express: `body-parser`](http://expressjs.com/en/resources/middleware/body-parser.html) | |