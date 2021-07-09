# Basic CSS

## Objectives

* [Link CSS to HTML pages](#link-css-to-html-pages)
* [Apply CSS to HTML pages](#apply-css-to-html-pages)

## Link CSS to HTML pages

### Check For Understanding

Given an HTML file and a CSS file, link them together.

[Starter Code](https://codesandbox.io/s/intelligent-joliot-hwj1z)

### Double Plan

| Student | Instructor |
| --- | --- |
| Discuss | Ask: Content is stored in an HTML file, style is store in a CSS file. How does the browser know which stylesheet goes with which HTML file? |
| Take notes | Show examples of link tags with different paths- relative, absolute, external. |
| Write answers | Have students write a link tag for a given URL. |
| Compare answers with a neighbor | Look for common misunderstandings, look for people to call |
| Share answers with the group | Sample the room- what are the parts of a linked stylesheet? Link tag, rel, href, url. |

## Apply CSS to HTML pages

### Check For Understanding

Given this HTML:

```html
<h1>Programming</h1>
<p>Programming can be pretty hard, but <span id="warning">be careful!</span> You might also have a lot of fun.</p>
```

Write a style sheet that does the following:

* Makes the heading white, bold, 24 pixels high, with a background color of purple and 24 pixels of space all around it
* Limits all the paragraphs to being 300 pixels wide and center all the text inside them
* Makes the text in the element with an id of "warning" red

CSS Programming danger

[Starter code](https://codesandbox.io/s/xenodochial-bardeen-xzjnr)

### Double Plan

| Student | Instructor |
| --- | --- |
| Identify all the differences between a styled and unstyled page. Use the format, "The ------ is ------." | Show students a styled and unstyled page side by side. |
| Students share differences, update their lists when someone has a new one | Facilitate sharing |
| Take notes | Demonstate tag and ID selectors |
| Revise their lists to replace the first `------` with appropriate selectors | Show HTML, Observe |
| Students share selectors, update their lists when someone has a new one | Facilitate sharing |
| Take notes | Demonstrate creating a CSS declaration. |
| Research properties | Solo or in groups, assign students to research the following properties: `font-family`, `font-size`, `background-color`, `color`, `max-width`, `text-align` |
| Present findings | Facilitate |
| Revise their initial lists to replace the second ------ with a declaration | Observe |
| Share their properties | Facilitate |
