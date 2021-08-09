# React Router: Nested Routing

## URL Conventions

Most URLs in SPAs are based around resources and IDs. Resources are names for types of items, and IDs are anything that can uniquely identify a single item within those. When designing nested URLs in an app, observe the following conventions:

* Resource names are plural. That means that the URL for a product with the ID of 3 should be `example.com/products/3`, not `example.com/product/3`.
* Individual items should be linked to by a unique identifier in the URL, usually a database-generated ID. That means that the url for a T-shirt should something like `example.com/shirts/23421` rather than `example.com/shirts/blue-tee`. You can use descriptive words in the URL, but you need to take care to ensure that they're unique or you won't be able to display the correct item. Things that are naturally unique such as departments in an organization are a good fit for this.
* A resource without an ID is called an index, and is often used to display a list of resources. For example, `example.com/albums` might display a list of albums, while `example.com/albums/34` might display details about a particular album.
* The suffixes `create`, `edit`, and `delete` are standard for displaying forms that offer options about each related action, but can customized or branded as necessary. For example, a URL to edit a participant might look like `example.com/participants/34/edit`.

## Nesting Routes

With React Router, a nested route is a component that has its own router. For example:

```js
const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/"><h1>University of Denver</h1></Link>
          </li>
          <li>
            <ul>
              <li>
                <Link to="/law">Sturm College of Law</Link>
              </li>
              <li>
                <Link to="/business">Daniels College of Business</Link>
              </li>
              <li>
                <Link to="/career">University College</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/">
          <UniversityHomeView />
        </Route>
        <Route path="/law">
          <LawSchoolView />
        </Route>
        <Route path="/business">
          <BusinessSchoolView />
        </Route>
        <Route path="/career">
          <CareerSchoolView />
        </Route>
      </Switch>
    </Router>
  )
}

const UniversityHomeView = () => {
  return (
    <div className="UniversityHomeView">
      <h2>Welcome to the University of Denver</h2>
    </div>
  )
}

const UniversityCollegeView = () => {
  const match = useRouteMatch()

  return (
    <div className="UniversityCollegeView">
      <h2>Welcome to the University of Denver's University College</h2>
      <nav>
        <ul>
          <li>
            <Link to={`${match.url}/acm`}>Arts and Culture Management</Link>
          </li>
          <li>
            <Link to={`${match.url}/cm`}>Communication Management</Link>
          </li>
          <li>
            <Link to={`${match.url}/ict`}>Information and Communications Technology</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={`${match.url}/:departmentName`}>
          <DepartmentView />
        </Route>
        <Route path={match.url}>
          <CollegeIndexView college="university-college" />
        </Route>
      </Switch>
    </div>
  )
}

const DepartmentView = () => {
  const { departmentName } = useParams()

  // Look up `departmentName from an API, use data to populate template
}
```
