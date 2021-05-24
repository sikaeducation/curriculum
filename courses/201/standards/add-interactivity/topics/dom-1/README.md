# DOM 1

You know how to build web pages and write JavaScript, but how do you combine those things to make your web pages dynamic and interactive?

## The Document Object Model

The Document Object Model, or DOM is what enables you to manipulate web pages with JavaScript. The web pages you write in HTML actually go through some steps before they're rendered on the screen:

1. The browser requests an HTML file from a file server
2. The file server gives the browser the HTML file
3. The browser steps through each element in the HTML file and turns them into a tree of DOM nodes
4. The DOM nodes are rendered to the screen

So when you write this HTML:

```html
<header>
  <h1>Site Title</h1>
  <nav>
    <ul>
      <li>
        <a href="news.html">News</a>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
    </ul>
  </nav>
</header>
<main>
  <h2>A Heading</h2>
  <p>Some content, including <a href="page-2.html">links.</a></p>
</main>
```

Your browser will create this DOM tree:

(image)

The browser has a variety of JavaScript methods for reading, writing, and otherwise interacting with this tree.

## Watch Out

* Once your browser ingests HTML and builds out the DOM, it is no longer HTML. When you look at HTML in the element inspector, that's actually your browser recreating the HTML based on the current state of the DOM.
