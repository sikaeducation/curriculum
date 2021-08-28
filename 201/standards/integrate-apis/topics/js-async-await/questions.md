* Does `async`/`await` replace `.then`/`.catch`? Why or why not?
* What is the relationship between `async`/`await` and promises?
* What is at least one advantage of `async`/`await`?
* What is at least one drawback to `async`/`await`?
* What is required to be able to use `await`?
* What do you need to consider when calling an async function?
* Which function syntaxes support async functions?
* What is a `try`/`catch` block?
* Why won't this code work?

```js
const response = await fetch(someUrl)
```

* What needs to be added to make this code work?

```js
function displayData(){
  const response = await fetch(someUrl)
}
```

* What is the least modification you could do to make this code work?

```
someForm.addEventListener("submit", event => {
  event.preventDefault()
  const response = await fetch(someUrl)
  console.log(response)
})
```
