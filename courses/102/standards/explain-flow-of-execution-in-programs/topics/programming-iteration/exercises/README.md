# Programming: Iteration: Exercises

## Questions

* What is iteration?
* What is the first thing given to a `for...in` loop in JavaScript?
* What is the second thing given to a `for...in` loop in JavaScript?

## Activities

What do the following programs print to the screen?

```js
const numbers = [2, 4, 6, 8]
let product = 1

for (let number in numbers){
  product = product * number
}

console.log(product)
```

```js
const words = ["Excellent", "weather", "we're", "having", "today"]
let string = ""

for (let word in words){
  string = `${string} ${word}`
}

console.log(`${string}!`)
```

```js
const users = [{
  id: 1,
  username: "milesdavis"
},{
  id: 2,
  username: "johncoltrane"
},{
  id: 3,
  username: "billevans"
}]
const ids = []

for (let user in users){
  ids.push(user.id)  
}

console.log(ids)
```
