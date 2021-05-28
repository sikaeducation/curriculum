# Intro to HTTP: Exercises

## Questions

* What is HTTP?
* What does HTTP stand for?
* Why doesn't the browser just send JavaScript objects?
* What happens if an HTTP request doesn't get a HTTP response?
* What are the parts of an HTTP request?
* What are the parts of an HTTP response?
* What language is HTTP?
* What's an HTTP method?
* What are the key-value pairs in an HTTP request called?
* What are 2 headers that you might see on an HTTP request?
* What are 2 headers that you might see on an HTTP response?
* When you request an HTML file from a server, how does that HTML file get to the browser?
* When you get data back from a server, where does the data go?
* Which HTTP requests generally have bodies?
* Which HTTP requests generally don't have bodies?
* Which HTTP responses generally don't have bodies?
* If an HTTP response contains JSON, how can a non-JavaScript language understand it?

## Activities

Download and install the tool [Postman](https://www.postman.com/) or another suitable headless browser.

Using this endpoint: https://httpbin.org/anything

* Make a `GET` and a `DELETE` request
  * Verify that the request information in the HTTP Response body matches the HTTP Request Headers in Postman
* Send a JSON string in a `POST` request
  * Verify that the response information in the HTTP Response body matches the HTTP Response Headers in Postman

---

Download and install the tool [Postman](https://www.postman.com/) or another suitable headless browser.

Using the Pokemon API: https://pokeapi.co/api/v2/pokemon

* Visit the Pikachu endpoint (https://pokeapi.co/api/v2/pokemon)
* Find Pikachu's first ability, "Shock"
* Visit the Shock endpoint listed in Pikachu's response
* Find Pikachu's second ability, "Lightning Rod"
* Visit the Lightning Rod endpoint listed in Pikachu's response
* Explain how you could combine these three HTTP responses in JavaScript to make one object with the details of Shock and Lightning Rod in the abilities array of the Pikachu object
* Write the code to do this
