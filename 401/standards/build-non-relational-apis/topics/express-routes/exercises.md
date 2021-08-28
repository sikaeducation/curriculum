Given this Express app:

```js
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const words = []

app.listen(port, () => {
  console.log("listening here ", port)
})
```

Add the following routes:

* `POST /words/:word` should add `:word` to the `words` array and respond with the word it added
* `GET /words` should should response with all the words in the `words` array
* `PUT /words/:old/:new` should look for the `:old` word in the `words` array and replace it with `:new` if it finds it. Otherwise, it should add it. The route should respond with the new word.
* `PATCH /words/:old/:new` should have the same behavior as `PUT `/words/:old/:new`
* `DELETE /words/:word` should remove `:word` from the `words` array if it exists and respond with nothing.
* A request to `/` with any method should respond with the string "Hello, world!"
* After all of the other routes, a route that responds to any and any method should respond with the string "Can I help you?"
