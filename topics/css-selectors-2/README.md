# CSS: Selectors 2

You can select elements by tag name, class, or ID, and those are sufficient a lot of the time. How would you select an element based on what its parents or siblings are, or by some property that it has?

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
nav a {
}
```

## Sibling Selector

## Attribute Selectors

## Watch Out!

* Don't confuse descendant selectors with including multiple rules. `ul li` selects all `<li>`s that are children of `<ul>`s, `ul, li` selects all `<ul>` as well as all `<li>`s.
* You can't select an element based on which children it has, or by which elements come after it.
* Descendant and sibling selectors target the last element in the expression. That means `ul li` and `ul > li` will only target the `<li>`, and `p + a` will only target the `<a>`

## History

These selectors were all added later.
