# CSS Selectors: Tag, Class & ID

There are a lot of different ways to select elements to style in CSS, and the most fundamental are tag, ID, and class selectors.

## Tag Selectors

To select elements by tag, use the name of the tag:

```css
li {
  /* Apply styles to every <li> element */
}
```

If you want to target multiple tags, comma-separate them:

```css
input, label {
  /* Apply the same styles to every <input> and <label> element */
}
```

## Class Selectors

To select elements by class, prefix the class name with `.`:

```html
<div class="user"></div>
```

```css
.user {
  /* Apply styles to every element with the "user" class */
}
```

Note that many elements can share the same class.

## ID Selectors

To select elements by ID, prefix the ID with `#`:

```html
<button id="logout"></button>
```

```css
#logout {
  /* Apply styles to the element with the "logout" ID */
}
```

IDs are supposed to be unique within a single page, so this should always target one element.

## Choosing Between Tag, Class, and ID Selectors

In general, you should choose the most specific selector you can. If you can select something by ID, the browser will apply the style faster than selecting the same element by tag. Beyond that, here are some guidelines:

* The tag selector is useful for overriding default browser styles and making the base styles for pages
* Classes are a good default because they're faster and more descriptive than tags, but easier to override than IDs
* Classes and IDs should describe what an element is (such as `.profile` or `#recently-viewed`), not what it looks like (such as `.blue` or `.centered`).

## Watch Out!

* It's easy to forget the `.` and `#` symbols when selecting classes or IDs.
* Multiple selectors are separated by commas; Separating them with only spaces is a different kind of selector.

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: Type, Class, and ID Selector Tutorial](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors) | MDN official tutorial for tag, class, and ID selectors |
| [MDN: Type Selector Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) | MDN official reference for tag selectors |
| [MDN: Class Selector Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) | MDN official reference for class selectors |
| [MDN: ID Selector Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors) | MDN official reference for ID selectors |
| [Video: Learn Every CSS Selector in 20 Minutes](https://www.youtube.com/watch?v=l1mER1bV0N0) | Web Dev Simplified's guide to CSS selectors |
