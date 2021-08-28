# Intro to React Router

[React Router](https://reactrouter.com/) is a popular third-party library for integrating SPA routing into React apps. You can install it in an existing React app with `npm install react-router-dom`.

React Router has 4 basic components:

* **`<Router>`**: This component must surround the part of the app that's using the router. It's common to put this around the entire app.
* **`<Switch>`**: This component wraps the route definitions. When navigating to a `<Link>`, the `<Switch>` will render the first route that matches the definition. You can define sub-routers by nesting another `<Switch>`.
* **`<Route>`**: This component defines each route within a `<Switch>`, and determines which component will display when a route matches. Has a to `path` attribute that contains the URL that should be matched.
* **`<Link>`**: This component links to a route. It has a `to` attribute that sets the URL it should go to. It turns into an `<a>` element when it's rendered.

This app routes between a home, about, and product view:

```jsx
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"
import AboutView from "./views/AboutView"
import ProductView from "./views/ProductView"

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path="/about">
            <AboutView />
          </Route>
          <Route path="/products">
            <ProductView />
          </Route>
          <Route exact path="/">
            <ProductView />
          </Route>
        </Switch>
        <AppFooter />
      </div>
    </Router>
  )
}
```

```jsx
const AppHeader = () => {
  return (
    <header className="AppHeader">
      <h1>Our Site</h1>
      <nav>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
```

[Play with this code](https://codesandbox.io/s/awesome-payne-4wkvd)

Some highlights:

1. The necessary components from `react-router-dom` are imported, `BrowserRouter` is renamed to `Router` in the process.
2. Components that are routed to are in a `views` folder, everything else is in a `components` folder.
3. The `<Router>` component wraps the entire app.
4. The `<Switch>` component will resolve to component inside the first `<Route>` `path` that matches the current URL.
5. The `<Route exact path="/">` component is a default that will render if no other URL matches. The `exact` attribute ensures that the route with only match if there's nothing after the `/`.
6. The `<Link>` component `to` attribute will change the URL.

## Watch Out!

* The `react-router-dom` package doesn't have a `Router` export, it has a `BrowserRouter` export. To name it `<Router>` in your app, import it as `import { BrowserRouter as Router } from "react-router-dom"`.
* Having more than one `<Router>` in the same hierarchy will cause problems that are difficult to diagnose. Be especially careful when renaming the import.

## Additional Resources

| Resource | Description |
| --- | --- |
| [React Router: Quick Start](https://reactrouter.com/web/guides/quick-start) | Official guide to React Router |
| [Video: React Router Tutorial](https://www.youtube.com/watch?v=Law7wfdg_ls) | Dev Ed's React Router tutorial video |
