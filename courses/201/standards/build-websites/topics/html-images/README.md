# HTML: Images

Images serve a lot of purposes on websites. They illustrate complex ideas, they can be used for iconography, and sometimes they are even the primary content. How can you embed images in HTML pages?

## `<img>`

The oldest and most widely-used HTML tag for images is the `<img>` tag. It's a self-closing tag that has 2 required attributes: `src` and `alt`.

```html
<img src="hillside.jpg" alt="A view of a serene hillside" />
```

* The `src` attribute takes a URL or path to the image, the `alt` attribute describes what's in the image for screen readers.
* The `<img>` tag supports JPEGs, PNGs, SVGs, and many other kinds of image files.
* By default, `<img>` is treated as an inline element (this can be changed with CSS)

Good alt text is succinct. Include any text that's part of the image, unless that text is already in the page or part of a caption. Don't write "Image of", but indicating the type of image can be helpful, such as  "Portrait of". Basically, include things that are important to understanding why the image was used.

## The `<figure>` Tag

A figure is either an image with a caption, or an image that's being referenced in the text but could theoretically be moved to another part of the document or an appendix and still make sense. This is especially common with reference material.

The `<figure>` tag usually wraps an `<img>` tag, and often a `<figcaption>` too:

```html
<figure>
  <img src="bear.jpg" alt="A Grizzly Bear fishing in a stream" />
  <figcaption>Bears are excellent at fishing</figcaption>
</figure>
```

## The `<picture>` Tag

This is a newer element. It allows different images to be loaded based on different situations, such as:

* Needing browser support for a particular image format
* Saving bandwidth by serving different resolutions for different screen sizes
* Art direction, where different images are more artistically appropriate based on the scenario

```html
<picture>
  <source srcset="bear-full-res.jpg" media="(min-width: 800px)" />
  <img src="bear-min-res.jpg" alt="A Grizzly Bear fishing in a stream" />
</picture>
```

If no `<source>` is more appropriate or the `<picture>` tag isn't supported, the browser will fallback to the `<img>`.

## Watch Out!

* The only `<img>` tags that don't need `alt` text are purely decorative images, such as a fleur de lis.
* Images can get really large, which slows down page load. Using CSS to shrink an image does not actually make the file any smaller, so either only use images that are already the largest they'll need to be, or use the `<picture>` tag to load different images for different screen sizes.

## More Resources

| Resource | Description |
| --- | --- |
| [MDN Documentation: `<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) | MDN's documentation of the `<img>` element. |
| [MDN Documentation: `<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) | MDN's documentation of the `<picture>` element. |
| [MDN Documentation: `<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source) | MDN's documentation of the `<source>` element. |
| [MDN Image Format Guide](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types) | MDN's guide to selecting and using different image formats. |
| [MDN Responsive Image Lesson](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) | MDN's guide to making images responsive. |
| [MDN Documentation: `<figure>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) | MDN's documentation of the `<figure>` element |
| [MDN Documentation: `<figcaption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption) | MDN's documentation of the `<figcaption>` element |
| [How to Write Good Alt Text](https://supercooldesign.co.uk/blog/how-to-write-good-alt-text) | Great article with examples of good and bad alt text |
| [Writing Good Alt Text](https://twitter.com/whykristenburns/status/1391108176695726085) | An outstanding series of Tweets identifying characteristics of good alt text |
