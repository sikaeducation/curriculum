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

## Additional Resources

| Resource | Description |
| --- | --- |
| [W3Schools: `WHERE`](https://www.w3schools.com/sql/sql_where.asp) | W3Schools' `WHERE` reference |
| [W3Schools: `LIKE`](https://www.w3schools.com/sql/sql_like.asp) | W3Schools' `LIKE` reference |
| [W3Schools: `AND` and `OR`](https://www.w3schools.com/sql/sql_and_or.asp) | W3Schools' `AND` and `OR` reference |
| [SQL Zoo: `SELECT` from `world`](https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial) | SQL Zoo's interactive `SELECT` from `world` tutorial |
| [SQL Zoo: `SELECT` from `nobel`](https://sqlzoo.net/wiki/SELECT_from_Nobel_Tutorial) | SQL Zoo's interactive `SELECT` from `novel` tutorial |
| [SQL Zoo: `SELECT` within `SELECT`](https://sqlzoo.net/wiki/SELECT_within_SELECT_Tutorial) | SQL Zoo's interactive `SELECT` within `SELECT` tutorial |
| [SQL Zoo: `SUM` and `COUNT`](https://sqlzoo.net/wiki/SUM_and_COUNT) | SQL Zoo's interactive `SUM` and `COUNT` tutorial |
| [SQL Zoo: `SELECT` card game](https://sqlzoo.net/40289347/sql3/) | SQL Zoo's interactive `SELECT` game |
