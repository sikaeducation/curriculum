# CSS: Units

## Why?

Some CSS properties take options from a fixed list, like `display`. Most of them take some kind of unit, and these are core to doing anything with CSS. Units have tradeoffs that you need to be aware of, however.

## Example

If something takes a measurement as an argument, any valid measurement will do:

```css
width: 100%; /* Will take up all of the width of the parent, regardless of its size */
width: 300px; /* Will be 300px wide regardless of the size of the parent */
width: 10em; /* Takes up space relative to the font size of this element */
width: 10rem; /* Takes up space relative to the font size of this document */
width: 100vw; /* Takes up the entire screen */
```

Any of these can be the right choice given the right goal.

## What's Going On?

### Absolute Units

Use these to set the size of something, regardless of its parent or any other context. The most common absolute measurement unit is the pixel, which you indicate with `px`.

```css
font-size: 16px;
```

### Relative Units

Most other CSS units are relative to something else:

| Unit | Relative To |
| --- | --- |
| % | Size of parent container |
| em, ex | Size of the font for this element
| rem, rex | Size of the base font for this document
| vh, vw | Size of the screen height/width |

```css
line-height: 2em;
width: 100%;
height: 100vh;
```

## History

The initial units for CSS were `px` and `%`. The other came later as CSS matured, and there's an entire committee that works on these.
