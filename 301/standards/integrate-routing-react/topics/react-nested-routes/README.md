# React Router: Nested Routing

Some routes have sub-routes, such as displaying a specific comments for a specific post: `/posts/23423/comments`. React Router nests routes by putting additional `<Switch>`s in views that have been routed to.

## Path Conventions

Most paths in SPAs are based around resources and IDs. Resources are usually models, and IDs are anything that can uniquely identify a single item within those. When designing nested paths, observe the following conventions:

* Resource names are plural. That means that the URL for a product with the ID of 3 should be `example.com/products/3`, not `example.com/product/3`.
* Individual items should be linked to by a unique identifier in the URL, usually a database-generated ID. That means that the url for a T-shirt should something like `example.com/shirts/23421` rather than `example.com/shirts/blue-tee`. You can use descriptive words in the path, but you need to take care to ensure that they're unique or you won't be able to display the correct item. Things that are naturally unique such as departments in an organization are a good fit for this.
* A resource without an ID is called an index, and is often used to display a list of resources. For example, `example.com/albums` might display a list of albums, while `example.com/albums/34` might display details about a particular album.
* The suffixes `create`, `edit`, and `delete` are standard for displaying forms that offer options about each related action, but can customized or branded as necessary. For example, a URL to edit a participant might look like `example.com/participants/34/edit` or `example.com/participants/34/update`.

## The `useRouteMatch` Hook

The `useRouteMatch` hook evaluates to an object containing information about the current path. This is used to dynamically fill out the `to` attribute of links and the `path` attribute of nested routes:

```jsx
const match = useRouteMatch()

// ...

<Link to={`${match.url}/${someDynamicValue}`}>Arts and Culture Management</Link>

// ...

<Route path={`${match.url}/:someDynamicValue`}>
  <SomeMatchingComponent />
</Route>
```

`match` contains the current path in its `url` property and all dynamic segments in its `params` property.

## Nesting Routes

In React Router, a nested route is a component that has its own router. For example:

```jsx
const App = () => {
  return (
    <div className="App">
      <Router>
        <header>
          <h1><Link to="/">The University of Denver</Link></h1>
          <nav>
            <ul>
              <li>
                <Link to="/career">University College</Link>
              </li>
              <li>
                <Link to="/law">Sturm College of Law</Link>
              </li>
              <li>
                <Link to="/business">Daniels College of Business</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/law">
              <LawSchoolView />
            </Route>
            <Route path="/business">
              <BusinessSchoolView />
            </Route>
            <Route path="/career">
              <CareerSchoolView />
            </Route>
            <Route exact path="/">
              <UniversityHomeView />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
}
```

```jsx
const CareerSchoolView = () => {
  const { url, path } = useRouteMatch()
  const departments = [{
    id: "ict",
    label: "Information and Communications Technology",
  },{
    id: "acm",
    label: "Arts and Culture Management",
  },{
    id: "cm",
    label: "Communication Management",
  }]
  const $departments = departments.map(department => (
    <li key={department.id}>
      <Link to={`${url}/${department.id}`}>{department.label}</Link>
    </li>
  ))

  return (
    <div className="CareerSchoolView">
      <h2>Welcome to the University of Denver's University College</h2>
      <nav>
        <ul>{$departments}</ul>
      </nav>
      <Switch>
        <Route path={`${path}/:departmentName`}>
          <DepartmentView />
        </Route>
        <Route exact path={path}>
          <DepartmentIndexView />
        </Route>
      </Switch>
    </div>
  )
}
```

```jsx
const DepartmentView = () => {
  const { departmentName } = useParams()
  const [greeting, setGreeting] = useState("Loading...")

  useEffect(() => {
    fetch("/university-college.json")
      .then(response => response.json())
      .then(({ departments }) => {
        const department = departments[departmentName]
        setGreeting(department.greeting)
      })
  }, [departmentName])

  return (
    <p>{ greeting }</p>
  )
}
```

[Play with this code](https://codesandbox.io/s/bold-butterfly-bifmk)

In this example:

1. The `<App />` component wraps the entire application in a `<Router>`, has `<Link>`s that sets new paths, and a `<Switch>` that determines which school component to display based on the path.
2. The `<CareerSchoolView />` gets the `url` and the `path` from the `useRouteMatch` hook. These will both be `/career` in this case.
3. The `<CareerSchoolView />` makes nested links to each department using the `url`.
4. Another `<Switch>` matches paths that contain career school's department ID. These are what the `<Link>` tags in this component will link to. It also has a default view that will display when the route first loads.
5. The `<DepartmentView />` gets the department ID from the `useParams` hook. It uses this to look up and display that department's unique greeting from a local JSON file with `fetch`.

## Watch Out!

`match.url` is used in `<Link>`s, `match.path` is used in `<Route>`s. A linking URL should contain the entire path, while a route only needs the new parts of the path since the last `<Route>` component.

## Additional Resources

| Resource | Description |
| --- | --- |
| [React Router: `useRouteMatch`](https://reactrouter.com/web/api/Hooks/useroutematch) | React Router's official docs for the `useRouteMatch` hook |
| [React Router: Nested Routes example](https://reactrouter.com/web/example/nesting) | React Router's official nested routes example |
