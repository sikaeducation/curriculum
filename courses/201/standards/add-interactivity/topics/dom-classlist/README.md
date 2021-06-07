# DOM: .classList

Classes can display in any order, and manipulating them may involve splitting up a string and putting it back together. Gross.

## `.classList`

One of the more common DOM manipulation tasks is adding, removing, and toggling CSS classes. There's a built-in way to do this in the DOM:

```html
<div class="active"></div>
```

```js
const div = document.querySelector("div")

// Adding and removing classes
console.log(div.classList.value) // "active"
div.classList.add("user")
console.log(div.classList.value) // "active user"
div.classList.remove("user")
console.log(div.classList.value) // "active"

// .toggle adds a class if present, removes it otherwise
div.classList.toggle("active")
console.log(div.classList.value) // "user"
div.classList.toggle("active")
console.log(div.classList.value) // "user active"

// You can see if an element currently contains a class with .contains
if (div.classList.contains("user")){
  console.log("This will run because 'user' is one of the classes")
}
```