* If more than one element matches `.querySelector()`, what comes back?
* If more than one element matches `.querySelectorAll()`, what comes back?
* What can be passed into `.querySelector()`?
* What can be passed into `.querySelectorAll()`?
* What data type does `.querySelectorAll()` return?
* What is wrong with this code?

```html
<div class="user"></div>
```

```js
const user = document.querySelector("user")
console.log(user) // null
```

* What is wrong with this code?

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
const list = document.querySelector("ul")
list.forEach(listItem => {
  console.log(listItem)
})
```

* What is wrong with this code?

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
const lis = document.querySelector(li)
lis.forEach(li => {
  console.log(li)
})
```
