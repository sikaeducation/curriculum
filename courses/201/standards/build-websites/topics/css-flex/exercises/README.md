# CSS: Flexbox: Exercises

## Questions

* Describe the relationship between flex containers and flex items
* Are flex containers inline or block?
* Name 3 properties of flex containers
* Name 2 properties of flex items
* What are 5 valid values for `justify-content`?
* What are 5 valid values for `align-items`?
* What is the difference between `justify-content` and `align-items`?
* What are the two axes in flexbox?
* What is the cross axis in flexbox?
* Can a flex container also be a flex item?
* Can a flex item also be a flex container?
* How do you make a flex container an inline element?
* Why isn't this element vertically centered on the screen?

```html
<!doctype html>
<html>
  <head>
    <title>Vertical Centering Exercise</title>
    <meta charset="utf-8" />
  </head>
  <style>
    .outer {
      dislay: flex;
      align-items: center;
    }
  </style>
  <body>
    <div class="outer">
      <div>Inner</div>
    </div>
  </body>
</html>
```

## Activities

* [FlexBox Froggy](https://flexboxfroggy.com/)

---

Vertically and horizontally center the inner element on the screen using Flexbox:

```html
<!doctype html>
<html>
  <head>
    <title>Vertical Centering Exercise</title>
    <meta charset="utf-8" />
  </head>
  <style>
    /* Solution goes here */
  </style>
  <body>
    <div class="outer">
      <div>Inner</div>
    </div>
  </body>
</html>
```

---

Vertically and horizontally center the navigation bar on the screen, then evenly distribute all of the navigation items:

```html
<!doctype html>
<html>
  <head>
    <title>Vertical Centering Exercise</title>
    <meta charset="utf-8" />
  </head>
  <style>
    /* Solution goes here */
  </style>
  <body>
    <nav>
      <ul>
        <li>
          <a href="#">A</a>
        </li>
        <li>
          <a href="#">B</a>
        </li>
        <li>
          <a href="#">C</a>
        </li>
      </ul>
    </nav>
  </body>
</html>
```
