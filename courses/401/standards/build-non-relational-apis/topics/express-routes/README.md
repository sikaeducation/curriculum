# Express: Routes

Express is based around the idea of HTTP requests and responses. You declare routes, each of which matches a particular HTTP request pattern. Whenever a route is matched, the function attached to it executes.

## Route Matching

You can match a route based on the requests' HTTP method, its path, or both. If more than one route matches, Express will use the first one.

### Methods

Express `app` objects have methods corresponding to `GET`, `POST`, `PATCH`, `PUT`, `DELETE`, `OPTIONS`, and other HTTP methods:

```js
app.get("/", routeHandler) // Matches all GET requests for "/"
app.post("/", routeHandler) // Matches all POST requests for "/"
app.put("/", routeHandler) // Matches all PUT requests for "/"
app.patch("/", routeHandler) // Matches all PATCH requests for "/"
app.delete("/", routeHandler) // Matches all DELETE requests for "/"
app.options("/", routeHandler) // Matches all OPTIONS requests for "/"
```

Refer to the [full list](https://expressjs.com/en/4x/api.html#routing-methods) of supported HTTP methods.

### Paths

The first argument to a route is a path to match.

```js
app.get("/") // Matches all GET requests to `/`
app.get("/products") // Matches all GET requests to `/products`
app.get("/users") // Matches all GET requests to `/users`
app.get("/posts/:postId/comments") // Matches all GET requests that start with `/posts/` and end in `/comments`
```

The `/` path is the root of the server. That means if the server is hosted at `api-example.com`, this route will match `https://api-example.com`.

#### Route Parameters

Any part of a path that starts with `:` is a route parameter and will be available as a variable on the `request` object.

```js
app.get("/products/:productId", (request, response) => {
  response.json({
    message: `You just asked for product ${request.params.productId}`
  })
})
```

If you make an HTTP GET request to `https://api-example.com/products/34`, you will receive this JSON response:

```json
{
  "message": "You just asked for product 34"
}
```

This is useful for matching specific items from a database by their IDs.

### Universal Matchers

To match every method for a path, use the `app.use()` method. To match every path for a method, leave the path argument off.

```js
app.get(routeHandler) // Matches every GET request to any path
app.use("/products", routeHandler) // Matches every HTTP request to `/products`
app.use(routeHandler) // Matches every HTTP request
```

`app.use` is commonly used in middleware plugins like logging and authentication that are intended to run on every request.

## Route Handlers

A route handler is a function that has an HTTP request object and an HTTP response object as parameters.

```js
const routeHandler(request, response){
  response.json({
    message: "Hello, world!"
  })
}
```

Route handlers are mounted on routes, and are called whenever the route is matched:

```js
app.get("/", routeHandler)
```

They can also be written inline on the route:

```js
app.get("/", (request, response) => {
  response.json({
    message: "Hello, world!"
  })
})
```

## Watch Out!

Paths always start with `/`.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Express: Routing](https://expressjs.com/en/guide/routing.html) | Official guide to routing in Express |
