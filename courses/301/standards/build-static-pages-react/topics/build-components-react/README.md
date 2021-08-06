# React: Build Components

A component needs 3 things:

* Name
* File
* Declaration

## Names

Vue component names follow a set of rules:

* **Components should be multiple words**. To ensure compatibility with the web component spec, component names should be at least two words.
* <strong>No snake_case, no camelCase, only PascalCase</strong>. There are no circumstances where snake_case or camelCase are appropriate for component names. Only use PascalCase for component names.
* **Component file names should match variable names**. The component `FormInputText` should be stored in a file called `FormInputText.js`.
* **No abbrevs**. Write out the entire word in the name, every time.
* **Names go general-to-specific**. Instead of `TextFormInput`, name it `FormInputText`. This helps with alphabetization in file directories.
* **Use `App` as a prefix for single-use components**. Indicates that there should only be one instance of something in the app, such as `AppHeader` and `AppSidebar`

## Folder Structure

There are no rules about where files must go, but it's common to separate them into a `views` and `components` folder. There is no technical difference between these, but semantically a view is something that is routed directly to, and a component is anything else. You can nest folders inside of these as needed.

## Declaration

At a minimum, a component needs to export a function the returns a JSX template. A minimal component looks like this:

```react
export default const SomeComponent = () => {
  return <p>Hello, world!</p> 
}
```

The syntax on this may look usual. This is the same thing:

```react
const SomeComponent = () => {
  return <p>Hello, world!</p> 
}

export default SomeComponent
```

On components that render longer templates, it's common to wrap the return in `()`:

```react
export default const SomeComponent = () => {
  return (
    <div>
      <p>Hello, world!</p> 
    </div>
  )
}
```

This helps with readability.

## Exercises

Which of these are valid component names?

* `<CartItem />`
* `<Item />`
* `tab.vue`
* `<cart-item-heading />`
* `<cartItemDisabled />`
* `<AppSidebar />`
* `import BlogPost from "BlogPost";`
* `<StarRating />`
* `user-addr.vue`
* `<comments />`
