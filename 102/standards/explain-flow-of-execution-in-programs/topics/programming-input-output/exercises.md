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
