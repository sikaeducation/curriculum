# React Router: Dynamic Segments

Sometimes routes have components that are applied to an arbitrary number of URLs. For examples, a `ProductView` component may have a route for every product in the catalog. For situations like, use dynamic segments.

```react
const App = () => {
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

const ProductView = () => {
  const { productCategory } = useParams()
  // Fetch items for that product category, etc.
  return (
    <h2>{ productCategory }</h2>
  )
}
```

The part of the URL following the `:` will be available as a variable with that name from the `useParams` hook. So if you request `/hammers`, `productCategory` will be equal to `hammers`. This is especially useful for passing IDs:

```js
const App = () => {
  const items = [{
    id: 1,
    label: "Apple",
  },{
    id: 2,
    label: "Banana",
  },{
    id: 1,
    label: "Carrot",
  }]

  const $items = items.map(item => {
    return (
      <li>
        <Link to={`items/${item.id}`}>{item.name}</Link>
      </li>
    )
  })

  return (
    <Router>
      <ul>{$items}</ul>
      <Switch>
        <Route path="/items/:itemId">
          <Item />
        </Route>
      </Switch>
    </Router>
  )
}

const Item = () => {
  const { itemId } = useParams()
  // Fetch the item with this `itemId`
}
```
