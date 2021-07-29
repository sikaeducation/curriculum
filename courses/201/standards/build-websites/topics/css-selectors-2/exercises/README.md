# CSS: Selectors: Descendant, Sibling, and Attribute: Exercises

## Questions

* What is a descendant selector?
* What is a sibling selector?
* What is an attribute selector?
* Define each of these CSS combinators:
  * `+`
  * `>`
  * `~`
  * `[]`
  * `,`
  * ` `
* Given this HTML:

```html
<ul id="number-list">
  <li class="number">1</li>
  <li class="number">2</li>
  <li>
    <ul>
      <li class="letter">A</li>
      <li class="letter">B</li>
      <li class="letter">C</li>
    </ul>
  </li>
  <li class="number">3</li>
</ul>
```

How many elements do these selectors target:

* `li`
* `#number-list`
* `li + li`
* `li ~ .number`
* `.number`
* `#number-list > li`
* `li li`
* `li > li`
