# Intro to React Context

React's Context API is a tool for tunneling state from one part of an app to another. For example, you can track a logged-in user in the `App` component, and then use a Context Provider and the `useContext` hook to send it to other components. For example, in an app that has a header bar with a user profile in it, you can store the data in the `<App />` component and tunnel it to the `<UserProfile />` component without needing to go through the `<HeaderBar />` component.

```jsx
import { createContext } from "react"

const UserContext = createContext()

export default UserContext
```

```jsx
import UserContext from "../contexts/UserContext"

const App = () => {
  const [currentUser, setCurrentUser] = useState({
    name: "Miles Davis",
    imageUrl: Avatar,
  })

  return (
    <div className="App">
      <UserContext.Provider value={currentUser}>
        <HeaderBar />
      </UserContext.Provider>
    </div>
  )
}
```

```jsx
const HeaderBar = () => {
  return (
    <header className="HeaderBar">
      <h1>Star Lucky Coffee</h1>
      <NavBar />
      <UserProfile />
    </header>
  )
}
```

```jsx
import UserContext from "../contexts/UserContext"

const UserProfile = () => {
  const user = useContext(UserContext)

  return (
    <div className="UserProfile">
      <img src={user.imageUrl} alt={`Avatar of ${user.name}`} />
      <p>{user.name}</p>
    </div>
  )
}
```

[Play with this code](https://codesandbox.io/s/angry-cache-wqbkf)

1. A new `UserContext` object is created.
2. The `<App />` component creates a stateful variable to track the logged in user.
3. The `<App />` component uses the `UserContext`'s `Provider` component to make the `currentUser` available to all child components.
4. The `<UserProfile />` component passes the `UserContext` object into the `useContext` hook, which gives it the `currentUser` object the `UserContext.provider` made available. It was not passed down as a prop and it bypassed the `<HeaderBar />` component entirely.

The current user is tracked in `<App />` and the `UserContext` helps tunnel it to the `<UserProfile />` component.

---

Some key concepts with React Context:

* React Context is not itself a tool for state management; React already has `useState` for that. Rather, Context is a tool for making that state easily available throughout the app.
* The Context provider's `value` property determines what will be available to child components. It can contain anything from a static value to a complex object.
* An app can have an arbitrary number of Context objects and Context providers.
* The Context object itself can be thought of as a reference that connects a `useContext` hook to a specific Context provider.

## Additional Resources

| Resource | Description |
| --- | --- |
| [React: Context](https://reactwithhooks.netlify.app/docs/context.html) | React's complete guide to Context |
| [Video: React State Management Tutorial](https://www.youtube.com/watch?v=35lXWvCuM8o) | Dev Ed's tutorial on the context API |
