# JWTs

When you go to an event at a venue, you often present your ID and a ticket for the event. What if you need to leave and come back? You could present your ticket and ID again, but many venues will give you a hand stamp or bracelet instead that indicates that you've already checked in so you can get back in more quickly.

A similar system is commonly used in web authentication. When you log in, you send a username and password over HTTP. Instead of supplying those every time you make a request, the server gives you a token that you can attach to future requests that's considered a proof that you've been authenticated.

JSON web tokens, or JWTs (pronounced "jots"), are a popular method of storing a kind of handstamp or wristband with a user after they log in. After validating a username and password, a server can send a JWT to the user to send with future requests as proof that they've logged in. This way, servers don't need to keep track of which users are currently logged in or ask users to send their username and password in every time, they only need to be able to verify that a supplied token is valid.

## JWT Format

JWTs are 3 sets of base64 characters separated by `.`, with each set representing different parts of the request:

### Header

The first section of a JWT contains information about the JWT itself. Most importantly, it defines how the signature was calculated. A typical JWT header looks like this decoded:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

[HS256](https://en.wikipedia.org/wiki/HMAC) is an algorithm for taking a string and creating a signature with it that's used to tell if the JWT was tampered with.

### Payload

### Signature

What keeps a malicious user from examining their token in the browser:

```json
{
  "data": {
    "id": 3412,
    "username": "miledavis"
  },
  "iat": 1629072783,
  "exp": 1629076383
}
```

Changing it to impersonate another user and sending that to the server instead?

```json
{
  "data": {
    "id": 4137,
    "username": "wayneshorter"
  },
  "iat": 1629072783,
  "exp": 1629076383
}
```

The JWT signature is calculated by combining the data from the header and the payload and using a secret key to make a hash with them. The reason this is important is JWTs aren't encrypted; the base64 encoding they use can easily be read by client code. If anything in the header or payload is tampered with, the signature will no longer match and any server receiving the JWT will know that it was tampered with. This allows the server to store sensitive information like user IDs in JWTs with the client and have confidence that any JWTs received from a user are authentic.

## Generating JWTs

The most popular node library for generating JWTs is [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken). It has a variety of features, but the basic usage for generating a JWT looks like this:

```js
const data = {
  id: 3412,
  username: "miledavis",
}

const secret = "p@s$w0rD"

const token = jwt.sign({
  data,
}, secret, {
  expiresIn: "1h"
})
```

[Play with this code](https://codesandbox.io/s/little-water-zijgq)

`token` will be a JWT that contains the `data` object, is signed with `p@s$w0rD`, and expires in an hour. This code generates this JWT:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozNDEyLCJ1c2VybmFtZSI6Im1pbGVkYXZpcyJ9LCJpYXQiOjE2MjkwNzI3ODMsImV4cCI6MTYyOTA3NjM4M30.eJLVitNuZbulLSXVdNtrcVBCIord4f5ybz-tvHFVf_w
```

Decoded, that JWT looks like this:

Header

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

Payload

```json
{
  "data": {
    "id": 3412,
    "username": "miledavis"
  },
  "iat": 1629072783,
  "exp": 1629076383
}
```

Signature

```
eJLVitNuZbulLSXVdNtrcVBCIord4f5ybz-tvHFVf_w
```

## Storing JWTs

Since JWTs are just strings of characters, they're great for storing in the browser with something like `localStorage`:

```js
fetch("https://example.com/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "milesdavis",
    password: "p@s$w0rD"
  }),
}).then(response => response.json())
.then(response => {
  const token = response.token
  localStorage.setItem("token", token)
})
```

## Sending JWTs

Once a token is in `localStorage`, it can be read into any request requiring it:

```js
const token = localStorage.getItem("token")

fetch("https://example.com/top-secret-info", {
  headers: {
    "Authorization": `Bearer ${token}`,
  }
}).then(response => response.json())
.then(response => {
  console.log("Top secret info here!", response)
})
```

Note that it's conventional to put these tokens in the `Authorization` header preceded by the word "Bearer" and a space.

## Validating JWTs

To validate a JWT, use the `jsonwebtoken` npm package's `.verify` method:

```js
app.get("/top-secret-info", (request, response), () => {
  const token = request.get("Authorization").split(" ")[1] // Take the word `Bearer` out

  const secret = "p@s$w0rD"

  let payload
  try {
    payload = jwt.verify(token, secret) // An error in the signature or expiration will throw an error
  } catch (error){
    response.status(401).json({
      error: "There was an error with your token, please log in again",
    })
  }

  const user = User.find(payload.data.id)

  response.json({
    message: `This is for logged-in users only, ${user.username}!`,
  })
})
```

## Additional Resources

| Resource | Description |
| --- | --- |
| [JWT.io](https://jwt.io/) | Official JWT site featuring an interactive encoding/decoding tool. |
| [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token) | Wikipedia's article on JWT |
| [AuthZero: JSON Web Tokens](https://auth0.com/docs/tokens/json-web-tokens) | AuthZero's guide to JWTs |
