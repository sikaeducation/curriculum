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
  age: Date.now() - (new Date(databaseRecord.birthDate)).getTime(),
}
```

Then, the birth date is removed in version 2:

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

You find a problem with version 2 of the code, so you roll the code back to version 1. There's a problem though:

```js
const person = {
  firstName: databaseRecord.firstName,
  lastName: databaseRecord.firstName,
  age: Date.now() - (new Date(databaseRecord.birthDate)).getTime(),
}
```

`databaseRecord` no longer has a `birthDate` property because it was removed in the database. How can you keep your database structure and code synchronized?

## Migrations

Migrations describe the steps to create a database structure as code that can be version controlled. For example, to describe how to make the first version of the table, you may write this migration:

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

When this migration is run, it will create a `person` table with 4 fields. Just as importantly, the migration can be "un-run", which will drop the table. This is called rolling back a migration.

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

This says to drop the `birth_date` column when you run the migration and to re-add the column when the migration is rolled back. This can also be saved along with the code in version control. If you revert to an earlier version of the code, you can also roll back Knex's instructions on how to build the database.

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

The `.up` method defines what happens when the migration is run and the `.down` method defines what happens when the migration is rolled back. They should mirror each other; if you create a table in `.up` you should drop that table in `.down` and vice-versa.

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

* <strong>`table.increments("column_name_here_defaults_to_id")`</strong>: An auto-incrementing ID
* <strong>`table.string("column_name_here")`</strong>: General string storage
* <strong>`table.integer("column_name_here")`</strong>: Integers
* <strong>`table.decimal("column_name_here")`</strong>: Decimals
* <strong>`table.date("column_name_here")`</strong>: YYYY-MM-DD dates
* <strong>`table.datetime("column_name_here")`</strong>: Dates with times
* <strong>`table.boolean("column_name_here")`</strong>: True/False

## Altering a Table

To alter a table, use `knex.schema.table`:

```js
exports.up = knex => {
  return knex.schema.table("table_name_goes_here", table => {
    // Alter table here
  })  
}
```

To create new columns, use the same methods used in `createTable`. To drop a column, use `table.dropColumn(column_name_here)`. Columns can be renamed with `table.dropColumn(old_name, new_name)`. Don't forget to mirror these alterations in the `exports.down` method.

## Watch Out!

* One of the easiest mistakes to make when writing a migration is that the `.up` and `.down` functions **must** return a promise. That means migration methods should look like this:

```
exports.up = knex => {
  return knex.schema.createTable("table_name_goes_here", table => {
    // Table schema here
  })  
}
```

Not this:

```
exports.up = knex => {
  knex.schema.createTable("table_name_goes_here", table => {
    // Table schema here
  })  
}
```

## Additional Resources

| Resource | Description |
| --- | --- |
| [Knex: Migrations](https://knexjs.org/#Migrations) | Official Knex docs on Migrations |
| [Knex: Seeds](https://knexjs.org/#Seeds-CLI) | Official Knex docs on Seeds |
| [Migrations and Seeding](https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261) | Blog post about migrations and seeds with Knex |
| [Video: Knex Migrations and Seeds](https://www.youtube.com/watch?v=ipAH7lMfq7k) | Troy Amelotte's guide to Knex migrations and seeds |
