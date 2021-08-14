# Intro to Knex

Connecting an Express app to a database can be a little tricky. You need to:

* Establish a connection to the database using the libraries and methods specific to that database
* Write queries in the flavor of database you're using
* Devise a way to version your database structure so that you can match the version of the code to the version of the database structure
* Devise a way to add "seed" starter data to see your app in action
* Potentially do all of this with multiple database systems, if you're using one for local development and a different one in production

There's an easier way to manage all of this in Node apps: Knex.

## Knex

Knex is three tools:

* A tool for abstracting out database interactions so that same code can be used with any database
* A tool for managing versions of a database's structure
* A tool for "seeding" a database with sample data

## Installation

To add Knex to a project, you need to install two things:

* The `knex` library itself: `npm install knex`
* At least one database "driver" that Knex can use to connect with whichever database you're using:
  * SQLite: `npm install sqlite3`
  * PostgreSQL: `npm install pg`
  * MySQL: `npm install mysql`
  * Oracle: `npm install oracledb`
  * SQL Server: `npm install tedious`

Next, run `npx knex init` to generate a new `knexfile.js`.

```js
// knexfile.js
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
```

This file looks intimidating, but it's ultimately just a regular JavaScript object with keys and values. It contains information about how to connect to the database (what type of database, where is it located, are there any credentials, etc). The file comes loaded with a lot of different examples of how it can be used. One thing to note is that you can configure one connection for local development and a completely different connection for production. One of the most powerful things about Knex is that none of your code needs to change- only which key in this `knexfile` is referenced.

A Knexfile for a simple project might look like this:

```js
module.exports = {
  development: {
    client: "sqlite3",
    connection: "./dev.sqlite3",
  },
  production: {
    client: "pg",
    connection: "postgres://production-database-connection-string-goes-here",
  }
}
```

This says that Knex should use SQLite locally, and it should store the database in a file called `dev.sqlite3`. In production, Knex should should PostgreSQL, and it should connect to a database located at `postgres://production-database-connection-string-goes-here`.

Once your Knexfile is configured, you're ready to write queries, version your database structure, and seed sample data!

## Additional Resources

| Resource | Description |
| --- | --- |
| [Knex.js](https://knexjs.org/) | Official Knex.js site |
| [Knex Cheatsheet](https://devhints.io/knex) | Cheatsheet containing common Knex.js boilerplate |
