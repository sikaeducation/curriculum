# The Human Asynchronous Program

## The Challenge

Introducing the concurrency model, asynchronous programming, and the JavaScript Event Loop to web development students can be tricky. Simply presenting a technical definition is insufficient, as a lot of the words in said definition need defining.

> JavaScript is a single threaded, concurrent language. It has a call stack, event loop, a callback queue, and some other APIs.

To quote, Philip Roberts, "Right..."

## The Lesson

The idea behind the Human Asynchronous Program is that the students will physically participate in the conceptual demonstration of the concurrency model. It requires volunteers to come up to the front of the room and act as a program. Each volunteer receives a whiteboard with a problem and then the "human program" is executed in two different ways to illustrate synchronous and asynchronous code execution.

## Requirements:

* 10 mini whiteboards (representing program operations)
* 1 large board (representing the program output) - pre-number the board with 1 through 5 so it's clear where the outputs to each problem should go
* 1 Whiteboard Marker (representing the program thread)
* 6 volunteers

## Preparation

Write the first program. It will consist of 5 problems, representing functions, each on its own small whiteboard (make sure to number the whiteboards, keep them in order, and handle them carefully, so you don't rub the writing off of the boards). They should be simple questions that either require a "request" for help or some arithmetic calculation. They should be mix between synchronous (arithmetic) and asynchronous (ask for help) problems.

Write a second, but very similar, version of the program on the other five small whiteboards. Use a different color marker and keep the second set separate from the first. The reason you will need two similar versions of the "program" is because you will need run through the program twice and the answers should not be readily available on the second round.

Here is an effective set of problems for the two programs:

### v1

* What is your lead instructor's middle name?
* What city was Mozart born in?
* What is written in the red square outside of this wall?
* 3 + 6 * 4 / 3 - 25
* 2 + 2

### v2

* What is your Associate Instructor's brother's/sister's name?
* What year did Mozart die?
* *What is written in the blue circle outside of this wall?
* 5 + 6 * 4 / 3 - 25
* 2 + 2

Notes on these questions: 

* Note that the third question requires you to plant something outside of the classroom.
* Note that the last question is 2 + 2 in both cases - this is by design.

## Execution

When you've introduced your objectives and recited some initial definitions (AJAX, Asynchronous, Single Threaded), pause your lecture and introduce the exercise.

* Call for 5 volunteers (note that you don't need the 6th yet)
* Hand out the first set of boards facing down and ask the students not to flip the boards yet.
* Explain the rules...

## The Rules / Script

### Round One

* You guys will now be a living program. Each of you has a problem to solve on your board. When you have solved your problem, please write the answer on the large white board behind you.
* The catch is that this program will execute synchronously. Each calculation will block further calculations until it is complete. Meaning that person number two cannot even flip over her board until the person prior has found his solution, written the output on the board and passed the marker ("thread") to you. When your eceive the marker,you can flip your board over and look at the problem. 
* In order for the entire class to keep up with you, please read your problem out loud before you begin solving.
* Some of you will be able to solve your problems without any help. In that case, just solve the problem write it on the board and pass the marker. Others will have problems that are impossible to solve without help.
* If you need to ask for help, request help from an individual in the class and wait for a response. When you get your solution, write it on the board and pass the marker along to the next person.
* Ready, set, go!

### Round Two

Distribute second set of boards and ask for another volunteer - this volunteer will hold the marker and act as the recorder.

* This time, we are going to run this program asynchronously. When you read your problem out loud and you have to ask for help, the next person can flip her board over and begin solving as soon as your request goes out.
* The exception to this flow is if you don't have to ask for help. If you are calculating something, the next person cannot flip his board over until you're finished.
* Also, this time, you will not be passing the marker along. When you have your answer, tell it to "Joe," the new volunteer who will record it for you.
* Ready, set, go!

After the second program "completes" you can release everyone to their seats.

## Discussion

* What are your observations?
* What kinds of differences did you notice between the first and second programexecution?
* Which one is more efficient?
* Why can't everything just happen at once?
* What does single threaded mean?
* Why did some functions allow thenext person to start even before they got theanswer, but others did not?

## Extend this to teach the Event Loop

You can extend this exercise to better mirror the event loop by queuing up the individuals who are asked for help (the "responses"). In the second scenario, you can ask the individuals to line up when they get a response and tell the individual who is recording the outputs, to record the responses in order.
