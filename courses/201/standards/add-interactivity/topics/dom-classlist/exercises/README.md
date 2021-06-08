# DOM: .classList: Exercises

## Questions

* What is the method for adding a class to a `classList`?
* What is the method for removing a class from a `classList`?
* What is the method for toggling a class in a `classList`?
* Given this HTML:

```html
<div class="red green blue"></div>
```

What will this JavaScript do?

```js
const div = document.querySelector("div")
div.classList.toggle("green")
```

* Given this HTML:

```html
<div></div>
```

What will this JavaScript do?

```js
const div = document.querySelector("div")
div.classList.toggle("green")
```

* Given this HTML:

```html
<div class="red green blue"></div>
```

What will this JavaScript do?

```js
const div = document.querySelector("div")
div.classList.add("green")
```

* Given this HTML:

```html
<div class="red green blue"></div>
```

What will this JavaScript do?

```js
const div = document.querySelector("div")
div.classList.remove("green")
```

* Given this HTML:

```html
<div class="red blue"></div>
```

What will this JavaScript do?

```js
const div = document.querySelector("div")
div.classList.remove("green")
```

## Activities

Write the implementation for the 3 buttons in this code:

```html
<!doctype html>
<html>
  <head>
    <title>Button Toggling</title>
    <meta charset="utf-8" />
  </head>
  <style>
    .hidden {
      display: none;
    }
  </style>
  <body>
    <h1>Primary Heading</h1>
    <ul class="list-items">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <ul>
      <li>
        <button id="all-list-items-toggle">Toggle All List Items</button>
      </li>
      <li>
        <button id="heading-toggle">Toggle Heading</button>
      </li>
      <li>
        <button id="first-list-item-toggle">Toggle the First List Item</button>
      </li>
    </ul>
    <script>
      document
        .querySelector(".all-list-items-toggle")
        .addEventListener("click", () => {
          // Code for all list items toggle here
        })

      document
        .querySelector("#heading-toggle")
        .addEventListener("click", () => {
          // Code for heading toggle here
        })

      document
        .querySelector("#first-list-item-toggle")
        .addEventListener("click", () => {
          // Code for first list item toggle here
        })
    </script>
  </body>
</html>
```
