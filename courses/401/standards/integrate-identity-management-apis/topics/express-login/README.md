# Express: Login

After a user has been created, the database will have their username and hashed password. When a user sends their username and password, the server looks up the user's database record by the supplied username, hashes the supplied password, and compares the password hashes. If the pasword hashes match, the user is authenticated. Once the user is authenticated, their user ID can be stored in a JWT and send back to the client. For example:

```js
class User extends Model {
  static tableName = "user"
  static async signup(user){
    // Signup logic
  }
  static async authenticate(suppliedUser){
    const retrievedUser = await this.query().where("username", suppliedUser.username).first()
    const isAuthenticated = await bcrypt.compare(suppliedUser.password, retrievedUser.password_hash)
    if (!isAuthenticated){
      throw new Error("Bad password")
    }

    return retrievedUser
  }
}
```

```js
app.post("/login", async (request, response) => {
  try {
    const user = await User.authenticate(request.body.user)
    const data = { username: user.username }
    const token = jwt.sign(data, JWT_SECRET, {
      subject: user.username,
      expiresIn: "1h",
      issuer: "api.myapp.com",
    })

    response.json({ token })
  } catch (error){
    console.error(error.message)
    response.status(401).json({
      error: "Bad username or password",
    })
  }
})
```

[Play with this code](https://codesandbox.io/s/bold-faraday-p74es)

1. The `User` model gets a static async method called `authenticate` that takes a `user` object with the `username` and `password` from the HTTP request.
2. The user is looked up by the username from the HTTP request.
3. The password from the HTTP request is compared to the stored password hash. Note that this must be done with the `bcrypt.compare` method, not be comparing the values with something like `===`.
4. If the password hash comparison works, it returns the user's database record. If not, it throws an error that will be caught by the route.
5. Once the user is authenticated, their ID is encoded in a JWT and signed with the `JWT_SECRET` environment variable. This JWT is sent back to the client.

This token will be sent with future requests that need to be authenticated on this server.

## Additional Resources

| Resource | Description |
| --- | --- |
| [How to Hash and Compare Passwords Using Bcrypt](https://hackthestuff.com/article/node-js-how-to-hashing-and-compare-password-using-bcrypt) | Blog post on using bcrypt |
