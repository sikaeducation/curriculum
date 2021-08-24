# CSS: Forms

There are a few styling concerns specific to forms.

## `<textarea>`

By default in most browsers, `<textarea>` elements are user-resizable and start with a modest height. You may wish to modify this behavior:

```css
textarea {
  padding: 1em;
  resize: none; /* can also be vertical or horizontal */
  width: 100%;
  height: 10em;
}
```

## Consistent Widths

Depending on the design of the form, it may be difficult to get elements in a form to align correctly. One way to fix this is to set an explicit size for the form itself, and then use relative sizing within the form.

```css
form {
  width: 400px;
}
input, label, select, textarea {
  width: 100%;
}
```

This approach is fairly intuitive and works for many kinds of forms. CSS Grid can also be used, and is well-suited for tasks like aligning radio buttons and checkboxes.

## Errors

You can control how form errors (such as invalid inputs or missing `required` inputs) are styled with the pseudoclass `:invalid`:

```css
input:invalid, textarea:invalid {
  border: 2px solid hsl(0, 50%, 50%);
}
```

## Focus

As a user moves through form inputs, each of them gets "focus" by the browser. You can indicate how an input with focus should be styled with the `:focus` pseudoclass:

```css
input:focus, textarea:focus {
  border-bottom: 4px solid hsl(240, 50%, 50%);
}
```

## Watch Out!

* Setting the width of an `<input />` doesn't take into account the padding of the element by default. The inputs must have `box-sizing: border-box;` set for them to work as expected.
* Red is commonly used to indicate that there was a problem with an input. The most common form of color-blindness makes the color red appear grey, so invalid input requires an additional indicator (usually a text message or `*`, sometimes provided by the browser itself).

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: Styling web forms](https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms) | MDN's tutorial on styling web forms |
| [MDN: Advanced form styling](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling) | MDN's tutorial on advanced web form styling |
