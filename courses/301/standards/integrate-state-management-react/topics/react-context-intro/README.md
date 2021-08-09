# Intro to React Context

These don't make sense to think of as part of the component hierarchy and they could reasonably be used just about anywhere. These are application state. For these, use React Context.

## Context Overview

React's Context API is a tool for tunneling state from one part of an app to another. For example, you can keep track of a logged-in user in the `App` component, and then use a Context Provider and the `UseContext` hook to read it.

```react
import { createContext } from "react"
export default const UserContext = createContext()
```

```react
import { useState } from "react"
import UserContext from "./contexts/UserContext"
import HeaderBar from "./components/HeaderBar"

const app = () => {
  const [currentUser, setCurrentUser] = useState()

  return (
    <div className="app">
      <UserContext.Provider value={currentUser}>
        <HeaderBar />
      </UserContext.Provider>
    </div>
  )
}
```

```react
import UserContext from "./contexts/UserContext"
import NavBar from "./components/NavBar"
import UserProfile from "./components/UserProfile"

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

```react
import { useContext } from "react"
import UserContext from "./contexts/UserContext"

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

1. A new `UserContext` object is created
2. The `<App />` component creates a stateful variable to track the logged in user
3. The `<App />` component uses the `UserContext`'s `.Provider` component to make the `currentUser` available to all child components
4. The `<UserProfile />` component passes the `UserContext` object into the `useContext` hook, which gives it the `currentUser` object the `UserContext.provider` made available. It was not passed down as a prop, and it bypassed the `<HeaderBar />` component entirely.

---

Some key concepts with React Context:

* React Context is not itself a tool for state management; React already has `useState` for that. Rather, Context is a tool for making that state easily available throughout the app.
* The Context provider's `value` property determines what will be available to child components. It can contain anything from a static value to a complex object.
* An app can have an arbitrary number of Context objects and Context providers.
* The Context object itself can be thought of as a reference that connects a `useContext` hook to a specific Context provider.
