# Single-Page Application Routing

In a traditional website, using a navigation link sends an HTTP request to a server, which sends back a new HTML file. The defining feature of single-page apps or SPAs is that there's only one HTML page. How can you have an application with one HTML page and multiple views?

A web page is made up of DOM elements, each of which are rendered to the screen. JavaScript can add, remove, or modify those DOM nodes. A view in an SPA is a collection of DOM nodes and when you "navigate", old DOM nodes are removed and new ones are added by the library or framework you're using. For example:

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

const products = document.createElement("main")
const products.innerHTML = `
  <main class="about">
    <h2>About Us</h2>
    <p>We've been making great products since the year we were founded.</p>
  </main>
`

const footer = document.createElement("footer")
footer.innerHTML = `
  <small>© 2020, by Us</small>
`

header.querySelector("#products").addEventListener("click", event => {
  event.preventDefault()
  app.innnerHTML = ""
  app.append(header, products, footer)
})
header.querySelector("#about").addEventListener("click", event => {
  event.preventDefault()
  app.innnerHTML = ""
  app.append(header, about, footer)
})
```

Whenever a navigation link is clicked, the navigation is prevented, the existing content is removed from the `#app` element, and new DOM nodes are added to replace them. This is the essence of what SPA routing tools do. Most of them also support improved syntax, and support for features like URL matching, dynamic segments, and nested routing.
