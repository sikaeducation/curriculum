# CSS: Layout 1

## Why

CSS is often misunderstood, even by expert developers. High-level layout in CSS is usually where the misunderstanding starts. Getting this part right is key to understanding CSS as a whole.

## Example

It's common to see people try to torture their layout into shape with something like this:

```css
```

When all they really needed to do was this:

```css
```

## What's Going On?

(Draw a diagram of "children" and "parents")

Every element in HTML gets rendered as a rectangle. Sometimes the rectangle tries to take up all of the available space, sometimes it only takes up the space that it needs. These are mostly determined by the element's "display mode":

* `display: block;`: Try to take up all of the horizontal space of your parent
* `display: inline;`: Only take up the space you need, allow other elements to sit on the same line.

(Map the HTML to the CSS to the image)

There are other display modes, but even those are ultimately derived from these two.

## Gotchas

* If the parent of an element is the entire document, it will take up the entire screen
* If the parent of an element is constrained, the child will share those constraints, eg `width: 100%;`. You can break them by using absolute units.
* If you set an element's height to 100%, it won't stretch its parent container out.
* It is deeply unhelpful to think of a web page or app in terms of "screens" for styling. Always remember that they're documents.

## History

HTML and CSS were originally for formatting documents. A heading takes up all of a line, a paragraph takes up an entire line, something being bold or underlined only takes up a little bit of space.
