# Comments

Almost every programming language has a way to store comments, or notes inside your code.

## HTML Comments

```html
<!-- The second span needs to open on the same line the first one closes on to prevent extra whitespace being added by the browser -->
<span>One</span><
span>Two</span>
```

HTML comments happen between the `<!-- -->` characters. They can go on one line or span multiple lines.

## CSS Comments

```css
/*
This is a multi-line
CSS comment
*/

div {
  margin-left: -5px; /* Negative margin is for visual alignment */
}
```

CSS comments happen between the `/* */` characters. Like HTML comments, they can go on one line or span multiple lines.

## JavaScript Comments

```js
/*
This is a multi-line
JS comment
*/

const a = 1 // This is a single-line comment
// So is this
```

JS comments happen between the `/* */` characters on muliple lines, or after a `//` on one line.

## Why You Probably Shouldn't Write So Many Comments

Many introductory programming classes advise students to write lots of comments. Comments aren't all good, however. They can make code harder to read, and can say things that are outright false.

## Things Worth Commenting

* Debugging. One of the best ways to debug code is to comment things out while you're trying to narrow down where errors are happening. Make sure you don't keep commented out code, though!
* Anytime you use something in an unconventional or unusual manner, especially if you did so to work around a technical limitation. For example, there are some tricks in CSS that require using negative values for margins. Those are good opportunities for a comment.
* Marking different areas of the same file. If one file has a few different logical areas, using comments as headings can be helpful. Consider first if it wouldn't make sense to break up the file into multiple files, though.

## Things That Should Not Be Commented

* Bugs. If a part of the code isn't working as intended, keep track of that in an issue tracking system.
* Unused code. Don't keep old code lying around. If you need to get old something back, use version control.
* Explanations of what code does. This one is a little counter-intuitive, especially to beginners. The problem is that you create two sources of truth- what you say the code does, and what it actually does. Those often start out being the same and drift over time. It's normal and reasonable to write comments explaining what code does while you're writing it to help you clarify your thoughts, just clear them out before you commit your code.

Comments help explain unclear code. If it isn't obvious why a piece of code exists, a comment can help. However, your first step should be to try to find a way to make the code so clear it wouldn't need a comment. Often, using better semantic tags and class names in HTML and CSS and variable and function names in JavaScript can remove the need for a comment.


## Additional Resources

| Resource | Description |
| --- | --- |
| [Video: The Art of Code Comments](https://www.youtube.com/watch?v=yhF7OmuIILc) | Sarah Drasner's overview of code commenting philosophy |
