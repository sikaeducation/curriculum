# Express Middleware

Some things we want to do with servers are common:

* Add a particular header to the response
* Authenticate a user based on a token in the request
* Validate that the correct data was sent.

Since they're common, it makes sense to extract them into functions:

```js
app.get("/", (request, response) => {
  response = addCORSHeader(response)
  request = lookupUser(request)
  request = validateRequest(request)

  // Rest of route
})
```

This is a little awkward, though. It's repetitive (imagine doing that in every route) and adds a lot of bulk and noise to routes. How can we improve on it?

## The Middleware Pattern

Express (and most other web servers) are based around the idea of HTTP requests and responses. A request comes into the server, a response comes out.

```js
function addCORSHeader(request, response, next){
  response.set("access-control-allow-origin", "*")
  next()
}

function lookupUser(request, response, next){
  request.user = User.find(request.get("Authorization"))
  next()
}

function validateRequest(request, response, next){
  if (request.params.product_id){
    next()
  } else {
    const error = new Error("product_id is required")
    next(error)
  }
}

app.get("/", addCORSHeader, lookupUser, validateRequest, (request, response) => {
  // Rest of route
})
```

The middleware pattern in Express has a `request` and `response` object that are passed one after the other into middleware functions. Each function takes in the `request`, `response`, and an optional `next` function.

When `next` is called with no arguments, it goes to the "next" middleware. If it is called with an argument, Express assumes that something went wrong and it passes control to an error handler.

(Middleware diagram here)

## Routes As Middleware

If middleware functions look a lot like route handlers, it's because route handlers are just middleware.

```js
function routeHandler(request, response){
  response.sendStatus(200)
}

app.get("/", addCORSHeader, lookupUser, validateRequest, routeHandler)
```

Since route handlers typically send the HTTP response back to the client by calling `response.send()` or `response.sendStatus()`, they're intended to be the last middleware in the chain. As such, they generally don't use `next()`.

This allows us to abstract out all of the behavior for a route into individual functions, which greatly improves both readability and reusability.

## Watch Out!

* `next()` doesn't need to be called with `request` and `response`, they'll automatically be available in the next middleware function. You should only call `next` with an argument if an error occurs.
