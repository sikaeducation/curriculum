# Intro to ORMs

Relational data is stored flat:

**teacher**

| id | name
| --- | --- |
| 1 | Zeke |
| 2 | Yvette |

**student**

| id | name | teacher_id |
| --- | --- | --- |
| 1 | Alice | 1 |
| 2 | Bob | 2 |
| 3 | Carrie | 1 |

However, that data is usually nested in applications:

```js
[{
  id: 1,
  name: "Alice",
  teacher: {
    id: 1,
    name: "Zeke",
  },
},{
  id: 2,
  name: "Bob",
  teacher: {
    id: 2,
    name: "Yvette",
  },
},{
  id: 3,
  name: "Carrie",
  teacher: {
    id: 1,
    name: "Zeke",
  },
}]
```

How do you translate between these two styles? This problem is called the object-relational impedance mismatch and it's a common issue with database-backed applications. It can be solved a variety of ways, but most of them involve programmatically translating between the two formats. Doing this by hand in Node.js might look like this:

```js
const teachers = await Teacher.query()
const students = await Student.query()

const studentsWithTeachers = students.map(student => {
  student.teacher = teachers.find(student.teacher_id)
  delete student.teacher_id
  return student
})
```

This works, but it's inefficient and gets exponentially more difficult to read when additional 1:M and M:N relationships are added.

## ORMs

Another solution to the object-relational impedance mismatch is to use an object-relational mapper, or ORM. ORMs rely on models that represent each table and define what relationships exist between them. Once these models are established, the ORM gives you efficient ways to declare what relational data you want to read, create, update, or delete and outputs the data in a way that's useful to applications. You query the database for related records using the ORM and let it design the query and format the response for you. For example, using the Node.js ORM Objection:

```js
const studentsWithTeachers = await Student.query().withGraphFetched("teacher")

/*
[{
  id: 1,
  name: "Alice",
  teacher: {
    id: 1,
    name: "Zeke",
  },
},{
  id: 2,
  name: "Bob",
  teacher: {
    id: 2,
    name: "Yvette",
  },
},{
  id: 3,
  name: "Carrie",
  teacher: {
    id: 1,
    name: "Zeke",
  },
}]
*/
```

## Watch Out!

ORMs are powerful, but they're also too general-purpose to work efficiently in every scenario. In particular, the N+1 problem occurs when an ORM executes separate database queries for a large list of related items instead of making one large query and associating the related records in memory. Most ORMs have a way to work around this called eager loading.

## Additional Resources

| Resource | Description |
| --- | --- |
| [Wikipedia: Object-Relational Mapping](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) | Wikipedia's article on ORMs |
| [Wikipedia: Object-Relational Impedance Mismatch](https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch) | Wikipedia's article on the object-relational impedance mismatch |
| [Stack Overflow: What is the N+1 Problem?](https://stackoverflow.com/questions/97197/what-is-the-n1-selects-problem-in-orm-object-relational-mapping) | Stack Overflow answers describing the N+1 query problem |
| [Video: Introduction to Object-Relational Mapping](https://www.youtube.com/watch?v=dHQ-I7kr_SY) | LaunchCode's overview of Object-Relational mapping |
