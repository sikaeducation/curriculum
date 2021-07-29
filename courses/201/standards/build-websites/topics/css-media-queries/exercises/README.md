# CSS: Media Queries: Exercises

## Questions

* What's a breakpoint?
* What's the problem with using common device widths for breakpoints?

## Activities

What's wrong with this code?

```css
p {
  color: red;
}
@media (max-width: 300px) {
  color: blue;
}
```

---

Given the following stylesheet:

```css
p {
  color: blue;
}
@media (max-width: 300px) {
  p {
    color: red;
  }
}
```

The screen is 450px wide. What color is the paragraph text?

---

Given the following stylesheet:

```css
@media (max-width: 300px) {
  p {
    color: red;
  }
}
p {
  color: blue;
}
```

The screen is 250px wide. What color is the paragraph text?

---

Given the following stylesheet:

```css
p {
  color: blue;
}
@media (max-width: 300px) {
  p {
    color: red;
  }
}
```

The screen is 300px wide. What color is the paragraph text?
