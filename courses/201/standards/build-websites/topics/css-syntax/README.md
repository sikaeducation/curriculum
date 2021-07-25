# CSS: Syntax

Unstyled pages look like undifferentiated research white papers. It's difficult to find what you're looking for, and it's difficult to tell one site from another. If you don't style your pages, they actually don't look terrible:

(example)

This is because your browser has a "user-agent stylesheet" that creates a default look for the tags in your document. Without that, your document will look like this:

(example)

In truth, there are certainly sites where custom stylesheets actively make it worse:

(example)

If you use them right, stylesheets help people read and understand your content, navigate and use your apps, and relate them to the company's brand and experience.

(example)

## Adding CSS to HTML

There are 3 ways to apply CSS to a page:

* Inline - Don't do this
* Embedded - Don't do this either
* Linked - Do this

Stylesheets generally store 2 things:

* Selectors
  * What should this apply to?
* Rules
  * What property do I want to set on this?
  * What should it be set to?

## Watch Out!

* Your page still has a user-agent stylesheet. All of your styles should override the defaults, but the results may be unexpected. Note that these can be "reset."
* Semicolons are required
* Rules are applied top to bottom (except for specificity)
* Don't forget the `rel="stylesheet"` in the link tag
