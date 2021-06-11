# JavaScript: `Promise.all`: Exercises

## Questions

* How do you issue multiple HTTP requests simultaneously with JavaScript?
* What does `Promise.all` do?
* What data type does `Promise.all` accept?
* What data type does `Promise.all` return?

## Activities

1. Make a fetch request to `https://pokeapi.co/api/v2/pokemon` to get a list of 20 pokemon
2. Transform the response so that it's an array of the URLs for each individual pokemon
3. Transform that array so that it's an array of fetch requests
4. Run all the fetch requests at once
5. Turn each response into a DOM node the dislays the Pokemon's name and a sprite
