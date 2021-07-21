## Programming: Variable Scoping

At some point in learning programming, you may wonder why you can't just make everything a variable in the highest scope so that it can be seen by every other scope. As the program grows, the distance between where a variable is defined and where it's used will continue to grow until it becomes very difficult to tell where different variables are being used. When can you be confident you can get safely get rid of a variable? How can you control which parts of the program are allowed to see or change variables? How can you be confident no one else wrote a something that unexpectedly changed a variable?

The solution is to keep the scope of a variable as close to where it's used as possible. This communicates the purpose of the variable better, prevents other scopes from accidentally changing it, and allows you to reuse names in different scopes.

## Block Scope

In JavaScript, a scope is created with blocks, which are formed by the `{}` characters next to control structures:

```js
if (){
  // This is a block
} else if (){
  // This is a block
} else {
  // This is a block
}

for (){
  // This is a block
}

function (){
  // This is a block
}
```

In block scoping, you can see out of the scope, but you can't see in. So this works:

```js
const someVariable = "Hi!"
if (true){
  console.log(someVariable) // "Hi!"
}
```

But this doesn't:

```js
if (true){
  const someVariable = "Hi!"
}
console.log(someVariable) // Undefined
```

A scope can see out through many levels:

```js
const a = "a"

if (true){
  const b = "b"

  if (true){
    const c = "c"

    console.log(a, b, c) // "a", "b", "c"
  }
}
```

## Sharing Scopes

If a variable needs to be used in more than one scope, it should be in a shared scope:

```js
const name = "Clifford"

if (name){
  console.log(name)
}

for (let index = 0; i < name.length; i++){
  console.log(name[i])
}
```

## Watch Out!

* Blocks use a similar syntax to objects in JavaScript. Blocks are specifically attached to keywords like `if`, `else`, `else if`, `for`, and `function`.
* Variables in modern JavaScript are all block scoped. Formerly, they were scoped only to functions. This is what the `var` keyword you may see in older JavaScript code and tutorials means.
