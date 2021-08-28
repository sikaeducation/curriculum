# Programming: Boolean Logic 2: Comparisons

Another application of Boolean logic is making statements that compare the values of two things.

## Boolean Comparison Operators

There are four basic boolean comparison operators:

* **`===`**: Equal to
* **`!==`**: Not equal to
* **`<`/`<=`**: Less than / Less than or equal to
* **`>`/`>=`**: Greater than / Greater than or equal to

### Equal to

The equality comparison operator `===` evaluates to `true` if the things being compared are the same type of data and value, and false otherwise.

* `5 === 5` is true because they're the same type (number) and value (5)
* `5 === 3` is false because they're the same type (number), but not the same value (3 and 5)
* `"5" === 5` is false because the not the same type (string and number), even though they're the same value (5)
* `5 === "Hello, world!" is false because they're neither the same type (number and string) or value (5 and "Hello, world!")

### Not Equal To

The inequality comparison operator `!==` evaluates to `false` if the things being compared have have the same type and value, and `true` otherwise. It's the inverse of the equality operator `===`.

* `5 !== 5` is false because they're the same type and value
* `5 !== 3` is true because they're the same type, but not the same value
* `"5" !== 5` is true because the not the same type, even though they're the same value
* `5 !== "Hello, world!" is true because they're neither the same type or value.

### Greater Than / Less Than

The greater than operator `>`/`>=` and the less than operator `<`/`<=` are used to compare numbers. A number is greater than if it's higher than another number, `less than` if it's lower than another number, and `equal` if they're the same.

* `5 > 3` is true because 5 is more than 3
* `5 >= 3` is true because 5 is more than 3
* `5 >= 5` is true because 5 is equal to 5
* `5 > 5` is false because 5 isn't more than 5
* `5 < 3` is false because 5 is less than 3
* `5 <= 3` is false because 5 is less than 3
* `5 <= 5` is true because 5 is equal to 5
* `5 < 5` is false because 5 isn't less than 5

## Using Boolean Comparisons in Boolean Expressions

Since Boolean comparisons evaluate to true or false, they can be used in the same kinds of expressions that `NOT`, `AND`, and `OR` can be used in. If you take this expression:

```
(true && false) || (true || !true) = true
```

You could swap `true` and `false` for comparisons and end with the same result:

```js
(5 === 5 && 5 < 3) || ("Hello, world!" || !true) = true
```

And you could replace those comparisons with variables that evaluate to those values:

```js
const someArray = ["a", "b", "c", "d", "e"] 
const someOtherArray = ["1", "2", "3", "4", "5"]
const message = "Hello, world!"
const isActive = true
(someArray.length === 5 && someOtherArray.length < 3) || (message || !isActive) // this evaluates to true
```

## Watch Out!

It's easy to get the order wrong on the characters for greater than or equal to and less than or equal to. Remember that they follow the same order as how they're commonly said:

* `>=` is "Greater than or equal to"
* `<=` is "Less than or equal to"

## Additional Resources

| Resource | Description |
| --- | --- |
| [MDN: Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators) | MDN's guide to comparison operators in JavaScript |
| [W3Schools: JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp) | W3School's tutorial on boolean comparison |
