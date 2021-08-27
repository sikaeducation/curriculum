# Intro to Express

Node is a runtime for running general purpose JavaScript code, which can be used for API servers. The most basic Express app looks something like this:

```js
const express = require("express")
const app = express()

app.get("/", (request, response) => {
  response.send("It worked!")
})

app.listen(3000)
```

[Play with this code](https://codesandbox.io/s/nifty-dan-13d2p)

This code listens for GET requests to `http://localhost:3000`, and responds with the string "It worked!" when it gets one.

## Installing Express

To create a new Express app:

* Run `npm init -y`. This initializes a folder as a Node project by adding a `package.json` file, which allows you to install npm packages like Express.
* Run `npm install express`. This downloads Express and marks it in the `package.json` file as a dependency of the project.
* Copy this code into a new file called `index.js`:

```js
const express = require("express")
const app = express()

app.get("/", (request, response) => {
  response.send("It worked!")
})

app.listen(3000)
```

* In the `package.json` file change this line:

```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

To this:

```js
  "scripts": {
    "start": "node app.js"
  },
```

When you run `npm start` on the command line, NPM will run `node app.js`, which will make your server start listening for requests. Go to `http://localhost:3000` in a browser to see the API.

## Watch Out!

* The code that goes into `package.json` is JSON, not JavaScript. That means keys must be quoted, everything must use double-quotes, and you can't use trailing commas.
* When you run an Express app, by default your terminal will appear to freeze. This is normal; Express is just waiting for requests to come in. To stop your server, press `control` + `c`.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Express/Node Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction) | MDN tutorial on Express and Node |
| [Express: Getting Started](https://expressjs.com/en/starter/installing.html) | Official guide to getting started with Express |
| [Video: Express JS Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE) | Traversy Media's crash course on Express |
