# Memory Game

| Name | Notes |
| --- | --- |
| [JS](#js) | |
| [TDD](#tdd) | Missing solution |
| [Web](#web) | Missing solution |
| [Web-TDD](#web-tdd) | Missing solution |

## Challenges

### JS

#### Prompt

In a simple [memory game](http://en.wikipedia.org/wiki/Concentration(game)) we need an array containing tiles represented by integers in pairs.

In the memory game, numbers are randomly placed face-down in a grid. Each turn, the player chooses a number to peek at, and then replace, face down. If they choose two of the same number in a row, those numbers are removed from the grid. The aim is to clear the board!

Your job is to produce an array of pairs of numbers, placed in a random spot in the array.

The array (and result) could look somthing like:

```
[3,1,2,1,3,2,4,4]
```

for an 8 tile memory game. (4 pairs). createTiles(8)

Your task is to implement the function createTiles(n) where n is the number of tiles. The function should return an array with the length n containing randomized, paired, integers starting with 1. Duplicate pairs are not allowed.

Special cases:

if n is odd or zero, an empty array should be returned

#### Solutions

```js
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

function createTiles(n){
  var numbers = [];
  var array = [];
  
  if(n === 0 || n % 2 != 0) {
    return array;
  }
  
  for(var i = 1; i <= n / 2; i++) {
    numbers.push(i);
    numbers.push(i);
  }
  
  do {
    var num = Math.floor(Math.random() * numbers.length);
    array.push(numbers[num]);
    numbers.remove(num);
  } while(numbers.length > 0);
  
  console.log(array);
  return array;
}
```

### TDD

#### Prompt

In a simple [memory game](http://en.wikipedia.org/wiki/Concentration(game)) we need an array containing tiles represented by integers in pairs.

In the memory game, numbers are randomly placed face-down in a grid. Each turn, the player chooses a number to peek at, and then replace, face down. If they choose two of the same number in a row, those numbers are removed from the grid. The aim is to clear the board!

Your job is to produce an array of pairs of numbers, placed in a random spot in the array.

The array (and result) could look somthing like:

```
[3,1,2,1,3,2,4,4]
```

for an 8 tile memory game. (4 pairs). createTiles(8)

Your task is to implement the function createTiles(n) where n is the number of tiles. The function should return an array with the length n containing randomized, paired, integers starting with 1. Duplicate pairs are not allowed. If n is odd or zero, an empty array should be returned. Test-drive your development with TDD.


### Web

#### Prompt

In a simple [memory game](http://en.wikipedia.org/wiki/Concentration(game)) we need an array containing tiles represented by integers in pairs.

In the memory game, numbers are randomly placed face-down in a grid. Each turn, the player chooses a number to peek at, and then replace, face down. If they choose two of the same number in a row, those numbers are removed from the grid. The aim is to clear the board!

Your task is to produce a web app for the memory game. It should take an integer through the query string that controls how many pairs are present (and thus how large the board is).

### Web TDD

#### Prompt

In a simple [memory game](http://en.wikipedia.org/wiki/Concentration(game)) we need an array containing tiles represented by integers in pairs.

In the memory game, numbers are randomly placed face-down in a grid. Each turn, the player chooses a number to peek at, and then replace, face down. If they choose two of the same number in a row, those numbers are removed from the grid. The aim is to clear the board!

Your task is to produce a web app for the memory game. It should take an integer through the query string that controls how many pairs are present (and thus how large the board is). Use TDD to drive your development.

