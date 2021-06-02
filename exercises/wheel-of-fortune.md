# Wheel of Fortune

Three candidates take part in a TV show. In order to decide who will take part in the final game and probably become rich, they have to roll the Wheel of Fortune!

The Wheel of Fortune is divided into 20 sections, each with a number from 5 to 100 (only mulitples of 5). Each candidate can roll the wheel once or twice and sum up the score of each roll. The winner one that is closest to 100 (while still being lower or equal to 100). In case of a tie, the candidate that rolled the wheel first wins.

You receive the information about each candidate as an array of objects: each object should have a name and a scores array with the candidate roll values.

Your solution should return the name of the winner or `false` if there is no winner (all scored more than 100).

Example:

```js
const contestants = [{
  name: "Bob",
  scores: [10, 65]
},{
  name: "Bill",
  scores: [90, 5]
},{
  name: "Charlie",
  scores: [40, 55]
}]
getWinner(contestants); // "Bill"
```

Potential errors derived from the specifications are:

* Inputs may be invalid: in this case, the function should return false.
* More or less than three candidates take part in the game.
* A candidate did not roll the wheel or rolled it more than twice.
* Scores are not valid.
* Invalid user entry (no name or no score).

#### Tests

```js
describe("Wheel of fortune", () => {
  it("should return Bill", () => {
    const contestants = [{
      name: "Bob",
      scores: [10, 65]
    },{
      name: "Bill",
      scores: [90, 5]
    },{
      name: "Charlie",
      scores: [40, 55]
    }]

    expect(getWinner(contestants)).to.equal("Bill");
  });
});
```

#### Solutions

##### Procedural

```js
function getWinner(contestants) {
  if (contestants.length !== 3) {
    return false
  }
  
  let winner = false
  let winnerScore = 0
  
  for (let i = 0; i < 3; i++) {
    let contestant = contestants[i]
    let scores = contestants.scores
    
    if (!candidate.name || !Array.isArray(scores)) {
      return false
    }
    
    if (scores.length === 0 || scores.length > 2) {
      return false
    }
    
    let a = scores[0]
    let b = scores[1] || 0
    
    if (a % 5 || b % 5 || a > 100 || b > 100) {
      return false
    }
    
    let score = a + b
    if (score <= 100 && score > winnerScore) {
      winnerScore = score
      winner = contestant.name
      
      if (score === 100) break
    }
  }
  
  return winner
}
```

##### Functional

```js
function getWinner(contestants) {
  return isValidInput(contestants)
    && contestants
      .map(addScore)
      .filter(isScoreLessThan100)
      .reduce(highestOrFirst)
      .name
}

function isValidInput(constestants){
  return contestants
    && Array.isArray(contestants)
    && contestants.length === 3
    && contestants.every(isValidContestant)
}

function isValidContestant(contestant){
  return contestant.scores
    && contestant.scores.length === 2
    && contestant.scores.every(isValidScore)
}

function isValidScore(score){
  return Number.isInteger(score)
    && score % 5 === 0
    && score > 0
    && score <= 100
}

function highestOrFirst(winner, contestant){
  return contestant.score > winner.score
    ? contestant
    : winner
}

function isScoreLessThan100(contestant){
  return contestant.score < 100
}

function addScore(contestant){
  return {
    ...contestant,
    score: contestant.scores.reduce(sum)
  }
}

function sum(sum, number){
  return sum + number
}
```
