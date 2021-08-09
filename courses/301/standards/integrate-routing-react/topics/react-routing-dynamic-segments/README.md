# React Router: Dynamic Segments

Sometimes routes have components that are applied to an arbitrary number of URLs. For examples, a `ProductView` component may have a route for every product in the catalog. For situations like, use dynamic segments.

```react
App = () => {
  return (
    <Router>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/hammers">Hammers</Link>
          <Link to="/saws">Saws</Link>
          <Link to="/hardware">Hardware</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/:productCategory">
          <ProductView />
        </Route>
        <Route path="/">
          <ProductView />
        </Route>
      </Switch>
    </Router>
  )
}
```

The content 
