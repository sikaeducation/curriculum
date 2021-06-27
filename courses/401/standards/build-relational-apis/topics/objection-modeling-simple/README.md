# Objection: Simple Modeling

## Modeling

```js
class Dog extends Model {
  static tableName = "dog"
}
```

## Finding

```js
const dogs = await Dog.query()
const dog = await Dog.query().findById(1)
```

## Virtual Attributes

```js
class Dog extends Model {
  static tableName = "dog"
  age(){
  }
}
```

## Creating

```js
const newDog = await Dog.query().insert({
  name: "Scruffers",
  birthDate: "2020-01-14",
})
```

## Updating

```js
const updatedDog = await Dog
  .query()
  .findBy(1)
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

```js
await Dog
  .query()
  .delete()
  .where("name", "Scruffers")

await Dog
  .query()
  .deleteById(1)
```
