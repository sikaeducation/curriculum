## React Context: Changing State From a Context Consumer

What if you want to update a stateful value from a component that's consuming context? You can pass the function that updates state as a value in the Context's provider:

```jsx
const App = () => {
  const [currentUser, setCurrentUser] = useState({
    name: "Miles Davis",
    imageUrl: Avatar,
  })
  const user = {
    currentUser,
    setCurrentUser,
  }

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <HeaderBar />
      </UserContext.Provider>
    </div>
  )
}
```

```jsx
const UserProfile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const handleLogout = () => setCurrentUser(null)
  const handleLogin = () => setCurrentUser({
    name: "Miles Davis",
    imageUrl: Avatar,
  })

  return (
    <div className="UserProfile">
      {
        currentUser
          ? (
            <>
              <img src={currentUser.imageUrl} alt={`Avatar of ${currentUser.name}`} />
              <button onClick={handleLogout}>Logout</button>
            </>
          )
          : <button onClick={handleLogin}>Login</button>
      }
    </div>
  )
}
```

[Play with this code](https://codesandbox.io/s/exciting-meadow-r4xeg)

In this example:

1. A user is initialized with some static values.
2. A `user` object is declared that stores both the `currentUser` and the `setCurrentUser` function.
3. A `<UserContext.Provider>` wraps the `<HeaderBar />` and makes the `user` object available to all child components.
4. The `<UserProfile>` component pulls the `currentUser` and `setCurrentUser` out of the `UserContext`.
5. Handlers for logging in and out are declared and attached to some conditionally rendered buttons
6. If the user is logged in, their profile picture and a logout button is rendered. Otherwise, a login button is rendered.

Both parts of the state hook are send to the context provider, and can be used with the `useContext` hook in any child component.

## Additional Resources

| Resource | Description |
| --- | --- |
| [React Context: Updating state from a nested component](https://reactwithhooks.netlify.app/docs/context.html#updating-context-from-a-nested-component) | Official guide to updating state from a nested component |
