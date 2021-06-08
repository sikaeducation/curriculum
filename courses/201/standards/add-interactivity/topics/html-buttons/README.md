# HTML: Buttons

Now that you're comfortable working with the DOM and events, we can start using one of the most practical means of interaction: HTML buttons.

```html
<button id="agreement">Click to Agree to Terms</button>
```

```js
const agreementButton = document.querySelector("#agreement")
const isAgreed = false
agreementButton.addEventListener("click", event => {
  isAgreed = true  
})
```

## Button Styling

Buttons have one of the more distinctive default browser styles:

(example image)

These are the properties you want to override to make butons look consistent across browsers:

* `padding`
* `border`
* `background-color`
* `color`
* `box-shadow`

## Watch Out!

* Semantics still matter with buttons. Many elements can look button-like (such as checkboxes and navigation links), but a `<button>` is specifically for commands.
