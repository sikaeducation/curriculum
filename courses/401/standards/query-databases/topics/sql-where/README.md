# SQL: `WHERE`

SQL statements are made up of several sections called clauses. `SELECT` clauses declare what you want to see and a `FROM` clause declares where to get the data from. The `WHERE` clause declares which data to keep and which data to filter out. For example, if you're trying to get the username and display name for a user with an ID of `3`, you might write this query:

```sql
SELECT username, display_name
FROM user
WHERE id = 3;
```

If you want to search a user by their username:

```sql
SELECT username, display_name
FROM user
WHERE username = 'trumpet_against_darkness';
```

You can also get every user that matches some criteria:

```sql
SELECT *
FROM user
WHERE is_active = 1
```

In each case, the `WHERE` clause filters out records from the `FROM` clause that don't meet the criteria.

## `AND` and `OR`

`AND` allows you to have multiple `WHERE` clauses. Just like boolean logic, `AND` requires both conditions to be true:

```sql
SELECT *
FROM user;
WHERE first_name = 'Miles'
AND last_name = 'Davis';
```

While `OR` requires only one of the conditions to be true:

```sql
SELECT *
FROM user;
WHERE instrument = 'trumpet'
OR instrument = 'guitar';
```

## `NOT`

Ordinarily in a `WHERE` clause, `=` defines the condition. You can also invert conditions with `NOT`:

```sql
SELECT *
FROM user;
WHERE first_name NOT 'Miles';
```

This gives us every `user` whose `first_name` is not `'Miles'`.

## `LIKE`

You can also use `LIKE` and `%` to return partial matches, which is great for searching:

```sql
SELECT *
FROM user;
WHERE last_name LIKE '%vi%';
```

This returns every `user` whose name contains `vi`, such as Marvin and Vivian. You can also restrict it to names that start or end with things by moving the `%`, such as `'Mil%'`, `'%les'`, or `'M%s'`.

## Watch Out!

* String comparisons in SQL must be done with single quotes
* Don't forget the semicolon in SQL statements
* Columns that you use in your `WHERE` clause do not have to also be in your `SELECT` clause. `SELECT` what you want to see in the result, use `WHERE` to determine what to filter on.

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
