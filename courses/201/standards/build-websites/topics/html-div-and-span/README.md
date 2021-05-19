# HTML: `<div>` and `<span>`

HTML is for structuring content. What does that mean?

## Unstructured content

When content is unstructured, it doesn't follow any particular format. For example, an unstructured menu at a restaurant might look like this:

```
We serve cheese pizza ($9.99), you can add pepperoni for 2 bucks, and we serve salads starting at $5.
```

The same content might look like this with structure:

```html
<div>
  <div>
    <span>Cheese Pizza</span> - <span>$9.99</span>
  </div>
  <div>
    <span>Pepperoni Pizza</span> - <span>$11.99</span>
  </div>
  <div>
    <span>Salad</span> - <span>$5.00+</span>
  </div>
</div>
```

When content is structured, we can target specific parts of it. This helps with styling and programming them.

## Block and Inline Content

The simplest and most generic way that content can be structured is categorizing it as either "block" or "inline."

### Block content

Content that would ordinarily take up an entire row when presented. Examples include headings and paragraphs.

```html
<div>A heading</div>
<div>An entire paragraph of content could go here</div>
```

### Inline content

Content that would ordinarily not break the flow of content when presented. Examples include emphasized text in a passage and links.

```html
<div>An <span>emphasized</span> heading</div>
<div>An entire paragraph of <span>linked content</span> could go here</div>
```

Inline content usually occurs inside of block content.

### `<div>` and `<span>`

Generic block content is represented in HTML by putting it in between `<div>` tags. `<span>` is used the same way for inline content.

HTML features over 100 tags that are reserved for specific purposes (including headings, paragraphs, emphasis, and links). When none of the existing tags are appropriate for your structure, `<div>` and `<span>` can be used as custom tags.

## Watch Out!

* It's tempting to use `<div>` and `<span>` for everything in an HTML document, and many developers do exactly this. This is a bad practice for web development. As you learn more semantic tags, you should use those first and only use `<div>` and `<span>` when there aren't existing tags that are more appropriate.
