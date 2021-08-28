# Programming Exercise

Your task is to figure out how this code works.

* Come with a test input for the function.
* Trace the flow of the program with your test input **without running the code**, keeping track of all of the variables and transformations until you can determine the output.
* Keep coming up with new inputs until you're confident until you're confident that you know how the function works.
* Write a summary of what the function does.

```js
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

| Input | Output |
| ----- | ------ |
|       |        | 
|       |        | 
|       |        | 

<table>
  <tr>
    <th>What does this program do?</th>
    <td></td>
  </tr>
</table>

## Rubric

* Contains a plausible collection of test cases
* Outputs are accurately derived from inputs
* Summary is plausible
  * Official answer is that it converts American floor numbering (no 13th floor, 1st floor is 1) to European floor numbering (13th floor, 1st floor is 0)
