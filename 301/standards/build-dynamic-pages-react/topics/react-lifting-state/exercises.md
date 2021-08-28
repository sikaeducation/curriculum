Fix this code to make the components work:

```js
function NightLight(){
  const [isOn, setIsOn] = useState(false)

  return (
    <Switch />
  )
}

function Switch(){
  return (
    <button>Turn Switch _____</button>
  )
}
```
