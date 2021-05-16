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

## Watch Out

* 


---

1. There are other options, but they all face the same limitations.
2. There are more rules like "sticky", but they're more advanced
