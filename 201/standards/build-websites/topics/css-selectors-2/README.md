# CSS: Selectors: Descendant, Sibling, and Attribute

You can select elements by tag name, class, or ID, and those are sufficient a lot of the time. How would you select an element based on what its parents or siblings are, or by some attribute that it has?

## Descendant Selectors

Descendant selectors target the children of an element. The most basic descendant selector just uses a space:

```css
nav a {
}
```

This selects all `<a>` tags that are children of `<nav>` tags. This means that in this example:

```html
<h1><a href="#">1</a></h1>
<nav>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
</nav>
```

`1` will not be selected, while `2`, `3`, and `4` are.

If you want to narrow the selection to elements that are direct descendants, you can use `>`:

```css
nav > a {
}
```

In the above example, none of the links would be selected. While they're all descendants of `<nav>`, the `<a>` elements are all direct descendants of `<li>`. If we changed the selector to:

```css
li > a {
}
```

`1` will not be selected, while `2`, `3`, and `4` are.

## Sibling Selectors

Sibling selectors select an element that is at the same level as another element:

```css
.user ~ a {
}
```

In this example:

```html
<div class="user">
  <p>1</p>
</div>
<p>2</p>
<p>3</p>
<p>4</p>
```

`1` will not be selected, while `2`, `3`, and `4` are.

A related selector is the adjacent sibling selector:

```css
li + li {
}
```

This would select every `<li>` that immediately follows another `<li>`. If you had a list like this:

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
```

`1` will not be selected, while `2`, `3`, and `4` are.

This is commonly used to style the first item in a group differently from the subsequent items.

## Attribute Selectors

The class selector will match any element that has that class. You can also select elements based on any attribute:

```html
<img src="great-picture.jpg" alt="close-up of a puppy" />
```

```css
[src="great-picture.jpg"] {
  width: 100%;
}
```

This is especially useful for targeting data attributes:

```html
<div data-test>Some content</div>
```

```css
[data-test] {
  border: 1px solid red;
}
```

## Watch Out!

* Don't confuse descendant selectors with including multiple rules. `ul li` selects all `<li>`s that are children of `<ul>`s, `ul, li` selects all `<ul>` as well as all `<li>`s.
* There's no way to select an element based on which children it has or by which elements come after it.
* Descendant and sibling selectors target the last element in the expression. That means `ul li` and `ul > li` will only target the `<li>`, and `p + a` will only target the `<a>`

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN descendant combinator reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator) | MDN official reference for descendant selectors |
| [MDN child combinator reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator) | MDN official reference for direct descendants |
| [MDN general sibling reference](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator) | MDN official reference for sibling selectors |
| [MDN adjacent sibling reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) | MDN official reference for adjacent sibling selectors |
| [MDN attribute selector reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) | MDN official reference for selectors |
| [MDN combinators tutorial](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators) | MDN official tutorial for descendant and sibling selectors |
| [MDN attribute selector tutorial](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) | MDN official tutorial for attribute selectors |
| [Video: Learn Every CSS Selector in 20 Minutes](https://www.youtube.com/watch?v=l1mER1bV0N0) | Web Dev Simplified's guide to CSS selectors |
