Add Morgan to this Express app:

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
