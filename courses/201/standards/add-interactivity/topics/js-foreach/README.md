# JavaScript: `.forEach`

Looping in JavaScript and most programming languages is traditionally done with `for` loops:

```js
const messages = ["Hi", "Hola", "Howdy", "How are you?"]

for (let i = 0; i < messages.length; i++){
  console.log(messages[i])
}
```

This is fine, and has advantages in some situations. It's also really easy to make mistakes:

(image of all the places you can make mistakes in a for loop)

Luckily, there is a better way.

```js
const messages = ["Hi", "Hola", "Howdy", "How are you?"]

messages.forEach(message => {
  console.log(message)
})
```

## Functions That Take Functions As Arguments

It may look a little unusual, but you can pass a function into another function:

```js
function someFunction(anotherFunction){
  anotherFunction()
}

someFunction(() => console.log("Hi!"))
```

These are called Higher-Order Functions. There are a lot of really powerful ways to use them, but for now, get comfortable with this syntax:

```js
[1, 2, 3].forEach(number => {
  console.log(number)
})
```

These are called arrow functions, also called fat arrow functions or lambdas. You could also write the above example like this:

```js
[1, 2, 3].forEach(function(number){
  console.log(number)
})
```

Arrow functions have some other interesting features, but for now the important thing is getting used to thinking of them as functions.

## Using `.forEach`

* `.forEach` is a method on arrays.
* It takes one argument: A function definition
* That function will be called with each element in the array, one after another

```js
const activeUsers = document.querySelector(".active-users")
const someElements = document.querySelectorAll(".user")
someElements.forEach(element => {
  activeUsers.append(element)
})
```

## Watch Out!

* `.forEach` is available on every array but _not_ most objects.
* `.forEach` doesn't evaluate to anything. It's just for doing an operation for every element in an array, so the function inside it shouldn't return anything.

```js
const numbers = [1, 2, 3].forEach(number => {
  return number
})

console.log(numbers) // undefined
```
* Don't get clever with names for the array and the argument passed into the function. Arrays should be plural, the argument passed into the function should be the singular version of the plural whenever possible. `people.forEach(person => {})`, `users.forEach(user => {})`, `pokemonList.forEach(pokemon => {})`
