# JavaScript: `.find` and `.filter`

When you have an array, what happens when you need to locate a particular element in the array or find everything that matches some criteria?

## `.find`

`.find` searches an array for a single match:

```js
const people = [{
  id: 1,
  name: "Miles Davis",
  isAlive: false,
},{
  id: 2,
  name: "John Coltrane",
  isAlive: false,
},{
  id: 3,
  name: "Wayne Shorter",
  isAlive: true,
},{
  id: 4,
  name: "John Scofield",
  isAlive: true,
}]

const miles = people.find(person => {
  return person.id === 1
})
const trane = people.find(person => {
  return person.name === "John Coltrane"
})
```

The function passed into `.find` should return `true` for the match you're looking for.

## `.filter`

Instead of just the first match, `.filter` searches an array for every match:

```js
const people = [{
  id: 1,
  name: "Miles Davis",
  isAlive: false,
},{
  id: 2,
  name: "John Coltrane",
  isAlive: false,
},{
  id: 3,
  name: "Wayne Shorter",
  isAlive: true,
},{
  id: 4,
  name: "John Scofield",
  isAlive: true,
}]

const livingPeople = people.find(person => {
  return person.isAlive === true // You could also just return `person.isAlive` since it's already a boolean
})

console.log(livingPeople)
/*
[{
  id: 3,
  name: "Wayne Shorter",
  isAlive: true,
},{
  id: 4,
  name: "John Scofield",
  isAlive: true,
}]
*/
```

The function passed into `.filter` should return `true` if the element should be kept in the new array.

## Watch Out!

* If multiple things return `true` in a `.find`, `.find` will evalute to the first match.
* `.find` will evaluate to whatever data time the first match is.
* `.filter` will always evaluate to an array, even if there is only one match. If you ever write code that looks like `someArray.filter(someItem => someItem.someCondition)[0]`, you probably want `.find` instead.
* Don't get clever with names for the array and the argument passed into the function. Arrays should be plural, and the argument passed into the function should be the singular version of the plural whenever possible. `people.find(person => {})`, `users.find(user => {})`, `pokemonList.filter(pokemon => {})`

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: `.find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) | MDN's reference on `.find` |
| [MDN: `.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) | MDN's reference on `.filter` |
| [Video: JavaScript Array Filter](https://www.youtube.com/watch?v=4_iT6EGkQfk) | Programming With Mosh's guide to mapping |
| [Video: Array Find Method in JS](https://www.youtube.com/watch?v=N1QcR8F3xFY) | DCode's guide to finding |
