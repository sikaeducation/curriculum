# PokeDex

You're making a PokeDex, a list of Pokemon.

## User Stories

1. Showing a list of pokemon
  * Given that a Pokemon fan is on the home page
  * Then a list of 50 Pokemon are shown
2. Showing details about a single pokemon
  * Given that a Pokemon fan is on the home page
  * When a Pokemon card is selected
  * Then details about that Pokemon are shown

A Pokemon listing should look like this when it's generated:

```html
<div class="pokemon-listing">
  <figure>
    <img src="pokemon-image-url-goes-here.jpg" alt="Pokemon Name Goes Here" />
    <figcaption><a href="pokemon.html?pokemon=pokemon-id-goes-here">Pokemon Name Goes Here</a></figcaption>
  </figure>
</div>
```

A Pokemon's details page should look like this when it's generated:

```html
<div class="pokemon-details">
  <figure>
    <img src="pokemon-image-url-goes-here.jpg" alt="Pokemon Name Goes Here" />
    <figcaption>Pokemon Name Goes Here</figcaption>
  </figure>

  <h2>Abilities</h2>
  <ul class="abilities">
    <li>
      <span class="ability-name">Ability's name goes here</span>
      <span class="ability-short-description">Ability's short description goes here</span>
    </li>
    <li>
      <span class="ability-name">Ability's name goes here</span>
      <span class="ability-short-description">Ability's short description goes here</span>
    </li>
    <li>
      <span class="ability-name">Ability's name goes here</span>
      <span class="ability-short-description">Ability's short description goes here</span>
    </li>
  </ul>
</div>
```

## Definition of Done

* All Pokemon names should be Title Cased
* All pages should load in less than 5 seconds on a high-speed connection
* Loading indicators should be displayed during network requests
* The JavaScript should pass the [Standard](https://standardjs.com/) JS linter with no errors or warnings

## Rubric

### Attention to detail

* [ ] - Reasonable commit history
* [ ] - Homepage lists 50 Pokemon
* [ ] - Each Pokemon listing contains an image, a name, and a link
* [ ] - The Pokemon details page shows the name, an image with alt text, and a list of abilities with name and short descriptions
* [ ] - Styling is maintained

### Code Quality

* [ ] - Passes Standard linting with no errors or warnings
* [ ] - No useless code
* [ ] - Errors are handled
