# React: Props

Data can be passed from a parent component to a child component, and whenever the data changes in the parent it will rerender the child. The data in the child component is called a prop, which is short for property. You can pass simple values as props:

```jsx
// ParentComponent.js
import ChildComponent from "./ChildComponent"

module.exports = function ParentComponent(){
  return (
    <ChildComponent someProp="Hello, world!" />
  )
}
```

```jsx
// ChildComponent.js
module.exports = function ChildComponent({ someProp }){
  return (
    <p>{{ someProp }}</p>
  )
}
```

You can also pass state:

```jsx
// ParentComponent.js
import ChildComponent from "./ChildComponent"

module.exports = function ParentComponent(){
  const [someState, updateSomeState] = useState(1)

  return (
    <>
      <ChildComponent someProp={someState} />
      <Button @click="() => someState += 1"> Increment</Button>
    </>
  )
}
```

```jsx
// ChildComponent.js
module.exports = function ChildComponent({ someProp }){
  return (
    <p>{{ someProp }}</p>
  )
}
```

This state will be bound, meaning that any change in the parent immediately triggers a rerender of the child component with the new value.

## Watch Out!

In the example above, pressing the button changes the state, and that state change is reflected down through the props. We can't also have a button in the child that changes the state in the parent. If a child component needs to change state in its parent, it needs to do it by passing in a function that changes the original value. State changes need to happen in the same place the state is held.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Hooks: State](https://reactjs.org/docs/hooks-state.html) | Official React docs on the `useState` hook |
| [Components and Props](https://reactjs.org/docs/components-and-props.html) | Official React docs on props |
