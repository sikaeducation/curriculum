# JavaScript: Map

One of the more common tasks in programming is to take an array and do something with every item in it. For example if we have these users:

```js
const users = [{
  username: "Alice",
  active: true,
  age: 22,
},{
  username: "Bob",
  active: false,
  age: 54,
},{
  username: "Carrie",
  active: true,
  age: 30,
}]
```

How would you get a list of all their names? You could do it the long way:

```js
const usernames = []

for (let i = 0; i < users.length; i++){
  let user = users[i]
  let username = user.username
  usernames.push(username)
}

console.log(usernames) // ["Alice", "Bob", "Carrie"]
```

Or you could do something similar with `.forEach`:

```js
const usernames = []

users.forEach(user => {
  usernames.push(user)
})

console.log(usernames) // ["Alice", "Bob", "Carrie"]
```

The best way to do it is with `.map`:

```js
const usernames = users.map(user => user.username)

console.log(usernames) // ["Alice", "Bob", "Carrie"]
```

## Using `.map`

Mapping transforms an array from one thing to another. Some rules:

* You always start and end with the same number of elements. If there were 100 items in the source array, there will be 100 items in the destination array.
* The source array is unaffected by mapping
* The destination array is what `.map` evaluates to
* The function that's passed into map will be applied to every element in the array

## Examples

### Math

You can use `.map` to perform the same math operation on every number in an array.

```js
const doubledNumbers = [1, 2, 3].map(number => number * 2)
console.log(doubledNumbers) // [2, 4, 6]
```

### Data Wrangling

Also called "data munging", data wrangling is adding, removing, or transforming data from one format to another.

```js
const people = [{
  firstName: "Alice",
  lastName: "Coltrane",
  birthday: "1937-08-27",
},{
  firstName: "Bill",
  lastName: "Evans",
  birthday: "1929-08-16",
},{
  firstName: "Chet",
  lastName: "Baker",
  birthday: "1929-12-23",
}]

const transformedPeople = people.map(person => {
  const birthday = Date.parse(person.birthday)
  const today = Date.now()
  const age = Math.round((today - birthday) / (1000 * 60 * 60 * 24 * 365)) // Rough formula for calculating age

  return {
    firstName: person.firstName,
    lastName: person.lastName,
    fullName: `${person.firstName} ${person.lastName}`,
    age: age,
  }
})
console.log(transformedPeople)
/*
const people = [{
  firstName: "Alice",
  lastName: "Coltrane",
  fullName: "Alice Coltrane",
  age: 84,
},{
  firstName: "Bill",
  lastName: "Evans",
  age: 92,
},{
  firstName: "Chet",
  lastName: "Baker",
  age: 92,
}]
*/
```

### Plucking

Taking an array of objects and transforming it into an array of objects with only some of the original properties is called plucking.

```js
const usernames = users.map(user => user.username)

console.log(usernames) // ["Alice", "Bob", "Carrie"]
```

## Watch Out!

* If your map function does what you want and doesn't have a return value, you're not actually mapping.
* Arrow functions that fit on one line take implicitly return. That means that this:

```js
const usernames = users.map(user => user.username)
```

Is identical to this:

```js
const usernames = users.map(user => {
  return user.username
})
```
* Don't get clever with names for the array and the argument passed into the function. Arrays should be plural, the argument passed into the function should be the singular version of the plural whenever possible. `people.map(person => {})`, `users.map(user => {})`, `pokemonList.map(pokemon => {})`

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: `.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | MDN's reference on `.map` |
| [FreeCodeCamp: How `Array.prototype.map` works](https://www.freecodecamp.org/news/how-array-prototype-map-works-b6b69379c3af/) | FreeCodeCamp's tutorial on `.map` |
| [Video: JavaScript Array Map](https://www.youtube.com/watch?v=G3BS3sh3D8Q) | Programming With Mosh's guide to mapping |
