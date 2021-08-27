# DOM: Creating and Appending Elements

You can select elements with `document.querySelector`, but what can you do with those elements once you have them?

## `document.createElement`

You can create DOM nodes directly with JavaScript using `document.createElement`:

```js
const p = document.createElement("p") // <p></p>
const img = document.createElement("img") // <img />
const li = document.createElement("li") // <li></li>
```

`document.createElement` creates a blank DOM node with the tag name that you pass in. After that, you can modify those elements however you want:

```js
p.textContent = "This text will be in the paragraph"
img.src = "cute-puppy.jpg"
li.id = "primary"
```

The attributes you're familiar with in HTML elements are exposed as properties of DOM nodes in JavaScript.

## `.append`

Adding a new element to a page has 4 steps:

1. Create an element
2. Give the element the desired content and attributes
3. Query for an existing element to add the new element to
4. Append the new element to the existing element

So if you start with:

```html
<div class="user"></div>
```

And then write this code:

```js
const p = document.createElement("p")         // Step 1
p.textContent = "This is new content"         // Step 2
const user = document.querySelector(".user")  // Step 3
user.append(p)                                // Step 4
```

The result will be:

```html
<div class="user">
  <p>This is new content</p>
</div>
```

## Watch Out!

* Just because an element has been created doesn't mean it's on the page yet. An element needs to be `append`ed to an element that's on the page before it renders.
* There is a similar method to `.append` called `.appendChild`. It works similarly, except it accepts fewer types, has a different return value, and can only append one DOM node at a time. Unless you have a strong reason not to, you should prefer `.append`.

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: `document.createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) | MDN's reference on `document.createElement` |
| [MDN: `document.append`](https://developer.mozilla.org/en-US/docs/Web/API/Element/append) | MDN's reference on `document.append` |
| [Video: Learn DOM Manipulation in 18 Minutes](https://www.youtube.com/watch?v=y17RuWkWdn8) | Web Dev Simplified's guide to DOM manipulation |
