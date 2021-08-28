# HTML Validation

HTML has a lot of rules, such as:

* You can't nest a `<p>` tag inside of another `<p>` tag
* Every `<li>` needs to have have a `<ul>` or `<ol>` as an immediate ancestor
* `<img>` tags need `src` and `alt` attributes
* Tags must be opened and closed in order

There are hundreds of these rules, and you're bound to make mistakes. How can you find out what they are so you can correct them?

## The W3C Validator

The W3C, the organization that manages the standards for HTML and CSS, runs a service that will tell you if an HTML document follows the rules.

[W3C HTML Validation Service](https://validator.w3.org/)

There are 3 ways to use the service:

* You can give it a public URL to check, which is ideal for deployed sites
* You can upload a file to check, which is ideal if your site is not deployed
* You can copy/paste HTML into it, which is ideal for checking shorter segments of HTML

When you get the validator service an HTML file, it will return a list of errors to correct.

## Watch Out!

When you make mistakes with HTML, most browsers will make an effort to figure out what you meant and render the file anyway. There are still plenty of reasons to make sure you have conforming HTML:

* Browsers might be covering up mistakes that will confuse you as you add to and modify the page
* You may be ignoring accessibility features that people using assistive technologies rely on to use your site
* Browsers may add changes in the future that break non-conforming HTML

Something looking correct is not a replacement for validating it.

## History

The [HTML standard](https://html.spec.whatwg.org/multipage/) is a comprehensive list of all the rules for valid HTML. This is the reference that anyone who makes a browser (such as Google, Mozilla, and Microsoft) can use to make sure that the HTML you write will work on their browser.

## More Resources

| Resource | Description |
| --- | --- |
| [W3C Documentation on Validation](https://www.w3.org/wiki/Validating_your_HTML?TB_iframe=true) | The official W3C wiki document on HTML validation |
