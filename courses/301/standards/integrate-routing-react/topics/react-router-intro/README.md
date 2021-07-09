# Intro to React Router

Install with `npm i react-router-dom`

React Router has 4 basic components:

* `<Router>` - Must surround the part of the app that's using the router. Can use hashes (`HashRouter`) or regular urls (`BrowserRouter`)
* `<Switch>` - Wraps the route definitions. When navigating to a `<Link>`, the `<Switch>` will render the first route that matches the definition. You can define sub-routers by nesting another `<Switch>`. Put general routes before specific ones. If nothing matches, it will render `null`.
* `<Route>` - Defines each route
* `<Link>` - Links to a route. A "route changer".

Hooks:

* `useRouteMatch()` - Returns an object with information about the specific route that was requested
* `useParams()` - Returns an object with the parameters that were requested

## Watch Out!

* Note: Although React Router does support rendering <Route> elements outside of a <Switch>, as of version 5.1 we recommend you use the useRouteMatch hook instead. Additionally, we do not recommend you render a <Route> without a path and instead suggest you use a hook to get access to whatever variables you need.
