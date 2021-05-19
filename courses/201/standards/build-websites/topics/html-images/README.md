# HTML: Images

Images serve a lot of purposes on websites. They illustrate complex ideas, they can be used for iconography, and sometimes they are even the primary content. How can you embed images in HTML pages?

## The `<img>` Tag

The oldest and most widely-used HTML tag for images is the `<img>` tag. It's a self-closing tag that has 2 required attributes: `src` and `alt`.

```html
<img src="hillside.jpg" alt="A view of a serene hillside" />
```

* The `src` attribute takes a URL or path to the image, the `alt` attribute describes what's in the image for screen readers.
* The `<img>` tag supports jpegs, pngs, SVGs, and many other kinds of image files.
* By default, `<img>` is treated as an inline element (this can be changed with CSS)

## Writing Good Alt Text

[Ideas for exercises](https://supercooldesign.co.uk/blog/how-to-write-good-alt-text)
[Writing good alt text](https://twitter.com/whykristenburns/status/1391108176695726085)

* Be succinct
* Include text that's part of the image, unless that text is already in the page or part of a caption
* Don't say "image of", etc., but indicating the type of image is helpful (eg. "Portrait of")
* Include things that are important to understanding why the image was used

## The `<figure>` Tag

A figure is either:

* An image with a caption
* An image that's being referenced in the text

(example)
(example)
(example)

The `<figure>` tag wraps an `<img>` tag, and generally a `<caption>` too:

```
<figure>
  <img src="" alt="" />
  <caption></caption>
</figure>
```

## The `<picture>` Tag

This is a newer element. It allows different images to be loaded based on different situations, such as:

* Support for particular image formats
* Different screen sizes, so bandwidth can be saved
* Art direction, where different images are more artistically appropriate based on the scenario

```html
<picture>
  <source srcset="big.jpg" media="(min-width: 800px)" />
  <img src="small.jpg" alt="A bear" />
</picture>
```

If no `<source>` is more appropriate or the `<picture>` tag isn't supported, the browser will fallback to the `<img>`.

## Watch Out

* The only `<img>` tags that don't need `alt` text are purely decorative images (such as a fleur de lis):
* Images can get really large, which slows down page load. Using CSS to shrink an image does not actually make the file any smaller, so either only use images that are already the largest they'll need to be, or use the `<picture>` tag to load different images for different screen sizes

(image here)
