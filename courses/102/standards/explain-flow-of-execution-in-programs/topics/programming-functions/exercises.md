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
