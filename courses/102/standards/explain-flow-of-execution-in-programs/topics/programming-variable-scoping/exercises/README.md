## Programming: Variable Scoping: Exercises

## Questions

* What symbols are used to indicate blocks in JavaScript?
* What control structures in JavaScript use blocks?
* Can outer scopes see inner scopes?
* Can inner scopes see outer scopes?
* What does it mean for something to be in a shared scope?
* How can you tell whether something is a block or an object?

## Activities

In this code:

```js
const a = "a"

if (true){
  const b = "b"

  if (true){
    const c = "c"
  }

  const d = "d"
}

const e = "e"
```

* Which variables are in scope when `a` is assigned?
* Which variables are in scope when `b` is assigned?
* Which variables are in scope when `c` is assigned?
* Which variables are in scope when `d` is assigned?
* Which variables are in scope when `e` is assigned?
