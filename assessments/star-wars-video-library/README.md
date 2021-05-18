# Star Wars Video Library

## User Stories

1. Showing a list of movies
  * Given that a Star Wars fan is on the home page
  * Then a list of all Star Wars movies are shown
2. Showing details about a single movie
  * Given that a Star Wars fan is on the home page
  * When a movie is selected
  * Then details about that movie are shown

A movie listing should look like this when it's generated:

```html
<div class="movie-listing">
  <a href="movie.html?movie=movie-id-goes-here">Movie Name Goes Here</a>
  <time>Movie release year here goes here</time>
</div>
```

A Movie details page should look like this when it's generated:

```html
<div class="movie">
  <a href="movie.html?movie=movie-id-goes-here">Movie Name Goes Here</a>
  <time>Movie release year here goes here</time>

  <h2>Characters</h2>
  <ul class="characters">
    <li>Character name goes here</li>
    <li>Character name goes here</li>
    <li>Character name goes here</li>
  </ul>
</div>
```

## Definition of Done

* All pages should load in less than 5 seconds on a high-speed connection
* Loading indicators should be displayed during network requests
* The JavaScript should pass the [Standard](https://standardjs.com/) JS linter with no errors or warnings

## Rubric

### Attention to detail

* [ ] - Reasonable commit history
* [ ] - Homepage lists all movies
* [ ] - Each movie listing contains an image, a name, and a link
* [ ] - The movie details page shows the name, an image with alt text, the opening title crawl, and a list of character names featured in the movie
* [ ] - Styling is maintained

### Code Quality

* [ ] - Passes Standard linting with no errors or warnings
* [ ] - No useless code
* [ ] - Errors are handled
