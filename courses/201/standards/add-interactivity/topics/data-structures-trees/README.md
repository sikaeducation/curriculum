# Data Structures: Trees

One of the more common and useful data structures to learn is trees.

## Anatomy of a Tree

![Diagram of a tree](assets/trees.png)

* **Node**: An item in the tree
  * **Root Node**: A node with no parents
  * **Leaf Node**: A node with no children
  * **Parent Node**: A node with children
  * **Child Node**: A node with parents
  * **Ancestor Node**: A node that can be accessed through parents
  * **Descendant Node**: A node that can be accessed through children
  * **Sibling Node**: A node with the same parent
* **Branch**: Path connecting two nodes
* **Depth**: How many levels of children the tree has
* **Breadth**: How many leaves the tree has

## Basic Concepts

### Nodes

Nodes in a tree can store any data. This includes simple things like numbers or strings, as well as more complex types like objects and array. A practical example of a node in a tree is a DOM element. Things that may be stored in a DOM element include:

* The tag that was used
* Any text content inside the tag
* Any tag attributes

Each tag also has a reference to its parent and a reference to each of its children. This is useful for searching for something inside of a tree or passing messages back up to parents in a tree.

### Grafting

![Grafting one tree onto another](assets/grafting.png)

Any part of the tree is also technically a tree itself. This is why we can make several connected DOM nodes at the same time and then append them all at once ("grafting").

```js
const div = document.createElement("div")
div.innerHTML = `
  <h2>Heading</h2>
  <p>Paragraph</p>
`
const body = document.querySelector("body")
body.append(div) // Grafting the tree in `div` to the tree in `body`
```

![Adding one DOM tree to another](assets/append-tree.png)

### Pruning

![Pruning one tree from another](assets/pruning.png)

```js
const section = document.querySelector("section")
section.remove()
```

![Removing one DOM tree from another](assets/remove-tree.png)

## Examples

* Site index
* Computer directory structure
* Evolutionary tree
* Family tree
* Management hierarchy
* Dewey decimal system
* Online shopping categories
* Phrase structure trees in linguistics
* Playoff brackets
