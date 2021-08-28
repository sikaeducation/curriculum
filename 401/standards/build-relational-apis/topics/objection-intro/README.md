# Intro to Objection

Objection is a JavaScript ORM built on top of Knex. It offers a `Model` class that can be extended to create related models, making it easier to create, read, update, and delete data from the database.

## Installing Objection

To install Objection in a Node project:

```bash
npm install objection
```

Keep in mind that Objection requires Knex, so a full install requires also installing that and a database driver as well:

```js
npm install objection knex pg
```

## Configuring Objection

After you configure Knex, pass it into the `.knex` method of the `Model` class:

```js
const { Model } = require("objection")
const database = require("./database-connection")
const Model.knex(database)
```

The `Model` class is the primary way to interact with Objection.

## JavaScript Classes

Classes are a kind of blueprint for creating objects that are used in many programming languages, and are now available in JavaScript. Objection makes heavy use of classes. Some key concepts and vocabulary:

* Classes are blueprints for creating objects.
* Classes contain methods and properties, just like JavaScript objects.
* Static methods and properties belong to class, instance methods and properties belong to objects created with the class
* Classes can inherit methods and properties from other classes, which allows you to create hierarchies of classes that go from general to specific.


Classes have a lot of features, but these are the ones relevant to using Objection:

```js
class SomeClass extends SomeOtherClass {
  someProperty = "Some value"
  static someStaticProperty = "Some other value"
  someMethod(){
    return "Some value"
  }
  static someStaticMethod(){
    return "Some other value"
  }
  get someGetterProperty(){
    return "Some value"
  }
  static get someStaticGetterProperty(){
    return "Some other value"
  }
}

class SomeOtherClass {
  someInheritedProperty = "Some inherited value"
  someInheritedMethod(){
    return "Some inherited value"
  }
  static someStaticInheritedMethod(){
    return "Some inherited value"
  }
  static someStaticInheritedProperty = "Some inherited value"
}

const someObject = new SomeClass()
someObject.someProperty // "Some value"
someObject.someMethod() // "Some value"
someObject.someGetterProperty // "Some value"
someObject.someInheritedProperty // "Some inherited value"
someObject.someInheritedMethod() // "Some inherited value"

SomeClass.someStaticProperty // "Some other value"
SomeClass.someStaticMethod() // "Some other value"
SomeClass.someStaticGetterProperty // "Some other value"
SomeClass.someStaticInheritedProperty // "Some inherited value"
SomeClass.someStaticInheritedMethod() // "Some inherited value"
```

1. Classes are declared with the `class` keyword and the names are traditionally PascalCased.
2. The `extends` keyword allows one class to inherit all the methods and properties from another class, meaning that any property or method in the class being extended can be used by the extending class.
3. Properties are declared similarly to variables, but don't use `const` or `let`
4. Methods use a function syntax called method shorthand that otherwise works identically to other kinds of functions
5. The `get` keyword is used to create properties that are calculated like methods. Unlike regular properties, this allows them to be calculated dynamically.
6. Objects are created from classes using the `new` keyword.

## Watch Out!

* Objection still requires that knex and a suitable database driver are installed. Additionally, the database needs to be migrated and seeded and the database connection needs to be established.
* Properties and methods aren't separated by commas in classes the way they are in regular JS objects

## Additional Resources

| Resource | Description |
| --- | --- |
| [Objection.js](https://vincit.github.io/objection.js/) | The official Objection.js docs |
| [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) | MDN's reference on JavaScript classes |
| [Video: Objection.js Tutorial](https://www.youtube.com/watch?v=zbIl2kuP7tE) | Productioncoder's guide to Objection |
