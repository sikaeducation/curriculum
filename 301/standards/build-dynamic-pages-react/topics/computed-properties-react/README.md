# React: Computed Values

The two main sources of data for a component are props and state. There is also data that's derived from either or both of those, which are called computed values. For example, if you have a list of movies:

```js
const movies = [{
  id: 1,
  title: "Star Wars",
  genre: "Fantasy",
},{
  id: 2,
  title: "Clerks",
  genre: "Comedy",
},{
  id: 3,
  title: "Super Troopers",
  genre: "Comedy",
}]
```

There are a few different ways you could process this data. You might want only the titles in a string (`"Star Wars, Clerks, Super Troopers"`), you might want them alphabetized, or you might want only the comedy movies. Furthemore, you may want to turn any or all of these into JSX elements. All of those are different presentations of the same data, not new data.

To do this in React, save these computed values as variables. These can be referenced in other computed values or used directly in the template:

```jsx
const MovieDisplayer = ({ movies }) => {
  const headline = movies.map(movie => movie.title).join(", ")
  const alphabetizedMovies = movies.sort((movieA, movieB) => {
    if (movieA.title > movieB.title) {
      return 1
    } else if (movieA.title < movieB.title) {
      return -1
    } else {
      return 0
    }
  })
  const allGenres = alphabetizedMovies.map(movie => <li key={movie.id}>{movie.title}</li>)
  const comedies = alphabetizedMovies.filter(movie => movie.genre === "Comedy")
    .map(movie => <li key={movie.id}>{movie.title}</li>)

  return (
    <div className="MovieDisplayer">
      <h2>{headline}, and more!</h2>
      <h3>In Your Favorite Genre:</h3>
      <ul>{comedies}</ul>
      <h3>All Movies</h3>
      <ul>{allGenres}</ul>
    </div>
  )
}
```

[Play with this code](https://codesandbox.io/s/restless-lake-vp45p)

You can also use this to alias or destructure props you're given:

```jsx
const FavoriteMovieBadge = ({ favoriteMovie }) => {
  const title = favoriteMovie.title

  return <h2>{ title }</h2>
}
```

Whenever the source data changes, any computed values will be automatically recalculated when the component rerenders.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Dave Ceddia: Computed Properties in React](https://daveceddia.com/computed-properties-in-react/) | Blog post on using computed properties in React|
