# SQL: WHERE

SQL statements are made up of several "clauses". We've seen a `SELECT` clause (which says what we want to see), and a `FROM` clause. (which says where to get it from). Next, look at the `WHERE` clause, which says what to leave out.

```sql
SELECT one, or, more, columns
FROM some_table;
WHERE some_column = "some condition";
```

If you were trying to get username and display name for a user with an ID of `3`, you might write this query:

```sql
SELECT username, display_name
FROM user
WHERE id = 3;
```

You could also return every column by using the wildcare (`*`):

```sql
SELECT *
FROM user
WHERE id = 3;
```

Or, you could return every record by leaving off the `WHERE` clause:

```sql
SELECT username, display_name
FROM user;
```

## AND

`AND` allows you to have multiple `WHERE` clauses.

```sql
SELECT *
FROM user;
WHERE first_name = "Miles"
AND last_name = "Davis";
```

## NOT

Ordinarily in a `WHERE` clause, we use `=` to make the condition. We can also invert that:

```
SELECT *
FROM user;
WHERE first_name NOT "Miles";
```

This gives us every `user` whose first_name is not "Miles."

## LIKE

Ordinarily in a `WHERE` clause, we use `=` to make the condition. We can also use `LIKE` and `%` to search for partial matches. This is great for searching.

```sql
SELECT *
FROM user;
WHERE last_name LIKE "%vi%";
```

This gives us every `user` whose name contains `vi`. You can also restrict it to names that start or end with things using "Mil%, "%les", or "M%s".

## Watch Out!

* Don't forget the semicolon!
* Columns that you use in your `WHERE` clause **do not** have to also be in your `SELECT` clause`. ``SELECT` what you want to see in the result, `WHERE` what you want to filter on.
