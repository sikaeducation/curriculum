# Explain the Flow of Execution in Programs

## Topics

* [Intro to Programming](topics/programming-intro)
  * [Exercises](topics/programming-intro/exercises)
* [Programming: Input and Output](topics/programming-input-output)
  * [Exercises](topics/programming-input-output/exercises)
* [Programming: Simple Data Types](topics/programming-data-types)
  * [Exercises](topics/programming-data-types/exercises)
* [Programming: Expressions](topics/programming-expressions)
  * [Exercises](topics/programming-expressions/exercises)
* [Programming: Math](topics/programming-math)
  * [Exercises](topics/programming-math/exercises)
* [Programming: Variables](topics/programming-variables)
  * [Exercises](topics/programming-variables/exercises)
* [Programming: Boolean Logic Operators](topics/programming-boolean-logic)
  * [Exercises](topics/programming-boolean-logic/exercises)
* [Programming: Boolean Logic Comparisons](topics/programming-boolean-logic-2)
  * [Exercises](topics/programming-boolean-logic-2/exercises)
* [Programming: Conditional Logic](topics/programming-conditional-logic)
  * [Exercises](topics/programming-conditional-logic/exercises)
* [Programming: Functions](topics/programming-functions)
  * [Exercises](topics/programming-functions/exercises)
* [Programming: Variable Scoping](topics/programming-variable-scoping)
  * [Exercises](topics/programming-variable-scoping/exercises)
* [Programming: Complex Data Types](topics/programming-data-types-2)
  * [Exercises](topics/programming-data-types-2/exercises)
* [Programming: Iteration](topics/programming-iteration)
  * [Exercises](topics/programming-iteration/exercises)

## Assessments

* [CLI Quiz](assessments/cli-quiz)

---

```js
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
function (number){
  let table = ""

  const count = Array(10).fill(true)

  for (iteration in count) {
    let spacer = ""
    if (iteration < 10){
      spacer = "\n"
    }
    table = table + `${iteration} * ${number} = ${iteration * number}${spacer}`
  }

  return table
}
```

```js
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

function (floor){
  if (floor <= 0){
    return floor
  }

  let offset = 1
  if (floor >= 13){
    offset = 2
  }

  return floor - offset
}
```

```js
// take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.

function (animal){
  const normalizedName = animal.toLowerCase()

  if (normalizedName === "alligator"){
    return "small"
  } else {
    return "wide"
  }
}
```

```js
// Convert number to reversed array of digits

function (number){
  let numberArray = `${number}`.split("")
  let reversedNumberArray = numberArray.reverse()

  let newArray = []
  for (number in reversedNumberArray){
    newArray.push(+number)
  }

  return newArray
}
```


```js
// Replace dots with dashes
function (string){
  let answer = ""
  for (character in string) {
    let newCharacter = "-"

    if (character !== "."){
      newCharacter = character
    }

    answer += newCharacter
  }

  return answer
}
```

```js
// squares each number passed into it and then sums the results together
function (numbers){
  let sum = 0
  for (number in numbers){
    sum = sum + number**2
  }

  return sum
}
```

```js
// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

function (a, b, margin){
  if (!margin){
    margin = 0
  }

  if (a < b - margin){
    return -1
  } else if (a - margin > b){
    return 1
  } else {
    return 0
  }
}
```

```js
// Return the average of the given array rounded down to its nearest integer.

function (numbers){
  let sum = 0

  for (let number in numbers){
    sum += number
  }

  return +(sum / numbers.length)
}
```

```js
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

function (month){
  if (month <= 3){
    return 1
  } else if (month <= 6){
    return 2
  } else if (month <= 9){
    return 3
  } else if (month <= 12){
    return 4
  }
}
```

```js
// Reverses all of the words within the string passed in.
function (string){
  let reverse = []
  let words = string.split(" ")
  words = words.reverse()

  for (word in words){
    reverse.push(word.reverse())
  }
  return reverse.join(" ")
}
```

```js
// Return their respective ages now as [humanYears,catYears,dogYears]
// 15 cat years for first year, +9 cat years for second year, +4 cat years for each year after that
// 15 dog years for first year, +9 dog years for second year, +5 dog years for each year after that

function (actualAge){
  if (actualAge == 1){
    return [1, 15, 15]
  }
  if (actualAge == 2){
    return [2, 24, 24]
  }
  return [
    actualAge,
    (actualAge - 2) * 4 + 24,
    (actualAge - 2) * 5 + 24,
  ]
}
```

```js
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

function (currentColor){
  if (currentColor === "green"){
    nextColor = "yellow"
  } else if (currentColor === "yellow"){
    nextColor = 'red'
  } else if (currentColor === "red"){
    nextColor = 'green'
  }

  return nextColor
}
```

```js
function (firstName, lastName, age){
  const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  }

  return person
}
```

```js
function (user){
  if (user.isActive){
    return `Welcome back, ${user.username}!`
  } else {
    return `Hey ${user.username}! Would you like to renew your subscription?`
  }
}
```

```js
function (person, petName){
  for (dog in person.dogs){
    if (dog.name === petName){
      return dog
    }
  }
}
```
