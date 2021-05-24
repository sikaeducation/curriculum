# DOM: Getting Elements

The DOM is how the browser represents HTML internally, and we interact with the DOM through JavaScript. How?

## `document.querySelector`

```html
<h1>Some Heading</h1>
```

```js
const h1 = document.querySelector("h1")
console.log(h1.textContent) // "Some Heading"
```

To read a DOM element, you can use the `document.querySelector()` method. You can pass in any valid CSS selector, and it will return the first element that matches.

```html
<article id="feature">
  <h2>Cat Retrieved From Tree</h2>
  <address class="byline">William Masterson</address>
</article>
```

```js
let heading
// All of these retrieve the same element
heading = document.querySelector("h2")
heading = document.querySelector("article > h2")
heading = document.querySelector("#feature h2")

let byline
// All of these retrieve the same element
byline = document.querySelector(".byline")
byline = document.querySelector("address")
byline = document.querySelector("#feature h2 + address")
```

Once you have DOM node in JavaScript, you can change its content or attributes, add other elements to it, or delete it.

## `document.querySelectorAll`

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

```js
const listItems = document.querySelectorAll("li")
console.log(listItems[0].textContent) // "One"
console.log(listItems[1].textContent) // "Two"
console.log(listItems[2].textContent) // "Three"
```

`document.querySelectorAll` works the same as `document.querySelector`, except it returns every match instead of just the first one. Like `document.querySelector`, it accepts any valid CSS selector.

## Watch Out!

* `document.querySelector` only returns the first match, even if multiple matches are possible.
* Traditionally, selecting elements was done with the methods `document.getElementsByTagName`, `document.getElementsByClassName`, and `document.getElementById`. These methods are still in common use, but unless you have a reason not to you should prefer `document.querySelector` and `document.querySelectorAll`.
* `document.querySelectorAll` returns a `NodeList`. A `NodeList` is very similar to an array, but it doesn't have all the same methods. For example, a `NodeList` has a `.forEach` method, but it does not have a `.map` method.
