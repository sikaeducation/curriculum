# CSS: Resets

Your browser includes a bunch of default styles. They do things like make the text in `<h1>` tags large and bold, and make `<p>` tags display as blocks. Not all of these styles are the same between browsers though, and those styles might interfere with your designs. How can we get around this?

## Resets

A CSS reset is a custom stylesheet that overrides browser defaults and gives you a clean slate to work from. Resets remove styling so that all elements are visually represented the same way. The most popular reset is called the "Meyer Reset". There are two ways you can use it:

* By linking it from a CDN. This requires that the browser download an extra file, but a user's browser may also have it cached from another site.
* By copy/pasting it from the website into your stylesheet.

## Watch Out

* Resets typically remove all default browser styling. If you'd like to maintain some browser defaults but make them consistent across browsers, there are similar stylesheets called "normalizers."
* One of the most useful rules to put in a reset is setting all block elements to `box-sizing: border-box`. This doesn't come by default in the Meyer reset.

## History

Eric Meyer created the most widely-used CSS reset.
