# Programming: Input and Output: Exercises

## Questions

* Describe 3 examples of inputs in programming
* Describe 3 examples of outputs in programming
* How do you print something to the console in JavaScript?
* How do you open the console in a browser?
* How do you output multiple expressions to the console in JavaScript?

## Activities

You have this code:

```js
function (string){
  let reverse = []
  let words = string.split(" ")
  words = words.reverse()

  for (word in words){
    reverse.push(word.reverse())
  }
  return reverse.join(" ")
}
```

When you run it, you get an error saying that `string.split is not a function`. Strings definitely have a `.split` method. How can you use `console.log` to debug your program?
