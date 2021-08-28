* What user interactions cause a form submission?
* Differentiate between using `<input />` and `<button>` to submit a form.
* You submit a form, and the page refreshes and the values from the form are in query string. What happened?
* Why isn't this submit handler working?

```html
<form>
  <input type="submit" id="agree" value="Agree to terms" />
</form>
```

```js
const agree = document.querySelector("#agree")
agree.addEventListener("submit", event => {
  event.preventDefault()
  console.log("It worked!")
})
```

* Why isn't this submit handler working?

```html
<form>
  <input type="submit" id="agree" value="Agree to terms" />
</form>
```

```js
const form = document.querySelector("form")
form.addEventListener("submit", event => {
  console.log("It worked!")
})
```

* What's wrong with this form?

```html
<form>
  <button type="submit" id="agree">Agree to terms</button>
</form>
```

```js
const button = document.querySelector("#agree")
button.addEventListener("click", event => {
  console.log("It worked!")
})
```
