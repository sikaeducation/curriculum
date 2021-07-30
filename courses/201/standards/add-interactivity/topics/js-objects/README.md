# JS: Objects

How would you represent a person's attributes in code?

```js
const firstName = "Miles"
const lastName = "Davis"
const age = 100
```

This works pretty well, until we have more than one person.

```js
const firstName1 = "Miles"
const lastName1 = "Davis"
const age1 = 100

const firstName2 = "John"
const lastName2 = "Coltrane"
const age2 = 95
```

This is starting to get awkward. Even worse, how would I write code that gets John Coltrane's age? How can I keep all these related variables together?

## Objects

In JavaScript, an object is a collection of keys and values:

```js
const miles = {
  firstName: "Miles",
  lastName: "Davis",
  age: 100,
}
const john = {
  firstName: "John",
  lastName: "Coltrane",
  age: 95,
}
```

![Diagram of an object](assets/js-objects.png)

Objects generally group together related values. Keys are always strings and values can be any valid JavaScript expression, including strings, numbers, booleans, and even functions, arrays, and other objects:

```js
const miles = {
  firstName: "Miles",
  lastName: "Davis",
  age: 100,
  isAlive: false,
  play: () => {
    console.log("Doot doot")
  },
  saxophonists: ["John Coltrane", "Cannonball Adderly", "Wayne Shorter"],
}
```

## Nested Objects

Objects can also have objects as values:

```js
const musician = {
  id: 1,
  name: "Mike Stern",
  guitar: {
    brand: "Fender",
    model: "Telecaster",
    finish: "Natural"
    play: songTitle => {
      console.log(`I'm playing ${songTitle}!`)
    }
  },
}
```

To get the model of Mike Stern's guitar, you would access `musician.guitar.model`. When working with nested objects, it's easiest to think left-to-right. `musician` is the entire object:

```js
{
  id: 1,
  name: "Mike Stern",
  guitar: {
    brand: "Fender",
    model: "Telecaster",
    finish: "Natural",
    play: songTitle => {
      console.log(`I'm playing ${songTitle}!`)
    }
  },
}
```

`musician.guitar` is the musician's guitar:

```js
{
  brand: "Fender",
  model: "Telecaster",
  finish: "Natural",
  play: songTitle => {
    console.log(`I'm playing ${songTitle}!`)
  }
}
```

`musician.guitar.model` is the musician's guitar's finish:

```js
"Telecaster"
```

When you get a value out of an object or nested object, you do any operation you could normally do on that data type. For example, you can capitalize any string by using `.toUpperCase()`, so this is allowed:

```js
musician.guitar.model.toUpperCase()
```

If the value is a function, you can call it and pass in arguments, just like you would with any other function:

```js
musician.guitar.play("Chromazone") // prints "I'm playing Chromazone!"
```

## Terminology

* Object: A collection of keys and values
* Property: A key/value pair where the value is anything other than a function
* Method: A key/value pair where the value is a function
* Dot notation: Accessing properties and methods with `.`: `miles.age`
* Bracket notation: Accessing properties and methods with `[]`: `miles["age"]`

## Watch Out!

* The only reason to use bracket notation is if you need to look up a property or method with a variable or expression. Otherwise, use dot notation.
* The word "object" is used very differently in most other programming languages. JavaScript objects are more similar to dictionaries in Python, hashes in Ruby, and associative arrays in PHP than they are to objects in those languages.
* Objects are the most powerful data type in JavaScript. Arrays, functions, DOM Nodes, DOM Node Lists, and events are actually different kinds of objects.
