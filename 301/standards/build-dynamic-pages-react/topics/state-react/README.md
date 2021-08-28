# React: State

Some components receive their data through props while other components maintain data of their own that can change. Think of:

* Data being entered into forms
* One of multiple options being selected
* Data that comes from an API server

This kind of data is called state. State is any data that can change value over time. To simplest way to manage state in React is with the `useState` hook:

```jsx
import { useState } from "react"

const SomeComponent = () => {
  const [someState, updateSomeState] = useState("Hello, world!")

  console.log(someState) // "Hello, world!"
  updateSomeState("¡Aloha, mundo!")
  console.log(someState) // "¡Aloha, mundo!"
}
```

There are a couple of key elements of this:

1. Importing the `useState` hook, which is a function from the `react` npm library
2. Calling the `useState` hook with an initial value. In this case, it's the string "Hello, world!"
3. This hook evaluates to an array with two elements: A variable representing the state, and a function that will update that state when called. The syntax looks unusual; it's called array destructuring.
4. `someState` is logged, showing its initial value.
5. `updateSomeState` is called with a new value.
6. `someState` is logged again with its new value.

Remember the syntax of array destructuring:

```jsx
const hookArray = useState(0)
const someState = hookArray[0] // 0
const updateSomeState = hookArray[1] // Function that updates the value in hookArray[0]

// Same thing in one line
const [someState, updateSomeState] = useState(0)
```

Some notes on state:

* If something never changes, it's not state. You can still store static values in variables without needing to declare them as state.
* State in one component may be passed into another component as a prop. Whenever the state is updated, it will update the prop as well, causing the component to rerender.

## Additional Resources

| Resource | Description |
| --- | --- |
| [React: State and Lifecycle](https://reactwithhooks.netlify.app/docs/state-and-lifecycle.html) | Official React docs on state |
| [Video: State](https://www.youtube.com/watch?v=9U3IhLAnSxM&t=3769s) | React Hooks Crash Course: State |
| [Video: State as Props](https://www.youtube.com/watch?v=9U3IhLAnSxM&t=5516s) | React Hooks Crash Course: Passing state |
