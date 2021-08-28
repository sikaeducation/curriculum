# HTML: Headings and Paragraphs

How do you give your HTML documents more structure? One of the easiest ways is marking different spaces with headings and text content within them as paragraphs. A heading is a block element that describes upcoming content. The primary heading for a document is an `<h1>`, and generally describes the purpose of this particular page on the website. Subsections within that use `<h2>`, `<h3>`, and so on. A paragraph is a block element for regular text content.

```html
<div>
  <h1>The History of Jazz</h1>

  <h2>Pre-20th Century</h2>
  <p>Content about pre-jazz goes here</p>

  <h2>1920-1940</h2>
  <p>Swing music</p>
  <h3>Louis Armstrong</h3>
  <p>Super influential</p>

  <h2>1940-1960</h2>
  <p>Bop</p>
  <h3>Charlie Parker</h3>
  <p>Bop</p>
  <h3>Dizzy Gillespie</h3>
  <p>Bop</p>
</div>
```

## Watch Out

* For an HTML document to be valid, headings have to be used in order. You can't use an `<h3>` if there isn't already a `<h2>` for the content being structured.
* "Headings" are not the same as the "head" (which is HTML content that should not render on the screen, like linked stylesheets) or "headers", which are a parts of a document that often contain titles and navigation and are often displayed at the top.
* There are only 6 semantic headings (`<h1>` through `<h6>`). There is no `<h7>` or greater.
* Documents are only supposed to have one `<h1>` tag per page.
* `<p>` tags don't need to be used for labels or things that aren't otherwise narrative content.

## More Resources

| Resource | Description |
| --- | --- |
| [MDN Documentation: Headings](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) | MDN's documentation of the heading elements. |
| [MDN Documentation: `<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) | MDN's documentation of the `<p>` element. |
