## Arrays and Linked Lists

### Describe arrays

* [ ] Element - Individual piece of data stored in the array
* [ ] Index - What's used to identify an element, commonly an integer starting with 0
* [ ] Push - Adding an element to the end of an array
* [ ] Pop - Removing an element from the end of an array
* [ ] Shift - Removes the first element from an array
* [ ] Unshift - Adds one or more elements to the beginning of an array

>Arrays are a data structure that stores collections of data. They consist of elements, which are the individual pieces of data. Each element is stored at an index, which is usually an incrementing integer that starts with 0. Arrays commonly implement several methods for adding and removing elements, including push (which adds an element to the end of the array), pop (which removes an element from the end of the array), shift (which adds an element to the beginning of the array), and unshift (which removes an element from the beginning of the array.

### List common uses for arrays

* [ ] Implementing data storage (eg. vectors, matrices, and tables)
* [ ] Implementing more complex data structures

>Arrays are commonly used for generic data storage, including vectors, matrices, and data tables. They are also commonly used in implementing more complex data structures, like stacks, queues, and strings.

### Describe linked lists

* [ ] Node - Individual piece of data stored in the linked list
* [ ] Sequence - A group of nodes
* [ ] Head - The first node in a linked list
* [ ] Pointer - Reference to another node, `null` if it's the end

>Linked lists are data structures for storing collections of data. They are made up of nodes, which house individual pieces of data and store pointers to other nodes, and a head, which specifies the beginning node. Sequences are chains of nodes. Nodes can be added to or removed from the beginning, end, and before/after any node.

### List common uses for linked lists

* [ ] Implementing more complex data structures
* [ ] Making an array more dynamic
* [ ] Real-time apps that need constant-time insertion and deletion

> Linked lists are commonly used to implement more complex data structures, such as stacks and queues. They are also used to make arrays more dynamic- they more easily handle variable sizing, and store data of variable size. They also work better for real-time needs, because you can insert and delete nodes in constant time.

### What are the tradeoffs between arrays and linked lists?

* [ ] Unlike an array, inserting and removing doesn't reorganize the whole list
* [ ] Unlike an array, doesn't need to be contiguous in memory
* [ ] Unlike an array, random access is difficult- they are inherently sequential
* [ ] Linked lists take up more space than an array because of their pointers

>Unlike an array, inserting and removing from linked lists doesn't reorganize the whole list, which is more efficient. Linked lists also don't need to be contiguous in memory. Unfortunately, randomly accessing nodes in linked lists is more difficult than it is in arrays, which are indexed. Also, linked lists take up more space because they have store pointers to nodes in addition to just the data.

### How do you add a node to the beginning of a singly linked list?

* [ ] Make a new node
* [ ] Set the `next` property of the new node to the current `head` of the linked list
* [ ] Set the head to the new node

>Start by creating a new node. Set the 'next' property of the new node to the current 'head' node. Then, set the head of the linked list to the new node.

### Differentiate between singly and doubly linked lists

* [ ] Singly-linked lists - Each node links to the next node, but not to the previous
* [ ] Doubly-linked lists - Each node links to the previous and next node

>In a singly linked list, each node links to the next node, but not the previous. At the end of the list, the 'next' property points to null. In a doubly linked list, each node points to the previous and next node. At the end of the list, the 'next' property points to null, and at the beginning of the list, the 'previous' property points to null.

### How do you prepend one node before another supplied node in a doubly linked list?

* [ ] Create a new node
* [ ] Set the `next` property of the new node to point to supplied node
* [ ] Set the `previous` property of the new node to the `previous` property of the supplied node
* [ ] Go to the previous node of the supplied node and set its `next` property to the new node
* [ ] Set the previous property of the supplied node to the new node

>Start by creating a new node. Set the 'next' property of the new node to point to the supplied node. Then, set the 'previous' property of the new node to point to the 'previous' property of the supplied node. Then, go to the previous node of the supplied node and set its 'next' property to point to the new node. Finally, set the previous property of the supplied node to point to the new node.

### How do you remove a supplied node from the middle of a doubly linked list?

* [ ] Set the `next` property of the previous node to the next node
* [ ] Set the `previous` property of the next node to the previous node
* [ ] Delete the supplied node

>First, set the 'next' property of the previous node to the next node. Then, set the previous property of the next node to the previous node. Finally, delete the supplied node.

## Stacks and Queues

### Describe stacks

* [ ] Linear data structure
* [ ] LIFO - last in first out  
* [ ] Push - Adding an element to the top
* [ ] Pop - Removing an element from the top

>Stacks are a linear "last in first out" data structure. This means the most recently added element is always the first element to leave the stack. Principal operations involve push to add elements and pop to remove. The basic concept can be illustrated by thinking of your data set as a stack of plates or books where you can only take the top element off the stack in order to remove things from it.

### Describe queues

* [ ] Linear data structure
* [ ] FIFO - first in first out  
* [ ] Enqueue - Adding an element to the beginning
* [ ] Dequeue - Removing an element from the end

>Queues are a linear "first in first out" data structure. This means that the first element to get in the queue will always be the first element to come out of the queue. Principal operations involve enqueue to add elements and dequeue to remove elements. The basic concept can be illustrated by thinking of a line at a grocery store where the person to reach the register first, gets helped first.

### List at least 2 common uses for queues

* [ ] Multitasking operations - HTTP requests or OS tasks
* [ ] Buffering
* [ ] Real-time operations

>Queues are lists commonly used to maintain first-in-first-out order like HTTP requests to a web service or tasks on an operating system so the CPU can run one job at a time.

### List at least 3 common uses for stacks

* [ ] Backtracking operations - undo/redo
* [ ] Language processing  
* [ ] Storing browser history


>Stacks are lists commonly used for storing undo\redo operations and processing languages. Internally, compilers evaluate expressions and syntax parsing implementing a stack.

### Describe the general process of sorting a stack

* [ ] Popping all elements from the stack
* [ ] Pushing elements back into the stack in the right order

>In order to sort a stack, all items most be popped off. Each item would be stored on a temporary list, then pushed back into the stack in a sorted order.
