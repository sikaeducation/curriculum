# Form Submission

When a user fills out a form, how do you use the information they submitted?

## Submit Buttons

There are two ways to submit a form in HTML:

```html
<form>
  <input type="submit" value="This button submits the form!" />
</form>
```

```html
<form>
  <button type="submit">This button submits the form!</button>
</form>
```

They both do the same thing, with the following distinctions:

* An `<input />` is a self-closing tag and `<button>` is not, which means that `<input />` can only have text content while `<button>` can have any valid HTML in it (such as images).
* An `<input />` is mildly more correct semantically, since a `<form>` is supposed to be submitted by keyboard with "enter", while `<button>` interactions are supposed to happen with "spacebar".

Both are in common use.

## The `submit` event and `event.preventDefault()`

To intercept a form submission with JavaScript, listen for the `"submit"` event on the form:

```js
const form = document.querySelector("form")
form.addEventListener("submit", event => {
  event.preventDefault()

  // Handle form submission here
})
```

The first thing in a form submission handler should be `event.preventDefault()`. `event` is an object that's passed into the function, and `.preventDefault()` is a method that stops the browser from trying to submit the form and allows you to write your own logic for it.

## Getting Data From a Form

```js
const form = document.querySelector("form")
form.addEventListener("submit", event => {
  event.preventDefault()

  const formData = new FormData(event.target)
  const firstName = formData.get("first-name")
  const lastName = formData.get("last-name")
  const email = formData.get("email")
})
```

To get data from a form, pass `event.target` into `new FormData()` and save the result into a variable. Then, use the `.get()` method to retrive the values for each form input. These match the `name` attribute from the form input.

You can use this data to create DOM elements, send HTTP requests, and much more.

## Watch Out!

* The `"submit"` event is fired by the `<form>`, not the the submit button
* If the page reloads when you submit the form (look for a query string with the form values in the URL), the `submit` event did not have its default behavior prevented. This could be because `event.preventDefault()` wasn't called, or because the HTML page couldn't find the JavaScript file, or because the `submit` event listener was added to the wrong element.

## History

`<form>` tags have historically used `method` and `action` attributes to indicate how they should be handled:

```html
<form method="POST" action="http://www.website.com/some-server-side-script.php">
</form>
```

When the form is submitted, your browser makes the type of HTTP request indicated by `method` (although it can only be GET or POST) and the `action` indicates where the HTTP request will be sent to.

While there are still uses for this style of form, it's fallen out of favor lately. Submitting the form is effectively a page navigation, meaning the response from the server needs to tell the browser where to go and an entire page load is required. For the more modern asynchronous experience, we need to prevent this behavior, which is why the first part of a form submission handler is usually `event.preventDefault()`.
