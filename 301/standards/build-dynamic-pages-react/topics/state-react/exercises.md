Make this component interactive:

```js
function MultipleChoice(){
  const correctAnswer = "B"
  const answer = ""
  const isAnswered = false

  return (
    <div>
      <p>Question text goes here</p>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
      </ul>
      {
        isAnswered && (
          <p>
            {
              correctAnswer === answer
                ? "Correct!"
                : "Incorrect."
            }
          </p>
        )
      }
    </div>
  )
}
```
