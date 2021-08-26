Refactor this code to use Context instead of props:

```js
function Outer(){
  const message = "Hello, world!"
  return (
    <Middle message={ message } />
  )
}

function Middle({ message }){
  return (
    <Inner message={ message } />
  )
}

function Inner({ message }){
  return (
    <p>{ message }</p>
  )
}
```
