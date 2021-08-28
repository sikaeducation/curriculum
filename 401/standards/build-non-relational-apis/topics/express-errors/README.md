# Express: Errors

You can write Express routes that match different methods and paths. What do you do if nothing matches? What do you do if a route throws an error?

## Error-Handling Routes

Somewhat confusingly, an Express error handler is a middleware function that has 4 parameters:

```js
app.use((error, request, response, next) => {
  // Handle error here, for example:
  response.status(500).json({
    error: error.message
  })
})
```

Whenever Express encounters an error, it will throw control to this handler. It should usually the final middleware you declare, and you should have at least one catch-all error handler like the one above.

## Throwing Errors

Some errors are thrown directly by the framework, such as not finding a matching route handler or general JavaScript errors. Other times you want to throw an error yourself:

```js
app.post("/users", (request, response) => {
  const isValid = validate(request.body)
  if (!isValid){
    throw new Error("The user must be valid")
  }
  // Rest of route
})
```

These will be caught by `app`'s next error handler middleware. If the error comes back from an async operation like `fs.readFile`, you'll want to use the `next` parameter instead:

```js
app.get("/message", (request, response, next) => {
  fs.readFile("./some-file", "utf-8", (error, fileContents) => {
    if (error){
      next(error)
    }

    response.json({ message: fileContents })
  })
})
```

If `next` receieves anything other than `null` as its first argument, it considers it an error and will pass that error on to the error handler.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Express: Errors](https://expressjs.com/en/guide/error-handling.html) | Official guide to handling errors in Express |
