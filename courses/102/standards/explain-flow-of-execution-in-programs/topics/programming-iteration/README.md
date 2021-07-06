# Programming: Iteration

Another critical thing that a programming language has to be able to do is do an operation repeatedly. There are a lot of ways to do this in most programming langauges. For now, focus on a fairly common one.

## `for..in` Loops

You can do something for every item in an array with a `for..in` loop:

```js
const numbers = [1, 2, 3, 4, 5]
for (number in numbers){
  console.log(number)
}
// Prints 1, 2, 3, 4, then 5
```

In a `for..in` loop, you pick a variable name to represent each item in the array, which will then be available to you inside the block. You can name it anything you want, but it's typical for an array to be plural and the item to be singular.

## Watch Out!

* Make sure you get the order right- the first thing in the parentheses is the variable you want to represent each item, the second thing is the array you want to loop over.
* If you declare a variable inside of the block of a `for..in` loop, that variable will be reset for every item and won't be available outside the block. If there's a counter or something that needs to change for every item, it needs to be declared outside the block. For example:

```js
let sum = 0
const numbers = [1, 2, 3, 4, 5]
for (number in numbers){
  sum = sum + number
}
console.log(sum) // 15
```
