# CSS: Selectors 3

You can select elements by tag name, class, and ID. You can select elements based on what parents they have, what siblings they have, and what attributes they have. We have a lot of ways to target elements but we still can't:

* Select the 4th occurrence of an element
* Add bullets, hyphens, and other decorations to elements
* Style links differently if they've been visited

To do those things, we need pseudo-classes and pseudo-elements.

## Pseudo-Classes

Pseudo-classes select elements that are in particular states:

```css
a:visited {
}
```

This selector targets any anchor tag that's already been visited by a user. Traditionally, an unvisited link is blue, and a visited link is purple. This selector lets you customize that. Links in particular have 3 pseudo-classes:

* `:link` - Specifically targets an unvisited link
* `:visited` - A visited link
* `:active` - A link that is currently being clicked

Another pseudo-class that will work on links or any other element is `:hover`, which is applied any time a cursor is hovering over an element.

Another type of pseudo-classes targets specific occurrences of an element. For example:

```css
.user:first-child {
}
```

This targets an element with a class of `user` that is the first child of its parent.

```html
<ul>
  <li class="user">1</li>
  <li class="user">2</li>
  <li class="user">3</li>
</ul>
```

In this example, `.user:first-child` would target `1`, but not `2` or `3`. You can also target `3` with `.user:nth-child(3)`.

Other common pseudo-classes:

* `:last-child` - Targets an element that is the last child of its parent
* `:not(another-selector)` - Targets an element that doesn't also match another selector
* `:even` / `:odd` - Targets elements that are even or odd children of their parents. Useful for "striping" a list or table.

## Pseudo-Elements

Pseudo-classes target elements that are in particular states. Pseudo-elements target parts of elements that are not technically separate elements. For example:

```css
li + li::before {
}
```

This targets any `<li>` that immediate follows another `<li>`, and lets you apply styles to the space immediately before them. Why is this useful?

```css
li + li::before {
  content: " - ";
}
```

You can add decorative content to elements. That take a list that looks like this:

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

Which would ordinarily render as `123`, and instead render it as `1 - 2 - 3`. This is preferrable for any kind of decoration that isn't semantic.

Other CSS pseudo-elements:

* `::after` - Targets the area after an element
* `::first-letter` - Targets the first letter of something, usually used to make a drop cap
* `::first-line` - Targets the first line of something, usually used in conjunction with small caps
* `::selection` - Changes the styling for content a user has highlighted

## Watch Out

* `a:hover` MUST come after `a:link` and `a:visited` in the CSS definition in order to be effective! `a:active` MUST come after `a:hover` in the CSS definition in order to be effective!
* When using the `:first-child`, `:last-child`, and `:nth-child` selectors, note that other elements that don't match the selector still count as children. So if the HTML is:

```html
<div>
  <p>1</p>
  <span>1</span>
  <section>1</section>

  <p>1</p>
  <span>1</span>
  <section>1</section>
</div>
```

`section:nth-child(2)` would return nothing, since the only `<section>` element is the 3rd child of its parent `<div>`. You can use `nth-of-type` to only count matches for the type you specify. `section:nth-of-type(2)` would return the second `<section>`
* When using `child` or `type` selectors, note that your selector is for the element you want, not the type of the parent
