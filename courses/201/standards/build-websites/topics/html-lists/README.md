# HTML: Lists

How do we represent lists and collections semantically in HTML?

## List Syntax

There are two types of lists in HTML: Ordered and unordered. Their syntax is the same:

```html
<!-- Ordered -->
<ol>
  <li>First Item</li>
  <li>Second Item</li>
  <li>Third Item</li>
</ol>

<!-- Unordered -->
<ul>
  <li>First Item</li>
  <li>Second Item</li>
  <li>Third Item</li>
</ul>
```

## List Semantics

By default, unordered lists render with numbers and unordered lists render with bullets.

(image here)

However, remember the most important part of semantic markup: It doesn't matter what it looks like, only what it means. Semantically, an ordered list is one where the order of the items is significant (like steps in a recipe), and unordered list is one where the order is not significant (like a list of product features).

This also means that lists are appropriate in lots of situations where neither bullets nor numbers would necessarily be appropriate:

```html
<!-- A list of links -->
<nav>
  <ul>
    <li>
      <a href="news.html">News</a>
    </li>
    <li>
      <a href="products.html">Products</a>
    </li>
    <li>
      <a href="about.html">About Us</a>
    </li>
  </ul>
</nav>
```

```html
<!-- A list of products -->
<ul>
  <li>
    <div class="product">
      <h2>Tennis Balls</h2>
      <h2>$4.99</h2>
    </div>
  </li>
  <li>
    <div class="product">
      <h2>Golf Balls</h2>
      <h2>$9.99</h2>
    </div>
  </li>
  <li>
    <div class="product">
      <h2>Baseballs</h2>
      <h2>$5.99</h2>
    </div>
  </li>
</ul>
```

## Nesting Lists

To nest a list, start a new list inside of a list item:

```
<ul>
  <li>1</li>
  <li>
    <ul>
      <li>2.1</li>
      <li>2.2</li>
      <li>2.3</li>
    </ul>
  </li>
  <li>3</li>
</ul>
```

You can nest these as deeply as you need to, and you can mix and match `<ul>` and `<ol>` lists. Browsers will indent nested lists by default, and will also apply different bullets and numbering systems:

(image here)

This can be customized with CSS.
