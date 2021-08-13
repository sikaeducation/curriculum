# React: JavaScript

One of React's advantages is that most of it just JavaScript and introduces very little additional React-specific syntax. Some of the JavaScript syntax used is more advanced than the syntax commonly used in websites and bears review.

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

```js
function SomeComponent(){
  return (
    <p>Hello, world!</p>
  )
}
```

But you're more likely to see this:

```js
const SomeComponent = () => {
  return (
    <p>Hello, world!</p>
  )
}
```

Or even this:

```js
const SomeComponent = () => <p>Hello, world!</p>
```

When writing arrow function, the following rules apply to parameters

* If there are no parameters, you must use `()`
* If there is one parameter, `()` is optional
* If there are two or more parameters, you must use `()`

For example:

```js
const SomeFunction = () => "Hello, world!"
let SomeOtherFunction = (place) => `Hello, ${place}!`
SomeOtherFunction = place => `Hello, ${place}!`
const YetAnotherFunction = (greeting, place) => `${greeting}, ${place}!`
```

## Modules

JavaScript allows you to export variables from one file and import them into another. You'll mostly work with default imports and exports in React, where files only export and import one thing:

```js
// SomeComponent.js
export default const SomeComponent = () => {
  return (
    <p>Hello, world!</p>
  )
}
```

```js
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

```js
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

```js
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

In React, this is often used to pull values out of things called hooks:

```js
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

```js
const InnerComponent = ({ someProp, someOtherProp }) => <p>I was given {someProp} and {someOtherProp}.</p>
const OuterComponent = props => <InnerComponent {...props} />

// <OuterComponent someProp="one thing" someOtherProp="another" />
```

## Ternary Expressions

Ternary expressions, also called ternaries, are a condensed way to write `if`/`else` statements. This `if`/`else` statement:

```js
let rsvpResponse

if (isAttending){
  rsvpResponse = "Attending"
} else {
  rsvpResponse = "Not attending, with regrets"
}
```

Can be written in one line using a ternary:

```js
const rsvpResponse = isAttending ? "Attending" : "Not attending, with regrets"
```

You can improve the readability of a ternary expression by putting the condition and each branch on its own line:

```js
const rsvpResponse = isAttending
  ? "Attending"
  : "Not attending, with regrets"
```

These are important in React because JSX doesn't support other forms of conditional logic.