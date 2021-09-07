# DOM: Events

Tools like `document.createElement`, `document.querySelector`, and `.append` are used to create parts of web pages with JavaScript. However, that isn't necessarily interactive; interaction is when the page changes in response to user behavior. This is accomplished with events.

## Events

Most actions that users take on web pages, such as clicking, double clicking, hovering, and submitting forms, are events. You can listen for these events and trigger functions in response to them:

```html
<button>Click Me</button>
```

```js
const button = document.querySelector("button")
button.addEventListener("click", event => {
  console.log("The button was clicked!")
})
```

`.addEventListener` is a method available on any DOM node. It takes two arguments:

1. A string with the name of the event. Common ones are "click", "dblclick", "submit", "mouseover", and "keydown".
2. A function that should be called when the event happens. The function will be called with an `event` object that has more details about the event that happened.

There are no limits to what or how much can be done in an event handling function. You can read things off the page, create elements and manipulate the DOM, make network requests, and anything you can do with JavaScript.

## Watch Out!

* Events always come from a specific DOM node. It's not always obvious which DOM node fired the event (such as typing on a keyboard or something happening on the network). In these cases, the DOM node is usually `document` itself:

```js
document.addEventListener("keydown", event => {
  console.log("Hey, someone's typing!")
})
```

* You can add an event listener to a DOM node, but not a list of DOM nodes. If you want the event to be added to a list of nodes that came back from `document.querySelectorAll`, you want to `.forEach` over the DOM nodes and use `.addEventListener` to each one.
* Be careful adding event listeners in loops because you can accidentally add multiple event listeners for the same event on the same DOM node. For example:

```js
const button = document.querySelector("button")
const lis = document.querySelectorAll("li")
lis.forEach(li => {
  button.addEventListener("click", event => { // Added to the button, not the li!
    console.log("Hi!")
  })
})
```

This adds an additional click listener to `button` for every `li` on the page. If there are 10 lis, "Hi!" will log 10 times when the button is clicked.

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: Events Tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) | MDN's tutorial on DOM events |
| [MDN: Events Interface](https://developer.mozilla.org/en-US/docs/Web/Events) | MDN's reference on the DOM event interface |
| [MDN: Events Reference](https://developer.mozilla.org/en-US/docs/Web/Events) | MDN's reference on DOM events |
| [Video: Learn JavaScript Event Listeners in 18 Minutes](https://www.youtube.com/watch?v=XF1_MlZ5l6M) | Web Dev Simplified's guide to Events |
