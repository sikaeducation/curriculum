# React: State

Some components receive their data through props. Other components maintain some data of their own that can change. Imagine:

* Data being entered into forms
* One of multiple options being selected
* Data that comes from a server being updated

This kind of data is called state. State is any data that can change value over time. To simplest way to manage state in React is with the `useState` hook.

```js
import { useState } from "react"

const SomeComponent = () => {
  const [someState, updateSomeState] = useState("Hello, world!")

  console.log(someState) // "Hello, world!"
  updateSomeState("¡Aloha, mundo!")
  console.log(someState) // "¡Aloha, mundo!"
}
```

There are a couple of key elements of this:

* Importing the `useState` hook, which is a function from the `react` npm library. This is automatically installed by CRA.
* Calling the `useState` hook with an initial value. In this case, it's the string "Hello, world!"
* This hook evaluates to an array with two elements: A variable representing the state, and a function that will update that state when called. The syntax looks unusual; it's called array destructuring.
* `someState` is logged, showing its initial value.
* `updateSomeState` is called with a new value.
* `someState` is logged again with its new value.

Remember the syntax of array destructuring:

```js
const hookArray = useState(0)
const someState = hookArray[0] // 0
const updateSomeState = hookArray[1] // Function that updates the value in hookArray[0]

// Same thing in one line
const [someState, updateSomeState] = useState(0)
```

Some notes on state:

* If something never changes, it's not state. You can store static values in variables instead.
* State in one component may be passed into another component as a prop. Whenever the state is updated, it will update the prop as well, causing the component to rerender.
