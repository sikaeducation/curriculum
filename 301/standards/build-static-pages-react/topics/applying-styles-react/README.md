# React: Applying Styles

For the most part, styles are applied to React components the same way they in regular HTML. Since React components render as HTML, all traditional CSS techniques are applicable. There are a couple of new techniques specific to React components however, including importing stylesheets and dynamic classes.

## Importing Stylesheets

It's common to make separate stylesheets for each component and then import them at the top the component file:

```css
/* ExternalLink.css */
.ExternalLink {
  display: inline-block;
  color: hsl(240, 50%, 50%);
}

.Link:visited {
  color: hsl(330, 50%, 50%);
}
```

```jsx
/* ExternalLink.js */
import "./ExternalLink.css"

export default const Link = ({ url, linkText }) => {
  return <a className="Link" href={url}>{linkText}</a>
}
```

It may be useful to give the component a CSS class with the name of the component and prefix all styles for that component with that class. This is called namespacing.

Note that you don't need to save the imported stylesheet into a variable. Just by importing it, webpack will include the stylesheet in the final CSS file it generates.

## Dynamic CSS Classes

CSS classes can be given dynamic values like any other JSX attribute.

```jsx
const User = ({ username, isDisabled }) => {
  return (
    <div className={`User ${isDisabled ? "disabled" : null}`}>
      {username}
    </div>
  )
}
```

## Watch Out!

* Remember that `class` is a reserved word in JavaScript, so you need to use `className` to set CSS classes on elements
* When using component names as CSS namespaces, make sure that your component names are unique throughout your application and don't conflict with any other CSS libraries that may have their own classes.

## Additional Resources

| Resource | Description |
| --- | --- |
| [React: Styling and CSS](https://reactwithhooks.netlify.app/docs/faq-styling.html) | React's guide to styling and CSS |
| [Video: Styling in React](https://www.youtube.com/watch?v=9U3IhLAnSxM&t=4992s) | React Hooks Crash Course: Styling |
| [Video: Styling Components](https://www.youtube.com/watch?v=9U3IhLAnSxM&t=7272s) | React Hooks Crash Course: Styling components |
