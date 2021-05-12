# HTML: Text Semantics

Regular text content goes inside of `<p>` tags. What about semantic markup within a `<p>` tag?

## Common Inline Text Markup

### `<em>` and `<strong>`

`<em>` and `<strong>` are both used for emphasis. By default, browsers will render them as italic and bold respectively, but it's important to underscore that what something means is unrelated to how it appears in semantic markup.

Some examples:

```html
<p>I don't know if that's what he <em>really</em> meant to say</p>
<p>This needs to stop <strong>right now!</strong>.</p>
```

### `<time>` and `<address>`

`<time>` is used for any kind of date or time in markup. Some common uses:

* The date an article was published
* The last time a piece of content was updated
* The date and time an event is occurring

`<address>` is used for locations and email addresses. Some common uses:

* The contact email address for an author
* The location of an event

### `<small>`

Used primarily for legal text and copyright notices. You can remember this by thinking of it as "the small print."

```html
<p><small>©1997 Apple, Inc.</small></p>
```

## History

Before HTML5, the most common inline text markup elements were `<b>` (for bold), `<i>` for (italic), and `<u>` (for underline). All three of those describe what text looks like, rather than what it is. All 3 elements are still present in HTML, but have new semantic meanings and much less common.
