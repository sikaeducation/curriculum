# Objection: Simple Modeling and Querying

Objection models are streamlined way to create, read, update, and delete data from databases with JavaScript. These are some examples of how to model and query single tables in a database:

## Modeling

To create Objection models that can talk to database tables, make a class that extends the `Model` class and set it's `static tableName` to the name of the table in the database.

```js
class Dog extends Model {
  static tableName = "dog"
}
```

These models are usually put into individual JavaScript files and exported as modules.

```js
// models/Dog.js
const { Model } = require("objection")

class Dog extends Model {
  static tableName = "dog"
}

module.exports = Dog
```

Any file that needs to query something from the `dog` table can now import the `Dog` model:

```js
// index.js
const Dog = require("./models/Dog")
```

## Finding

Once a model has been imported, the `.query()` method can be used to retrieve every dog record from the database. Chaining the `.findById(id)` method to the end of it will only return the given ID, while `.where(column, value)` allows you to search on any property. If you only want the first match from `.where()`, add `.first()` to the end.

```js
const dogs = await Dog.query()
const dog = await Dog.query().findById(1)
const dog = await Dog.query().where("color", "black")
const dog = await Dog.query().where("age", ">" 10)
const dog = await Dog.query().where("name", "Scruffers").first()
```


Note that these, and all other query methods in Objection return promises and must be `await`ed in an `async function` or `.then`ed.

```js
app.get("/dogs", async (request, response) => {
  const dogs = await Dog.query()

  response.json({ dogs })
})
```

`async`/`await` syntax works well in Express because errors are automatically caught by error handling routes.

### Virtual Attributes

Rather than doing calculations based on data in routes, you can store them as part of models. For example, a `dog` database record might store a dog's birthdate, but its age is calculated dynamically. This is called a virtual attribute.

```js
class Dog extends Model {
  static tableName = "dog"
  age(){
    return (Date.now() - Date.parse(this.birthdate)) / 1000 / 60 / 60 / 24 / 365
  }
  static get virtualAttributes(){
    return ["age"]
  }
}
```

Note that the `age` method isn't static, and properties from database records are referred to from the built-in `this` object.
Additionally, the static getter `virtualAttributes` returns an array with the names of every virtual attribute that should be included along with query results.

## Creating

To create new database records with models, chain `.insert()` to the `.query()` method and pass it an object with the values you would like to add to this table.

```js
const newDog = await Dog.query().insert({
  name: "Scruffers",
  birthdate: "2020-01-14",
})
```

Make sure that the keys in the object match the column names. It's conventional for database column names to be snake_case, so you may need to convert them.

## Updating

Existing data can be updated by finding a relevant record with `.findBy()` or `.findById()` and calling `.patch()` with the data that should be updated.

```js
const updatedDog = await Dog
  .query()
  .findById(1)
  .patch({
    name: "Mr. Scruffers",
  })

const anotherUpdatedDog = await Dog
  .query()
  .patch({
    name: "Mr. Scruffers",
  }).where("name", "Scruffers")
```

## Deleting

To delete records from the database, either use the `.deleteById()` method or the `.delete()` method along with the `.where()` method.

```js
await Dog
  .query()
  .delete()
  .where("color", "white")

await Dog
  .query()
  .deleteById(1)
```

You can also chain `.first()` to `.where()` queries here.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Objection: Modeling](https://vincit.github.io/objection.js/guide/models.html#examples) | Official Objection docs on models |
| [Objection: Querying](https://vincit.github.io/objection.js/guide/query-examples.html) | Official Objection docs on querying |
| [Knex: Query Builder](https://knexjs.org/#Builder) | Official Knex docs on querying syntax |
