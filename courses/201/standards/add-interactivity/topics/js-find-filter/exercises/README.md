# JavaScript: `.find` and `.filter`: Exercises

## Questions

* Describe filtering in your own words
* Describe finding in your own words
* Indicate whether this means that something should be a filter or a find based on the provided data:
  * It returns an array with the same number of values it started with
  * It returns an array with a different number of values than it started with
  * It returns something other than an array
  * It starts and ends with an array
  * It returns `null`

## Activities

Filter:

* `[1, 3, 5, 7, 9]` => `[5, 7, 9]`
* `[1, 2, 3, 4, 5]` => `[2, 4]`
* `["cat", "bird", "snake", "piggy", "walrus", "capybara"]`=> ["piggy", "walrus", "capybara"]
* `[{ name: "Alice", paid: true }, { name: "Bill", paid: false }, { name: "Carol", paid: true }]` => `[{ name: "Alice", paid: true }, { name: "Carol", paid: true }]`
* `[{ name: "Alice", age: 8 }, { name: "Bill", age: 20 }, { name: "Carol", age: 18 }]` => `[{ name: "Bill", age: 20 }, { name: "Carol", age: 18 }]`

Find:

* `["cat", "bird", "snake", "piggy", "walrus", "capybara"]`=> "walrus"
* `[{ name: "Alice", age: 8 }, { name: "Bill", age: 20 }, { name: "Carol", age: 18 }]` => `{ name: "Bill", age: 20 }`
