* What is a side-effect?
* How are side-effects handled in React?
* How are HTTP errors handled in React?
* What is `useEffect` for?
* What are the parameters of `useEffect`?
* What is wrong with this code:

```js
useEffect(() => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  fetch(url)
    .then(response => response.json())
    .then(pokemon => {
      setError(false)
      setPokemon(pokemon)
    }).catch(error => setError(true))
}, [])
```
