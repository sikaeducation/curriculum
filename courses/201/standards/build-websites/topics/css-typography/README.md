# CSS: Typography

## Why?

Creating good font stacks is what helps or hinders someone from reading your content.

## Example

The current browser default type (which is determined by the user-agent stylesheet) on Chrome looks like this:

(image here)

This isn't a bad place to start, but it has a few problems:

* No hierarchy
* No personality
* Too wide

With a little bit of type work, we can fix all of those problems:

(image here)

## What's Going On

The most common CSS properties for typography are:

| Property | Example | Purpose |
| --- | --- | --- |
| `font-family` | `font-family: Roboto, Arial, sans-serif;`| Sets the typeface for an element and its descendants. If the first font can't be loaded for whatever reason, the browser will try the next typeface in the list until it finds one it can load. |
| `font-size` | `font-size: 16px;`| Sets the size of the font |
| `font-weight` | `font-weight: bold;`| Sets the weight of the font. Can be a keyword (eg. bold), or a number (eg. 700) |
| `font-style` | `font-style: italic;`| Sets the style of the font. Can be `normal`, `italic`, or `oblique` |
| `text-align` | `text-align: center;`| Sets the alignment of the text. Can be `center`, `left`, `right`, or `justified`. |
| `text-decoration` | `text-decoration: underline;`| Adds underlines or strikethroughs to text. Can be set to _none_ to remove existing decoration (eg. for links). |
| `text-transform` | `text-transform: uppercase;`| Changes the case of the characters in the element. |
| `line-height` | `line-height: 1.5;`| Sets the space between lines of text. |
| `color` | `color: hsl(0, 50%, 50%;)`| Sets the color of text. |

## Gotchas

* Some of the type CSS properties start with `font-`, and some start with `text-`. If it has to do with the typeface, weight, style, or size, it will be `font-`. If it has to do with decorations, alignment, spacing, or anything that doesn't actually change the glyphs themselves, it will be `type-`.
* Font properties are inherited by all their children.
* Always specify a fallback typeface. These are determined by the operating system the browser is running on, and have generic names: `sans-serif`, `serif`, `cursive`, `mono`. This way, if there's a network issue, you still maintain at least some of your typography.
* Setting the text alignment aligns the text _within the element__. If the element is already wrapped tightly around the text, you may not notice any difference in the alignment.
* Setting the text alignment also doesn't affect the positioning of the element itself, or any other descendant elements. It only affects text and images.

## History

There was a long period on the web where you were limited to "web safe" fonts- Arial, Helvetica, etc. When you specify a font, the user has to have that installed on their machine. Now, browsers support "web fonts" that will install a font on the user's computer over the internet if they don't have it already.
