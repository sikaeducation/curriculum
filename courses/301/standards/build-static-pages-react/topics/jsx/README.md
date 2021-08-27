# JSX

You can use basic DOM manipulation to put JavaScript values into a document. What if you want to include the values in the markup language itself? One way to do this is with a templating language and JSX is the most commonly used templating language in React.

## Keyword Changes

JSX is similar to HTML except You can't use HTML keywords that are already JavaScript keywords, so the following keywords are changed:

* `class` becomes `className`
* `for` becomes `htmlFor`
* Neither HTML or JS comment syntax is supported, so comments are done with `{/* Comment here */}`
* Self-closing tags must include the closing `/`

## Including JavaScript

To put JavaScript variables in a JSX template, use the `{}` characters:

```jsx
const firstName = "Lucy"
const template = <p>{firstName}</p>
```

This will render to the following HTML:

```jsx
<p>Lucy</p>
```

You can also put any kind of JavaScript expression inside the braces:

```jsx
const getFirstName = () => "Lucy"
const template = <p>{getFirstName()}</p>
```

```jsx
const firstName = "Lucy"
const template = <p>{`My name is ${firstName}`}</p>
```

```jsx
const template = <p>{["l", "u", "c", "y"].join("")}</p>
```

This also works inside of attributes:

```jsx
const url = "https://wikipedia.org"
const linkText = "Wikipedia"
const template = <a href={url}>{linkText}</a>
```

Lastly, you can include any component by writing it like a self-closing HTML element:

```jsx
const Heading = () => <h2>Breaking News!</h2>
const SomeArticle = () => <article><Heading /></article>
```

This renders to:

```html
<article>
  <h2>Breaking News!</h2>
</article>
```

## Using JSX in React

Modern React components are functions that should return JSX. A typical component might look like this:

```jsx
const Image = ({ url, altText }) => {
  return <img className="media image" src={url} alt={altText} />
}
```

JSX can also be saved in variables and returned from normal functions:

```jsx
const Images = ({ images }) => {
  const $images = images.map(image => {
    return <li><Image url={image.url} altText={image.altText} /></li>
  })

  return <ul>{$images}</li>
}
```

## Watch Out!

* When using braces for attributes, note that the braces replace the quotes. For example, a link with an `href` attribute would look like `<a href={url}></a>`, not `<a href="{url}"></a>`
* It's possible to nest `{}` in JSX. The rule is that `{}` creates a new block for JavaScript expressions, and opening a new element within one of those  goes back into JSX. For example:

```jsx
<div>
{
  someValue && <ElementNameHere attribute={someAttribute} />
}
</div>
```

* JSX expressions always need to run one and only one top-level element. This is invalid:

```jsx
const SomeComponent = () => (
  <p>Hello,</p>
  <p>World!</p>
)
```

If there are no suitable elements to wrap them in, you can use empty elements called fragments instead:

```jsx
const SomeComponent = () => (
  <>
    <p>Hello,</p>
    <p>World!</p>
  </>
)
```

## Additional Resources

| Resource | Description |
| --- | --- |
| [Introducing JSX](https://reactwithhooks.netlify.app/docs/introducing-jsx.html) | React's guide to JSX |
| [Video: JSX](https://www.youtube.com/watch?v=9U3IhLAnSxM&t=1344s) | React Hooks Crash Course: JSX |
