# Express: Protecting Routes with Passport

Once a user can create an account and login with it to get a token, you can start protecting routes. This means that any HTTP request going to a protected route must contain a valid token. If the token is valid, the user associated with it is looked up and added to the `request` object as `.user` in all future middleware and routes. Otherwise, the HTTP request is rejected with a `401 Unauthorized` status.

## Passport

[Passport](http://www.passportjs.org/) is an npm package that helps authenticate users. There are many methods used to authenticate users:

* Possession of a token, such as a JWT
* Having a cookie pointing to a valid session
* Social login with a third-party like Facebook or Google

One of the unique features of Passport is that it abstracts out all of these different authentication methods as modules called strategies. Passport has [over 500 different authentication strategies](http://www.passportjs.org/packages/). This abstraction allows Passport to be used similarly regardless of what the actual authentication mechanism is.

```
app.get("/some-secret", passport.authenticate("twitter", { failureRedirect: "/login" }), (request, response) => {
  // Protected with Twitter
})
app.get("/some-secret", passport.authenticate("jwt", { session: false }), (request, response) => {
  // Protected with JWTs
})
app.get("/some-secret", passport.authenticate("local", { failureRedirect: "/login" }), (request, response) => {
  // Protected with cookies and sessions
})
```

To help read and decode JWTs, use the `passport-jwt` strategy.

## Installing Passport

To install Passport, use `npm install` to add the `passport` and `passport-jwt` packages:

```
npm install passport passport-jwt
```

## Configuring Passport

To configure Passport, add `passport.initialize()` as an Express middleware before any protected routes are registered:

```js
app.use(passport.initialize())
```

Then, configure a Passport strategy:

```js
const passport = require("passport")
const { Strategy, ExtractJwt } = require("passport-jwt")
const User = require("../models/User")
const JWT_SECRET = process.env.JWT_SECRET

async function verify(payload, done){
  const user = await User.query().where("username", payload.username).first()
  if (!user){
    done(null, false)
  }
  done(null, user)
}

const jwtStrategy = new Strategy({
  secretOrKey: JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  algorithms: ["HS256"],
  issuer: "api.myapp.com",
}, verify)

passport.use(jwtStrategy)

const authenticate = passport.authenticate("jwt", { session: false })
```

[Play with this code](https://codesandbox.io/s/admiring-saha-ik32w)

1. Import `passport`, as well as the `Strategy` and `ExtractJwt` classes from the `passport-jwt` classes.
2. Import the `User` Objection model.
3. Get the `JWT_SECRET` environment variable from the environment.
4. Define a `verify` function that the JWT strategy will use to look up a user.
  * This function will be called with the decoded JWT payload, which should contain a user ID, username, or some other identifying value.
  * If the user isn't found, the supplied `done` function should be called with `null` and `false`, indicating that there was no user with that value. Otherwise, `done` should be called with `null` and the found user. If `done` is called with any value in the first position, it means there was an error processing the request.
5. Configure the `jwtStrategy` by creating a new `Strategy` object with options and the `verify` function.
  * The options are mostly for security, and will automatically verify that the signature on the JWT is valid, it was issued by this app, and that no one has tried to change the way it was signed to something less secure.
  * The `jwtFromRequest` property tells the strategy where to look for the token. `ExtractJwt.fromAuthHeaderAsBearerToken()` tells the strategy to look for the token in the `Authorization` header of the request, prefixed with the word `Bearer`.
6. Passport is given the configured strategy
7. An `authenticate` function that can be used to protect routes is generated.

## Protecting Routes

To require that a user be logged in for a route, import the `authenticate` function and add it to a route handler:

```js
const authenticate = require("./middleware/authentication")

app.get("/secrets", authenticate, (request, response) => {
  response.json({
    message: `Congratulations ${request.user.username}, you're logged in!`
  })
})
app.get("/more-secrets", authenticate, (request, response) => {
  response.json({
    message: "Only logged in users see this too",
  })
})
```

The `authenticate` middleware contains the configured Passport strategy. Any route that contains it will either add a `user` property to the `request` object containing the authenticated user's database record or reject the request with a `401 Unauthorized` status.

## Watch Out!

All passport does is verify that a user is who they say they are and adds their database record to `request.user`; it doesn't specify what that user is allowed to do. If you have different roles in your application, such as users who can manipulate their own data and admins that can manipulate everyone's data, you will need to code that separately. In particular, watch out for users being able to edit data that isn't owned by them. This can be as simple as:

```
app.put("/posts/:postId", authenticate, async (request, response) => {
  if (request.params.postId !== request.user.id){
    response.status(403).json({
      error: "You're not authorized to do that."
    })
  }

  const post = await Post.query().findById(request.params.postId).patch(request.body.post)

  response.json({ post })
})
```
