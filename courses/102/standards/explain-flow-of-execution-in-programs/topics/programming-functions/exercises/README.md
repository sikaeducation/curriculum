# Programming: Functions: Exercises

## Questions

* What are functions for?
* What is the relationship between functions and programs?
* What is a function parameter?
* What is a function argument?
* Distinguish between function parameters and arguments.
* What is the return value of a function?
* What is the body of a function?
* What's the difference between logging something and returning something in a function?
* What is invoking a function?
* What is calling a function?

## Activities

Consider the following function:

```js
function reverseWords(string){
  let reverse = []
  let words = string.split(" ")
  words = words.reverse()

  for (word in words){
    reverse.push(word.reverse())
  }
  return reverse.join(" ")
}
```

* What's the name of the function?
* What data type is the return value?
* What parameters does this function have?
