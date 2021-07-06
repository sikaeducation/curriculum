# Programming: Functions

## Functions

Functions do two things:

* Make some set of code eat to reuse and repeat
* Transform an input into an output

For example, you can log 

## Return values

Functions often, but don't have to, return a value.

```js
function getCompanyName(){
  return "Company Name Here"
}

const companyName = getCompanyName()
console.log(companyName) // "Company Name Here"
```

The return value of a function is what calling them function will evaluate to. For example, since the `getCompanyName` function has a return value of "Company Name Here", you can use `getCompanyNameHere()` anywhere you want to use that string.

```js
console.log("Congratulations on your first day at " + getCompanyNameHere())
```

## Declaring functions

There are often several different ways to write functions in a given programming language, but the most common looks something like this:

```js
function nameOfFunctionGoesHere(parameters, go, here){
  // Body of the function goes here
  return "return value goes here"
}
```

These define functions. To make the function execute, you need to call it.

## Calling Functions

Calling (also called invoking) a function means telling it to run.

```js
// This defines the function
function sayHelloWorld(){
  console.log("Hello, world!")
}

// This calls the function 3 times
sayHelloWorld() // "Hello, world!"
sayHelloWorld() // "Hello, world!"
sayHelloWorld() // "Hello, world!"
```

You can also call a function with a value that can be used inside the function:

```js
function saySomething(message){
  console.log("Hello, " + message)
}
```

## Parameters and Arguments

The variables that are passed into a function definition are called parameters:

```js
function double(number){
  return number * 2
}
```

In this example, `number` is a parameter. You can pass more than one parameter into a function by separating them with commas:

```js
function add(number1, number2){
  return number1 + number2
}
```

In this example, `number1` and `number2` are parameters.

When you call a function, you give it arguments:

```js
double(someNumber)
add(someNumber, 5)
```

In this example, `someNumber` and 5 are both arguments. You can think of parameters as the "theoretical" for how something will be used and arguments as the "actual" for how something will be used.

## Watch Out!

* Returning a value from a function does not output anything to the screen. This program doesn't output anything:

```js
function getName(){
  return "Kevin"
}
getName()
```

To output something, you'd have to use `console.log`. You could either do that this way:

```js
function printName(){
  console.log("Kevin")
}
printName()
```

Or this way:

```js
function getName(){
  return "Kevin"
}
console.log(getName())
```

The advantage of the second way is that by separating out getting the name from printing the name, you can use the `getName` function for other things like building another string.
