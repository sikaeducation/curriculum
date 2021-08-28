# React: Images

There are two ways to use images in React apps: Linking a public URL and importing images to components.

## Linking to Images

The simplest way to link to an image is to include it in the URL, the same as you would in traditional HTML:

```jsx
const someComponent = () => {
  return (
    <img src="https://example.com/assets/image.jpg" alt="Descriptive text" />
  )
}
```

This works well for URLs that come from API responses. In a CRA app, this can also be done with any file in the `public` directory. If there's a file called `image.jpg` in the `public` directory, you can refer to it this way:

```jsx
const someComponent = () => {
  return (
    <img src="image.jpg" alt="Descriptive text" />
  )
}
```

Putting files in the `public` directory also works with any file, which is useful for things like CSS fonts and favicons.

## Importing Images

For static images in apps like logos, you're better off importing them the same way you import JavaScript modules.

```jsx
import image from "./assets/image.jpg"

const someComponent = () => {
  return (
    <img src={image} alt="Descriptive text" />
  )
}
```

When the app is compiled, the image will be moved to a different directory and given a different name. When you import the file and use it in JSX braces, CRA will figure out what the correct file name should be for you. The reason this is preferrable to including it in the `public` folder and referencing it by URL is that CRA can perform certain performance optimizations when the file is imported.

## Watch Out!

Importing any file type other than JavaScript is not normally supported in JavaScript environments. This particular behavior is powered by a tool CRA uses called [webpack](https://webpack.js.org/).

JavaScript modules don't need the `.js` extension when being imported, but images, CSS, and all other file types do.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Create React App: Adding Images, Fonts, and Files](https://reactwithhooks.netlify.app/) | CRA's guide to images |
