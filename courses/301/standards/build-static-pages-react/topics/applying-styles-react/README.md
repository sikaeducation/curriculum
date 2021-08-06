## React: Applying Styles

For the most part, applying styles to React components is done the same as it is in regular HTML. Since React components render as HTML, all traditional CSS techniques are applicable. There are a couple of new techniques specific to React components however: Importing stylesheets and dynamic classes.

## Importing Stylesheets

It's common to make separate stylesheets for each component and then import them at the top the component file:

```css
/* Link.css */
.Link {
  display: inline-block;
  color: hsl(240, 50%, 50%);
}

.link:visited {
  color: hsl(330, 50%, 50%);
}
```

```js
/* Link.js */
import "./Link.css"

export default const Link = ({ url, linkText }) => {
  return <a className="Link" href={url}>{linkText}</a>
}
```

It may be useful to give the component a CSS class with the name of the component and prefix all styles for that component with that class. This is called namespacing.

Note that you don't need to save the imported stylesheet into a variable. Just by importing it, webpack will include the stylesheet as-is in the final CSS file it generates.

## Dynamic Classes

Classes can be given dynamic values like any other JSX attribute.

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

* When using component names as CSS namespaces, make sure that your component names are unique throughout your application and don't conflict with any other CSS libraries that may have their own classes.

## Additional Resources

| Resource | Description |
| --- | --- |
| []() | |
