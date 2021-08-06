# JSX

How do write HTML that uses bound dynamic values and JavaScript expressions? Use a templating language. JSX is a templating language commonly used with React.

## Keyword Changes

JSX is similar to HTML, with the following differences:

* You can't use HTML keywords that are already JavaScript keywords, so the following keywords are changed:
  * `class` becomes `className`
  * `for` becomes `htmlFor`

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

## Using JSX in React

Modern React components are functions that should return JSX. A typical component might look like this:

```js
const Image = ({ url, altText }) => {
  return <img className="media image" src={url} alt={altText} />
}
```

JSX can also be saved in variables and returned from normal functions:

```js
const Images = ({ images }) => {
  const lis = images.map(image => {
    return <li><Image url={image.url} altText={image.altText} /></li>
  })

  return <ul>{lis}</li>
}
```

## Watch Out!

* When using braces for attributes, note that the braces replace the quotes. For example, a link with an `href` attribute would look like `<a href={url}></a>`, not `<a href="{url}"></a>`

## Additional Resources

| Resource | Description |
| --- | --- |
| []() | |
