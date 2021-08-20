# React Router: Dynamic Segments

Some views apply to an arbitrary number of paths. For examples, a `ProductView` component may have a route for every product in the company's catalog. Dynamic segments allow you to use things like product ids as variables in a path. That gives each product a unique URL, while also exposing the variable to the code so that specific product can be looked up.

## The `useParams` Hook

The core idea in dynamic segments is that you can define a part of a path that will be treated as a variable. For example, the path `/users/3242` might have the route `<Route path="users/:userId">`. The part of the path after the colon will be available in the component the route renders with the `useParams` hook as the variable `userId`.

```jsx
const Users = () => {
  return (
    <Switch>
      <Route path="/users/:userId">
        <UserProfile />
      </Route>
      <Route path="/users">
        <UserList />
      </Route>
    </Switch>
  )
}
```

```jsx
const UserProfile => {
  const { userId } = useParams()

  // Fetch user with `userId`, etc.
}
```

## Routing with Dynamic Segments

This example routes to different product categories. Each one uses the same `<ProductView />` component, but uses the `useParams` hook to get the data specific to that product category when it's rendered.

```jsx
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
          <ProductIndexView />
        </Route>
      </Switch>
    </Router>
  )
}
```

```jsx
const ProductView = () => {
  const { productCategory } = useParams()
  const [ productCategory, setProductCategory ] = useState({})
  const [ error, setError ] = useState(false)

  useEffect(() => {
    fetch(`products/${productCategory}`)
      .then(response => response.json())
      .then(productCategory => {
        setProductCategory(productCategory)
      }).catch(error => {
        console.error(error.message)
        setError(true)
      })
  }, [ productCategory ])

  return (
    <div className="ProductCategory">
      {
        productCategory.title
          ? <>
            <h2>{ productCategory.title }</h2>
            <p>{ productCategory.details }</p>
          </>
          : <span className="loading-indicator">Loading...</span>
      }
      {
        error && <p className="error">There was an error loading this product category</p>
      }
    </div>
  )
}
```

The part of the URL following the `:` will be available as a variable with that name from the `useParams` hook. So if you request `/hammers`, `productCategory` will be equal to `hammers`. This is especially useful for passing IDs:

```jsx
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
```

```jsx
const Item = () => {
  const { itemId } = useParams()
  // Fetch the item with this `itemId`
}
```

## Additional Resources

| Resource | Description |
| --- | --- |
| [React Router: `useParams`](https://reactrouter.com/web/api/Hooks/useparams) | Official React Router docs for the `useParams` hook |
| [React Router: URL Params Example](https://reactrouter.com/web/example/url-params) | Official example of using dynamic segments |
