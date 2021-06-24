# SQL: SELECT

The most useful SQL command to learn is the `SELECT` query. It has this format:

```sql
SELECT one, or, more, columns
FROM some_table;
```

In normal language, you could describe this as "Show me the columns "one", "or", "more", and "columns" from every record in the "some_table" table.


## Watch Out!

* SQL is white-space insensitive. Putting clauses on new lines is a convention for readability, a query doesn't terminate until a `;`.
* It's conventional to put SQL keywords in UPPERCASE and things specific to your database (like column names) in snake_case. This helps the structure of the query stand out from the data.
* Don't forget the semicolon!
