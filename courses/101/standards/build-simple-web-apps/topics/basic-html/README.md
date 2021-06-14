# Basic HTML

HTML is where the content of websites goes.

## Anatomy of a tag

![HTML tag](anatomy-of-a-tag-double.png)
![HTML tag](anatomy-of-a-tag-single.png)

* Tag name - These indicate what a tag means
* Attributes - These are properties of a tag that either configure it or further describe it
* Opening and closing tag - Most tags have an opening and closing pair that wrap the content they describe. Any attributes go inside the opening tag.
* Self-Closing tag - Some tags don't have closing tags and close themselves

## Nesting

HTML tags with opening and closing tags can be nested:

```html
<ul>
  <li>Item One</li>
  <li>Item Two</li>
</ul>
```

## HTML Style

* HTML is case-insensitive, which means that `<article>`, `<ARTICLE>` and `<Article>` will all work. However, it is conventional to write your HTML tags all lowercase.
* Indentation matters. While HTML is whitespace-insensitive (meaning that it ignores spaces and returns), inconsistent indentation makes it very difficult to read. For example, writing your code like this:

```html
<div><p>Some paragraph content here
  <img src="image.jpg" alt="An image" /></section>
```

Makes it difficult to tell that neither the `<p>` tag or the `<div>` tag were closed, and that the `</section>` closing tag doesn't have a matching opening tag. Rewritten like this:

```html
<div>
  <p>Some paragraph content here
  <img src="image.jpg" alt="An image" />
</section>
```

* Self-closing tags can be written with or without the close `/`. In other words, `<img>` and `<img />` are both valid. This has some interesting history, but presently it is conventional to include the `/` on self-closing tags.
* HTML attributes can be technically be enclosed in single or double-quotes. In other words, `<img src='image.jpg' />` and `<img src="image.jpg" />` are both valid. It conventional to use to double-quotes for all HTML attributes.
* Since HTML is whitespace-insensitive, it's often technically valid to leave lots of whitespace around your markup, like this: `< img src = " image.jpg " / >`. It is conventional to keep everything "trimmed" and only use spaces to separate multiple attributes: `<img src="image.jpg" alt="image description" />`.

## HTML Tags

* `<h1>A heading<h1>`
* `<p>Some paragraph content</p>`
* `<output>Some inline content</output>`
* `<input />`
* `<button>Button Text</button>`
* `<label>Label Text</label>`

## HTML IDs

To access the contents of specific tags with JavaScript, you'll want to add IDs to them. IDs look like this:

```html
<h1 id="primary-heading">A heading</h1>
<p id="introduction">This is introductory content</p>
<output id="word-3-output">Word 3 goes here</output>
<input id="word-3-input" />
<button>Button Text</button>
```

## Labeled Inputs

```html
<label for="some-id">Some Label</label>
<input id="some-id" />
```

It's important to connect labels with inputs for usability.

## Watch Out!

* Be careful of typographer's quotes! Most word processing programs like Word and Google Docs will substitute the `"` and `'` characters for `“`/`”` and `‘`/`’` characters (look for the curls). These are called "typographer's quotes", and cannot be used for HTML attributes. Always write your code in a text editor, not in a word processor!
* Tags need to be opened and closed in order. This is not valid:

```html
<div>
  <p>Some content
  </div>
</p>
```
