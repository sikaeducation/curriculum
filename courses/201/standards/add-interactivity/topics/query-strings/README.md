# Query Strings

URLs are designed to be "stateless", meaning that a URL will load the same web page whether its your first time or your hundredth. Sometimes a URL needs more data than just the path to do this correctly. For example, if you have a search page at `https://website.com/search.html`, how can you bookmark a specific search or share it with someone else?

You add a query string to the URL:

```
website.com/search.html?search_term=cute+puppies
```

Query strings are key-value pairs, just like objects in JavaScript. This object:

```js
const person = {
  firstName: "John",
  lastName: "Coltrane",
  age: 95
}
```

Would look like this in a query string:

```
?firstName=John&lastName=Coltrane&age=95
```

A query string starts with a `?`, keys and values are separated with `=`, and pairs are separated with `&`.

## Query Strings in JavaScript

To access a query string in JavaScript, use the built-in `URLSearchParams` object:

```js
// https://website.com/search.html?search_term=cute+puppies&is_favorite=yes

const queryString = window.location.search
const queryParams = new URLSearchParams(queryString)
console.log(
  queryParams.get("search_term"), // "cute puppies"
  queryParams.get("is_favorite") // "yes"
)
```

## Watch Out!

* Not every character can be used in a URL, and so some strings need to be "encoded" to work in query strings. For example, spaces aren't allowed in URLs, so to include one in a query string we need to either use the `+` character or `%20`. Those characters can be "decoded" back into spaces.
* Anything in a query string can be seen by your router, your ISP, and every computer in between you and the server. It can't be encrypted, and it can be bookmarked and shared. This makes it inappropriate for any kind of sensitive data, such as usernames or passwords.
* There is no theoretical limit to how long a query string can, but browsers have a practical limit of 2000 characters for URLs.
* If you include the same key multiple times, only the last one will be available. You can add `[]` to the key (as in `?favorite[]=milk&favorite[]=cookies` to make them available as an array.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Wikipedia: Query String](https://en.wikipedia.org/wiki/Query_string) | Wikipedia's query string article |
| [MDN: `URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) | MDN's reference on `URLSearchParams` |
| [Video: Query Parameters](https://www.youtube.com/watch?v=qv5XK91OhFo) | Udacity's guide to query parameters |
| [Video: `URLSearchParams` in JavaScript](https://www.youtube.com/watch?v=-D5YGTkTBH4) | Dcode's guide to constructing query strings |
