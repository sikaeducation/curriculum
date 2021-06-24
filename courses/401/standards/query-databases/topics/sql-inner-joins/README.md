# SQL: Inner Joins

Writing queries for one table is straight-forward enough.

```sql
SELECT *
FROM student;

SELECT *
FROM instructor;
```

But how would we get all of one instructor's students?

## Joins

```sql
SELECT student.*
FROM student
INNER JOIN student.instructor_id = instructor.id
WHERE instructor.name = "Joe Satriani";
```

Joins add more tables to a query that you can display with `SELECT` and filter with `WHERE`.

* As you add tables, start prefixing the columns you're selecting and filtering with the table name.
* Joins happen between the primary key of one table (usually the ID) and the foreign key of another table. In other words, if Joe Satriani is an `instructor` with an ID of `9` (primary key), than his students probably have an `instructor_id` column with a `9` in it (foreign key). Your join statement just says that you want to match up the primary key to the foreign key.

## Writing a Join

Let's say you have a data model like this:

(image of data model with 4 tables)

To traverse these tables, you need to pick one to start with and join your way across.

```sql
SELECT table_1.some_column, table_4.some_column
FROM table_1
INNER JOIN table_1.some_foreign_key = table_2.id
INNER JOIN table_2.some_foreign_key = table_3.id
INNER JOIN table_3.some_foreign_key = table_4.id;
```

Some rules to live by:

* Don't worry too much about the logic of the joins right now. If you need data from two tables, just find a way to walk from one to the other. The logic of what to display is handled by `SELECT`, the logic of what to filter out is handled by the `WHERE` clause.
* The order of the columns in a join statement is not important.

## Watch Out!

* Much like an `AND` or `OR` depends on the presence of a `WHERE`, you need a `FROM` to `INNER JOIN` off of.

## Deep Dive

When you make an INNER JOIN, the database starts by making a cartesian product of the two tables. The clauses in your INNER JOIN eliminate everything except the records in the cartesian product where the primary key matches the foreign key.
