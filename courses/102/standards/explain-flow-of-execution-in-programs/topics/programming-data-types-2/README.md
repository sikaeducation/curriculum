# Programming: Data Types 2: Arrays and Objects

There are 2 data types that are more complex than strings, booleans, and numbers.

## Arrays

An array is a list of items. Rather than keep them in separate variables:

```js
const name1 = "Alice"
const name2 = "Bill"
const name3 = "Carol"
```

You can put them in one array:

```js
const names = ["Alice", "Bill", "Carol"]
```

This makes it easy to do something to every item in the array:

```js
for (name in names){
  console.log(name) // Prints "Alice", then "Bill", then "Carol"
}
```

While still being able to access individual items:

Individual items are accessed by their position in the array, which is called an index. Counter-intuitively, indexes start at 0.

```js
console.log(name[0]) // Prints "Alice"
console.log(name[1]) // Prints "Bill"
console.log(name[2]) // Prints "Carol"
console.log(name[3]) // Error, no such index
```

You can add a new item to the end of an array with `.push` and take it off of the end with `.pop`:

```js
names.push("Dave")
console.log(name[3]) // Prints "Dave"
names.pop()
console.log(name[3]) // Error, no such index
```

## Objects

Objects are a way to collect related attributes of something in one place. So instead of:

```js
const firstName = "Alice"
const lastName = "Coltrane"
const email = "alice.coltrane@jazz.com"
```

You can have:

```js
const alice = {
  firstName: "Alice",
  lastName: "Coltrane",
  email: "alice.coltrane@jazz.com",
}

console.log(alice.firstName) // Prints "Alice"
console.log(alice.lastName) // Prints "Coltrane"
console.log(alice.email) // Prints "alice.coltrane@jazz.com"
```

Objects are made up of keys and values. Keys are always strings, but values can be any legal JavaScript value, including strings, numbers, booleans, arrays, functions, and even other objects. You can access a value by using its keys:

```js
const alice = {
  firstName: "Alice",
  lastName: "Coltrane",
  email: "alice.coltrane@jazz.com",
  instruments: ["piano", "harp"],
  birthplace: {
    city: "Detroit",
    state: "Michigan",
  },
  play: function(song){
    console.log(`I'm playing ${song}`)
  }
}

console.log(alice.firstName)                // Prints "Alice"
for (let instrument in alice.instruments){
  console.log(instrument)                   // Prints "piano", then "harp"
}
console.log(alice.birthplace.city)          // Prints "Detroit"
console.log(alice.birthplace.state)         // Prints "Michigan"
console.log(alice.play("Blue Nile"))        // Prints "I'm playing Blue Nile"
```

## Arrays of Objects

One of the most common data patterns you'll see in programming is arrays of objects.

```js
const albums = [{
  id: 1,
  artist: "Alice Coltrane",
  album: "A Monastic Trio",
  year: 1968,
},{
  id: 2,
  artist: "Alice Coltrane",
  album: "Universal Consciousness",
  year: 1971,
},{
  id: 3,
  artist: "Alice Coltrane",
  album: "Turiya Sings",
  year: 1982,
}]
```

```js
const users = [{
  id: 1,
  username: "alicecoltrane",
  passwordHash: "h4fas3JiPa",
},{
  id: 2,
  username: "billevans",
  passwordHash: "we5xaCa9bm",
},{
  id: 3,
  username: "carolkaye",
  passwordHash: "3xgmasdfu8",
}]
```

```js
const songs = [{
  id: 1,
  artist: "Alice Coltrane",
  title: "Blue Nile",
  duration: 420, // 7 minutes in seconds
},{
  id: 2,
  artist: "Alice Coltrane",
  title: "Om Supreme",
  duration: 569, // 9:29 in seconds
},{
  id: 3,
  artist: "Alice Coltrane",
  title: "Spiritual Eternal",
  duration: 178, // 2:58 in seconds
}]
```

This powerful combination of data types allows you to build and work with collections that can represent almost any type of real-world data.
