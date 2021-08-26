Use conditional rendering to make the text of this button reflect its current status and update its CSS class.

```jsx
function NightLight(){
  const [ isOn, setIsOn ] = useState(false)
  return (
    <button className="light off" onClick={() => setIsOn(!isOn)}>This light is off!</button>
  )
}
```
