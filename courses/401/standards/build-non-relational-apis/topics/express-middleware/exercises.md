Draw a diagram of the middleware pattern in Express.

---

Write two middleware functions for the following route.

1. The first should log the HTTP request method and path to the console
2. The second should add a header to the HTTP response called "Access-Control-Allow-Origin" with a value of `*`.

Attach them to incoming requests using either approach.

```js
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.get("/", (request, response) => {
  response.json({ message: "Hello, world!" })
})

app.listen(port, () => {
  console.log("listening here ", port)
})
```
