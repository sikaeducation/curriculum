# React: Lifting State

Data is passed from one component to another by props. These only move one direction though; you can't pass data from a child component up to a parent component. How can child components update state in their parent components?

## Passing Down Functions

This is the React counter example written as 3 components: One to display the count, one to increment the count, and one to hold the other two.

```js
const CounterDisplay = ({ count }) => {
  return <p>{ count }</p>
}

const CounterButton = ({ increment }) => {
  return <button onClick={ increment }>Increment</button>
}

const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)

  return (
    <div className="Counter">
      <CounterDisplay count={count} />
      <CounterButton increment={increment} />
    </div>
  )
}
```

[Play with this code](https://codesandbox.io/s/awesome-gauss-xyw1r)

1. The `CounterDisplay` component takes a `count` as a prop and displays it. It doesn't need to know that this prop is actually a stateful variable in the `Counter` component, which makes it a much simpler component to understand. These are sometimes called dumb components.
2. The `CounterButton` component takes a function called `increment` as a prop. When the button is clicked, this function is called. Note that the definition of the function is passed in, not an execution of the function. Likewise, the `onClick` handler accepts a function definition.
3. The `Counter` component's responsibility is keep track of and modifying the state of the count, as well as rendering the other two components with the correct props.

The trickiest part of the entire flow is passing in the `increment` function to `CounterButton`. Follow this very carefully:

1. When `increment` is defined in the `Counter` component, `count` and `setCount` are in scope. If the button existed in this component, you could pass it to the `onClick` handler directly.
2. Since the button is in the child component `CounterButton`, the `increment` function is passed to that component as a prop.
3. When the button is clicked, the `increment` function is called from the `CounterButton` component. Even though `CounterButton` can't see `count` or `setCount`, the function `increment` can because they were in scope when it was defined.

When the `increment` function calls `setCount`, `count` changes, and `CounterDisplay` re-renders. This pattern works no matter how many components the function or state travel through.

---

The ideas of lifting state can be summarized as:

* Data can only be passed down.
* Functions that directly change state must be defined in the same component as the state, but these functions can be passed down as props.

## Additional Resources

| Resource | Description |
| --- | --- |
| [React: Lifting State Up](https://reactwithhooks.netlify.app/docs/lifting-state-up.html) | React's official guide to lifting state |
| [Video: Update State](https://www.youtube.com/watch?v=9U3IhLAnSxM&t=6620s) | React Hooks Crash Course: Lifting state |
