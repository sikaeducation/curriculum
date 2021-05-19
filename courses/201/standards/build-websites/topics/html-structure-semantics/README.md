# HTML: Structure Semantics

## Macro Sectioning: `<header>`, `<main>`, `<footer>`

These are typically used to semantically break up a page (or piece of standalone content, like an article).

* A `<header>` typically contains site information and navigation
* A `<main>` typically contains the primary content for the page
* A `<footer>` typically contains legal information, navigation, and site maps

Not every page needs to use any or all of these.

## Structural Sectioning

There are a few major structural elements that frequently show up on pages, and can be semantically marked up:

* `<nav>` contains the primary navigation for a page
* `<aside>` contains "sidebar" content, that is related to the main content but not critical to it
* `<article>` denotes that something could be independently redistributable, meaning another site or aggregator could lift all of the markup for the article and have everything they need
* `<section>` breaks up a page into sections. This is a generic container, much like `<div>`, but can be distinguished by the fact that it generally has a heading.

## History

All of these tags were added in HTML5.
