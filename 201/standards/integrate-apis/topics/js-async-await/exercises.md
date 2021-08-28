`fetch` the data at `https://pokeapi.co/api/v2/pokemon/pikachu` and log it using `async`/`await`

---

Convert this all of this `.then`/`.catch` code to `async`/`await`:

```
fetch(someUrl)
  .then(response => response.json())
  .then(console.log)
  .catch(error => {
    console.error(error.message)
  })
```

---

[Async / Await Refactoring Exercise](https://github.com/sikaeducation/async-await-refactoring)
