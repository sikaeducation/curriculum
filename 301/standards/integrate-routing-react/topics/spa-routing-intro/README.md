# Intro to Single-Page Application Routing

In a traditional website, using a navigation link sends an HTTP request to a server, which sends back a new HTML file. The defining feature of single-page apps or SPAs is that there's only one HTML page. How can you have an application with one HTML page and multiple views?

A web page is made up of DOM elements, each of which are rendered to the screen. JavaScript can add, remove, or modify those DOM nodes. In an SPA, a view is a collection of DOM nodes. When you navigate in a SPA, old DOM nodes are removed and new ones are added. For example, in pure JavaScript:

```html
<body>
  <div id="app"></div>
</body>
```

```js
const app = document.querySelector("#app")

const header = document.createElement("header")
header.innerHTML = `
  <h1>Our Site</h1>
  <nav>
    <ul>
      <li>
        <a href="#" id="products">Products</a>
      </li>
      <li>
        <a href="#" id="about">About Us</a>
      </li>
    </ul>
  </nav>
`

const products = document.createElement("main")
products.innerHTML = `
  <h2>Products</h2>
  <ul>
    <li>Briefcase</li>
    <li>Backpacks</li>
    <li>Satchels</li>
  </ul>
`

const about = document.createElement("main")
about.innerHTML = `
  <h2>About Us</h2>
  <p>We've been making great products since the year we were founded.</p>
`

const footer = document.createElement("footer")
footer.innerHTML = `
  <small>© 2020, by Us</small>
`

header.querySelector("#products").addEventListener("click", event => {
  event.preventDefault()
  app.innerHTML = ""
  app.append(header, products, footer)
})
header.querySelector("#about").addEventListener("click", event => {
  event.preventDefault()
  app.innerHTML = ""
  app.append(header, about, footer)
})

app.append(header, products, footer)
```

[Play with this code](https://codesandbox.io/s/hardcore-lalande-hwewm)

Notice how the view loads instantly, without the slight lag that normally occurs with HTTP requests. Whenever a navigation link is clicked:

1. Navigation is prevented
2. The existing content is removed from the `#app` element
3. New DOM nodes are added to replace them

This is the essence of what SPA routing tools do, while also supporting improved syntax and support for features like path matching, dynamic segments, and nested routes.

## Additional Resources

| Resource | Description |
| --- | --- |
| [dev.to: Routing in SPAs](https://dev.to/marcomonsanto/routing-in-spas-173i) | Blog post on SPA routing |
