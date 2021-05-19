# CSS: Media Queries

Let's say you have a page that looks like this on a laptop:

(example)

But you want it to look like this on a phone:

(example)

How can you write CSS to accomodate this?

## Media Queries

Media queries allow you to write styles that only apply in certain situations. For example:

```css
p {
  color: blue;
}
@media (max-width: 300px) {
  p {
    color: red;
  }
}
```

This will make the text of all paragraphs blue, unless the screen less than 300px wide, in which case the text will be red. `max-width` and `min-width` are the most common things to query, but there are others:

* `screen`, `print`, and `speech` - Target specifically those 3 modes, useful for hiding things from screen readers or removing elements for print
* `orientation` - Whether the width is greater than the height or the other way around
* `resolution` - The pixel density of the device

You can combine multiple selectors with `and` and `not`

```css
@media (min-width: 300px) and (max-width: 600px) {
}
@media (min-width: 300px) and not (print) {
}
```

## Responsive Design

Media queries are a powerful way to override specific styles for mobile. For example, we might want to constrain the width of something on a large screen, while overriding it to use the entire space on a small screen:

```css
p {
  width: 200px;
}

@media (max-width: 350px){
  p {
    width: 200px;
  }
}
```

As a strategy, start with general style rules for the largest display and then use media queries as needed to override those styles for progressively smaller screens. The size at which a design changes is called a "breakpoint."

## Watch Out

* It's tempting to try to make breakpoints based on common device sizes. Instead, make your breakpoints based on when the design needs it, independent of what device is displaying it.
* Individual queries need to wrapped in `()`
* Media queries look like CSS rules because they are wrapped in `{}`- don't forget that you still need to use CSS selectors inside of them
* Styles are still applied first-to-last. So this works as expected:

```css
p {
  width: 200px;
}

@media (max-width: 350px){
  p {
    width: 200px;
  }
}
```

But this will always be 200px, because the second rule overrides the first:


```css
@media (max-width: 350px){
  p {
    width: 200px;
  }
}

p {
  width: 200px;
}
```
