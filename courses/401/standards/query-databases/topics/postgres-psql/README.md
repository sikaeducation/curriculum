# Postgres: `psql`

## Launching `psql`

To start `psql`, use the `psql` command followed by the name of the database you want to connect to:

```bash
sudo -u postgres psql database_name_goes_here
```

The `sudo -u postgres` prefix runs the `psql` command as the `psql` command as the `postgres` user. This also works with PostgreSQL connection strings used to connect to remote databases:

```bash
psql postgresql://username:password@database.server.com:5432/database_name
```

Once inside `psql`, you can quit with `\q` or by pressing `ctrl` + `d`. Note that this is different than the command used to kill other processes in the CLI, `ctrl` + `c`.

## Common `psql` Commands

* **`\d`**: Lists all the tables in the database
* <strong>`\d table_name_goes_here`</strong>: List all the columns in a table
* **`\l`**: List all the databases
* **`\q`**: Quit `psql`

Note that none of these commands end with `;`; These commands display metadata about the database, but they're not SQL commands.

## Running an External SQL File

To run a `.sql` file with `psql, use the `-f` flag:

```bash
sudo -u postgres psql database_name_goes_here -f some-sql-file.sql
```

If you want to save the output to a file, use the `>` redirect operator:

```bash
sudo -u postgres psql database_name_goes_here -f some-sql-file.sql > sql-results.txt
```

## Additional Resources

| Resource | Description |
| --- | --- |
| [Postgre Guide: `psql`](http://postgresguide.com/utilities/psql.html) | Postgres Guide's cheatsheet on `psql` |
| [SQL Zoo: `psql`](https://sqlzoo.net/wiki/Starting_Postgres) | SQL Zoo's cheatsheet on `psql` |
| [PostgreSQL: `psql` reference](https://www.postgresql.org/docs/13/app-psql.html) | Official `psql` documentation |
