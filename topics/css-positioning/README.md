# CSS: Positioning 1

The `display` property has limits- you can only say that something should be inline or block (1). What if you want to tuck an element into a corner, or make it slightly off-center, or make elements overlap?

(example)
(example)
(example)

## Positioning

Positioning is an intimidating part of CSS, but it follows a small number of rules (2).

1. Everything starts as being statically positioned, which means it's either block or inline
2. You can make something absolutely positioned, which means that you are choosing to control exactly where it goes
3. When you absolutely position something, it is rendered relative to either
  a. Its nearest ancestor that has a `position` of something other than `static`
  b. The entire document

So if I want to put something in the bottom-right corner of a the entire page:

(example image)

I can apply these style rules to it:

```css
.badge {
  position: absolute;
  bottom: 0;
  right: 0;
}
```

If I want to put something in the upper right corner of an element:

(example)

I can apply these style rules:

```css
.card {
  position: relative;
}
.close {
  position: absolute;
  top: 6px;
  right: 6px;
}
```

Values given to `top`/`right`/`bottom`/`left` indicate how much space should be between the element you're positioning and its positioning context. It may be helpful to think of it as "pushing". An absolutely positioned element with a `left` value of `5%` would push the element 5% of the size of the positioning context from the left side.

## Watch Out

* The `top`, `right`, `bottom`, and `left` CSS properties only work on absolutely positioned elements, they have no effect on elements with other positioning
* Absolutely positioning an element makes that element a new relative context for any of its children
* Absolutely positioned elements no longer take up any space in the document flow, meaning they can't push things out of the way. Elements will over- and underlap absolutely positioned elements. To control which order elements stack in, you can use the `z-index` property. Higher numbers go on top, lower numbers go on bottom.

---

1. There are other options, but they all face the same limitations.
2. There are more positioning types like "sticky", but they're more advanced
