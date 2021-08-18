# Intro to Node

Traditionally, JavaScript is thought of as part of front-end development because JavaScript is usually compiled and executed by web browsers. However, this isn't the only place you can write code. Code is used for file servers, API servers, robots, embedded software for devices like TVs, and more. These situations call for general-purpose programming languages which aren't tied to a specific programming tasks like web development. How can you leverage the JavaScript you already know for general-purpose tasks?

```js
function add(number1, number2){
  return number + number2
}

const [ firstNumber, secondNumber ] = process.argv.slice(2)

console.log(
  add(firstNumber, secondNumber)
)
```

On the surface, there's nothing special about this code; it calculates something and logs it to the console. Ordinarly, this JavaScript file would have to be brought into an HTML file through a `<script>` tag and run in a browser. With Node, you can run this code directly in the CLI:

```bash
node add.js 3 6 # Prints 9
```

## Node

Node is way to run JavaScript outside the browser. It's not a language; JavaScript is still the programming language used in Node. Almost all the keywords, operators, methods, and techniques used in the browser still apply. Node is a runtime, which is what actually executes the code. On the front-end, the runtime is the browser. Everywhere else, it's Node.

## Uses for Node

* **Working with file systems.** Browser JavaScript can't read or create files, but Node has no such restrictions. This makes it a popular tool fo creating folder and file structures, and is used in command-line tools like `create-react-app`.
* **API servers.** JavaScript is a great language for API servers because it was designed for asynchronous code, which means that it's well-suited to handling a large amount of small tasks like HTTP requests. There are a variety of frameworks such as Express that make this even easier.
* **Hardware**. JavaScript can integrate with hardware platforms like Raspberry Pi to create smart appliance, robots, and more.

## Differences from Browser JavaScript

* Since Node runs outside the browser, it doesn't come with all the tools for interacting with web pages- there is no `document`, no `window`, and no DOM.
* Conversely, Node has built-in tools for reading and writing files and otherwise controlling things on the computer that's running the code.
* Node has a built-in module system called CommonJS. When Node was designed, there was no `import`/`export` or modules in the language.
* Node has a robust system for managing and installing other people's code called [npm](https://www.npmjs.com/).

## Additional Resources

| Resource | Description |
| --- | --- |
| [Node.js](https://nodejs.org/en/) | Official Node.js webpage |
| [Wikipedia: Node.js](https://en.wikipedia.org/wiki/Node.js) | Wikipedia's article on Node.js |
| [Why the hell would I use Node.js?](https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js) | Blog post outlining the uses of Node |
