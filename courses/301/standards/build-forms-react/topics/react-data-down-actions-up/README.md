# React: Data Down, Actions Up

Data is passed from one component to another by props. These only move one direction though; you can't pass data "up" from a child component to a parent component. How can you share data up?

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

Some highlights:

* The `CounterDisplay` component takes a `count` as a prop and displays it. It doesn't need to know that this prop is actually a stateful variable in the `Counter` component, which makes it a much simpler component to understand. These are sometimes called dumb components.
* The `CounterButton` component takes a function called `increment` as a prop. When the button is clicked, this function is called. Note that the definition of the function is passed in, not an execution of the function. Likewise, the `onClick` handler accepts a function definition.
* The `Counter` component's responsibility is keep track of and modifying the state of the count, as well as rendering the other two components with the correct props.

The trickiest part of the entire flow is passing in the `increment` function to `CounterButton`. Follow this very carefully:

1. When `increment` is defined in the `Counter` component, `count` and `setCount` are in scope. If the button existed in this component, you could pass it to the `onClick` handler directly.
2. Since the button is in the child component `CounterButton`, the `increment` function is passed to that component as a prop.
3. When the button is clicked, the `increment` function is called from the `CounterButton` component. Even though `CounterButton` can't see `count` or `setCount`, the function `increment` can because they were in scope when it was defined.

When the `increment` function calls `setCount`, `count` changes, and `CounterDisplay` re-renders. This pattern works no matter how many components the function or state travel through.

## Lifting State

Another common issue with state is sharing it across components that don't have a parent-child relationship. For example, consider a component that displays a list of items and displays more details about a featured item:

```js
const ItemSummary = ({ title }) => {
  <div className="ItemSummary">{ title }</div>
}

const ItemDetails = ({ details }) => {
  <div className="ItemDetails">{ details }</div>
}

const ItemList = () => {
  const items = [{
    id: 1,
    title: "Apple",
    details: "A scrumptious apple",
  },{
    id: 2,
    title: "Banana",
    details: "A delectable banana",
  }]
  const [selectedId, setSelectedId] = useState(1)
}
```

---

The ideas of data down, actions up can be summarized as follows:

* Props can only be passed down.
* If two components need access to the same data and aren't in the same component hierarchy, the data needs to live in a common ancestor.
* Functions that directly change state must be defined in the same component as the state, but these functions can be passed down as props.
