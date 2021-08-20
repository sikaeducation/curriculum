# Interviewing: Whiteboarding

Whiteboarding is an intimidating part of interviewing, but it's ultimately a learnable skill. Practice using this 4-step whiteboarding protocol:

## 4-Step Whiteboarding Protocol

### Clarify the problem

Start by restating the problem in your own words. This does two things: It clarifies that you understand what you're being asked to do, and it buys you time to think about the problem more.

Next, try to extract the useful pieces of data from the prompt. What are the inputs? What are the outputs? What are the contraints? Write these on the board.

Next, draw an input/output table. The trick to this is that you want to cover a reasonable number of cases, but you also want them to be relatively fast to verify.

The Identify-Understand questions from Polya's 4-step process are useful here too:

#### Identify

* Are you being asked to find something or prove something?
* Can you separate out the data, the unknown, and conditions?
* Is all of the information relevant?
* Are there special cases?
* Do you understand all of the words in the problem? Is there any special terminology you need to distinguish?

#### Understand

* Can you restate the problem? How many different ways can you do it?
* Can you make an table that represents sample inputs and the outputs they should generate?
* Can you think of what the opposite of this problem is?
* Can you visualize the problem as a whole?
* Can you think of a picture or diagram that might help you understand the problem?
* Have you seen a problem like this before?
  * What's different about it?
  * Can we use the same solution?
  * Is the similarity biasing you?
* Is there an analogy for this problem?
* Are there multiple parts of the condition that can be separated out?
* Is there a notation you can use to rewrite the problem?
* If you simplify or round parts of the problem, how much precision do you lose?
* Can you stretch the parameters to absurd lengths?
* Is the sequence things happen in important?
* Can you think of a more specific example of this problem?
* Are any parts of the problem redundant?
* Are any parts of the problem contradictory?
* Is the problem solvable with the available information?
* What other data would be useful to have? If you don't have it, can you make it up?

### Enumerate Possible Approaches

Now that you understand the problem, think through different approaches. Consider:

* Any obvious solutions
* Solutions that take advantage of particular language features
* Different paradigms (functional, object-oriented, procedural)

Try to come up with at least two solutions, and pick the most promising one. "Promising" doesn't necessarily mean most elegant or most efficient; its perfectly reasonable to select an approach because it's the only one you're confident you can do under pressure.

The DAVE questions from Polya's 4-step process are helpful as well:

#### Deduce

* Can you eliminate some possibilities?
* You can just guess an answer?
  * Is the answer right? Can you figure out how to get to it?
  * Is the answer wrong? In what ways? How close was it?
  * Are you noticing patterns?
* Can you work backwards from the solution? How does the data become the unknown?
* Are there any patterns present?
* Are any parts of the problem interchangeable?

#### Associate

* Can it be translated into an equation or formula?
* Are any parts of the problem similar to other kinds of problems? Could you use their:
  * Unknowns?
  * Constraints?
  * Data?
  * Solutions?
  * Methods? 

#### Visualize

* Can you visualize it as a:
  * List?
  * Table?
  * Chart?
  * Tree diagram?
  * Model?
* Draw a picture
  * Does it help emphasize some parts?
  * Does it need different kinds of lines (solid, dotted, dashed)?
  * Should it use multiple colors?
  * Should it be 2D or 3D?

#### Ease-In

* Solve an easier problem
  * What if you didn't have to solve part of the problem? Can you remove one of the constraints?
  * What if you assume something you suspect to be true but can't prove yet? Can you add a piece of data?
  * Can you build something that would help solve the problem?
  * Could you change any part of the problem to make it easier? Could you make the start closer to the end?
* Change the number of parts
  * Combine: Can you combine parts of the problem into one whole?
  * Decompose: Can you split the problem into multiple parts?
* Change the scope
  * Can you make it more specific?
  * Can you make it more general?

### Work the Problem

If it's a programming puzzle, start by writing sandwich code: Name the function, write out the inputs, write out what the outputs will be. If it's a more general puzzle, see if you can do something to similarly make it clear what the inputs and outputs are so that you'll know when your solution successfully connects them.

Next, don't try to write syntactically correct code. What you're aiming for is pseudo-code, or code that identifies all the logical steps one would need to follow without prescribing any one language.

More than any other step, it is imperative that you narrate what you're doing the entire time. As you're working through the solution, note that it's OK to discover new problems (and go back through this process to solve them). Additionally, it's OK to make mistakes or have to double back.

As you're working through the solution, consider these questions:

* Are you making progress?
* Have you solved the problem? Did you meet all of the conditions?
* What are you positive about?
* What do you think is likely?
* Are you doing something you've already tried?
* Did you use all the data? Did you need to?

### Reflect

When you think you've solved the problem, go back to your input/output table from step 1. Run each input through your pseudo-code out loud and verify that it produces the expected result. It's common to identify problems with your solution during this step, especially around off-by-one errors and comparisons. That's much better than not finding them at all.

If you've validated your solution, start talking about how it could be improved. Are there inelegant parts of the code? Problems with scaling? Problems with speed? Talk about the trade-offs the code will have.

If your solution doesn't work, identify why. What would need to be true for your solution to work?

Consider these questions:

* Does this solution indicate a more general rule?
* Are there counter-examples at the extremes?
* Does the answer make sense?
* Could you use this method to solve other problems?
* Can you derive the same answer a different way?

## Practice

Reading and recalling these steps is not enough to become a good whiteboarder. Whiteboarding is an independent skill from programming, and the only way to get good at it is practicing. In particular, you need to practice out loud in front of another person. It will likely feel embarassing or awkward, but it's much better to get past that stage with a partner than have to develop these skills when an actual job is on the line.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Princeton: Pseudo-code Reference](https://www.cs.princeton.edu/courses/archive/spr11/cos116/handouts/Pseudocode_Reference.pdf) | Princeton's reference guide to writing pseudo-code |
