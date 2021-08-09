# React: Active States

If you have a list items, any of which can be selected to show more detail, how would you implement it? Where would the state of which item is selected be held? How would that state be changed?

```js
const ItemSummary = ({ id, title, isSelected, select }) => {
  const handleClick = () => select(id)
  return (
    <li
      onClick={ handleClick }
      className={`ListItem ${isSelected ? "active" : "inactive"}`}
    >{ title }</li>
  )
}

const ItemDetail = ({ title, details }) => {
  return (
    <div className="ItemDetail">
      <h2>{ title }</h2>
      <p>{ details }</p>
    </div>
  )
}

const ItemList = (items) => {
  const [selectedItem, setSelectedItem] = useState(items[0])
  const select = id => {
    const item = items.find(item => item.id === id)
    return setSelectedItem(item)
  }

  const $items = items.map(item => {
    const isSelected = item.id === selectedItem.id
    return <ListItem
      select={select}
      id={item.id}
      title={item.title}
      isSelected={isSelected}
    />
  })

  return (
    <div className="ItemList">
      <ItemSummary item={selectedItem} />
      <ul>{$items}</ul>
    </div>
  )
}
```

* The `<ItemSummary />` component takes in an id, title, whether or not the element is selected, and a function to change the selected item.
* The `<ItemSummary />` component calls the function to change the selected item with the id of them when it's clicked
* The `<ItemSummary />` component always has a class of `ListItem`, and has a class of `active` if `isActive` is true and `inactive` otherwise. Watch the braces on this carefully; it's a JSX expression with a template string inside of it
* The `<ItemDetail />` component is a dumb component that takes in a title and details and displays them.
* The `<ItemList />` component declares `selectedItem` as a stateful variable, defaulting it to the first item in the array.
* The `<ItemList />` component declares a function called `select` that accepts an ID and then looks up an item with that ID to set in state.
* The `<ItemList> /` component maps over the items to create elements. It checks each item's ID to determine whether it's selected.
* The `<ItemList />` component displays both the `<ItemSummary />` and the collection of `<ItemDetail />` components.
