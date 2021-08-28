Refactor this code to use Context instead of props:

```js
function Outer(){
  const [user, setUser] = useState("Bill")
  const logout = () => setUser("null")

  return (
    <Middle logout={ logout } />
  )
}

function Middle({ logout }){
  return (
    <Inner logout={ logout } />
  )
}

function Inner({ logout }){
  return (
    <button onClick={ logout }>Logout</button>
  )
}
```
