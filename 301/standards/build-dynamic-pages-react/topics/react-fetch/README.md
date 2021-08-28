# React: `fetch`

Integrating with APIs is a core part of most React apps. While React apps still use `fetch` to make HTTP requests in the same way that websites do, extra care needs to be taken with how the response data is handled. The most straightforward way to handle an API integration looks like this:

```js
import { useState, useEffect } from "react"

const PokemonCard = ({ name }) => {
  const [pokemon, setPokemon] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    fetch(url)
      .then(response => response.json())
      .then(pokemon => {
        setError(false)
        setPokemon(pokemon)
      }).catch(error => setError(true))
  }, [name])

  return (
    <div className="PokemonCard">
      {
        pokemon.name
          ? (
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          )
          : <span>Loading...</span>
      }
      {
        error
          ? <span>There was a problem loading this Pokemon.</span>
          : null
      }
    </div>
  )
}
```

[Play with this code](https://codesandbox.io/s/epic-mendel-7ys34?file=/src/PokemonCard.js)

1. The `useEffect` hook is imported, along with the `useState` hook.
2. The `pokemon` stateful variable is initialized to an empty object
3. An `error` stateful variable is initialized to `false`.
3. The `useEffect` hook is called with a function and an array with the `name` variable. The function fetches a given pokemon, and then when it comes back it calls `setPokemon` with the response body.
  * If there's an error, the `error` stateful variable is set to `true`.
4. The template checks to see if the `pokemon` stateful variable has a name set.
  * If it does, it renders the rest of the template
  * If it doesn't, it displays a loading message
5. If the `error` stateful variable is truthy, it displays an error message.

The `useEffect` hook is used for code that generates side-effects. For example, making the API call has the side-effect of changing the `pokemon` or `error` states. Other examples of side-effects include using `localStorage` and changing the title of a page.

`useEffect` takes two arguments: A function that contains the side-effect generating code and an array. The array should contain a list of variables that should be watched. If any of the variables given to the array change, the function will execute again. If you only want the function to run the first time the component is rendered, give it an empty array.

## Watch Out!

Note that if you're referencing a variable inside a `useEffect` hook, it should be tracked.

---

If you don't give the `useEffect` hook a second argument, it will re-run on every component render. This will usually cause an infinite loop.

---

It's very important to initialize state to the same data type as it will eventually be. For example:

```js
import { useState, useEffect } from "react"

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon`
    fetch(url)
      .then(response => response.json())
      .then(pokemon => {
        setPokemonList(pokemon)
      })j
  }, [])

  const pokemon = pokemonList.map(pokemon => {
    return <li key={pokemon.id}>{pokemon.name}</li>
  })

  return (
    <ul className="PokemonList">{pokemon}</ul>
  )
}
```

If `pokemonList` is initialized to anything other than an array, the component will break on the first render. This is because `.map` can only performed on arrays, including empty arrays. When the first render happens, trying to `.map` over any value other than an array will throw an error.

## Additional Resources

| Resource | Description |
| --- | --- |
| [React: AJAX and APIs](https://reactwithhooks.netlify.app/docs/faq-ajax.html) | Official React guide to `fetch` |
| [Video: `useEffect`](https://www.youtube.com/watch?v=9U3IhLAnSxM&t=7760s) | React Hooks Crash Course: `useEffect` |
