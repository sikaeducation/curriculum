# Knex: Migrations

Imagine version 1 of an app has a table that looks like this:

| Key | Column      | Type          |
| --- | ----------- | ------------- |
| PK  | id          | int           |
|     | first_name  | varchar(255)  |
|     | last_name   | varchar(255)  |
|     | birth_date  | date          |

The code that uses this data looks like this:

```js
const person = {
  firstName: databaseRecord.firstName,
  lastName: databaseRecord.firstName,
  age: Date.now() - (new Date(databaseRecord.birthdate)).getTime(),
}
```

Then, version 2 removes the birth date:

| Key | Column      | Type          |
| --- | ----------- | ------------- |
| PK  | id          | int           |
|     | first_name  | varchar(255)  |
|     | last_name   | varchar(255)  |

```js
const person = {
  firstName: databaseRecord.firstName,
  lastName: databaseRecord.firstName,
}
```

There's a problem with version 2 of the code, so you roll the code back to version 1. There's a problem though:

```js
const person = {
  firstName: databaseRecord.firstName,
  lastName: databaseRecord.firstName,
  age: Date.now() - (new Date(databaseRecord.birthdate)).getTime(),
}
```

`databaseRecord` no longer has a `birthdate` column, because it was removed in the database, causing an error. How can we keep our database structure and code synchronized?

## Migrations

Migrations allow us to describe the steps to create our database structure as code that can be version controlled. For example, we can describe how to make the first version of the table:

```js
exports.up = knex => {
  return knex.schema.createTable("person", table => {
    table.increments("id")
    table.string("first_name")
    table.string("last_name")
    table.date("birth_date")
  })  
}

exports.down = knex => {
  return knex.schema.dropTableIfExists("person")
}
```

When this migration is run, it will create a `person` table with 4 fields. Just as importantly, the migration can be "un-run", which will drop the table (this is called "rolling back" a migration). This file gets commited along with the rest of the code.

Later, a second migration is made:

```js
exports.up = knex => {
  return knex.schema.table("person", table => {
    table.dropColumn("birth_date")
  })  
}

exports.down = knex => {
  return knex.schema.table("person", table => {
    table.date("birth_date")
  })
}
```

This says to drop the `birth_date` column when you run the migration and to re-add the column when the migration is rolled back. This can also be saved along with the code in version control. Now, if we revert to an earlier version of the code, we've also rolled back Knex's instructions on how to build the database.

## Creating a Migration

To create a migration, run:

```
npx knex migrate:make descriptive-name-of-what-will-be-in-the-migration
```

This creates a new migration file in the `migrations` folder by default. Since migrations are intended to be run and rolled back in a specific order, the file will have a timestamp with the date and time it was created added to the file name.

```js
exports.up = function(knex) {
  
};

exports.down = function(knex) {
  
};
```

The first function defines what happens when the migration is run, and the second is what happens when a migration is rolled back. They should mirror each other- if you're creating a table in `.up`, you should be dropping the table in `.down` (and vice-versa).

## Creating a Table

To create a table in a migration function, use `knex.schema.createTable`:

```js
exports.up = knex => {
  return knex.schema.createTable("table_name_goes_here", table => {
    // Create columns here
  })  
}
```

The mirror action for `createTable` is `dropTableIfExists`:

```js
exports.down = knex => {
  return knex.schema.dropTableIfExists("table_name_goes_here")
}
```

The `table` parameter in the function passed into `createTable` has a few methods that help define columns. Some examples:

* `table.increments("column_name_here_defaults_to_id")` - An auto-incrementing ID
* `table.string("column_name_here")` - General string storage
* `table.integer("column_name_here")` - Integers
* `table.decimal("column_name_here")` - Decimals
* `table.date("column_name_here")` - YYYY-MM-DD dates
* `table.datetime("column_name_here")` - Dates with times
* `table.boolean("column_name_here")` - True/False

## Altering a Table

To alter a table, use `knex.schema.table`:

```js
exports.up = knex => {
  return knex.schema.table("table_name_goes_here", table => {
    // Alter table here
  })  
}
```

To create new columns, use the same methods used in `createTable`. To drop a column, use `table.dropColumn(column_name_here)`. You can also rename a column with `table.dropColumn(old_name, new_name)`. Don't forget to mirror these in `exports.down`!

## Watch Out!

* One of the easiest mistakes to make when writing a migration is that the `.up` and `.down` functions **must** return a promise. This is usually as easy as making sure the `return` keyword is present.
