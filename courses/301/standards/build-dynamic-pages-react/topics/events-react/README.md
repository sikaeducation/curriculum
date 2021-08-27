# React Events

Since you don't interact with the DOM directly in React apps, how do you respond to DOM events?

```jsx
const Counter = () => {
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

`onClick={handleClick}` is the React way to do `document.querySelector("button").addEventListener(handleClick)`. Traditional DOM events, like `click`, `submit`, `keydown`, and others are written directly in JSX templates by prefixing them with `on`. For example:

```jsx
<form onSubmit={submitHandler}></form>
<input onFocus={focusHandler} />
<input onChange={changeHandler} />
<div onScroll={scrollHandler}></div>
```

Handlers are plain JavaScript functions. Like regular DOM event handlers, they'll be called with an `event` object containing details about the event. For example, to prevent form submission in a submit handler, you can use:

```jsx
const LoginForm = () => {
  const submitHandler = event => {
    event.preventDefault()
    // Other handling logic
  }

  return (
    <form onSubmit={submitHandler}>
      {/* Form Inputs */}
    </form>
  )
}
```

Some other useful event properties:

* `event.target.value` is the value of an `<input />`
* `event.key` is the character of the key that was pressed in keyboard event
* `event.target.dataset` is the value of any data attributes

## Watch Out!

You can also inline handler functions in JSX:

```jsx
<button onClick={() => setCount(count + 1)}>Increment Count</button>
```

This is almost always harder to read than extracting the function and should be avoided.

---

Note that the value of an event handler in JSX must always be a function that will be called with the event. This code:

```jsx
<button onClick={setCount}>Increment Count</button>
```

Will set the value of `count` to the `event` object when clicked, which is not what you want. This code:

```jsx
<button onClick={setCount(count + 1)}>Increment Count</button>
```

Isn't valid because calling `setCount` doesn't evaluate to a function.


## Additional Resources

| Resource | Description |
| --- | --- |
| [React: Events](https://reactwithhooks.netlify.app/docs/handling-events.html) | React's official guide to events |
| [Video: Events](https://www.youtube.com/watch?v=9U3IhLAnSxM&t=3556s) | React Hooks Crash Course: Events |
