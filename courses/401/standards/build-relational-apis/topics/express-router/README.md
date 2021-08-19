# Express: Router

As you add more routes to an Express app, your `index.js` will start getting bloated:

```js

app.get("/users", getUsersHandler)
app.get("/users/:id", getUserHandler)
app.post("/users", createUsersHandler)
app.put("/users/:id", updateUsersHandler)
app.delete("/users/:id", deleteUsersHandler)

app.get("/products", getProductsHandler)
app.get("/products/:id", getProductsHandler)
app.post("/products", createProductsHandler)
app.put("/products/:id", updateProductsHandler)
app.delete("/products/:id", deleteProductsHandler)

// Same thing for 10 other models
```

How do you split these routes out to keep each file more focused?

## Express Router

Express's router matches a method and a path like every other Express route, but then it delegates the handling of that request to another module.

Routes related to users:

```js
// routes/users.js
const express = require("express")
const router = express.Router()

// Define a bunch of handlers...

router.get("/", getUsersHandler)
router.get("/:id", getUserHandler)
router.post("/", createUsersHandler)
router.put("/:id", updateUsersHandler)
router.delete("/:id", deleteUsersHandler)

module.exports = router
```

Routes related to products:

```js
// routes/products.js
const express = require("express")
const router = express.Router()

router.get("/", getProductsHandler)
router.get("/:id", getProductsHandler)
router.post("/", createProductsHandler)
router.put("/:id", updateProductsHandler)
router.delete("/:id", deleteProductsHandler)

module.exports = router
```

Loading both routers:

```js
// index.js
const userRoutes = require("./routes/users")
const productRoutes = require("./routes/products")

app.use("/users", userRoutes)
app.use("/products", productRoutes)
```

* Routers are typically mounted with `use`, which matches all request methods.
* The prefix a router was mounted with is assumed in all requests that router handles. That means that a router mounted with `app.use("/books", booksRouter)` can use `router.get("/")` to match a GET request to `/books`.
* A module that's going to be mounted as a router should export the `router` object.

## Watch Out!

* Remember the route paths are passed into the router, and every route you use will be prefixed with whatever path the router was mounted with
* Routes in a router are mounted with `router.methodName`, not `app.methodName`
* Remember to export the `router` object from a router file

## Additional Resources

| Resource | Description |
| --- | --- |
| [Express: Routing](https://expressjs.com/en/guide/routing.html) | Express's official router docs |
| [Express: Routing guide](https://expressjs.com/en/starter/basic-routing.html) | Express's guide to routing |
| [MDN: Routing tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes) | MDN's tutorial on Express routing |
