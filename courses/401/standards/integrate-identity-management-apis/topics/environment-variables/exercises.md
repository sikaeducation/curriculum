Move the secret in this express app to an environment variable:

```js
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.get("/", (request, response) => {
  response.json({ secret: "This is a top secret." })
})

app.listen(port, () => {
  console.log("listening here ", port)
})
```
