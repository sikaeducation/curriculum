# Introduction to Data Structures

The first computer science concept programmers should explore is data structures. A data structure is a pattern for organizing, managing, and storing data in a computer. In practice, this means defining operations that a data structure can perform and data that it exposes. You've already encountered one already in JavaScript: Array:

![Diagram of an Array](assets/arrays.png)

* Stores a collection of data, usually of the same data type. Each item in the collection is called an element.
* The order that elements are stored in is important
* Randomly access any element of an array by its index
* Add an element to the end of an array with a method called `push`
* Remove an element from the end of an array with a method called `pop`
* Add an element to the beginning of an array with a method called `shift`
* Remove an element from the beginning of an array with a method called `unshift`
* See how many elements are in the array with a property called `length`

All of these facts about arrays are independent of arrays in JavaScript, because they also apply to arrays in C, Java, PHP, Ruby, Python, and any other language that uses them. They are an _abstract data type_ that gets a concrete implementation in each of those languages.

There are lots of other data structures, but few of them are used directly in JavaScript. However, the ideas behind those data structures are common and will help you understand computing concepts better and give you more tools to solve problems with.

## Watch Out!

A data structure is not the same thing as a data type. A string is a data type and it's used in data structures, but it's not a data structure itself. Data structures are made up of different data types, which are called _primitives_.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Video: What Are Data Structures?](https://www.youtube.com/watch?v=bum_19loj9A) | CS Dojo's intro to data structures |
