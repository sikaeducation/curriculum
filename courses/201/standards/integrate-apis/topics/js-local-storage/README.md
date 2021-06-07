# JavaScript: `localStorage`

Browser applications are normally stateless, meaning that one request doesn't know anything about requests that came before it. What if you want to keep some state between pages, though? For example:

* Rememering that a user is logged in
* Saving loaded data in the browser so that the browser doesn't have to make an HTTP request
* Saving preferences

## `localStorage`

`localStorage` is built into the browser as a way to store data that will stick around through multiple requests.

```js
localStorage.setItem("username", "emilyremler")
```

`localStorage` uses key/value storage, just like objects. Some useful `localStorage` methods:

* `localStorage.setItem("someKey", "Some Value")` - Sets an item
* `localStorage.getItem("someKey")` - Retrieves an item
* `localStorage.removeItem("someKey")` - Removes an item
* `localStorage.clear()` - Removes all items

## Watch Out!

* `localStorage` can only store strings. If you want to keep an object in `localStorage`, you need to serialize it into something like JSON with `JSON.stringify()`, and turn it back into an object when you pull it out of `localStorage` with `JSON.parse`.
* You can't control how long a browser will keep something in `localStorage`, outside of manually setting and removing items. The implementation differs between browsers, but `localStorage` will often be cleared out when a user deletes history or cookies from their browser.