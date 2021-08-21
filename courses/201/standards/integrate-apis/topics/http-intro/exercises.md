Download and install the tool [Insomnia](https://insomnia.rest/) or another suitable headless browser.

Using this endpoint: https://httpbin.org/anything

* Make a `GET` and a `DELETE` request
  * Verify that the request information in the HTTP Response body matches the HTTP Request Headers in Postman
* Send a JSON string in a `POST` request
  * Verify that the response information in the HTTP Response body matches the HTTP Response Headers in Postman

---

Download and install the tool [Insomnia](https://insomnia.rest/) or another suitable headless browser.

Using the Pokemon API: https://pokeapi.co/api/v2/pokemon

* Visit the Pikachu endpoint (https://pokeapi.co/api/v2/pokemon)
* Find Pikachu's first ability, "Shock"
* Visit the Shock endpoint listed in Pikachu's response
* Find Pikachu's second ability, "Lightning Rod"
* Visit the Lightning Rod endpoint listed in Pikachu's response
* Explain how you could combine these three HTTP responses in JavaScript to make one object with the details of Shock and Lightning Rod in the abilities array of the Pikachu object
* Write the code to do this

---

## HTTP Request Warmups

A good portion of your software career as a web developer will involve getting and sending HTTP requests. 

The goal of this warm-up series Will be to parse HTTP headers, and turn the given information into useful data stored within an object.

### Part One: GET

If making a GET request to Spotify searching for the the Artist by the name of Bob Dylan, something like the following GET request header will be generated:

```
GET /v1/search?q=bob%20dylan&amp;type=artist HTTP/1.1
Host: api.spotify.com
Cache-Control: no-cache
Postman-Token: e2f09f98-f8e0-43f7-5f0e-b16e670399e2
```

The first line contains 3 parts:

* the HTTP verb, 
* the path, 
* and the protocol.

The remaining lines are the rest of the header.

Given this information, your goal will be to write a function that will parse this data to return an object with key value pairs in the following structure:

```
{ headers:
   { Host: ' api.spotify.com',
     'Cache-Control': ' no-cache',
     'Postman-Token': ' e2f09f98-f8e0-43f7-5f0e-b16e670399e2' },
  verb: 'GET',
  path: '/v1/search?q=bob%20dylan&amp;type=artist',
  protocol: 'HTTP/1.1' }
```

When the the header is passed to your function for any of these exercises, it will be a single string.

#### Starter Code

```js
const inputString = "GET /v1/search?q=bob%20dylan&amp;type=artist HTTP/1.1\nHost: api.spotify.com\nCache-Control: no-cache\nPostman-Token: e2f09f98-f8e0-43f7-5f0e-b16e670399e2";

const parseRequest = function (inputString) {
  //1. Change this http request into a string (add \n) so we can break it into pieces - replace spaces with \n
  //2. Need an empty request object to fill up
      //const request = {};
  //3. Need an empty request headers object
      //const request.headers = {};
  //4. Need to make each line into an array
      //split on \n
  //5. Split out GET request (1st array) by spaces
      //split on ' '
      //creates new array with method, path, and protocol
  //6. Take request object and set keys with values equal to the index of the value in the array:
    // - headers
    // - verb
    // - path
    // - protocol
  //7. Loop through the last 3 arrays (var i =1 since we already took care of the first array/line) in lineArray
  //8. Set a variable for current line
  //9. Split the line on : to get key value pairs
  //10. Set key from array[0]
  //11. Set value from array[1]
  //12. Add key to request.headers object and set value equal to value variable

// console.log(inputString);

    const request = {};
    request.headers = {};
    const lineArray = inputString.split('\n');
    // console.log(lineArray);
    const firstLine = lineArray[0].split(' ');
    // console.log(firstLine);
    // console.log(request);
    request.verb = firstLine[0];
    // console.log(request);
    request.path = firstLine[1];
    // console.log(request);
    request.protocol = firstLine[2];
    // console.log(request);

    for (let i = 1; i < lineArray.length; i++){
      // console.log(lineArray[i]);
      const currentLine = lineArray[i];
      // console.log(currentLine);
      const currentKeyValuePair = currentLine.split(':');
      // console.log(currentKeyValuePair);
      const key = currentKeyValuePair[0];
      // console.log('key', key);
      const value = currentKeyValuePair[1];
      // console.log('value', value);
      console.log(request.headers);
      request.headers[key] = value;
    }
    // console.log(request);
  return request;
}

parseRequest(inputString);
```

### Part Two: POST

If making a POST request to some api (Spotify in this case), something like the following POST request header will be generated (note that in practice the POST path will contain more information than in this simplified example). If making a POST request, something like the following POST request will be generated:

```
POST /v1/ HTTP/1.1
Host: api.spotify.com
Cache-Control: no-cache
Postman-Token: f6741a35-c20f-3051-e3f9-301904256b3f
Content-Type: application/x-www-form-urlencoded

fish=catfish&dog=dogfish
```

The line after the space in the example is the body of the POST request.

Modify your earlier function to determine if the string passed as a parameter is a GET or a POST request. 

* If it is a GET request, do the same behavior as listed in part one.
* If it is a POST request, add a body object as a value in your response object with a key of body. 
* In that body object, list all the key value pairs passed in the body of the input string.
* If POST, output from above example should be:

```
{ headers:
   { Host: ' api.spotify.com',
     'Cache-Control': ' no-cache',
     'Postman-Token': ' f6741a35-c20f-3051-e3f9-301904256b3f',
     'Content-Type': ' application/x-www-form-urlencoded' },
  verb: 'POST',
  path: '/v1/search?q=bob%20dylan&amp;type=artist',
  protocol: 'HTTP/1.1',
  body: { fish: 'catfish', dog: 'dogfish' } }
```

#### Starter Code

```js
const parseRequest = function (inputString) {
  return;
}
```

### Part Three: Query

Now let's start working with a query string! Taking a previous example where something like the following POST request header is generated, pull also pull out the query string into a seperate key/value pair inside the returned object.

If making a POST request, something like the following POST request will be generated:

```
GET /v1/search?q=bob%20dylan&amp;type=artist HTTP/1.1
Host: api.spotify.com
Cache-Control: no-cache
Postman-Token: f6741a35-c20f-3051-e3f9-301904256b3f
Content-Type: application/x-www-form-urlencoded

fish=catfish&dog=dogfish
```
The parts after the ? in the path are the query parameters

Modify your earlier function to determine if the string passed as a parameter contains a query string. 

* If the path contains a query string, grab each key/value pair being queried and add those to a query property inside the response object.

```
{ headers:
   { Host: ' api.spotify.com',
     'Cache-Control': ' no-cache',
     'Postman-Token': ' f6741a35-c20f-3051-e3f9-301904256b3f',
     'Content-Type': ' application/x-www-form-urlencoded' },
  verb: 'POST',
  path: '/v1/search?q=bob%20dylan&amp;type=artist',
  protocol: 'HTTP/1.1',
  query: { q: 'bob%20dylan', type: 'artist' },
  body: { fish: 'catfish', dog: 'dogfish' } }
```

#### Starter Code

```js
const parseRequest = function (inputString) {
  return;
}
```

### Tests

```js
const partOne = require('../partOne').parseRequest
const partTwo = require('../partTwo').parseRequest
const partThree = require('../partThree').parseRequest
const expect = require('chai').expect 


describe ('GET HTTP function', function() {
  it ('should when given a HTTP input string, return a properly formatted object' , function() {
    const str1 = "GET /v1/search?q=bob%20dylan&amp;type=artist HTTP/1.1\nHost: api.spotify.com\nCache-Control: no-cache\nPostman-Token: e2f09f98-f8e0-43f7-5f0e-b16e670399e2";
    const str2 = 'GET /api/v2/ability/4/ HTTP/1.1\nHost: pokeapi.co\nCache-Control: no-cache\nPostman-Token: b98466a7-6222-a4b5-dec3-1af3e4f866da'
    expect(partOne(str1)).to.eql(
      { 
      headers:
           { Host: ' api.spotify.com',
             'Cache-Control': ' no-cache',
             'Postman-Token': ' e2f09f98-f8e0-43f7-5f0e-b16e670399e2' },
      verb: 'GET',
      path: '/v1/search?q=bob%20dylan&amp;type=artist',
      protocol: 'HTTP/1.1' 
      }
    );
    expect(partOne(str2)).to.eql(
      { 
      headers:
         { Host: ' pokeapi.co',
           'Cache-Control': ' no-cache',
           'Postman-Token': ' b98466a7-6222-a4b5-dec3-1af3e4f866da' },
      verb: 'GET',
      path: '/api/v2/ability/4/',
      protocol: 'HTTP/1.1' 
      }
    );
  });
});

describe ('POST HTTP function', function() {
  it ('should when given a HTTP input string, return a properly formatted object' , function() {
    const str1 = "POST /v1/search?q=bob%20dylan&amp;type=artist HTTP/1.1\nHost: api.spotify.com\nCache-Control: no-cache\nPostman-Token: f6741a35-c20f-3051-e3f9-301904256b3f\nContent-Type: application/x-www-form-urlencoded\nfish=catfish&dog=dogfish";
    const str2 = 'POST /api/v2/ability/4/ HTTP/1.1\nHost: pokeapi.co\nCache-Control: no-cache\nPostman-Token: 80c0c09f-f995-fdb1-1d3a-9255c6842ff9\nContent-Type: application/x-www-form-urlencoded\nWhat...is+your+name%3F=Sir+Lancelot+of+Camelot.&What...is+your+quest%3F=To+seek+the+Holy+Grail.&What...is+your+favorite+color%3F=Blue.&Bridgekeeper=Right%2C+off+you+go.'

    expect(partTwo(str1)).to.eql(
      { headers:
         { Host: ' api.spotify.com',
           'Cache-Control': ' no-cache',
           'Postman-Token': ' f6741a35-c20f-3051-e3f9-301904256b3f',
           'Content-Type': ' application/x-www-form-urlencoded' },
        verb: 'POST',
        path: '/v1/search?q=bob%20dylan&amp;type=artist',
        protocol: 'HTTP/1.1',
        body: { fish: 'catfish', dog: 'dogfish' } }
    );

    expect(partTwo(str2)).to.eql(
      { headers:
         { Host: ' pokeapi.co',
           'Cache-Control': ' no-cache',
           'Postman-Token': ' 80c0c09f-f995-fdb1-1d3a-9255c6842ff9',
           'Content-Type': ' application/x-www-form-urlencoded' },
        verb: 'POST',
        path: '/api/v2/ability/4/',
        protocol: 'HTTP/1.1',
        body:
         { 'What...is+your+name%3F': 'Sir+Lancelot+of+Camelot.',
           'What...is+your+quest%3F': 'To+seek+the+Holy+Grail.',
           'What...is+your+favorite+color%3F': 'Blue.',
           Bridgekeeper: 'Right%2C+off+you+go.' } }
    );
  })
})

describe ('QUERY HTTP function', function() {
  it ('should when given a HTTP input with a query string, return a properly formatted object' , function() {
    const str1 = "POST /v1/search?q=bob%20dylan&amp;type=artist HTTP/1.1\nHost: api.spotify.com\nCache-Control: no-cache\nPostman-Token: f6741a35-c20f-3051-e3f9-301904256b3f\nContent-Type: application/x-www-form-urlencoded\nfish=catfish&dog=dogfish";

    expect(partThree(str1)).to.eql(
    { headers:
       { Host: ' api.spotify.com',
         'Cache-Control': ' no-cache',
         'Postman-Token': ' f6741a35-c20f-3051-e3f9-301904256b3f',
         'Content-Type': ' application/x-www-form-urlencoded' },
      verb: 'POST',
      path: '/v1/search?q=bob%20dylan&amp;type=artist',
      protocol: 'HTTP/1.1',
      query: { q: 'bob%20dylan', type: 'artist' },
      body: { fish: 'catfish', dog: 'dogfish' } }
    );
  })
})
```
