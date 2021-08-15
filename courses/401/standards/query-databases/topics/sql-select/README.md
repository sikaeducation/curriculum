# SQL: `SELECT`

The most useful SQL command is the `SELECT` query, which has this format:

```sql
SELECT first_name, last_name
FROM user;
```

Conversationally, you could describe this as "Show me the first and last name from every record in the user table."

## Watch Out!

* SQL is white-space insensitive. Putting clauses on new lines is a convention for readability, a query doesn't terminate until a `;`.
* It's conventional to put SQL keywords in UPPERCASE and things specific to your database (like column names) in snake_case. This helps the structure of the query stand out from the data.
* Don't forget the semicolon!

## Additional Resources

| Resource | Description |
| --- | --- |
| [W3Schools: `SELECT`](https://www.w3schools.com/sql/sql_select.asp) | W3Schools' `SELECT` reference |
| [SQL Zoo: `SELECT` basics](https://sqlzoo.net/wiki/SELECT_basics) | SQL Zoo's interactive `SELECT` basics tutorial |
| [SQL Zoo: `SELECT` names](https://sqlzoo.net/wiki/SELECT_names) | SQL Zoo's interactive `SELECT` names tutorial |
