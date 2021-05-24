# DOM Manipulation

We can get elements, create elements, and add them to the page. But what if we want to:

* Change an image
* Add HTML to an element
* Remove an element

## `.textContent`

The most basic kind of DOM manipulation is setting a DOM node's `textContent` property:

```js
const p = document.querySelector("p")
p.textContent = "This is the text that will appear in the p tag"
```

## `.innerHTML`

If we have several HTML elements to add to something, we can do them all at once with `.innerHTML`:

```js
const user = document.createElement("div")
user.innerHTML = `
  <h2>Terry Cloth</h2>
  <p>Favorite activities:</p>
  <ul>
    <li>Washing</li>
    <li>Drying</li>
  </ul>
`
```

This is preferrable to using `document.createElement` on every element and appending them all manually.

## Setting Attributes

HTML attributes can be read, added, and changed by accessing the relevant property on the DOM node. For example, to set an image's `src` and `alt` attributes:

```
const img = document.createElement("img")
img.src = "images/cute-puppy.jpg"
img.alt = "Close-up of a cute puppy"
```

The result will be:

```html
<img src="images/cute-puppy.jpg" alt="Close-up of a cute puppy" />
```

## Removing Elements

To remove an element, query for it and then call its `.remove()` method. If you have:

```html
<h1>A heading</h1>
<p>A paragraph</p>
```

And you want to remove the paragraph, you can use:

```js
const p = document.querySelector("p")
p.remove()
```

And your DOM will look like this:

```html
<h1>A heading</h1>
```

## Watch Out!

* There's no need to make a bunch of individual elements, append them all together, and then append the resulting tree to the DOM. Use `.innerHTML` instead.
* There is a similar property to `.textContent` called `.innerText` that works almost identically. The difference is that `.innerText` is "CSS aware" and will not return any text that's been hidden by CSS (for example with `display: none;`). `.textContent` will also return text that's been hidden. You can think of `.innerText` as what would go on a user's clipboard if they highlighted the text in the browser and copied it.
* You can manually change an element's classes with `.class` (since `class` is an attribute), but you should use `.classList` instead.
* To add an element directly to the `<body>` of the document, use `document.querySelector("body")`
* Watch your capitalization- it's `.innerHTML`, not `innerHtml`.
