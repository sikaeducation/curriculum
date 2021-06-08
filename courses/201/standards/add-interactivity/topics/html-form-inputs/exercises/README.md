# HTML: Form Inputs: Exercises

## Questions

* What is the purpose of a label?
* What connects a label to a form input?
* How do you prevent a form from submitting without a value being entered in an input?
* List 5 input types
* What is the purpose of a placeholder attribute?
* Compare and contrast `value` on an `<input />` with `value` on an `<option>`
* How do make an option unselectable in a dropdown or multiselect?
* How do you create a multiselect?
* How do you group related options in a dropdown or multiselect?
* A user is selecting from one of 3 options. What is the appropriate input type?
* A user is selecting from one of 10 options. What is the appropriate input type?
* Compare and contrast multiselects, dropdowns, checkboxes, and radio buttons
* When should a textarea be used over an input?
* Why isn't this form working?

```html
<form>
  <label for="first-name">First Name</label>
  <input id="first-name" />

  <label for="last-name">Last Name</label>
  <input id="last-name" />

  <input type="submit" value="Create Account" />
</form>
```

```js
const form = document.querySelector("form")
form.addEventListener("submit", event => {
  event.preventDefault()

  const newUser = new FormData(event.target)

  const firstName = newUser.get("first-name")
  const lastName = newUser.get("last-name")

  console.log(firstName, lastName) // undefined, undefined
})
```

* Why isn't this form working?

```html
<form>
  <label for="first-name">First Name</label>
  <input id="first-name" name="first-name" />

  <label for="last-name">Last Name</label>
  <input id="last-name" name="last-name" />

  <input type="submit" value="Create Account" />
</form>
```

```js
const form = document.querySelector("form")
form.addEventListener("submit", event => {
  event.preventDefault()

  const newUser = new FormData(event.target)

  const firstName = newUser.firstName
  const lastName = newUser.lastName

  console.log(firstName, lastName) // undefined, undefined
})
```

* What's wrong with this form?

```html
<form>
  <label for="first-name">First Name</label>
  <input name="first-name" />

  <label for="last-name">Last Name</label>
  <input name="last-name" />

  <input type="submit" value="Create Account" />
</form>
```

## Activities

Build a form that collects a first name, a last name, and logs them when submitted.

---

Constrain this form input to only positive numbers:

```html
<input type="number" name="age" />
```

---

Constrain this form input to only numbers over 18 and under 120:

```html
<input type="number" name="age" />
```

---

Manually create a dropdown featuring all 12 months

---

Manually create a dropdown featuring all 12 months, grouped by quarter.

---

Manually create a multiselect featuring all 12 months

---

Create an input that allows a user to select a month from a datepicker.

---

Create an input that allows a user to select a color.

---

Create a form that collects an email address and a comment.
