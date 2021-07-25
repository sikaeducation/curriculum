# HTML: Text Semantics

Once you've found the correct semantic tag to categorize a piece of content, such as `<p>`, `<li>`, or `<footer>`, how do you further classify semantic content within that? How do you indicate that a piece of content is emphasized or otherwise has a special meaning?

## Common Inline Text Markup

### `<em>` and `<strong>`

`<em>` and `<strong>` are both used for emphasis. By default, browsers will render them as italic and bold respectively, but it's important to underscore that what something means is unrelated to how it appears in semantic markup. For example:

```html
<p>I don't know if that's what he <em>really</em> meant to say</p>
<p>This needs to stop <strong>right now!</strong>.</p>
```

You can make text italic or bold with CSS without using the `<em>` or `<strong>` tags, so reserve those tags for when they add something to the content.

### `<time>` and `<address>`

`<time>` is used for any kind of date or time in markup. Some common uses:

* The date an article was published
* The last time a piece of content was updated
* The date and time an event is occurring

`<address>` is used for locations and email addresses. Some common uses:

* The contact email address for an author
* The location of an event

For example:

```html
<article>
  <header>
    <h2>This is an important headline!</h2>
    <p>Published on <time datetime="2021-07-19">Monday</time> by <address><a href="https://twitter.com/user-name-here">@usernamehere</a></address></p>
  </header>
</article>
```

This indicates that the "Monday" in the byline can be referenced by a specific date (using the `datetime` attribute), and that the Twitter link is a way to contact the author.

### `<small>`

Used primarily for legal text and copyright notices. You can remember this by thinking of it as "the small print."

```html
<footer><small>©1997 Apple, Inc.</small></footer>
```

## History

Before HTML5, the most common inline text markup elements were `<b>` (for bold), `<i>` for (italic), and `<u>` (for underline). All three of those describe what text looks like, rather than what it is. All three elements are still present in HTML, but have new semantic meanings and are much less common.
