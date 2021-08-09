## React Context: Changing State From a Context Consumer

What do you do if you want to update a stateful value from a component that's consuming context? You can pass the function that updates state as a value in the Context's provider:

```react
import { useState } from "react"
import UserContext from "./contexts/UserContext"
import HeaderBar from "./components/HeaderBar"

const app = () => {
  const [currentUser, setCurrentUser] = useState()
  const user = { currentUser, setCurrentUser }

  return (
    <div className="app">
      <UserContext.Provider value={user}>
        <HeaderBar />
      </UserContext.Provider>
    </div>
  )
}
```

```react
import { useContext } from "react"
import UserContext from "./contexts/UserContext"

const UserProfile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const handleLogout = setCurrentUser({})

  return (
    <div className="UserProfile">
      <img src={currentUser.imageUrl} alt={`Avatar of ${currentUser.name}`} />
      <p>{currentUser.name}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
```
