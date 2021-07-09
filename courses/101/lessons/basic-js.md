# Basic JavaScript

## Objectives

* [Read text from websites using JavaScript](#read-text-from-websites-using-javascript)
* [Write text to websites using JavaScript](#write-text-to-websites-using-javascript)
* [Execute Code Based On User Interactions Using JavaScript](#execute-code-based-on-user-interactions-using-javascript)

Optionally, include the JS Repeater exercise at the end to tie it all together:

### JS Email Repeater

Given this HTML:

```html
<label for="email-input">Email Address</label>
<input id="email-input" />
<button id="print">Print email address</button>

<output id="email-output">&nbsp;</output>
```

Write JavaScript to capture the email address entered and print it to the output.

[Starter code](https://codesandbox.io/s/lively-monad-wq8fs?file=/index.js)

## Read Text From Websites Using JavaScript

### Check For Understanding

When the button is pressed, the browser will run the `logValues` function. Write code that reads the values a user enters into each of the input fields and prints them to the console.

[Read inputs from HTML with JavaScript](https://codesandbox.io/s/optimistic-hoover-yeegs)

### Double Plan

| Student | Instructor |
| --- | --- |
| Watch | Demonstrate reading a value from a form in JavaScript |
| Answer individually | Ask everyone to think of what you can do when data has gone from the input in HTML to a value in JavaScript |
| Write a list of things that can be done when you've captured data in JS | Observe |
| Share answers with a partner | Observe |
| Share out some samples loud | Facilitate |
| Follow along | Demonstrate the syntax of reading a value from JavaScript. Highlight that the selectors in `querySelector` are the same as the selectors in CSS. |

## Write Text To Websites Using JavaScript

### Check For Understanding

The underpants gnomes have a three-plan. When the button is pressed, the displayPlan function will run and the plan should be revealed on the page. Add the text in each of the three steps in index.js to the appropriate HTML element.

[Underpants Gnomes](https://codesandbox.io/s/zen-mclaren-e4h3v)

### Double Plan

| Student | Instructor |
| --- | --- |

## Execute Code Based On User Interactions Using JavaScript

### Check For Understanding

There's a function called boom in the index.js file that should print BOOM when the button is clicked. The function is already written, you just need to attach the script and execute the function when the button is clicked.

[Boom Goes The Dynamite](https://codesandbox.io/s/youthful-neumann-ynhjm)

### Double Plan

| Student | Instructor |
| --- | --- |
| Think, answer | Ask how you connected CSS to an HTML page. How do you think JavaScript would be added? |
| Write all the differences| Demonstrate adding a deferred script link to the head, next a link tag. |
| Share with a partner | Observe |
| Share out loud | Facilitate until you have all the differences |
| Try to reason through it | Show adding a script tag in the head without the defer tag failing. Ask why with wait time, facilitate a discussion as necessary. Show it working when in the bottom of the body as needed. |
| Follow along | Demonstrate adding an `onclick` handler and calling a function. Be sure to highlight what happens if the function is not invoked. |
| Observe | Demonstrate adding a click handler with `addEventListener`. Point out that this is how this should be done, but highlight the additional complexity. |
