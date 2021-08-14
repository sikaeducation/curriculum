# Intro to Node

Traditionally, JavaScript is thought of as being part of front-end development. After all, the thing that compiles and executes JavaScript code is part of web browsers. This isn't the only place you can write code, though. Code is used for file servers, API servers, robots, embedded software (like TVs), and more. These call for general-purpose programming languages, which aren't tied to a specific kind of task like web development. Is there a way you can leverage the JavaScript you already know for general-purpose tasks?

## Example

(code example here)

On the surface, there's nothing special about this code; it calculates something and logs it to the console. Ordinarly though, this JavaScript file would have to be brought into an HTML file through a `<script>` tag and run in a browser. With Node, we have a way to run this code directly.

## Node

Node is way to run JavaScript outside the browser. It's not a language; JavaScript is still the programming language used in Node. Almost all the keywords, operators, methods, and techniques you use in the browser still apply. Node is a "runtime", which is what actually executes the code you write. On the front-end, the runtime is the browser. Everywhere else, the runtime is Node.

## Uses for Node

* **Working with file systems.** Browser JavaScript can't read or create files, but Node has no such restrictions. This makes it a popular tool fo creating folder and file structures, and is used in command-line tools like `create-react-app`.
* **API servers.** JavaScript is a great language for API servers because it was designed for asynchronous code. That means that it's well-suited to handling a large amount of small tasks (like most HTTP requests). There are a variety of frameworks, such as Express, to make this even easier.
* **Hardware**. JavaScript can integrate with hardware platforms like Raspberry Pi to create smart appliance, robots, and more.

## Differences from Browser JavaScript

* Since Node runs outside the browser, it doesn't come with all the tools for interacting with web pages- there is no `document.`, no `window`, and no DOM.
* Conversely, Node has built-in tools for reading and writing files and otherwise controlling things on the computer that's running the code.
* Node has a built-in module system called CommonJS. When Node came out, there was no `import`/`export` in the browser. Node  not only has an equivalent syntax, it also has a robust system for managing and installing other people's code called NPM.

## Watch Out!

* One of the differences from Browser JavaScript that throws people off is that there is `fetch` in Node by default. This is because making HTTP requests is part of the runtime, not part of the JavaScript language. That said, the `node-fetch` NPM library can paper over this and give the same `fetch` you're used to.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Node.js](https://nodejs.org/en/) | Official Node.js webpage |
| [Wikipedia: Node.js](https://en.wikipedia.org/wiki/Node.js) | Wikipedia's article on Node.js |
