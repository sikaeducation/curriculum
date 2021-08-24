# CSS: Units

Some CSS properties take options from a fixed list, like `display`. Most of them take some kind of length unit and these are core to doing anything with CSS. If something takes a length as an argument, any valid length unit will do. That said, different units do different things:

```css
width: 100%;  /* Width is the same as the parent, regardless of its size        */
width: 300px; /* Width is 300 pixels wide regardless of the size of the parent  */
width: 10em;  /* Width is 10 times the font size of this element                */
width: 10rem; /* Width is 10 times the font size of this document               */
width: 100vw; /* Width is the entire screen                                     */
```

Any of these can be the right choice for a particular goal.

## Absolute Units

Use these to set the size of something, regardless of its parent or any other context. The most common absolute length unit is the pixel, which you indicate with `px`.

```css
font-size: 16px;
```

## Relative Units

Most other CSS units are relative to something else:

| Unit | Relative To |
| --- | --- |
| `%` | Size of parent container |
| `em` | Size of the font for this element
| `rem` | Size of the base font for this document
| `vh`, `vw` | Size of the screen height/width |

For example:

```css
line-height: 2em;
width: 100%;
height: 100vh;
```

## Watch Out!

Sizing elements with pixels is intuitive, but it can also hurt responsiveness. If you specify an element to be `600px` wide, it will still be that size even if the screen width is less than that. This will cause a horizontal scrollbar and a poor user experience on mobile. There are many good reasons to use pixels (especially when combined with media queries), but first consider if a relative unit is more appropriate.

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: Length units reference](https://developer.mozilla.org/en-US/docs/Web/CSS/length) | MDN's official reference for CSS length units |
| [MDN: Units tutorial](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) | MDN's official tutorial for CSS units |
