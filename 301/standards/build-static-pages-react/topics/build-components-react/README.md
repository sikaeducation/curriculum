# React: Build Components

A component needs 3 things:

* Name
* File
* Declaration

## Names

Vue component names follow a set of rules:

* **Components should be multiple words**. To ensure compatibility with the web component spec, component names should be at least two words.
* <strong>No snake_case, no camelCase, only PascalCase</strong>. There are no circumstances where snake_case or camelCase are appropriate for component names, stick to PascalCase for component names.
* **Component file names should match variable names**. The component `FormInputText` should be stored in a file called `FormInputText.js`.
* **No abbrevs**. Write out the entire word in the name every time.
* **Names go general-to-specific**. Instead of `TextFormInput`, name it `FormInputText`. This helps with alphabetization in file directories.
* **Use `App` as a prefix for single-use components**. Indicates that there should only be one instance of something in the app, such as `AppHeader` and `AppSidebar`

## File

File names should match component names, there should only be one component per file, and you can organize your components in any folder structure you like.

## Declaration

At a minimum, a component needs to export a function the returns a JSX template. A minimal component looks like this:

```jsx
const SomeComponent = () => {
  return <p>Hello, world!</p> 
}

export default SomeComponent
```

On components that render longer templates, it's common to wrap the return in `()`:

```jsx
export default const SomeComponent = () => {
  return (
    <div>
      <p>Hello, world!</p> 
    </div>
  )
}
```

This allows you to indent the JSX independently of the JavaScript, which helps with readability. Many components import other components, styles, or libraries. These go at the top of the file:

```jsx
import { useState } from "react"
import SomeOtherComponent from "./SomeOtherComponent"
import "./SomeComponent.css"

const SomeComponent = () => {
  const [someState, setSomeState] = useState(0)
  return (
    <div className="SomeComponent">
      <SomeOtherComponent someProp={someState} />
    </div>
  )
}

export default SomeComponent
```

## Watch Out!

Components are functions that return JSX templates, not JSX templates:

```jsx
// This is a valid component
const SomeOtherComponent = () => <p>Hello, world!</p>

// This is not a valid component
const SomeComponent = <p>Hello, world!</p>
```

## Additional Resources
| Resource | Description |
| --- | --- |
| [Components and Props](https://reactwithhooks.netlify.app/docs/components-and-props.html) | React's guide to components |
| [Video: React Components](https://www.youtube.com/watch?v=9U3IhLAnSxM&t=440s) | React Hooks Crash Course: Components |
| [Video: Class Components vs. Function Components](https://www.youtube.com/watch?v=9U3IhLAnSxM&t=806s) | React Hooks Crash Course: Component types |
| [Video: React Hooks](https://www.youtube.com/watch?v=9U3IhLAnSxM&t=852s) | React Hooks Crash Course: Hooks |
