# DOM: Creating and Appending Elements

We can select elements with `document.querySelector`, but what can we do with them once we have them?

## `document.createElement`

We can create DOM nodes directly with JavaScript using `document.createElement`:

```js
const p = document.createElement("p") // <p></p>
const img = document.createElement("img") // <img />
const li = document.createElement("li") // <li></li>
```

`document.createElement` creates a blank DOM node with the tag name that we pass in. After that, we can modify those elements however we want:

```js
p.textContent = "This text will be in the paragraph"
img.src = "cute-puppy.jpg"
li.id = "primary"
```

## `.append`

Adding a new element to a page has 4 steps:

1. Create an element
2. Give the element the desired content and attributes
3. Query for an existing element to add the new element to
4. Append the new element to the existing element

So if we start with:

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

## Watch Out

* Just because an element has been created doesn't mean its on the page yet. An element needs to be `append`ed to another element before it renders.
* There is a similar method to `.append` called `.appendChild`. It works similarly, except it accepts fewer types, has a different return value, and can only append one DOM node at a time. Unless you have a strong reason not to, you should always use `.append`.