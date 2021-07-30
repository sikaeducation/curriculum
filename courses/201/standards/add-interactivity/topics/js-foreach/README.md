# JavaScript: `.forEach`

Looping in JavaScript is traditionally done with `for` loops:

```js
const messages = ["Hi", "Hola", "Howdy", "How are you?"]

for (let i = 0; i < messages.length; i++){
  console.log(messages[i])
}
```

This is fine, and has advantages in some situations. It's also really easy to make mistakes:

[A diagram of places you can make mistakes in for loops](assets/bad-for-loop.png)

Luckily, there is a better way.

```js
const messages = ["Hi", "Hola", "Howdy", "How are you?"]

messages.forEach(message => {
  console.log(message)
})
```

## Functions That Take Functions As Arguments

It may look unusual, but you can pass a function into another function as an argument:

```js
function someFunction(anotherFunction){
  anotherFunction()
}

someFunction(() => console.log("Hi!"))
```

These are called higher-order functions. There are a lot of powerful ways to use them, but for now you only need to get comfortable with this syntax:

```js
[1, 2, 3].forEach(number => {
  console.log(number)
})
```

The function that was given to `.forEach` is called an arrow function. These are also called fat arrow functions or lambdas. You could also write the above example like this:

```js
[1, 2, 3].forEach(function(number){
  console.log(number)
})
```

Arrow functions have some other interesting features, but for now the important thing is getting used to thinking of them as normal functions.

## Using `.forEach`

`.forEach` is a method on arrays, and it takes one argument: A function definition. That function will be called with each element in the array, one after another. For example:

```js
const activeUsers = document.querySelector(".active-users")
const someElements = document.querySelectorAll(".user")
someElements.forEach(element => {
  activeUsers.append(element)
})
```

## Watch Out!

* `.forEach` is available on every array or node list, but _not_ most objects.
* `.forEach` doesn't evaluate to anything. It's just for doing an operation for every element in an array, so the function inside it shouldn't return anything.

```js
const numbers = [1, 2, 3].forEach(number => {
  return number
})

console.log(numbers) // undefined
```

* Don't get clever with names for the array and the argument passed into the function. Arrays should be plural, the argument passed into the function should be the singular version of the plural whenever possible. `people.forEach(person => {})`, `users.forEach(user => {})`, `pokemonList.forEach(pokemon => {})`
