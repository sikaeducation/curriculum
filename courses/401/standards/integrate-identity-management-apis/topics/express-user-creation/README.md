# Express: User Creation

Creating a new user in an Express app is not very different from creating a new record of any kind. The only difference is that you need hash the user's password when you store it in the database.

## Installing `bcrypt`

There are several different implementations of the bcrypt algorithm on npm, but a good default is the `bcryptjs` package. Add it to your project with `npm install bcryptjs`. When you import it, it's common to change the name from `bcryptjs` to `bcrypt`:

```js
const bcrypt = require("bcryptjs")
```

## Setting up the app

The initial setup for creating a new user is the same as any resource. You need:

1. A database connection
  * Install `knex`, `objection`, and a database driver like `pg` or `sqlite3`.
  * Make a new `knex` file with `npx knex init` and configure it appropriately
  * Make a new migration to create the user table. When making the table, you should indicate that the password being stored is a hash by giving it a name like `password_hash` or `password_digest`. Don't forget to run the migration!
  * Make a database connection file that initializes `knex` with the correct configuration
2. An Objection `User` model that references the user table you migrated.
  * Don't forget to set the database connection on `Model.knex`
3. A route to accept new user signups. By REST standards this should be a `POST` request to `/users`, but it's acceptable to brand this with something like `/signup`.
  * This should use the `User` model to create a new user.

## Creating a New User

The only difference between creating a user and any other resource is how the password is handled. Consider this example of hashing a password on the way in:

```js
class User extends Model {
  static tableName = "user"
  static async signup(user){
    const hashedPassword = await bcrypt.hash(user.password, 12)
    delete user.password
    user.password_hash = hashedPassword

    return this.query().insert(user)
  }
}
```

[Play with this code](https://codesandbox.io/s/lingering-dawn-o70gt?file=/models/User.js)

This example adds a new static method to the `User` model that takes in a user object:

```js
{
  username: "miles",
  password: "d@v1$",
}
```

The password is then hashed with `bcrypt.hash()`. The first parameter for `.hash()` is the string to hash, and then second is a cost. The bcrypt algorithm allows you to control how secure the hash is at the cost of processing speed. The maximum is 37, the minimum acceptable number is 12.

With the password hashed, the original password is deleted from the `user` object and the hashed password is added to it. These are inserted into the database as any other record would be.

[Insomnia showing a successful user addition](assets/user-signup.png)

## Additional Resources

| Resource | Description |
| --- | --- |
| [npm: `bcryptjs`](https://www.npmjs.com/package/bcryptjs) | Documentation for the `bcryptjs` npm module |
| [Stack Exchange: "Why Should I hash passwords?"](https://security.stackexchange.com/questions/36833/why-should-i-hash-passwords) | Stack exchange answers on why passwords should be hashed. |
