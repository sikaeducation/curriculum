# Basic CSS

CSS is how you decorate content.

## CSS Selectors

To style an HTML element, you need to write code that "selects" it.

```html
<h1>A heading<h1>
<p id="instructions">These are the instructions</p>
```

```css
h1 {
  color: red;
}
#instructions {
  color: blue;
}
```

You can either select all elements with the same tag, or you can select an element by it's ID by putting a `#` in front of the ID.

## CSS Rules

Once you've selected elements, you can declare what you'd like them to look like.

```css
h1 {
  padding: 24px;
  background-color: grey;
  font-family: Helvetica, sans-serif;
}
```

CSS rules have a property (on the left) and a value (on the right). They're separated with a `:` and end with a `;`.

Some common CSS properties:

* `font-family: Arial, sans-serif;`
* `font-weight: bold;`
* `font-size: 32px;`
* `display: block;`
* `display: inline;`
* `max-width: 200px;`
* `background-color: red;`
* `color: grey;`
* `padding: 16px;`
