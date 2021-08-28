# Big-O Notation

## Resources: 

* [Free Code Camp: Big-O Notation](https://medium.freecodecamp.com/my-first-foray-into-technology-c5b6e83fe8f1#.r12trqao5)
* [Big-O Cheatsheet](http://bigocheatsheet.com/)
* [Big-O Notation in Plain English](http://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation)
* [Wiki.C2: Big Oh](http://wiki.c2.com/?BigOh)

## Objectives

* By the end of this lesson you will be able to: 
* Describe Big-O notation and what it represents 
* Explain the names and time complexity of the following:
  * O(1)
  * O(n) 
  * O(n^2)
  * Θ(n log(n))
* Compare sort algorithm visualizations - make a table
  * Time taken?
  * Iterations?
  * Describe/draw progression pattern

## Double Plan 

| Objective | Teacher Actions | Student Actions |
| --- | --- | --- |
| Describe Big-O notation and what it represents | Introduce Objective 1. Providing framing and context. (i.e. It is important to know about Big-O because it will help you write more performant code and it is something that often comes up in job interviews). | Listen to the instructor introduce the objective and provide context. |
| | Give students a list of resources for research. Give student ~10 minutes to use the materials above (or find their own) to research and write down an answer to the prompt ‘What is Big-O notation and what does it represent?’ | Do research and write down an answer to the prompt ‘What is Big-O notation and what does it represent?’ |

## Check for Understanding

* After students have researched and written down their answer, have them turn and talk with a neighbor to share their definition
* Cold call on 2-4 students to hear their definitions. Highlight answers that are good, and make corrections when needed. 
* Give the ‘instructor approved’ answer to the question ‘What is Big-O notation and what does it represent?’  


Objective 
Teacher Actions
Student Actions
2. Explain the names and time complexity of the following:
O(1)
O(n) 
O(n^2)
Θ(n log(n))
Go through this doc one table at a time. Students should fill out any blank rows as the lesson progresses. 
Make a copy of this template and fill it out as the instructor explains each concept.

## Check for Understanding

After each notation is covered, the instructor will: 
Have students share with a neighbor what they wrote down for the name of each notation and the examples
Cold call on 1-3 student to hear what they wrote down for the name of each notation and the examples
Give the ‘instructor approved’ answer to the prompt  ‘Explain the names and time complexity of the following:
O(1)
O(n) 
O(n^2)
Θ(n log(n))


Objective 
Teacher Actions
Student Actions
3. Compare sort algorithm visualizations - make a table
Time taken?
Iterations?
Describe/draw progression pattern
Show a visualization video, https://youtu.be/ICzdtHifoao
Model/frame draw out a manually calculated number sequence using big O formulas and make a table.
Make a table comparing algorithms
Answer questions on how long 


## Check for Understanding

* Look at tablets
* Compare with neighbor/Turn and talk
* Discussion - sorting is expensive.

## Describe Big-O notation and what it represents 

Big-O notation is a way to determine how long it will take for an algorithm to run. The equation represents the worst case scenario.

The complexity of an algorithm determined by the time it takes, number of steps, and the required resources to run.

Big O notation is used to classify algorithms by how they respond to changes in input size, for example, how big is the data that the algorithms will process, how  the processing time that the algorithm will take to change as the problem becomes bigger. With big O we can determine the amount of resources will need to run that amount of data, and (more important) how long will take to run the algorithm. (memory allocation)

Explain the names and time complexity of the following:

* O(1)
  * Constant (AKA fixed) time complexity
  * Description
  * This means that the algorithm will always take the same amount of time to execute. Doesn’t traverse the (entire) array.
  * Examples
    * accessing a single value in an array or object using dot or bracket notation. .pop() and .push() 
* O(n)
  * Linear time complexity
  * Description
    * The runtime (execution) is proportional to the amount (size) of data (input). A single iteration or traversal is necessary.
  * Examples
    * Any loop that iterates over an array.
* O(n^2)
  * Quadratic time complexity
  * Description
  * The time of execution is equal to the size of the input squared. Multiple array passes must be completed.
  * Examples
    * Nested loops, bubble sort
* Θ(n log(n))
  * Logarithmic time complexity
  * Description
    * An algorithm has logarithmic time complexity if the time it takes to run the algorithm is proportional to the logarithm of the input size n. This scales very poorly - n-to-the-power-of-10 sort of slow down. 
  * Examples
    * Binary search
* O(n) 
  * O(n) is linear time complexity: this means that the time for execution is proportional to the size of the input 
  * using a for loop to iterate over an array
* O(n) - linear 
  * Proportionate to the input size of n. The     time it take for the algorithm to run will  increase as the size of n increases.
* O(n^2) is quadratic time complexity: this means that the time for execution is proportional to the size of the input squared 
  * Examples: nested loops, bubble sort, insertion sort 

## Juan’s

* O(1) - Linear time (graph would show a line, same growth but time keeps growing)
* O(n) - constant time (more time, more growth, it’s equal)
* O(n^2) - Quadratic time

Explain the Big O of algorithms in the O(log n) and O(n log n) space

## Objectives

* By the end of this lesson, you will be able to: 
  * Explain O(log(n) and O(n log(n))
  * List 2 algorithms that run in O(log n)
  * List 2 algorithms that run in O(n log n)
  * Put the Big O runtimes in the correct order

## Review 

* O(1) = constant/fixed time
* O(n) = linear time
* O(n^2) = quadratic time 
* O(nm) = (not sure of the official name) linear time through two different arrays 

Explain O(log(n) and O(n log(n))

* O(log(n)) = logarithmic time complexity: the time it takes to execute is proportional to the logarithm of n. If you repeatedly halve your input, the run- time complexity of your algorithm will be O(log(n))
* O(n log(n)) = When you halve your input and merge it back together after sorting 
* List 2 algorithms that run in O(log n)
  * Binary Search
* List 2 algorithms that run in O(n log n)
  * Merge sort 
  * Heap sort
  * Quick sort 
* Correctly identify that sorts can be no better than O(n)
* Sorting algorithms have to ‘examine’ every item in an array, therefore, 
* Put the Big O runtimes in the correct order
  * O(1), O(log n), O(n), O(n log n), O(n^2) 
