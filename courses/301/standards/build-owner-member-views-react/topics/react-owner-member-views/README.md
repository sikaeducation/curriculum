# React: Owner/Member Views

If you have a list items, any of which can be selected to show more detail, how would you implement it? Where would the state of which item is selected be held? How would that state be changed?

The owner/member pattern in React app involves:

* Keeping track of the currently selected item in state
* Passing that object into a detail component
* Changing the currently selected item when a different item is clicked

```react
const ItemList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(items[0])
  const select = id => {
    const item = items.find(item => item.id === id)
    return setSelectedItem(item)
  }

  const $items = items.map(item => {
    const isSelected = item.id === selectedItem.id
    return <ItemSummary
      key={item.id}
      select={select}
      id={item.id}
      title={item.title}
      isSelected={isSelected}
    />
  })

  return (
    <div className="ItemList">
      <ul>{$items}</ul>
      <ItemDetail title={selectedItem.title} details={selectedItem.details} />
    </div>
  )
}
```

The `<ItemList />` component:

1. Declares `selectedItem` as a stateful variable, defaulting it to the first item in the array
2. Declares a function called `select` that accepts an ID and then looks up an item with that ID to set the `selectedItem` to
3. Maps over the `items` prop to create elements. It checks each item's ID to determine whether it's the selected element
4. Displays both the `<ItemDetail />` and the collection of `<ItemSummary />` components

```react
const ItemSummary = ({ id, title, isSelected, select }) => {
  const handleClick = () => select(id)
  return (
    <li
      onClick={ handleClick }
      className={`ItemSummary ${isSelected ? "active" : "inactive"}`}
    >{ title }</li>
  )
}
```

The `<ItemSummary />` component:

* Takes in an id, title, whether or not the element is selected, and a function to change the selected item as props
* Calls a function to change the selected item with the id of them when it's clicked
* Always has a class of `ListItem`, and has a class of `active` if `isActive` is true and `inactive` otherwise. Watch the braces on this carefully; it's a JSX expression with a template string inside of it

```react
const ItemDetail = ({ title, details }) => {
  return (
    <div className="ItemDetail">
      <h2>{ title }</h2>
      <p>{ details }</p>
    </div>
  )
}
```

The `<ItemDetail />` component is a dumb component that takes in a title and details and displays them.

[Play with this code](https://codesandbox.io/s/brave-wind-boc7m?file=/src/ItemList.js)_
