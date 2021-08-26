# React: JavaScript

One of React's advantages is that it's mostly just JavaScript and introduces little additional React-specific syntax. However, some of the JavaScript syntax used in React is more advanced than the syntax used in websites and bears review.

* [Arrow Functions](#arrow-functions)
* [Modules](#modules)
* [Object Destructuring](#object-destructuring)
* [Array Destructuring](#array-destructuring)
* [Spreading](#spreading)
* [Ternary Expressions](#ternary-expressions)

## Arrow Functions

All of these are the same:

```js
// Functional declaration
function someFunction(someParameter){
  return someParameter
}

// Function expression
const someFunction = function(someParameter){
  return someParameter
}

// Arrow function
const someFunction = (someParameter) => {
  return someParameter
}

// Short arrow function, used if the function body is only the return statement
const someFunction = someParameter => someParameter
```

In React, arrow functions (both syntaxes) are preferred. This is a valid component:

```jsx
function SomeComponent(){
  return (
    <p>Hello, world!</p>
  )
}
```

But you're more likely to see this:

```jsx
const SomeComponent = () => {
  return (
    <p>Hello, world!</p>
  )
}
```

Or even this:

```jsx
const SomeComponent = () => <p>Hello, world!</p>
```

When writing arrow function, the following rules apply to parameters

* If there are no parameters, you must use `()`
* If there is one parameter, `()` is optional
* If there are two or more parameters, you must use `()`

For example:

```jsx
const SomeFunction = () => "Hello, world!"
let SomeOtherFunction = (place) => `Hello, ${place}!`
SomeOtherFunction = place => `Hello, ${place}!`
const YetAnotherFunction = (greeting, place) => `${greeting}, ${place}!`
```

## Modules

JavaScript allows you to export variables from one file and import them into another. You'll mostly work with default imports and exports in React, where files only export and import one thing:

```jsx
// SomeComponent.js
export default const SomeComponent = () => {
  return (
    <p>Hello, world!</p>
  )
}
```

```jsx
// AnotherComponent.js
import SomeComponent from "./SomeComponent.js"

export default const AnotherComponent = () => {
  return (
    <SomeComponent />
  )
}
```

## Object Destructuring

Destructuring is a way to pull properties out of an object and assign them to variables.

```js
const user = {
  displayName: "Zoolander",
  username: "bluesteel",
  password: "p@$$w0rd",
}

// Without destructuring
let getUserString = (user) => {
  const username = user.username
  const displayName = user.displayName
  return `${displayName} (${username})`
}

// With destructuring
getUserString = ({ username, displayName }) => {
  return `${displayName} (${username})`
}
```

This is especially useful in React because each component is called with an object that's conventionally called `props`. `props` contains any values given that were passed into the component as attributes:

```jsx
const UserBadge = props => {
  const username = props.username
  const displayName = props.displayName

  return (
    <p>{displayName} ({username})</p>
  )
}
// <UserBadge username="milesdavis" displayName="Prince of Darkness" />
```

The same component with props destructured is more condensed:

```jsx
const UserBadge = ({username, displayName}) => {
  return (
    <p>{displayName} ({username})</p>
  )
}
// <UserBadge username="milesdavis" displayName="Prince of Darkness" />
```

## Array Destructuring

You can also use the idea of destructuring with arrays:

```js
const someArray = [1, 2, 3]
const [one, two, three] = someArray

console.log(one, two, three) // 1, 2, 3
```

In React, this is often used to pull values out of hooks:

```jsx
const hookArray = useState(0)
const someState = hookArray[0] // 0
const updateSomeState = hookArray[1] // Function that updates the value in hookArray[0]

// Same thing in one line
const [someState, updateSomeState] = useState(0)
```

## Spreading

You can spread arrays and objects with the `...` operator. This is the equivalent of dropping the `[]` or `{}` from the object:

```js
const oneList = [1, 2, 3]
const twoList = [4, 5, 6]
const bothLists = [...oneList, ...twoList]

const result = sum(...bothLists) // Can use to pass in an array of arguments separately

const person = {
  firstName: "Jack",
  lastName: "Sparrow",
}
const boatCaptain = {
  firstName: "Captain",
}
const captainJack = {
  ...person, // Everything from `person`
  ...boatCaptain, // Everything form `boatCaptain`, overwrites firstName: "Jack" from `person`
  rank: "Captain", // New property
}

/*
{
  firstName: "Captain",
  lastName: "Sparrow",
  rank: "Captain",
}
*/
```

These are handy for combining and making shallow copies of things. You can also use it to pass all of the props given to a component through to another component:

```jsx
const InnerComponent = ({ someProp, someOtherProp }) => <p>I was given {someProp} and {someOtherProp}.</p>
const OuterComponent = props => <InnerComponent {...props} />

// <OuterComponent someProp="one thing" someOtherProp="another" />
```

## Ternary Expressions

Ternary expressions, also called ternaries, are a condensed way to write `if`/`else` statements. This `if`/`else` statement:

```jsx
let rsvpResponse

if (isAttending){
  rsvpResponse = "Attending"
} else {
  rsvpResponse = "Not attending, with regrets"
}
```

Can be written in one line using a ternary:

```jsx
const rsvpResponse = isAttending ? "Attending" : "Not attending, with regrets"
```

You can often improve the readability of a ternary expression by putting the condition and each branch on their own lines:

```jsx
const rsvpResponse = isAttending
  ? "Attending"
  : "Not attending, with regrets"
```

These are important in React because JSX doesn't support many other forms of conditional logic such as a `if`/`else` and `switch`.

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) | MDN's documentation on arrow functions |
| [MDN: ES6 in Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/) | MDN's deep-dive on arrow functions |
| [MDN: `import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) | MDN's documentation on `import` |
| [MDN: `export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) | MDN's documentation on `export` |
| [MDN: Modules Tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) | MDN's tutorial on JS modules |
| [MDN: Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) | MDN's documentation on destructuring |
| [JavaScript.info: Destructuring Assignment](https://javascript.info/destructuring-assignment) | The modern JavaScript tutorial on destructuring assignment |
| [MDN: Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) | MDN's documentation on spread |
| [Free Code Camp: An introduction to spread syntax](https://www.freecodecamp.org/news/an-introduction-to-spread-syntax-in-javascript-fba39595922c/) | Free code camp's overview of spread |
| [MDN: Conditional (ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) | MDN's documentation on the ternary operator |
