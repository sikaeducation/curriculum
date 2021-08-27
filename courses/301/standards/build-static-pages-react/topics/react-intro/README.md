# Intro to React

## Web Applications

Websites are primarily focused on content and are designed to be consumed. By contrast, web applications are designed to be used. Web applications can be social media apps like Facebook and Twitter, productivity applications like Gmail and Google Docs, eCommerce applications like Amazon and Home Depot, and much more. The common factor between them is that people use them as tools.

Early web applications were rendered by servers. Instead of sending back API data, servers would programmatically build HTML documents and send them to browsers. The downside of building HTML this way is when a user interacts with a server-rendered page the browser needs to send an HTTP request and render an entirely new HTML document every time. This adds some lag between each interaction and keeps them from feeling as smooth as desktop or phone apps.

## Single-Page Applications

Single Page applications, or SPAs, are a style of modern web application. Instead of a server rendering new HTML pages for every interaction, a single HTML page is loaded one time. Whenever users interact with the page, an asynchronous HTTP request is sent with something like `fetch` to retrieve new data. This data is applied to different HTML templates that are stored in JavaScript, and the browser adds and removes DOM elements to make the page appear to have changed.

There are many tools for helping build SPAs and one of the most popular is React. React is a JavaScript library that helps developers build interfaces for web applications using units called components, as well as hosting a larger ecosystem of application development tools.

## React

The core concepts in React applications include components, one-way data flow, the virtual DOM, and transpilation.

### Components

The basic units of React apps and most SPAs are components, which you can think of as custom HTML elements. They're made up of templates consisting of traditional HTML elements and other components, as well as any related JavaScript variables and functionality.

For example, you might have a component that represents a collection of HTML elements in an application's top bar:

```jsx
const TopBar = () => {
  return (
    <header>
      <img src="logo.png" id="logo" alt="InvestoCorp Logo" />
      <h1>InvestoCorp</h1>
    </header>
  )
}
```

Then you can use that component in other components just like any other HTML element:

```jsx
import TopBar from "./TopBar"

const App = () => {
  return (
    <div id="app">
      <TopBar />
      <main>
        <p>New website coming soon!</p>
      </main>
    </div>
  )
}
```

What's more, you can pass data into these components to make them more generic and reusable:

```jsx
const NameBadge = ({ firstName, lastName }) => {
  return <p className="NameBadge">{ firstName } { lastName }</p>
}
```

```jsx
const firstName = "Miles"
const lastName = "Davis"
const UserProfile = () => {
  return (
    <div className="UserProfile">
      <span>User:</span>
      <NameBadge firstName={firstName} lastName={lastName} />
    </div>
  )
}
```

This renders the following HTML:

```html
<div class="UserProfile">
  <span>User:</span>
  <p class="NameBadge">Miles Davis</p>
</div>
```

These uses of components are powerful for making your code reusable and expressive, but the true power of React is the way it handles interactivity:

```jsx
import { useState } from 'react'
import './App.css';

const App = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)

  return (
    <div className="App">
      <p>The current count is {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  )
}
```

[Play with this code](https://codesandbox.io/s/sweet-gould-xdbwv?file=/src/App.js)

This component displays a count and a button. Whenever the button is clicked, the count increases and the component renders again with the new count. This pattern can be used to collect user input, interact with data from APIs, and dynamically filter content.

### One-Way Data Flow

A recurring theme in all modern SPAs is one-way data flow. The original SPA frameworks used two-way data flow, which means the value of things like form inputs can be set by the application or by the user interacting with the page. Two-way data flow uses a complicated method of synchronizing these two things. React popularized a simpler pattern called one-way data flow, which involves data in the application being bound to HTML and events from the HTML updating the values.

### Virtual DOM

Another core idea in all single-page apps is that you don't work directly with the DOM. That means React apps don't use any of the following:

* `document.querySelector()`
* `document.querySelectorAll()`
* `document.createElement()`
* `element.addEventListener()`
* `element.append`
* `element.classList`
* `element.innerHTML`
* `element.textContent`

One of the slowest parts of web performance is making changes to the DOM. One of the ways to work around this limitation is to use an abstraction called the virtual DOM that manages how and when to update the actual DOM. The virtual DOM doesn't actually render to the screen, so it can be updated much faster than the actual DOM. Instead of grabbing elements out of the DOM and updating them, you bind variables to them in templates using a language called JSX. Instead of adding event listeners with the DOM, you call event handlers from templates.

### Transpilation

Some of the syntax used in making React apps and other SPAs isn't valid JavaScript, HTML, or CSS. Since those are the only files your browser understands, you need another tool to transform the code you're writing into HTML, CSS, and JavaScript. These kinds of tools are called transpilers, and the one of the most common transpilers for React apps is [webpack](https://webpack.js.org/).

## Additional Resources

| Resource | Description |
| --- | --- |
| [React With Hooks](https://reactwithhooks.netlify.app/) | Comprehensive guide to React |
| [React Interactive Tutorial](https://reactwithhooks.netlify.app/tutorial/tutorial.html) | React tutorial |
| [Thinking in React](https://reactwithhooks.netlify.app/docs/thinking-in-react.html) | Overview of React philosophy |
| [Video: What Is React?](https://www.youtube.com/watch?v=9U3IhLAnSxM&t=143s) | React Hooks Crash Course: Intro |
