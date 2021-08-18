# APIs: Intro

Consider this application that displays information and images about Pokemon:

```js
const favoritePokemon = "pikachu"
const url = `https://pokeapi.co/api/v2/pokemon/${favoritePokemon}`

fetch(url)
  .then(parseResponse)
  .then(showPokemon)
  .catch(showError)

function parseResponse(response) {
  return response.json()
}

function showPokemon(pokemonData) {
  const imageUrl = pokemonData.sprites.front_default
  const name = pokemonData.name

  const $image = document.querySelector("#pokemon-image")
  const $name = document.querySelector("#pokemon-name")

  $image.src = imageUrl
  $name.textContent = name
}

function showError(error) {
  const $error = document.querySelector("#error")
  $error.textContent = error.message
}
```

[Play with this code](https://codesandbox.io/s/upbeat-kowalevski-ww0ks?file=/index.js)

This application has 27 lines of code and no other data of its own, yet it's capable of showing over 1000 different characters from the popular franchise. This is the power of APIs.

## APIs

When you're building an app that needs data or processing, you have two options:

1. Store the data yourself in a database or write the functionality yourself
2. Get it from someone else

When you get it from someone else, you're getting it from from an API. For the Pokémon app, you can add every Pokémon to a database you own, including names, pictures, abilities, and so on. Not only would this be time-consuming, but that would also means that every time a new game comes out you would need to update the database. Luckily, the [Pokemon API](https://pokeapi.co) maintains all of that data already and offers it for use in applications through their API.

APIs can do more than give you data. APIs can also do calculations and transform data, such as turning text into audio files or identifying the subject matter of images. Instead of writing all of that functionality yourself, you can integrate these functions into your apps as if you wrote them.

Some examples of APIs:

* **[Yahoo! Finance](https://rapidapi.com/apidojo/api/yahoo-finance1)**: Get real-time stock prices
* **[API Football](https://www.api-football.com/)**: Get NFL stats
* **[URL Shortener Service](https://developers.rebrandly.com/docs)**: Give a long URL, get back a short URL
* **[Skyscanner Flight Search](https://www.partners.skyscanner.net/affiliates/travel-apis)**: Search flight data and ticket price quotes
* **[IBM Watson](https://www.ibm.com/watson)**: Use IBM's Supercomputer to do a variety of artificial intelligence tasks

APIs can supercharge your application development to take advantage of other people's software and data.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Free Code Camp: What Is An API? In English Please](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/) | Free Code Camp's blog post on APIs |
| [Public APIs](https://github.com/public-apis/public-apis) | Open source list of public APIs |
| [Wikipedia: APIs](https://en.wikipedia.org/wiki/API) | Wikipedia's entry on APIs |
| [Wikipedia: Web Service](https://en.wikipedia.org/wiki/Web_service) | Wikipedia's entry on Web Services |
