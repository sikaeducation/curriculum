# CSS: Selectors 3: Exercises

## Questions

* What is a pseudo-class?
* Name 3 pseudo-classes
* What is a pseudo-element?
* Name 3 pseudo-elements
* How do you target only even elements in a list?
* How do you target only odd elements in a list?
* How do you target the first element in a list?
* How do you target the last element in a list?
* How do you target the 4th item in a list?
* What's the difference between `nth-child` and `nth-of-type`?
* Describe what the following selectors target:
  * `ul:nth-child(3)`
  * `ul:nth-of-type(3)`
  * `li:nth-child(even)`
  * `p::first-letter
  * `p::first-line
  * `textarea::selection`

## Activities

```html
<a href="#">About Us</a>
```

Style this link so that:

* It has no underline
* Visited links are `hsl(330, 50%, 50%);`
* Active links are `hsl(30, 50%, 50%);`
* Unvisited links are `hsl(240, 50%, 50%);`

---

```html
<nav>
  <ul>
    <li>
      <a href="#">Products</a>
    </li>
    <li>
      <a href="#">Services</a>
    </li>
    <li>
      <a href="#">About Us</a>
    </li>
  </ul>
</nav>
```

Style this list so that:

* The second and third links have a left margin of 32px
